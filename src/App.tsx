import { useState, useEffect } from 'react'
import './App.css'
import CryptoTable from './components/CryptoTable'
import Header from './components/Header'
import type { CryptoData } from './types/crypto'

function App() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCryptoData = async () => {
    try {
      setLoading(true)
      
      // Try multiple API endpoints in order of preference
      const apiEndpoints = [
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h',
        'https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        'https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      ]
      
      let response: Response | null = null
      let lastError: Error | null = null
      
      for (const endpoint of apiEndpoints) {
        try {
          response = await fetch(endpoint, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
          
          if (response.ok) {
            break
          }
        } catch (err) {
          lastError = err instanceof Error ? err : new Error('Unknown error')
          continue
        }
      }
      
      if (!response || !response.ok) {
        throw lastError || new Error('All API endpoints failed')
      }
      
      let data = await response.json()
      
      // Handle allorigins.win response format
      if (data.contents) {
        data = JSON.parse(data.contents)
      }
      
      // Validate data structure
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid data format received')
      }
      
      setCryptoData(data)
      setError(null)
    } catch (err) {
      console.error('Fetch error:', err)
      
      // Fallback to comprehensive mock data for demonstration
      const mockData = [
        {
          id: 'bitcoin',
          symbol: 'btc',
          name: 'Bitcoin',
          image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png',
          current_price: 43250.00,
          market_cap: 847582947433,
          market_cap_rank: 1,
          price_change_percentage_24h: 2.3,
          total_volume: 23456789012,
          circulating_supply: 19500000,
          fully_diluted_valuation: null,
          high_24h: 43800,
          low_24h: 42100,
          price_change_24h: 970.50,
          market_cap_change_24h: 18934567890,
          market_cap_change_percentage_24h: 2.3,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 69000,
          ath_change_percentage: -37.3,
          ath_date: '2021-11-10T14:24:11.849Z',
          atl: 67.81,
          atl_change_percentage: 63654.2,
          atl_date: '2013-07-06T00:00:00.000Z',
          roi: null,
          last_updated: new Date().toISOString()
        },
        {
          id: 'ethereum',
          symbol: 'eth',
          name: 'Ethereum',
          image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png',
          current_price: 2650.00,
          market_cap: 318456789012,
          market_cap_rank: 2,
          price_change_percentage_24h: -1.2,
          total_volume: 12345678901,
          circulating_supply: 120000000,
          fully_diluted_valuation: null,
          high_24h: 2700,
          low_24h: 2600,
          price_change_24h: -32.15,
          market_cap_change_24h: -3856789012,
          market_cap_change_percentage_24h: -1.2,
          total_supply: null,
          max_supply: null,
          ath: 4878.26,
          ath_change_percentage: -45.7,
          ath_date: '2021-11-10T14:24:19.604Z',
          atl: 0.432979,
          atl_change_percentage: 611765.4,
          atl_date: '2015-10-20T00:00:00.000Z',
          roi: null,
          last_updated: new Date().toISOString()
        },
        {
          id: 'tether',
          symbol: 'usdt',
          name: 'Tether',
          image: 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png',
          current_price: 1.00,
          market_cap: 95000000000,
          market_cap_rank: 3,
          price_change_percentage_24h: 0.05,
          total_volume: 8500000000,
          circulating_supply: 95000000000,
          fully_diluted_valuation: null,
          high_24h: 1.001,
          low_24h: 0.999,
          price_change_24h: 0.0005,
          market_cap_change_24h: 47500000,
          market_cap_change_percentage_24h: 0.05,
          total_supply: 95000000000,
          max_supply: null,
          ath: 1.32,
          ath_change_percentage: -24.2,
          ath_date: '2018-07-24T00:00:00.000Z',
          atl: 0.572521,
          atl_change_percentage: 74.7,
          atl_date: '2015-03-02T00:00:00.000Z',
          roi: null,
          last_updated: new Date().toISOString()
        },
        {
          id: 'binancecoin',
          symbol: 'bnb',
          name: 'BNB',
          image: 'https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
          current_price: 315.50,
          market_cap: 47000000000,
          market_cap_rank: 4,
          price_change_percentage_24h: 1.8,
          total_volume: 1200000000,
          circulating_supply: 149000000,
          fully_diluted_valuation: null,
          high_24h: 320,
          low_24h: 308,
          price_change_24h: 5.58,
          market_cap_change_24h: 831000000,
          market_cap_change_percentage_24h: 1.8,
          total_supply: 149000000,
          max_supply: 200000000,
          ath: 686.31,
          ath_change_percentage: -54.0,
          ath_date: '2021-05-10T07:24:17.097Z',
          atl: 0.0398177,
          atl_change_percentage: 792141.9,
          atl_date: '2017-10-19T00:00:00.000Z',
          roi: null,
          last_updated: new Date().toISOString()
        },
        {
          id: 'solana',
          symbol: 'sol',
          name: 'Solana',
          image: 'https://coin-images.coingecko.com/coins/images/4128/large/solana.png',
          current_price: 95.75,
          market_cap: 43000000000,
          market_cap_rank: 5,
          price_change_percentage_24h: 4.2,
          total_volume: 2100000000,
          circulating_supply: 449000000,
          fully_diluted_valuation: null,
          high_24h: 97.5,
          low_24h: 91.2,
          price_change_24h: 3.87,
          market_cap_change_24h: 1740000000,
          market_cap_change_percentage_24h: 4.2,
          total_supply: 567000000,
          max_supply: null,
          ath: 259.96,
          ath_change_percentage: -63.1,
          ath_date: '2021-11-06T21:54:35.825Z',
          atl: 0.500801,
          atl_change_percentage: 19022.4,
          atl_date: '2020-05-11T19:35:23.449Z',
          roi: null,
          last_updated: new Date().toISOString()
        }
      ]
      
      setCryptoData(mockData)
      setError(`API temporarily unavailable - showing demo data. ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCryptoData()
    
    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {loading && <div className="loading">Loading cryptocurrency data...</div>}
        {error && (
          <div className="error">
            <p>{error}</p>
            <button onClick={fetchCryptoData} className="retry-btn">
              Retry
            </button>
          </div>
        )}
        {!loading && !error && (
          <CryptoTable 
            data={cryptoData} 
            onRefresh={fetchCryptoData}
            loading={loading}
          />
        )}
      </main>
    </div>
  )
}

export default App
