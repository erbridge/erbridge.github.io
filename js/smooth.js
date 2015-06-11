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
    duration: 250,
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
        $spinner.addClass('animation-scene--is-exiting');
        $spinner.show();
      }, 250);
    },
  },
  onReady: {
    duration: 250,
    render: function($container, $content) {
      clearTimeout(spinnerTimeout);
      $spinner.removeClass('animation-scene--is-exiting');
      spinnerTimeout = setTimeout(function() {
        $spinner.hide();
      }, 100);

      $container.removeClass('animation-scene--is-exiting');
      $container.html($content);
    },
  },
  onAfter: function() {
    $body.css('cursor', 'auto');
    $body.find('a').css('cursor', 'auto');

    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || smoothState.href);
    }
  },
}).data('smoothState');

})(jQuery);
