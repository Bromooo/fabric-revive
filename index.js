//VIDEO THUMBS FUNCTIONS//

$('.car:nth-child(1)').clone().appendTo('.cars').addClass('clone first-clone');

// $('.cars').find('.car:nth-child(5)').removeClass('active thumb-1').attr('index', '5');

// $('.car:nth-child(3)').clone().prependTo('.cars');

// $('.cars').find('.car:nth-child(1)').removeClass('active').addClass('clone last-clone').attr('index', '0');


function nextVideoThumb() {
  var currentThumb = parseInt($('.cars').attr('current-thumb'));
  var totalThumbsInit = $('.car').length;
  var totalThumbs = parseInt(totalThumbsInit - 1);
  var activeClasses = $('.cars').attr('class');
  var splitClasses = activeClasses.split(' ');
  var thisClass = splitClasses[1];

  $('.car').removeClass('active');
  $('.cari').removeClass('active');

  if (currentThumb < totalThumbs) {
    var nextThumb = parseInt(currentThumb + 1);
    var nextClass = 'position-' + nextThumb;
    $('.cars').attr('current-thumb', nextThumb);
    $('.cars').removeClass(thisClass);
    $('.cars').addClass(nextClass);
    $('.car[index=' + nextThumb + ']').addClass('active');
    $('.cari[index=' + nextThumb + ']').addClass('active');
    
  } else if (currentThumb == totalThumbs) {
    var nextThumb = 1;
    var nextClass = 'position-1';
    $('.cars').attr('current-thumb', nextThumb);
    $('.cars').removeClass(thisClass);
    $('.cars').addClass(nextClass);
    $('.car[index=' + nextThumb + ']').addClass('active');
    $('.cari[index=' + nextThumb + ']').addClass('active');
  }

};

setInterval(() => {
  nextVideoThumb()
}, 2500);
//