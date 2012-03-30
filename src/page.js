var DIM = {	'contentMarginWidth' : 10,
		'contentMarginHeight' : 10,
		'contentBorderWidth' : 10,
		'contentBorderHeight' : 10,
		'headerHeight': 34
          };

window.onload = function() {
    var innerHTML = '';

    // header
    innerHTML +=
'<div id="pageHeader">' + notebook['name'] + '</div>' +
'<div id="pageNumber">' +
'<a href="' + (page['number'] > 1 ? '../' + (page['number'] - 1) + '/index.html' : '#') + '"><img id="prevPageButton" src="' + staticUrl + '/images/PreviousPageButton.png" /></a>' +
'(' + page['number'] + '/' + notebook['pageCount'] + ')' +
'<a href="' + (page['number'] < notebook['pageCount'] ? '../' + (page['number'] + 1) + '/index.html' : '#') + '"><img id="nextPageButton" src="' + staticUrl + '/images/NextPageButton.png" /></a>' +
'</div>';

    // content
    var top = DIM['headerHeight'] + 2 * DIM['contentMarginHeight'];
    innerHTML +=
'<div id="content" style="width:' + (page['width'] + DIM['contentMarginWidth']) + 'px;height=' + (page['height'] + top) + 'px;top:' + top + 'px;">' +
'<div id="pageBackground" style="width:' + page['width'] + 'px;height:' + page['height'] + 'px;">';

    innerHTML += '</div>'
      + '<object id="svg"  data="page.svg" type="image/svg+xml" width="' + page['width'] + '" height="' + page['height'] + '"></object>';

    // border for page content
    var imgPre = staticUrl + '/images/GrayCarbon_ContentBorder';
    var x1 = w1 = DIM['contentBorderWidth'];
    var x2 = page['width'] - DIM['contentBorderWidth'];
    var w2 = page['width'] - 2 * DIM['contentBorderWidth'];
    var y1 = h1 = DIM['contentBorderHeight'];
    var y2 = page['height'] - DIM['contentBorderHeight'];
    var h2 = page['height'] - 2 * DIM['contentBorderHeight'];
    innerHTML +=
'<div id="pageBorder" style="width:' + page['width'] + 'px;height=' + page['height'] + 'px;">' +
'<img src="' + imgPre + 'TopLeft.png" width="' + w1 + '" height="' + h1 + '" class="pageBorder" style="top:0px;left:0px;" />' +
'<img src="' + imgPre + 'Top.png" width="' + w2 + '" height="' + h1 + '" class="pageBorder" style="top:0px;left:' + x1 + 'px;" />' +
'<img src="' + imgPre + 'TopRight.png" width="' + w1 + '" height="' + h1 + '" class="pageBorder" style="top:0px;left:' + x2 + 'px;" />' +
'<img src="' + imgPre + 'Right.png" width="' + w1 + '" height="' + h2 + '" class="pageBorder" style="top:' + y1 + 'px;left:' + x2 + 'px;" />' +
'<img src="' + imgPre + 'BottomRight.png" width="' + w1 + '" height="' + h1 + '" class="pageBorder" style="top:' + y2 + 'px;left:' + x2 + 'px;" />' +
'<img src="' + imgPre + 'Bottom.png" width="' + w2 + '" height="' + h1 + '" class="pageBorder" style="top:' + y2 + 'px;left:' + x1 + 'px;" />' +
'<img src="' + imgPre + 'BottomLeft.png" width="' + w1 + '" height="' + h1 + '" class="pageBorder" style="top:' + y2 + 'px;left:0px;" />' +
'<img src="' + imgPre + 'Left.png" width="' + w1 + '" height="' + h2 + '" class="pageBorder" style="top:' + y1 + 'px;left:0px;" />' +
'</div>' +
'</div>';

    document.getElementById('wrapper').innerHTML = innerHTML;

    var bgStyle = document.getElementById('pageBackground').style;
    bgStyle.background = "url('resources/background.png') no-repeat center";
    if (typeof bgStyle['backgroundSize'] !== 'undefined') {
        bgStyle.backgroundSize = 'contain';
    }

    var object =  document.getElementById('svg');

    object.addEventListener('load', function(){
        var svg;

        if (object.contentDocument) {
            svg = object.contentDocument;
        }
        else {
            svg = object.getSVGDocument();
        }

        if (svg) {
            var rect = svg.getElementById('id-background-layer')
                .getElementsByTagName('rect')[0];
            rect.style.fillOpacity = 0;
        }
    }, false);
};