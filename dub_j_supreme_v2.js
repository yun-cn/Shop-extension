// Photo Name of item
var target = 'CVsY6ESWH2w'

// Your size
var preferredSize = "Medium"; // "Small", "Medium", "Large", "XLarge"

$('#container article div img').each(function() {
    var href = $(this).attr('src');
    //console.log(href.match(target));
    if (href.match(target)) {
      $(this)[0].click();
    }
});

/*
automatically choose correct size, if applicable
*/
(function waitTillArticlePageIsOpen() {
  // check if article page has loaded by looking at main image
  if ($("#img-main")[0]) {
    // choose appropriate size, if applicable
    if ($("select")[0]) {
      for (var i = 0; i < $("select")[0].options.length; i++) {
        if ($("select")[0].options[i].text == preferredSize) {
          $("select")[0].selectedIndex = i;
          break;
        }
      }
    }
    console.log("done choosing size.")
    addToCart()
    setTimeout(function() { checkoutList(); }, 3000)
  } else
    setTimeout(function(){ waitTillArticlePageIsOpen(); }, 10);
    console.log("waiting to load...");

  return;
})();

function addToCart() {
  /*
  Script to use on item screen
  */
  // add to cart
  document.getElementsByName('commit')[0].click();

  // Wait until cart updates, then go to checkout
  var itemsCountElm = $("#items-count");

  (function waitTillCartUpdates() {
    if (itemsCountElm.text() == '') {
      setTimeout(function(){ waitTillCartUpdates(); }, 10);
      return;
    } else {
      // Click checkout button
      $(".checkout")[0].click();
      return;
    }
  })();
}

function checkoutList() {
  /*
    Set Form
  */
  document.getElementById('credit_card_last_name').value = "ZHANG"
  document.getElementById('credit_card_first_name').value = "YUNLING"
  document.getElementById('order_email').value = "yun313350095@gmail.com"
  // document.getElementById().value =
}
