$(document).ready(function () {
  visualno = 0
  rolling_v = null

  // all about basic controls when every 5 seconds 
  visual_next = function () {
    if (visualno < $(".visual .pht").length - 1) {
      visualno++
    } else {
      visualno = 0
    }
    $(".visual .pht").fadeOut(500)
    $(".visual .pht:eq(" + visualno + ")").fadeIn(500)
    $(".visual .control img").each(function () {
      $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
    })
    $(".visual .listbox2 li").hide()
    $(".visual .listbox2 li:eq(" + visualno + ")").show()
    $(".visual .control img:eq(" + visualno + ")").attr("src", $(".visual .control img:eq(" + visualno + ")").attr("src").replace(".png", "_on.png"))
    rolling_v = setTimeout("visual_next()", 5000)
  }

  // stop auto sliding and setting all controls when you click next-prev button control	
  $(".visual .next").click(function () {
    clearTimeout(rolling_v)
    visual_next()
  })
  $(".visual .prev").click(function () {
    clearTimeout(rolling_v)
    if (visualno > 0) {
      visualno--
    } else {
      visualno = $(".visual .pht").length - 1
    }
    $(".visual .pht").fadeOut(500)
    $(".visual .pht:eq(" + visualno + ")").fadeIn(500)
    $(".visual .control img").each(function () {
      $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
    })
    $(".visual .listbox2 li").hide()
    $(".visual .listbox2 li:eq(" + visualno + ")").show()
    $(".visual .control img:eq(" + visualno + ")").attr("src", $(".visual .control img:eq(" + visualno + ")").attr("src").replace(".png", "_on.png"))
    rolling_v = setTimeout("visual_next()", 5000)
  })


  // all about controls when you click each page-nav button
  $(".visual .control img").mouseover(function () {
    if (visualno != $(".visual .control img").index($(this))) {
      clearTimeout(rolling_v)
      visualno = $(".visual .control img").index($(this))
      $(".visual .control img").each(function () {
        $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
      })
      $(".visual .listbox2 li").hide()
      $(".visual .listbox2 li:eq(" + visualno + ")").show()
      $(this).attr("src", $(this).attr("src").replace(".jpg", "_on.jpg"))
      $(".visual .pht").fadeOut(500)
      $(".visual .pht:eq(" + visualno + ")").fadeIn(500)
      $(".visual .control img:eq(" + visualno + ")").attr("src", $(".visual .control img:eq(" + visualno + ")").attr("src").replace(".png", "_on.png"))
      rolling_v = setTimeout("visual_next()", 5000)
    }
  })

  // all about controls when you mouse-over on each listbox
  $(".visual .listbox img").mouseover(function () {
    if (visualno != $(".visual .listbox img").index($(this))) {
      clearTimeout(rolling_v)
      visualno = $(".visual .listbox img").index($(this))
      $(".visual .listbox2 li").hide()
      $(".visual .listbox2 li:eq(" + visualno + ")").show()
      $(".visual .pht").fadeOut(500)
      $(".visual .pht:eq(" + visualno + ")").fadeIn(500)
      $(".visual .control img").each(function () {
        $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
      })
      $(".visual .control img:eq(" + visualno + ")").attr("src", $(".visual .control img:eq(" + visualno + ")").attr("src").replace(".png", "_on.png"))
      rolling_v = setTimeout("visual_next()", 5000)
    }
  })

  // when you mouse-over on next-prev arrows
  $(".visual .prev,.visual .next").hover(function () {
    //$(this).attr("src", $(this).attr("src").replace(".png", "_on.png"))
  }, function () {
    //$(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
  })

  rolling_v = setTimeout("visual_next()", 5000)
})