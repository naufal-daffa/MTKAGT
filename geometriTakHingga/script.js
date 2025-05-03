function parseInput(value) {
    if (value.includes('/')) {
      const parts = value.split('/');
      if (parts.length === 2) {
        const numerator = parseFloat(parts[0]);
        const denominator = parseFloat(parts[1]);
        if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
          return numerator / denominator;
        }
      }
      return NaN;
    } else {
      return parseFloat(value);
    }
  }

  document.getElementById('form-jumlahDeret').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = parseInput(document.getElementById('a').value);
    const r = parseInput(document.getElementById('r').value);

    const hasilElement = document.getElementById('hasil-jumlahDeret');

    if (isNaN(a) || isNaN(r)) {
      hasilElement.textContent = 'Input tidak valid.';
      return;
    }

    if (Math.abs(r) >= 1) {
      hasilElement.textContent = 'Deret tak hingga hanya berlaku jika |r| < 1';
      return;
    }

    const jumlah = a / (1 - r);
    hasilElement.textContent = jumlah;

    let history = JSON.parse(localStorage.getItem('history_jumlahDeret')) || [];
    history.push(`Nilai jumlah deret: ${jumlah}, a: ${a}, r: ${r}`);
    localStorage.setItem('history_jumlahDeret', JSON.stringify(history));
  });