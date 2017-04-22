//设置二级导航显示消失：
var ofloatTop = document.getElementsByClassName("floattop")[0];//获取二级导航的元素
function nav_1open(){
	ofloatTop.style.display = "block";
	
}//设置函数令二级导航显示
function nav_1close(){
	ofloatTop.style.display = "none";
}//设置函数令二级导航消失

//设置nav的文本轮播：
var nav_2repeatopen = document.getElementsByClassName("zc_1")[1];//获取反复显示文本的元素
var nav_2num = 0;//设置一个数字，用作下面函数所用
function nav_2repeat(){
	var arr = ["安卓充值9.8折","领取网易严选宝箱"];//设置数组，内容为显示的文本内容；
	if(nav_2num%2==0){
		nav_2repeatopen.innerHTML = arr[0];
	}else{
		nav_2repeatopen.innerHTML = arr[1];
	}
	nav_2num++ ;
}
var timer_0=setInterval("nav_2repeat()",5000);

//设置鼠标进入时清楚文本内容轮播，移出时候重新轮播
nav_2repeatopen.onmouseover=function(){
	clearInterval(timer_0);
}//清除文本内容轮播
nav_2repeatopen.onmouseout=function(){
	timer_0=setInterval("nav_2repeat()",5000);
}//开始文本内容轮播

//滚轮事件，令一级导航显示和消失
//alert(document.body.scrollTop)//测试一级导航显示的位置，测试值为52
var navfix = document.getElementsByClassName("fixnav")[0];
var content_0navword= document.getElementsByClassName("content_0navword");
window.onscroll=function(){
	if(document.body.scrollTop>46){
		navfix.style.display="block";
		for(i=0;i<6;i++){
			content_0navword[i].style.display="none";
		}
	}else{
		navfix.style.display="none";
		for(i=0;i<6;i++){
			content_0navword[i].style.display="inline-block";
		}
	}
}

//写入二维码扫描事件
var wechat_number = 1;
function wechat(){
	var wechat_scanLine=document.getElementsByClassName("scan_wechat")[0];
	wechat_number++;
	wechat_scanLine.style.top= wechat_number +"px";
	if(wechat_number==100){
		wechat_number=1;
	}
}
setInterval(wechat,30);

//写入第一个轮播效果
var obox =document.getElementById("content_1leftpic");
var repeatpic_1Number=1;
function repeatpic_1(){
	obox.innerHTML="<img src='img/content_10"+repeatpic_1Number+".jpg' />";
	repeatpic_1Number++;
	if(repeatpic_1Number==7){
		repeatpic_1Number=1;
	}
}
timer_1=setInterval(repeatpic_1,5000);
//写入标签移入变动图片轮播效果：
function repeatpic(obj){
	var str = String(obj.className);
	var num = String(Number(str.charAt(str.length-1))+1);
	obox.innerHTML="<img src='img/content_10"+num+".jpg' />";
	clearInterval(timer_1)
	repeatpic_1Number=num
}
function resettimer(){
	timer_1=setInterval(repeatpic_1,5000)
}

//写入轮播后的内容切换

function c1_fun(obj){
	var c1_nav = document.getElementsByClassName("content_1rightulliword");
	var c1_des = document.getElementsByClassName("content_1rightul1");
	var nav_num = obj.id.charAt(obj.id.length-1)*1;
	for(h=0;h<c1_nav.length;h++){
		if(h == nav_num){
			continue
		}
		c1_nav[h].style.background="white";
		c1_des[h].style.display ="none";
	}
	c1_nav[nav_num].style.background="#68D7FC";
	c1_des[nav_num].style.display ="block";
}

//设置主角按键换图像和文字：
//function charater_fun(obj){
//	var char_btn = document.getElementsByTagName("input");
//	var char_rigjt= document.getElementsByClassName("zj_word");
//	var char_num = (obj.className.charAt(obj.className.length-1))*1;
//	var char_des = document.getElementsByClassName("content_3middleandright"+(char_num+1))[0];
//	alert(char_des.className);
//	for(k=0;k<char_btn.length;k++){
//		if(k==char_num){
//			continue
//		}
//		char_rigjt[k].style.display="none";
//		char_btn[k+6].style.border="2px solid white";
//		char_btn[k+6].style.background="#C0DCD0";
//		document.getElementsByClassName("content_3middleandright"+(k+1))[0].style.display="none"
//	}
//	char_rigjt[char_num].style.display="none";
//	char_btn[char_num+6].style.border="2px solid white";
//	char_btn[char_num+6].style.background="#C0DCD0";
//	document.getElementsByClassName("content_3middleandright"+(char_num+1))[0].style.display="none"
//}

