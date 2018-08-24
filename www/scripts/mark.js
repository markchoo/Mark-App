$(function () {
    $("#line").change(function() {
        //var $searchResults = $(this);
        //$searchResults.attr("placeholder", "Search Location");
        alert(1);
    });
    $("#ZoomLevel").change(function () {
        var ZoomLevel = $("#ZoomLevel").val();
        //alert(ZoomLevel);
        map.setZoom(parseInt(ZoomLevel));
    });
    $("#btnDownloadBook").click(function () {
        var url = "http://localhost:8082/gps/gps-download/mark-03133.gpx"
        //var url = "http://localhost:8082/"
        //FetchURL(url);
        //return false;  // called to ensure there is no postback
        alert(1);
        fh = fopen(url, 0); // Open the file for reading 
        alert(2);
        if (fh != -1) // If the file has been successfully opened 
        {
            length = flength(fh);         // Get the length of the file     
            str = fread(fh, length);     // Read in the entire file 
            fclose(fh);                    // Close the file 

            // Display the contents of the file     
            //$("#Outone").val = str;
            alert(str);
        }

        //https://codepen.io/chrisdpratt/pen/RKxJNo
        //$.ajax({
        //    //url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        //    url: url,
        //    method: 'GET',
        //    xhrFields: {
        //        responseType: 'blob'
        //    },
        //    success: function (data) {
        //        //alert(data);
        //        //$("#Outone").val = data;
        //        var a = document.createElement('a');
        //        var url = window.URL.createObjectURL(data);
        //        a.href = url;
        //        a.download = 'x.gpx';
        //        a.click();
        //        window.URL.revokeObjectURL(url);
        //    }
        //});

        //if (getText('txtbk_sno2') == "") {
        //    setSpan("請先輸入資料！", "spanWpt2");
        //    return;
        //}
        //var bk_sno=getText('txtbk_sno2');
        //setSpan("", "spanWpt2");
        //var uri = '/api/all/book/' + bk_sno;
        //$.getJSON(uri)
        //    .done(function (data) {
        //        // On success, 'data' contains a list of products.
        //        if (data.length > 0) {
        //            bk_name_now=bk_sno+'-'+data;
        //            setSpan(bk_name_now, "spanWpt2");
        //            show_bookwpt(bk_sno);
        //        }
        //        else {
        //            setSpan("錯誤！找不到指定資料", "spanWpt2");
        //        }
        //    })
        //    .fail(function (jqXHR, textStatus, err) {
        //        setSpan('歷史資料抓取錯誤: ' + err, "spanWpt2");
        //    });
    });
})

//http://www.jquerybyexample.net/2012/05/how-to-get-querystring-value-using.html
function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
function loadXMLDoc(url, callback) {
    var xmlhttp;
    var txt, xx, x, i;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //return xmlhttp.responseXML;
            callback(xmlhttp.responseXML, xmlhttp.status);
            request.onreadystatechange = function () { };
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function get_id(id) {
    var id2 = parseInt(id);
    var const1 = localStorage.getItem("bkpass_n");
    var x = Math.round((id2 + const1 / 2) / const1);
    return adjust1(x, 3);
}
function adjust1(xx, nn) {
    var bb = (10000000000) + xx.toString();
    return bb.substr(bb.length - nn, nn);
}
function FetchURL(urlx){
    var url = urlx;

    downloadURL(url);
}

function downloadURL(url) {
    var hiddenIFrameID = 'hiddenDownloader',
        iframe = document.getElementById(hiddenIFrameID);
    if (iframe === null) {
        iframe = document.createElement('iframe');
        iframe.id = hiddenIFrameID;
        //iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }
    iframe.src = url;
};