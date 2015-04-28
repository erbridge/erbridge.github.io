(function($) {

'use strict';

var $body = $('body');

var mainContent = $('#main').smoothState({
  prefetch: true,
  pageCacheSize: 5,
  onStart: {
    duration: 250,
    render: function () {
      mainContent.toggleAnimationClass('animation-scene--is-exiting');
      $body.animate({
        scrollTop: 0,
        scrollLeft: 0,
      }, 100);
    },
  },
  onEnd : {
    duration: 100,
    render: function (url, $container, $content) {
      var oldPageContentHeight = $('.page-content').height();

      $body.css('cursor', 'auto');
      $body.find('a').css('cursor', 'auto');
      $container.html($content);

      var $pageContent = $('.page-content');

      var newPageContentHeight = $pageContent.height();
      $pageContent.height(oldPageContentHeight);
      $pageContent.animate({
        height: newPageContentHeight,
      }, 100);
    }
  },
  callback: function(url) {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || url);
    }
  },
}).data('smoothState');

})(jQuery);
