$(document).ready(function() {
    $(window).scroll(function() {
        if (($(document).scrollTop() > 50) || ($(".navbar>.container>button>span>i").hasClass('fa-times'))) {


            $(".navbar").css({
                "background-color": "#343a40",
                "box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                "transition": "0.8s ease-in-out",
            });




        } else {


            $(".navbar").css({
                "background-color": "transparent",
                "box-shadow": "none",
            });

        }
    });



    $(".navbar-toggler").click(function() {
        $(".navbar>.container>button>span>i").toggleClass("fa-times fa-bars");

        if ($(".navbar>.container>button>span>i").hasClass('fa-times')) {
            $(".navbar").css({
                "background-color": "#343a40",
                "box-shadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
            });

        } else {

        }

    });

});