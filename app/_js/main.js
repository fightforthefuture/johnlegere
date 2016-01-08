(function (doc, win) {
    "use strict";

    var showContent = function() {
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

                if (e.target.className.indexOf('tmobile') !== -1) {
                    document.getElementById("guess").innerHTML = '<em>YUP!</em>';
                    document.getElementById("guess").className = 'correct';
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
