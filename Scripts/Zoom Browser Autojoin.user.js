// ==UserScript==
// @name         Zoom Webclient Redirect (RVA)
// @namespace    https://www.RVAFixes.tk/
// @version      0.1
// @description  Redirects you to the Zoom webclient automaticly!
// @author       Binkers Gaming / Chris
// @match        *://ruralvirtual.zoom.us/j/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function getCurrentURL () {
  return window.location.href
}

const url = getCurrentURL()
if (url) {
    nurl = url.replace('https://ruralvirtual.zoom.us/j/','https://ruralvirtual.zoom.us/wc/join/');
    window.location = (nurl)
}
