;(function(){
  $('.menu-table > tbody > tr').hover(function(e) {
    var disk = $(e.currentTarget).data('img')
    var imgURL = "../theme/img/menu/disks/" + disk

    $('img.disk').css('display', 'none')
    $('img.waiting').css('display', 'inline')

    $('img.disk').load(function() {
      $('img.disk').fadeIn()
      $('img.disk').css('display', 'inline')
      $('img.waiting').css('display', 'none')
    }).error(function() {
      $('img.waiting').css('display', 'none')
    })

    $('img.disk').attr('src', imgURL)
  });

  $('.menu-table > tbody > tr').mouseleave(function(e) {
      $('img.waiting').css('display', 'none')
      $('img.disk').css('display', 'inline')
  })

  $('ul.right').hover(function(e) {
    var item2 = $(e.currentTarget).find('li.button.item2')
    var item3 = $(e.currentTarget).find('li.button.item3')
    var item4 = $(e.currentTarget).find('li.button.item4')

    if (item3.css('display') === 'none' && item4.css('display') === 'none') {
      //while(item3.is(':animated')){}
      var item2Top = item2.css('top')
      item3.css('display', 'block');
      item3.css('top', item2Top);

      item3.animate({top: '55px'}, 250, function(){
        // bouncing
        item3.animate({top: '47px'}, 50, function(){
          //while(item4.is(':animated')){}
          var item3Top = item3.css('top')
          item4.css('top', item3Top)
          item4.css('display', 'block');
          item4.animate({top: '105px'}, 250, function(){
            // bouncing
            item4.animate({top: '97px'}, 50, function(){})
          })
        })
      })
    } else {
      //item3.css('display', 'none')
      //item4.css('display', 'none')
    }
  })

  $('ul.right').mouseleave(function(e) {
    var item2 = $(e.currentTarget).find('li.button.item2')
    var item3 = $(e.currentTarget).find('li.button.item3')
    var item4 = $(e.currentTarget).find('li.button.item4')

    if (item3.css('display') !== 'none') {
      //while(item4.is(':animated')){}
      var item3Top = item3.css('top')
      item4.animate({top: item3Top}, 250, function(){
        //while(item3.is(':animated')){}
        item4.css('display', 'none');
        var item2Top = item2.css('top')
        item3.animate({top: item2Top}, 250, function(){
          item3.css('display', 'none');
        })
      })
    } else {
      item3.css('display', 'none')
      item4.css('display', 'none')
    }
  })

  $('.item-clear').click(function() {
    $('input').val('')
    $('textarea').val('')
  })
})(jQuery)
