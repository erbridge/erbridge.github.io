(function($) {

'use strict';

var $body = $('body');
var $mainContent = $('#main');
var $spinner = $('#spinner');
var spinnerTimeout;

var smoothState = $mainContent.smoothState({
  prefetch: true,
  pageCacheSize: 5,
  onStart: {
    duration: 250,
    render: function() {
      $body.css('cursor', 'wait');
      $body.find('a').css('cursor', 'wait');

      $mainContent.addClass('animation-scene--is-exiting');

      spinnerTimeout = setTimeout(function() {
        $spinner.addClass('animation-scene--is-exiting');
        $spinner.show();
      }, 500);

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
      clearTimeout(spinnerTimeout);
      $spinner.hide();
      $spinner.removeClass('animation-scene--is-exiting');

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

$('a').click(function() {
});

})(jQuery);
