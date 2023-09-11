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

window.location = window.location.toString().replace('ruralvirtual.zoom.us/j/', 'ruralvirtual.zoom.us/wc/join/');
console.log("redirect")
