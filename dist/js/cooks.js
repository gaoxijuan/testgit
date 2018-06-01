$(function(){
				(function(){	
					$.ajax({
					type:"get",
					url:"http://h6.duchengjiu.top/shop/api_goods.php",
					async:true,
					data:{
				cat_id:"69",
				
			},
					success:function(data){
						var data= data.data;
						
						
						var str = "";
						
						for(var i =0 ;i<5;i++){
							
							str+="<div><span>"+1+"</span><p><em>"+44+"</em>"+data[i].goods_name+"</p><span><b>￥"+data[i].price+"</b><em>"+5+"</em></span><input type='button' class='btn' value='添加购物车' data-id='" + data[i].goods_id + "'><a href='../html/detail.html?id=" +data[i].goods_id + "'><img src='"+data[i].goods_thumb+"' class='btn_all'><p class='yin'></p></a></div>"
							
							
							
						}
						
						var oBox=document.getElementById("content1");
						if(oBox){
							oBox.innerHTML+=str;
						}
						
						(function(){
								$("#content1 div").hover(function(){
									$(this).find(".yin").css({"display":"none"})
								$(this).find(".yin").fadeIn(300);
								},function(){
									$(this).find(".yin").fadeOut(300);
								})
							})();
					
						(function(){
							$(".btn").click(function() {
							$(".kuang").delay(1400).show(0).delay(4000).hide(0);
							var obj=JSON.parse(getCookie("cart"));
							 var str=""  ;
			     var nums_total=0
				for(var attr in obj){
				
					$.ajax({
						type:"get",
						url:"http://h6.duchengjiu.top/shop/api_goods.php",
						async:true,
				
						data:{
							
							goods_id:attr,
						cat_id:"69"},
							
						
						success:function(data){
							
							var data=data.data;
							
							var num_total=data[0].price*obj[attr];
							nums_total+=num_total;
							
							$("#shu_mon").html(nums_total);
							
						}

                           
                           
})
					}
							
							
							$(".kuang .sum").click(function(){
								$(".kuang").css({"display":"none"})
							})
						})
						})();
						
						
						var aBtn=document.getElementsByClassName("btn");
						
						var oNum=document.getElementById("cartNum");
						
						
						if(getCookie("cart") !== undefined){
							//console.log(getCookie("cart"))
							var obj = JSON.parse(getCookie("cart"));
							//console.log(obj);
						}else {
							var obj = {};
						}
						var sum = 0;
						for(var b in obj) {
							
							sum += obj[b];
							
						}
			
						oNum.children[0].innerHTML = sum;
						$("#sh_in").html(sum)
							for(var i = 0; i < aBtn.length; i++) {
				aBtn[i].onclick = function() {
					var productId = this.getAttribute("data-id");
					if(obj[productId] == undefined) {
						obj[productId] = 1;
					} else {
						obj[productId]++;
					}

					
					var sum = 0;
					for(var b in obj) {
						sum += obj[b];
					}

					oNum.children[0].innerHTML = sum;
                    $("#sh_in").html(sum)
					var objToStr = JSON.stringify(obj);
					setCookie("cart", objToStr, 7);
				}
			}
					
					}
				});
				
			})();	
			
			
			
			(function(){	
					$.ajax({
					type:"get",
					url:"http://h6.duchengjiu.top/shop/api_goods.php",
					async:true,
					success:function(data){
						var data= data.data;
						
						
						var str = "";
						var str1="";
						var str2="";
						for(var i =0 ;i<data.length;i++){
							
							str+="<div><a href='../html/detail.html?id=" + data[i].goods_id+ "'><img src='"+data[i].goods_thumb+"' class='btn_all'></a><p><span>跨品牌满168减50上不封顶</span></p><em>超级品牌</em></div>"
							
							str1+="<div><a href='../html/detail.html?id=" + data[i].goods_id + "'><img src='"+data[i].goods_thumb+"' class='btn_all'><p class='yin'></p></a><p><em>"+44+"</em>"+data[i].goods_name+"</p><span><b>￥"+data[i].price+"<em>￥5</em></b></span><input type='button' class='btn' value='添加购物车' data-id='" + data[i].goods_id + "'></div>"
						    str2+="<div><a href='../html/detail.html?id=" + data[i].goods_id + "'><img src='"+data[i].goods_thumb+"' class='btn_all'><em>"+data[i].goods_name+"</em></a><ul><li>补水</li><li>保湿</li><li>美白</li><li>养颜</li></ul><div><span>￥</span><span>"+data[i].price+"</span><b>(5折)</b><em>444</em><input type='button' class='btn' value='添加购物车' data-id='" + data[i].goods_id + "'></div></div>"
	    			
	    			
						
						}
						
						var oContent2=document.getElementById("content2"),
						    oMain=document.getElementById("main"),
						    oContent3=document.getElementById("content3");
						    
						    if(oContent2){
						    	oContent2.innerHTML+=str;
						    }
						    if(oContent3){
						    	oContent3.innerHTML+=str1;
						    }
						    if(oMain){
						    	oMain.innerHTML+=str2;
						    	
						    }
						    
						var aBtn=document.getElementsByClassName("btn");
						
						var oNum=document.getElementById("cartNum");
						
						
						if(getCookie("cart") !== undefined){
							
							var obj = JSON.parse(getCookie("cart"));
							
						}else {
							var obj = {};
						}
						var sum = 0;
						for(var b in obj) {
							
							sum += obj[b];
							
						}
			
								oNum.children[0].innerHTML = sum;
								$("#sh_in").html(sum)
									for(var i = 0; i < aBtn.length; i++) {
						aBtn[i].onclick = function() {
							var productId = this.getAttribute("data-id");
							if(obj[productId] == undefined) {
								obj[productId] = 1;
							} else {
								obj[productId]++;
							}
		
							
							var sum = 0;
							for(var b in obj) {
								sum += obj[b];
							}
		
							oNum.children[0].innerHTML = sum;
							$("#sh_in").html(sum)
		
							var objToStr = JSON.stringify(obj);
							setCookie("cart", objToStr, 7);
						}
					
					}	    
						    
						    
						    (function(){
							$(".btn").click(function() {
							$(".kuang").delay(1400).show(0).delay(4000).hide(0);
							$(".kuang .sum").click(function(){
								$(".kuang").css({"display":"none"})
								})
							})
							})();
							(function(){
								$("#content3 div").hover(function(){
									$(this).find(".yin").css({"display":"none"})
								$(this).find(".yin").fadeIn(300);
								},function(){
									$(this).find(".yin").fadeOut(300);
								})
							})();
						    
						for (var i=1;i<$("#content3 div").length;i++) {
							if(i%4==0){
								$("#content3 div")[i-1].style.marginRight=0+"px";
							}
						
						}
						for (var i=1;i<$("#main div").length;i++) {
							if(i%4==0){
								$("#main div")[i-1].style.marginRight=0+"px";
							}
						}
					}
				});
				
			})();
				
				
				
				
				
				 
			})