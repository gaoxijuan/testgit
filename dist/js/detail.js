$(function() {
		
	/*详情*/
$(".de_carts").click(function(){window.location.href="../html/carts.html"})
	var str = location.search;
	var proId = str.split("=")[1];
	console.log(proId)

	detial();
	var oNum = document.getElementById("cartNum");
	var aBtn = document.getElementsByClassName("btn");
	var oBtn1 = document.getElementsByClassName("btn1")[0];

	function detial() {

		$.ajax({
			type: "get",
			url: "http://h6.duchengjiu.top/shop/api_goods.php",
			async: true,
			data:{
				cat_id:"69",
				
			},
			success: function(data) {

				var data = data.data;

				var oDe_img = document.getElementById("de_img"),
					oBiao = document.getElementById("biao"),
					oTi = document.getElementById("ti"),
					oBiao1 = document.getElementById("biao1"),
					oTi1 = document.getElementById("ti1"),
					oMoney = document.getElementById("title_price");

				var str1 = "";

				for(var i = 0; i < data.length; i++) {

					if(data[i].goods_id == proId) {

						oDe_img.innerHTML = "<img src='" + data[i].goods_thumb + "'>";
						oBiao.innerHTML = data[i].goods_desc;
						oTi.innerHTML = data[i].goods_name;
						oBiao1.innerHTML = data[i].goods_desc;
						oTi1.innerHTML = data[i].goods_name;
						oMoney.innerHTML = data[i].price;

						zengjia();

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
						}
						carts()

						function carts() {
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

							oNum.children[0].innerHTML = sum;
							
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

									var objToStr = JSON.stringify(obj);
									setCookie("cart", objToStr, 7);
								}
							}

						}

					}

				}
			}
		})
	};

	/*table*/
	checkTable();

	function checkTable() {
		var $Top = $(".pro_deails .top");
		var $conList = $(".bottom li");
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
			if(scrollTop > 900) {
				
				$Top.addClass("scrol");
			} else {
				$Top.removeClass("scrol");
			}
		})

		$(".top .pro_top").eq(0).addClass("hover");

		$(".top .pro_top").click(function() {
			$(this).addClass("hover").siblings().removeClass("hover");
			var index = $(this).index();
			$("body,html").stop().animate({ "scrollTop": $conList.eq(index).offset().top }, 500);

		})
	};

	/*zengjia*/
	
	$(".btn").click(function() {

		$.ajax({
			type: "post",
			url: "http://h6.duchengjiu.top/shop/api_goods.php",
			async: true,
			data:{
				cat_id:"69",
				
			},
			success: function(data) {
				var data = data.data;
				console.log(data)
				for(var i = 0; i < data.length; i++) {
					if(data[i].goods_id == proId) {
						console.log(data[i].price)
						$("#kuang_money").html(data[i].price)

					}
				}
			}
		});

		$(".kuang").delay(1400).show(0).delay(4000).hide(0);
		$(".kuang .sum").click(function() {
			$(".kuang").css({ "display": "none" })
		})
	})
	var oPro_details=document.getElementById("per_deails")
	$(".btn").hover(function() {
		oPro_details.style.display="block";
		$.ajax({
			type: "post",
			url: "http://h6.duchengjiu.top/shop/api_goods.php",
			async: true,
			data:{
				cat_id:"69",
				
			},
			success: function(data) {
				var data = data.data;
				console.log(data)
				for(var i = 0; i < data.length; i++) {
					if(data[i].goods_id == proId) {
						console.log($("#per_deails"))
						console.log($("data"))
						 oPro_details.innerHTML="<div><img src='" + data[i].goods_thumb + "'><h3>"+data[i].goods_name+"</h3><p><span>￥</span>"+data[i].price+"</p></div>"
						console.log(data[i].price)
						$("#kuang_money").html(data[i].price)

					}
				}
			}
		});

	},function(){
		oPro_details.style.display="none";
	})

})