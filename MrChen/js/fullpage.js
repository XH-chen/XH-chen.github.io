function section1in() {
	var section1_bpic = document.getElementsByClassName("bigpic")[0];
	var section1_sbtn = document.getElementsByClassName("smallbtn")[0];
	var section1_spic = document.getElementsByClassName("smallpic")[0];
	setTimeout(function() {
		setcss({
			ele: section1_bpic,
			style: {
				transform: "translateX(0px)",
				opacity: "1"
			}
		});
		setcss({
			ele: section1_sbtn,
			style: {
				transform: "translateY(0px)",
				opacity: "1"
			}
		});
		setcss({
			ele: section1_spic,
			style: {
				transform: "translateY(0px)",
				opacity: "1"
			}
		});
	}, 100)
}

function section1out() {
	var section1_bpic = document.getElementsByClassName("bigpic")[0];
	var section1_sbtn = document.getElementsByClassName("smallbtn")[0];
	var section1_spic = document.getElementsByClassName("smallpic")[0];
	setTimeout(function() {
		setcss({
			ele: section1_bpic,
			style: {
				transform: "translateX(-200px) translateY(570px) scale(.1) rotateY(30deg)",
				opacity: "0"
			}
		});
		setcss({
			ele: section1_sbtn,
			style: {
				transform: "translateY(-50px)",
				opacity: "0"
			}
		});
		setcss({
			ele: section1_spic,
			style: {
				transform: "translateY(-50px)",
				opacity: "0"
			}
		});
	}, 100)
}

function section2in() {
	var section2_bpic = document.getElementsByClassName('section2_bigpic')[0];
	var section2_bgcolor = document.getElementsByClassName('section2_bgcolor')[0];
	var section2_h2 = document.getElementsByClassName("section2_h2")[0];
	var section2_p = document.getElementsByClassName("section2_p")[0];
	setTimeout(function() {
		setcss({
			ele: section2_bpic,
			style: {
				transform: "translate(0px,0px)",
				opacity: "1"
			}
		});
		setcss({
			ele: section2_bgcolor,
			style: {
				transform: "translateY(0px)",
				opacity: "1"
			}
		});
		setcss({
			ele: section2_h2,
			style: {
				transform: "translateX(0px)",
				opacity: "1"
			}
		});
		setcss({
			ele: section2_p,
			style: {
				transform: "translateX(0px)",
				opacity: "1"
			}
		});
	}, 500)
}

function section2out() {
	var section2_bpic = document.getElementsByClassName('section2_bigpic')[0];
	var section2_bgcolor = document.getElementsByClassName('section2_bgcolor')[0];
	var section2_h2 = document.getElementsByClassName("section2_h2")[0];
	var section2_p = document.getElementsByClassName("section2_p")[0];
	setTimeout(function() {
		setcss({
			ele: section2_bpic,
			style: {
				transform: "translate(-500px,300px)",
				opacity: ".1"
			}
		});
		setcss({
			ele: section2_bgcolor,
			style: {
				transform: "translateY(300px)",
				opacity: ".1"
			}
		});
		setcss({
			ele: section2_h2,
			style: {
				transform: "translateX(200px)",
				opacity: ".1"
			}
		});
		setcss({
			ele: section2_p,
			style: {
				transform: "translateX(-200px)",
				opacity: ".1"
			}
		});
	}, 500)
}

function section3in() {
	var sec3img = document.getElementsByClassName("sec3img")[0];
	var oP = document.getElementsByClassName("section3mainWord");
	setTimeout(function() {
		setcss({
			ele: sec3img,
			style: {
				transform: "rotateZ(360deg)"
			}
		});
		for(var i = 0; i < oP.length; i++) {
			setcss({
				ele: oP[i],
				style: {
					transform: "translateX(0px)"
				}
			})
		}

	}, 500)
}

function section3out() {
	var sec3img = document.getElementsByClassName("sec3img")[0];
	var oPright = document.getElementsByClassName("textRight");
	var oPleft = document.getElementsByClassName("textLeft");
	setTimeout(function() {
		setcss({
			ele: sec3img,
			style: {
				transform: "rotateZ(0deg)"
			}
		});
		for(var i = 0; i < oPright.length; i++) {
			setcss({
				ele: oPright[i],
				style: {
					transform: "translateX(150px)"
				}
			});
			setcss({
				ele: oPleft[i],
				style: {
					transform: "translateX(-150px)"
				}
			});
		}

	}, 500)
}

function section4in() {
	var sec4p = document.getElementsByClassName("sec4p");
	var sec4img2 = document.getElementsByClassName("sec4img2")[0];
	var sec4img1 = document.getElementsByClassName("sec4img1")[0];
	setTimeout(function() {
		for(var i = 0; i < sec4p.length; i++) {
			setcss({
				ele: sec4p[i],
				style: {
					transform: "translateY(0px)"
				}
			})
		}
		setcss({
			ele: sec4img2,
			style: {
				transform: "translateX(0px)",
				opacity: "1"
			}
		})
		setcss({
			ele: sec4img1,
			style: {
				transform: "translateX(0px)",
				opacity: "1"
			}
		})
	}, 500)
}

