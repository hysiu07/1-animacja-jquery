$(document).ready(function(){
    console.log('gootowe');

    $('button').click(function(){
        $('div').animate({left: '100px', width: '100px', height: '100px'}, 3000, 
        function(){
            $('div').animate({'background-color': 'blue'},5000,
            function(){
                $('div').text('Animacja zakończona')
            })
        });
    });
})


