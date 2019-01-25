// $('#home-tab a').click(function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// });

// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[data-href="#'+url.split('#')[1]+'"]').tab('show') ;
} 

// With HTML5 history API, we can easily prevent scrolling!
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    if(history.pushState) {
        history.pushState(null, null, $(this).data('href')); 
    } else {
        window.location.hash = $(this).data('href'); //Polyfill for old browsers
    }
});

