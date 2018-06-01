$(function(){

var count=0;

$("#mor1").click(function(){
	console.log(count);
	if(count%2==0){
		$(".ban_left").css({"display":"none"});
		$(".ban_1_yin").css({"display":"block"});
		$(this).html('收起 &and;');
		
	}else{
		$(".ban_left").css({"display":"block"});
		$(".ban_1_yin").css({"display":"none"});
		
		$(this).html('更多 &or;');
	}
	count++;
});



/*phone*/

})
