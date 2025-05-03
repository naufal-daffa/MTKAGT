document.getElementById('form-suku').addEventListener('submit',
    function(event) {
    event.preventDefault();

    const n = parseFloat(document.getElementById('n').value);
    const u1 = parseFloat(document.getElementById('u1').value);
    const beda = parseFloat(document.getElementById('beda').value);

    const suku_n = u1 + (n - 1) * beda;
    document.getElementById('hasil-suku').textContent = suku_n;

    let history = JSON.parse(localStorage.getItem('history_cariSuku')) || [];
    history.push(`Nilai n: ${n}, U1: ${u1}, Beda: ${beda}, Suku ke-n: ${suku_n}`);
    localStorage.setItem('history_cariSuku', JSON.stringify(history));
});