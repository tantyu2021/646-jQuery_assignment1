$(function() {
           // window.alert('the page is ready');

            $('h2').css({
                'border': 'black 1px solid',
                //'color': '#CC1C0D',
                'padding': '3px 0 3px 20px', 
                //'border-radius': '0 5px 0 5px',
                'background-color': '#DFE3E6'

            });
 //or
        //parent-child selector
        $('section > h2, aside > h2').css('color','green');
 //or           
        //:header   -$(":header") -select all h1 -h4,etc
        $(':header').css('border-radius','0 5px 0 5px');

//The Navigation Menu
$('nav ul ').addClass('navigation');

var myNav = $(".navigation li");
myNav.css({
    'border': '#929CA4 1px solid',
    'color': '#CC1C0D',
    //'padding': '3px 0 3px 20px', 
    'background-color': '#DFE3E6'

});
$('.navigation li a').css('padding','3px 0 3px 20px');
          //or
// $('.navigation li').css({
//     'border': '#929CA4 1px solid',
//     'color': '#CC1C0D',
 
//     'background-color': '#DFE3E6'

// });
//$('.navigation li').css('background-color','#DFE3E6');
//$('.navigation').css('text-decoration','none');

//Main Content (remove classes from <p> tag)
//$('p').removeClass('vprospect');
$('p').removeClass('vprospect vconvert vretain');
//$('p').removeClass('vconvert');

//$('a').html('Chevy Dealers Association');
//$('p').wrapInner('<strong></strong>');
$('aside p:first').wrapInner('<q></q>'); //:first-child

    //$('h1').before('<p><b>24/7 365 Turnkey vSolutions!</b></p>');
            
            //APPEND
            $('aside p:last-child').append('<br><span >Chevy Dealers Association</span>');
            //after
            //$('aside p:last-child').after('<br>Chevy Dealers Association');

    //         var append = $('aside p:last-child').append('<br><span >Chevy Dealers Association</span>');
    //         append.css({
    // 'font-style': 'italic',




        });

       

   