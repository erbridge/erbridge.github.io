(function($) {

'use strict';

var $body = $('body');

var content = $('#main').smoothState({
  prefetch: true,
  pageCacheSize: 5,
  onStart: {
    duration: 250,
    render: function () {
      content.toggleAnimationClass('animation-scene--is-exiting');
      $body.animate({
        scrollTop: 0,
        scrollLeft: 0,
      }, 100);
    },
  },
  callback: function(url) {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || url);
    }
  },
}).data('smoothState');

})(jQuery);
