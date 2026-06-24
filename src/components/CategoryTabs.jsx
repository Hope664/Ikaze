import { useState } from 'react'
import './CategoryTabs.css'

const TABS = ['All', 'Nature', 'Culture', 'Family/Safety', 'Adventure', 'Other']

function CategoryTabs() {
  const [active, setActive] = useState('All')

  return (
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
  )
}

export default CategoryTabs