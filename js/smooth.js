/* global jQuery */

(function($) {

'use strict';

var $body = $('body');
var $spinner = $('#spinner');
var spinnerTimeout;

var smoothState = $('#main').smoothState({
  prefetch: true,
  cacheLength: 5,
  onStart: {
    duration: 500,
    render: function($container) {
      $body.css('cursor', 'wait');
      $body.find('a').css('cursor', 'wait');

      $container.addClass('animation-scene--is-exiting');

      smoothState.restartCSSAnimations();

      $body.animate({
        scrollTop: 0,
        scrollLeft: 0,
      }, 100);
    },
  },
  onProgress: {
    duration: 0,
    render: function() {
      clearTimeout(spinnerTimeout);

      spinnerTimeout = setTimeout(function() {
        $spinner.addClass('animation-scene--is-entering');
        $spinner.show();
      }, 250);
    },
  },
  onReady: {
    duration: 500,
    render: function($container, $content) {
      clearTimeout(spinnerTimeout);

      var replaceContent = function() {
        $container.removeClass('animation-scene--is-exiting');
        $container.html($content);

        $body.css('cursor', 'auto');
        $body.find('a').css('cursor', 'auto');
      };

      if ($spinner.hasClass('animation-scene--is-entering')) {
        $spinner.removeClass('animation-scene--is-entering');

        spinnerTimeout = setTimeout(function() {
          $spinner.hide();
          replaceContent();
        }, 250);
      } else {
        replaceContent();
      }
    },
  },
  onAfter: function() {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || smoothState.href);
    }
  },
}).data('smoothState');

})(jQuery);
