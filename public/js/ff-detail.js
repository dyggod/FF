$(function(){
    let urlParams=new URLSearchParams(location.search);
    let cid=urlParams.get('cid');
    let tab=urlParams.get('tab')
    //*********请求数据库得到前面页面对应cid的跑车详情******
    $.ajax({
        url:'http://127.0.0.1:8080/cp/getDetail',
        type:'get',
        data:'cid='+cid+'&tab='+tab,
        dataType:'json',
        success: function(result){
            console.log(result[0]);
            //将返回的跑车详情append进详情页面
            let $html=$(`
            <div class="detMiddle">
            ${result[0].title}
            </div>
                <div class="detBottom">
                    <div class="row w-75">
                        <div class="col-6">  
                            <ul class="d-flex">
                                <li>
                                    参考价格:<span>${parseFloat(result[0].price)}</span>
                                </li>
                                <li>
                                    类型:<span>${result[0].type}</span>
                                </li>
                                <li>
                                    品牌:<span>${result[0].brand}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="d-flex">
                                <li>
                                    型号:<span>${result[0].model}</span>
                                </li>
                                <li>
                                    座位:<span>${result[0].seat}</span>
                                </li>
                                <li>
                                    颜色:
                                    <select name="" id="">
                                        <option value="">${result[0].color}</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            `);
            $html.appendTo('div.detail')    
        }
    })
    //********* 图片点击轮播效果*/
    //找到div.prev和div.next按钮
    var $prev=$('div.prev');
    var $next=$('div.next')
    //找到所有ul下的li
    $ul=$('div#img ul')
    $lis=$('div#img ul>li')
    //定义变量moved保存已经左移的里个数
    var moved=0;
    //为两个按钮绑定单击事件
    $next.click(function(){
        var $this=$(this);
        moved++;
        //ul的marginleft永远等于-900*moved
        //如果moved不等于lis.length,就...
        if(moved==$lis.length){moved=0}
        $ul.animate({
            marginLeft:-moved*900,
            },1000)
    })
    $prev.click(function(){
        moved--;
        if(moved==-1){moved=$lis.length-1}
        $ul.animate({
            marginLeft:-moved*900,
            },1000)
        
    })
    //*********用js引入脚ff-footer.html */
    $.ajax({
        url:'footer.html',
        type:'get',
        success:function(footer){
            $(footer).replaceAll('#footer');
            $(`<link rel='stylesheet' href='/css/footer.css'>`).appendTo('head');
            var script=document.createElement('script');
            script.src="js/ff-footer.js";
            document.body.appendChild(script);
        }
    })
})

