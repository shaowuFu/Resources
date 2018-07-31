let map = new AMap.Map("map"); //创建地图对象  高德地图

// add map plugin

//解析经纬度
AMap.plugin("AMap.Geocoder", function () {
    var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
    });
    geocoder.getAddress([lng, lat], function (status, result) {

    });

    // 标记插件
    let marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",

        position: new AMap.LngLat(lng, lat),

        title: address
    });

    map.add(marker);
});

// 定位插件
map.plugin(["AMap.Geolocation"], function () {
    let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,

        timeout: 10000,

        buttonOffset: new AMap.Pixel(10, 20),

        convert: true,

        showButton: true,

        showMarker: true,

        showCircle: true,

        zoomToAccuracy: true,

        buttonPosition: "RB"
    });

    map.addControl(geolocation);

    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, "complete", result => {});
    AMap.event.addListener(geolocation, "error", result => {});
})

//输入自动提示
AMap.plugin('AMap.Autocomplete', function () {
    var autoOptions = {
        city: "",
        input: "inputID" // input ID
    };

    let autocomplete = new AMap.Autocomplete(autoOptions);
    AMap.event.addListener(autocomplete, "select", function (data) {
        //返回结果
    });
});

//添加工具条

AMap.plugin("AMap.ToolBar", function () {
    let toolBar = new AMap.ToolBar({
        autoPosition: true,

        position: "RT",

        locate: true
    });

    map.addControl(toolBar);
});


// 对地图添加点击事件

map.on("click", event => {});


//对输入的字符进行条件查找
AMap.plugin("AMap.Autocomplete", function () {
    let autoOptions = {
        city: "全国"
    };
    this.autoComplete = new AMap.Autocomplete(autoOptions);
});
this.autoComplete.search(this.addressName, function (status, result) {
    if (status === "complete") {}
});

// 对地图添加定位点
/**
 *
 * @param {精度} lng
 * @param {纬度} lat
 * @param {地址} address
 */
function updateMarker(lng, lat, address) {
    var marker = null;
    if (!!marker) {
        map.remove(this.marker);
    }
    marker = null;
    marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: new AMap.LngLat(lng, lat),
        title: address  //信息提示
    });
    map.add(this.marker);
}