var list = $('#list');//获取ul标签
var lis = list.find('li');//获取li标签
var page = 1;//设置page 请求数据的第几页
var iH = window.innerHeight;//获取浏览器可视区域
var onoff = true;//设置开关，刚开始默认值为true

getPage();//调用函数，用第一页的数据来渲染页面

//			浏览器滚轮事件，当浏览器滚轮拉到最小高度的li标签时候，触发并加载下一页数据；
window.onscroll = function(){
	var Li = getShortLi();//获取高度最小的li标签
	var bot = Li.getBoundingClientRect().bottom;//获取最小高度的li标签的底部距离可视区域顶部的距离；
	if(iH>bot&&onoff){//判断是否已经可以看见最小高度的li标签；以及开关是否打开；
		onoff = false;//开关关闭；
		page++;//page＋1；
		getPage();//得到page页的数据，进行数据渲染
	}
	
}

//利用数据渲染页面；
function getPage(){
	$.ajax({
		url:"getPics.php?cpage="+page,//路径；
		success:function(data){
			var arr = JSON.parse(data);//转化json数据；
			var srchead="https://wk-thumbs-akiajy4shnfla5tevhca.s3.amazonaws.com/";
			console.log(arr);
			if(arr.length < 50){//判断返回值的长度是否为零，如果是则表示当前页数数据加载完毕；
				alert('到了最后一页');
				return;
			}
			
			//for循环渲染页面
			for(var i=0;i<arr.length;i++){
				var srcfoot=arr[i].preview.split("/")[arr[i].preview.split("/").length-1];
				var srcall=srchead+srcfoot;
				var div = $('<div>');//创建div标签
				var liBox = getShortLi();//获取最小高度的li标签
				var str = '<img src="'+srcall+'">';//str为div中的内容
				div.html(str);//div插入str里的内容
//							
				div.find('img').css({
					width:240,
					height:arr[i].height*(240 / arr[i].width)
				})//设置宽高：宽固定，高度根据宽度等比例缩放；
				$(liBox).append(div);//给最小高度li加入创建的div标签以及内容	
				
			}
			onoff = true;//数据加载完成之后 把开关打开；
		}
	})				
}


function getShortLi(){
	var index = 0;
	var minLi = lis[index].offsetHeight;
	for(var i=1;i<lis.length;i++){
		if(minLi>lis[i].offsetHeight){
			minLi = lis[i].offsetHeight;
			index = i;
		}
	}
	return lis[index];
}//得到最小高度的li标签；
			
			