function section4out() {
	var sec4p = document.getElementsByClassName("sec4p");
	var sec4img2 = document.getElementsByClassName("sec4img2")[0];
	var sec4img1 = document.getElementsByClassName("sec4img1")[0];
	setTimeout(function() {
		for(var i = 0; i < sec4p.length; i++) {
			setcss({
				ele: sec4p[i],
				style: {
					transform: "translateY(550px)"
				}
			})
		}
		setcss({
			ele: sec4img2,
			style: {
				transform: "translateX(30px)",
				opacity: ".1"
			}
		})
		setcss({
			ele: sec4img1,
			style: {
				transform: "translateX(290px)",
				opacity: ".5"
			}
		})
	}, 500)
}

function section5in() {
	var s5Tit = document.getElementsByClassName("sec5title")[0];
	var s5Des = document.getElementsByClassName("sec5Descript")[0];
	var userggpt = document.getElementById("userggpt");
	setTimeout(function() {
		setcss({
			ele: s5Tit,
			style: {
				transform: "scale(1)"
			}
		});
		setcss({
			ele: s5Des,
			style: {
				opacity: "1"
			}
		});
		setcss({
			ele: userggpt,
			style: {
				transform: "scale(1) rotateZ(1080deg)"
			}
		})
	}, 500)
}

function section5out() {
	var s5Tit = document.getElementsByClassName("sec5title")[0];
	var s5Des = document.getElementsByClassName("sec5Descript")[0];
	var userggpt = document.getElementsByClassName("userggpt")[0];
	setTimeout(function() {
		setcss({
			ele: s5Tit,
			style: {
				transform: "scale(.1)"
			}
		});
		setcss({
			ele: s5Des,
			style: {
				opacity: ".1"
			}
		});
		setcss({
			ele: userggpt,
			style: {
				transform: "scale(.1) rotateZ(0deg)"
			}
		})
	}, 500)
}

function setcss(obj) {
	var mybox = obj.ele;
	for(var attr in obj.style) {
		mybox.style[attr] = obj.style[attr];
	}
}

var main_content = document.getElementsByClassName("main_content")[0];
var iH = document.getElementsByClassName("section")[0].offsetHeight;
var num = 0;
var secnum = 0;
var off_on = false;
setTimeout(function() {
	off_on = true;
}, 1500);
addWheel(document, down, up)
allsectionin();

function down() {
	if(off_on) {
		if(num >= 5) {
			num = 5;
		} else {
			num++;
		}
		setTimeout(setcolor, 500);
		allsectionin();
		secnum = num - 1;
		allsectionout();
		main_content.style.marginTop = (-num * iH + 60) + "px";
		off_on = false;
		setTimeout(function() {
			off_on = true;
		}, 2000)
	}
}

function up() {
	if(off_on) {
		if(num <= 0) {
			num = 0;
		} else {
			num--;
		}
		setTimeout(setcolor, 500);
		allsectionin();
		secnum = num + 1;
		allsectionout();
		main_content.style.marginTop = (-num * iH + 60) + "px";
		off_on = false
		setTimeout(function() {
			off_on = true;
		}, 2000);
	}
}

function allsectionin() {
	switch(num) {
		case 0:
			section1in();
			break;
		case 1:
			section2in();
			break;
		case 2:
			section3in();
			break;
		case 3:
			section4in();
			break;
		case 4:
			section5in();
			break;
	}
}

function allsectionout() {
	switch(secnum) {
		case 0:
			section1out();
			break;
		case 1:
			section2out();
			break;
		case 2:
			section3out();
			break;
		case 3:
			section4out();
			break;
		case 4:
			section5out();
			break;
	}
}

function setcolor() {
	var nav = document.getElementsByClassName("diannav")[0].children;
	var mainnav = document.getElementsByClassName("nav_right")[0].children;
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "";
		mainnav[i].children[0].className = "";
	}
	nav[num].className = "active";
	mainnav[num].children[0].className = "active";
}

function navevent() {
	var nav = document.getElementsByClassName("diannav")[0].children;
	var li = document.getElementsByClassName("realli");
	for(var i = 0; i < nav.length; i++) {
		(function(index) {
			nav[index].onclick = function() {
				secnum = num;
				allsectionout();
				num = index;
				setcolor();
				main_content.style.marginTop = (-num * iH + 60) + "px";
				allsectionin();
			}

			li[index].onclick = function() {
				secnum = num;
				allsectionout();
				num = index;
				setcolor();
				main_content.style.marginTop = (-num * iH + 60) + "px";
				allsectionin();
			}
		})(i)
	}
}
navevent();
setcolor();

function addWheel(obj, down, up) {
	var user = window.navigator.userAgent.toLowerCase();
	user.indexOf('firefox') == -1 ? obj.addEventListener('mousewheel', fn) : obj.addEventListener('DOMMouseScroll', fn);

	function fn(ev) {
		ev = ev || window.event;
		var dis = ev.wheelDelta ? -ev.wheelDelta : ev.detail;
		(dis < 0) ? up(): down();
	}
}