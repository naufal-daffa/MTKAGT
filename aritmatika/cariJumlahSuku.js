document.getElementById('form-sn').addEventListener('submit', function(event) {
    event.preventDefault();

    const u1 = parseFloat(document.getElementById('u1').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);

    const sn = (n / 2) * (2 * u1 + (n - 1) * b);
    document.getElementById('hasil-sn').textContent = sn;

  
    let history = JSON.parse(localStorage.getItem('history_cariJumlahSuku')) || [];
    history.push(`U1: ${u1}, Beda: ${b}, Jumlah Suku ke-n: ${n}, Sn: ${sn}`);
    localStorage.setItem('history_cariJumlahSuku', JSON.stringify(history));
});