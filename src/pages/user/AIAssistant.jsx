import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './AIAssistant.css'

const HISTORY = ['Gorilla trekking permits', 'Best brochettes in Nya...', 'Musanze weekend plan...']
const TRENDING = ['#KigaliArt', '#Hiking', '#Injera']
const SUGGESTIONS = [
  'Find me a quiet retreat near Musanze',
  'Where can I get authentic Rwandan coffee in Kigali?',
  'What are the top 3 cultural events this month?',
  'How do I book a verified city guide?',
]

export default function AIAssistant() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Hello! I'm your IKAZA assistant. How can I help you discover the beauty of Rwanda today?" },
    { from: 'user', text: "I'm looking for a quiet retreat near Musanze." },
    {
      from: 'ai',
      text: 'Musanze is beautiful this time of year. For a quiet, mindful retreat, I highly recommend checking out these options:',
      list: [
        { bold: 'Red Rocks Rwanda:', text: ' Great for cultural immersion and peaceful gardens.' },
        { bold: 'Five Volcanoes Boutique Hotel:', text: ' Offers a serene atmosphere with stunning mountain views.' },
      ],
      card: { name: 'Virunga Mountain Lodge', tag: 'Verified Oasis', imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&q=80' },
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    // Simulated response placeholder for backend wiring
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'ai', text: "Let me look into that for you..." }])
    }, 500)
  }

  return (
    <div className="ai-page">
      <Navbar />

      <div className="ai-header">
        <div>
          <span className="ai-tag">SMART GATEWAY</span>
          <h1>AI Assistant</h1>
          <p>Your personal Rwandan concierge. Ask anything about travel, culture, coffee, or local retreats.</p>
        </div>
        <div className="ai-avatar-circle">🤖</div>
      </div>

      <div className="ai-content">
        {/* Left sidebar */}
        <div className="ai-sidebar">
          <h3>History</h3>
          <div className="ai-history-list">
            {HISTORY.map((h, i) => (
              <div key={i} className="ai-history-item">🕐 {h}</div>
            ))}
          </div>

          <h3>Trending Now</h3>
          <div className="ai-trending">
            {TRENDING.map((t, i) => (
              <span key={i} className="trending-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="ai-chat">
          <div className="ai-chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg-row ${m.from}`}>
                {m.from === 'ai' && <span className="ai-msg-avatar">🤖</span>}
                <div className={`ai-msg-bubble ${m.from}`}>
                  <p>{m.text}</p>
                  {m.list && (
                    <ul>
                      {m.list.map((item, j) => (
                        <li key={j}><strong>{item.bold}</strong>{item.text}</li>
                      ))}
                    </ul>
                  )}
                  {m.card && (
                    <div className="ai-result-card" onClick={() => navigate('/vendor/1')}>
                      <img src={m.card.imageUrl} alt={m.card.name} />
                      <div>
                        <p className="ai-card-name">{m.card.name}</p>
                        <p className="ai-card-tag">{m.card.tag}</p>
                      </div>
                      <span>→</span>
                    </div>
                  )}
                </div>
                {m.from === 'user' && <span className="ai-msg-avatar user">👤</span>}
              </div>
            ))}
          </div>

          <div className="ai-chat-input">
            <input
              type="text"
              placeholder="Type your request here..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button className="mic-btn">🎤</button>
            <button className="send-btn" onClick={handleSend}>➤</button>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="ai-right">
          <div className="try-these-card">
            <p className="try-these-title">✦ Try these</p>
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="suggestion-btn" onClick={() => setInput(s)}>
                <span>{s}</span>
                <span className="plus-icon">+</span>
              </button>
            ))}
          </div>

          <div className="verified-answers-card">
            <span className="verified-check">✅</span>
            <h4>Verified Answers</h4>
            <p>Our AI assistant only suggests human-reviewed and verified partners.</p>
          </div>
        </div>
      </div>
    </div>
  )
}