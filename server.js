const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Sample proverbs data (replace with your actual data or database)
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

// Start server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});