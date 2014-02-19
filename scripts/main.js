/* global $, _ */

(function() {
    "use strict";

    var ColourScheme = {
        TOMORROW: {
            body:               "#282a2e",
            text:               "#81a2be",
            linkText:           "#e0e0e0",
            titleText:          "#b5bd68",
            subtitleText:       "#f0c674",
            sectionHeadingText: "#a3685a",
            sectionBody:        "#373b41",
            button:             "#b5bd68",
            buttonText:         "#373b41"
        },
        EIGHTIES: {
            body:               "#2d2d2d",
            text:               "#6699cc",
            linkText:           "#e8e6df",
            titleText:          "#99cc99",
            subtitleText:       "#ffcc66",
            sectionHeadingText: "#d27b53",
            sectionBody:        "#393939",
            button:             "#99cc99",
            buttonText:         "#393939"
        },
        // RAILSCASTS: {
        //     body:               "#272935",
        //     text:               "#6d9cbe",
        //     linkText:           "#d4cfc9",
        //     titleText:          "#519f50",
        //     subtitleText:       "#ffc66d",
        //     sectionHeadingText: "#da4939",
        //     sectionBody:        "#3a4055",
        //     button:             "#519f50",
        //     buttonText:         "#3a4055"
        // },
        MOCHA: {
            body:               "#3B3228",
            text:               "#8ab3b5",
            linkText:           "#b8afad",
            titleText:          "#beb55b",
            subtitleText:       "#f4bc87",
            sectionHeadingText: "#cb6077",
            sectionBody:        "#534636",
            button:             "#beb55b",
            buttonText:         "#534636"
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

        setColours(newColourScheme);

        return newColourScheme;

    }

    function setColours(colourScheme) {

        $("body").css({
            "background-color": colourScheme.body,
            "color": colourScheme.text
        });

        $("a").css({
            "color": colourScheme.linkText
        });

        $(".header-title").css({
            "color": colourScheme.titleText
        });

        $(".header-subtitle").css({
            "color": colourScheme.subtitleText
        });

        $(".section-title").css({
            "color": colourScheme.sectionHeadingText
        });

        // FIXME: Animate this transition with the accordion.
        $(".section-body-wrapper").css({
            "background-color": colourScheme.sectionBody
        });

        $(".repo-button, .social-button, .email-button").css({
            "background-color": colourScheme.button,
            "color": colourScheme.buttonText
        });

    }

    function setAllSectionBodyMaxHeights(minMaxHeight, isOnResize) {

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

        if(sectionBodyMaxHeight < minMaxHeight) {
            bodyOverflowYValue   = "auto";
            sectionBodyMaxHeight = minMaxHeight;
        }

        $(".section-body-wrapper").each(function() {
            $(this).css("max-height", sectionBodyMaxHeight);
        });

        $("body").css("overflow-y", bodyOverflowYValue);

    }

    $(function() {

        var colourScheme = ColourScheme.TOMORROW;

        setColours(colourScheme);

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

        $(".main-content").accordion({
            active: false,
            beforeActivate: function() {
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
})();
