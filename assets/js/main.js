$(function(){
    // Main
    $('.show-nav-btn').click(function(){
        $('.navbar-main-nav').toggle();
        $('.user-control').toggle();
        $('.logout-text--manage').toggle();
    });

    $('#search-input').click(function(){
        $('.suggest-form').toggle();
    })

    $('.btn-close').click(function(){
        $('#setting').toggle();
    })

    $('.user-options').click(function(){
        $('#setting').show();
    })

    $('.control-btn').click(function(){
        $('#list-trend-places-2').toggle();
        $('#list-trend-places-1').toggle();
    })

    // Notify event
    $('.btn-close-notify-event').click(function(){
        $('#notify-event').toggle();
    })

    $('.endow-item').click(function(){
        $('#notify-event').fadeIn('fast');
    })

    // List-tour
    // bell
      $('.notification-icon').click(function(){
          $(' .notification-content').toggle();
      });
      // avatar user
      $('.user').click(function(){
          $('.user-options').toggle();
      });

      // Nav-bar: view all
      $('.nav-link--view-all').click(function(){
        $('#js-list-tour__content').show();
        $('#user-booked-tour').hide();
      })

      // Nav-bar: user booked tours
      $('.user-booked-tour-link').click(function(){
        $('#js-list-tour__content').hide();
        $('#user-booked-tour').show();
      })

      // Search tours
      $('.list-tour__search').keyup(function(){
          $('.card').hide();
          if($(this).val() != ''){
            // $('.card:contains('+ $(this).val() + ')').addClass("col-xl-12");
            $('.card:contains('+ $(this).val() + ')').show();
            switch($('.card:contains('+ $(this).val() + ')').length){
              case 1:
                $('.card:contains('+ $(this).val() + ')').addClass("col-xl-12 col-sm-12 col-md-12");
                break;
              case 2:
                $('.card:contains('+ $(this).val() + ')').addClass("col-xl-6 col-sm-12 col-md-12");
                break;
              case 3:
                $('.card:contains('+ $(this).val() + ')').addClass("col-xl-4 col-sm-12 col-md-12");
                break;
              case 4:
                $('.card:contains('+ $(this).val() + ')').addClass("col-xl-3 col-sm-12 col-md-12");
                break;
              default: 
              $('.card:contains('+ $(this).val() + ')').addClass("col-xl-3 col-sm-12 col-md-12");
            }
          }
          else{
            $('.card:contains('+ $(this).val() + ')').removeClass("col-xl-12 col-sm-12 col-md-12");
            $('.card:contains('+ $(this).val() + ')').removeClass("col-xl-6 col-sm-12 col-md-12");
            $('.card:contains('+ $(this).val() + ')').removeClass("col-xl-4 col-sm-12 col-md-12");
            $('.card').show();
          }
      })

      // Increase / Reduce buttons
      $('.increase-btn').click(function(){
        var count= new Number($(this).siblings('.quantity-booker').text());
        count++;
        $(this).siblings('.quantity-booker').text(count);
      })
      $('.reduce-btn').click(function(){
        var count= new Number($(this).siblings('.quantity-booker').text());
        count--;
        if(count >=0){
          $(this).siblings('.quantity-booker').text(count);
        }
      })

      // Buy button 
      $('.buy-btn').click(function(){
            $(this).toggle();
            $(this).siblings('.buy-btn--success').css("display","block");
      })

      $('.buy-btn--success').click(function(){
        $(this).hide();
        $(this).siblings('.buy-btn').toggle();
      })

      // Manage
      $('#manage-info-tour-link').click(function(){
        $('.manage-info-tour').show();
        $('.manage-user').hide();
        $('.manage-booked-tour').hide();
    })

      $('#manage-user-link').click(function(){
          $('.manage-info-tour').hide();
          $('.manage-user').show();
          $('.manage-booked-tour').hide();
      })

      $('#manage-user-booked-tour-link').click(function(){
          $('.manage-info-tour').hide();
          $('.manage-user').hide();
          $('.manage-booked-tour').show();
      })

      // $('input[name="tour-id"]').val($(a).find('.id_tour').text());
      // $('input[name="tour-name"]').val($(a).find('.ten-tour').text());
      // $('input[name="tour-address"]').val($(a).find('.diadiem-tour').text());
      // $('input[name="tour-img"]').val($(a).find('.anh-tour').text());
      // $('input[name="tour-price"]').val($(a).find('.gia-tour').text());
      // $('input[name="tour-list"]').val($(a).find('.soluong-tour').text());
      // $('input[name="tour-type"]').val($(a).find('.theloai-tour').text());
      // $('input[name="tour-content"]').val($(a).find('.noidung-tour').text());
     // _elem = $(a);

      $('.manage__search').keyup(function() {
        $('.list-info-user__table th').hide();
        $('#mange-info-tour__table thead th').show();
        $('tr:contains('+ $(this).val() + ')').children('th').toggle();
      });
$('#register_form').validate({
    rules: {
        name: 'required',
        birth_year: 'required',
        phone_number: {
            required: true,
            pattern: /[84|0].{9,}/
        },
        email_register: 'required email',
        password_register: 'required',
        checkbox: 'required'
    },
    messages: {
        name: 'B???n ch??a ??i???n t??n',
        birth_year: 'B???n ch??a ??i???n n??m sinh',
        phone_number: {
            required: 'B???n ch??a ??i???n s??? ??i???n tho???i',
            pattern: 'S??? ??i???n tho???i ph???i b???t ?????u b???ng 0 ho???c 84 v?? ??t nh???t 9 ch??? s???',
        },
        email_register: {
            required: 'B???n ch??a ??i???n email',
            email: 'Email ph???i theo ?????nh d???ng abc@gmail.com'
        },
        password_register: 'B???n ch??a ??i???n m???t kh???u',
        checkbox: 'Ph???i b???m x??c nh???n th??ng tin'
    }
})
$("#register_button").click(function () {
    if ($("#register_form").valid()) {
        alert("????ng k?? th??nh c??ng");
    }
})
     
// Buy button
// $('.buy-btn').click(function () {
//   $(this).toggle();
//   $(this).siblings('.buy-btn--success').css("display", "block");
//   $.ajax({
//       url: 'test.php',
//       dataType: 'text',
//       data: {
//           id_tour: "1",
//           id_user: "3"
//       },
//       cache: false,
//       contentType: false,
//       processData: false,
//       method: 'POST',
//       type: 'POST',
//       success: function () {
//           console.log('success');
//           alert("???? ?????t th??nh c??ng")
//       }
//   })
// })

//   $('.buy-btn--success').click(function () {
//       $(this).hide();
//       $(this).siblings('.buy-btn').toggle();
//   })
  })