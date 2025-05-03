function tampilkanHistory() {
    const historyContent = document.getElementById('historyContent');
    let history = JSON.parse(localStorage.getItem('history_cariBeda')) || [];

    if (history.length === 0) {
        historyContent.innerHTML = `<p>Anda belum memasukkan bilangan.</p>`;
    } else {
        let html = '<ul class="list-group">';
        history.forEach(item => {
            html += `<li class="list-group-item">${item}</li>`;
        });
        html += '</ul>';
        historyContent.innerHTML = html;
    }
}


function hapusHistory() {
    localStorage.removeItem('history_cariBeda');
    tampilkanHistory();
}


window.onload = tampilkanHistory;
