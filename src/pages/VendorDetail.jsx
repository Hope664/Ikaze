import './VendorDetail.css'
import Navbar from '../components/Navbar'

const VENDOR = {
  name: 'Kigali View Hotel',
  category: 'Accommodation',
  isVerified: true,
  rating: 4.9,
  reviewCount: 128,
  description: 'Nestled in the heart of the capital, Kigali View Hotel offers an unparalleled experience that blends traditional Rwandan warmth with world-class luxury. Our verified status reflects a decade of commitment to excellence, human-reviewed standards, and a passion for showcasing the best of Rwanda\'s hospitality.',
  pricePerNight: 180,
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  ],
  services: [
    { icon: '🛏️', title: 'Luxury Suites', desc: 'Spacious rooms featuring panoramic city views, high-speed fiber internet, and premium amenities.' },
    { icon: '🍽️', title: 'Fine Dining', desc: 'A fusion of international cuisine and local Rwandan flavors, prepared by master chefs.' },
    { icon: '👥', title: 'Event Spaces', desc: 'Versatile conference rooms and elegant ballrooms for corporate events and weddings.' },
    { icon: '🌿', title: 'Wellness Spa', desc: 'Holistic treatments and massage therapy using locally sourced essential oils.' },
  ],
  hours: [
    { days: 'Monday - Friday', time: '24 Hours' },
    { days: 'Saturday - Sunday', time: '24 Hours' },
  ],
  isOpenNow: true,
  location: {
    district: 'Nyarugenge District, Kigali',
    address: 'KN 3rd Road, Plot 452, Rwanda',
  },
  reviews: [
    {
      initials: 'JD',
      name: 'Jean-Paul D.',
      stay: 'Stayed Dec 2025 • Verified Guest',
      rating: 5,
      comment: '"The view truly lives up to the name. Impeccable service from the moment I arrived. The breakfast buffet is one of the best I\'ve had in Kigali."',
    },
    {
      initials: 'SM',
      name: 'Sarah M.',
      stay: 'Stayed Jan 2026 • Verified Guest',
      rating: 4,
      comment: '"Excellent conference facilities. Our team had a two-day workshop here and the coordination was perfect. Food was fresh and healthy."',
    },
  ],
}

function StarRating({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

function VendorDetail() {
  return (
    <div className="vendor-detail-page">
      <Navbar />

      <div className="vendor-detail-container">
        {/* Breadcrumb + actions */}
        <div className="vendor-detail-topbar">
          <div className="vendor-detail-left">
            <div className="breadcrumb">
              <a href="/discover">Explore</a> ›
              <a href="/discover?category=accommodation"> Accommodation</a> ›
              <span> {VENDOR.name}</span>
            </div>
            <div className="vendor-meta">
              {VENDOR.isVerified && (
                <span className="verified-badge">✅ Verified Vendor</span>
              )}
              <span className="vendor-rating-badge">
                ⭐ {VENDOR.rating} ({VENDOR.reviewCount} Reviews)
              </span>
            </div>
          </div>
          <div className="vendor-detail-actions">
            <button className="btn-share">↗ Share</button>
            <button className="btn-save">♡ Save</button>
          </div>
        </div>

        {/* Photo grid */}
        <div className="photo-grid">
          <img src={VENDOR.images[0]} alt="main" className="photo-main" />
          <div className="photo-side">
            {VENDOR.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt={`photo-${i}`} />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="vendor-detail-body">
          {/* Left column */}
          <div className="vendor-detail-main">
            <section className="about-section">
              <h2>About the Business</h2>
              <p>{VENDOR.description}</p>
            </section>

            <section className="services-section">
              <h2>Services Offered</h2>
              <div className="services-grid">
                {VENDOR.services.map((s, i) => (
                  <div key={i} className="service-card">
                    <span className="service-icon">{s.icon}</span>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="reviews-section">
              <div className="reviews-header">
                <h2>What Guests Say</h2>
                <a href="#write-review" className="write-review-btn">Write a Review ✏️</a>
              </div>
              <div className="reviews-list">
                {VENDOR.reviews.map((r, i) => (
                  <div key={i} className="review-card">
                    <div className="review-top">
                      <div className="reviewer-left">
                        <div className="reviewer-avatar">{r.initials}</div>
                        <div>
                          <p className="reviewer-name">{r.name}</p>
                          <p className="reviewer-stay">{r.stay}</p>
                        </div>
                      </div>
                      <StarRating count={r.rating} />
                    </div>
                    <p className="review-comment">{r.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sticky column */}
          <aside className="vendor-detail-sidebar">
            {/* Booking card */}
            <div className="booking-card">
              <div className="booking-price">
                <span className="price-label">Starting from</span>
                <span className="price-amount">${VENDOR.pricePerNight} <span className="price-unit">/ night</span></span>
              </div>
              <div className="booking-field">
                <span className="field-icon">📅</span>
                <div>
                  <p className="field-label">CHECK-IN / CHECK-OUT</p>
                  <p className="field-value">Select dates</p>
                </div>
              </div>
              <div className="booking-field">
                <span className="field-icon">👤</span>
                <div>
                  <p className="field-label">GUESTS</p>
                  <p className="field-value">2 Adults, 0 Children</p>
                </div>
              </div>
              <button className="btn-book">Book Now →</button>
              <button className="btn-contact-vendor">Contact Vendor ✉️</button>
              <p className="no-payment">No payment required yet</p>
            </div>

            {/* Operational hours */}
            <div className="sidebar-card">
              <p className="sidebar-card-title">🕐 Operational Hours</p>
              {VENDOR.hours.map((h, i) => (
                <div key={i} className="hours-row">
                  <span>{h.days}</span>
                  <strong>{h.time}</strong>
                </div>
              ))}
              {VENDOR.isOpenNow && (
                <p className="open-now">🟢 Open Now</p>
              )}
            </div>

            {/* Location */}
            <div className="sidebar-card">
              <p className="sidebar-card-title">📍 Location</p>
              <div className="map-placeholder">
                <span>🗺️</span>
              </div>
              <p className="location-district">{VENDOR.location.district}</p>
              <p className="location-address">{VENDOR.location.address}</p>
              <a href="#directions" className="get-directions">Get Directions ◈</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default VendorDetail