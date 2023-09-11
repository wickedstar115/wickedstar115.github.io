// ==UserScript==
// @name           Zoom redirector
// @namespace      https://openuserjs.org/users/clemente
// @match          https://*.zoom.us/j/*
// @match          https://*.zoom.us/s/*
// @version        1.2
// @author         clemente
// @license        MIT
// @description    Transparently redirects any meeting links to use Zoom's browser based web client
// @icon           https://i.imgur.com/y8BXA8l.png
// @inject-into    content
// @run-at         document-start
// @updateURL      https://openuserjs.org/meta/clemente/Zoom_redirector.meta.js
// @downloadURL    https://openuserjs.org/install/clemente/Zoom_redirector.user.js
// @supportURL     https://openuserjs.org/scripts/clemente/Zoom_redirector/issues
// @homepageURL    https://openuserjs.org/scripts/clemente/Zoom_redirector
// @noframes
// ==/UserScript==

const url = new URL(document.URL);
const match = /^\/[js]\/(\d+)\/?$/.exec(url.pathname);
if (match === undefined || match === null || match[1] === undefined) {
  return;
}

const urlEnding = match[0][1];
const meetingId = match[1];
const mapping = {'j': '/join', 's': '/start'};

document.location.pathname = '/wc/' + encodeURIComponent(meetingId) + mapping[urlEnding];
