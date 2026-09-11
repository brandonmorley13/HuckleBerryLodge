// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

// The whole coded site (all 10 pages: Home, The Cabin, Gallery, Rates,
// Check Availability, Reviews, Explore, About, FAQ, Contact) lives at
// /site in this repo as a standalone static HTML/CSS/JS build, hosted
// outside Wix. Visitors never leave this one Wix page — the embed below
// carries them through the coded site's own internal navigation.
//
// One-time manual step (git can't place page elements): in the Studio
// editor, add a full-bleed HTML iframe / Custom Element on this page and
// set its ID to `staticSiteFrame`, then update STATIC_SITE_URL below to
// wherever /site is deployed.
const STATIC_SITE_URL = "https://REPLACE-WITH-HOSTED-STATIC-SITE-URL/";

$w.onReady(function () {
    const frame = $w("#staticSiteFrame");
    if (frame) {
        frame.src = STATIC_SITE_URL;
    }
});
