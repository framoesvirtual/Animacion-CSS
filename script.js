const square = document.querySelector(".square");

// Posición inicial
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

// Aumentar velocidad (antes era 6, ahora puede ser hasta 15)
let speedX = (Math.random() - 0.5) * 15;
let speedY = (Math.random() - 0.5) * 15;

function moveSmoothly() {
    const maxX = window.innerWidth - square.clientWidth;
    const maxY = window.innerHeight - square.clientHeight;

    // Rebote en los bordes
    if (posX + speedX <= 0 || posX + speedX >= maxX) {
        speedX *= -1; // Invierte dirección en X
    }
    if (posY + speedY <= 0 || posY + speedY >= maxY) {
        speedY *= -1; // Invierte dirección en Y
    }

    // Actualizar posición
    posX += speedX;
    posY += speedY;
    square.style.left = `${posX}px`;
    square.style.top = `${posY}px`;

    // Cambio de color y tamaño aleatorio ocasional
    if (Math.random() < 0.02) { // 2% de probabilidad en cada frame
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        let newSize = Math.random() * 50 + 50; // Entre 50px y 100px
        square.style.width = `${newSize}px`;
        square.style.height = `${newSize}px`;
    }

    requestAnimationFrame(moveSmoothly); // Continuar animación
}

// Ajustar límites al redimensionar la ventana
window.addEventListener("resize", () => {
    posX = Math.min(posX, window.innerWidth - square.clientWidth);
    posY = Math.min(posY, window.innerHeight - square.clientHeight);
});

// Iniciar la animación
moveSmoothly();
