import './VendorCard.css'

function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <div className="vendor-card-image">
        <img src={vendor.imageUrl} alt={vendor.name} />
        <div className="vendor-rating">⭐ {vendor.rating} ({vendor.reviewCount})</div>
        {vendor.priceRange && <div className="vendor-price">{vendor.priceRange}</div>}
        {vendor.isVerified && <div className="vendor-verified">✓</div>}
      </div>
      <div className="vendor-card-body">
        <h4>{vendor.name}</h4>
        <p className="vendor-location">📍 {vendor.city}</p>
        <p className="vendor-desc">{vendor.description}</p>
        <div className="vendor-actions">
          <a href={`tel:${vendor.phone}`} className="btn-contact">Contact</a>
          <a href={`/vendor/${vendor.id}`} className="btn-view">View details</a>
        </div>
      </div>
    </div>
  )
}

export default VendorCard