// 移动端手机锁住页面防止移动
document.querySelector("body").addEventListener('touchmove', function (e) {
    e.preventDefault();
})