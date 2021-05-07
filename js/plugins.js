$(document).ready(function(){
    $('.carousel').carousel({
        interval: 6000
      });

      var myWow = new WOW({live:true});
      myWow.init();
        
        $("html").niceScroll();
    //   show color option
    $('.gear-icon').click(function(){
        $('.colors').toggle();
    });

    $('.creative').click(function(){
        $('.hx').hide();
    });

    $('.all').click(function(){
        $('.hx').show();
    });

    $('.developement').click(function(){
        $('.hh,.hp').show();
    });

    // change color 
    
    var clolsLi = $('.colors ul li');

    clolsLi
    .eq(0).css("backgroundColor","#ff784b").end()
    .eq(1).css("backgroundColor","#1abc9c").end()
    .eq(2).css("backgroundColor","#0c65ed").end()
    .eq(3).css("backgroundColor","#fc3d6a");

    clolsLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       
        // console.log($(this).attr("data-value"))
    });
    

    $(".loading-overlay .spinner,.loading-overlay h2").fadeOut(3000,
    function()
    {
        $(this).parent().fadeOut(3000,
        function()
        {
            $("body").css("overflow","visible");
        });
    });

    var scrollButton = $("#scroll-top");

    $(window).scroll(function()
    {
        $(this).scrollTop()>= 700 ? scrollButton.show() : scrollButton.hide();
        // console.log($(this).scrollTop());
    })

    var navUp = $("#navtop");

    $(window).scroll(function()
    {
        $(this).scrollTop()>= 500 ? navUp.show() : navUp.hide();
        // console.log($(this).scrollTop());
    })

    scrollButton.click(function()
    {
        $("html,body").animate({scrollTop:0},600)
    });

});

var myForm = document.getElementById('myForm')
var username = document.getElementById('username');
var email = document.getElementById('password')
var subject = document.getElementById('email')
var textarea = document.getElementById('textarea')

function checkName(){
    console.log(username.value)
    var name2 = username.value.trim()
    console.log(name2)

    if(name2.length <= 3){
        handleError(username , 'invalid' , "Name must be More Than 3 characters")
    }
    else{
        handleError(username , 'valid')
    }
}


function handleError (input , type , message = ''){
    var small = input.nextElementSibling;
    small.textContent = message;
    if (type === 'invalid') {
    input.style.borderColor="red" ;
    small.style.color="red "
    }
    else if(type === 'valid'){
        input.style.borderColor="green";
    }

}
function checkPassword(){
    var reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
    // reg.test(password);
    passvalid = password.value.trim();
        if(!reg.test(passvalid)) handleError(password , 'invalid' , "incorrect data")
        else{
            handleError(password , 'valid')
        }
        //  else if (!reg.test())
        console.log(reg.test(passvalid)) //incorect data ==> false
}

function checkEmail(){
    var reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    emailvaid = email.value.trim()
    if(reg.test(emailvaid)) handleError(email , 'valid')
    else handleError(email , 'invalid' ,"please enter a valid email")
}

function checkTextarea(){
    console.log(textarea.value)
    var textarea2 = textarea.value.trim()
    console.log(textarea2)
    if(textarea2.length <= 5){
        handleError(textarea , 'invalid' , "Name must be More Than 3 characters")
    }
    else{
        handleError(textarea , 'valid')
    }
}

myForm.addEventListener('input', function(e){
    console.log(e.target.id);
    switch(e.target.id){
        case 'username':
        checkName()
        break;
        case 'password':
        checkPassword()
        break;
        case 'email':
        checkEmail()
        break;
        case 'textarea':
        checkTextarea()
        break;
    }
})

