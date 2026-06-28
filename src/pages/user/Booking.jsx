import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './Booking.css'

export default function Booking() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="booking-page">
      <Navbar loggedIn={true} userName="Umurerwa Jane" />
      <div className="booking-container">
        <button className="back-link" onClick={() => navigate(-1)}>← Back to Hotel Details</button>
        <h1>Complete Booking</h1>

        {/* Stepper */}
        <div className="stepper">
          <div className="step-item done">
            <div className="step-circle done">✓</div>
            <span>Selection</span>
          </div>
          <div className="step-line done" />
          <div className="step-item active">
            <div className="step-circle active">2</div>
            <span>Details</span>
          </div>
          <div className="step-line" />
          <div className="step-item">
            <div className="step-circle">3</div>
            <span>Payment</span>
          </div>
        </div>

        <div className="booking-body">
          {/* Left */}
          <div className="booking-left">
            {/* Guest Details */}
            <div className="booking-card">
              <div className="booking-card-header">
                <h2>Guest Details</h2>
                <span className="verified-required">✅ Verified Profile Required</span>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input type="text" defaultValue="Umurerwa Jane" />
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" defaultValue="jane.u@example.com" />
                </div>
                <div className="form-group phone-group">
                  <label>PHONE NUMBER</label>
                  <div className="phone-input">
                    <span className="phone-code">+250</span>
                    <input type="tel" defaultValue="jane.u@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>COUNTRY OF RESIDENCE</label>
                  <select defaultValue="Rwanda">
                    <option>Rwanda</option>
                    <option>Uganda</option>
                    <option>Kenya</option>
                    <option>Tanzania</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>SPECIAL REQUESTS (OPTIONAL)</label>
                  <textarea placeholder="Dietary requirements, late check-in, etc." rows={4} />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="booking-card">
              <h2>Payment Method</h2>
              <div className="payment-options">
                <div
                  className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="payment-radio">
                    <div className={paymentMethod === 'card' ? 'radio-dot active' : 'radio-dot'} />
                  </div>
                  <div className="payment-info">
                    <p className="payment-title">Credit / Debit Card</p>
                    <p className="payment-desc">Securely pay via Visa, Mastercard or Amex</p>
                  </div>
                  <span className="payment-icon">💳</span>
                </div>
                <div
                  className={`payment-option ${paymentMethod === 'momo' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('momo')}
                >
                  <div className="payment-radio">
                    <div className={paymentMethod === 'momo' ? 'radio-dot active' : 'radio-dot'} />
                  </div>
                  <div className="payment-info">
                    <p className="payment-title">Mobile Money (Momo)</p>
                    <p className="payment-desc">MTN Mobile Money or Airtel Money Rwanda</p>
                  </div>
                  <span className="payment-icon">📱</span>
                </div>
              </div>
              <div className="escrow-notice">
                <span>🛡️</span>
                <div>
                  <p className="escrow-title">IKAZA Secure Escrow Protection</p>
                  <p className="escrow-desc">Your payment is held securely in escrow and only released to the hotel 24 hours after your check-in. Trusted by over 50,000 travelers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="booking-right">
            <div className="booking-summary">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="hotel" />
              <div className="summary-body">
                <h3>Kigali View Hotel</h3>
                <p className="summary-location">📍 Nyarutama, Kigali</p>
                <div className="summary-row"><span>Dates</span><strong>June12 - June 15, 2026</strong></div>
                <div className="summary-row"><span>Guests</span><strong>2 Adults, 1 Room</strong></div>
                <div className="summary-row"><span>Type</span><strong>Deluxe Terrace Suite</strong></div>
                <div className="price-breakdown">
                  <p className="breakdown-title">Price Breakdown</p>
                  <div className="summary-row"><span>3 Nights x 120,000 RWF</span><span>360,000 RWF</span></div>
                  <div className="summary-row"><span>Service Fee</span><span>15,000 RWF</span></div>
                  <div className="summary-row"><span>Local Tourism Tax</span><span>5,000 RWF</span></div>
                  <div className="summary-row total"><span>Total</span><strong>380,000 RWF</strong></div>
                </div>
                <button className="confirm-pay-btn" onClick={() => navigate('/booking-confirmed')}>Confirm & Pay →</button>
                <p className="terms-text">By clicking Confirm & Pay, you agree to our <a href="#">Terms of Service</a> and the hotel's <a href="#">Cancellation Policy</a>.</p>
                <div className="trust-row">
                  <div className="trust-item">🛡️ SAFE BOOKING</div>
                  <div className="trust-item">🎧 24/7 SUPPORT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}