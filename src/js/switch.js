let switchObj = function (tit,content){
    $(tit).each(function(index,item){
        $(this).on('click',function(){
            $(tit).removeClass('active');
            $(content).removeClass('active');
            $(this).addClass('active');
            // console.log($(content).eq($(this).index()).html())
            $(content).eq($(this).index()).addClass('active');
        })
    })
}

export default switchObj;