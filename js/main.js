$(function() {
  initSizes();
  $(window).resize(initSizes); // heights adapt as window resizes
});

// set heights for each relevant section of .item-holders to be equal
function initSizes() {
  setSameHeight($('.people'), '.item-holder');
}

function setSameHeight($b, type) {
  var blockList = $b.find(type);

  if ($(window).width() > 767) {
    var max = 0;

    blockList.each(function() {
      var h = $(this).outerHeight();
      if (h > max)
        max = h;
    });

    blockList.each(function() {
      $(this).css('min-height', max);
    });

  } else { // small screens
    blockList.each(function() {
      $(this).css('min-height', 'auto');
    });
  }
}
