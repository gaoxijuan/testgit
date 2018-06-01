$(function(){
	
	
	 var oList=document.getElementById("list");

	if(getCookie("cart")==undefined){
					$("#box").html("暂时没有添加任何商品")
			}else{
				var obj=JSON.parse(getCookie("cart"));
			        
			     var str=""  ;
				for(var attr in obj){
//					console.log(attr);
					
					$.ajax({
						type:"get",
						url:"http://h6.duchengjiu.top/shop/api_goods.php",
						async:true,
				
						data:{
							cat_id:"69",
							goods_id:attr},
							
						
						success:function(data){
							
							var data=data.data;
							
							console.log(data)
								str="<div><img src='"+data[0].goods_thumb+"'><p>"+data[0].goods_name+"</p><b>"+data[0].price+"<span>￥145</span></b><p class='dity-size-r'><span class='dity-m' id='dity-m'></span><input type='text' value='1' id='dity-input' class='dity-input' ><span class='dity-p' id='dity-p'></span></p><strong><em id='mo_a'>3</em><span>每件已优惠100</span></strong><p class='delBtn' data-id='"+attr+"'>删除</p></div>"

						oList.innerHTML+=str;
						
						   $mo_a=$("#mo_a")
						   console.log($mo_a);
						   $mo_a.html(data[0].price-100)
						   $dity_m = $("#dity-m");
							$dity_p = $("#dity-p");
							$input = $("input[id='dity-input']");
							$num = $("input[id='dity-input']").val();
							$num_yuan = $("input[id='dity-input']").val();
							
							$dity_m.click(function(){
								$num--;
								if($num <= 1) {
									$num = 1;
									

								} 
								
								$input.val($num);
								$total_mo=(data[0].price-100)*$num;
								$mo_a.html($total_mo);
								
							});
							var shu = data[0].sort_order;
							$dity_p.click(function(){
								
								$num++;

								if($num >= shu) {
									$num = shu;

								}
								$input.val($num);
								$total_mo=(data[0].price-100)*$num;
								$mo_a.html($total_mo);
							});
				var oDelBtn = document.getElementsByClassName("delBtn");
			for(var i = 0 ; i < oDelBtn.length; i++){
				oDelBtn[i].onclick = function(){
					var proID = this.getAttribute("data-id");
					delete obj[proID];
					oList.removeChild(this.parentNode);
					setCookie("cart",JSON.stringify(obj),7);
					
				}
				
			}
							
							
						}
					});
				}
	
	
}	
	
	djs();
	
	function djs(){
		var oCountDown=document.getElementById("countDown")
		
		if(getCookie("time")!=undefined){
			console.log(getCookie("time"))
			var total=140;
		}else{
			var tim=getCookie("time");
			tim=Number(tim);
			var total=tim;
		}
			
			var timer=setInterval(function(){
			if(total==0){
				clearInterval(timer);
				total=0;
				console.log("aa")
			}else{
				total=total-1;
				var minutes=parseInt(total/60);
		        var seconds=total%60;
		        var str=minutes+"分"+seconds+"秒";
		        oCountDown.innerHTML=str;
				
							setCookie("time",total)
					
			}
		},1000)
		
	}
	
	
	
	
	
	/*zengjia();

						function zengjia() {

							$dity_m = $("#dity-m");
							$dity_p = $("#dity-p");
							$input = $("input[id='dity-input']");
							$num = $("input[id='dity-input']").val();
							$num_yuan = $("input[id='dity-input']").val();

							

							$dity_m.click(function() {
								$num--;
								if($num <= 1) {
									$num = 1;
									$(".dity-size-x").css({ "display": "block" })

								} else {
									$(".dity-size-x").css({ "display": "none" })
								}
								$input.val($num);
								console.log($num);

								if(getCookie("cart") !== undefined) {
									//console.log(getCookie("cart"))
									var obj = JSON.parse(getCookie("cart"));
									//console.log(obj);
								} else {
									var obj = {};
								}
								var sum = 0;
								for(var b in obj) {

									sum += obj[b];

								}

								oBtn1.onclick = function() {
									console.log($num)

									if(obj[proId] == undefined) {
										obj[proId] = $num;
									} else {
										console.log(obj[proId]);
										obj[proId] += $num;
										console.log($num);
									}
									var sum = 0;

									for(var b in obj) {
										sum += obj[b];

									}

									oNum.children[0].innerHTML = sum;

									var objToStr = JSON.stringify(obj);
									console.log(objToStr)
									setCookie("cart", objToStr, 7);
								}

							});
							
							var shu = data[i].sort_order;
							
							$dity_p.click(function() {

								$num++;

								if($num >= shu) {
									$num = shu;

								}
								$input.val($num);
								if(getCookie("cart") !== undefined) {
									//console.log(getCookie("cart"))
									var obj = JSON.parse(getCookie("cart"));
									//console.log(obj);
								} else {
									var obj = {};
								}
								var sum = 0;
								for(var b in obj) {

									sum += obj[b];

								}

								oBtn1.onclick = function() {
									console.log($num)

									if(obj[proId] == undefined) {
										obj[proId] = $num;
									} else {
										console.log(obj[proId]);
										obj[proId] += $num;
										console.log($num);
									}
									var sum = 0;

									for(var b in obj) {
										sum += obj[b];

									}

									oNum.children[0].innerHTML = sum;

									var objToStr = JSON.stringify(obj);
									setCookie("cart", objToStr, 7);
								}

							})
						}*/
	
	
})
