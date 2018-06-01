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
phone()
function phone(){
	
	var myreg1 = /^[1-3]\d{10}$/;
	//手机号
	var myreg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;//只含有数字和字母，6-10位
    
    
     
      $("#nums").html(Math.floor(Math.random()*9000)+1000);
      
      $("#ma_id").click(function(){
//				console.log($("#nums"))
				var suiji_num=Math.floor(Math.random()*8999)+1000;
				
				$("#nums").html(suiji_num);
			})
	$("form #phone")[0].oninput=function(){
		var flag1=false;
		$oPhone=$("form #phone").val();
		$(this).siblings("p").css({"display":"block"})
		if($oPhone.length>11){
			$("form #phone").val($oPhone.slice(0,11));
			$(this).siblings("p").css({"display":"none"});
			flag1=true;
		}
		if(myreg1.test($oPhone)){
			flag1=true;
			$(this).siblings("p").css({"display":"none"});
			
		    
		}
		
			$("form #cods")[0].oninput=function(){
				
				if($("form #cods").val()>4){
				$("form #cods").val($("form #cods").val().slice(0,4));
				
			}
				
				var flag2=false;
				if($("form #cods").val()==$("#nums").html()){
					flag2=true;
				}
				
				
				$("form #pawd")[0].oninput=function(){
					$(this).siblings("p").css({"display":"block"})
				    $psswd=$("form #pawd").val()
					var flag3=false;
					if($psswd.length>16){
						
						$("form #pawd").val($psswd.slice(0,16));
						$(this).siblings("p").css({"display":"none"});
						
					}
					if(myreg2.test($psswd)){
						
						
						$(this).siblings("p").css({"display":"none"});
						flag3=true;
					}
					
							  $("form #n_pawd")[0].oninput=function(){
							  	  
							
						      $psswd=$("form #pawd").val()
						      $n_passwd=$("form #n_pawd").val()
							  var flag4=false;
							  if($n_passwd.length>16){
						
								$("form #n_pawd").val($n_passwd.slice(0,16));
								
							
								
							}
									
							if($n_passwd==$psswd){
								
								
								$(this).siblings("p").css({"display":"none"});
								flag4=true;
							}else{
								$(this).siblings("p").css({"display":"block"});
								
							}
							console.log("aa")
							  console.log(flag1,flag2,flag3,flag4)
							if(flag1&&flag2&&flag3&&flag4){
							$("#tijiao").click(function(){
								    console.log(flag1,flag2,flag3,flag4)
								    $.ajax({
								    	type:"post",
								    	url:"http://h6.duchengjiu.top/shop/api_user.php",
								    	data:{
								    		status:"register",
								    		username:$oPhone,
								    		password:$psswd
								    	},
								    	success:function(data){
								    		console.log("aa")
                                             if(data["code"]==0){
                                             	var user=$oPhone
				    					window.location.href="../index.html?id_u="+user+"";
                                             	
                                             	
                                             }else{
                                             	$("#ce").html(data["message"]);
                                             	console.log("aa")
                                             }
								    		
								    		
								    		
								    	
								    	}
								    	
								    })
							    
							})
							 }
							
							
							
							
						}
							
					
				}
				
			}
		

	}
	
	
	
}
	
})
