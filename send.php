<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Формирование самого письма
$title = "Новая заявка!";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b><br>$phone
";

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webstmails@gmail.com';                     // SMTP username
    $mail->Password   = 'N88l8x^N@x';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webstmails@gmail.com', 'Stanislav');
    $mail->addAddress('stanislav.iushkevich@gmail.com');     // Add a recipient

    // Content
    $mail->CharSet = "UTF-8";
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $title;
    $mail->Body = $body; 
    
    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, ошибка. Mailer Error: {$mail->ErrorInfo}";
    }

} catch (Exception $e) {
    echo "Письмо не отправлено, ошибка. Mailer Error: {$mail->ErrorInfo}";
}