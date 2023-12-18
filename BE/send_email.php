<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "artem.syvohlaz@gmail.com";
    $subject = "Нове повідомлення від $name";
    $email_body = "Ім'я: $name\n Телефон: $phone\n Email: $email\n Повідомлення:\n$message";
    
    // Відправлення листа
    mail($to, $subject, $email_body);
    
    // Підтвердження успішної відправки
    echo "Ваше повідомлення успішно надіслано!";
} else {
    // Якщо метод не POST, виведення повідомлення про помилку
    echo "Помилка при відправці повідомлення!";
}
?>