function setAllSectionBodyMaxHeights() {

    // FIXME: The header outerHeight seems to be off by 9 pixels.
    var sectionBodyMaxHeight =  $(window).height() - ($(".header").outerHeight(true) + 9);

    $(".section-title").each(function() {
        // FIXME: Each of these are off by 3 pixels.
        sectionBodyMaxHeight -= $(this).outerHeight(true) + 3;
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
    setAllSectionBodyMaxHeights();

    $(window).resize(function() {
        // FIXME: Set the section sizes without a reload.
        // Reload the page to fix the section sizes.
        location.reload(false);
    });
});
