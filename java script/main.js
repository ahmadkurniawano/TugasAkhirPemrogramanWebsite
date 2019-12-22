
// Slide Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//Page Scrool

$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

//Paralax 

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.portfolio').offset().top - 150)

        $('.portfolio .card-portfolio').each(function (i) {
            setTimeout(function () {

                $('.portfolio .card-portfolio').eq(i).addClass('muncul');

            }, 200 * (i + 1));


        });

    if (wScroll > $('.webPopular').offset().top - 500)

        $('.webPopular .card-popular').each(function (i) {
            setTimeout(function () {
                $('.webPopular .card-popular').eq(i).addClass('muncul');

            }, 400 * (i + 1));


        });


});

// Chat PopUp
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

