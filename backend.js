const express = require('express');
const multer = require('multer');
const app = express();
const port = 3001;

// Настройка мультера для обработки загруженных файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Обработка POST-запроса на эндпоинт /upload
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    console.log('Изображение успешно получено на сервере');
    res.sendStatus(200);
  } catch (error) {
    console.error('Ошибка:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
