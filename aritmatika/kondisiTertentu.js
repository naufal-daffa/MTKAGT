document.getElementById('form-suku-n').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input
    const u1 = parseFloat(document.getElementById('u1').value);
    const b = parseFloat(document.getElementById('b').value);
    const un = parseFloat(document.getElementById('un').value);
    
    // Rumus untuk mencari suku ke-n
    const n = ((un - u1) / b) + 1;
    
    // Menampilkan hasil perhitungan
    const hasilElement = document.getElementById('hasil-suku-n');
    
    if (Number.isInteger(n) && n > 0) {
      hasilElement.textContent = `Suku ke-${n}`;
    } else {
      hasilElement.textContent = "Tidak ada n yang memenuhi";
    }
  });