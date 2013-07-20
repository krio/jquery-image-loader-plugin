/*
 * Krio Image Loader Jquery Plugin v1
 * http://krio.me/jquery-image-loader-plugin
 * http://github.com/jquery-image-loader-plugin
 */
(function ($) {
    $.fn.krioImageLoader = function (options) {
        var imagesToLoad = $(this).find("img").css({opacity: 0, visibility: "hidden"}).addClass("krioImageLoader"),
            imagesToLoadCount = imagesToLoad.size(),
            opts = $.extend({}, $.fn.krioImageLoader.defaults, options);

        var checkIfLoadedTimer = setInterval(function () {
            if (!imagesToLoadCount) {
                clearInterval(checkIfLoadedTimer);
            } else {
                imagesToLoad.filter(".krioImageLoader").each(function () {
                    if (this.complete) {
                        fadeImageIn(this);
                        imagesToLoadCount--;
                    }
                });
            }
        }, opts.loadedCheckEvery);

        var fadeImageIn = function (imageToLoad) {
            $(imageToLoad).css({visibility: "visible"}).animate({opacity: 1}, opts.imageEnterDelay, function () {
                $(imageToLoad).removeClass("krioImageLoader");
            });
        };
    };

    $.fn.krioImageLoader.defaults = {
        loadedCheckEvery: 350,
        imageEnterDelay: 300
    };
})(jQuery);