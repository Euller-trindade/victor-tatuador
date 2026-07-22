/* ==========================================
   LIGHTBOX PROFISSIONAL
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightImage = document.createElement("img");

const close = document.createElement("span");
close.innerHTML = "&times;";

lightbox.appendChild(close);
lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

let currentIndex = 0;

/* ==========================================
ABRIR
========================================== */

function openLightbox(index){

    currentIndex = index;

    lightImage.src = galleryImages[index].src;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openLightbox(index);

    });

});

/* ==========================================
FECHAR
========================================== */

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

}

close.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

/* ==========================================
PRÓXIMA
========================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    lightImage.src=galleryImages[currentIndex].src;

}

/* ==========================================
ANTERIOR
========================================== */

function prevImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    lightImage.src=galleryImages[currentIndex].src;

}

/* ==========================================
TECLADO
========================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});

/* ==========================================
TOUCH (CELULAR)
========================================== */

let startX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>60){

        nextImage();

    }

    if(endX-startX>60){

        prevImage();

    }

});

/* ==========================================
EFEITO DE ENTRADA DAS IMAGENS
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

galleryImages.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="translateY(60px)";

    img.style.transition=".8s";

    observer.observe(img);

});