$(document).ready(function(){
    $('.sa-link').click(function(){
        $('#home').load('state-agencies.html');
    });
    
    $('.contact').click(function(){
        $('#home').load('contact-us.html');
    });
    
    $('.os-link').click(function(){
        $('#home').load('online-services.html');
    });
})