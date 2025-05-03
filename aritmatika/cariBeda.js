document.getElementById('form-beda').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const u1 = parseFloat(document.getElementById('u1').value);
    const u2 = parseFloat(document.getElementById('u2').value);
    

    const beda = u2 - u1;
    document.getElementById('hasil-beda').textContent = beda;


    let history = JSON.parse(localStorage.getItem('history_cariBeda')) || [];
    history.push(`U1: ${u1}, U2: ${u2}, Beda: ${beda}`);
    localStorage.setItem('history_cariBeda', JSON.stringify(history));
});
