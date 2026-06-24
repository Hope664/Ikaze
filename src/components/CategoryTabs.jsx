import { useState } from 'react'
import './CategoryTabs.css'

const TABS = ['All', 'Nature', 'Culture', 'Family friendly', 'Adventure', 'Urban']

function CategoryTabs() {
  const [active, setActive] = useState('All')

  return (
    <div className="category-tabs-wrapper">
      <div className="category-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={active === tab ? 'tab active' : 'tab'}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="category-actions">
        <a href="/explore" className="cat-action-btn">Explore Rwanda →</a>
        <a href="/nearby" className="cat-action-btn">Find nearby services 📍</a>
      </div>
    </div>
  )
}

export default CategoryTabs