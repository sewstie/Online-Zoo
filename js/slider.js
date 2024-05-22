document.addEventListener('DOMContentLoaded', function() {

  var splide1 = new Splide( '#splide1', {
      type   : 'loop',
      arrows: false,
      pagination: false,
      perPage: 3,
      focus  : 0,
      omitEnd: true,
      gap: '28px',
      drag: true,
      breakpoints: {
        992: {
          perPage: 2,
        },
      },
    } ).mount();

  var splide2 = new Splide( '#splide2', {
      type   : 'loop',
      arrows: false,
      pagination: false,
      perPage: 3,
      focus  : 0,
      omitEnd: true,
      gap: '28px',
      drag: true,
      breakpoints: {
        992: {
          perPage: 2,
        },
      },
    } ).mount();

  splide1.on('move', function(newIndex) {
      splide2.go(newIndex);
  });

  splide2.on('move', function(newIndex) {
      splide1.go(newIndex);
  });

  document.getElementById('btnPrev').addEventListener('click', function() {
    splide1.go('<');
    splide2.go('<');
});

  document.getElementById('btnNext').addEventListener('click', function() {
    splide1.go('>');
    splide2.go('>');
});
});

