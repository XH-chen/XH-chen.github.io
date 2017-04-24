//设置每一屏的高度，自适应；
function setheight(){
	var iH=document.documentElement.clientHeight;
	var section = document.getElementsByClassName("section");
	for(var i = 0;i<section.length;i++){
		section[i].style.height=(iH-60)+"px";
	}
}
setheight();

window.onresize=function(){
	location.reload();
}
//第四页轮播图效果的实现；
function setlunbo(){
	var list=document.getElementById("userggpt");
	var page=document.getElementsByClassName("page")[0];
	var lunbotu=document.getElementsByClassName("lunbotu")[0];
	var btn=document.getElementsByClassName("lrBtn")[0];
	var span=lunbotu.getElementsByTagName("span");
	var left=btn.children[0];
	var right=btn.children[1];
	var lunbodiannav=document.getElementsByClassName("lunbodian")[0];
	var lunbodian = lunbodiannav.children;
	var lunbonum=0;
	var on_off=true;
	function setdiancolor(){
		for(var j =0;j<lunbodian.length;j++){
			lunbodian[j].className="";
		}
		lunbodian[lunbonum].className="active";
	}
	for(var i=0;i<lunbodian.length;i++){
		lunbodian[i].index=i;
		lunbodian[i].onclick=function(){
			var index = this.index;
			lunbonum=index;
			setdiancolor();
			lunbotu.style.marginLeft=-lunbonum*357+"px";
		}
	}
	right.onclick=function(){
		if(on_off){
			if(lunbonum==4){
				lunbonum=4
			}else{
				lunbonum++;
			}
			setdiancolor();
			lunbotu.style.marginLeft=-lunbonum*357+"px";
			on_off=false;
			setTimeout(function(){
				on_off=true;
			},1000)
		}
	}
	left.onclick=function(){
		if(on_off){
			if(lunbonum==0){
				lunbonum=0
			}else{
				lunbonum--;
			}
			setdiancolor();
			lunbotu.style.marginLeft=-lunbonum*357+"px";
			on_off=false;
			setTimeout(function(){
				on_off=true;
			},1100)
		}
	}
	span[0].onclick=function(){
		window.open("Movies.html")
	}
	span[1].onclick=function(){
		window.open("music.html")
	}
	span[3].onclick=function(){
		window.open("book.html")
	}
	span[2].onclick=function(){
		window.open("picture.html");
	}
	var search = document.getElementsByClassName("search")[0];
	span[4].onclick=function(){
		search.style.display="block";
	}
}

setlunbo();



//设置点击第四页搜索时候，链接百度搜索api的效果
function setsearch(){
	var txt = document.getElementById("txt");
	var btn = document.getElementById("btn");
	var search = document.getElementsByClassName("search")[0];
	var list=document.getElementById("searchlist");
	var close = document.getElementsByClassName("search_close")[0];
	close.onclick=function(){
		search.style.display="none";
	}
	search.onclick=function(){
		list.style.display="none";
	}
	btn.onclick=function(){
		var val = txt.value;
		window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=97316620_hao_pg&wd="+val);
	}
	txt.oninput=function(){
		var val = txt.value;
		if(!val){return};
		jsonp({
			url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
			param:{
				wd:val
			},
			fnName:"fn",
			cbName:"cb",
			success:function(data){
				var arr = data.s;
				list.style.display="block";
				list.innerHTML="";
				var len = Math.min(arr.length,10);
				for(var i=0;i<len;i++){
					for(var i=0;i<arr.length;i++){
						var li = document.createElement('li');
						li.innerHTML = '<a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+arr[i]+'" target="_blank">'+arr[i]+'</a>';
						list.appendChild(li);
					}
				}
			}
		})
	}
}
setsearch();


//jsonp封装函数
function jsonp(obj){
	obj.param[obj.cbName] = obj.fnName;
	var oS = document.createElement('script');
	var arr = [];
	for(var attr in obj.param){
		arr.push(attr+'='+obj.param[attr]);
	}
	oS.src = obj.url+'?'+arr.join('&');
	document.body.appendChild(oS);
	window[obj.fnName] = function(data){
		obj.success&&obj.success(data);
	}
	document.body.removeChild(oS);
}

//转化时间，变为2017-03-04这样的时间格式
function getTime(num){
	var data=new Date(num*1000);
	var year=data.getFullYear();
	var month=data.getMonth()+1;
	var oday=data.getDate();
	var ohour=data.getHours();
	var omin=data.getMinutes();
	var osec=data.getSeconds();
	return year+"-"+month+"-"+oday+" "+ohour+":"+omin+":"+osec;
}
//数组的查找，如果有则返回
function arrindexof(str,arr){
	for(var i=0;i<arr.length;i++){
		if(str==arr[i]){
			return i;
		}
	}
	return -1;
}

