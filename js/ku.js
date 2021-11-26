window.addEventListener('load',function(){
    var ajax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    ajax.open('get','http://192.168.31.5:3000/play/new',true);

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
        for (var i of v){
            for(var j of i){
                // console.log(j);
                str+=`<li>
                <a href="../use/detail.html">
                    <img src="${j.img}" width="220" height="130"/>
                    <div class="info">
                        <p class="name">${j.text}<span>`;
                        // console.log(typeof j.description === 'undefined');
                        var description=(typeof j.description == 'undefined')?'暂无介绍':j.description;
                        // console.log(description);
                        str+=`${description}</span></p>
                        <div class="tip fix">
                            <span class="price left">${j.price}</span>
                            <div class="right icon">
                                <span class="xin">${j.like}</span>
                                <span class="look">${j.words}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>`;
            }

        }

        document.getElementById('myDiv').innerHTML=str;

    }

})
