document.getElementById('consultationCallLink').addEventListener('click', function(e) {
    e.preventDefault();
    var phone = document.getElementById('consultationPhone').value;
    phone = phone.trim();
    if (!phone.startsWith('+')) {
        phone = '+' + phone;
    }
    phone = phone.replace(/(?!^\+)\D/g, '');

    if (phone.length >= 12) {
        window.location.href = 'tel:' + phone;
    } else {
        alert('Пожалуйста, введите корректный номер телефона');
    }
});
