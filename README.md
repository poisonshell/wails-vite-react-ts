# Wails React TypeScript Template

A Wails desktop application template with React, TypeScript, TailwindCSS, and TanStack Router.

## Features

- Wails 2.9+ with Go backend
- React 18 with TypeScript 5
- Vite 6 for fast development
- TailwindCSS 3 for styling
- TanStack Router for file-based routing
- Custom UI components and hooks

## Quick Start

## Requirements

- Go 1.21+
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
