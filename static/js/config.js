var ip = window.location.hostname;
var port = window.location.port;
//正式环境
//window.config = {
//	HTTPURL: "http://" + ip + ":" + port + "/baby-grow-web-mserver/",//接口地址
//  uploadUrl: "http://file.nmmpa.cn/",//图片上传的地址
//}

//测试环境
window.config = {
	HTTPURL: "http://182.254.196.93:8080/baby-grow-web-mserver/",
	uploadUrl: "http://file.nmmpa.cn/"
}