$("#cFluid").html($("#pregledContent").clone());
$("#cFluid > .container-fluid").show();

$("li > a").click(function () {
   $("#cFluid").html($("#" + $(this).attr("href")).clone());
   $("#cFluid > .container-fluid").show();
return false;
});