# Build Scripts

This directory contains various build and development scripts for the Wails project.

## 📋 Available Scripts

### 🚀 Development & Setup

| Script | Description | Usage |
|--------|-------------|-------|
| `setup.sh` | Initial project setup and dependency installation | `./scripts/setup.sh` |
| `dev.sh` | Start development server with hot reload | `./scripts/dev.sh` |
| `dev.bat` | Windows version of development script | `scripts\dev.bat` |

### 🔨 Building

| Script | Description | Usage |
|--------|-------------|-------|
| `build.sh` | Build for current platform | `./scripts/build.sh` |
| `build.bat` | Windows version of build script | `scripts\build.bat` |
| `build-all.sh` | Build for all platforms | `./scripts/build-all.sh` |
| `build-windows.sh` | Build specifically for Windows | `./scripts/build-windows.sh` |
| `build-macos.sh` | Build specifically for macOS | `./scripts/build-macos.sh` |
| `build-linux.sh` | Build specifically for Linux | `./scripts/build-linux.sh` |

### 🧹 Maintenance

| Script | Description | Usage |
|--------|-------------|-------|
| `clean.sh` | Clean build artifacts and dependencies | `./scripts/clean.sh` |

## 🛠️ Prerequisites

Before running any scripts, ensure you have:

- **Go 1.21+** installed
- **Node.js 18+** installed
- **Wails CLI** installed (`go install github.com/wailsapp/wails/v2/cmd/wails@latest`)

## 🚀 Quick Start

For new projects:

```bash
# 1. Setup everything
./scripts/setup.sh

# 2. Start development
./scripts/dev.sh

# 3. Build when ready
./scripts/build.sh
```

## 🪟 Windows Users

Windows users can use the `.bat` files:

```cmd
REM Start development
scripts\dev.bat

REM Build application
scripts\build.bat
```

## 📦 Build Outputs

All builds are placed in the `build/` directory:

```
build/
├── bin/                    # Current platform build
├── windows-amd64/         # Windows 64-bit
├── darwin-amd64/          # macOS Intel
├── darwin-arm64/          # macOS Apple Silicon
└── linux-amd64/           # Linux 64-bit
```

## 🔧 Script Features

All scripts include:

- ✅ **Error checking** - Validates dependencies and environment
- 📦 **Auto-installation** - Installs frontend dependencies if needed
- 🎯 **Platform detection** - Automatically detects your platform
- 📝 **Clear output** - Provides helpful feedback and instructions
- ⚡ **Fast execution** - Optimized for quick builds

## 🐛 Troubleshooting

### Common Issues

1. **Permission denied**: Make scripts executable with `chmod +x scripts/*.sh`
2. **Wails not found**: Install with `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
3. **Node.js not found**: Install from [nodejs.org](https://nodejs.org/)
4. **Build fails**: Run `./scripts/clean.sh` and try again

### Getting Help

If you encounter issues:

1. Check that all prerequisites are installed
2. Run `./scripts/setup.sh` to ensure proper setup
3. Check the Wails documentation: [wails.io](https://wails.io)

## 💡 Tips

- Use `./scripts/dev.sh` for development with hot reload
- Use `./scripts/build-all.sh` to build for all platforms at once
- Run `./scripts/clean.sh` if you encounter build issues
- The development server includes router devtools for debugging navigation
