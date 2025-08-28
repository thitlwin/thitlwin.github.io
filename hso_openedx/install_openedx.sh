#!/bin/bash
# OpenEDX Tutor Installation Script for GCP VM
# VM: hso-staging (c2-standard-4, Ubuntu 24.04 Noble)
# External IP: 34.66.12.84

set -e  # Exit on any error

echo "🚀 Starting OpenEDX Tutor installation on GCP VM..."
echo "VM: hso-staging (c2-standard-4)"
echo "OS: Ubuntu 24.04 Noble"
echo "External IP: 34.66.12.84"
echo "==========================================\n"

# Function to print status
print_status() {
    echo "✅ $1"
}

print_error() {
    echo "❌ Error: $1"
    exit 1
}

# Step 1: Update system
echo "📦 Step 1: Updating system packages..."
sudo apt update || print_error "Failed to update packages"
print_status "System packages updated"

# Step 2: Install Docker
echo "🐳 Step 2: Installing Docker..."
sudo apt install -y docker.io || print_error "Failed to install Docker"
print_status "Docker installed"

# Step 3: Start and enable Docker
echo "🔧 Step 3: Starting and enabling Docker service..."
sudo systemctl enable docker || print_error "Failed to enable Docker"
sudo systemctl start docker || print_error "Failed to start Docker"
print_status "Docker service started and enabled"

# Step 4: Install Docker Compose V2
echo "📋 Step 4: Installing Docker Compose V2..."
sudo apt install -y docker-compose-v2 || print_error "Failed to install Docker Compose V2"

# Verify Docker Compose installation
if docker compose version >/dev/null 2>&1; then
    print_status "Docker Compose V2 installed successfully"
    docker compose version
else
    print_error "Docker Compose V2 installation failed"
fi

# Step 5: Add user to docker group
echo "👤 Step 5: Adding user to docker group..."
sudo usermod -aG docker $USER || print_error "Failed to add user to docker group"
print_status "User added to docker group"

# Step 6: Install Docker Buildx
echo "🔨 Step 6: Installing Docker Buildx..."
mkdir -p ~/.docker/cli-plugins/

# Get latest buildx version
BUILDX_VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | grep tag_name | cut -d '"' -f 4) || print_error "Failed to get buildx version"

# Download and install buildx
curl -L "https://github.com/docker/buildx/releases/download/${BUILDX_VERSION}/buildx-${BUILDX_VERSION}.linux-amd64" -o ~/.docker/cli-plugins/docker-buildx || print_error "Failed to download buildx"

chmod +x ~/.docker/cli-plugins/docker-buildx || print_error "Failed to make buildx executable"
print_status "Docker Buildx installed (${BUILDX_VERSION})"

# Step 7: Install Python dependencies
echo "🐍 Step 7: Installing Python dependencies..."
sudo apt install -y python3-pip python3.12-venv || print_error "Failed to install Python dependencies"
print_status "Python dependencies installed"

# Step 8: Create Python virtual environment
echo "🏗️  Step 8: Creating Python virtual environment..."
python3 -m venv hso-openedx-venv || print_error "Failed to create virtual environment"
print_status "Virtual environment created: hso-openedx-venv"

# Step 9: Install Tutor
echo "🎓 Step 9: Installing Tutor..."
source hso-openedx-venv/bin/activate || print_error "Failed to activate virtual environment"
pip install --upgrade pip || print_error "Failed to upgrade pip"
pip install "tutor[full]" || print_error "Failed to install Tutor"
print_status "Tutor installed successfully"

# Verify Tutor installation
if tutor --version >/dev/null 2>&1; then
    TUTOR_VERSION=$(tutor --version)
    print_status "Tutor version: ${TUTOR_VERSION}"
else
    print_error "Tutor installation verification failed"
fi

# Step 10: Create helper scripts
echo "📝 Step 10: Creating helper scripts..."

# Create launch script
cat > launch_tutor.sh << 'EOF'
#!/bin/bash
echo "🚀 Launching OpenEDX with Tutor..."
source hso-openedx-venv/bin/activate
tutor local launch
EOF

# Create status check script
cat > check_status.sh << 'EOF'
#!/bin/bash
echo "📊 Checking OpenEDX status..."
source hso-openedx-venv/bin/activate
tutor local status
EOF

# Create stop script
cat > stop_tutor.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping OpenEDX..."
source hso-openedx-venv/bin/activate
tutor local stop
EOF

# Create restart script
cat > restart_tutor.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting OpenEDX..."
source hso-openedx-venv/bin/activate
tutor local restart
EOF

# Make scripts executable
chmod +x launch_tutor.sh check_status.sh stop_tutor.sh restart_tutor.sh
print_status "Helper scripts created"

# Step 11: Create GCP firewall rules script
cat > setup_firewall.sh << 'EOF'
#!/bin/bash
echo "🔥 Setting up GCP firewall rules for OpenEDX..."
echo "Run these commands from your local machine with gcloud CLI:"
echo ""
echo "# Allow OpenEDX LMS (port 8000)"
echo "gcloud compute firewall-rules create openedx-lms --allow tcp:8000 --source-ranges 0.0.0.0/0 --description 'OpenEDX LMS access'"
echo ""
echo "# Allow OpenEDX CMS/Studio (port 8001)"
echo "gcloud compute firewall-rules create openedx-cms --allow tcp:8001 --source-ranges 0.0.0.0/0 --description 'OpenEDX CMS/Studio access'"
echo ""
echo "# Allow OpenEDX additional ports (if needed)"
echo "gcloud compute firewall-rules create openedx-additional --allow tcp:8002-8010 --source-ranges 0.0.0.0/0 --description 'OpenEDX additional services'"
EOF

chmod +x setup_firewall.sh
print_status "Firewall setup script created"

# Step 12: Display completion message
echo ""
echo "🎉 INSTALLATION COMPLETED SUCCESSFULLY! 🎉"
echo "=========================================="
echo ""
echo "📋 Next Steps:"
echo "1. Log out and log back in (to apply docker group changes):"
echo "   exit"
echo "   # Then SSH back in"
echo ""
echo "2. Set up GCP firewall rules (run from your local machine):"
echo "   ./setup_firewall.sh"
echo ""
echo "3. Launch OpenEDX:"
echo "   ./launch_tutor.sh"
echo ""
echo "4. Check status:"
echo "   ./check_status.sh"
echo ""
echo "🌐 Access URLs (after launch):"
echo "• LMS (Learning Management System): http://34.66.12.84:8000"
echo "• CMS (Studio): http://34.66.12.84:8001"
echo ""
echo "🛠️  Available Commands:"
echo "• Launch: ./launch_tutor.sh"
echo "• Status: ./check_status.sh"
echo "• Stop: ./stop_tutor.sh"
echo "• Restart: ./restart_tutor.sh"
echo ""
echo "📊 VM Specifications:"
echo "• Instance: hso-staging"
echo "• Type: c2-standard-4 (4 vCPUs, 16 GB RAM)"
echo "• Disk: 100 GB Balanced persistent disk"
echo "• OS: Ubuntu 24.04 Noble"
echo "• External IP: 34.66.12.84"
echo ""
echo "⚠️  Important Notes:"
echo "• First launch may take 15-30 minutes"
echo "• Ensure firewall rules are configured"
echo "• Default admin credentials will be shown during launch"
echo ""
echo "🎓 Happy learning with OpenEDX!"