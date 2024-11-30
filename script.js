// Cambiar nombre en la vista previa
document.getElementById('name').addEventListener('input', (e) => {
    document.getElementById('preview-name').innerText = e.target.value || "Juan Pérez";
});

// Cambiar título en la vista previa
document.getElementById('title').addEventListener('input', (e) => {
    document.getElementById('preview-title').innerText = e.target.value || "Desarrollador Web";
});

// Cambiar teléfono en la vista previa
document.getElementById('phone').addEventListener('input', (e) => {
    document.getElementById('preview-phone').innerText = e.target.value || "+54 123 456 789";
});

// Cambiar email en la vista previa
document.getElementById('email').addEventListener('input', (e) => {
    document.getElementById('preview-email').innerText = e.target.value || "correo@ejemplo.com";
});

// Cambiar color de fondo en la vista previa
document.getElementById('bg-color').addEventListener('input', (e) => {
    document.getElementById('card-preview').style.backgroundColor = e.target.value;
});

// Cambiar fuente de la tarjeta
document.getElementById('font-family').addEventListener('change', (e) => {
    document.getElementById('card-preview').style.fontFamily = e.target.value;
});

// Cambiar plantilla de la tarjeta
document.getElementById('template').addEventListener('change', (e) => {
    const card = document.getElementById('card-preview');
    card.className = `card ${e.target.value}`;
});

// Función para descargar la tarjeta como PNG y PDF
document.getElementById('download-btn').addEventListener('click', () => {
    const preview = document.getElementById('card-preview');
    
    // Descargar como imagen (PNG)
    html2canvas(preview).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'tarjeta.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    // Descargar como PDF
    const pdf = new jsPDF(); // Crear un nuevo documento PDF
    pdf.html(preview, {
        callback: (doc) => {
            doc.save('tarjeta.pdf');
        },
        x: 10,
        y: 10,
    });
});
