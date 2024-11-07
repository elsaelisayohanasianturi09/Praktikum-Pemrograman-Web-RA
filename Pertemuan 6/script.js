// Mendapatkan elemen-elemen input form
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const registrationForm = document.getElementById('registrationForm');

// Validasi username saat keyup
username.addEventListener('keyup', function() {
    const usernamePattern = /^[a-zA-Z0-9]{5,20}$/; // Syarat untuk username harus 5-20 karakter alfanumerik
    if (usernamePattern.test(username.value)) {
        document.getElementById('usernameFeedback').innerText = 'Username valid';
        document.getElementById('usernameFeedback').style.color = 'green';
    } else {
        document.getElementById('usernameFeedback').innerText = 'Username harus 5-20 karakter alfanumerik';
        document.getElementById('usernameFeedback').style.color = 'red';
    }
});

// Validasi format email saat change
email.addEventListener('change', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex untuk format email
    if (emailPattern.test(email.value)) {
        document.getElementById('emailFeedback').innerText = 'Email valid';
        document.getElementById('emailFeedback').style.color = 'green';
    } else {
        document.getElementById('emailFeedback').innerText = 'Format email tidak valid';
        document.getElementById('emailFeedback').style.color = 'red';
    }
});

// Verifikasi kekuatan password saat keyup
password.addEventListener('keyup', function() {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimal 8 karakter, harus ada huruf dan angka
    const feedbackElement = document.getElementById('passwordFeedback');

    console.log("Password value:", password.value); 
    console.log("Pattern match:", passwordPattern.test(password.value)); 

    if (passwordPattern.test(password.value)) {
        feedbackElement.innerText = 'Password kuat';
        feedbackElement.style.color = 'green'; // Mengubah warna teks menjadi hijau jika valid
    } else {
        feedbackElement.innerText = 'Password harus minimal 8 karakter, harus mencakup angka dan huruf';
        feedbackElement.style.color = 'red'; // Mengubah warna teks menjadi merah jika tidak valid
    }
});

// Konfirmasi kecocokan password saat input
confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value === password.value) {
        document.getElementById('confirmPasswordFeedback').innerText = 'Password cocok';
        document.getElementById('confirmPasswordFeedback').style.color = 'green';
    } else {
        document.getElementById('confirmPasswordFeedback').innerText = 'Password tidak cocok';
        document.getElementById('confirmPasswordFeedback').style.color = 'red';
    }
});

// Validasi akhir saat submit form
registrationForm.addEventListener('submit', function(event) {
    // Mencegah submit jika ada error
    if (
        !username.value.match(/^[a-zA-Z0-9]{5,20}$/) ||
        !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
        !password.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ||
        confirmPassword.value !== password.value
    ) {
        event.preventDefault();
        alert('Periksa kembali input Anda. Terdapat beberapa kolom yang tidak valid.');
    } else {
        alert('Berhasil melakukan pendaftaran:)!');
    }
});
