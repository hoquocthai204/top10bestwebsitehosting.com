// var score_text = document.getElementsByClassName('score_text')
// var score_container = document.getElementsByClassName('score_container')

// var n=score_container.length;

// for(var i=1;i<n;i++){
//     score_container[i].removeChild(score_container[i].childNodes[1])
// }

// console.log(score_container)


// _____________________________________________________

'use strict'

function selectBox_active(){
    var selectBox = document.querySelector('.sub_select')
    let down = document.querySelector('.select_box i')
    if(selectBox.style.display=='block'){
        selectBox.style.display='none'
        down.style.transform = 'rotate(0deg)'
    }
    else{
        selectBox.style.display='block'
        down.style.transform = 'rotate(180deg)'
    }
}

window.onload=function()
{
    setTimeout(func1, 3000);
}

var popup = document.getElementById('advertise_box')
function func1()
{
    popup.style.display = 'block'
    popup.style.animation = 'popup .3s ease'
}

var time_exit = document.getElementsByClassName('fa-times')[0]
time_exit.onclick = function(){
    popup.style.animation = 'hidden .3s ease forwards'
}

$(document).ready(function(){
    $('.chart_header .filter_btn a').click(function(){
        $('.chart_filter').slideToggle(120);
        $('.chart_header .filter_btn .fas').toggle();
        $('.sub_select').hide()
    })

    $('.filter_value').click(function(){
        $(this).toggleClass("active");
    })

    $('.reset').click(function(){
        $('.filter_value.active').removeClass('active');
        $('.chart_filter').slideUp(150);
        $('.chart_header .filter_btn .fas').hide();
        $('.sub_select').hide()
    })

    $('.sub_select a').click(function (e) { 
        $('.chart_header .sub_select .active').removeClass('active')
        $(this).addClass('active');
    });
})

let topnav = document.querySelectorAll(".top_nav a")
topnav.forEach(function(value){
    value.onclick = function(){
        document.querySelector('.top_nav a.active').classList.remove('active')
        this.classList.add('active')
    }
})
