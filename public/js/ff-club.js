//ff-club页面下拉选择品牌事件处理函数
(function(){
    //1.查找触发事件的元素
    var down=document.getElementById('down');
    //2.为元素绑定事件处理函数
    down.onclick=function(){
        //3.查找要修改的元素
        var A=document.body.children[1].querySelector('div.brand-car')
        var down=this;
        //4.修改
        //sec_brand.style.display='none';
        //判断brand_search是否隐藏,如果没隐藏,则上拉
        console.log(down.innerHTML)
        if(down.innerHTML=='选择品牌↑'){
            A.style.height='0px';
            down.innerHTML='选择品牌↓';
        }else{
            A.style.height='500px';
            down.innerHTML='选择品牌↑';
        }
    }
})();
//ff-club页面get_brand()事件处理函数
function get_brand(){
    //1.创建异步函数xhr
    var xhr=new XMLHttpRequest();
    //2.打开链接
    xhr.open('get','http://127.0.0.1:8080/cp/getBrand',true);
    //3.发送请求
    xhr.send();
    //4.绑定监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            //解析json字符串
            var result=JSON.parse(result);
            console.log('get_brand执行')          
            //先循环td 
            var html_1='';
            //找到需要循环的tr
            var a=0;
            for(var j=1;j<4;j++){
                var html='';
                for(var i=1;i<6;i++){    
                    html+=`
                    <td><a href="JavaScript:;"><img class="w-100" src="${result[a].img}" alt=""/></a></td>
                    `;
                    a++;
                }
                html_1+=`<tr>${html}</tr>`;
            }
            //找到section下的brand-img下的table.tab1
            var table_left=document.querySelector('body section div.brand-img table.table-left');
            var table_right=document.querySelector('body section div.brand-img table.table-right');  
            table_left.innerHTML=html_1;
            table_right.innerHTML=html_1;
        
        }
    }
}      
//ff-club页面 get_pro事件处理函数
    function get_pro(){
        //1.创建异步函数xhr
        var xhr=new XMLHttpRequest();
        //2.打开链接
        xhr.open('get','http://127.0.0.1:8080/cp/getPro',true);
        //3.发送请求
        xhr.send();
        //4.绑定监听
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                //解析json字符串
                var result=JSON.parse(result);
                //console.log(result);
                var html='';
                //使用for循环将添加四个li里内容
                for(var i=5;i<9;i++){
                    html+=`
                <li class="reco-li text-light" >
                    <a href="#" class="li-model position-relative" >
                        <img class="w-100 img-model" src="${result[i].pic}" alt=""/>
                        <div class="pf-img-model text-light">
                            参考价格:¥${result[i].price}
                        </div>
                    </a>
                    <div class="card reco-card pb-0">
                        <div class="card-header text-center mt-4">
                            <a class="d-inline-block" href="#">${result[i].title}</a>
                        </div>
                        <div class="card-body text-center">
                            <a href="#">${result[i].brand}</a>
                        </div>
                        <div class="card-footer">
                            <a href="ff-detail.html?cid=${result[i].cid}&tab=${result[i].tab}" class="float-left">查看详细&nbsp;&nbsp;&nbsp;
                                <img  src="../templates/cn/images/main_img11.png" alt=""/>
                            </a>
                            <a href="#" class="float-right">在线预订&nbsp;&nbsp;&nbsp;
                                <img  src="../templates/cn/images/main_img11.png" alt=""/>
                            </a>
                         </div>
                    </div>
                    </li>
                        `;
                }
                //console.log(html);
                reco_ul.innerHTML=html;
            }
        }
    }  