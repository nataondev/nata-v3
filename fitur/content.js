function removeAds() {
  if (window.location.hostname === "samehadaku.email") {
    $("#floatcenter, #floatbottom").remove();
    // hapus setiap anchor didalam tag main, namun jangan hapus jika anchor child parent dari class "widget_senction" dan class "download-eps"
    $("main a").each(function () {
      if (!$(this).parents(".widget_senction, .download-eps").length) {
        $(this).remove();
      }
    });
    $(".wp-block-group").remove();
    // remove widget_senction yang tidak memiliki child
    $(".widget_senction:not(:has(*))").remove();
    $("main br, .container.footer").remove();
  }
}
// tambahkan css oploverz dan samehadaku
if (window.location.hostname === "samehadaku.email") {
  var css = `
    .wrapper { display: flex;justify-content: center} 
    .widget_senction { border-radius: 15px; }
    .widget-title h3 { padding-top: 5px; padding-bottom: 5px;}
    .copyright_eastheme p { text-align: center;}
    `,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
  head.appendChild(style);
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
// Jalankan fungsi
removeAds();
