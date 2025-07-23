const menuBar = document.getElementById("menubar");
const closebar = document.getElementById("closebar");
const navbar = document.getElementById("navmenu");

const navbaritem = document.querySelectorAll(".navbar .nav-item");
menuBar.addEventListener('click', () => {
    navbar.classList.toggle('open');
    document.body.classList.toggle("no-scroll"); 
})

closebar.addEventListener('click', () => {
    navbar.classList.toggle('open')
    document.body.classList.toggle("no-scroll");
})

// console.log(navbaritem)

navbaritem.forEach(element => {
    // console.log(element)
    element.addEventListener('click', () => {
        navbar.classList.toggle("open");
        document.body.style.overflow = "auto";
        document.body.classList.toggle("no-scroll");

        navbaritem.forEach(nav => {
            // console.log(nav)
            nav.classList.remove("active")
        });
        element.classList.add("active");
    })
})


window.addEventListener("scroll", function () {
  let header = document.getElementById("header");
  const stickyPoint = 100; 

//   console.log(stickyPoint, window.scrollY)

  if (window.scrollY > stickyPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  const scrollPosition = window.scrollY + 100; // adjust offset if header overlaps
//   console.log(scrollPosition)

  navbaritem.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    // console.log(section.id)
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      navbaritem.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});


function revealFunction() {

    window.sr = ScrollReveal({
        duration: 1350,
        distance: '20px',
        easing: 'ease-out'
    })

    sr.reveal('.reveal-top', {
        origin:'top',
        reset: false
    });
    sr.reveal('.reveal-left', {
        origin:'left',
        reset: false,
        delay: 100
    });

    sr.reveal('.reveal-right', {
        origin:'right',
        reset: false,
        delay: 400
    });

    sr.reveal('.work-cards', {
        origin: 'top',
        duration: 600,
        interval: 400,  // ← This adds the delay between cards
        easing: 'ease-in-out',
        reset: false
    })

    sr.reveal('.cards', {
        origin: 'bottom',
        duration: 600,
        interval: 400,  // ← This adds the delay between cards
        easing: 'ease-in-out',
        reset: false
    })

}

window.addEventListener("load", () => {
    revealFunction()
})