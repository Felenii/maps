$( document ).ready(function() {

    $('#menu1, #menu2, #menu3, #menu4').focusout(function(){
    	$('#quantity_menu_1').html($('#menu1').val());
    	$('#quantity_menu_2').html($('#menu2').val());
    	$('#quantity_menu_3').html($('#menu3').val());
    	$('#quantity_menu_4').html($('#menu4').val());

    	$('#cost1').html($('#price1').data('price') * $('#menu1').val());
    	$('#cost2').html($('#price2').data('price') * $('#menu2').val());
    	$('#cost3').html($('#price3').data('price') * $('#menu3').val());
    	$('#cost4').html($('#price4').data('price') * $('#menu4').val());

    });
});

