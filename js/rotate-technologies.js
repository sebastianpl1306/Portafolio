const images = document.getElementsByTagName("img");
let position = 0;

async function rotateImagesAnimation(){
    setInterval(() => {
        position = position > images.length ? 0 : position += 1;
        if(images[position]){
            images[position].classList.add('animation-technologies');
            setTimeout(() => {
                images[position].classList.remove('animation-technologies');
            }, 1500)
        }
    }, 2000);
}

async function prueba( imagen ){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log({imagen});
        }, 2000);
    })
}

rotateImagesAnimation();