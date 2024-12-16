var userAgent = navigator.userAgent;
      var browserName = getBrowserName(userAgent);
      var browserVersion = getBrowserVersion(userAgent);

      document.getElementById("browser-version").innerHTML = "Seu navegador é " + browserName + " " + browserVersion;

      function getBrowserName(userAgent) {
        var browsers = ["Chrome", "Firefox", "Safari", "Opera", "MSIE", "Trident", "Edge"];
        for (var i = 0; i < browsers.length; i++) {
          if (userAgent.indexOf(browsers[i]) !== -1) {
            return browsers[i];
          }
        }
        return "Desconhecido";
      }

      function getBrowserVersion(userAgent) {
        var versionIndex = userAgent.indexOf("Version/");
        if (versionIndex === -1) {
          versionIndex = userAgent.indexOf(browserName) + browserName.length + 1;
        } else {
          versionIndex += 8;
        }
        var versionString = userAgent.substring(versionIndex);
        var versionParts = versionString.split(/[^\d\.]/);
        return versionParts[0];
      }