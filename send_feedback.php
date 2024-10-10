<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input to prevent header injection and other attacks
    $rating = htmlspecialchars(trim($_POST['rating']));
    $comment = htmlspecialchars(trim($_POST['comment']));

    $to = "ramandaputra0104@gmail.com";
    $subject = "Feedback dari Pengguna";
    $message = "Rating: $rating\nKomentar: $comment";
    $headers = "From: NauraKaylaNovrianda@fiznau.com"; // Ganti dengan alamat email yang sesuai

    if (mail($to, $subject, $message, $headers)) {
        echo "Feedback berhasil dikirim.";
    } else {
        echo "Terjadi kesalahan saat mengirim feedback.";
    }
} else {
    echo "Tidak ada data yang diterima.";
}
?>
