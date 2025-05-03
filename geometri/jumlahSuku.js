document.getElementById('form-sn').addEventListener('submit', function(event) {
    event.preventDefault();

    const u1 = parseFloat(document.getElementById('u1').value);
    const r = parseFloat(document.getElementById('r').value);
    const n = parseInt(document.getElementById('n').value);

    let sn;
    if (r > 1) {
        sn = u1 * (Math.pow(r, n) - 1) / (r - 1);
    } else {
        sn = u1 * (1 - Math.pow(r, n)) / (1 - r);
    }

    document.getElementById('hasil-sn').textContent = `Jumlah Suku ke-${n}: ${sn}`;

    let history = JSON.parse(localStorage.getItem('history_cariJumlahSukuG')) || [];
    history.push(`U1: ${u1}, Rasio: ${r}, Suku ke-${n}, Sn: ${sn}`);
    localStorage.setItem('history_cariJumlahSukuG', JSON.stringify(history));
});
