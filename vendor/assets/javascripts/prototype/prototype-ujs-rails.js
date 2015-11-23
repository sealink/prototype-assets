// Handle CSRF tokens for prototype ajax
//
// All link, form, button ujs has been disabled (jquery-ujs does it for us).
//
// Only retains the Ajax.Responder.register call which
// adds csrf-token handling for any manual prototype Ajax.Request
(function() {
  Ajax.Responders.register({
    onCreate: function(request) {
      var token = $$('meta[name=csrf-token]')[0];
      if (token) {
        if (!request.options.requestHeaders) request.options.requestHeaders = {};
        request.options.requestHeaders['X-CSRF-Token'] = token.readAttribute('content');
      }
    }
  });
})();
