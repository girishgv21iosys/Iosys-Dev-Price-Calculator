$(document).ready(function () {
  // Tabers click
  $(".dream-srvc-blk").on("click", function () {
    var sam = $(this).attr("id");
    $(".dream-srvc-blk").removeClass("active");
    $("div#" + sam).addClass("active");
    $(".srvcs-cntnr").hide();
    $(".srvcs-cntnr." + sam).css("display", "flex");
  });

  var experience;
  var field;

  // Experienced selection


  $(".dream-team-level").click(function () {
    var expArray = [];
    var obj = {};
    $(".dream-team-level").each(function () {
      obj[0] = $(this).data('experience');
      obj[1] = $(this).data('field');
      if ($(this).is(":checked"))
        expArray.push({
          'exp': $(this).data('experience'),
          'from': $(this).data('from'),
          'price': $(this).data('price')
        });
    });
    console.log(expArray);
  });

  // Increment Numbers
  $(".add").on("click", function () {
    var $qty = $(this).closest(".adding-devs-counter").find(".qty");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
  });

  // Decrement Numbers
  $(".remove").on("click", function () {
    var $qty = $(this).closest(".adding-devs-counter").find(".qty");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $qty.val(currentVal - 1);
    }
  });
});