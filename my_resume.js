$(document).ready(function () {

  $('#my_education').click(function(){
    $('.li_tab').removeClass('active');
    $(this).addClass('active');
    $('.text_size').addClass('hidden');
    $('.education_div').fadeIn(1000).removeClass('hidden');
  });

  $('#my_experience').click(function(){
    $('.li_tab').removeClass('active');
    $(this).addClass('active');
    $('.text_size').addClass('hidden');
    $('.experience_div').fadeIn(1000).removeClass('hidden');
  });

  $('#my_work').click(function(){
    $('.li_tab').removeClass('active');
    $(this).addClass('active');
    $('.text_size').addClass('hidden');
    $('.work_div').fadeIn(1000).removeClass('hidden').addClass('active');
  });

  $('#my_volunteer').click(function(){
    $('.li_tab').removeClass('active');
    $(this).addClass('active');
    $('.text_size').addClass('hidden');
    $('.volunteer_div').fadeIn(1000).removeClass('hidden');
  });
});//end ready
