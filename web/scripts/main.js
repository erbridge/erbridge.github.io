ColourScheme = {
    DARK_GREEN: {
        text: "#fff",
        body: "#131",
        sectionBody: "#353"
    },
    DARK_PURPLE: {
        text: "#fff",
        body: "#113",
        sectionBody: "#335"
    },
    DARK_RED: {
        text: "#fff",
        body: "#311",
        sectionBody: "#533"
    }
};

function pickColourScheme() {

    var colourSchemeNum   = _.size(ColourScheme);
    var colourSchemeIndex = _.random(colourSchemeNum - 1);
    var colourSchemeKey   = _.keys(ColourScheme)[colourSchemeIndex];

    return ColourScheme[colourSchemeKey];

}

function setColourScheme(currentColourScheme) {

    var newColourScheme = pickColourScheme();

    while(currentColourScheme === newColourScheme) {
        newColourScheme = pickColourScheme();
    }

    $("body").css({
        "background-color": newColourScheme.body,
        "color": newColourScheme.text
    });

    // FIXME: Animate this transition with the accordion.
    $(".section-body").each(function() {
        $(this).css({
            "background-color": newColourScheme.sectionBody
        });
    });

    return newColourScheme;

}

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

    var colourScheme = ColourScheme.DARK_RED;

    $("body").css({
        "background-color": colourScheme.body,
        "color": colourScheme.text
    });

    $(".section-title").each(function() {
        $(this).focusin(function() {
            $(this).css({
                "outline": 0,
                "font-weight": "bold"
            });
        });

        $(this).focusout(function() {
            $(this).css({
                "font-weight": "normal"
            });
        });
    });

    $(".section-body").each(function() {
        $(this).css({
            "background-color": colourScheme.sectionBody
        });
    });

    $("a").each(function() {
        $(this).css({
            "color": colourScheme.text
        });
    });

    $(".main-content").accordion({
        active: false,
        beforeActivate: function(event, ui) {
            colourScheme = setColourScheme(colourScheme);
        },
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
