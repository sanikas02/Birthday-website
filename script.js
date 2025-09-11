function goToBirthday() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        window.location.href = `birthday.html?name=${encodeURIComponent(name)}`;
    } else {
        alert('Please enter a name!');
    }
}

document.getElementById('goBtn').addEventListener('click', goToBirthday);
document.getElementById('nameInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') goToBirthday();
});