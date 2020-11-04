$(document).ready(function () {
  var Fullwindow = $(window);
  var page = $('html, body');



  if ($(".accordion__item__header").length > 0) {
    var active = "active";
    $(".accordion__item__header").click(function () {
      $(this).toggleClass(active);
      $(this).next("div").slideToggle(200);
    });
  }

  $('#menuShowMain').on('click',function(e){
    e.preventDefault();
    $('#megamenuMobileArea').toggleClass('show');
  })

  $('#mainClose').on('click',function(e){
    e.preventDefault();
    $('#megamenuMobileArea').toggleClass('show');
  })

  

  $('#submegamenuOpen').on('click',function(e){
    e.preventDefault();
    $('#submegamenu').toggleClass('show');
  })

  $('#megameuBack').on('click',function(){
    $('#submegamenu').toggleClass('show');
  })

  $('#subclose').on('click',function(){
    $('#submegamenu').toggleClass('show');
  })
  
  

  



















});