$(function(){
	$('.offer_reviews').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
      prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        infinite: true
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
        slidesToScroll: 1,
        infinite: true
      }
    }
    ]
	});
	$('.trust_wrapp').slick({
		slidesToShow: 5,
  		slidesToScroll: 1,
  		arrows: true,
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
      responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      ]
	});
	$('.wrap_slide').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
        prevArrow: '<i class="fa fa-chevron-right fa-chevron-right_l" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right fa-chevron-right_r" aria-hidden="true"></i>'
	});
// if($(window).width() > 1024)
// {

//    $('body').parallax({

//       'elements': [
//         {
//           'selector': '.paralax_block',
//           'properties': {
//             'x': {
//               'right': {
//                 'initial': 54,
//                 'multiplier': 0.02,
//                 'unit': 'px',
//                 'invert': false
//               }
//             },
//             'y': {
//               'top': {
//                 'initial': 54,
//                 'multiplier': 0.04,
//                 'unit': 'px',
//                 'invert': false
//               }
//             }
//           }
//         }
//       ]
//     });

// } else {
//    // change functionality for larger screens
// }
// $(window).scroll(function() {
// 	$('.paralax_block').each(function(){
// 		var $bgobj = $(this);
// 		$bgobj.css({ 'left': '1%' });
// 	});
// });
});
// $(document).ready(function(){
// 	// Кешируем объект окна
// 	$window = $(window);
                
//    $('.paralax_block').each(function(){
//      var $bgobj = $(this); // Назначаем объект
                    
//       $(window).scroll(function() {
                    
// 		// Прокручиваем фон со скоростью var.
// 		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
// 		var yPos = ($window.scrollTop() / $bgobj.data(900)); 
		
// 		// Размещаем все вместе в конечной точке
// 		var coords = '50% '+ yPos + 'px';

// 		// Смещаем фон
// 		$bgobj.css({ left: coords });
		
// 	}); 

//  });	

// }); 
$(document).ready(function(){
  $('.burger_menu').click(function () {
    $('body').css('overflow', 'hidden');
    $('#overlay').css('display', 'flex');
    $('.menuitems').addClass('menu_active_burger');
  });
  $('#overlay').click(function () {
    $('body').css('overflow', 'auto');
    $(this).css('display', 'none');
    $('.menuitems').removeClass('menu_active_burger');
  });
  $('nav .menuitems li').click(function () {
    $('body').css('overflow', 'auto');
    $('#overlay').css('display', 'none');
    $('.menuitems').removeClass('menu_active_burger');
  })

})

$(document).ready(function(){
  $("nav .menuitems li").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});