/* ═══ IAM prototype — shared version configuration ═══
   Single source of truth for every build's Version submenu (profile
   menu → Version) and for the root-level redirect (`public/index.html`).

   Why this exists: each prototype build (v1–v4) is a fully separate
   static HTML/CSS/JS bundle (no bundler, no shared JS modules — see
   README/`.gitlab-ci.yml`), so there's no natural single place for a
   "versions" list to live. This file is that place: it's loaded via a
   plain <script> tag by every build's `index.html` (one level up from
   `v1/`, `v2/`, `v3/`, `v4/`, alongside `nav/`/`avatars/`/`assets/`)
   and exposes `window.IAM_VERSIONS` + `window.IAM_DEFAULT_VERSION_ID`.
   Adding a future v5 means editing exactly ONE array entry here plus
   wiring one `IAM_CURRENT_VERSION_ID` constant in the new build's own
   app.js — every existing build's Version submenu picks it up
   automatically (each build re-renders its submenu from this array on
   load; see `renderVersionSubmenu()` in each build's app.js).

   `folder` is relative to the site root (`public/`), matching the
   already-established GitLab Pages routes:
     /v1/  /v2/  /v3/  /v4/
   (v1 used to be served at the site root itself; it now has its own
   `v1/` folder like v2–v4 so `/v1/` is a real, direct URL — see the
   root `index.html`, which is now a redirect-only shell to
   `IAM_DEFAULT_VERSION_ID`, not the v1 app itself.) */
(function (global) {
  var IAM_VERSIONS = [
    { id: "v1", label: "1.0", folder: "v1" },
    { id: "v2", label: "2.0", folder: "v2" },
    { id: "v3", label: "3.0", folder: "v3" },
    { id: "v4", label: "4.0 (ADS)", folder: "v4" },
    /* V4.1 (2026-08-11): a full, independent duplicate of V4's folder
       (`public/v4.1/`) taken at the moment this entry was added — same
       HTML/CSS/JS bundle, own copy of every file (not a redirect/alias
       to `v4/`), so V4.1 can now evolve on its own without touching or
       regressing V4. `id`/`folder` intentionally use the literal dot
       ("v4.1") rather than a dash: a directory named `v4.1/` is a fully
       valid static-host path segment (no bundler/router involved — see
       the file-level comment above), so `/v4.1/` works out of the box
       and reads unambiguously as "Version 4.1" in the URL. */
    { id: "v4.1", label: "4.1 (ADS)", folder: "v4.1" }
  ];

  /* The version that `/` (and any other version-less entry point)
     resolves to. Changing this one string is the ONLY edit needed to
     move the site default to a different existing version.
     2026-08-11: moved from "v4" to "v4.1" now that V4.1 exists — V4
     itself is untouched and still fully reachable at its own `/v4/`
     route (see `iamVersionHref`/each build's Version submenu); this
     line only changes what a version-less "/" resolves to. */
  var IAM_DEFAULT_VERSION_ID = "v4.1";

  global.IAM_VERSIONS = IAM_VERSIONS;
  global.IAM_DEFAULT_VERSION_ID = IAM_DEFAULT_VERSION_ID;

  /* Small shared helper: the href from any version build's index.html
     to another build, given both live one level below the site root
     (`/v1/`, `/v2/`, `/v3/`, `/v4/` are siblings). Exposed so each
     build's Version-submenu renderer doesn't re-derive this. */
  global.iamVersionHref = function (targetFolder) {
    return "../" + targetFolder + "/";
  };
})(window);
