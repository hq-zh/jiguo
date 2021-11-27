window.addEventListener('load',function(){

    var ajax=new XMLHttpRequest() || new ActiveXObject('Mirosoft.XMLHTTP');
    ajax.open('get','http://192.168.31.5:3000/guid/hot',true);

    ajax.send();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                var res=JSON.parse(ajax.responseText);
               show(res);
            }
        }
    }
    function show(v){
        var str=``;
        for (var i of v){
            str+=`<li>
            <a href="detail.html">
                <img src="${i.img}" width="220" height="130"/>
                <div class="info">
                    <p class="name">${i.text}</p>
                    <div class="tip fix">
                        <div class="right icon">
                            <span class="xin">${i.like}</span>
                            <span class="look">${i.words}</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
        }
        document.getElementById('myDiv').innerHTML=str;
    }













})