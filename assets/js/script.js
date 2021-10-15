window.addEventListener ('scroll', function (e) {

    const target = document.querySelectorAll('.scroll');
     // target.style.transform = 'translate3d(0px, 50px, 0px';
     // target.style.background = '#b3ff00';
     // console.log(target.style);
     // console.log(window.pageYOffset);
    var scrolled = window.pageYOffset;
       
    var index = 0, length = target.length; 
    for ( index; index < length; index++ ) {
        var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical'){
        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    } else 
        { var posX = window.pageYOffset * target[index].dataset.ratex;
          var posY = window.pageYOffset * target[index].dataset.ratey;
          target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'; } 
        }
});




