// 移动端手机锁住页面防止移动
document.querySelector("body").addEventListener("touchmove", function(e) {
  e.preventDefault();
});

// 判断pc端还是移动端打开该页面
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
} else {
  alert("为PC端");
  location.href = alert("为移动端");
}

// 限制输入框只能输入数字

onkeypress = "return (/[d]/.test(String.fromCharCode(event.keyCode)))";

onkeyup = "this.value=this.value.replace(/D/g,'')";

// jquery 可识别在IE8中
jQuery.support.cors = true;

// ajax 请求
data = JSON.stringify(data); //数据转成json字符
$.ajax({
  type: "post",
  headers: {
    Accept: "application/json; charset=utf-8"
  },
  url: baseUrl + url,
  data: data,
  contentType: "application/json",
  success: function(data) {
    if (successFunction) {
      successFunction(data);
    }
  },
  error: function(err) {
    console.log("err", err);
  }
});
