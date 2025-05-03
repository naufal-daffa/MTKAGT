document.getElementById('form-suku-n').addEventListener('submit', function(event) {
    event.preventDefault();

    const u1 = parseFloat(document.getElementById('u1').value);
    const r = parseFloat(document.getElementById('r').value);
    const un = parseFloat(document.getElementById('un').value);

    const n = ((un - u1) / r) + 1;
    document.getElementById('hasil-suku-n').textContent = Number.isInteger(n) && n > 0 ? n : "Tidak ada n yang memenuhi";

    let history = JSON.parse(localStorage.getItem('history_tentukanSukuNG')) || [];
    history.push(`Nilai n: ${un}, U1: ${u1}, Beda: ${r}, Suku ke-n: ${n}`);
    localStorage.setItem('history_tentukanSukuNG', JSON.stringify(history));
});