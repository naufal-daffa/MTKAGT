document.getElementById('form-suku-n').addEventListener('submit', function(event) {
    event.preventDefault();

    const u1 = parseFloat(document.getElementById('u1').value);
    const b = parseFloat(document.getElementById('b').value);
    const un = parseFloat(document.getElementById('un').value);

    const n = ((un - u1) / b) + 1;
    document.getElementById('hasil-suku-n').textContent = n;

    let history = JSON.parse(localStorage.getItem('history_tentukanSukuN')) || [];
    history.push(`Nilai n: ${un}, U1: ${u1}, Beda: ${b}, Suku ke-n: ${n}`);
    localStorage.setItem('history_tentukanSukuN', JSON.stringify(history));
});