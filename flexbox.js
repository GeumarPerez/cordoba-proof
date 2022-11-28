const imagenes = document.querySelectorAll('.main__img')
const imagenLight = document.querySelector('.section2__img2');
const contenedorLight = document.querySelector('.main__section2')
const closeLight = document.querySelector('.section2__img')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguesa.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguesa.style.opacity = '0';
}