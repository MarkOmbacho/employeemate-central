# Employee Management System (EMS)

A comprehensive, role-based Employee Management System built with React, TypeScript, and modern web technologies. This system provides enterprise-grade features for managing employees, leave requests, payroll, assets, and purchase approvals.

## 🚀 Features

### Core Functionality
- **Role-Based Access Control (RBAC)** - Employee, Manager, HR/Admin, Department Head roles
- **Authentication & Security** - JWT-based auth with refresh tokens
- **Responsive Design** - Mobile-first approach with professional UI
- **Real-time Updates** - Live notifications and status updates

### Modules
- **Leave Management** - Apply, approve, and track leave requests
- **Payroll System** - View payroll summaries (salary figures protected)
- **Asset Tracking** - Manage company equipment and assignments
- **Purchase Requests** - Submit and approve procurement requests  
- **Employee Directory** - Manage employee profiles and information
- **Reports & Analytics** - Generate insights and compliance reports

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **React Router** for navigation
- **React Query (TanStack)** for server state
- **Zustand** for client state
- **React Hook Form + Zod** for forms & validation

### Development Tools
- **ESLint & Prettier** for code quality
- **Jest + React Testing Library** for unit tests
- **Playwright** for E2E tests (planned)
- **Storybook** for component documentation (planned)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern browser with ES2020+ support

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd employee-management-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run tests (when implemented)
npm test
```

### Demo Accounts

The system includes demo accounts for testing different role capabilities:

| Role | Email | Password | Access Level |
|------|-------|----------|--------------|
| Employee | employee@company.com | password123 | Basic access |
| Manager | manager@company.com | password123 | Team management |
| HR | hr@company.com | password123 | Full HR access |
| Admin | admin@company.com | password123 | System administration |

## 📱 Role-Based Features

### Employee Dashboard
- Personal leave balance and requests
- Assigned assets overview
- Payroll summaries (no salary display)
- Quick action shortcuts

### Manager Dashboard  
- Team leave approvals
- Purchase request reviews
- Team performance metrics
- Bulk approval actions

### HR/Admin Dashboard
- Employee lifecycle management
- Payroll upload and processing
- System compliance monitoring
- Company-wide analytics

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Authentication
VITE_JWT_SECRET=your-jwt-secret-key

# Feature Flags
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_FILE_UPLOADS=true
```

### Build Configuration
The project uses Vite with optimized builds:
- **Bundle splitting** for code optimization
- **Tree shaking** for smaller bundle sizes
- **Modern ES modules** for better performance
- **Source maps** for debugging in development

## 🏗 Architecture

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard-specific components  
│   ├── layout/         # Layout and navigation
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Route components
└── types/              # TypeScript type definitions
```

### Key Design Patterns
- **Compound Components** for complex UI elements
- **Custom Hooks** for logic reuse
- **Context + Zustand** for state management
- **Error Boundaries** for graceful error handling
- **Suspense** for loading states

## 🔒 Security Features

- **JWT Authentication** with HTTP-only refresh tokens
- **Role-based route protection** 
- **API request/response validation**
- **CSRF protection** patterns
- **Sensitive data filtering** (salary information)
- **Input sanitization** and validation

## 🎨 Design System

The project implements a comprehensive design system:

- **Semantic color tokens** for consistent theming
- **Professional gradients** and shadows
- **Enterprise-grade components** 
- **Responsive breakpoints**
- **Accessibility-first** approach (WCAG AA)

## 📋 Development Guidelines

### Code Quality
- **TypeScript strict mode** enabled
- **ESLint rules** for consistency
- **Prettier formatting** automated
- **Component props validation**
- **Error boundary implementation**

### Testing Strategy (Planned)
- **Unit tests** for business logic (Jest)
- **Component tests** for UI (React Testing Library)
- **Integration tests** for workflows
- **E2E tests** for critical paths (Playwright)

### Performance Optimization
- **Route-based code splitting**
- **Image optimization** and lazy loading
- **Bundle size monitoring**
- **React Query caching** strategies

## 🚀 Deployment

### Production Build
```bash
# Create optimized production build
npm run build

# Test production build locally
npm run preview
```

### Deployment Options
- **Static hosting** (Vercel, Netlify)
- **Container deployment** (Docker)
- **CDN distribution** for global performance

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Implement changes with tests
3. Ensure linting and type checking pass
4. Submit pull request with detailed description

### Code Standards
- Follow existing code patterns
- Add TypeScript types for new features
- Include component documentation
- Write meaningful commit messages

## 📄 License

This project is proprietary software for internal company use.

## 📞 Support

For technical support or feature requests:
- Create an issue in the repository
- Contact the development team
- Refer to the internal documentation wiki

---

Built with ❤️ for efficient employee management
