(function($) {

'use strict';

$('#main').smoothState({
  callback: function(url) {
    if (window.ga) {
      window.ga('send', 'pageview', window.location.pathname || url);
    }
  },
});

})(jQuery);
