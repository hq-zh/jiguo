
// <!-- 申请时间结束剩余 -->
function fn(){
    var  now=new Date();
    
    var go=new Date(2022,0,1);
    var timeX=go-now;

  var day=Math.floor(timeX/1000/60/60/24); //天

  var h=Math.floor(timeX/1000/60/60%24);

  var m=Math.floor(timeX/1000/60%60);

   var s =Math.floor(timeX/1000%60);


var gotimer='申请时间结束剩余:'+day+'天'+h+'时'+m+'分'+ s +'秒';
 var str=document.getElementsByClassName('time')[0];

 str.innerHTML=gotimer;
  }
    
  setInterval(fn,1000);

// <!-- 点击立即申请 -->
 


