

window.onload = function() {
    const SVGPATH = "./img/grass_graph.svg";
    
    var insert_div = document.getElementById("github_contributors");

    var obj = document.createElement("object");
    obj.setAttribute("type", "image/svg+xml");
    obj.setAttribute("data", SVGPATH);
    obj.style.setProperty("background", "#ffffff");
    obj.addEventListener("load", function(){
        var iframeElem = document.getElementsByTagName("object");
        var iframeDocument = iframeElem[0].contentDocument || iframeElem[0].contentWindow.document;
        var rects = iframeDocument.getElementsByTagName("rect");
        for (let i = 0; i < rects.length; i++) {
            // TODO マウスオーバーイベント拾って、ツールチップ表示したい
            // rects[i].setAttribute("data-bs-toggle", "tooltip");
            rects[i].addEventListener("mouseover", function(){
                var tooltip = new bootstrap.Tooltip(this, {
                    boundary: document.body
                });
                console.log(tooltip);
                // tooltip.show();
            })
        }
    })
    insert_div.appendChild(obj);

    

}