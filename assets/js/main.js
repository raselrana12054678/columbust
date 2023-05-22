// init Isotope
var $grid = $('.filters-items').isotope({
    // options
  });
  // filter items on button click
  $('.filters-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
