import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function ProverbDetail() {
  const { id } = useParams()
  const [proverb, setProverb] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/proverbs/${id}`)
      .then(res => res.json())
      .then(data => setProverb(data))
      .catch(err => console.error('Error fetching proverb:', err))
  }, [id])

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this proverb?')
    if (confirm) {
      fetch(`http://localhost:3000/proverbs/${id}`, {
        method: 'DELETE',
      })
        .then(() => navigate('/'))
        .catch(err => console.error('Error deleting proverb:', err))
    }
  }

  if (!proverb) return <p>Loading...</p>

  return (
    <div>
      <h2>Proverb Details</h2>
      <p><strong>Dari:</strong> {proverb.textDari}</p>
      <p><strong>Pashto:</strong> {proverb.textPashto}</p>
      <p><strong>English:</strong> {proverb.translationEn}</p>
      <p><strong>Meaning:</strong> {proverb.meaning}</p>
      <p><strong>Category:</strong> {proverb.category}</p>

      <Link to={`/edit/${proverb.id}`}>Edit</Link> | 
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  )
}

export default ProverbDetail