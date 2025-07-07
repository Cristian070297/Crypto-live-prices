import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">CryptoExchange</h1>
          <span className="tagline">Live Trading Prices</span>
        </div>
        <div className="header-info">
          <div className="market-status">
            <span className="status-dot"></span>
            <span>Market Open</span>
          </div>
          <div className="last-updated">
            <span>Last Updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
