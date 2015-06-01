$(window).scroll(function(){

var wScroll = $(this).scrollTop();

$('.logo').css({

	
'transform' : 'translate(0px, '+ wScroll/1 +'%) '



});
console.log(wScroll)


if (wScroll > 350)
{

//console.log('gwapo')
$('.logo').css({
	'position' : 'relative',
    
'transform' : 'translate(0px, 400px) '
});




}


});