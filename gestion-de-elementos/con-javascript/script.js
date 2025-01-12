// Asegura que el DOM se cargue completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Devuelve una imagen aleatoria
  const getRandomImage = () => {
    const images = [
      "../img/Anochetus_ghilianii.jpg",
      "../img/Aphaenogaster_iberica.jpg",
      "../img/Camponotus_cruentatus.jpg",
      "../img/Cardiocondyla_batesii.jpg",
      "../img/Cataglyphis_rosenhaueri.jpg",
      "../img/Crematogaster_auberti.jpg",
      "../img/Formica_sanguinea.jpg",
      "../img/Goniomma_hispanicum.jpg",
      "../img/Lasius_grandis.jpg",
      "../img/Messor_barbarus.jpg",
      "../img/Plagiolepis_schmitzii.jpg",
      "../img/Tapinoma_ibericum.jpg",
      "../img/Temnothorax_recedens.jpg",
      "../img/Tetramorium_forte.jpg"
    ]

    return images[Math.floor(Math.random() * images.length)]
  }

  // Cambia color de fondo
  const selectedColor = document.querySelector("#colorPicker")
  const main = document.querySelector("main")
  const changeColorButton = document.querySelector(".changeColor")
  
  changeColorButton.addEventListener("click", () => {
    main.style.backgroundColor = selectedColor.value
  })

  // Añade un nuevo elemento con una imagen al azar
  const addElementButton = document.querySelector(".addElement")

  addElementButton.addEventListener("click", () => {
    const newArticle = document.createElement("article")
    newArticle.innerHTML = `
      <img src="${getRandomImage()}">
      <button class="changeImage">Cambiar</button>
      <button class="eraseArticle">Borrar</button>
    `

    main.append(newArticle)
  })

  /**
   * Para que cada botón funcione sobre su respectivo article, utilizo
   * delegación de eventos con el método contains()
   */
  // Delegación de eventos para cambiar la imagen
  main.addEventListener("click", (event) => {
    if (event.target.classList.contains("changeImage")) {
      const img = event.target.previousElementSibling
      img.src = getRandomImage()
    }
  })

  // Delegación de eventos para borrar el artículo
  main.addEventListener("click", (event) => {
    if (event.target.classList.contains("eraseArticle")) {
      const article = event.target.parentElement
      main.removeChild(article)
    }
  })
})
