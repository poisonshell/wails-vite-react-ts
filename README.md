# Wails React TypeScript Template

A Wails desktop application template with React, TypeScript, TailwindCSS, and TanStack Router.

## Features

- Wails 2.10.2 with Go backend
- React 19 with TypeScript 5.7
- Vite 7
- TailwindCSS 4 
- TanStack Router 1.131 


## Quick Start

## Requirements

- Go 1.24+
- Node.js 18+
- NPM
- Wails CLI 2.8+


### Using as Wails Template
```bash
# Initialize new project with this template
wails init -n myapp -t https://github.com/poisonshell/wails-vite-react-ts
cd myapp

# Install dependencies and start development
cd frontend && npm install && cd ..
wails dev
```

### Manual Clone
```bash
# Clone and setup
git clone <repo-url> your-app-name
cd your-app-name
cd frontend && npm install && cd ..

# Development
wails dev

# Build
wails build

Optional: inject version at build time

```bash
wails build -ldflags "-X 'main.version=1.1.0'"
```
```

## Project Structure

```
├── frontend/src/
│   ├── components/     # UI components
│   ├── routes/         # File-based routes
│   ├── hooks/          # Custom React hooks
│   └── styles/         # CSS files
├── app.go              # Go backend
├── main.go             # Entry point
└── wails.json          # Wails config
```

## License

MIT
