$(function(){   
//***********1.创建获取车标事件
    $.ajax({
        url:'http://127.0.0.1:8080/ffIndex/getBrand',
        type:'get',
        dataType:'json',
        success: function(result) {
            //console.log(result);
            let html='';
            let html2='';
            for(var i=0;i<5;i++){
            html+=`
            <td>
                <a href="" class="active d-inline-block down">
                    <img class="w-100" src="${result[i+19].img}" alt=""/>
                </a>
                <a href="" class="active up">
                    <img class="w-100" src="${result[i].img}" alt=""/>
                </a>
            </td>
            `;
            html2+=`
            <td>
                <a href="" class="active d-inline-block down">
                    <img class="w-100" src="${result[i+24].img}" alt=""/>
                </a>
                <a href="" class="active up">
                    <img class="w-100" src="${result[i+5].img}" alt=""/>
                </a>
             </td>
            `;
            }
            let brandTr1=document.getElementById('brandTr1');
            let brandTr2=document.getElementById('brandTr2');
            brandTr1.innerHTML=html;
            brandTr2.innerHTML=html2;         
        }
    })
//   
//***********2.获取全部跑车数据
    $.ajax({
        url:'http://127.0.0.1:8080/cp/getPro',
        type:'get',
        dataType:'json',
        success:function(result){
           // console.log(result);
        }
    })
//**********3.获取推荐车型数据 */
    $.ajax({
        url:'http://127.0.0.1:8080/cp/getReco',
        type:'get',
        dataType:'json',
        success:function(result){
            //console.log(result);
            let html='';
            for(var i=0;i<4;i++){
                html+=`
                <li class="reco-li text-light">
                <a href="#" class="li-model position-relative">
                    <img class="w-100 img-model" src="${result[i].pic}" alt=""/>
                    <div class="pf-img-model text-light">
                        参考价:${result[i].price}
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
                            <img class="" src="templates/cn/images/main_img11.png" alt=""/>
                        </a>
                        <a href="ff-order.html" class="float-right">在线预订&nbsp;&nbsp;&nbsp;
                            <img class="" src="templates/cn/images/main_img11.png" alt=""/>
                        </a>
                    </div>
                </div>
                 </li>
                `;
            }
            //找到div.recommend下的ul
            document.getElementById('recommendUl').innerHTML=html;
           
        }
    })





})

