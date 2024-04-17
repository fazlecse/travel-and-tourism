

// Preloader area
const preloader = document.getElementById("preloader");
function preloder_function() {
    preloader.style.display = "none";
}

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});



$(document).ready(function () {
    // owl carousel1
    $('.carousel-area1').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3,
            },
            550: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });
    // owl carousel2
    $('.carousel-area2').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 10,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3,
            },
            550: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });


    // Testimonial section start
    // Owl carousel 
    $(function (e) {
        "use strict";
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: false,
            dots: true,
            // rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $('.testimonial-carousel2').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: false,
            dots: true,
            // rtl: true,
            dotsEach: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $('.hero-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });
    // Testimonial section end

    // range-area
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 800,
        to: 500,
        grid: true
    });


    // cmn select2 start
    $('.cmn-select2').select2({

    });
    // cmn select2 end

    // cmn-select2 with image start
    $(document).ready(function () {
        $('.cmn-select2-image').select2({
            templateResult: formatState,
            templateSelection: formatState
        });
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end

    // cmn select2 modal start
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn select2 modal start

    if ($(".fancybox-carousel-section").length) {
        // Fancybox carousel section start
        // Initialise Carousel
        const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
            Dots: false,
        });

        // Thumbnails
        const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
            Sync: {
                target: mainCarousel,
                friction: 0,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: true,
        });

        // Customize Fancybox
        Fancybox.bind('[data-fancybox="gallery"]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });
        // Fancybox carousel section end
    }

    // flatpickr start
    flatpickr("#myID", {});
    // flatpickr end

});

// Bootstrap datepicker start
$('.date-picker').datepicker({
    // options here
    format: 'dd/mm/yyyy',

});
// Bootstrap datepicker end

// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Int Tel Input With Flags and Dial Codes start
if ($(".login-signup-page").length) {
    const input = document.querySelector("#telephone");
    window.intlTelInput(input, {
        initialCountry: "bd",
        separateDialCode: true,
    });
}
// Int Tel Input With Flags and Dial Codes end

// input field show hide password start
if ($(".login-signup-page").length) {
    const password = document.querySelector('.password');
    const passwordIcon = document.querySelector('.password-icon');

    passwordIcon.addEventListener("click", function () {
        console.log("password icon clicked");
        if (password.type == 'password') {
            password.type = 'text';
            passwordIcon.classList.add('fa-eye-slash');
        } else {
            password.type = 'password';
            passwordIcon.classList.remove('fa-eye-slash');
        }
    })
}
// input field show hide password end

// // Qr section start
// var qr = QRCode.generatePNG(document.getElementById("qrUrl").value, {
//     ecclevel: "M",
//     format: "html",
//     margin: 4,
//     modulesize: 8,
// });

// var img = document.createElement("img");
// img.src = qr;
// document.getElementById("qrcode").appendChild(img);
// var download = (document.getElementById("download-qr").href = qr);
// // Qr section end

// input box click to focus input start
document.addEventListener("DOMContentLoaded", function () {
    function handleInput(inputBox) {
        const inputField = inputBox.querySelector(".form-control");
        inputBox.addEventListener("click", function () {
            inputField.focus();
        });
    }

    const inputBox = document.querySelector(".input-box");
    handleInput(inputBox);
    const inputBox2 = document.querySelector(".input-box2");
    handleInput(inputBox2);
});

// input box click to focus input end