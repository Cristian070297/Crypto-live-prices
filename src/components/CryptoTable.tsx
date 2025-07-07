import React from 'react'
import type { CryptoData } from '../types/crypto'
import './CryptoTable.css'

interface CryptoTableProps {
  data: CryptoData[]
  onRefresh: () => void
  loading: boolean
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data, onRefresh, loading }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    })
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`
    } else {
      return `$${marketCap.toLocaleString()}`
    }
  }

  const formatPercentage = (percentage: number) => {
    const isPositive = percentage > 0
    return (
      <span className={`percentage ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : ''}{percentage.toFixed(2)}%
      </span>
    )
  }

  return (
    <div className="crypto-table-container">
      <div className="table-header">
        <h2>Top 10 Cryptocurrencies by Market Cap</h2>
        <button 
          onClick={onRefresh} 
          className="refresh-btn"
          disabled={loading}
        >
          {loading ? 'Refreshing...' : '🔄 Refresh'}
        </button>
      </div>
      
      <div className="table-wrapper">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Supply</th>
            </tr>
          </thead>
          <tbody>
            {data.map((crypto) => (
              <tr key={crypto.id} className="crypto-row">
                <td className="rank">{crypto.market_cap_rank}</td>
                <td className="name-cell">
                  <div className="crypto-info">
                    <img 
                      src={crypto.image} 
                      alt={crypto.name} 
                      className="crypto-icon"
                    />
                    <div className="crypto-details">
                      <span className="crypto-name">{crypto.name}</span>
                      <span className="crypto-symbol">{crypto.symbol.toUpperCase()}</span>
                    </div>
                  </div>
                </td>
                <td className="price">{formatPrice(crypto.current_price)}</td>
                <td className="change">
                  {formatPercentage(crypto.price_change_percentage_24h)}
                </td>
                <td className="market-cap">{formatMarketCap(crypto.market_cap)}</td>
                <td className="volume">{formatMarketCap(crypto.total_volume)}</td>
                <td className="supply">
                  {crypto.circulating_supply.toLocaleString()} {crypto.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CryptoTable
