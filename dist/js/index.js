$(function(){
	
	
	$(".sorts_dl").hover(function(){
		
		var m=$(this).index();
		
		$(".sorts_dd").eq(m).css({"display":"block"})
	},function(){
		var m=$(this).index();
		$(".sorts_dd").eq(m).css({"display":"none"});
	})
	
	    
		$(".more_dl").hover(function(){
		var m1=$(this).index();
		
		$(".more_dd").eq(m1-1).css({"display":"block"})
	},function(){
		var m1=$(this).index();
		$(".more_dd").eq(m1-1).css({"display":"none"});
	})
		
		
		
		$(".sorts").hover(function(){
			
			$("#more em").css({"display":"none"});
			$(".more_dl").slideDown(function(){
				$(this).css({"display":"block"});
			});
			$(".sorts .chakan").css({"display":"block"});
			
		},
		function(){
			$(".sorts .chakan").css({"display":"none"});
			$(".more_dl").slideUp(function(){
				$(this).css({"display":"none"});
				$("#more em").css({"display":"block"});
				
			});
		})
		
		
		
		
		//banner
		var $banner=$("#banner"),
		    $banList=$banner.find("div"),
		     $nav = $(".nav"),
			 $navList = $nav.find("li");
		  
		var count=0;
		
		function move(){
			
			$banList.eq(count).fadeIn(400).siblings().fadeOut(400);
		}
		move();
		setInterval(function(){
			count++;
			if(count==$banList.length){
				count=0;
			}
			move();
			$navList.eq(count).addClass("select").siblings().removeClass("select");
		},2000)
		
		
		
		
     //mifeng  
     $(window).scroll(function(){
     	if($(document).scrollTop()>=220){
     		 $(".mifeng").css({"display":"block",})
     		
				}
				else{
					$(".mifeng").css({"display":"none"})
					 
				}
     })
      $(window).scroll(function(){
     	if($(document).scrollTop()>=320){
     		 
     		 $(".ding").css({"display":"block",})
				}
				else{
					
					 $(".ding").css({"display":"none",})
				}
		$(".ding").click(function(){
			$("body,html").stop().animate({"scrollTop":0},800)
		})
     })
     
    
   
    
    var str_=location.search;
    var str_u=str_.split("=")[1]
    if(str_u==undefined){
    	$("#use").html("")
    }else{
    	$("#use").html(str_u)
    }
        
//      
//      if(getCookie("cart")==undefined){
//					
//			}else{
//				
//				
//				var obj=JSON.parse(getCookie("cart"));
//			        
//			     var str=""  ;
//			     var nums_total=0
//				for(var attr in obj){
//				
//					$.ajax({
//						type:"get",
//						url:"http://h6.duchengjiu.top/shop/api_goods.php",
//						async:true,
//				
//						data:{
//							
//							goods_id:attr},
//							
//						
//						success:function(data){
//							
//							var data=data.data;
//							console.log(obj[attr]);
//							console.log(data[0]);
//							console.log(data[0].price)
//							var num_total=data[0].price*obj[attr];
//							nums_total+=num_total;
//							console.log(nums_total);
//							
//						}
//
//                         
//                         
//})
//					}
//				}




})
