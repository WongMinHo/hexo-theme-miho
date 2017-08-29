$(function () {
    // 首页加载动画效果，并且不是手机端
    if (mihoConfig.isHome === true && document.body.clientWidth > 700) {
        // 滚动条监听使用 https://github.com/jlmakes/scrollreveal.js
        // http://daneden.github.io/animate.css/
        var animationNames = [
                "pulse", "fadeInRight", "flipInX", "lightSpeedIn", "rotateInUpLeft", "slideInUp", "zoomIn",
            ],
            len = animationNames.length,
            randomAnimationName = animationNames[Math.ceil(Math.random() * len) - 1];
        window.sr = ScrollReveal();
        //头部动画
        sr.reveal('#header-row', {
            duration: 0,
            afterReveal: function (documentElement) {
                $(documentElement).addClass('animated ' + randomAnimationName);
            }
        });
        //文章动画
        sr.reveal('.body-wrap > article', {
            duration: 0,
            afterReveal: function (documentElement) {
                $(documentElement).addClass('animated ' + randomAnimationName);
            }
        });
    }
});