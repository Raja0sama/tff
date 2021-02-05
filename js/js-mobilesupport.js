var x = 0;
$(document).ready(function () {
  $("body").scroll(function () {
    //alert('ss'); //$("span").text( x+= 1);
  });
});

$(document).ready(function () {
  $(".readbio").click(function () {
    // alert('fff');
    // var teambio = $(this).data("bio");
    $(".aboutteamdetails-bio").addClass("show");
  });
});
$(document).ready(function () {
  $(".about-back-bio").click(function () {
    //$('.teamdetails').removeClass('show')
    // var teambioback = $(this).data("back");
    $(".aboutteamdetails-bio").removeClass("show");
  });
});

// Footer Loc
// function runScroll 
$(document).ready(function () {
  $(".footernext").click(function () {
   var loc = $(".loc.show").data("loc");
   if( loc === "uaeloc" ) {  
    $(".loc.show").removeClass("show").addClass("hide");
    $(".sraloc.loc").addClass("show").removeClass('hide');
   } else if( loc === "sraloc" ) {  
    $(".loc.show").removeClass("show").addClass("hide");
    $(".pkloc.loc").addClass("show").removeClass('hide');
   }else if( loc === "pkloc" ) {  
    $(".loc.show").removeClass("show").addClass("hide");
    $(".egyloc.loc").addClass("show").removeClass('hide');
   }else if( loc === "egyloc" ) {  
    $(".loc.show").removeClass("show").addClass("hide");
    $(".uaeloc.loc").addClass("show").removeClass('hide');
   }
  });
  $(".footerprev").click(function () {
    var loc = $(".loc.show").data("loc");
    if( loc === "uaeloc" ) {  
     $(".loc.show").removeClass("show").addClass("hide");
     $(".egyloc.loc").addClass("show").removeClass('hide');
    } else if( loc === "sraloc" ) {  
     $(".loc.show").removeClass("show").addClass("hide");
     $(".uaeloc.loc").addClass("show").removeClass('hide');
    }else if( loc === "pkloc" ) {  
     $(".loc.show").removeClass("show").addClass("hide");
     $(".sraloc.loc").addClass("show").removeClass('hide');
    }else if( loc === "egyloc" ) {  
     $(".loc.show").removeClass("show").addClass("hide");
     $(".pkloc.loc").addClass("show").removeClass('hide');
    }
   });
});




// Mouse Move
$(document).on("click mousemove", ".PlayBtnBox", function (e) {
  var x = e.clientX;
  var y = e.clientY;

  if ($(window).width() < 1290) {
    var newposX = x - 1140;
    var newposY = y - 485;
  } else if ($(window).width() < 1376) {
    var newposX = x - 1200;
    var newposY = y - 525;
  } else if ($(window).width() < 1690) {
    var newposX = x - 1500;
    var newposY = y - 630;
  } else if ($(window).width() < 1760) {
    var newposX = x - 1545;
    var newposY = y - 645;
  } else if ($(window).width() < 1870) {
    var newposX = x - 1640;
    var newposY = y - 690;
  } else if ($(window).width() < 1930) {
    var newposX = x - 1480;
    var newposY = y - 630;
  } else {
    var newposX = x - 1720;
    var newposY = y - 740;
  }
  $(".Playbtn-box").css(
    "transform",
    "translate3d(" + newposX + "px," + newposY + "px,0px)"
  );
});

$(document).ready(function () {
  $(".PlayFraming").mouseenter(function () {
    $("figure#mouse-pointer").hide();
  });
  $(".PlayFraming").mouseleave(function () {
    $("figure#mouse-pointer").show();
  });
});

// team Move
$(document).ready(function () {
  // Team 1
  $(".team1 .teamnext").click(function () {
    $(".teambox .team1").removeClass("show");
    $(".teambox .team2").addClass("show");
  });
  $(".team1 .teamprev").click(function () {
    $(".teambox .team1").removeClass("show");
    $(".teambox .team3").addClass("show");
  });
  // Team 2
  $(".team2 .teamnext").click(function () {
    $(".teambox .team2").removeClass("show");
    $(".teambox .team3").addClass("show");
  });
  $(".team2 .teamprev").click(function () {
    $(".teambox .team2").removeClass("show");
    $(".teambox .team1").addClass("show");
  });
  // Team 3
  $(".team3 .teamnext").click(function () {
    $(".teambox .team3").removeClass("show");
    $(".teambox .team1").addClass("show");
  });
  $(".team3 .teamprev").click(function () {
    $(".teambox .team3").removeClass("show");
    $(".teambox .team2").addClass("show");
  });
});

// Menu
$(function () {
  $(".header-nav button").click(function () {
    $(".menuUp").removeClass("MenuUpClose").addClass("menuUpSlide");
  });
  $(".header-nav button.closing").click(function () {
    $(".menuUp").removeClass("menuUpSlide").addClass("MenuUpClose");
    setTimeout(function () {
      $(".menuUp").removeClass("MenuUpClose");
    }, 2000);
  });
  $(".closing").click(function(){
    // alert('hello');
  });
});

$(document).ready(function () {
  $(".aboutOverlink").mouseenter(function () {
    $(".aboutover-bg").addClass("aboutover-bgOver");
  });
  $(".aboutOverlink").mouseleave(function () {
    $(".aboutover-bg").removeClass("aboutover-bgOver");
  });
});

//   Work Mouse Over
$(document).ready(function () {
  $(".WorkList li h1").mouseenter(function () {
    var thisid = "workovershow-" + $(this).attr("id");
    jQuery("#KeepWorkImage").attr("class", "workOver-image");
    $(".workOver-image").removeClass("workOver-leave").addClass(thisid);
    $(this).parent().addClass("List-Link");
  });
  $(".WorkList li h1").mouseleave(function () {
    var thisid = "workovershow-" + $(this).attr("id");
    $(".workOver-image").addClass("workOver-leave");
    $(this).parent().removeClass("List-Link");
  });
});

// anchors: ['home', 'about-us', 'unicep', 'careers', 'footer'],

var cpid = document.getElementsByClassName("currentpagename")[0].id;
if (cpid === "homepage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: [
      "home",
      "about",
      "unicef",
      "honda",
      "dpworld",
      "rexona",
      "careers",
      "footer",
    ],
    menu: "#menu",
  });
} else if (cpid === "aboutuspage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: ["aboutus", "description", "team", "partners", "footer"],
    menu: "#menu",
  });
} else if (cpid === "workpage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: [
      "home",
      "unicef",
      "honda",
      "dpworld",
      "rexona",
      "tresemme",
      "emirates",
      "omocomfort",
      "mamaspapas",
      "aecb",
      "footer",
    ],
    menu: "#menu",
  });
} else if (cpid === "servicespage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: [
      "services",
      "assessment",
      "strategy",
      "content",
      "community",
      "amplification",
      "media",
      "footer",
    ],
    menu: "#menu",
  });
} else if (cpid === "contactpage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: ["write", "form", "footer"],
    menu: "#menu",
  });
} else if (cpid === "contactsuccess") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: ["success"],
    menu: "#menu",
  });
} else if (cpid === "playerpage") {
  var myFullpage = new fullpage("#fullpage", {
    verticalCentered: false,
    css3: false,
    v2compatible: true,
    anchors: ["player", "details"],
    menu: "#menu",
  });
} else {
  alert(
    'Routing Not Found (Please add <div class="col-12 p-0 currentpagename" id=""> in the body or check ID name from support.js'
  );
}
var deleteLog = false;

