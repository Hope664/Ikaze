import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './BookingConfirmed.css'

export default function BookingConfirmed() {
  const navigate = useNavigate()

  return (
    <div className="confirmed-page">
      <Navbar loggedIn={true} userName="Umurerwa Jane" />
      <div className="confirmed-container">
        {/* Top */}
        <div className="confirmed-top">
          <div className="confirmed-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Your reservation at Kigali View Hotel is secured.</p>
          <div className="booking-ref">
            <span>BOOKING REFERENCE</span>
            <strong>IKZ-2024-8892</strong>
          </div>
        </div>

        {/* Middle */}
        <div className="confirmed-body">
          {/* Booking summary */}
          <div className="confirmed-summary">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" alt="hotel" />
            <div className="confirmed-summary-info">
              <h2>Kigali View Hotel</h2>
              <div className="confirmed-grid">
                <div>
                  <p className="ci-label">CHECK-IN</p>
                  <p className="ci-value">June 12, 2026</p>
                  <p className="ci-sub">After 2:00 PM</p>
                </div>
                <div>
                  <p className="ci-label">CHECK-OUT</p>
                  <p className="ci-value">June15, 2026</p>
                  <p className="ci-sub">Before 11:00 AM</p>
                </div>
                <div>
                  <p className="ci-label">GUESTS</p>
                  <p className="ci-value">2 Adults</p>
                </div>
                <div>
                  <p className="ci-label">ROOM TYPE</p>
                  <p className="ci-value">Deluxe Terrace Suite</p>
                </div>
              </div>
              <div className="escrow-row">
                <span>🛡️</span>
                <div>
                  <span className="escrow-active">IKAZE Secure Escrow Active</span>
                  <span className="escrow-price">$380.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="next-steps">
            <h3>Next Steps</h3>
            <button className="next-step-btn primary" onClick={() => navigate('/bookings')}>
              📅 View in My Bookings →
            </button>
            <button className="next-step-btn">🧭 Get Directions</button>
            <button className="next-step-btn">⬇ Download Receipt</button>

            <div className="youre-set">
              <p className="set-title">You're all set!</p>
              <p className="set-desc">A confirmation email with your digital check-in key has been sent to <a href="#">jane.u@example.com</a>.</p>
              <div className="escrow-protection">
                <p className="ep-title">🛡️ Escrow Protection Active</p>
                <p className="ep-desc">Your payment is held securely and only released to the vendor after your stay. Your peace of mind is our priority.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support bar */}
        <div className="support-bar">
          <div className="support-left">
            <span className="support-icon">🎧</span>
            <div>
              <p className="support-title">Need help with your booking?</p>
              <p className="support-sub">Our support team is available 24/7 for our verified guests.</p>
            </div>
          </div>
          <div className="support-btns">
            <button className="chat-btn">Chat with Support</button>
            <button className="call-btn">Call Center</button>
          </div>
        </div>
      </div>
    </div>
  )
}