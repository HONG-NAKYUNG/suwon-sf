// FAQ
$(function () {
  $("ul li.list").click(function () {
    if ($(this).hasClass("active") == false) {
      //active 클래스가 존재하지 않을 때
      $("ul li.list").removeClass("active");
      $("ul li.list .answer").slideUp();
      $(this).addClass("active");
      $(this).find(".answer").slideDown();
    } else {
      //active class 존재할 때
      $(this).removeClass("active");
      $(this).find(".answer").slideUp(); //본인을 클릭했을 때 answer이 사라져야하기 때문에
    }
  });

  //편의시설 Tab-button/ 고객센터 faq /

  // 초기화 코드
  $("#section-wrap section").css("display", "none");
  $("#section-wrap section").eq(0).css("display", "block");

  // 탭 클릭 코드
  $("ul.tab_menu li").click(function () {
    var thisIndex = $(this).index();
    console.log(thisIndex);
    $("ul.tab_menu li a").removeClass("active");
    $(this).find("a").addClass("active");
    $("#section-wrap section").css("display", "none");
    $("#section-wrap section").eq(thisIndex).css("display", "block");
    return false;
  });

  //대관안내 tab-btn

  // 초기화 코드
  $("#rental-section-wrap section").css("display", "none");
  $("#rental-section-wrap section").eq(0).css("display", "block");

  // 탭 클릭 코드
  $("ul.tab_menu li").click(function () {
    var thisIndex = $(this).index();
    console.log(thisIndex);
    $("ul.tab_menu li").removeClass("active");
    $(this).find("a").addClass("active");
    $("#rental-section-wrap section").css("display", "none");
    $("#rental-section-wrap section").eq(thisIndex).css("display", "block");
    return false;
  });

  //오시는길 tab-btn

  // 초기화 코드
  $("#map .map-tab-cont").css("display", "none");
  $("#map .map-tab-cont").eq(0).css("display", "block");

  // 탭 클릭 코드
  $("ul.tab_menu li").click(function () {
    var thisIndex = $(this).index();
    console.log(thisIndex);
    $("ul.tab_menu li a").removeClass("active");
    $(this).find("a").addClass("active");
    $("#map .map-tab-cont").css("display", "none");
    $("#map .map-tab-cont").eq(thisIndex).css("display", "block");
    return false;
  });

  //메가박스 tab-btn

  // 초기화 코드
  $("#mgbox-section-wrap .megabox-wrap").css("display", "none");
  $("#mgbox-section-wrap .megabox-wrap").eq(0).css("display", "block");

  // 탭 클릭 코드
  $("ul.tab_menu li").click(function () {
    var thisIndex = $(this).index();
    console.log(thisIndex);
    $("ul.tab_menu li a").removeClass("active");
    $(this).find("a").addClass("active");
    $("#mgbox-section-wrap .megabox-wrap").css("display", "none");
    $("#mgbox-section-wrap .megabox-wrap")
      .eq(thisIndex)
      .css("display", "block");
    return false;
  });
});
