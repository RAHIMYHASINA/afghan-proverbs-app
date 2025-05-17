import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProverb() {
  const [form, setForm] = useState({
    textDari: '',
    textPashto: '',
    translationEn: '',
    meaning: '',
    category: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/proverbs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => navigate('/'))
      .catch(err => console.error('Error adding proverb:', err))
  }

  return (
    <div>
      <h2>Add New Proverb</h2>
      <form onSubmit={handleSubmit}>
        <input name="textDari" placeholder="Dari" value={form.textDari} onChange={handleChange} required /><br />
        <input name="textPashto" placeholder="Pashto" value={form.textPashto} onChange={handleChange} required /><br />
        <input name="translationEn" placeholder="English Translation" value={form.translationEn} onChange={handleChange} required /><br />
        <input name="meaning" placeholder="Meaning" value={form.meaning} onChange={handleChange} required /><br />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProverb