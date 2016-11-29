/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {

  $('.Iaboutleft, .imgbox, .aboutbanner, .newsimg, .banner, .spimg').imgLiquid ({verticalAlign: 'center'});

  // about點選切換tab
  $('.tagbox.tag01, .tagbox.tag02').click(function() {
    $('.tagbox.tag01, .tagbox.tag02').removeClass ('Caboutac');
    $(this).addClass ('Caboutac');

    $('.Cabouttypebox').removeClass('Cabouttypeboxshow');
    $('.Cabouttypebox').eq($(this).index()).addClass('Cabouttypeboxshow');
  });

  $('.tagbox.tag01, .tagbox.tag02').eq (0).click();

});