// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

// The whole coded site (all 10 pages: Home, The Cabin, Gallery, Rates,
// Check Availability, Reviews, Explore, About, FAQ, Contact) lives at
// /site in this repo as a standalone static HTML/CSS/JS build, hosted
// outside Wix. Visitors never leave this one Wix page — the embed below
// carries them through the coded site's own internal navigation.
//
// The embed element itself was placed manually in the Studio editor (git
// can't place page elements) as a full-bleed "Embed a Site" iframe inside
// a 100vh section, with the element ID `staticSiteFrameV1`. If that ID is
// ever renamed in the editor, FRAME_ID below has to change with it.
const FRAME_ID = "#staticSiteFrameV1";
const STATIC_SITE_URL = "https://REPLACE-WITH-HOSTED-STATIC-SITE-URL/";

$w.onReady(function () {
    const frame = $w(FRAME_ID);
    if (frame) {
        frame.src = STATIC_SITE_URL;
    }
});
