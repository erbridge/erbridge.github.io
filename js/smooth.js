(function($) {

'use strict';

var $body = $('body');
var $mainContent = $('#main');

var smoothState = $mainContent.smoothState({
  prefetch: true,
  pageCacheSize: 5,
  onStart: {
    duration: 250,
    render: function() {
      $body.css('cursor', 'wait');
      $body.find('a').css('cursor', 'wait');

      $mainContent.addClass('animation-scene--is-exiting');

      smoothState.restartCSSAnimations();

      $body.animate({
        scrollTop: 0,
        scrollLeft: 0,
      }, 100);
    },
  },
  onEnd: {
    duration: 100,
    render: function(url, $container, $content) {
      $mainContent.removeClass('animation-scene--is-exiting');

      $container.html($content);

      $body.css('cursor', 'auto');
      $body.find('a').css('cursor', 'auto');
    },
  },
  callback: function(url) {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || url);
    }
  },
}).data('smoothState');

})(jQuery);
