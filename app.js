const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn',' ');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    
        allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id); 
            element.classList.add('active');


        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

//-------------------------------

const eye = document.getElementsByClassName('eye')

document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + '%'
    const y = event.clientY * 100 / window.innerHeight + '%'

    for(let i = 0; i < 2; i++){
        eye[i].style.left = x
        eye[i].style.top = y

        eye[i].style.transform = `translate( -${x}, -${y})`

    }
}



// const eyeball = document.querySelector(".eye");

// document.addEventListener('mousemove', (e) => {
//     console.log(e)

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const a = document.getElementsByClassName("head")
//     const rekt = head.getBoundingClientRect();
//     const aX = rekt.left + rekt.width / 2;
//     const aY = rekt.top + rekt.height / 2;

//     const angleDeg = angle(mouseX, mouseY, aX, aY);

//     console.log(angleDeg)

//     const eyes = document.querySelectorAll('.eye')
//     eyes.forEach(eye => {
//         eye.style.transform = `rotate(${90 + angleDeg}deg)`;
//     })
// })

// function angle(cx, cy, ex, ey) {
//     const dy = ey - cy;
//     const dx = ex - cx;
//     const rad = Math.atan2(dx, dy);
//     const deg = rad * 180 / Math.PI;
//     return deg;
// }