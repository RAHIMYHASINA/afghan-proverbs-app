const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let proverbs = [
  {
    id: 1,
    textDari: "هندوانه دو دست یک گرفت نتوان",
    textPashto: "هندوانې دو لاس یوه کېدای نشي",
    translationEn: "You can't hold two watermelons in one hand",
    meaning: "Don't take on more tasks than you can handle",
    category: "wisdom"
  }
];

// GET all proverbs
app.get('/proverbs', (req, res) => {
  res.json(proverbs);
});

// POST a new proverb
app.post('/proverbs', (req, res) => {
  const newProverb = { id: Date.now(), ...req.body };
  proverbs.push(newProverb);
  res.status(201).json(newProverb);
});

// GET single proverb
app.get('/proverbs/:id', (req, res) => {
  const proverb = proverbs.find(p => p.id == req.params.id);
  if (proverb) res.json(proverb);
  else res.status(404).json({ error: 'Proverb not found' });
});

// PUT update proverb
app.put('/proverbs/:id', (req, res) => {
  const index = proverbs.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    proverbs[index] = { ...proverbs[index], ...req.body };
    res.json(proverbs[index]);
  } else {
    res.status(404).json({ error: 'Proverb not found' });
  }
});

// DELETE proverb
app.delete('/proverbs/:id', (req, res) => {
  const index = proverbs.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    const deleted = proverbs.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ error: 'Proverb not found' });
  }
});

// BONUS: Get random proverb
app.get('/proverbs/random', (req, res) => {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});