var myFullpage = new fullpage("#fullpage", {
  v2compatible: true,
  menu: "#menu",
  onLeave: function (index, nextIndex, direction) {
    if (deleteLog) {
      document.getElementById("callbacksDiv").innerHTML = "";
    }
    document.getElementById("callbacksDiv").innerHTML +=
      "<p>onLeave - index:" +
      index +
      " nextIndex:" +
      nextIndex +
      " direction:" +
      direction +
      "</p>";

    console.log(
      "onLeave--" +
        "index: " +
        index +
        " nextIndex: " +
        nextIndex +
        " direction: " +
        direction
    );
  },
  onSlideLeave: function (
    anchorLink,
    index,
    slideIndex,
    direction,
    nextSlideIndex
  ) {
    if (deleteLog) {
      document.getElementById("callbacksDiv").innerHTML = "";
    }
    document.getElementById("callbacksDiv").innerHTML +=
      "<p>onSlideLeave - anchorLink:" +
      anchorLink +
      " index:" +
      index +
      " slideIndex:" +
      slideIndex +
      " direction:" +
      direction +
      " nextSlideIndex:" +
      nextSlideIndex +
      "</p>";
    console.log(
      "onSlideLeave--" +
        "anchorLink: " +
        anchorLink +
        " index: " +
        index +
        " slideIndex: " +
        slideIndex +
        " direction: " +
        direction
    );
  },
  afterRender: function () {
    document.getElementById("callbacksDiv").innerHTML += "<p>afterRender</p>";
    console.log("afterRender");
  },
  afterResize: function () {
    document.getElementById("callbacksDiv").innerHTML += "<p>afterResize</p>";
    console.log("afterResize");
  },
  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    document.getElementById("callbacksDiv").innerHTML +=
      "<p>afterSlideLoad - anchorLink:" +
      anchorLink +
      " index:" +
      index +
      " slideAnchor:" +
      slideAnchor +
      " slideIndex:" +
      slideIndex +
      "</p>";
    deleteLog = true;
    console.log(
      "afterSlideLoad--" +
        "anchorLink: " +
        anchorLink +
        " index: " +
        index +
        " slideAnchor: " +
        slideAnchor +
        " slideIndex: " +
        slideIndex
    );
    console.log("----------------");
  },
  afterLoad: function (anchorLink, index) {
    console.log("after Load  " + index);
    document.getElementById("callbacksDiv").innerHTML +=
      "<p>afterLoad - anchorLink:" + anchorLink + " index:" + index + "</p>";
    deleteLog = true;
    console.log("===============");
    console.log(
      "afterLoad--" + "anchorLink: " + anchorLink + " index: " + index
    );
  },
});

// Cursor
$(function () {
  $(window).mousemove(function (event) {
    $("#mouse-pointer").css({
      top: event.pageY + "px",
      left: event.pageX + "px",
    });
  });
});

$(function () {
  $(".MenuLinkOver").mouseenter(function () {
    var overlink = $(this).attr("id");
    $(".menuUpSlide").addClass("menuBG" + overlink);
    $("#" + overlink + " .overMenudescription").addClass("menutooltip");
  });
  $(".MenuLinkOver").mouseleave(function () {
    var overlink = $(this).attr("id");
    $(".menuUpSlide").removeClass("menuBG" + overlink);
    $("#" + overlink + " .overMenudescription").removeClass("menutooltip");
  });
});

// // Marquee Active Class
// $(document).ready(function(){
//     $('.section').removeClass('footerstyle');
// });

$(document).ready(function () {
  $(".teamreach i").mouseenter(function () {
    var hil = $(this).attr("class");
    $(".teamreach-place").addClass("teamreach" + hil);
    $(".teamscroller-move").hide();
    $(".teamscroll-up").hide();
  });
  $(".teamreach i").mouseleave(function () {
    $(".teamreach-place").removeClass(
      "teamreachsami teamreachross teamreachruby teamreachdom teamreachrossl"
    );
  });

  $(".teamreach i").click(function () {
    var iclick = $(this).attr("class");
    $(".teamdetails#" + iclick).addClass("show");
  });
  $(".about-back").click(function () {
    $(".teamdetails").removeClass("show");
    $(".teamscroller-move").show();
    $(".teamscroll-up").show();
  });
  $(".about-next").click(function () {
    $(".teamdetails").removeClass("show");
    var team = $(this).data("team");
    $(".teamdetails#" + team).addClass("show");
  });
});



// device Scroller
// (function ($) {
//   $(window).on("load", function () {
//     $(".teamscrolling").mCustomScrollbar({
//       axis: "x",
//       advanced: { autoExpandHorizontalScroll: true },
//     });
//     $(".footerxscroller").mCustomScrollbar({
//       axis: "x",
//       advanced: { autoExpandHorizontalScroll: true },
//     });
//   });
// })(jQuery);
(function ($) {
  $(window).on("load", function () {
    $(".teamscrolling").mCustomScrollbar({
      axis: "x",
      advanced: { autoExpandHorizontalScroll: true },
    });
    $(".footerxscroller").mCustomScrollbar({
      axis: "x",
      advanced: { autoExpandHorizontalScroll: true },
    });
  });
})(jQuery);






console.clear();

