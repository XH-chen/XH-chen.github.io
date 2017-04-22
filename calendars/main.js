var timer=new Date();

(function($){
	var $parent;
	
	var monnub=0;
	var timer1=null;
	var timer2=null;
	function fn(timer){
		$parent=this;
		setdelclock();
		setInterval(setdelclock,1000);
		setdateandday();
		setInterval(setdateandday,1000);
		setleftandright();
		setyearandmon(0);
		setoldbtn();
		setdatebtn(0);
		setevent();
		setactive();
	}
	
	function setoldbtn(){
		var box=$('<div class="btn">');
		for(var i=0;i<7;i++){
			var div =$('<div>');
			var oA=$('<a href="javascript:;">');
			oA.html(getday(i));
			div.append(oA);
			div.html();
			box.append(div);
		}
		$parent.append(box);
	}
	
	function setactive(this_num){
		var thisdate=this_num||new Date().getDate();
		var notgrey=$(".dated:not(.greyword)").get();
		for(var i=0;i<notgrey.length;i++){
			if(notgrey[i].innerHTML==thisdate){
				$(notgrey[i]).addClass("active");
			}
		}
	}
	
	function setevent(){
		$(".left").click(function(){
			monnub--;
			setdatebtn(monnub);
			setyearandmon(monnub);
			var relmon=new Date().getDate();
			if(monnub==0){
				setactive(relmon);
			}else{
				setactive(1);
			}
			
		})
		$(".right").click(function(){
			monnub++;
			setdatebtn(monnub);
			setyearandmon(monnub);
			var relmon=new Date().getDate();
			if(monnub==0){
				setactive(relmon);
			}else{
				setactive(1);
			}
		})
	}
	function setdatebtn(num){
		if($(".dated").get(0)){
			$(".dated").remove();
		}
		var firidx=getfirstdate(num);
		var lstidx=getlastdate(num);
		var mylast=lstidx;
		var thelastidx=0;
		var mybtn=$(".btn>div");
		var mynub=0;
		for(var j=firidx-1;j>=0;j--){
			var oA=$('<a href="javascript:;" class="greyword dated">')
			oA.html(lstidx);
			lstidx--;
			mybtn.eq(j).append(oA);
			mynub++;
		}
		for(var i=1;i<mylast+1;i++){
			var oA=$('<a href="javascript:;" class="dated">')
			oA.html(i);
			mybtn.eq(firidx%7).append(oA);
			firidx++;
			mynub++;
			thelastidx=firidx%7;
		}
		for(var i=1;i<42-mynub+1;i++){
			var oA=$('<a href="javascript:;" class="greyword dated">')
			oA.html(i);
			mybtn.eq(thelastidx%7).append(oA);
			thelastidx++;
		}
	}
	
	function setdelclock(){
		var timer1=new Date();
		if($(".declock").get(0)){
			$(".declock").html(getclock(timer1));
		}else{
			var delclock=$('<div class="declock">');
			
			delclock.html(getclock(timer1));
			
			$parent.append(delclock);
		}
		
	}
	
	function setdateandday(dated){
		var timer=dated||new Date();
		if($(".dedate").get(0)){
			$(".dedate").html(getdateandday(timer));
		}else{
			var dateandday=$('<div class="dedate">');
			dateandday.html(getdateandday(timer));
			$parent.append(dateandday);
		}
	}
	
	function setleftandright(){
		var yearandmon=$('<div class="cudate">');
		var left=$('<span class="left">');
		left.html("←")
		var right=$('<span class="right">');
		right.html("→")
		yearandmon.append(left);
		yearandmon.append(right);
		$parent.append(yearandmon);
	}
	
	function setyearandmon(num){
		var timer=new Date();
		if($(".buzhidao").get(0)){
			$(".buzhidao").html(getyearandmon(timer,num));
		}else{
			var yearandmon=$('<span class="buzhidao">')
			yearandmon.html(getyearandmon(timer,num))
			$(".cudate").prepend(yearandmon);
		}
		
	}
	
	function getfirstdate(num){
		var timer=new Date();
		var oldmonth=timer.getMonth();
		var newmonth=oldmonth+num;
		timer.setMonth(newmonth);
		timer.setDate(1);
		return timer.getDay();
	}
	
	function getlastdate(mynum){
		var timer=new Date();
		var nub =mynum;
		var oldmon=timer.getMonth();
		var mons=nub+oldmon+1;
		timer.setMonth(mons);
		timer.setDate(0);
		return timer.getDate();
	}
	
	function getyearandmon(timer,num){
		var oldmon=timer.getMonth();
		var newmonth=oldmon+num;
		timer.setMonth(newmonth);
		var mon =timer.getMonth()+1;
		var year=timer.getFullYear();
		return year+"年"+setzero(mon)+"月"
	}
	
	function getdateandday(timer){
		var year=timer.getFullYear();
		var mon =timer.getMonth();
		var hao=timer.getDate();
		var day=getday(timer.getDay());
		return year+":"+setzero(mon)+":"+setzero(hao)+" 星期 "+day;
	}
	
	function getday(timer){
		var day=timer;
		var str;
		switch (day){
			case 0:
				str="日";
				break;
			case 1:
				str="一";
				break;
			case 2:
				str="二";
				break;
			case 3:
				str="三";
				break;
			case 4:
				str="四";
				break;
			case 5:
				str="五";
				break;
			case 6:
				str="六";
				break;
		}
		return str;
	}
	function getclock(timer){
		var hour=timer.getHours();
		var mins=timer.getMinutes();
		var sec=timer.getSeconds();
		var finishtime=setzero(hour)+":"+setzero(mins)+":"+setzero(sec);
		return finishtime;
	}
	
	function setzero(num){
		var str=""+num;
		if(str.length==1){
			str="0"+num;
		}
		return str;
	}
	
	
	$.fn.extend({
		calendars:fn
	})
})(jQuery)

$("#box").calendars(timer);
