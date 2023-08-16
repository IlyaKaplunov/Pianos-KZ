var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
 
let body = document.querySelector('body');
  
if (isMobile.any()) {
    body.classList.add('touch');
  
    let arrow = document.querySelectorAll('.arrow');

    for(i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
  
    arrow[i].addEventListener('click', function(e) {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
    });
    
    }
} else {
    body.classList.add('mouse');
}
  

/* window.onload = function() {
    document.addEventListener('click', documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains('arrow')) {
                targetElement.closest('.products__menu-item').classList.toggle('_hover');
            }
        }
    }
}
console.log('Привет'); */