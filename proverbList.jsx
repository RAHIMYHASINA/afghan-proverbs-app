import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProverbList() {
  const [proverbs, setProverbs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/proverbs')
      .then(res => res.json())
      .then(data => setProverbs(data))
      .catch(err => console.error('Error fetching proverbs:', err))
  }, [])

  return (
    <div>
      <h2>All Proverbs</h2>
      {proverbs.map(proverb => (
        <div key={proverb.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p><strong>Dari:</strong> {proverb.textDari}</p>
          <p><strong>Pashto:</strong> {proverb.textPashto}</p>
          <p><strong>English:</strong> {proverb.translationEn}</p>
          <p><strong>Category:</strong> {proverb.category}</p>
          <Link to={`/proverbs/${proverb.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default ProverbList