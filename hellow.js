$(document).ready(function(){
  $(".know-per-btn").click(function(){
      $(".section").css("left","0px");
      $(".section").show();
  })
  $(".know-value-btn").click(function(){
    $(".value-section").css("left","0px");
    $(".value-section").show();
    
})
$(".home").click(function(){
    $(this).parents(".value-section,.section").slideUp(500);
})
$(".know-value").click(function(){
    $(".section").css("left","100%");
    $(".value-section").show();
    $(".home").hide();
    
});

$(".know-percen").click(function(){
    $(".section").css("left","0px");
    $(".value-section").hide();
    $(".home").hide();
});
var percentage_value;
var know_per_number;
var total_value;
var value_Number;
var percentage;
var total_part;


 $(".know-per-number").keyup(function () {
     percentage_value = $(this).val();    
});
$(".know-left-number").keyup(function () {
    know_per_number = $(this).val();   
});
function calculation(){
  total_value= (know_per_number/percentage_value)*100;
  return total_value;
}
$(".calculate").click(function(){
    $(this).parents(".know-percentage-section").find(".display").val(calculation() + "%");
});

$(".input-first").keyup(function () {
    value_Number = $(this).val();    
});
$(".input-second").keyup(function () {
    percentage = $(this).val();   
});
function total(check){
    total_part=(value_Number*percentage)/100;
    var whole_value=(parseInt(value_Number)-parseInt(total_part));

    if(check=="h"){
        return whole_value;
    }
    if(check=="t"){
        return total_part;
    }
}
$(".click-btn").click(function(){
    $(this).parents(".value-section").find(".display").val(total('h'));
    $(this).parents(".value-section").find(".output").val("Discount : "+ total('t'));
});
});

