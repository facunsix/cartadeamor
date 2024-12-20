document.getElementById("abrirCartaBtn").addEventListener("click", function () {
    document.getElementById("mensajeCarta").style.display = "block";
    this.style.display = "none";
  
    for (let i = 0; i < 50; i++) {
      setTimeout(function () {
        if (Math.random() > 0.5) {
          crearCorazon();
        } else {
          crearImagen();
        }
      }, i * 1000); // Más tiempo entre cada aparición
    }
  });
  
  function crearCorazon() {
    const corazon = document.createElement("span");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
  
    posicionarElemento(corazon);
    document.getElementById("corazones").appendChild(corazon);
  
    // Difuminar y eliminar
    setTimeout(() => {
      corazon.style.opacity = 0;
      setTimeout(() => corazon.remove(), 10000); // Espera a que termine la transición
    }, 9000); // Mantener visible 9 segundos antes de difuminar
  }
  
  function crearImagen() {
    const imagen = document.createElement("span");
    imagen.classList.add("imagen");
  
    // Selección aleatoria de una de las 12 imágenes
    const randomImage = Math.floor(Math.random() * 13) + 1; 
    imagen.style.backgroundImage = `url('images/imagen${randomImage}.jpg')`;

  
    posicionarElemento(imagen);
    document.getElementById("corazones").appendChild(imagen);
  
    // Difuminar y eliminar
    setTimeout(() => {
      imagen.style.opacity = 0;
      setTimeout(() => imagen.remove(), 1000); // Espera a que termine la transición
    }, 9000); // Mantener visible 9 segundos antes de difuminar
  }
  
  function posicionarElemento(elemento) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    const offsetX = (Math.random() - 0.5) * 500; // Mayor separación horizontal
    const offsetY = (Math.random() - 0.5) * 500; // Mayor separación vertical
  
    elemento.style.left = `${centerX + offsetX}px`;
    elemento.style.top = `${centerY + offsetY}px`;
  }
  