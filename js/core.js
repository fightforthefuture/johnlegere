/*
 @licstart  The following is the entire license notice for the
    JavaScript code in this page.

 Copyright (C) 2015 Fight for the Future

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version. The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 @licend  The above is the entire license notice
    for the JavaScript code in this page.
*/
(function (doc, win) {
    "use strict";

    var showContent = function() {
        window.scrollTo(0,0);
        document.body.style.overflow = 'hidden';
        document.getElementById('content').style.display = 'block';
        setTimeout(function() {
            document.getElementById('content').style.opacity = 1;
        }, 10);
    }

    var onDomContentLoaded = function() {
        var as = document.querySelectorAll('.ceos a');

        for (var i = 0; i < as.length; i++) {
            as[i].addEventListener('click', function(e) {
                e.preventDefault();

                if (e.target.className.indexOf('verizon') !== -1) {
                    document.getElementById("guess").innerHTML = '<em>CLOSE...</em>';
                } else if (e.target.className.indexOf('tmobile') !== -1) {
                    document.getElementById("guess").innerHTML = '<em>YUP!</em>';
                    document.getElementById("guess").className = 'correct';
                } else {
                    document.getElementById("guess").innerHTML = '<em>GUESS AGAIN!</em>';
                }

                document.getElementById("guess").style.display = 'table';

                setTimeout(function() {
                    if (e.target.className.indexOf('tmobile') === -1) {
                        document.getElementById("guess").className = 'fade';
                    } else {
                        showContent();
                    }
                }, 1000);

                setTimeout(function() {
                    document.getElementById("guess").style.display = 'none';
                    document.getElementById("guess").className = '';
                }, 2010);
            });
        }

        if (window.location.href.indexOf('showContent=1') !== -1) {
            showContent();
        }
    }

    // Wait for DOM content to load.
    if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
        onDomContentLoaded();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', onDomContentLoaded, false);
    }


})(document, window);

//# sourceMappingURL=core.js.map