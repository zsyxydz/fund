/**
 * Created by perri on 2017/9/25.
 */
//附带icon的提示框
const showModelTips = function showModelTips(cate, content) {
    $('.model_tips').fadeIn(500);
    switch (cate) {
        case 'success':
            $('.model_tips')
                .children('img')
                .attr('src', '../image/right_icon.png');
            break
        case 'info':
            $('.model_tips')
                .children('img')
                .attr('src', '../image/info_icon.png');
            break
    }
    $('.model_tips')
        .children('p')
        .text(content);
    setTimeout(function () {
        $('.model_tips').fadeOut(500)
    }, 2000)
}

//小框浮层提示展示
const showModalText = function showModalText(content) {
    $('.model_text_tips').fadeIn(500);
    $('.model_text_tips')
        .children('p')
        .text(content);
    setTimeout(function () {
        $('.model_text_tips').fadeOut(500)
    }, 2000)
}


module.exports = {
    showModelTips,
    showModalText
}