// init typewriter.js

var animatedTitle = document.getElementById('animatedTitle');
var typewriter = new Typewriter(animatedTitle, {
    loop: true,
    devMode: false,
    strings: ["a front-end developer.", "a UX/UI designer.", "happy if you scroll down and explore her work."],
    autoStart: true,
    typingSpeed: 80,
    deleteSpeed: 35
});
typewriter.pauseFor(1200).deleteAll();

// init TweenLite

var target = $(".project-link");
target.hover(function () {
    TweenLite.to(this, .5, {
        boxShadow: "#000 inset 300px 0 0 0",
        color: "white"
    })
}, function () {
    TweenLite.to(this, .5, {
        boxShadow: "#000 inset 0px 0 0 0",
        color: "#666"
    })
});
// init bLazy
var bLazy = new Blazy({
    // breakpoints: [{
    //     width: 420 // Max-width
    //         ,
    //     src: 'data-src-small'
    // }],
    success: function (element) {
        setTimeout(function () {
            // We want to remove the loader gif now.
            // First we find the parent container
            // then we remove the "loading" class which holds the loader image
            var parent = element.parentNode;
            parent.className = parent.className.replace(/\bloading\b/, '');
        }, 200);
    }
});

//res
$(window).on("resize", function () {
    if (window.innerWidth < 600) {
        Draggable.create(".carousel-scroll-container-inner", {
            bounds: ".carousel-scroll-container",
            //allowNativeTouchScrolling:false,
            type: "x"
        });
        $(".gallery>img,.gallery>video").wrap("<div class='carousel-slide'></div>");
        $('.gallery').removeClass('gallery').addClass(
            'carousel-scroll-container-inner');
        if (!$('.carousel-scroll-container-inner').parent().hasClass('carousel-scroll-container')) {
            $(".carousel-scroll-container-inner").wrap("<div class='carousel-scroll-container'></div>");
        }
    } else {
        $('.carousel-slide img,.carousel-slide video').unwrap().unwrap();
        $('.carousel-scroll-container').removeClass('carousel-scroll-container').addClass(
            'gallery');
    }
}).resize();