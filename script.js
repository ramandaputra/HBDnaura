document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Ambil nilai dari input email dan password
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // Validasi input
    if (emailInput === "" || passwordInput === "") {
        alert("Isi dulu semuanya sayang");
        return;
    }

    if (emailInput !== "NauraKaylaNovrianda@fiznau.com") {
        alert("Masa lupa nama sendiri sih?");
        return;
    }

    if (passwordInput !== "11012022") {
        alert("Masa lupa tanggal jadian kita?");
        return;
    }

    // Jika valid, pindah ke halaman lain
    window.location.href = "quiz.html"; // Ganti dengan URL halaman tujuan yang diinginkan
});
