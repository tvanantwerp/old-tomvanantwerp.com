(function() {
  window.onload = format();

  function format() {
    // Set all external links to open in new windows/tabs
    var links = document.getElementsByTagName('a');
    for (var i = 0, j = links.length; i < j; i++) {
      var host = links[i].host;
      if (host.indexOf('tomvanantwerp.com') === -1) {
        links[i].target = '_blank';
      }
    }
  }
})();
