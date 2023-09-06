// ==UserScript==
// @name         Buzz API Fix
// @namespace    https://www.RVAFixes.tk/
// @version      0.1
// @description  Login fix for Buzz! (pairs well with autologin)
// @author       wickedstar
// @match        https://api.agilixbuzz.com/SSOProcess?domainid=27479496&url=https%3A%2F%2Fruralva.agilixbuzz.com%2Fsamlsso*
// @match        https://wen.geniussis.com/FEDashboard.aspx*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=agilixbuzz.com
// @grant        none
// ==/UserScript==

window.location = "https://ruralva.agilixbuzz.com/student/home/courses"
