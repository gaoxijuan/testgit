$(function(){
	
	
	$("#nums").html(Math.floor(Math.random()*8999)+1000);
      
      $("#ma_id").click(function(){
//				console.log($("#nums"))
				var suiji_num=Math.floor(Math.random()*8999)+1000;
				
				$("#nums").html(suiji_num);
			})
	$("form #phone")[0].oninput=function(){
		/*phone*/
		$oPhone=$("form #phone").val();
		 $("form .lo_yin").css({"display":"none"});
		 $("form .lo_yin").eq(0).css({"display":"block"})
	   
	            /*密码*/
				$("form #pawd")[0].oninput=function(){
					$("form .lo_yin").css({"display":"none"});
		            $("form .lo_yin").eq(1).css({"display":"block"})
				
				$opawd=$("form #pawd").val();
				$(this).siblings("p").css({"display":"block"})
				
				/*验证码*/
					$("form #cods")[0].oninput=function(){
				    $("form .lo_yin").css({"display":"none"});
		            $("form .lo_yin").eq(2).css({"display":"block"})
					if($("form #cods").val()>4){
					$("form #cods").val($("form #cods").val().slice(0,4));
				     }
					
					var flag2=false;
					if($("form #cods").val()==$("#nums").html()){
						flag2=true;
				     }
				    if(flag2){
				    	console.log($oPhone,$opawd)
				    	$("#tijiao").click(function(){
				    		$.ajax({
				    			type:"post",
				    			url:"http://h6.duchengjiu.top/shop/api_user.php",
				    			data:{
				    				status:"login",
				    				username:$oPhone,
				    				password:$opawd
				    			},
				    			success:function(data){
				    				console.log("aaa");
				    				if(data["code"]==0){
				    					var user=data["data"]["username"]
				    					window.location.href="../index.html?id_u="+user+"";
				    					
				    				}else{
				    						$("#ce").html(data["message"]);
				    				}
				    				
				    			}
				    		})
				    	})
				    }
				}
				
			
			}
	
	}
	 
	 console.log("aaa")
	
	


	
	
	
})
