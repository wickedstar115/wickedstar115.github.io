// ==UserScript==
// @name         Google Suite Fix
// @namespace    https://www.RVAFixes.tk/
// @version      0.1
// @description  Swapping your User over sense 2022!
// @author       Binkers Gaming / Chris
// @match        *://docs.google.com/document/u/0/*
// @match        *://drive.google.com/drive/u/0/my-drive/*
// @match        *://docs.google.com/spreadsheets/u/0/*
// @match        *://docs.google.com/presentation/u/0/*
// @match        *://docs.google.com/forms/u/0/*
// @match        *://mail.google.com/mail/u/0/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drive.google.com
// @grant        none
// ==/UserScript==

window.addEventListener("load", function () {
    const WebTitle = document.querySelector(".gb_je.gb_uc.gb_he").title
    if (WebTitle == 'Docs') {
             window.location = "https://docs.google.com/document/u/1/"
    }
    if (WebTitle == 'Drive') {
             window.location = "https://drive.google.com/drive/u/1/my-drive"
    }
    if (WebTitle == 'Sheets') {
             window.location = "https://docs.google.com/spreadsheets/u/1/"
    }
    if (WebTitle == 'Slides') {
             window.location = "https://docs.google.com/presentation/u/1/"
    }
    if (WebTitle == 'Forms') {
             window.location = "https://docs.google.com/forms/u/1/"
    }
    if (WebTitle == 'Gmail') {
             window.location = "https://mail.google.com/mail/u/1/"
    }
} , false )