//设置评论区域的效果；
var review_num=1;
function setreview(){
	var txt = $("#txtarea");
	var btn = $("#sec6btn");
	var list = $(".sec6Right");
	dataRender(review_num);
	setbtn();
	function dataRender(num){
		$.ajax({
			type:"get",
			url:"weibo.php?act=get&page="+num,
			success:function(data){
				var myjson = new Function("","return"+data)();
				list.html("");
				for(var i=0;i<myjson.length;i++){
					var obj = myjson[i];
					var li = $("<li>");
					var str = '<p id="oP">'+obj.content+'</p>'+
								'<div class="sec6descript">'+
									'<div class="sec6desLeft"><span>'+getTime(obj.time)+'</span></div>'+
									'<div class="sec6desRight">'+
										'<span class="up" id='+obj.id+'>'+obj.acc+'</span>'+
										'<span class="down" id='+obj.id+'>'+obj.ref+'</span>'+
										'<span class="del" id='+obj.id+'>删除</span>'+
									'</div>'+
								'</div>'
					li.html(str);
					list.append(li);
				}
				
			}
		});
	}
	btn.on("click",function(){
		var val = txt.val();
		var list = $(".sec6Right");
		if(val.trim().length>=10&&val.trim().length<=50){
			$.ajax({
				type:"get",
				url:"weibo.php?act=add&content="+val,
				success:function(data){
					var myjson = new Function("","return"+data)();
					console.log(myjson);
					var li = $("<li>");
					var str = '<p id="oP">'+val+'</p>'+
								'<div class="sec6descript">'+
									'<div class="sec6desLeft"><span>'+getTime(myjson.time)+'</span></div>'+
									'<div class="sec6desRight">'+
										'<span class="up" id='+myjson.id+'>0</span>'+
										'<span class="down" id='+myjson.id+'>0</span>'+
										'<span class="del" id='+myjson.id+'>删除</span>'+
									'</div>'+
								'</div>';
					li.html(str);
					list.prepend(li);
					txt.html("");
				}
			});
			setbtn();
		}else if(val.trim().length<10){
			alert("字数过少，请重新新输入")
		}else if(val.trim().length>50){
			alert("字数过长，请发邮件至1078937456@qq.com")
		}
	})
	$(document).on("keydown",function(ev){
		if(ev.keyCode==13){
			console.log(1);
		}
	})
	if(!window.localStorage.getItem("arr1")){
		window.localStorage.setItem("arr1","");
	}
	if(!window.localStorage.getItem("arr2")){
		window.localStorage.setItem("arr2","");
	}
	
	var arr1=window.localStorage.getItem("arr1").split(",");
	var arr2=window.localStorage.getItem("arr2").split(",");
	
	$(".sec6Right").on("click",".up",function(){
		var id = this.id;
		var sub = this;
		var mynum=parseInt(this.innerHTML);
		if(arrindexof(id,arr1)==-1){
			$.ajax({
				type:"get",
				url:"weibo.php?act=acc&id="+id,
				success:function(data){
					mynum++;
					sub.innerHTML=mynum;
				}
			});
			arr1.push(id);
			window.localStorage.setItem("arr1",arr1);
		}else{
			alert("你已经点过了");
		}
		
	})
	$(".sec6Right").on("click",".down",function(){
		var id = this.id;
		var sub = this;
		var mynum=parseInt(this.innerHTML);
		if(arrindexof(id,arr2)==-1){
			$.ajax({
				type:"get",
				url:"weibo.php?act=ref&id="+id,
				success:function(data){
					mynum++;
					sub.innerHTML=mynum;
				}
			});
			arr2.push(id);
			window.localStorage.setItem("arr2",arr2);
		}else{
			alert("你已经点过了");
		}
		
	})
	$(".sec6Right").on("click",".del",function(){
		var id = this.id;
		$.ajax({
			type:"get",
			url:"weibo.php?act=del&id="+id,
			success:function(data){
				var parent = $(this).parent().parent().parent().remove();
				dataRender(review_num);
				setbtn();
			}
		});
	})
	function setbtn(){
		$.ajax({
			type:"get",
			url:"weibo.php?act=get_page_count",
			success:function(data){
				$("#reviewbtn").html("");
				var count = new Function("","return"+data)().count;
				$("#reviewbtn").fullbtn({
					bColor:"green",
					oldColor:"white",
					textColor:"white",
					oldtxtColor:"#767C8A",
					len:10,
					max:count,
					btncallback:function(data){
						dataRender(data);
					}
				})
			}
		});
	}
}
setreview();



//设置音乐播放效果图
function setmusic(){
	var music = document.getElementsByTagName("audio")[0];
	var omusic = document.getElementById("musCon");
	var on_off=true;
	omusic.onclick=function(){
		if(music.paused){
			music.play();
			timer = setInterval(function(){
				rouate++;
				omusic.style.transform="rotateY("+rouate%360+"deg)";
			},10)
		}else{
			music.pause();
			clearInterval(timer);
		}
		
	}
	var rouate=0;
	var timer = setInterval(function(){
		rouate++;
		omusic.style.transform="rotateY("+rouate%360+"deg)";
	},10)
}


setmusic();