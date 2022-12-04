
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


var nav_sections = $('section');
var main_nav = $('#navbar li, .mobile-nav');

$(window).on('scroll', function() {

    var cur_pos = $(this).scrollTop() + 200;

    // Menu Opacity on scrolling and hidding source

    if (cur_pos > 350) {
        document.querySelector('#navbar').style.opacity = 0.9;
        document.querySelector('#showcase .source').style.display = "none";
    }
    else {
        document.querySelector('#navbar').style.opacity = 1;
        document.querySelector('#showcase .source').style.display = "block";
    }

    // Navigation active state on scroll

    nav_sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }

        if (cur_pos < 300) {
            $("#navbar ul li a").removeClass('active');
        }
    });
});