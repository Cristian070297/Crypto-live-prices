# CryptoExchange - Live Trading Price Dashboard

<div align="center">
  <h3>🚀 A Modern Cryptocurrency Exchange Dashboard</h3>
  <p>Real-time cryptocurrency price tracking with a beautiful, responsive interface</p>
  
  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![CoinGecko](https://img.shields.io/badge/CoinGecko-API-8DC351?style=for-the-badge&logo=coingecko&logoColor=white)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

CryptoExchange is a modern, responsive web application that provides real-time cryptocurrency market data. Built with React 18, TypeScript, and Vite, it offers a professional trading dashboard experience with live price updates, market analytics, and an intuitive user interface.

The application fetches live data from the CoinGecko API to display the top 10 cryptocurrencies by market capitalization, complete with price movements, trading volumes, and market statistics.

## ✨ Features

### 🔥 Core Features
- **Real-time Price Tracking** - Live cryptocurrency prices with automatic updates every 60 seconds
- **Top 10 Cryptocurrencies** - Display of market leaders by market capitalization
- **24-Hour Price Changes** - Visual indicators with enhanced green/red color coding
- **Market Analytics** - Comprehensive data including market cap, volume, and supply metrics
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Modern Glass-morphism UI** - Beautiful gradient backgrounds with frosted glass effects
- **Professional Typography** - Clean, readable Inter font family
- **Smooth Animations** - Hover effects and transitions for enhanced interactivity
- **Accessibility Compliant** - WCAG guidelines followed for inclusive design
- **Loading States** - Elegant loading animations and error handling

### 🛠 Technical Features
- **TypeScript Integration** - Full type safety and enhanced developer experience
- **Robust Error Handling** - Graceful fallbacks with mock data when API is unavailable
- **CORS Handling** - Multiple API endpoint strategies for reliable data fetching
- **Performance Optimized** - Efficient rendering with React hooks and modern patterns
- **Hot Module Replacement** - Fast development with Vite's HMR

## 🚀 Technologies

### Frontend Framework
- **React 18** - Latest React with concurrent features
- **TypeScript 5.x** - Type-safe JavaScript development
- **Vite 7.x** - Next-generation frontend tooling

### Styling & Design
- **CSS3** - Modern styling with custom properties
- **Responsive Design** - Mobile-first approach
- **Glass-morphism Effects** - Backdrop filters and transparency

### API & Data
- **CoinGecko API** - Comprehensive cryptocurrency data
- **REST API Integration** - Async/await patterns with error handling
- **Mock Data Fallback** - Ensures functionality even when API is unavailable

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript Compiler** - Type checking and compilation
- **Vite Dev Server** - Fast development experience

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/your-username/crypto-exchange.git
cd crypto-exchange
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎮 Usage

### Development Mode
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production Deployment
```bash
npm run build        # Creates optimized build in /dist
npm run preview      # Test production build locally
```

## 🌐 API Integration

### CoinGecko API
The application integrates with CoinGecko's free API to fetch real-time cryptocurrency data:

```javascript
// Primary endpoint
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h
```

### Data Structure
Each cryptocurrency entry includes:
- Current price and 24h change
- Market capitalization and ranking
- Trading volume (24h)
- Circulating supply
- All-time high/low values
- Price change indicators

### Error Handling
The app implements multiple fallback strategies:
1. Direct CoinGecko API call
2. CORS proxy alternatives
3. Mock data fallback for demonstration

## 📁 Project Structure

```
crypto-exchange/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx    # Application header
│   │   ├── Header.css    # Header styles
│   │   ├── CryptoTable.tsx # Main data table
│   │   └── CryptoTable.css # Table styles
│   ├── types/            # TypeScript interfaces
│   │   └── crypto.ts     # Crypto data types
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global application styles
│   ├── index.css         # Global CSS reset and variables
│   └── main.tsx          # Application entry point
├── .github/
│   └── copilot-instructions.md # AI coding guidelines
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🔧 Development

### Code Quality
- **TypeScript** - Strict type checking enabled
- **ESLint** - Consistent code style and best practices
- **Modern React** - Hooks, functional components, and latest patterns

### Performance Considerations
- **Efficient Re-renders** - Optimized state management
- **Lazy Loading** - Component-level code splitting ready
- **Caching Strategy** - API response caching for better performance

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Add proper error handling
- Include comprehensive documentation
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CoinGecko** - For providing comprehensive cryptocurrency API
- **React Team** - For the amazing React framework
- **Vite Team** - For the blazing fast build tool
- **TypeScript Team** - For type safety and developer experience

---

<div align="center">
  <p>Built with ❤️ by developers, for crypto enthusiasts</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
