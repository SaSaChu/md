/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {

  $('.Iaboutleft, .imgbox, .aboutbanner, .newsimg, .schoolpic').imgLiquid ({verticalAlign: 'center'});

  // about點選切換tab
  $('.tagbox.tag01, .tagbox.tag02').click(function() {
    $('.tagbox.tag01, .tagbox.tag02').removeClass ('Caboutac');
    $(this).addClass ('Caboutac');

    $('.Cabouttypebox').removeClass('Cabouttypeboxshow');
    $('.Cabouttypebox').eq($(this).index()).addClass('Cabouttypeboxshow');
  });

  $('.tagbox.tag01, .tagbox.tag02').eq (0).click();

  $('#book').turn ({
    // autoCenter: true,
    elevation: 1,
    // page: 2
  });
});