var qmbtn = document.getElementById("qingmingbtn");
var slbtn = document.getElementById("shenlebtn");
var ybybtn = document.getElementById("yuanboyabtn");
var bbbtn = document.getElementById("babaibiqiunibtn");
var zj_word0= document.getElementsByClassName("zj_word")[0];
var zj_word1= document.getElementsByClassName("zj_word")[1];
var zj_word2= document.getElementsByClassName("zj_word")[2];
var zj_word3= document.getElementsByClassName("zj_word")[3];
var zj_pic0 = document.getElementsByClassName("content_3middleandright1")[0];
var zj_pic1 = document.getElementsByClassName("content_3middleandright2")[0];
var zj_pic2 = document.getElementsByClassName("content_3middleandright3")[0];
var zj_pic3 = document.getElementsByClassName("content_3middleandright4")[0];

qmbtn.onclick=function(){
	qmbtn.style.border="2px solid black";
	qmbtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word0.style.display="block";
	zj_word1.style.display="none";
	zj_word2.style.display="none";
	zj_word3.style.display="none";
	zj_pic0.style.display="block";
	zj_pic1.style.display="none";
	zj_pic2.style.display="none";
	zj_pic3.style.display="none";
}
qmbtn.onmouseover=function(){
	qmbtn.style.border="2px solid black";
	qmbtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word0.style.display="block";
	zj_word1.style.display="none";
	zj_word2.style.display="none";
	zj_word3.style.display="none";
//	zj_pic0.style.display="block";
//	zj_pic1.style.display="none";
//	zj_pic2.style.display="none";
//	zj_pic3.style.display="none";
}

slbtn.onclick=function(){
	slbtn.style.border="2px solid black";
	slbtn.style.background="white";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word1.style.display="block";
	zj_word0.style.display="none";
	zj_word2.style.display="none";
	zj_word3.style.display="none";
	zj_pic1.style.display="block";
	zj_pic0.style.display="none";
	zj_pic2.style.display="none";
	zj_pic3.style.display="none";
}
slbtn.onmouseover=function(){
	slbtn.style.border="2px solid black";
	slbtn.style.background="white";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word1.style.display="block";
	zj_word0.style.display="none";
	zj_word2.style.display="none";
	zj_word3.style.display="none";
//	zj_pic1.style.display="block";
//	zj_pic0.style.display="none";
//	zj_pic2.style.display="none";
//	zj_pic3.style.display="none";
}
ybybtn.onclick=function(){
	ybybtn.style.border="2px solid black";
	ybybtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word2.style.display="block";
	zj_word1.style.display="none";
	zj_word0.style.display="none";
	zj_word3.style.display="none";
	zj_pic2.style.display="block";
	zj_pic1.style.display="none";
	zj_pic0.style.display="none";
	zj_pic3.style.display="none";
}
ybybtn.onmouseover=function(){
	ybybtn.style.border="2px solid black";
	ybybtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	bbbtn.style.border="2px solid white";
	bbbtn.style.background="#C0DCD0";
	zj_word2.style.display="block";
	zj_word1.style.display="none";
	zj_word0.style.display="none";
	zj_word3.style.display="none";
//	zj_pic2.style.display="block";
//	zj_pic1.style.display="none";
//	zj_pic0.style.display="none";
//	zj_pic3.style.display="none";
}
bbbtn.onclick=function(){
	bbbtn.style.border="2px solid black";
	bbbtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	zj_word3.style.display="block";
	zj_word1.style.display="none";
	zj_word2.style.display="none";
	zj_word0.style.display="none";
	zj_pic3.style.display="block";
	zj_pic1.style.display="none";
	zj_pic2.style.display="none";
	zj_pic0.style.display="none";
}
bbbtn.onmouseover=function(){
	bbbtn.style.border="2px solid black";
	bbbtn.style.background="white";
	slbtn.style.border="2px solid white";
	slbtn.style.background="#C0DCD0";
	ybybtn.style.border="2px solid white";
	ybybtn.style.background="#C0DCD0";
	qmbtn.style.border="2px solid white";
	qmbtn.style.background="#C0DCD0";
	zj_word3.style.display="block";
	zj_word1.style.display="none";
	zj_word2.style.display="none";
	zj_word0.style.display="none";
//	zj_pic3.style.display="block";
//	zj_pic1.style.display="none";
//	zj_pic2.style.display="none";
//	zj_pic0.style.display="none";
}
