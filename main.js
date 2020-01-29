// 1. Recorrer el array de usuarios y por cada usuario
// crear una card con sus datos 

// 2. Manejar sistema de likes para que cada clic en cada 
// foto de usuario le de likes solo a ese usuario. 

const usuarios = [
  {
    nombre: "Pepita Gomez",
    descripcion: "Maquetadora",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Mariquita Thompson",
    descripcion: "Cantante de himno",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Pancracia Williams",
    descripcion: "Tenista",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Trufa Rodriguez Larreta",
    descripcion: "Cantante de feliz cumpleanos",
    foto: "img/foto.jpeg"
  },
]

let nuevoHTML = ``
for (let i = 0; i < usuarios.length; i++) {
  nuevoHTML = nuevoHTML + `${
    `<div class = "tarjeta">
    <div class="imagen">
      <img src="foto.png" alt="helado">
</div>
      <div class="descripcion">
        <h2> ${usuarios[i].nombre} </h2>
        <p>${usuarios[i].descripcion} </p>
        <p><i class = "fa fa-heart"></i> <span> 0 </span> likes</p>
      </div>
      </div>
      `
    }`

}

const seccion = document.querySelector("section")

seccion.innerHTML = nuevoHTML

const imagenes = document.getElementsByClassName("imagen")
const corazones = document.querySelectorAll(".fa.fa-heart")
const likes = document.querySelectorAll("span")

for (let i = 0; i < usuarios.length; i++) {
  imagenes[i].onclick = () => {
    corazones[i].classList.add("rojo")
    let cantidadDeLikes = Number(likes[i].textContent)
    cantidadDeLikes++
    likes[i].textContent = cantidadDeLikes
  }
  corazones[i].onclick = () => {
    if (corazones[i].classList.contains("rojo")) {
      corazones[i].classList.remove("rojo")
      let cantidadDeLikes = Number(likes[i].textContent)
      cantidadDeLikes--
      likes[i].textContent = cantidadDeLikes
    }
  }
}





