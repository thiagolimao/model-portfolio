// Toogle Projets References
$(document).ready(function(){
    /***************************INICIO***************************/
    /********************* PORTFOLIO CUSTOM *********************/
    // Galerie References
    var play = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        slidesToShow: 1
    };
    var pause = {
        autoplay: false
    };

    $(".projet_content").hide();
    $(".proj_item").each(function(i) {
        $(this).click(function () {
            $(this).toggleClass('on');
            $(".projet_content:visible").slideUp("slow").find('.slider').each(function() {
                $(this).slick(pause);
            });
            $(".projet_content:eq("+i+"):hidden").slideToggle("slow").find('.slider').each(function() {
                if($(this).hasClass('slick-initialized')) {
                    $(this).slick(pause);
                } else {
                    $(this).slick(play);
                }
            });
        });
    });



});