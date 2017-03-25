$(document).ready(function(){

    var a = $(".navbar").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > a)
        {   
           $('.navbar').css({"background":"white"});
        } else {
           $('.navbar').css({"background":"transparent"});
        }
    });

                
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a, a.mouse-hover, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

    $(".navbar-default .navbar-brand span").on('click', function(event) {
        window.location.href = "index.html";
    });

    $(".pm-staff-profile-name").click(function(e) {
        $(e.target).siblings('.pm-staff-profile-bio').toggle();
        // $(".pm-staff-profile-bio").toggle();
    });

   // $(".pm-staff-profile-name").click(function() {
   //      // alert("hello");
   //      $(this).closest('div').next().next(".pm-staff-profile-bio").toggle();
   //  });  


    $('#name').show();
    $('#email').show();
    $('#company').hide();
    $('#title').hide();
    $('#message').show();
    $('#industry').hide();
    $('#mentormessage').hide(); 
    
    $(".strategic-partner").click(function () {
        $('#name').show();
        $('#email').show();
        $('#company').show();
        $('#title').show();
        $('#message').show();
        $('#industry').hide();
        $('#mentormessage').hide();   
    });

    $(".corporate-sponsor").click(function () {
        $('#name').show();
        $('#email').show();
        $('#company').show();
        $('#industry').hide();
        $('#title').hide();
        $('#message').hide(); 
        $('#mentormessage').hide();   
    });

    $(".mentorship-ring").click(function () {
        $('#name').show();
        $('#email').show();
        $('#company').hide();
        $('#industry').show();
        $('#title').show();
        $('#message').hide(); 
        $('#mentormessage').show();   
    });

  

});