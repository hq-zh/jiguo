window.addEventListener('load',function(){
  var ajax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

  ajax.open('get','http://192.168.31.5:3000/useing/public',true);
  ajax.send();

  ajax.onreadystatechange=function(){
      if(ajax.readyState==4){
          if(ajax.status==200){
              var res=JSON.parse(ajax.responseText);
              console.log(res);

             show(res);
          }
      }
  }
function show(v){
    var str=``;
   
        for(var j of v){
            console.log(j);
           str+=`<dt>
           <a href="detail.html">
               <span class="top-tip shoufa">`
               var info_ty=(typeof j.info_ty=='undefined')?'首发':j.info_ty;
               str+=`${info_ty}</span>
               <img src="${j.img}" width="220" height="130"/>
               <div class="hot-con">
                   <h2 class="name"> ${j.text}</h2>
                   <p class="tabs graw">
                       <span>`
                  var totalnum=(typeof j.totalnum =='undefined')?'2032':j.totalnum;
                       str+=`${totalnum}</span>
                       <span>`
                       var num=(typeof j.num=='undefined')?'20':j.num;
                       str+=`${num}台</span>
                   </p>
                   <p class="sq"><span>`
                     var apply=(typeof j.apply=='undefined')?'1392':j.apply;
                 str+=`${apply} </span>申请</p>
                   <p class="current graw">报告数量：8</p>
               </div>
           </a>
       </dt>`;
    }
    
    document.getElementById('da').innerHTML=str;
}


})