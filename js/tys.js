window.addEventListener('load',function(){
   var ajax=new XMLHttpRequest()|| new ActiveXObject('Microsoft.XMLHTTP');
   ajax.open('get','http://192.168.31.5:3000/useing/master',true);

   ajax.send();

   ajax.onreadystatechange=function(){
       if(ajax.readyState==4){
           if(ajax.status==200){
                var res=JSON.parse(ajax.responseText);
                show(res)
           }
       }
   }
function show(v){
    var str=``;
    for(var i of v){
        str+=`<dt>
        <a href="detail.html">
            <span class="top-tip tys">体验师专享</span>
            <img src="${i.img}" width="220" height="130"/>
            <div class="hot-con">
                <h2 class="name">${i.text}</h2>
                <p class="tabs red">
                    <span>${i.totalnum}</span>
                    <span>${i.num}台</span>
                </p>
                <p class="sq"><span>${i.apply}</span>申请</p>
                <p class="current red">剩余时间2天</p>
            </div>
        </a>
    </dt>`
    }
    document.getElementById('dl').innerHTML=str;
}

})