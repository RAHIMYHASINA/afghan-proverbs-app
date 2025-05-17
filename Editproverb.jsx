import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditProverb() {
  const { id } = useParams()
  const [form, setForm] = useState({
    textDari: '',
    textPashto: '',
    translationEn: '',
    meaning: '',
    category: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/proverbs/${id}`)
      .then(res => res.json())
      .then(data => setForm(data))
      .catch(err => console.error('Error loading proverb:', err))
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/proverbs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => navigate(`/proverbs/${id}`))
      .catch(err => console.error('Error updating proverb:', err))
  }

  return (
    <div>
      <h2>Edit Proverb</h2>
      <form onSubmit={handleSubmit}>
        <input name="textDari" value={form.textDari} onChange={handleChange} required /><br />
        <input name="textPashto" value={form.textPashto} onChange={handleChange} required /><br />
        <input name="translationEn" value={form.translationEn} onChange={handleChange} required /><br />
        <input name="meaning" value={form.meaning} onChange={handleChange} required /><br />
        <input name="category" value={form.category} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default EditProverb