# Prodvestor Website

**Bridging Talent with Innovation**

A modern, responsive React website for Prodvestor Ltd - connecting elite software developers from emerging markets with global opportunities while building innovative technology solutions.

![Prodvestor](public/assets/images/logo/logo-primary.svg)

## 🚀 About Prodvestor

Prodvestor is a pioneering technology company committed to transforming the global tech landscape through:

- **Global Talent Mobilization**: Connecting skilled developers from Kenya and emerging markets with international tech companies
- **Innovative Project Development**: Building cutting-edge solutions across healthcare, education, sustainability, and beyond
- **Developer Empowerment**: Comprehensive training, mentorship, and unique equity-sharing opportunities
- **Strategic Partnerships**: Collaborations with organizations like South Korean NGOs, Matakiri, and Chakan Bridge

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Fast Performance**: Optimized for speed with lazy loading and code splitting
- **SEO Optimized**: Meta tags, structured data, and semantic HTML for better search rankings
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Dark Mode**: Built-in theme switching capability
- **Analytics**: Google Analytics integration for tracking and insights

### Key Pages
- **Home**: Dynamic hero section, services overview, featured projects, and testimonials
- **About**: Company vision, mission, team profiles, and competitive advantages
- **Services**: 
  - Talent Acquisition
  - Project Development
  - IT Consultation
  - Training & Mentorship
- **Portfolio**: Filterable project gallery with detailed case studies
- **Team**: Team member profiles and organizational structure
- **Blog**: Articles, tutorials, and company news
- **Careers**: Open positions and company culture
- **Contact**: Multi-channel contact form with validation

### Technical Features
- **Custom Hooks**: 8 reusable hooks for common functionality
- **Context API**: Global state management for theme, navigation, and notifications
- **Form Validation**: Comprehensive validation with error handling
- **API Integration**: RESTful API client for backend communication
- **Animations**: Smooth transitions and scroll-triggered animations
- **Error Handling**: Graceful error boundaries and user feedback

## 🛠️ Tech Stack

### Frontend
- **React** 18.2+ - UI library
- **React Router** 6+ - Client-side routing
- **CSS3** - Styling with CSS variables and custom properties

### Development Tools
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **Prettier** - Code formatting

### External Services (Optional)
- **Google Analytics** - Website analytics
- **Email Service** - Contact form submissions (e.g., EmailJS, SendGrid)

## 🚦 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher (or yarn 1.22+)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/prodvestor/prodvestor-website.git
cd prodvestor-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_GA_TRACKING_ID=your_google_analytics_id
```

4. **Start the development server**
```bash
npm start
# or
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
prodvestor-website/
├── public/                      # Static files
│   ├── assets/                  # Images, icons, fonts
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO crawler instructions
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── layout/            # Layout components (Header, Footer, etc.)
│   │   ├── common/            # Common UI components (Button, Card, etc.)
│   │   ├── sections/          # Page sections (Hero, Services, etc.)
│   │   └── features/          # Feature-specific components
│   │
│   ├── pages/                 # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   └── Contact/
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useScrollPosition.js
│   │   ├── useWindowSize.js
│   │   └── useFormValidation.js
│   │
│   ├── context/               # React Context providers
│   │   ├── ThemeContext.js
│   │   ├── NavigationContext.js
│   │   └── NotificationContext.js
│   │
│   ├── utils/                 # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validation.js
│   │   └── api.js
│   │
│   ├── data/                  # Static data files
│   │   ├── services.js
│   │   ├── projects.js
│   │   └── team.js
│   │
│   ├── styles/                # Global styles
│   │   ├── index.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── App.js                 # Main App component
│   ├── App.css                # App-level styles
│   └── index.js               # Application entry point
│
├── .env.example               # Environment variables template
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder
- Optimizes for best performance
- Minifies and bundles files
- Hashes filenames for caching

### `npm run eject`
**Note: This is a one-way operation!**
Ejects from Create React App to customize build configuration

### `npm run lint`
Runs ESLint to check code quality

### `npm run format`
Formats code using Prettier

## 🔐 Environment Variables

Create a `.env` file in the root directory:
```env
# API Configuration
REACT_APP_API_URL=https://api.prodvestor.com

# Analytics
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature Flags
REACT_APP_ENABLE_BLOG=true
REACT_APP_ENABLE_CAREERS=true

# Email Service (Optional)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Never commit `.env` files to version control!**

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/prodvestor-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Colors
Edit `src/styles/variables.css` to customize the color scheme:
```css
--color-primary: #1a365d;
--color-accent: #00d4ff;
--color-charcoal: #2d3748;
```

### Typography
Update font imports in `public/index.html` and font families in `src/styles/variables.css`

### Content
Update static data in `src/data/` directory:
- `services.js` - Service offerings
- `projects.js` - Portfolio projects
- `team.js` - Team members
- `testimonials.js` - Client testimonials

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow existing code conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Run `npm run lint` before committing
- Format code with Prettier

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📄 License

This project is proprietary and confidential.
Copyright © 2025 Prodvestor Ltd. All rights reserved.

Unauthorized copying, modification, or distribution of this software is strictly prohibited.

## 📞 Contact

**Prodvestor Ltd**

- **Website**: [https://prodvestor.com](https://prodvestor.com)
- **Email**: info@prodvestor.com
- **LinkedIn**: [Prodvestor Innovators](https://ke.linkedin.com/company/prodvestorinnovators)
- **Location**: Ndege Road, The Watermark Business Park, Nairobi Garage, Karen, Nairobi, Kenya

---

## 🙏 Acknowledgments

- **Team**: 44+ skilled developers and 6 visionary directors
- **Partners**: South Korean NGO, Matakiri, Chakan Bridge
- **Community**: All contributors and supporters of Prodvestor's mission

## 📊 Project Status

- **Version**: 1.0.0
- **Status**: Active Development
- **Last Updated**: October 2025

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core website development
- ✅ Responsive design implementation
- ✅ SEO optimization
- ✅ Analytics integration

### Phase 2 (Q1 2026)
- [ ] Backend API integration
- [ ] User authentication system
- [ ] Developer portal
- [ ] Client dashboard

### Phase 3 (Q2 2026)
- [ ] Blog CMS integration
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Performance optimization

### Phase 4 (Q3 2026)
- [ ] Mobile app development
- [ ] AI-powered matching system
- [ ] Video testimonials
- [ ] Live chat support

---

**Built with ❤️ by the Prodvestor Team**

*Bridging Talent with Innovation - Empowering developers, transforming businesses, shaping the future.*