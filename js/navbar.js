$(document).ready(function() {
    $(window).scroll(function() {
        if (($(document).scrollTop() > 50) || ($(".navbar>.container>button>span>i").hasClass('fa-times'))) {


            $(".navbar").css({
                "background-color": "#ffffff",
                "box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                "transition": "0.8s ease-in-out",
            });

            $(".navbar>.container>div>ul>li>a>button").removeClass('btn-outline-light').addClass('btn-outline-primary');

            $("nav i").css({
                "color": "#46A3FF"
            });



        } else {


            $(".navbar").css({
                "background-color": "transparent",
                "box-shadow": "none",
            });

            $(".navbar>.container>div>ul>li>a>button").removeClass('btn-outline-primary').addClass('btn-outline-light');

            $("nav i").css({
                "color": "#ffffff"
            });
        }
    });



    $(".navbar-toggler").click(function() {
        $(".navbar>.container>button>span>i").toggleClass("fa-times fa-bars");

        if ($(".navbar>.container>button>span>i").hasClass('fa-times')) {
            $(".navbar>.container>div>ul>li>a>button").removeClass('btn-outline-light').addClass('btn-outline-primary');
            $(".navbar").css({
                "background-color": "#ffffff",
                "box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
            });
            $("nav i").css({
                "color": "#46A3FF"
            });
        } else {

        }

    });

});