function setAllSectionBodyMaxHeights(minHeight, isOnResize) {

    var bodyOverflowYValue   = "hidden";
    var sectionBodyMaxHeight = $(window).height() - ($(".header").outerHeight(true));

    if(!isOnResize) {
        // FIXME: The header outerHeight seems to be off by 9 pixels during initial setup, but not during resizing.
        sectionBodyMaxHeight -= 9;
    }

    $(".section-title").each(function() {
        sectionBodyMaxHeight -= $(this).outerHeight(true);

        if(!isOnResize) {
            // FIXME: Each of these are off by 3 pixels.
            sectionBodyMaxHeight -= 3;
        }
    });

    if(sectionBodyMaxHeight < minHeight) {
        bodyOverflowYValue   = "auto";
        sectionBodyMaxHeight = minHeight;
    }

    $(".section-body").each(function() {
        $(this).css("max-height", sectionBodyMaxHeight);
    });

    $("body").css("overflow-y", bodyOverflowYValue);
}

$(function() {

    $(".main-content").accordion({
        active: false,
        collapsible: true,
        header: ".section-title",
        heightStyle: "content"
    });

    var minSectionBodyMaxHeight = 100;

    setAllSectionBodyMaxHeights(minSectionBodyMaxHeight, false);

    $(window).resize(function() {
        setAllSectionBodyMaxHeights(minSectionBodyMaxHeight, true);
    });
});
