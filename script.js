document.getElementById('name').addEventListener('input', (e) => {
    document.getElementById('preview-name').innerText = e.target.value || "Juan Pérez";
});

document.getElementById('title').addEventListener('input', (e) => {
    document.getElementById('preview-title').innerText = e.target.value || "Desarrollador Web";
});

document.getElementById('phone').addEventListener('input', (e) => {
    document.getElementById('preview-phone').innerText = e.target.value || "+54 123 456 789";
});

document.getElementById('email').addEventListener('input', (e) => {
    document.getElementById('preview-email').innerText = e.target.value || "correo@ejemplo.com";
});

document.getElementById('bg-color').addEventListener('input', (e) => {
    document.getElementById('card-preview').style.backgroundColor = e.target.value;
});

document.getElementById('download-btn').addEventListener('click', () => {
    html2canvas(document.getElementById('card-preview')).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'tarjeta.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
document.getElementById('font-family').addEventListener('change', (e) => {
    document.getElementById('card-preview').style.fontFamily = e.target.value;
});
document.getElementById('download-btn').addEventListener('click', () => {
    const preview = document.getElementById('card-preview');
    const pdf = new jsPDF(); // Crear un nuevo documento PDF
    pdf.html(preview, {
        callback: (doc) => {
            doc.save('tarjeta.pdf');
        },
        x: 10,
        y: 10,
    });
});
document.getElementById('template').addEventListener('change', (e) => {
    const card = document.getElementById('card-preview');
    card.className = `card ${e.target.value}`;
});
