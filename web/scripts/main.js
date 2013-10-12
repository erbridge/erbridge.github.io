function setAllSectionBodyMaxHeights() {

    // FIXME: The header outerHeight seems to be off by 9 pixels.
    var sectionBodyMaxHeight =  $(window).height() - ($(".header").outerHeight(true) + 9);

    $(".section-title").each(function() {
        // FIXME: Each of these are off by 3 pixels.
        sectionBodyMaxHeight -= $(this).outerHeight(true) + 3;
        console.log($(this).outerHeight(true));
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

    setAllSectionBodyMaxHeights();

});
