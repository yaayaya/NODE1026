const { text, json } = require('express');
var express = require('express');
var router = express.Router();
const request = require('request');

var regExCellPhone = /^(09[0-9]{8})|(0830[0-9]{6})$/; 

//#region  簡訊設定
var smsApiUrl = "https://api.twsms.com/json/sms_send.php?"

var smsApiParams = new URLSearchParams();
smsApiParams.set("username" , "")
smsApiParams.set("password" , "")
// smsApiParams.set("mobile" , "") 從參數設定
smsApiParams.set("message" , `test ${Math.random()}`)

//#endregion

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postSMS',(req , res)=>{
  // 預計是一個號碼  前端跑一堆迴圈
  let cellPhone = req.body.cellPhone
  smsApiParams.set("mobile" , "")
  console.log(smsApiUrl + smsApiParams)
  
  request(smsApiUrl + smsApiParams, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      

      // 成功時  寫入資料庫 此人簡訊已發送過  isPostSMS = true 之類的  (避免重複發送情況)
      if (body.code == "00000"){
        res.send({ rtnCode : 1 , rtnMsg : "完成" })
      }
      else{
        res.send({ rtnCode : 1 , rtnMsg : `寄送訊息 ${req.body.cellPhone} 時發生錯誤 \nErr : ${body}` })
      }
  });
})

module.exports = router;