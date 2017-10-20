/**
 * Created by Administrator on 2017/10/19.
 */
app.directive("serveCar",function(){
    return{
        templateUrl:"App/Views/temp/_serve.html",
        link:function(scope,element){
            var mySwiper = new Swiper('.swiper-container',{
                direction:"horizontal",
                loop:true,
                pagination:".swiper-pagination",
                autoplay:1000
            })
            var myScroll = new IScroll('.scroll-main',{
                scrollX:true,
                scrollY:false
            })
            $('.load').on('click', function(){
                getData();
                $(this).hide();
            });
            function getData(){
                $.ajax({
                    type: 'GET',
                    url: './Data/data.json',
                    dataType: 'json',
                    success: function(reponse){
                        var result = '';
                        for(var i=0; i<=reponse.length; i++){
                            result +=`<table class="table">
                                            <tbody>
                                                <tr>
                                                    <td style="border-right: .01rem solid #ccc" class="text-center">
                                                        <img src="${reponse[i].img}" style="width: 1rem;">
                                                        <a>${reponse[i].cont1}</a>
                                                        <span style="color: #fb5401">${reponse[i].cont12}</span>
                                                    </td>
                                                    <td class="text-center">
                                                        <img src="${reponse[i].img}" style="width: 1rem">
                                                        <a>${reponse[i].cont1}</a>
                                                        <span style="color: #fb5401">${reponse[i].cont12}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>`
                            $('.big-main').append(result);
                        }
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                    }
                });
            }
        }
    }
});