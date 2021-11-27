
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
 var btn_=document.getElementsByClassName('btn')[0];
 var aa=document.getElementsByClassName('aa')[0];
 var a_=document.getElementsByClassName('a')[0];
 var b_=document.getElementsByClassName('b')[0];
 var a=126;
 var b=20;
btn_.addEventListener('click',function(){
    a++;
    a_.innerHTML=a+'人申请';
    b--;
    b_.innerHTML=b+'台';
   if(b<10){
      b_.innerHTML='0'+b+'台';
   }
   

  
   if(b<=0){
     b_.innerHTML='已售罄';
     a_.innerHTML=(a+b)+'人申请';
     aa.style.backgroundColor='black';
     aa.innerHTML='已售罄';
     
     
   }

})


// 点击 加载更多
var more_btn=document.getElementsByClassName('more-btn')[0];
var loading=document.getElementsByClassName('loading')[0];
more_btn.addEventListener('click',function(){
    
  more_btn.style.display='none';
  loading.style.display='block';



})



