(function($) {

'use strict';

var $body = $('body');

$('#main').smoothState({
  prefetch: true,
  pageCacheSize: 5,
  onStart: {
    duration: 100,
    render: function () {
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
});

})(jQuery);
