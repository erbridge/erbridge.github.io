function setAllSectionBodyMaxHeights(isOnResize) {

    var sectionBodyMaxHeight =  $(window).height() - ($(".header").outerHeight(true));

    if(!isOnResize) {
        // FIXME: The header outerHeight seems to be off by 9 pixels during initial setup.
        sectionBodyMaxHeight -= 9;
    }

    $(".section-title").each(function() {
        sectionBodyMaxHeight -= $(this).outerHeight(true);

        if(!isOnResize) {
            // FIXME: Each of these are off by 3 pixels.
            sectionBodyMaxHeight -= 3;
        }
    });

    $(".section-body").each(function() {
        $(this).css("max-height", sectionBodyMaxHeight);
    });
}

$(function() {

    $(".main-content").accordion({
        active: false,
        collapsible: true,
        header: ".section-title",
        heightStyle: "content"
    });

    // FIXME: This doesn't seem to work if the window is already smaller than the size of the page.
    setAllSectionBodyMaxHeights(false);

    $(window).resize(function() {
        setAllSectionBodyMaxHeights(true);
    });
});
