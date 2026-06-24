import './PopularCategories.css'

const CATEGORIES = [
  { label: 'Restaurants', emoji: '🍽️', href: '/discover?category=restaurant' },
  { label: 'Tourism', emoji: '🧭', href: '/discover?category=tourism' },
  { label: 'Transport', emoji: '🚗', href: '/discover?category=transport' },
  { label: 'Mechanics', emoji: '🔧', href: '/discover?category=mechanics' },
  { label: 'More', emoji: '•••', href: '/discover' },
]

function PopularCategories() {
  return (
    <div className="popular-categories">
      <div className="popular-categories-header">
        <h3>Popular categories</h3>
        <a href="/discover">View all</a>
      </div>
      <div className="popular-categories-list">
        {CATEGORIES.map(cat => (
          <a key={cat.label} href={cat.href} className="category-pill">
            <span>{cat.emoji}</span>
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default PopularCategories