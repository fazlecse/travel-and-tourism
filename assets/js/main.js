
// Preloader area
var preloader = document.getElementById("preloader");
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
    // owl carousel dashboard card
    $('.carousel-area1').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: false,
        dots: true,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            991: {
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
    });
    // Testimonial section end






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
const input = document.querySelector("#telephone");
window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
});
// Int Tel Input With Flags and Dial Codes end

// input field show hide password start
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
// input field show hide password end

// Qr section start
var qr = QRCode.generatePNG(document.getElementById("qrUrl").value, {
    ecclevel: "M",
    format: "html",
    margin: 4,
    modulesize: 8,
});

var img = document.createElement("img");
img.src = qr;
document.getElementById("qrcode").appendChild(img);
var download = (document.getElementById("download-qr").href = qr);
    // Qr section end
