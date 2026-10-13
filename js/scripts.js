document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.getElementById("titulo-tipado");
    if (!elemento) return;

    const textoOriginal = elemento.textContent;
    elemento.textContent = ""; 
    let i = 0;

    function escribirComoPluma() {
        if (i < textoOriginal.length) {
            let salto = Math.random() < 0.2 ? 2 : 1; 
            let fragmento = textoOriginal.substr(i, salto);
            elemento.textContent += fragmento;
            i += salto;

            let tiempoEspera;
            const ultimoCaracter = fragmento.slice(-1);

            if (ultimoCaracter === '.' || ultimoCaracter === ',') {
                tiempoEspera = Math.random() * 300 + 250; 
            } else if (ultimoCaracter === ' ') {
                tiempoEspera = Math.random() * 120 + 80;  
            } else {
                tiempoEspera = Math.random() * 140 + 30; 
            }

            setTimeout(escribirComoPluma, tiempoEspera);
        }
    }

    setTimeout(escribirComoPluma, 800);
});


const container = document.querySelector('.habilidades-container');

if (container) {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        container.style.setProperty('--mouse-x', `${x}px`);
        container.style.setProperty('--mouse-y', `${y}px`);
    });
}