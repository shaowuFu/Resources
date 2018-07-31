// 移动端手机锁住页面防止移动
document.querySelector("body").addEventListener("touchmove", function(e) {
  e.preventDefault();
});


// 判断pc端还是移动端打开该页面
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
} else {
  alert("为PC端");
  location.href =
    alert("为移动端");
}


// 限制输入框只能输入数字

onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"

onkeyup="this.value=this.value.replace(/\D/g,'')"