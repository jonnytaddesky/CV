// server.js

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

// Налаштування парсера для даних форми
app.use(bodyParser.urlencoded({ extended: true }));

// Конфігурація транспортера для відправки листа
const transporter = nodemailer.createTransport({
  service: "gmail", // Тут можна вказати сервіс (наприклад, gmail, yahoo, тощо)
  auth: {
    user: "your_email@gmail.com", // Ваша електронна пошта
    pass: "your_password", // Ваш пароль до пошти
  },
});

// Обробка POST-запиту від форми
app.post("/submit-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  // Налаштування листа
  // Налаштування листа
  const mailOptions = {
    from: req.body.email, // Введена електронна пошта в полі "From" з форми
    to: "your_email@gmail.com", // Ваша електронна пошта (адреса отримувача)
    subject: "Нове повідомлення від " + name,
    text: `Ім'я: ${name}\nEmail: ${email}\nТелефон: ${phone}\nПовідомлення:\n${message}`,
  };

  // Відправка листа
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Помилка при відправці повідомлення");
    } else {
      console.log("Email відправлено: " + info.response);
      res.send("Ваше повідомлення було успішно надіслано!");
    }
  });
});

// Сервер слухає на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
