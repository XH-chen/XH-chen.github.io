var btn=document.getElementById("btn");
var txt=document.getElementById("txt");
var list=document.getElementById("list");
var starnum=0;
sethtml("小小");
txt.oninput=function(){
	console.log(txt.value);
}

btn.onclick=function(){
	sethtml(txt.value);
}
function sethtml(vue){
	var val=vue;
	starnum=0;
	if(val.trim()){
		jsonp({
			url:'https://api.douban.com/v2/music/search',
			param:{
				q:val,
				count:10,
				start:starnum*10
			},
			fnName:'fn',
			cbName:'callback',
			success:function(data){
				var total=data.total;
				setlist(data);
				setstarpp();
				var total=data.total;
				function setlist(da){
					var arr=da.musics;
					$("#list").html("");
					for(var i=0;i<arr.length;i++){
						var obj=arr[i];
						var arr1=[];
						var attrs=obj.attrs;
//						obj.author[0]&&arr1.push(obj.author[0].name);
						attrs.media&&arr1.push(attrs.media[0]);
						attrs.pubdate&&arr1.push(attrs.pubdate[0]);
						attrs.publisher&&arr1.push(attrs.publisher[0]);
						attrs.singer&&arr1.push(attrs.singer[0]);
						attrs.version&&arr1.push(attrs.version[0]);
						var li=document.createElement("li");
						li.innerHTML='<div class="left"><img src="'+obj.image+'"/></div>'+
									'<div class="right">'+
										'<a target="_blank" href="https://book.douban.com/subject/'+obj.mobile_link+'/">'+obj.title+'</a>'+
										'<span class="authod">'+arr1.join(" /")+'</span>'+
										'<span class="split"></span><span>'+obj.rating.average+' ('+obj.rating.numRaters+'人评价)</span>'+
									'</div>'
						list.appendChild(li);
					}
				}
				function setstarpp(){
					var split=document.getElementsByClassName("split");
					for(var i=0;i<split.length;i++){
						var star=split[i];
						var nub=0;
						var num =Number(split[i].nextElementSibling.innerHTML.split("(")[0]);
						star.style.backgroundPosition="0px "+(-getnub(num)*11)+ "px";
					}
				}
				$("#allbtn").fullbtn({
					bColor:"green",
					oldColor:"yellow",
					len:10,
					max:Math.floor(total/10),
					btncallback:function(data){
						starnum=data;
						jsonp({
							url:'https://api.douban.com/v2/music/search',
							param:{
								q:val,
								count:10,
								start:starnum*10
							},
							fnName:'fn',
							cbName:'callback',
							success:function(data){
								setlist(data);
								setstarpp();
							}
						})
					}
				});
			}
		})
	}
}

function getnub(num){
	var nub=0;
	if(num<=9.2&&num>9){
		nub=1;
	}else if(num<=9&&num>8.5){
		nub=2;
	}else if(num<=8.5&&num>8){
		nub=3;
	}else if(num<=8&&num>7.5){
		nub=4;
	}else if(num<=7.5&&num>7){
		nub=5;
	}else if(num<=7&&num>6.5){
		nub=6;
	}else if(num<=6.5&&num>6){
		nub=7;
	}else if(num<=6&&num>5.5){
		nub=8;
	}else if(num<=5.5){
		nub=9;
	}
	return nub
}

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