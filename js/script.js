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



        });

       

   