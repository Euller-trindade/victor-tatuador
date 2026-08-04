/* ============================
LOADER
============================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },500);

});

/* ============================
HEADER
============================ */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

/* ============================
MENU MOBILE
============================ */

const menu = document.querySelector("nav");

const menuBtn = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

/* ============================
FECHAR MENU
============================ */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

/* ============================
SCROLL REVEAL
============================ */

const sections = document.querySelectorAll("section");

function reveal(){

    const trigger = window.innerHeight * .85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("visible");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* ============================
ANIMAÇÃO DOS NÚMEROS
============================ */

const numbers = document.querySelectorAll(".numbers h1");

let started = false;

function counter(){

    if(started) return;

    const area = document.querySelector(".numbers");

    if(!area) return;

    const top = area.getBoundingClientRect().top;

    if(top < window.innerHeight-100){

        started = true;

        numbers.forEach(number=>{

            const text = number.innerText;

            const max = parseInt(text);

            if(isNaN(max)) return;

            let current = 0;

            const speed = max / 100;

            const timer = setInterval(()=>{

                current += speed;

                if(current >= max){

                    number.innerText = max+"+";

                    clearInterval(timer);

                }else{

                    number.innerText = Math.floor(current)+"+";

                }

            },15);

        });

    }

}

window.addEventListener("scroll",counter);

counter();

/* ============================
BOTÃO VOLTAR AO TOPO
============================ */

const topButton = document.createElement("div");

topButton.innerHTML = "↑";

topButton.className = "back-top";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="105px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.background="#d00000";
topButton.style.display="flex";
topButton.style.justifyContent="center";
topButton.style.alignItems="center";
topButton.style.cursor="pointer";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.opacity="0";
topButton.style.transition=".3s";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.opacity="1";

    }else{

        topButton.style.opacity="0";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ============================
EFEITO PARALLAX
============================ */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const value = window.scrollY;

    hero.style.backgroundPositionY = value * .4 + "px";

});

/* ============================
BOTÃO WHATSAPP
============================ */

const whatsapp = document.createElement("a");

whatsapp.href="https://wa.me/5575998685787";

whatsapp.target="_blank";

whatsapp.className="whatsapp";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

/* ============================
EFEITO HOVER DA GALERIA
============================ */

const galleryItems=document.querySelectorAll(".gallery-grid .item");

galleryItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="scale(1.04)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="scale(1)";

    });

});

/* ============================
FORMULÁRIO
============================ */

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    form.reset();

});

/* ============================
ANO AUTOMÁTICO NO FOOTER
============================ */

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} Vitera sp Tattoo - Todos os direitos reservados.`;

/* ============================
SCROLL SUAVE
============================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});