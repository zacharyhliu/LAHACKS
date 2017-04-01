//Replace Ad with anything - functions?
// var ads = $(".ad").remove();
$(".ad").each(function() {
  // $(this).append("<div class='replaceAd' id='ra" + x + "'
  //   ></div>");
  // x++;
  // var y = "#ra" + x;
  // $(y).
  var width = $(this).css( "width" );
  var height = $(this).css("height");
  console.log(width);
  console.log(height);

  $(this).after("<div style='height:'" + height + "; width:'" + width + "; display:block;>Test</div>")

  // $(".replaceAd").width($(this).width());
  $(this).remove();
});


