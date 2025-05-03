document.getElementById('form-sukuG').addEventListener('submit',
    function(event) {
    event.preventDefault();

    const n = parseFloat(document.getElementById('n').value);
    const u1 = parseFloat(document.getElementById('u1').value);
    const rasio = parseFloat(document.getElementById('rasio').value);

    const suku_n = u1 * Math.pow(rasio, n-1);
    console.log(suku_n);

    let history = JSON.parse(localStorage.getItem('history_cariSukuG')) || [];
    history.push(`Nilai n: ${n}, U1: ${u1}, Rasio: ${rasio}, Suku ke-n: ${suku_n}`);
    localStorage.setItem('history_cariSukuG', JSON.stringify(history));
});