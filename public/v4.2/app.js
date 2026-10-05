var DATA = [
  /* ── Page 1 ── */
  { id: "u001", avatar: "../avatars/photos/m01.png", name: "Homer Simpson",                email: "Homer.Simpson@disney.com",                roles: ["ACP Vendor Planner", "Planning Agent User", "ACP Viewer"], status: "Active",   team: "National Ad Sales",          title: "VP, Ad Sales Operations",              region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"   },
  { id: "u002", avatar: "../avatars/photos/f01.png", name: "Marge Simpson",                email: "marge.simpson@disney.com",                roles: ["ACP Planning Specialist", "Sales Agent User"], status: "Active",   team: "Sales Planning",             title: "Director, Media Strategy",             region: "NA",    lastLogin: "May 2, 2026, 2:30 PM"   },
  { id: "u003", avatar: "../avatars/photos/m02.png", name: "Bart Simpson",                 email: "Bart.Simpson@disney.com",                 roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "National Ad Sales",          title: "Coordinator, Sales Support",           region: "NA",    lastLogin: "May 3, 2026, 9:15 AM"   },
  { id: "u004", avatar: "../avatars/photos/m03.png", name: "Ned Flanders",                 email: "Ned.Flanders@disney.com",                 roles: ["ACP Planning Manager", "ACP Planning Specialist", "ACP Viewer"], status: "Active",   team: "Client & Brand Solutions",   title: "Manager, Client Partnerships",         region: "EMEA",  lastLogin: "Apr 28, 2026, 11:20 AM"  },
  { id: "u005", avatar: "../avatars/photos/f02.png", name: "Lisa Simpson",                 email: "Lisa.Simpson@disney.com",                 roles: ["ACP Viewer", "Planning Agent User"], status: "Active", team: "Ad Operations",              title: "Sr. Analyst, Audience Insights",       region: "NA",    lastLogin: "May 1, 2026, 4:00 PM"   },
  { id: "u006", avatar: "../avatars/photos/m04.png", name: "Montgomery Burns",             email: "Montgomery.Burns@disney.com",             roles: ["Sales Agent User"],               status: "Inactive", team: "Revenue & Yield Management", title: "SVP, Revenue Strategy",                region: "NA",    lastLogin: "Feb 14, 2026, 10:30 AM"  },
  { id: "u007", avatar: "../avatars/photos/m05.png", name: "Milhouse Van Houten",          email: "Milhouse.VanHouten@disney.com",           roles: ["Planning Agent User", "ACP Planner"], status: "Active",   team: "Sales Planning",             title: "Analyst, Campaign Planning",           region: "ANZ",   lastLogin: "Apr 30, 2026, 3:45 PM"   },
  { id: "u008", avatar: "../avatars/photos/f03.png", name: "Maggie Simpson",               email: "Maggie.Simpson@disney.com",               roles: ["ACP Planner"],                    status: "Active",   team: "Revenue & Yield Management", title: "Associate, Revenue Ops",               region: "NA",    lastLogin: "May 2, 2026, 7:00 PM"   },
  { id: "u009", avatar: "../avatars/photos/m06.png", name: "Waylon Smithers",              email: "Waylon.Smithers@disney.com",              roles: ["ACP Vendor Planner", "Sales Agent User"], status: "Inactive", team: "Sales Planning",             title: "Lead, Billing Operations",             region: "NA",    lastLogin: "Jan 22, 2026, 9:00 AM"   },
  { id: "u010", avatar: "../avatars/photos/m07.png", name: "Nelson Muntz",                 email: "Nelson.Muntz@disney.com",                 roles: ["ACP Vendor Planner"],             status: "Active",   team: "Revenue & Yield Management", title: "Associate, Finance & Planning",        region: "LATAM", lastLogin: "Apr 25, 2026, 5:30 PM"   },

  /* ── Page 2 ── */
  { id: "u011", avatar: "../avatars/photos/m08.png", name: "Ralph Wiggum",                 email: "Ralph.Wiggum@disney.com",                 roles: ["ACP Planner"],                    status: "Active",   team: "Ad Operations",              title: "Associate, Ad Operations",             region: "NA",    lastLogin: "Apr 29, 2026, 1:15 PM"   },
  { id: "u012", avatar: "../avatars/photos/m09.png", name: "Principal Skinner",            email: "Principal.Skinner@disney.com",            roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "Agency & Holding Company Sales", title: "Sr. Manager, Agency Partnerships",     region: "NA",    lastLogin: "May 1, 2026, 10:00 AM"   },
  { id: "u013", avatar: "../avatars/photos/m10.png", name: "Krusty the Clown",             email: "Krusty.TheClown@disney.com",              roles: ["ACP Planning Specialist"],        status: "Active",   team: "Client & Brand Solutions",   title: "Director, Brand Partnerships",         region: "NA",    lastLogin: "Apr 22, 2026, 2:00 PM"   },
  { id: "u014", avatar: "../avatars/photos/f04.png", name: "Selma Bouvier",                email: "Selma.Bouvier@disney.com",                roles: ["ACP Viewer"],                     status: "Active",   team: "National Ad Sales",          title: "Manager, Billing Operations",          region: "EMEA",  lastLogin: "Apr 18, 2026, 9:30 AM"   },
  { id: "u015", avatar: "../avatars/photos/f05.png", name: "Patty Bouvier",                email: "Patty.Bouvier@disney.com",                roles: ["ACP Planning Manager"],           status: "Active",   team: "Revenue & Yield Management", title: "Sr. Analyst, Revenue Reporting",       region: "EMEA",  lastLogin: "May 2, 2026, 11:45 AM"   },
  { id: "u016", avatar: "../avatars/photos/m11.png", name: "Lenny Leonard",                email: "Lenny.Leonard@disney.com",                roles: ["Planning Agent User"],            status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Media Investment",        region: "NA",    lastLogin: "Apr 30, 2026, 4:15 PM"   },
  { id: "u017", avatar: "../avatars/photos/m12.png", name: "Carl Carlson",                 email: "Carl.Carlson@disney.com",                 roles: ["Sales Agent User"],               status: "Active",   team: "Revenue & Yield Management", title: "Manager, Yield Optimization",          region: "NA",    lastLogin: "Apr 27, 2026, 3:00 PM"   },
  { id: "u018", avatar: "../avatars/photos/m13.png", name: "Moe Szyslak",                  email: "Moe.Szyslak@disney.com",                  roles: ["ACP Vendor Planner"],             status: "Inactive", team: "Client & Brand Solutions",   title: "Coordinator, Client Services",         region: "LATAM", lastLogin: "Mar 10, 2026, 6:00 PM"   },
  { id: "u019", avatar: "../avatars/photos/m14.png", name: "Apu Nahasapeemapetilon",       email: "Apu.Nahasapeemapetilon@disney.com",       roles: ["ACP Planner"],                    status: "Active", team: "Agency & Holding Company Sales", title: "Sr. Manager, International Strategy",  region: "ANZ",   lastLogin: "May 3, 2026, 7:30 AM"   },
  { id: "u020", avatar: "../avatars/photos/m15.png", name: "Comic Book Guy",               email: "Comic.BookGuy@disney.com",                roles: ["ACP Planning Specialist"],        status: "Active",   team: "Revenue & Yield Management", title: "Analyst, Financial Planning",          region: "NA",    lastLogin: "Apr 14, 2026, 12:30 PM"  },

  /* ── Page 3 ── */
  { id: "u021", avatar: "../avatars/photos/m16.png", name: "Chief Wiggum",                 email: "Chief.Wiggum@disney.com",                 roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "Client & Brand Solutions",   title: "VP, Client Solutions",                 region: "NA",    lastLogin: "Apr 24, 2026, 10:15 AM"  },
  { id: "u022", avatar: "../avatars/photos/f06.png", name: "Edna Krabappel",               email: "Edna.Krabappel@disney.com",               roles: ["ACP Planner"],                    status: "Active",   team: "Sales Planning",             title: "Director, Planning & Activation",      region: "NA",    lastLogin: "May 1, 2026, 3:30 PM"   },
  { id: "u023", avatar: "../avatars/photos/m17.png", name: "Groundskeeper Willie",         email: "Groundskeeper.Willie@disney.com",         roles: ["ACP Vendor Planner"],             status: "Active",   team: "Ad Operations",              title: "Lead, Campaign Trafficking",           region: "EMEA",  lastLogin: "Apr 20, 2026, 8:00 AM"   },
  { id: "u024", avatar: "../avatars/photos/m18.png", name: "Fat Tony",                     email: "Fat.Tony@disney.com",                     roles: ["Sales Agent User"],               status: "Active",   team: "Revenue & Yield Management", title: "SVP, Distribution Strategy",           region: "NA",    lastLogin: "Apr 16, 2026, 1:00 PM"   },
  { id: "u025", avatar: "../avatars/photos/m19.png", name: "Dr. Hibbert",                  email: "Julius.Hibbert@disney.com",               roles: ["Planning Agent User"],            status: "Active",   team: "Revenue & Yield Management", title: "Manager, Revenue Analytics",           region: "NA",    lastLogin: "Apr 29, 2026, 9:45 AM"   },
  { id: "u026", avatar: "../avatars/photos/m20.png", name: "Professor Frink",              email: "Professor.Frink@disney.com",              roles: ["ACP Planning Manager"],           status: "Active", team: "Addressable & Programmatic Sales", title: "Sr. Analyst, Programmatic Yield",      region: "NA",    lastLogin: "Apr 12, 2026, 2:15 PM"   },
  { id: "u027", avatar: "../avatars/photos/m21.png", name: "Barney Gumble",                email: "Barney.Gumble@disney.com",                roles: ["ACP Viewer"],                     status: "Inactive", team: "Ad Operations",              title: "Coordinator, Campaign Delivery",       region: "NA",    lastLogin: "Feb 28, 2026, 11:00 AM"  },
  { id: "u028", avatar: "../avatars/photos/m22.png", name: "Sideshow Bob",                 email: "Sideshow.Bob@disney.com",                 roles: ["ACP Planning Specialist"],        status: "Active",   team: "Agency & Holding Company Sales", title: "Director, Agency Development",         region: "EMEA",  lastLogin: "Apr 8, 2026, 4:45 PM"    },
  { id: "u029", avatar: "../avatars/photos/m23.png", name: "Kent Brockman",                email: "Kent.Brockman@disney.com",                roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "National Ad Sales",          title: "VP, Global Media Sales",               region: "NA",    lastLogin: "May 2, 2026, 6:30 PM"   },
  { id: "u030", avatar: "../avatars/photos/m24.png", name: "Otto Mann",                    email: "Otto.Mann@disney.com",                    roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "Revenue & Yield Management", title: "Associate, Accounts Receivable",       region: "LATAM", lastLogin: "Apr 5, 2026, 10:00 AM"   },

  /* ── Page 4 ── */
  { id: "u031", avatar: "../avatars/photos/m25.png", name: "Mayor Quimby",                 email: "Mayor.Quimby@disney.com",                 roles: ["ACP Planning Specialist"],        status: "Active",   team: "Sales Planning",             title: "SVP, Sales & Partnerships",            region: "NA",    lastLogin: "Apr 3, 2026, 11:30 AM"   },
  { id: "u032", avatar: "../avatars/photos/m26.png", name: "Hans Moleman",                 email: "Hans.Moleman@disney.com",                 roles: ["ACP Vendor Planner"],             status: "Active",   team: "National Ad Sales",          title: "Associate, Billing Support",           region: "NA",    lastLogin: "Apr 18, 2026, 8:15 AM"   },
  { id: "u033", avatar: "../avatars/photos/m27.png", name: "Gil Gunderson",                email: "Gil.Gunderson@disney.com",                roles: ["ACP Planner"],                    status: "Inactive", team: "National Ad Sales",          title: "Coordinator, New Business",            region: "NA",    lastLogin: "Jan 15, 2026, 3:00 PM"   },
  { id: "u034", avatar: "../avatars/photos/m28.png", name: "Rainier Wolfcastle",           email: "Rainier.Wolfcastle@disney.com",           roles: ["Planning Agent User"],            status: "Active", team: "Client & Brand Solutions",   title: "Director, Content Partnerships",       region: "EMEA",  lastLogin: "Apr 14, 2026, 9:00 AM"   },
  { id: "u035", avatar: "../avatars/photos/m29.png", name: "Troy McClure",                 email: "Troy.McClure@disney.com",                 roles: ["Sales Agent User"],               status: "Active",   team: "Sales Planning",             title: "Manager, Cross-Platform Planning",     region: "NA",    lastLogin: "Apr 10, 2026, 2:45 PM"   },
  { id: "u036", avatar: "../avatars/photos/m30.png", name: "Disco Stu",                    email: "Disco.Stu@disney.com",                    roles: ["ACP Viewer"],                     status: "Active",   team: "Ad Operations",              title: "Analyst, Creative Ad Solutions",       region: "LATAM", lastLogin: "Mar 28, 2026, 12:00 PM"  },
  { id: "u037", avatar: "../avatars/photos/m31.png", name: "Dr. Nick Riviera",             email: "Nick.Riviera@disney.com",                 roles: ["ACP Planning Manager"],           status: "Active",   team: "Revenue & Yield Management", title: "Analyst, Revenue Reconciliation",      region: "NA",    lastLogin: "Apr 22, 2026, 11:15 AM"  },
  { id: "u038", avatar: "../avatars/photos/m32.png", name: "Kirk Van Houten",              email: "Kirk.VanHouten@disney.com",               roles: ["ACP Vendor Planning Specialist"], status: "Inactive", team: "Sales Planning",             title: "Associate, Inventory Management",      region: "NA",    lastLogin: "Mar 5, 2026, 4:00 PM"    },
  { id: "u039", avatar: "../avatars/photos/f07.png", name: "Luann Van Houten",             email: "Luann.VanHouten@disney.com",              roles: ["ACP Planning Specialist"],        status: "Active",   team: "Agency & Holding Company Sales", title: "Manager, Client Relations",            region: "ANZ",   lastLogin: "Apr 25, 2026, 8:30 AM"   },
  { id: "u040", avatar: "../avatars/photos/f08.png", name: "Agnes Skinner",                email: "Agnes.Skinner@disney.com",                roles: ["ACP Planning Manager"],           status: "Active",   team: "National Ad Sales",          title: "Sr. Analyst, Financial Controls",      region: "NA",    lastLogin: "Apr 17, 2026, 1:30 PM"   },

  /* ── Page 5 ── */
  { id: "u041", avatar: "../avatars/photos/m43.png", name: "Snake Jailbird",               email: "Snake.Jailbird@disney.com",               roles: ["ACP Viewer"],                     status: "Active",   team: "Addressable & Programmatic Sales", title: "Coordinator, Programmatic Deals",      region: "NA",    lastLogin: "Apr 2, 2026, 9:15 AM"    },
  { id: "u042", avatar: "../avatars/photos/m44.png", name: "Jimbo Jones",                  email: "Jimbo.Jones@disney.com",                  roles: ["Sales Agent User"],               status: "Active",   team: "Addressable & Programmatic Sales", title: "Analyst, Ad Targeting",                region: "NA",    lastLogin: "Apr 30, 2026, 2:00 PM"   },
  { id: "u043", avatar: "../avatars/photos/m45.png", name: "Dolph Starbeam",               email: "Dolph.Starbeam@disney.com",               roles: ["Planning Agent User"],            status: "Inactive", team: "Ad Operations",              title: "Associate, Campaign Strategy",         region: "EMEA",  lastLogin: "Mar 20, 2026, 10:45 AM"  },
  { id: "u044", avatar: "../avatars/photos/f09.png", name: "Sherri Mackleberry",           email: "Sherri.Mackleberry@disney.com",           roles: ["ACP Planner"],                    status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Audience Strategy",       region: "NA",    lastLogin: "May 1, 2026, 8:45 AM"    },
  { id: "u045", avatar: "../avatars/photos/f10.png", name: "Terri Mackleberry",            email: "Terri.Mackleberry@disney.com",            roles: ["ACP Vendor Planner"],             status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Integrated Media",        region: "NA",    lastLogin: "Apr 28, 2026, 5:00 PM"   },
  { id: "u046", avatar: "../avatars/photos/m33.png", name: "Martin Prince",                email: "Martin.Prince@disney.com",                roles: ["ACP Planning Specialist"],        status: "Active",   team: "Sales Planning",             title: "Sr. Analyst, Data Governance",         region: "NA",    lastLogin: "Apr 24, 2026, 3:15 PM"   },
  { id: "u047", avatar: "../avatars/photos/m34.png", name: "Timothy Lovejoy",              email: "Timothy.Lovejoy@disney.com",              roles: ["ACP Vendor Planning Specialist"], status: "Active", team: "National Ad Sales",          title: "Director, Strategic Accounts",        region: "ANZ",   lastLogin: "Apr 19, 2026, 10:30 AM"  },
  { id: "u048", avatar: "../avatars/photos/m35.png", name: "Cletus Spuckler",              email: "Cletus.Spuckler@disney.com",              roles: ["ACP Planning Manager"],           status: "Active",   team: "National Ad Sales",          title: "Coordinator, Invoice Processing",      region: "NA",    lastLogin: "Apr 13, 2026, 12:00 PM"  },
  { id: "u049", avatar: "../avatars/photos/f11.png", name: "Cookie Kwan",                  email: "Cookie.Kwan@disney.com",                  roles: ["ACP Viewer"],                     status: "Active",   team: "National Ad Sales",          title: "Sr. Manager, Regional Sales",          region: "ANZ",   lastLogin: "May 2, 2026, 9:00 AM"    },
  { id: "u050", avatar: "../avatars/photos/f12.png", name: "Lindsey Naegle",               email: "Lindsey.Naegle@disney.com",               roles: ["ACP Viewer"],                     status: "Active",   team: "Revenue & Yield Management", title: "Director, Yield Strategy",             region: "NA",    lastLogin: "Apr 26, 2026, 4:30 PM"   },

  /* ── Page 6 ── */
  { id: "u051", avatar: "../avatars/photos/m36.png", name: "Lionel Hutz",                  email: "Lionel.Hutz@disney.com",                  roles: ["ACP Planning Manager"],           status: "Active",   team: "Client & Brand Solutions",   title: "Manager, Business Development",        region: "NA",    lastLogin: "Apr 11, 2026, 2:45 PM"   },
  { id: "u052", avatar: "../avatars/photos/f13.png", name: "Helen Lovejoy",                email: "Helen.Lovejoy@disney.com",                roles: ["Planning Agent User"],            status: "Active",   team: "Agency & Holding Company Sales", title: "Sr. Planner, Agency Investment",        region: "EMEA",  lastLogin: "Apr 22, 2026, 10:00 AM"  },
  { id: "u053", avatar: "../avatars/photos/m37.png", name: "Artie Ziff",                   email: "Artie.Ziff@disney.com",                   roles: ["Sales Agent User"],               status: "Active",   team: "Revenue & Yield Management", title: "VP, Digital Revenue",                  region: "NA",    lastLogin: "May 3, 2026, 11:00 AM"   },
  { id: "u054", avatar: "../avatars/photos/f14.png", name: "Ruth Powers",                  email: "Ruth.Powers@disney.com",                  roles: ["ACP Vendor Planner"],             status: "Active",   team: "Revenue & Yield Management", title: "Manager, Revenue Systems",             region: "NA",    lastLogin: "Apr 27, 2026, 3:30 PM"   },
  { id: "u055", avatar: "../avatars/photos/m38.png", name: "Herman Hermann",               email: "Herman.Hermann@disney.com",               roles: ["ACP Planner"],                    status: "Inactive", team: "Revenue & Yield Management", title: "Analyst, Cost Allocation",             region: "LATAM", lastLogin: "Feb 8, 2026, 9:15 AM"    },
  { id: "u056", avatar: "../avatars/photos/m39.png", name: "Wendell Borton",               email: "Wendell.Borton@disney.com",               roles: ["ACP Vendor Planning Specialist"], status: "Active",   team: "Ad Operations",              title: "Associate, Creative Operations",       region: "NA",    lastLogin: "Apr 23, 2026, 1:45 PM"   },
  { id: "u057", avatar: "../avatars/photos/m40.png", name: "Lyle Lanley",                  email: "Lyle.Lanley@disney.com",                  roles: ["ACP Planning Specialist"],        status: "Active",   team: "Addressable & Programmatic Sales", title: "Sr. Manager, Programmatic Sales",      region: "NA",    lastLogin: "May 1, 2026, 7:30 PM"    },
  { id: "u058", avatar: "../avatars/photos/m41.png", name: "Lewis Clark",                  email: "Lewis.Clark@disney.com",                  roles: ["ACP Viewer"],                     status: "Inactive", team: "Revenue & Yield Management", title: "Analyst, Inventory Forecasting",       region: "ANZ",   lastLogin: "Mar 14, 2026, 11:00 AM"  },
  { id: "u059", avatar: "../avatars/photos/m42.png", name: "Kearney Zzyzwicz",             email: "Kearney.Zzyzwicz@disney.com",             roles: ["ACP Planning Manager"],           status: "Active",   team: "Agency & Holding Company Sales", title: "Coordinator, Partner Relations",       region: "EMEA",  lastLogin: "Apr 16, 2026, 6:15 PM"   },
  { id: "u060", avatar: "../avatars/photos/f15.png", name: "Manjula Nahasapeemapetilon",   email: "Manjula.Nahasapeemapetilon@disney.com",   roles: ["Sales Agent User"],               status: "Active",   team: "Ad Operations",              title: "Lead, Operations Support",             region: "ANZ",   lastLogin: "Apr 29, 2026, 8:00 AM"   }
];

/* ═══ V4 product name — single canonical source ═══
   Every on-screen "Ad Console" reference in this build (nav brand,
   its accessible label, and prose that names the product elsewhere on
   the Add User page) is rendered from this ONE string instead of being
   repeated as a literal in each template/string, so a future rename is
   a one-line edit here rather than a find-and-replace across the file.
   Scoped to `window` (not a shared cross-version file like
   `../version-config.js`) because this is V4's OWN product name —
   v1/v2/v3 keep whatever product name they already show, unaffected.
   The static markup in index.html (`#navBrandText` / `#navBrandLink` /
   `#auIdEmptySub`) already hardcodes this same value as a no-JS
   fallback; `initProductNameText()` below overwrites it from this
   constant before first paint, since this <script> tag loads at the
   end of <body>, after that markup already exists in the DOM. */
window.IAM_PRODUCT_NAME = "Ad Console";
(function initProductNameText() {
  var link = document.getElementById("navBrandLink");
  var text = document.getElementById("navBrandText");
  var idEmptySub = document.getElementById("auIdEmptySub");
  if (text) text.textContent = window.IAM_PRODUCT_NAME;
  if (link) link.setAttribute("aria-label", window.IAM_PRODUCT_NAME + " home");
  if (idEmptySub) {
    idEmptySub.textContent = "Search the roster to choose the person you're adding to " + window.IAM_PRODUCT_NAME + ".";
  }
})();

var ORIGINAL_ORDER = DATA.slice();
var TOTAL_ITEMS = 610;

/* ─── User view toggle state ───
   userView: 'internal' (default) | 'external'
   Switching swaps DATA / ORIGINAL_ORDER / TOTAL_ITEMS so that all
   existing filter, sort, and pagination logic works without modification. */
var INTERNAL_ORIGINAL_SNAPSHOT = ORIGINAL_ORDER.slice();
var INTERNAL_TOTAL = TOTAL_ITEMS;

/* External (agency / brand partner) users — 60 representative records.
   Structure matches internal DATA except: no `avatar` (initials shown),
   no `team` (replaced by `organization` in the Company column).

   Frances QA 2026-06-08 cleanup pass:
   The approved-company allow-list collapsed to 12 names (7 agencies +
   5 brand advertisers). Previously seeded sub-agencies (Mindshare,
   Wavemaker, Hearts & Science, Starcom, Zenith, Carat, Dentsu, etc.)
   and brand advertisers outside the approved set (Coca-Cola, Nike,
   Apple, Toyota, etc.) are remapped to their holding company or to
   one of the approved Disney Ad Sales advertiser accounts so the
   external dataset stays realistic without inventing placeholder
   companies. User names, IDs, roles, status, region, and lastLogin
   are preserved 1:1; only `organization`, `email`, and a few obvious
   sport-/retail-specific titles are updated to fit the new account. */
var EXTERNAL_DATA_ARRAY = [
  /* ── Page 1 — Omnicom Media Group, OMD, PHD, WPP / GroupM ── */
  { id: "e001", name: "Rachel Morales",       email: "r.morales@omnicommedia.com",       roles: ["ACP Vendor Planner"],             status: "Active",   organization: "Omnicom Media Group", title: "VP, Media Partnerships",           region: "NA",    lastLogin: "Apr 30, 2026, 10:15 AM"  },
  { id: "e002", name: "Kevin Zhang",          email: "k.zhang@omnicommedia.com",         roles: ["ACP Planning Specialist"],        status: "Active",   organization: "Omnicom Media Group", title: "Group Director, Media",            region: "NA",    lastLogin: "May 2, 2026, 3:00 PM"    },
  { id: "e003", name: "Danielle Foster",      email: "d.foster@omd.com",                 roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "OMD",                 title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 28, 2026, 2:30 PM"   },
  { id: "e004", name: "James Okonkwo",        email: "j.okonkwo@omd.com",                roles: ["ACP Planning Manager"],           status: "Active",   organization: "OMD",                 title: "Director, Media Planning",         region: "EMEA",  lastLogin: "May 1, 2026, 9:45 AM"    },
  { id: "e005", name: "Leila Sharma",         email: "l.sharma@omd.com",                 roles: ["ACP Viewer"],                     status: "Active",   organization: "OMD",                 title: "Media Analyst",                    region: "NA",    lastLogin: "Apr 27, 2026, 11:00 AM"  },
  { id: "e006", name: "Thomas Erikson",       email: "t.erikson@phdmedia.com",           roles: ["Sales Agent User"],               status: "Active",   organization: "PHD",                 title: "Media Investment Lead",            region: "EMEA",  lastLogin: "Apr 24, 2026, 4:30 PM"   },
  { id: "e007", name: "Ana Gutierrez",        email: "a.gutierrez@phdmedia.com",         roles: ["Planning Agent User"],            status: "Active",   organization: "PHD",                 title: "Associate Media Director",         region: "LATAM", lastLogin: "May 3, 2026, 8:15 AM"    },
  { id: "e008", name: "Michelle Kim",         email: "m.kim@omnicommedia.com",           roles: ["ACP Planner"],                    status: "Active",   organization: "Omnicom Media Group", title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 1:30 PM"   },
  { id: "e009", name: "Brandon Wu",           email: "b.wu@omnicommedia.com",            roles: ["ACP Vendor Planner"],             status: "Active",   organization: "Omnicom Media Group", title: "Programmatic Operations Lead",     region: "NA",    lastLogin: "Apr 25, 2026, 3:45 PM"   },
  { id: "e010", name: "Sophie Laurent",       email: "s.laurent@groupm.com",             roles: ["ACP Vendor Planner"],             status: "Active",   organization: "WPP / GroupM",        title: "Director, Partner Engagement",     region: "EMEA",  lastLogin: "May 2, 2026, 10:00 AM"   },
  /* ── Page 2 — WPP / GroupM, Publicis Media ── */
  { id: "e011", name: "Patrick O'Brien",      email: "p.obrien@groupm.com",              roles: ["ACP Planner"],                    status: "Active",   organization: "WPP / GroupM",        title: "Media Finance Analyst",            region: "NA",    lastLogin: "Apr 22, 2026, 2:15 PM"   },
  { id: "e012", name: "Yuki Tanaka",          email: "y.tanaka@groupm.com",              roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "WPP / GroupM",        title: "Media Planner",                    region: "APAC",  lastLogin: "Apr 30, 2026, 9:00 AM"   },
  { id: "e013", name: "Nadia Hassan",         email: "n.hassan@groupm.com",              roles: ["ACP Planning Specialist"],        status: "Active",   organization: "WPP / GroupM",        title: "Head of Planning",                 region: "EMEA",  lastLogin: "May 1, 2026, 11:30 AM"   },
  { id: "e014", name: "Derek Williams",       email: "d.williams@groupm.com",            roles: ["ACP Viewer"],                     status: "Inactive", organization: "WPP / GroupM",        title: "Digital Activation Specialist",    region: "NA",    lastLogin: "Feb 20, 2026, 3:00 PM"   },
  { id: "e015", name: "Camille Rousseau",     email: "c.rousseau@groupm.com",            roles: ["ACP Planning Manager"],           status: "Active",   organization: "WPP / GroupM",        title: "Content Investment Planner",       region: "EMEA",  lastLogin: "Apr 26, 2026, 1:00 PM"   },
  { id: "e016", name: "Marcus Johnson",       email: "m.johnson@groupm.com",             roles: ["Planning Agent User"],            status: "Active",   organization: "WPP / GroupM",        title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"    },
  { id: "e017", name: "Pooja Patel",          email: "p.patel@groupm.com",               roles: ["Sales Agent User"],               status: "Active",   organization: "WPP / GroupM",        title: "Partner Solutions Director",       region: "NA",    lastLogin: "Apr 21, 2026, 4:00 PM"   },
  { id: "e018", name: "Ryan Nguyen",          email: "r.nguyen@groupm.com",              roles: ["ACP Vendor Planner"],             status: "Active",   organization: "WPP / GroupM",        title: "Programmatic Trader",              region: "NA",    lastLogin: "Apr 28, 2026, 10:30 AM"  },
  { id: "e019", name: "Isabella Torres",      email: "i.torres@publicismedia.com",       roles: ["ACP Planner"],                    status: "Active",   organization: "Publicis Media",      title: "Sr. Campaign Planner",             region: "LATAM", lastLogin: "Apr 18, 2026, 2:00 PM"   },
  { id: "e020", name: "Omar Shaikh",          email: "o.shaikh@publicismedia.com",       roles: ["ACP Planning Specialist"],        status: "Active",   organization: "Publicis Media",      title: "VP, Media Planning",               region: "NA",    lastLogin: "May 2, 2026, 9:15 AM"    },
  /* ── Page 3 — Publicis Media, IPG Mediabrands ── */
  { id: "e021", name: "Caroline Berg",        email: "c.berg@publicismedia.com",         roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "Publicis Media",      title: "Associate Media Director",         region: "EMEA",  lastLogin: "Apr 16, 2026, 11:45 AM"  },
  { id: "e022", name: "Andre Dupont",         email: "a.dupont@publicismedia.com",       roles: ["ACP Planner"],                    status: "Active",   organization: "Publicis Media",      title: "Media Investment Director",        region: "EMEA",  lastLogin: "Apr 29, 2026, 3:30 PM"   },
  { id: "e023", name: "Hiroshi Nakamura",     email: "h.nakamura@publicismedia.com",     roles: ["ACP Vendor Planner"],             status: "Active",   organization: "Publicis Media",      title: "Digital Planner",                  region: "APAC",  lastLogin: "Apr 14, 2026, 10:00 AM"  },
  { id: "e024", name: "Elena Petrov",         email: "e.petrov@publicismedia.com",       roles: ["Sales Agent User"],               status: "Active",   organization: "Publicis Media",      title: "Sr. Programmatic Planner",         region: "EMEA",  lastLogin: "May 1, 2026, 8:00 AM"    },
  { id: "e025", name: "Jasmine Reed",         email: "j.reed@publicismedia.com",         roles: ["Planning Agent User"],            status: "Active",   organization: "Publicis Media",      title: "Media Campaign Manager",           region: "NA",    lastLogin: "Apr 24, 2026, 2:45 PM"   },
  { id: "e026", name: "Trevor Blackwood",     email: "t.blackwood@publicismedia.com",    roles: ["ACP Planning Manager"],           status: "Inactive", organization: "Publicis Media",      title: "Media Planner",                    region: "NA",    lastLogin: "Jan 30, 2026, 11:00 AM"  },
  { id: "e027", name: "Amara Diallo",         email: "a.diallo@ipgmediabrands.com",      roles: ["ACP Viewer"],                     status: "Active",   organization: "IPG Mediabrands",     title: "Partner Activation Lead",          region: "NA",    lastLogin: "Apr 20, 2026, 4:15 PM"   },
  { id: "e028", name: "Steven Park",          email: "s.park@ipgmediabrands.com",        roles: ["ACP Planning Specialist"],        status: "Active",   organization: "IPG Mediabrands",     title: "Investment Analyst",               region: "NA",    lastLogin: "May 2, 2026, 1:30 PM"    },
  { id: "e029", name: "Fatima Al-Rashid",     email: "f.alrashid@ipgmediabrands.com",    roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "IPG Mediabrands",     title: "Global Media Planner",             region: "EMEA",  lastLogin: "Apr 17, 2026, 9:30 AM"   },
  { id: "e030", name: "Lucas Martins",        email: "l.martins@ipgmediabrands.com",     roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "IPG Mediabrands",     title: "Associate Media Planner",          region: "LATAM", lastLogin: "Apr 27, 2026, 2:00 PM"   },
  /* ── Page 4 — IPG Mediabrands, Horizon Media ── */
  { id: "e031", name: "Diana Hoffman",        email: "d.hoffman@ipgmediabrands.com",     roles: ["ACP Planning Specialist"],        status: "Active",   organization: "IPG Mediabrands",     title: "Director, Strategic Planning",     region: "NA",    lastLogin: "May 3, 2026, 10:00 AM"   },
  { id: "e032", name: "Kwame Asante",         email: "k.asante@ipgmediabrands.com",      roles: ["ACP Vendor Planner"],             status: "Active",   organization: "IPG Mediabrands",     title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 22, 2026, 3:15 PM"   },
  { id: "e033", name: "Mei-Ling Chen",        email: "m.chen@horizonmedia.com",          roles: ["ACP Planner"],                    status: "Active",   organization: "Horizon Media",       title: "Managing Director",                region: "APAC",  lastLogin: "Apr 15, 2026, 9:45 AM"   },
  { id: "e034", name: "Roberto Russo",        email: "r.russo@horizonmedia.com",         roles: ["Planning Agent User"],            status: "Active",   organization: "Horizon Media",       title: "Media Activation Manager",         region: "EMEA",  lastLogin: "Apr 30, 2026, 11:30 AM"  },
  { id: "e035", name: "Zoe Mitchell",         email: "z.mitchell@horizonmedia.com",      roles: ["Sales Agent User"],               status: "Active",   organization: "Horizon Media",       title: "Digital Campaign Planner",         region: "NA",    lastLogin: "Apr 28, 2026, 2:00 PM"   },
  { id: "e036", name: "Aleksei Volkov",       email: "a.volkov@horizonmedia.com",        roles: ["ACP Viewer"],                     status: "Active",   organization: "Horizon Media",       title: "Media Planner",                    region: "EMEA",  lastLogin: "May 1, 2026, 10:15 AM"   },
  { id: "e037", name: "Tanya Iyer",           email: "t.iyer@horizonmedia.com",          roles: ["ACP Planning Manager"],           status: "Active",   organization: "Horizon Media",       title: "Biddable Media Specialist",        region: "NA",    lastLogin: "Apr 19, 2026, 4:30 PM"   },
  { id: "e038", name: "Christopher Lam",      email: "c.lam@horizonmedia.com",           roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "Horizon Media",       title: "Performance Media Manager",        region: "APAC",  lastLogin: "Apr 25, 2026, 8:45 AM"   },
  { id: "e039", name: "Samira Khalil",        email: "s.khalil@horizonmedia.com",        roles: ["ACP Planning Specialist"],        status: "Active",   organization: "Horizon Media",       title: "Media Campaign Lead",              region: "EMEA",  lastLogin: "May 2, 2026, 3:45 PM"    },
  { id: "e040", name: "Ben Nakajima",         email: "b.nakajima@horizonmedia.com",      roles: ["ACP Planning Manager"],           status: "Active",   organization: "Horizon Media",       title: "Media Analytics Lead",             region: "APAC",  lastLogin: "Apr 13, 2026, 12:00 PM"  },
  /* ── Page 5 — Horizon Media, American Express, Mercedes-Benz ── */
  { id: "e041", name: "Veronica Cruz",        email: "v.cruz@horizonmedia.com",          roles: ["ACP Viewer"],                     status: "Active",   organization: "Horizon Media",       title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 10:30 AM"  },
  { id: "e042", name: "Daniel Schwartz",      email: "d.schwartz@horizonmedia.com",      roles: ["Sales Agent User"],               status: "Active",   organization: "Horizon Media",       title: "VP, Investment",                   region: "NA",    lastLogin: "May 3, 2026, 9:00 AM"    },
  { id: "e043", name: "Naomi Clarke",         email: "n.clarke@horizonmedia.com",        roles: ["Planning Agent User"],            status: "Active",   organization: "Horizon Media",       title: "Partner Development Director",     region: "NA",    lastLogin: "Apr 23, 2026, 1:15 PM"   },
  { id: "e044", name: "Felix Andersson",      email: "f.andersson@horizonmedia.com",     roles: ["ACP Planner"],                    status: "Active",   organization: "Horizon Media",       title: "Media Strategy Manager",           region: "EMEA",  lastLogin: "Apr 26, 2026, 4:00 PM"   },
  { id: "e045", name: "Jade Thompson",        email: "j.thompson@horizonmedia.com",      roles: ["ACP Vendor Planner"],             status: "Active",   organization: "Horizon Media",       title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 1, 2026, 2:30 PM"    },
  { id: "e046", name: "Ravi Mehta",           email: "r.mehta@horizonmedia.com",         roles: ["ACP Planning Specialist"],        status: "Active",   organization: "Horizon Media",       title: "Programmatic Lead",                region: "NA",    lastLogin: "Apr 21, 2026, 11:00 AM"  },
  { id: "e047", name: "Christine Wu",         email: "c.wu@aexp.com",                    roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "American Express",    title: "Brand Partnerships Manager",       region: "NA",    lastLogin: "Apr 28, 2026, 9:30 AM"   },
  { id: "e048", name: "Michael Torres",       email: "m.torres@aexp.com",                roles: ["ACP Planning Manager"],           status: "Active",   organization: "American Express",    title: "Advertising Campaign Manager",     region: "NA",    lastLogin: "May 2, 2026, 4:15 PM"    },
  { id: "e049", name: "Ashley Brennan",       email: "a.brennan@aexp.com",               roles: ["ACP Viewer"],                     status: "Active",   organization: "American Express",    title: "Brand Media Planner",              region: "NA",    lastLogin: "Apr 24, 2026, 10:45 AM"  },
  { id: "e050", name: "Sophia Adebayo",       email: "s.adebayo@mbusa.com",              roles: ["ACP Viewer"],                     status: "Active",   organization: "Mercedes-Benz",       title: "Global Media Manager",             region: "NA",    lastLogin: "Apr 30, 2026, 3:00 PM"   },
  /* ── Page 6 — Mercedes-Benz, Progressive, Honda, Lexus ── */
  { id: "e051", name: "Gregory Faulkner",     email: "g.faulkner@mbusa.com",             roles: ["ACP Planning Manager"],           status: "Active",   organization: "Mercedes-Benz",       title: "Media Analytics Director",         region: "NA",    lastLogin: "Apr 17, 2026, 2:15 PM"   },
  { id: "e052", name: "Natalia Romero",       email: "n.romero@mbusa.com",               roles: ["Planning Agent User"],            status: "Active",   organization: "Mercedes-Benz",       title: "Sr. Media Manager",                region: "NA",    lastLogin: "May 3, 2026, 11:30 AM"   },
  { id: "e053", name: "William Chen",         email: "w.chen@progressive.com",           roles: ["Sales Agent User"],               status: "Active",   organization: "Progressive",         title: "Media Investment Lead",            region: "NA",    lastLogin: "Apr 25, 2026, 9:00 AM"   },
  { id: "e054", name: "Amelia Grant",         email: "a.grant@progressive.com",          roles: ["ACP Vendor Planner"],             status: "Active",   organization: "Progressive",         title: "Sr. Brand Media Planner",          region: "NA",    lastLogin: "Apr 29, 2026, 1:45 PM"   },
  { id: "e055", name: "Jordan Rivera",        email: "j.rivera@progressive.com",         roles: ["ACP Planner"],                    status: "Active",   organization: "Progressive",         title: "Global Media Manager",             region: "NA",    lastLogin: "Apr 22, 2026, 4:00 PM"   },
  { id: "e056", name: "Takeshi Yamamoto",     email: "t.yamamoto@honda.com",             roles: ["ACP Vendor Planning Specialist"], status: "Active",   organization: "Honda",               title: "Media Planning Specialist",        region: "APAC",  lastLogin: "Apr 15, 2026, 10:30 AM"  },
  { id: "e057", name: "Catherine O'Sullivan", email: "c.osullivan@honda.com",            roles: ["ACP Planning Specialist"],        status: "Active",   organization: "Honda",               title: "National Media Planner",           region: "NA",    lastLogin: "May 2, 2026, 8:30 AM"    },
  { id: "e058", name: "Brandon Nguyen",       email: "b.nguyen@honda.com",               roles: ["ACP Viewer"],                     status: "Active",   organization: "Honda",               title: "Digital Activation Manager",       region: "NA",    lastLogin: "Apr 27, 2026, 2:45 PM"   },
  { id: "e059", name: "Ji-Young Park",        email: "j.park@lexus.com",                 roles: ["ACP Planning Manager"],           status: "Active",   organization: "Lexus",               title: "Sr. Campaign Strategist",          region: "APAC",  lastLogin: "Apr 20, 2026, 11:15 AM"  },
  { id: "e060", name: "Rachel Huang",         email: "r.huang@lexus.com",                roles: ["Sales Agent User"],               status: "Inactive", organization: "Lexus",               title: "Partner Channel Manager",          region: "NA",    lastLogin: "Feb 11, 2026, 3:30 PM"   }
];
var EXTERNAL_TOTAL = 60;

/* ═══ Add User modal — employee/candidate roster ═══════════════════
   Standalone candidate pool searched by the two-step "Add User" modal
   (Figma 1023:22290 / 1023:22735). Kept separate from DATA /
   EXTERNAL_DATA_ARRAY (the existing Users List) because every person
   already in DATA/EXTERNAL_DATA_ARRAY already has an active IAM user
   record — searching that array alone could never produce a "new,
   addable" result, only ever "already has access." The modal's actual
   search pool COMBINES this roster (new-to-IAM candidates) with the
   live DATA + EXTERNAL_DATA_ARRAY records — see
   auGetAddUserSearchPool() below — so an admin can also search real
   existing users and correctly get an "already has access" result for
   any of them (duplicate-prevention must use real data, not a
   fabricated status).
   Per prompt: "existing Simpsons-character users may be used as
   searchable records" + "generate a deterministic email for any
   missing prototype email." Records below intentionally omit `email`
   where the deterministic fallback should be demonstrated;
   auFillMissingRosterEmails() (right below) fills those in ONCE, at
   load time — never regenerated on a later render, never overwriting
   a value that's already set. A few records are intentionally
   ineligible (`eligible: false`) to exercise the required
   Inactive-employee / missing-required-data states; everything else
   is a normal, addable candidate. */
/* Avatars below are reused from the project's existing
   `avatars/photos/` set (same 35 male / 15 female business-portrait
   headshots already shared across all 610 existing IAM users) rather
   than generated at runtime — this guarantees identical dimensions,
   crop, lighting and realism with zero new assets, and keeps
   generation off the render path per the avatar-consistency
   requirement. Only assigned for candidates whose gender presentation
   is established by their canon Simpsons identity (Abraham/Herb/Mona/
   Frank/Jasper); every other roster candidate here has a
   prototype-invented, unfamiliar name and intentionally has no
   `avatar` field, so `renderAvatarHtml` falls back to the neutral
   initials-on-circle treatment instead of guessing gender from a
   name. */
var ROSTER_DATA = [
  { id: "r001", name: "Abraham Simpson",                     team: "National Ad Sales",                region: "NA",    timezone: "America/New_York",    employeeId: "163204", department: "Retiree Services",   userType: "Full-time",  status: "Active",   eligible: true, avatar: "../avatars/photos/m19.png" },
  { id: "r002", name: "Herb Powell",                          team: "Client & Brand Solutions",         region: "NA",    timezone: "America/Chicago",     employeeId: "163987", department: "Brand Partnerships", userType: "Full-time",  status: "Active",   eligible: true, avatar: "../avatars/photos/m08.png" },
  { id: "r003", name: "Mona Simpson",                         team: "Sales Planning",                    region: "EMEA",  timezone: "Europe/London",       employeeId: "164559", department: "Media Strategy",     userType: "Contractor", status: "Active",   eligible: true, avatar: "../avatars/photos/f04.png" },
  { id: "r004", name: "Frank Grimes",                         team: "Ad Operations",                     region: "NA",    timezone: "America/Denver",      employeeId: "164802", department: "Ad Operations",      userType: "Full-time",  status: "Active",   eligible: true, avatar: "../avatars/photos/m02.png" },
  { id: "r005", name: "Priya Nair",                           team: "Revenue & Yield Management",        region: "ANZ",   timezone: "Australia/Sydney",    employeeId: "165210", department: "Revenue Strategy",   userType: "Full-time",  status: "Active",   eligible: true, email: "p.nair@disney.com" },
  { id: "r006", name: "Jasper Beardsley",                     team: "National Ad Sales",                 region: "NA",    timezone: "America/Los_Angeles", employeeId: "165502", department: "Sales Support",      userType: "Full-time",  status: "Active",   eligible: true, avatar: "../avatars/photos/m16.png" },
  { id: "r007", name: "Owen Whitfield",                       team: "Client & Brand Solutions",         region: "NA",    status: "Active",   eligible: true, email: "owen.whitfield@disney.com" },
  { id: "r008", name: "Alexandra Featherington-Montgomery",   team: "Sales Planning",                    region: "EMEA",  timezone: "Europe/Madrid",       employeeId: "166011", department: "Client Solutions",   userType: "Full-time",  status: "Active",   eligible: true },
  { id: "r009", name: "Nathaniel Okonkwo-Whitmore",           team: "Revenue & Yield Management",        region: "NA",    timezone: "America/Chicago",     employeeId: "166345", department: "Finance",            userType: "Full-time",  status: "Inactive", eligible: false, ineligibleReason: "Inactive employee" },
  { id: "r010", name: "Diego Alvarado",                       team: "Addressable & Programmatic Sales",  region: "LATAM", timezone: "America/Sao_Paulo",   employeeId: "166590", department: "Programmatic Sales", userType: "Full-time",  status: "Active",   eligible: true },
  { id: "r011", name: "Ren\u00e9e Lef\u00e8vre",              team: "Client & Brand Solutions",         region: "EMEA",  timezone: "Europe/Paris",        employeeId: "167022", department: "Brand Partnerships", userType: "Full-time",  status: "Active",   eligible: true },
  { id: "r012", name: "D'Angelo Reyes",                       team: "Sales Planning",                    region: "NA",    timezone: "America/Toronto",     employeeId: "167288", department: "Media Strategy",     userType: "Full-time",  status: "Active",   eligible: true },
  { id: "r013", name: "Jordan Ellery",                        team: "",                                  region: "NA",    status: "Active",   eligible: false, ineligibleReason: "Missing required roster data", email: "jordan.ellery@disney.com" }
];

/* Deterministic prototype email fallback — the ONE reusable helper
   every "missing email" case goes through. firstname.lastname@disney.com,
   lowercased + trimmed, accents stripped, apostrophes/unsupported
   punctuation removed, multi-part last names joined without internal
   spaces (e.g. "Milhouse Van Houten" → "milhouse.vanhouten@disney.com",
   matching the prompt's own worked example). Pure function: never
   mutates the record it was called for, never invents a new value on
   a later call for the same name+usedEmails pair, and de-dupes via
   `usedEmails` instead of ever emitting a collision. */
function generateDeterministicDisneyEmail(fullName, usedEmails) {
  var raw = String(fullName || "").trim();
  if (!raw) return "";
  var normalized = raw
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // strip accents
    .replace(/['\u2019`]/g, "")                          // strip apostrophes
    .replace(/[^A-Za-z\s-]/g, "")                        // strip other punctuation
    .toLowerCase()
    .trim();
  var parts = normalized.split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  var first = parts[0];
  var last = parts.slice(1).join("");
  var local = last ? (first + "." + last) : first;
  var email = local + "@disney.com";
  var n = 2;
  while (usedEmails && usedEmails[email]) {
    email = local + n + "@disney.com";
    n++;
  }
  if (usedEmails) usedEmails[email] = true;
  return email;
}

/* Runs once at load. Never re-runs on render, never touches a record
   that already carries an approved email. */
(function auFillMissingRosterEmails() {
  var used = {};
  var i;
  for (i = 0; i < DATA.length; i++) { if (DATA[i].email) used[DATA[i].email.toLowerCase()] = true; }
  for (i = 0; i < EXTERNAL_DATA_ARRAY.length; i++) { if (EXTERNAL_DATA_ARRAY[i].email) used[EXTERNAL_DATA_ARRAY[i].email.toLowerCase()] = true; }
  for (i = 0; i < ROSTER_DATA.length; i++) { if (ROSTER_DATA[i].email) used[ROSTER_DATA[i].email.toLowerCase()] = true; }
  for (i = 0; i < ROSTER_DATA.length; i++) {
    var rec = ROSTER_DATA[i];
    if (rec.email) continue;
    rec.email = generateDeterministicDisneyEmail(rec.name, used);
  }
})();

/* Combined search pool for the Add User modal: every existing IAM
   user (internal + external — always `alreadyInIam: true`, since by
   definition they already have a user record) plus every new-to-IAM
   roster candidate (`alreadyInIam: false`, though still possibly
   ineligible for another real reason such as Inactive employment).
   Rebuilt fresh on every open/search so it always reflects the live
   DATA array (e.g. a user added earlier this session). Does not
   mutate DATA/EXTERNAL_DATA_ARRAY/ROSTER_DATA — every entry here is a
   new plain object. */
function auGetAddUserSearchPool() {
  var pool = [];
  var i, u;
  var internalSource = (Array.isArray(INTERNAL_ORIGINAL_SNAPSHOT) && INTERNAL_ORIGINAL_SNAPSHOT.length) ? INTERNAL_ORIGINAL_SNAPSHOT : DATA;
  for (i = 0; i < internalSource.length; i++) {
    u = internalSource[i];
    pool.push({
      poolId: "iam:" + u.id, name: u.name, email: u.email || "", team: u.team || "",
      region: u.region || "", status: u.status || "", avatar: u.avatar || "",
      employeeId: null, timezone: null, department: null, userType: null,
      alreadyInIam: true, existingUserId: u.id, eligible: true, ineligibleReason: ""
    });
  }
  for (i = 0; i < EXTERNAL_DATA_ARRAY.length; i++) {
    u = EXTERNAL_DATA_ARRAY[i];
    pool.push({
      poolId: "iam:" + u.id, name: u.name, email: u.email || "", team: u.organization || "",
      region: u.region || "", status: u.status || "", avatar: u.avatar || "",
      employeeId: null, timezone: null, department: null, userType: null,
      alreadyInIam: true, existingUserId: u.id, eligible: true, ineligibleReason: ""
    });
  }
  for (i = 0; i < ROSTER_DATA.length; i++) {
    u = ROSTER_DATA[i];
    pool.push({
      poolId: "roster:" + u.id, name: u.name, email: u.email || "", team: u.team || "",
      region: u.region || "", status: u.status || "", avatar: u.avatar || "",
      employeeId: u.employeeId || null, timezone: u.timezone || null,
      department: u.department || null, userType: u.userType || null,
      alreadyInIam: false, existingUserId: null,
      eligible: u.eligible !== false, ineligibleReason: u.ineligibleReason || ""
    });
  }
  return pool;
}

/* Search + relevance ranking, per spec order: exact email, exact
   name, name starts-with, email starts-with, team starts-with, name
   contains, email contains, team contains. Stable alphabetical
   tiebreak by name. Pure — never mutates `pool`, never touches the
   DOM, uses only String#indexOf (no RegExp built from user input).

   `limit` caps how many of the ranked matches come back in `results`
   (`total` always reports the full match count, which is what drives
   the "Showing 10 of 34" note). It defaults to the Add User dropdown's
   10; Add members passes its own so the two pickers can size their
   lists differently without forking the ranking. */
function auSearchAddUserCandidates(query, pool, limit) {
  var cap = typeof limit === "number" && limit > 0 ? limit : 10;
  var q = String(query || "").trim().toLowerCase();
  if (!q) return { total: 0, results: [] };
  var scored = [];
  for (var i = 0; i < pool.length; i++) {
    var u = pool[i];
    var name = (u.name || "").toLowerCase();
    var email = (u.email || "").toLowerCase();
    var team = (u.team || "").toLowerCase();
    var rank = -1;
    if (email && email === q) rank = 0;
    else if (name === q) rank = 1;
    else if (name.indexOf(q) === 0) rank = 2;
    else if (email && email.indexOf(q) === 0) rank = 3;
    else if (team && team.indexOf(q) === 0) rank = 4;
    else if (name.indexOf(q) !== -1) rank = 5;
    else if (email && email.indexOf(q) !== -1) rank = 6;
    else if (team && team.indexOf(q) !== -1) rank = 7;
    if (rank === -1) continue;
    scored.push({ user: u, rank: rank });
  }
  scored.sort(function (a, b) {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return (a.user.name || "").localeCompare(b.user.name || "");
  });
  var all = scored.map(function (s) { return s.user; });
  return { total: all.length, results: all.slice(0, cap) };
}

/* Search sequencing shared by the Add User and Add members pickers.
   Both need the same four things around the ranking above: normalise
   the raw input, refuse to search until it is long enough, debounce so
   a fast typist doesn't run a search per keystroke, and stamp each run
   with a token so a result that lands after the query already moved on
   can never overwrite the newer one.

   The pickers differ only in their thresholds — Add User searches from
   the first character and Add members from the second — which is why
   those are options rather than a second copy of this logic. */
function createSearchSequencer(options) {
  var opts = options || {};
  var debounceMs = typeof opts.debounceMs === "number" ? opts.debounceMs : 160;
  var minChars = typeof opts.minChars === "number" ? opts.minChars : 1;
  var timer = null;
  var token = 0;

  function cancel() {
    if (timer) { clearTimeout(timer); timer = null; }
    /* Bumping the token is what retires any run already in flight: its
       callback compares against this and returns without touching the
       UI. */
    token++;
  }

  return {
    minChars: minChars,
    debounceMs: debounceMs,
    normalize: function (raw) { return String(raw == null ? "" : raw).trim(); },
    cancel: cancel,
    /* handlers: { onBelowThreshold(q), onLoading(q), onSettled(q) } */
    run: function (raw, handlers) {
      cancel();
      var q = String(raw == null ? "" : raw).trim();
      if (q.length < minChars) {
        handlers.onBelowThreshold(q);
        return;
      }
      var mine = token;
      handlers.onLoading(q);
      timer = setTimeout(function () {
        if (mine !== token) return; /* stale — a newer query already ran */
        timer = null;
        handlers.onSettled(q);
      }, debounceMs);
    }
  };
}

/* ═══════════════════════════════════════════════════════════════════
   Shared ADS sortable-header component (Figma 1003:17846)
   ───────────────────────────────────────────────────────────────────
   One icon, one set of a11y wiring, reused by every sortable table
   (User List `th[data-sort]`, Roles List `th[data-rp-sort]`). Each
   table keeps owning its own sort key / direction / column
   definitions / actual data sort (applySort/applyRPSort below) —
   this block only owns the header's label+icon layout, icon
   markup, states, and keyboard/ARIA semantics so no table has to
   duplicate that plumbing or ship its own icon asset.

   Icon = the two-directional "arrow-down & arrow-up" glyph (ADS
   Feather/Arrows/Arrow-Down&Up, 12×12, Figma node 770:21565) — NOT a
   unicode glyph. Default/unsorted fill is the exact Figma value
   `--gray-30` (#B8C7D0); the active direction's arrow switches to
   `--text-primary` for contrast. See styles.css for the paired
   `.sort-ico`/`.sort-dn`/`.sort-up` rules. */
var SORT_ICON_SVG =
  '<svg width="12" height="12" viewBox="0 0 9.25 8.25" fill="none" aria-hidden="true" focusable="false">' +
  '<path class="sort-dn" d="M2.125 0C2.47 0 2.75.28 2.75.625V6.116l.433-.433a.625.625 0 0 1 .884.884l-1.5 1.5a.625.625 0 0 1-.884 0l-1.5-1.5a.625.625 0 0 1 .884-.884L1.5 6.116V.625C1.5.28 1.78 0 2.125 0Z"/>' +
  '<path class="sort-up" d="M7.125 0c.166 0 .325.066.442.183l1.5 1.5a.625.625 0 0 1-.884.884L7.75 2.134V7.625a.625.625 0 0 1-1.25 0V2.134l-.433.433a.625.625 0 0 1-.884-.884l1.5-1.5A.625.625 0 0 1 7.125 0Z"/>' +
  '</svg>';

/** Accessible action label for a sortable header, matching the
 * existing cycle (unsorted → ascending → descending → unsorted). */
function sortHeaderA11yLabel(label, isActive, dir) {
  if (!isActive) return "Sort by " + label + " ascending";
  if (dir === "asc") return "Sort by " + label + " descending";
  return "Remove " + label + " sorting";
}

/** Fills every sortable `<th>`'s icon slot with the shared SVG once,
 * and normalizes tabindex/aria-sort/scope so every table's sortable
 * header is keyboard-reachable and screen-reader-consistent — even
 * if a given table's markup only declares `data-sort`/`data-rp-sort`
 * and a label. Safe to call multiple times (idempotent). */
function initSortableHeaders() {
  var ths = document.querySelectorAll("th[data-sort], th[data-rp-sort], th[data-tm-sort]");
  for (var i = 0; i < ths.length; i++) {
    var th = ths[i];
    var slot = th.querySelector(".sort-ico");
    if (slot && !slot.innerHTML) slot.innerHTML = SORT_ICON_SVG;
    if (!th.hasAttribute("tabindex")) th.setAttribute("tabindex", "0");
    if (!th.hasAttribute("aria-sort")) th.setAttribute("aria-sort", "none");
    if (!th.hasAttribute("scope")) th.setAttribute("scope", "col");
    var labelEl = th.querySelector(".th-inner > span:first-child");
    if (labelEl && !th.hasAttribute("aria-label")) {
      th.setAttribute("aria-label", sortHeaderA11yLabel(labelEl.textContent.trim(), false, null));
    }
  }
}

var userView = "internal";
/* Session-added users (Add User flow) — same image for every new row until page refresh. */
var DEFAULT_ADD_USER_AVATAR = "../avatars/default-add-user.png";
var currentPage = 1;
var pageSize = 10;
var sortKey = null;
var sortDir = null; // null | "asc" | "desc"

/* EDL `.cr-dd` menus: fixed under trigger (out of flow) so opening never shifts layout;
   visually attached like `.search-dropdown` (seam, width match). */
function getCrDdMenuForHost(dd) {
  if (!dd) return null;
  var trg = dd.querySelector(".cr-dd-trigger");
  if (!trg) return null;
  var cid = trg.getAttribute("aria-controls");
  if (cid) return document.getElementById(cid);
  return dd.querySelector(".cr-dd-menu");
}

function positionCrDdLayeredMenu(dd) {
  if (!dd || !dd.classList.contains("open")) return;
  var trg = dd.querySelector(".cr-dd-trigger");
  var menu = getCrDdMenuForHost(dd);
  if (!trg || !menu || !menu.classList.contains("is-layered")) return;
  var r = trg.getBoundingClientRect();
  var w = Math.round(r.width);
  menu.style.left = Math.round(r.left) + "px";
  menu.style.top = Math.round(r.bottom - 1) + "px";
  menu.style.width = w + "px";
  menu.style.minWidth = w + "px";
  menu.style.zIndex = "10000";
}

function attachCrDdLayeredMenu(dd) {
  var trg = dd && dd.querySelector(".cr-dd-trigger");
  var menu = getCrDdMenuForHost(dd);
  if (!dd || !trg || !menu) return;
  menu.classList.add("is-layered");
  if (menu.parentNode !== document.body) {
    document.body.appendChild(menu);
  }
  positionCrDdLayeredMenu(dd);
}

function detachCrDdLayeredMenu(dd) {
  if (!dd) return;
  var menu = getCrDdMenuForHost(dd);
  if (!menu || !menu.classList.contains("is-layered")) return;
  menu.classList.remove("is-layered");
  menu.style.left = "";
  menu.style.top = "";
  menu.style.width = "";
  menu.style.minWidth = "";
  menu.style.zIndex = "";
  if (menu.parentNode === document.body) {
    dd.appendChild(menu);
  }
}

function repositionOpenCrDdMenus() {
  var open = document.querySelectorAll(".cr-dd.open");
  for (var i = 0; i < open.length; i++) {
    positionCrDdLayeredMenu(open[i]);
  }
}

(function wireCrDdMenuLayerListeners() {
  if (window._crDdLayerListeners) return;
  window._crDdLayerListeners = true;
  window.addEventListener("scroll", repositionOpenCrDdMenus, true);
  window.addEventListener("resize", repositionOpenCrDdMenus);
})();
var searchTerm = "";
var filters = { name: "", email: "", role: "", status: "", team: "", title: "", region: "" };

/* Users-list row selection (Figma 770:17428). Keyed by the stable
   user `id` — never row index — as a plain map (`id -> true`), matching
   this file's existing ES5 object-map style (see e.g. `existing` maps
   elsewhere). Selection persists across sort/search/filter/pagination
   (all of those only change *which* ids are eligible, not the map
   itself); it is only cleared/pruned on a genuine dataset change
   (Internal/External view switch, or a user being removed) — see
   switchUserView() and confirmRemoveEditedUser(). */
var selectedUserIds = {};
var filterSnapshot = null;

/* ═══ PROTOTYPE-ONLY: Select Users → Export to Excel simulation ═══════
   Everything under this banner (through closeSimPrototype/openSim*
   below) is a visual-only demo simulation. It never touches the real
   file system, never downloads a file, and never launches real Excel —
   see exportSelectedUsers() further down for the full explanation.
   State model (mirrors the shape asked for in the spec):
     exportStatus      "idle" | "preparing" | "complete"
     exportSnapshotIds  ordered array of user ids captured at the
                        moment Export was clicked — frozen for the
                        lifetime of one export cycle. Row VALUES are
                        still resolved live from DATA/ORIGINAL_ORDER at
                        render time (see resolveExportSnapshotUsers()),
                        so editing a user elsewhere and re-opening this
                        same snapshot would reflect the change — only
                        the *set* of exported ids is frozen, per "one
                        shared data source" + "do not recalculate the
                        exported rows from a later changed SELECTION".
     prototypeScreen   "userList" | "desktop" | "excel" */
var exportStatus = "idle";
var exportSnapshotIds = [];
var exportSnapshotIsExternal = false;
var prototypeScreen = "userList";
var simDesktopAutoOpenTimer = null;
var simReturnFocusEl = null;
var SEARCH_FIELDS = ["name", "email", "status", "team", "organization", "title", "region"];
/* R&P search fields — mirrors SEARCH_FIELDS above so the two tabs share
   the same case-insensitive substring-match model. `functions` is an
   array of {name, count} and is handled separately in getRPFilteredData
   (parallel to how `roles` is handled for the Users tab). */
var RP_SEARCH_FIELDS = ["role", "status", "createdBy", "createDate"];
var activeTab = "users";

/* ═══ ROLES & PERMISSIONS DATA ═══
   Source of truth: "New OMS - Roles & Permissions.xlsx" (Tatiana),
   worksheets "Core Planning", "v2. Agent" and "Agents".

   The workbook defines the applications, resources, function codes and
   role-to-permission grants below. Everything the product shows about a
   role — the Roles table, the Functions popover, the Create/Edit Role
   matrix, the Permission Management catalog, a user's effective access
   — is derived from these two tables, so there is one place to change a
   grant and no surface can drift from another.

   Reconciliation and assignment history: ROLE-PERMISSION-WORKBOOK.md. */

/* ═══ CANONICAL PERMISSION DEFINITIONS ═══
   One row per function code in the workbook, in worksheet order, with
   the application / resource / action relationship the workbook draws
   preserved rather than flattened into an access label. `sheet` and
   `row` are the workbook coordinates the row was read from, so any
   value here can be traced back to a cell.

   Twenty of these codes carry no grant in any role. They are defined
   by the workbook, so they are registered — a defined-but-ungranted
   permission is exactly what a blank matrix cell means. */
var PERMISSION_DEFINITIONS = [
  { code: "acp_order_read", application: "Core Planning", resource: "Order", action: "read", sheet: "Core Planning", row: 3 },
  { code: "acp_order_create", application: "Core Planning", resource: "Order", action: "create", sheet: "Core Planning", row: 4 },
  { code: "acp_order_update", application: "Core Planning", resource: "Order", action: "update", sheet: "Core Planning", row: 5 },
  { code: "acp_order_delete", application: "Core Planning", resource: "Order", action: "delete", sheet: "Core Planning", row: 6 },
  { code: "acp_order_approve", application: "Core Planning", resource: "Order", action: "approve", sheet: "Core Planning", row: 7 },
  { code: "acp_plan_read", application: "Core Planning", resource: "Media Plan", action: "read", sheet: "Core Planning", row: 8 },
  { code: "acp_plan_create", application: "Core Planning", resource: "Media Plan", action: "create", sheet: "Core Planning", row: 9 },
  { code: "acp_plan_update", application: "Core Planning", resource: "Media Plan", action: "update", sheet: "Core Planning", row: 10 },
  { code: "acp_plan_delete", application: "Core Planning", resource: "Media Plan", action: "delete", sheet: "Core Planning", row: 11 },
  { code: "acp_lineitem_read", application: "Core Planning", resource: "Line Item", action: "read", sheet: "Core Planning", row: 12, note: "Creatives" },
  { code: "acp_lineitem_create", application: "Core Planning", resource: "Line Item", action: "create", sheet: "Core Planning", row: 13 },
  { code: "acp_lineitem_update", application: "Core Planning", resource: "Line Item", action: "update", sheet: "Core Planning", row: 14 },
  { code: "acp_lineitem_delete", application: "Core Planning", resource: "Line Item", action: "delete", sheet: "Core Planning", row: 15 },
  { code: "acp_sensitive_read", application: "Core Planning", resource: "(all)", action: "read", sheet: "Core Planning", row: 16, note: "CPM - read-only for Planners" },
  { code: "acp_sensitive_update", application: "Core Planning", resource: "(all)", action: "update", sheet: "Core Planning", row: 17 },
  { code: "acp_regional_read", application: "Core Planning", resource: "(all)", action: "read", sheet: "Core Planning", row: 18 },
  { code: "acp_regional_update", application: "Core Planning", resource: "(all)", action: "update", sheet: "Core Planning", row: 19 },
  { code: "icm_offering_read", application: "ICM", resource: "Offering", action: "read", sheet: "Core Planning", row: 20 },
  { code: "icm_offering_create", application: "ICM", resource: "Offering", action: "create", sheet: "Core Planning", row: 21 },
  { code: "icm_offering_update", application: "ICM", resource: "Offering", action: "update", sheet: "Core Planning", row: 22 },
  { code: "icm_offering_delete", application: "ICM", resource: "Offering", action: "delete", sheet: "Core Planning", row: 23 },
  { code: "icm_app_group_read", application: "ICM", resource: "App Group", action: "read", sheet: "Core Planning", row: 24 },
  { code: "icm_app_group_create", application: "ICM", resource: "App Group", action: "create", sheet: "Core Planning", row: 25 },
  { code: "icm_app_group_update", application: "ICM", resource: "App Group", action: "update", sheet: "Core Planning", row: 26 },
  { code: "icm_app_group_delete", application: "ICM", resource: "App Group", action: "delete", sheet: "Core Planning", row: 27 },
  { code: "icm_salespackage_read", application: "ICM", resource: "Sales Package", action: "read", sheet: "Core Planning", row: 28 },
  { code: "icm_salespackage_create", application: "ICM", resource: "Sales Package", action: "create", sheet: "Core Planning", row: 29 },
  { code: "icm_salespackage_update", application: "ICM", resource: "Sales Package", action: "update", sheet: "Core Planning", row: 30 },
  { code: "icm_salespackage_delete", application: "ICM", resource: "Sales Package", action: "delete", sheet: "Core Planning", row: 31 },
  { code: "rm_rule_read", application: "(TOM)", resource: "Targeting Rule", action: "read", sheet: "Core Planning", row: 32 },
  { code: "rm_rule_create", application: "(TOM)", resource: "Targeting Rule", action: "create", sheet: "Core Planning", row: 33 },
  { code: "rm_rule_update", application: "(TOM)", resource: "Targeting Rule", action: "update", sheet: "Core Planning", row: 34 },
  { code: "rm_rule_archive", application: "(TOM)", resource: "Targeting Rule", action: "archive", sheet: "Core Planning", row: 35 },
  { code: "rm_restriction_read", application: "(TOM)", resource: "Targeting Restriction", action: "read", sheet: "Core Planning", row: 36 },
  { code: "rm_restriction_create", application: "(TOM)", resource: "Targeting Restriction", action: "create", sheet: "Core Planning", row: 37 },
  { code: "rm_restriction_update", application: "(TOM)", resource: "Targeting Restriction", action: "update", sheet: "Core Planning", row: 38 },
  { code: "rm_restriction_archive", application: "(TOM)", resource: "Targeting Restriction", action: "archive", sheet: "Core Planning", row: 39 },
  { code: "rcm_ratecard_create", application: "RCM", resource: "Rate Card", action: "create", sheet: "Core Planning", row: 40 },
  { code: "rcm_ratecard_read", application: "RCM", resource: "Rate Card", action: "read", sheet: "Core Planning", row: 41 },
  { code: "rcm_ratecard_update", application: "RCM", resource: "Rate Card", action: "update", sheet: "Core Planning", row: 42 },
  { code: "rcm_ratecard_delete", application: "RCM", resource: "Rate Card", action: "delete", sheet: "Core Planning", row: 43 },
  { code: "iam_user_read", application: "Access Mgmt", resource: "Users", action: "read", sheet: "Core Planning", row: 44 },
  { code: "si_opportunity_read", application: "SalesIntelligence", resource: "Opportunity", action: "read", sheet: "Core Planning", row: 45 },
  { code: "si_opportunity_update", application: "SalesIntelligence", resource: "Opportunity", action: "update", sheet: "Core Planning", row: 46 },
  { code: "si_opportunity_create", application: "SalesIntelligence", resource: "Opportunity", action: "create", sheet: "Core Planning", row: 47 },
  { code: "agent_sales_access", application: "Disney Ads Intelligence", resource: "Sales Intelligence", action: "access", sheet: "Core Planning", row: 48 },
  { code: "agent_planning_access", application: "Disney Ads Intelligence", resource: "Planning Intelligence", action: "access", sheet: "Core Planning", row: 49 },
  { code: "agent_account_access", application: "Disney Ads Intelligence", resource: "Account Intelligence", action: "access", sheet: "Core Planning", row: 50 },
  { code: "ss_read", application: "Disney Campaign Manager", resource: "Self Service", action: "read", sheet: "Core Planning", row: 53 },
  { code: "ss_update", application: "Disney Campaign Manager", resource: "Self Service", action: "update", sheet: "Core Planning", row: 54 },
  { code: "ads_agent_sales_read", application: "Disney Ads Agent", resource: "Sales", action: "read", sheet: "v2. Agent", row: 3, description: "Upload RFP, generate draft, start flow, view AI-generated content including recommendations (Magic Words, Ad Products, Audiences)", note: "SalesHub / Salesforce profiles govern CRM Opportunity CRUD and record access. Atlas IAM governs agent prompt layer only (ads_agent_sales_*)." },
  { code: "ads_agent_sales_update", application: "Disney Ads Agent", resource: "Sales", action: "update", sheet: "v2. Agent", row: 4, description: "Edit draft, multi-turn clarification, Ad Policy re-check, Confirm Opportunity in SalesHub" },
  { code: "ads_agent_planning_read", application: "Disney Ads Agent", resource: "Planning", action: "read", sheet: "v2. Agent", row: 5, description: "List / view media plans, line items, plan insights, and AI-generated recommendations in Planning Agent context" },
  { code: "ads_agent_planning_update", application: "Disney Ads Agent", resource: "Planning", action: "update", sheet: "v2. Agent", row: 6, description: "Generate or edit plans via agent, prompt-backs / clarification turns, line-item changes, forecast / max-avails requests" },
  { code: "ads_agent_account_read", application: "Disney Ads Agent", resource: "Account", action: "read", sheet: "v2. Agent", row: 7, description: "Account360-scoped AI — account overview, revenue/pipeline insights, cross-opp FAQ", note: "Recommending it as a separate permission for Sales - In the future it could be used for FAQ - e.g. what Ad Products are eligible for PG Opportunity ?" },
  { code: "ads_agent_account_update", application: "Disney Ads Agent", resource: "Account", action: "update", sheet: "v2. Agent", row: 8, description: "Query and act on account-level recommendations — eligibility questions, engagement summaries, account FAQ prompts", note: "same as above , e.g. end user might prompt a question like what Disneyt Properties Starbcuks is buying the most?" }
];

/* ═══ CANONICAL ROLES ═══
   Six Core Planning roles from the "Core Planning" sheet and two Agent
   roles from "v2. Agent", which is authoritative for the current Agent
   matrix; the "Agents" sheet is a supporting capability reference and
   grants nothing (see REDLINE / ROLE-PERMISSION-WORKBOOK.md).

   `permissionCodes` is the literal set of cells marked x in that role's
   column. Descriptions are the workbook's own wording, unparaphrased.
   Role IDs are the pre-existing record IDs so stored references,
   deep links and selection state survive the migration. */
var CANONICAL_ROLE_DEFINITIONS = [
  {
    id: "r001",
    name: "ACP Planner",
    description: "Internal Disney user who builds and manages Orders, Media plans, Line items in Core Planning. Does not approve Orders or manage DCM accounts.",
    sheet: "Core Planning", column: "D",
    createdBy: "Homer Simpson", createDate: "01/15/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_plan_read",
      "acp_plan_create",
      "acp_plan_update",
      "acp_plan_delete",
      "acp_lineitem_read",
      "acp_lineitem_create",
      "acp_lineitem_update",
      "acp_lineitem_delete",
      "acp_sensitive_read",
      "acp_regional_read",
      "acp_regional_update",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read",
      "agent_planning_access",
      "ss_read"
    ]
  },
  {
    id: "r002",
    name: "ACP Vendor Planner",
    description: "Contracted vendor user with the same planning capabilities as ACP Planner, scoped to the assigned vendor team.",
    sheet: "Core Planning", column: "E",
    createdBy: "Homer Simpson", createDate: "01/18/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_plan_read",
      "acp_plan_create",
      "acp_plan_update",
      "acp_plan_delete",
      "acp_lineitem_read",
      "acp_lineitem_create",
      "acp_lineitem_update",
      "acp_lineitem_delete",
      "acp_sensitive_read",
      "acp_regional_read",
      "acp_regional_update",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read",
      "agent_planning_access"
    ]
  },
  {
    id: "r003",
    name: "ACP Planning Specialist",
    description: "Reviews and approves Orders with Media Plans before they go to the client.",
    sheet: "Core Planning", column: "F",
    createdBy: "Marge Simpson", createDate: "01/22/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_order_approve",
      "acp_plan_read",
      "acp_plan_create",
      "acp_plan_update",
      "acp_plan_delete",
      "acp_lineitem_read",
      "acp_lineitem_create",
      "acp_lineitem_update",
      "acp_lineitem_delete",
      "acp_sensitive_read",
      "acp_regional_read",
      "acp_regional_update",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read",
      "rcm_ratecard_read",
      "iam_user_read",
      "ss_read",
      "ss_update"
    ]
  },
  {
    id: "r004",
    name: "ACP Vendor Planning Specialist",
    description: "Contracted vendor user with the same planning capabilities as ACP Planning Specialist, scoped to the assigned vendor team.",
    sheet: "Core Planning", column: "G",
    createdBy: "Kent Brockman", createDate: "01/25/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_order_approve",
      "acp_plan_read",
      "acp_plan_create",
      "acp_plan_update",
      "acp_plan_delete",
      "acp_lineitem_read",
      "acp_lineitem_create",
      "acp_lineitem_update",
      "acp_lineitem_delete",
      "acp_sensitive_read",
      "acp_sensitive_update",
      "acp_regional_read",
      "acp_regional_update",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read"
    ]
  },
  {
    id: "r005",
    name: "ACP Planning Manager",
    description: "Provides managerial oversight of the planning process. Authorized to view orders and media plans and approve or reject submissions. Has read-only access to Access Management.",
    sheet: "Core Planning", column: "H",
    createdBy: "Kent Brockman", createDate: "01/28/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_order_approve",
      "acp_plan_read",
      "acp_lineitem_read",
      "acp_lineitem_update",
      "acp_sensitive_read",
      "acp_sensitive_update",
      "acp_regional_read",
      "acp_regional_update",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read",
      "rcm_ratecard_create",
      "rcm_ratecard_read",
      "rcm_ratecard_update",
      "rcm_ratecard_delete",
      "iam_user_read"
    ]
  },
  {
    id: "r006",
    name: "ACP Viewer",
    description: "Read-only access to Orders, Media plans, and Line items in Core Planning. For users who require visibility into planning work without any edit capabilities.",
    sheet: "Core Planning", column: "I",
    createdBy: "Homer Simpson", createDate: "02/02/2026",
    permissionCodes: [
      "acp_order_read",
      "acp_plan_read",
      "acp_lineitem_read",
      "acp_regional_read",
      "icm_offering_read",
      "icm_app_group_read",
      "icm_salespackage_read",
      "rm_rule_read",
      "rm_restriction_read",
      "rcm_ratecard_read"
    ]
  },
  {
    id: "r013",
    name: "Sales Agent User",
    description: "Uses the Disney Ads Agent to turn RFPs into Opportunity drafts, refine them through follow-up questions, and confirm in SalesHub, gets access to Account insights.",
    sheet: "v2. Agent", column: "E",
    createdBy: "Kent Brockman", createDate: "02/07/2026",
    permissionCodes: [
      "ads_agent_sales_read",
      "ads_agent_sales_update",
      "ads_agent_account_read",
      "ads_agent_account_update"
    ]
  },
  {
    id: "r014",
    name: "Planning Agent User",
    description: "Uses the Disney Ads Agent to manage Media Plans, Line items, and forecasts through natural-language prompts.",
    sheet: "v2. Agent", column: "F",
    createdBy: "Marge Simpson", createDate: "02/09/2026",
    permissionCodes: [
      "ads_agent_planning_read",
      "ads_agent_planning_update",
      "ads_agent_account_read",
      "ads_agent_account_update",
      "acp_order_read",
      "acp_order_create",
      "acp_order_update",
      "acp_order_delete",
      "acp_plan_read",
      "acp_plan_create",
      "acp_plan_update",
      "acp_plan_delete",
      "acp_lineitem_read",
      "acp_lineitem_create",
      "acp_lineitem_update",
      "acp_lineitem_delete",
      "acp_sensitive_read",
      "acp_regional_read",
      "acp_regional_update"
    ]
  }
];

/* ═══ WORKBOOK ↔ APPLICATION VOCABULARY ═══
   The workbook names applications, resources and actions in its own
   shorthand; the application has shipped vocabulary of its own. These
   are the only bridges between the two, declared once so no surface
   invents a second translation.

   Nothing here changes what a grant means — an `x` in `acp_order_read`
   is still exactly one grant of one code on one resource. */
var WB_APP_TOKEN = {
  "Core Planning":           "Core Planning",
  "ICM":                     "ICM",
  "(TOM)":                   "TOM",
  "RCM":                     "RCM",
  "Access Mgmt":             "IAM",
  "SalesIntelligence":       "Sales Intelligence",
  "Disney Ads Intelligence": "Disney Ads Intelligence",
  "Disney Campaign Manager": "Disney Campaign Manager",
  "Disney Ads Agent":        "Disney Ads Agent"
};

/* Full product names for the surfaces that have room for them (the
   Permission Capability picker, the Create Role application list, the
   effective-access table). Tokens not listed read the same either way. */
var WB_APP_DISPLAY = {
  "IAM": "Identity Access Management",
  "ICM": "Inventory Catalog Manager",
  "TOM": "Targeting Options Manager",
  "RCM": "Rate Card Manager"
};
function appDisplayNameForToken(token) { return WB_APP_DISPLAY[token] || token; }

var WB_TOKEN_CR_KEY = {
  "IAM":                     "identity_access_management",
  "Core Planning":           "core_planning",
  "ICM":                     "inventory_catalog_manager",
  "TOM":                     "target_options_manager",
  "RCM":                     "rate_card_manager",
  "Sales Intelligence":      "sales_intelligence",
  "Disney Ads Intelligence": "disney_ads_intelligence",
  "Disney Campaign Manager": "disney_campaign_manager",
  "Disney Ads Agent":        "disney_ads_agent"
};

/* Action suffix → the verb the permission catalog displays, and → the
   column heading the Create/Edit Role matrix uses. `access` is the
   Disney Ads Intelligence suffix and is a read. */
var WB_ACTION_LABEL  = { read: "View", create: "Create", update: "Edit", "delete": "Delete", approve: "Approve", archive: "Archive", access: "View" };
var WB_ACTION_COLUMN = { read: "Read", create: "Create", update: "Update", "delete": "Delete", approve: "Approve", archive: "Archive", access: "Read" };
var WB_LABEL_ORDER   = ["View", "Create", "Edit", "Delete", "Approve", "Archive"];
var WB_COLUMN_ORDER  = ["Read", "Create", "Update", "Delete", "Approve", "Archive"];

/* Resource → the group name every permission surface already uses.
   Pluralisation only; the workbook's resource identity is preserved on
   the definition itself. */
var WB_RESOURCE_GROUP = {
  "Order": "Orders", "Media Plan": "Media Plans", "Line Item": "Line Items",
  "Offering": "Offerings", "App Group": "App Groups", "Sales Package": "Sales Packages",
  "Targeting Rule": "Targeting Rules", "Targeting Restriction": "Targeting Restrictions",
  "Rate Card": "Rate Cards", "Users": "Users", "Opportunity": "Opportunities",
  "Sales Intelligence": "Sales Intelligence", "Planning Intelligence": "Planning Intelligence",
  "Account Intelligence": "Account Intelligence", "Self Service": "Self Service",
  "Sales": "Sales", "Planning": "Planning", "Account": "Account"
};

/* The workbook's `(all)` rows are application-wide data-access grants,
   which is exactly the pair of rows the Create/Edit Role matrix already
   appends to every application section. */
var WB_DATA_ACCESS_GROUP = { acp_sensitive: "Sensitive Data Access", acp_regional: "Regional Data Access" };

var PERMISSION_BY_CODE = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) out[PERMISSION_DEFINITIONS[i].code] = PERMISSION_DEFINITIONS[i];
  return out;
})();

function permissionTokenForCode(code) {
  var def = PERMISSION_BY_CODE[code];
  return def ? WB_APP_TOKEN[def.application] : null;
}
function permissionGroupForCode(code) {
  var def = PERMISSION_BY_CODE[code];
  if (!def) return null;
  if (def.resource === "(all)") return WB_DATA_ACCESS_GROUP[code.replace(/_(read|update|create|delete)$/, "")] || null;
  return WB_RESOURCE_GROUP[def.resource] || def.resource;
}
function permissionIsDataAccess(code) {
  var def = PERMISSION_BY_CODE[code];
  return !!def && def.resource === "(all)";
}
function permissionActionLabel(code) {
  var def = PERMISSION_BY_CODE[code];
  return def ? WB_ACTION_LABEL[def.action] : null;
}
function permissionActionColumn(code) {
  var def = PERMISSION_BY_CODE[code];
  return def ? WB_ACTION_COLUMN[def.action] : null;
}

/* ── Derived catalogs ──────────────────────────────────────────────────
   Everything below is computed from the two tables above. No surface
   keeps its own copy of who-can-do-what: change a grant in
   CANONICAL_ROLE_DEFINITIONS and the Roles table, the Functions
   popover, the Create/Edit Role matrix, the Permission Management
   catalog and the effective-access table all move together. */

/* token → ordered function codes */
var FUNCTION_REGISTRY = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var def = PERMISSION_DEFINITIONS[i];
    var token = WB_APP_TOKEN[def.application];
    if (!out[token]) out[token] = [];
    out[token].push(def.code);
  }
  return out;
})();

/* token → ordered group names (data-access groups excluded: the matrix
   appends those to every application itself) */
var WB_GROUPS_BY_TOKEN = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var def = PERMISSION_DEFINITIONS[i];
    if (def.resource === "(all)") continue;
    var token = WB_APP_TOKEN[def.application];
    var group = WB_RESOURCE_GROUP[def.resource] || def.resource;
    if (!out[token]) out[token] = [];
    if (out[token].indexOf(group) === -1) out[token].push(group);
  }
  return out;
})();

/* group → the actions the workbook defines for it, in canonical order.
   This is the pool: what a role *could* be granted there, which is what
   makes "Full Access" and "View Only" answerable without a name check. */
var WB_POOL_BY_GROUP = (function () {
  var raw = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var code = PERMISSION_DEFINITIONS[i].code;
    var group = permissionGroupForCode(code);
    if (!group) continue;
    if (!raw[group]) raw[group] = {};
    raw[group][permissionActionLabel(code)] = true;
  }
  var out = {};
  for (var g in raw) {
    if (!Object.prototype.hasOwnProperty.call(raw, g)) continue;
    out[g] = WB_LABEL_ORDER.filter(function (a) { return raw[g][a]; });
  }
  return out;
})();
var WB_COLUMNS_BY_GROUP = (function () {
  var raw = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var code = PERMISSION_DEFINITIONS[i].code;
    var group = permissionGroupForCode(code);
    if (!group) continue;
    if (!raw[group]) raw[group] = {};
    raw[group][permissionActionColumn(code)] = true;
  }
  var out = {};
  for (var g in raw) {
    if (!Object.prototype.hasOwnProperty.call(raw, g)) continue;
    out[g] = WB_COLUMN_ORDER.filter(function (c) { return raw[g][c]; });
  }
  return out;
})();

var CANONICAL_ROLE_BY_ID = (function () {
  var out = {};
  for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) out[CANONICAL_ROLE_DEFINITIONS[i].id] = CANONICAL_ROLE_DEFINITIONS[i];
  return out;
})();
var CANONICAL_ROLE_BY_NAME = (function () {
  var out = {};
  for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) out[CANONICAL_ROLE_DEFINITIONS[i].name] = CANONICAL_ROLE_DEFINITIONS[i];
  return out;
})();
var CANONICAL_ROLE_NAMES = CANONICAL_ROLE_DEFINITIONS.map(function (r) { return r.name; });

/* roleId → token → granted codes (the shape every existing consumer of
   ROLE_FUNCTION_MAP already expects) */
var ROLE_FUNCTION_MAP = (function () {
  var out = {};
  for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) {
    var role = CANONICAL_ROLE_DEFINITIONS[i];
    var byToken = {};
    for (var c = 0; c < role.permissionCodes.length; c++) {
      var code = role.permissionCodes[c];
      var token = permissionTokenForCode(code);
      if (!token) continue;
      if (!byToken[token]) byToken[token] = [];
      byToken[token].push(code);
    }
    out[role.id] = byToken;
  }
  return out;
})();

var FUNCTION_LABEL_MAP = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    out[PERMISSION_DEFINITIONS[i].code] = permissionActionLabel(PERMISSION_DEFINITIONS[i].code);
  }
  return out;
})();

/* roleId → token → group → granted verbs */
function roleGrantsByGroup(roleId, token) {
  var codes = (ROLE_FUNCTION_MAP[roleId] && ROLE_FUNCTION_MAP[roleId][token]) || [];
  var raw = {};
  for (var i = 0; i < codes.length; i++) {
    var g = permissionGroupForCode(codes[i]);
    if (!g) continue;
    if (!raw[g]) raw[g] = {};
    raw[g][permissionActionLabel(codes[i])] = true;
  }
  var out = {};
  for (var group in raw) {
    if (!Object.prototype.hasOwnProperty.call(raw, group)) continue;
    out[group] = WB_LABEL_ORDER.filter(function (a) { return raw[group][a]; });
  }
  return out;
}

/* Every group an application can grant, including the two data-access
   rows when the workbook defines them for that application. */
function wbAllGroupsForToken(token) {
  var groups = (WB_GROUPS_BY_TOKEN[token] || []).slice();
  var codes = FUNCTION_REGISTRY[token] || [];
  for (var i = 0; i < codes.length; i++) {
    if (!permissionIsDataAccess(codes[i])) continue;
    var g = permissionGroupForCode(codes[i]);
    if (g && groups.indexOf(g) === -1) groups.push(g);
  }
  return groups;
}

/* ── Access-level summaries ────────────────────────────────────────────
   Derived from the grants themselves, never from the role's name. The
   allow-lists are the same ones the Create Role access-level dropdown
   applies when an author picks a level, so a role whose grants match a
   level round-trips to that level.

     View Only   every granted action is a read
     Full Access every action the application defines is granted
     Approve     exactly the read + approve bundle
     Edit        exactly the read + create + update bundle
     Custom      any other combination

   "Custom" is the honest answer for most workbook roles, and it is the
   answer the popover expands into the specific verbs. */
var WB_LEVEL_ALLOW = {
  "View Only":   ["View"],
  "Edit":        ["View", "Create", "Edit"],
  "Approve":     ["View", "Approve"],
  "Full Access": null
};

function wbBundleForToken(token, level) {
  var allow = WB_LEVEL_ALLOW[level];
  var groups = wbAllGroupsForToken(token);
  var out = {};
  for (var i = 0; i < groups.length; i++) {
    var pool = WB_POOL_BY_GROUP[groups[i]] || [];
    out[groups[i]] = allow === null ? pool.slice() : pool.filter(function (a) { return allow.indexOf(a) !== -1; });
  }
  return out;
}

/* Levels worth offering for an application: a level whose defining
   action the application does not have would be indistinguishable from
   a weaker one, so it is left out rather than shown as a duplicate. */
function wbLevelsForToken(token) {
  var groups = wbAllGroupsForToken(token);
  var pool = {};
  for (var i = 0; i < groups.length; i++) {
    var actions = WB_POOL_BY_GROUP[groups[i]] || [];
    for (var a = 0; a < actions.length; a++) pool[actions[a]] = true;
  }
  var levels = ["View Only"];
  if (pool["Create"] || pool["Edit"]) levels.push("Edit");
  if (pool["Approve"]) levels.push("Approve");
  levels.push("Full Access");
  return levels;
}

function wbSameGrantShape(a, b) {
  var keys = {};
  var k;
  for (k in a) if (a[k] && a[k].length) keys[k] = true;
  for (k in b) if (b[k] && b[k].length) keys[k] = true;
  for (k in keys) {
    var x = (a[k] || []).join("|");
    var y = (b[k] || []).join("|");
    if (x !== y) return false;
  }
  return true;
}

function wbAccessLevel(roleId, token) {
  var got = roleGrantsByGroup(roleId, token);
  var any = false, allReads = true, g;
  for (g in got) {
    if (!got[g].length) continue;
    any = true;
    for (var i = 0; i < got[g].length; i++) if (got[g][i] !== "View") allReads = false;
  }
  if (!any) return null;
  if (allReads) return "View Only";
  if (wbSameGrantShape(got, wbBundleForToken(token, "Full Access"))) return "Full Access";
  var levels = wbLevelsForToken(token);
  if (levels.indexOf("Approve") !== -1 && wbSameGrantShape(got, wbBundleForToken(token, "Approve"))) return "Approve";
  if (levels.indexOf("Edit") !== -1 && wbSameGrantShape(got, wbBundleForToken(token, "Edit"))) return "Edit";
  return "Custom";
}

var ROLE_ACCESS_LEVELS = (function () {
  var out = {};
  for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) {
    var id = CANONICAL_ROLE_DEFINITIONS[i].id;
    var byToken = {};
    for (var token in ROLE_FUNCTION_MAP[id]) {
      if (!Object.prototype.hasOwnProperty.call(ROLE_FUNCTION_MAP[id], token)) continue;
      var level = wbAccessLevel(id, token);
      if (level) byToken[token] = level;
    }
    out[id] = byToken;
  }
  return out;
})();

function labelForFunction(key) { return FUNCTION_LABEL_MAP[key] || null; }

/* Resolve a role+app → array of human-readable function labels.
   Prefer ROLE_FUNCTION_MAP; fall back to FUNCTION_REGISTRY sliced by count. */
function resolveFunctionLabels(roleId, appName, count) {
  var keys = (ROLE_FUNCTION_MAP[roleId] && ROLE_FUNCTION_MAP[roleId][appName]) ||
             (FUNCTION_REGISTRY[appName] ? FUNCTION_REGISTRY[appName].slice(0, count) : []);
  var seen = {}, labels = [];
  for (var i = 0; i < keys.length; i++) {
    var lbl = labelForFunction(keys[i]);
    if (!lbl || seen[lbl]) continue;
    seen[lbl] = 1;
    labels.push(lbl);
  }
  return labels;
}

function roleFunctionCount(roleId, appName) {
  var keys = (ROLE_FUNCTION_MAP[roleId] && ROLE_FUNCTION_MAP[roleId][appName]) || [];
  return keys.length;
}

function roleAccessLevel(roleId, appName) {
  return (ROLE_ACCESS_LEVELS[roleId] && ROLE_ACCESS_LEVELS[roleId][appName]) || "Custom";
}

function buildRoleFunctions(roleId) {
  var out = [];
  var map = ROLE_FUNCTION_MAP[roleId] || {};
  for (var appName in map) {
    if (!Object.prototype.hasOwnProperty.call(map, appName)) continue;
    out.push({
      name: appName,
      count: roleFunctionCount(roleId, appName),
      access: roleAccessLevel(roleId, appName)
    });
  }
  out.sort(function (a, b) { return a.name.localeCompare(b.name); });
  return out;
}

/* ═══ PERMISSION MANAGEMENT (Functions catalog) ═══
   Source of truth for Permission Management tab (Figma 770:20032).
   This catalog is *derived* from FUNCTION_REGISTRY (the same registry the
   Role Assignment tab consumes), so the two tabs stay internally
   consistent: a function appears here iff it can be granted to a role,
   and "Used in" is computed live against ROLE_FUNCTION_MAP — no
   hand-typed counts to drift out of sync.

   The Type taxonomy (View / Edit / Approval / Admin / Assignment /
   Workflow) is mapped from FUNCTION_LABEL_MAP's verb labels via
   `permissionTypeForKey()` below, so a future change to one verb
   automatically reclassifies the function here. */

/* App owner per function key — implied by the key prefix in
   FUNCTION_REGISTRY but inverted here for direct lookup. Kept explicit
   so a single function key cannot quietly belong to two apps. */
function appForFunctionKey(key) {
  /* The workbook names the owning application on the definition itself,
     so there is nothing to infer from the code's prefix — and nothing
     that can quietly disagree with the registry. */
  var token = permissionTokenForCode(key);
  if (token) return token;
  if (key.indexOf("admin_") === 0) return "Admin";
  return "Admin";
}

/* Full application display name for the Permission Capability detail
   page (Figma 788:4348 "Choose Application*"). The PM table uses the
   short app token ("IAM") so it scans quickly in a 180px column; the
   detail page has space for the full product name and the user spec
   calls for "Identity Access Management" specifically. */
function appDisplayNameForKey(key) {
  return appDisplayNameForToken(appForFunctionKey(key));
}

/* Applications available in the Choose Application dropdown on the
   Permission Capability detail page (Figma 788:4348). The onboarded
   applications are the workbook's own, in worksheet order, so this
   dropdown can never offer an application the permission registry does
   not know about. The four that follow are Atlas admin applications
   onboarded for permission authoring — their first capability is
   created right here on this page, so they have permission groups +
   action pools defined below in PC_GROUPS_BY_APP / PC_POOL_BY_GROUP
   but no registered capabilities yet. This is the "new application
   onboarding" path: IAM admin defines the capability surface (groups +
   actions) before the first capability instance is authored. */
var PC_ADMIN_ONBOARDING_APPS = [
  "Deal Configuration Manager",
  "Unified Financial System",
  "HARPS",
  "PAID Invoice Centralization"
];
var PC_APPS = (function () {
  var out = [];
  for (var token in WB_GROUPS_BY_TOKEN) {
    if (!Object.prototype.hasOwnProperty.call(WB_GROUPS_BY_TOKEN, token)) continue;
    out.push(appDisplayNameForToken(token));
  }
  return out.concat(PC_ADMIN_ONBOARDING_APPS);
})();

/* Permission Groups available per application. The onboarded rows are
   the workbook's resources for that application; the admin-onboarding
   rows keep the group sets their capability surface was spec'd with,
   each group's action pool defined in PC_POOL_BY_GROUP below. */
var PC_GROUPS_BY_APP = (function () {
  var out = {
    "Deal Configuration Manager":   ["Deal Types", "Package Rules", "Pricing Rules"],
    "Unified Financial System":     ["Billing Periods", "Invoice Dashboard", "Revenue Summary"],
    "HARPS":                        ["Revenue", "Adjustments", "Recognition Rules"],
    "PAID Invoice Centralization":  ["Invoices", "Invoice Line Items", "Sales Line Items", "NCS Export"]
  };
  for (var token in WB_GROUPS_BY_TOKEN) {
    if (!Object.prototype.hasOwnProperty.call(WB_GROUPS_BY_TOKEN, token)) continue;
    out[appDisplayNameForToken(token)] = WB_GROUPS_BY_TOKEN[token].slice();
  }
  return out;
})();

/* Per-app placeholder hints for Permission Name + Description. Used
   on user-initiated app change to nudge the author toward names that
   match the application's verb vocabulary. Names of already-saved
   capabilities are preserved — placeholders only surface in empty
   fields. */
var PC_APP_HINTS = {
  "Identity Access Management":   { name: "e.g. View IAM Analytics",          desc: "Read IAM usage analytics and access-pattern reports." },
  "Core Planning":                { name: "e.g. Approve Media Plans",         desc: "Approve media plans submitted from the planning workspace." },
  "Inventory Catalog Manager":    { name: "e.g. Manage Offerings",            desc: "Author and maintain inventory offerings and sales packages." },
  "Targeting Options Manager":       { name: "e.g. Publish Targeting Templates", desc: "Curate and publish reusable targeting templates and groups." },
  "Disney Ads Agent":             { name: "e.g. Edit Plans via Agent",        desc: "Generate or edit media plans and line items through agent prompts." },
  "Rate Card Manager":            { name: "e.g. Publish Rate Card",           desc: "Author, update, and retire rate cards used for pricing." },
  "Sales Intelligence":           { name: "e.g. Update Opportunity",          desc: "Read and maintain Sales Intelligence opportunity records." },
  "Disney Ads Intelligence":      { name: "e.g. Open Planning Intelligence",  desc: "Access Sales, Planning, and Account Intelligence surfaces." },
  "Disney Campaign Manager":      { name: "e.g. Edit Self Service Campaign",  desc: "Read and update Self Service campaigns in Disney Campaign Manager." },
  "Deal Configuration Manager":   { name: "e.g. Activate Deal Types",         desc: "Configure deal types, package rules, and pricing rules for active deals." },
  "Unified Financial System":     { name: "e.g. Lock Billing Period",         desc: "Lock billing periods and reconcile invoice dashboards and revenue summaries." },
  "HARPS":                        { name: "e.g. Approve Revenue Adjustment",  desc: "Validate and approve revenue adjustments and recognition rules in HARPS." },
  "PAID Invoice Centralization":  { name: "e.g. Release Invoice to NCS",      desc: "Manage invoice lifecycle and NCS export from PAID Invoice Centralization." }
};

/* ═══ PM IS THE SOURCE OF TRUTH FOR ROLE-ASSIGNMENT OPTIONS ═══
   The Permission Management catalog (FUNCTION_REGISTRY,
   PC_GROUP_FOR_KEY, PC_POOL_BY_GROUP) defines every group + action a
   role can be granted. The Role Assignment surfaces (Create Role
   permissions panel, R&P Functions popover) derive their option sets
   from this catalog instead of maintaining parallel copies. That
   means:
     • Adding a function to FUNCTION_REGISTRY surfaces it for role
       assignment automatically.
     • Renaming/removing an action in PC_POOL_BY_GROUP propagates to
       every Create Role checkbox row.
     • A new group introduced via PC_GROUP_FOR_KEY appears as a new
       module in Create Role with no extra wiring.
     • Removing a function key (deletion / disable) removes it from
       the catalog the Role Assignment options are derived from.
   The legacy `APP_PERMISSIONS.resources`, `APP_ACCESS_MODEL`, and
   `ROLE_ACCESS_DETAILS` arrays remain on disk only as Role-Assignment
   metadata (labels, level lists, level → action recipes) — never as
   their own permission catalog. */

/* Snake_case Create-Role app key ↔ PM app token (FUNCTION_REGISTRY /
   PC_GROUP_FOR_KEY use the PM token; Create Role and APP_PERMISSIONS
   use the snake_case key). One-way map both ways for cheap lookups. */
var CR_APP_TO_PM_TOKEN = (function () {
  var out = {};
  for (var token in WB_TOKEN_CR_KEY) {
    if (!Object.prototype.hasOwnProperty.call(WB_TOKEN_CR_KEY, token)) continue;
    if (!WB_GROUPS_BY_TOKEN[token]) continue;
    out[WB_TOKEN_CR_KEY[token]] = token;
  }
  return out;
})();
var PM_TOKEN_TO_CR_APP = (function () {
  var out = {};
  for (var k in CR_APP_TO_PM_TOKEN) {
    if (Object.prototype.hasOwnProperty.call(CR_APP_TO_PM_TOKEN, k)) out[CR_APP_TO_PM_TOKEN[k]] = k;
  }
  return out;
})();

/* Walk the PM catalog for an app token and return the ordered list of
   unique group names (preserves FUNCTION_REGISTRY ordering). Disney
   Ads Agent has no FUNCTION_REGISTRY entry — its function keys live
   only in PC_GROUP_FOR_KEY, so we derive its key list by filtering
   PC_GROUP_FOR_KEY entries that resolve to "Disney Ads Agent". */
function pmFunctionKeysForAppToken(token) {
  if (FUNCTION_REGISTRY[token]) return FUNCTION_REGISTRY[token].slice();
  var out = [];
  for (var k in PC_GROUP_FOR_KEY) {
    if (!Object.prototype.hasOwnProperty.call(PC_GROUP_FOR_KEY, k)) continue;
    if (appForFunctionKey(k) === token) out.push(k);
  }
  return out;
}
function pmGroupsForAppToken(token) {
  var keys = pmFunctionKeysForAppToken(token);
  var seen = {};
  var order = [];
  for (var i = 0; i < keys.length; i++) {
    var g = PC_GROUP_FOR_KEY[keys[i]];
    if (g && !seen[g]) { seen[g] = true; order.push(g); }
  }
  return order;
}
/* Resource list ({title, actions}) for Create Role's permissions
   panel — derived from PM. Group order matches PM; action order
   matches PC_POOL_BY_GROUP. */
function derivePMResourcesForApp(crAppKey) {
  var token = CR_APP_TO_PM_TOKEN[crAppKey];
  if (!token) return [];
  var groups = pmGroupsForAppToken(token);
  return groups.map(function (g) {
    return { title: g, actions: (PC_POOL_BY_GROUP[g] || []).slice() };
  });
}

/* Derive bundle (level → group → actions) entirely from the PM pool.
   The level names are RA-owned ("View Only", "Edit", "Approve", "Full
   Access", "User", "Role"), but the action subsets they map to are
   intersections of the PM pool with action-class allowlists — so when
   PM adds/removes an action from a pool, the bundle adjusts without
   any hand-edit on the RA side. Levels with no applicable actions
   for any group yield an empty bundle (i.e. nothing checked, which is
   the correct degenerate signal that the level doesn't apply here). */
var BUNDLE_RULES = (function () {
  /* Same allow-lists the access-level summary reads (WB_LEVEL_ALLOW), so
     a role whose grants are summarised as "Edit" gets exactly those
     boxes back when an author re-picks Edit in Create Role. */
  var out = {};
  for (var level in WB_LEVEL_ALLOW) {
    if (!Object.prototype.hasOwnProperty.call(WB_LEVEL_ALLOW, level)) continue;
    out[level] = { allow: WB_LEVEL_ALLOW[level] };
  }
  return out;
})();
function deriveBundleForLevel(crAppKey, levelName) {
  var rule = BUNDLE_RULES[levelName];
  if (!rule) return {};
  var resources = derivePMResourcesForApp(crAppKey);
  var bundle = {};
  for (var i = 0; i < resources.length; i++) {
    var g = resources[i].title;
    var pool = resources[i].actions;
    var actions;
    if (rule.fullGroups && rule.fullGroups.indexOf(g) !== -1) {
      actions = pool.slice();
    } else if (!rule.allow) {
      actions = pool.slice();
    } else {
      actions = [];
      for (var p = 0; p < pool.length; p++) {
        if (rule.allow.indexOf(pool[p]) !== -1) actions.push(pool[p]);
      }
    }
    bundle[g] = actions;
  }
  return bundle;
}
function deriveBundlesForApp(crAppKey, levels) {
  var out = {};
  for (var i = 0; i < levels.length; i++) {
    if (levels[i] === "Custom") continue;
    out[levels[i]] = deriveBundleForLevel(crAppKey, levels[i]);
  }
  return out;
}

/* Access-level vocabulary per app. Declared here (above all view-side
   code) so the Functions popover (R&P) and the Create Role panel can
   both pull from the same source — the vocabulary IS the contract
   between the role record (e.g. ROLE_ACCESS_LEVELS["r001"].IAM ===
   "Full Access") and the bundle derivation. "Custom" is included for
   Create Role but excluded from APP_ACCESS_MODEL since the popover
   never renders a Custom preset (it shows specific selected
   actions instead). */
var APP_LEVELS_BY_CR_KEY = (function () {
  /* Per application, only the levels its own actions can distinguish:
     an application with nothing to approve does not offer Approve,
     because that level would check exactly the same boxes as View
     Only and silently mean nothing. */
  var out = {};
  for (var crKey in CR_APP_TO_PM_TOKEN) {
    if (!Object.prototype.hasOwnProperty.call(CR_APP_TO_PM_TOKEN, crKey)) continue;
    out[crKey] = wbLevelsForToken(CR_APP_TO_PM_TOKEN[crKey]).concat(["Custom"]);
  }
  return out;
})();

/* Permission Capability options model (Figma 788:4348).
   Each row in the PM table maps to exactly one option-group card on
   the detail page. The card shows the group's full action pool with
   only the actions belonging to the clicked function pre-checked.

   GROUP_FOR_KEY assigns every catalog key to a single group so the
   detail page is deterministic and reproducible. POOL_BY_GROUP gives
   each group the same set of available actions across all of its
   keys (e.g., Roles can be View/Create/Edit/Delete/Assign permissions/
   Manage role functions for any iam_role_* row). ON_FOR_KEY lists the
   pre-checked actions for that specific key.

   This is the data model behind Tatiana's note that a permission
   capability is a reusable object: groups + actions are the system
   contract, the table row is just one current configuration of it. */
var PC_GROUP_FOR_KEY = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var code = PERMISSION_DEFINITIONS[i].code;
    var group = permissionGroupForCode(code);
    if (group) out[code] = group;
  }
  return out;
})();

var PC_POOL_BY_GROUP = (function () {
  /* Workbook groups get the exact action set the workbook defines for
     them. The admin-onboarding applications keep the capability
     surfaces they were spec'd with — they have no registered functions,
     so nothing here can conflict with a grant. */
  var out = {
    "Deal Types":         ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
    "Package Rules":      ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
    "Pricing Rules":      ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
    "Billing Periods":    ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
    "Invoice Dashboard":  ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
    "Revenue Summary":    ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
    "Revenue":            ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
    "Adjustments":        ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
    "Recognition Rules":  ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
    "Invoices":           ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
    "Invoice Line Items": ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
    "Sales Line Items":   ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
    "NCS Export":         ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"]
  };
  for (var group in WB_POOL_BY_GROUP) {
    if (!Object.prototype.hasOwnProperty.call(WB_POOL_BY_GROUP, group)) continue;
    out[group] = WB_POOL_BY_GROUP[group].slice();
  }
  return out;
})();

/* Pre-checked actions per function code. A workbook code is exactly one
   action on exactly one resource, so each capability pre-checks the one
   action it names — the group's remaining actions are the rest of the
   reusable surface it belongs to. */
var PC_ON_FOR_KEY = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    var code = PERMISSION_DEFINITIONS[i].code;
    out[code] = [permissionActionLabel(code)];
  }
  return out;
})();

/* Compose the option-group model for a function key. Always returns
   exactly one group (single permission = single capability surface).
   The caller renders the group card with its full action pool and
   the checked-state of each action driven by PC_ON_FOR_KEY. */
function permissionOptionsForKey(key) {
  var group = PC_GROUP_FOR_KEY[key] || "Capability";
  var pool  = PC_POOL_BY_GROUP[group] || ["View"];
  var on    = PC_ON_FOR_KEY[key] || [];
  return {
    group: group,
    actions: pool.map(function (label) {
      return { label: label, checked: on.indexOf(label) !== -1 };
    })
  };
}

/* Type taxonomy for the Permission Management catalog (Figma 770:20039).
   The Type column only supports two values:
     • "Default" — system-shipped permission. Ships with the IAM platform
       and cannot be modified or deleted by admins. The vast majority of
       functions in any IAM catalog are Default.
     • "Custom"  — customer-scoped or customer-authored. Either a base
       function that has been re-scoped (e.g., to a region/team) or a
       net-new function created by an admin.

   In production this flag would come from the function's lifecycle
   metadata (origin = "platform" vs origin = "tenant"). For the
   prototype, we derive it deterministically from the function key so
   renders are stable across reloads and QA snapshots are reproducible.

   Distribution: ~20% of keys are tagged Custom (every 5th key by hash
   bucket). This mirrors the realistic enterprise mix where most
   permissions ship with the platform and a smaller set is authored or
   re-scoped by the customer's IAM admins. */
function permissionTypeForKey(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return (hash % 5 === 0) ? "Custom" : "Default";
}

/* Human-readable name for a function code. The workbook already says
   what the code does — verb, resource, application — so the name is
   composed from the definition rather than transcribed into a second
   table that could disagree with it. `acp_order_approve` reads
   "Approve Order"; the two application-wide data-access codes read
   "View Sensitive Data Access" / "Edit Regional Data Access". */
var PERMISSION_NAME_SINGULAR = {
  "Orders": "Order", "Media Plans": "Media Plan", "Line Items": "Line Item",
  "Offerings": "Offering", "App Groups": "App Group", "Sales Packages": "Sales Package",
  "Targeting Rules": "Targeting Rule", "Targeting Restrictions": "Targeting Restriction",
  "Rate Cards": "Rate Card", "Opportunities": "Opportunity", "Users": "User"
};
function permissionNameForKey(key) {
  var def = PERMISSION_BY_CODE[key];
  if (!def) return key.split("_").map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(" ");
  var group = permissionGroupForCode(key);
  var noun = PERMISSION_NAME_SINGULAR[group] || group;
  return permissionActionLabel(key) + " " + noun;
}

/* Description shown in the Permission Management catalog. The Agent
   worksheet writes one per capability; the Core Planning sheet does
   not, so those rows state the grant itself — application, action,
   resource — rather than paraphrasing intent the workbook never
   expressed. Workbook Notes are carried separately (see
   `permissionNoteForKey`) because a note is context, not a grant. */
function permissionDescriptionForKey(key) {
  var def = PERMISSION_BY_CODE[key];
  if (!def) return "—";
  if (def.description) return def.description;
  var group = permissionGroupForCode(key);
  var noun = PERMISSION_NAME_SINGULAR[group] || group;
  var verb = permissionActionLabel(key).toLowerCase();
  if (def.resource === "(all)") {
    return verb.charAt(0).toUpperCase() + verb.slice(1) + " " + noun.toLowerCase() + " across " + appDisplayNameForToken(WB_APP_TOKEN[def.application]) + ".";
  }
  return verb.charAt(0).toUpperCase() + verb.slice(1) + " " + noun.toLowerCase() + " records in " + appDisplayNameForToken(WB_APP_TOKEN[def.application]) + ".";
}
function permissionNoteForKey(key) {
  var def = PERMISSION_BY_CODE[key];
  return (def && def.note) || "";
}
var PERMISSION_DESCRIPTIONS = (function () {
  var out = {};
  for (var i = 0; i < PERMISSION_DEFINITIONS.length; i++) {
    out[PERMISSION_DEFINITIONS[i].code] = permissionDescriptionForKey(PERMISSION_DEFINITIONS[i].code);
  }
  return out;
})();

/* Deterministic, plausible Last Updated timestamps for the catalog
   (Figma 770:20039 — Last Updated column shows full datetime, e.g.
   "1:30 pm, May 3 2026"). Hash-based so re-renders produce stable
   QA snapshots; stamps spread across 2026 calendar so the column
   never reads as a single repeated value.

   Default-type permissions skew older (system-shipped, rarely touched
   after release); Custom-type permissions skew fresher (admin-authored
   or recently re-scoped). Within each bucket, day/time are derived
   from the key's hash so the order is varied but reproducible. */
function permissionLastUpdatedForKey(key) {
  var type = permissionTypeForKey(key);
  var hash = 0;
  for (var i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;

  /* Default skews older: Jan-Apr. Custom skews fresher: Mar-Jun. */
  var monthOffset = type === "Custom" ? 2 : 0;
  var monthIdx = monthOffset + (hash % 4); /* 0..5 across the year */
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  var month = MONTHS[monthIdx];

  /* Day 1-28 (avoid month-end edge cases in display) */
  var day = 1 + ((hash >>> 3) % 28);

  /* Hour 7-19 (business hours) and minute on 5-min boundary */
  var hour24 = 7 + ((hash >>> 8) % 13);
  var minute = ((hash >>> 13) % 12) * 5;
  var ampm = hour24 < 12 ? "am" : "pm";
  var hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;
  var mm = minute < 10 ? "0" + minute : String(minute);

  return hour12 + ":" + mm + " " + ampm + ", " + month + " " + day + " 2026";
}

/* Role names that include this function code, for the Permission
   Management "Used in" hover tooltip (Figma 770:20039 + 2026-05-20 spec).

   Derived from the grants, with no curated overrides: the tooltip lists
   the roles the workbook actually grants the code to, and the count
   beside it is the length of that same list. The previous curated list
   named legacy roles that the workbook does not define. */
function permissionUsedInRoles(key) {
  /* Walk ROLE_FUNCTION_MAP. Stop at the first hit per role so each
     role appears at most once, even if a function key were duplicated
     across an app's slice (it isn't today, but be defensive). */
  var names = [];
  for (var roleId in ROLE_FUNCTION_MAP) {
    if (!Object.prototype.hasOwnProperty.call(ROLE_FUNCTION_MAP, roleId)) continue;
    var apps = ROLE_FUNCTION_MAP[roleId];
    var found = false;
    for (var appName in apps) {
      if (!Object.prototype.hasOwnProperty.call(apps, appName)) continue;
      var keys = apps[appName] || [];
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) { found = true; break; }
      }
      if (found) break;
    }
    if (!found) continue;
    for (var ri = 0; ri < ROLES_PERMISSIONS_DATA.length; ri++) {
      if (ROLES_PERMISSIONS_DATA[ri].id === roleId) {
        names.push(ROLES_PERMISSIONS_DATA[ri].role);
        break;
      }
    }
  }
  return names;
}

/* Count of roles in ROLE_FUNCTION_MAP that include this function key. */
function permissionUsedInCount(key) {
  var count = 0;
  for (var roleId in ROLE_FUNCTION_MAP) {
    if (!Object.prototype.hasOwnProperty.call(ROLE_FUNCTION_MAP, roleId)) continue;
    var apps = ROLE_FUNCTION_MAP[roleId];
    for (var appName in apps) {
      if (!Object.prototype.hasOwnProperty.call(apps, appName)) continue;
      var keys = apps[appName] || [];
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) { count++; break; }
      }
    }
  }
  return count;
}

/* Materialize the Permission Management catalog once at startup.
   Sorted by app then by key for stable initial display order. */
function buildPermissionFunctionsCatalog() {
  var seen = {};
  var keys = [];
  for (var app in FUNCTION_REGISTRY) {
    if (!Object.prototype.hasOwnProperty.call(FUNCTION_REGISTRY, app)) continue;
    var list = FUNCTION_REGISTRY[app];
    for (var i = 0; i < list.length; i++) {
      if (!seen[list[i]]) { seen[list[i]] = 1; keys.push(list[i]); }
    }
  }
  keys.sort();
  var rows = [];
  for (var k = 0; k < keys.length; k++) {
    var key = keys[k];
    rows.push({
      id: "p" + String(k + 1).padStart(3, "0"),
      key: key,
      name: permissionNameForKey(key),
      app: appForFunctionKey(key),
      description: PERMISSION_DESCRIPTIONS[key] || "—",
      type: permissionTypeForKey(key),
      usedIn: permissionUsedInCount(key),
      lastUpdated: permissionLastUpdatedForKey(key)
    });
  }
  return rows;
}

var PERMISSION_FUNCTIONS_DATA = buildPermissionFunctionsCatalog();

/* ─── V3 Permission Catalog (Permissions tab) ─────────────────────────
   Read-only catalog of registered permission functions across Atlas
   applications. The Permissions tab in V3 was reframed from an editable
   "Permission Management" workflow into a future-facing catalog: rows
   are not editable, no functions can be created/deleted from this page,
   and assignment is handled exclusively through the Roles tab.

   The catalog is a static, hand-curated seed (not derived from
   FUNCTION_REGISTRY) — V3 needs control over the exact set of rows
   shown. Most rows are Active; a few are Inactive so the table
   demonstrates both EDL chip states.

   Row shape:
     id           — stable row identity (diagnostic only; no drawer)
     key          — `app.resource.action` function key (e.g. planning.order.view)
     name         — Display name shown in the table
     app          — Application label (Core Planning, IAM, ICM, Disney Ads Agent)
     resource     — Resource the action targets (Orders, Roles, Users, …)
     action       — Action verb (View, Create, Update, Delete, Assign, …)
     usedIn       — Numeric count of roles using this function; null = "Not assigned"
     status       — "Active" or "Inactive"
                    (Frances QA 2026-05-29 — Future state removed;
                    chips now map to EDL Component Library variants
                    Demoted=Gray (Active) and Error=Red (Inactive))
*/
/* Standalone Permission Catalog data, filter option lists, table state,
   and search field config were REMOVED 2026-06-07 along with the
   Permissions / Functions tab. The Edit Role permission matrix uses a
   separate model layer (`PM_TOKEN_TO_CR_APP`, `pmGroupsForAppToken`,
   `derivePMResourcesForApp`, `FUNCTION_REGISTRY`, `PC_GROUP_FOR_KEY`,
   `PC_POOL_BY_GROUP`) that is intentionally KEPT — those names share
   the `pm/PC` prefix but they are not the standalone tab. */

/* The Roles table. One record per canonical workbook role, built from
   CANONICAL_ROLE_DEFINITIONS so the name, description and per-
   application function counts can only ever be the workbook's.

   The eight record IDs are the ones these rows already had, kept so
   deep links, stored references and selection state survive the
   migration (rather than deleting the records and minting new IDs).
   `createdBy` / `createDate` are each record's existing values: the
   workbook is authoritative for what a role grants, not for who
   authored the record or when. */
var ROLES_PERMISSIONS_DATA = CANONICAL_ROLE_DEFINITIONS.map(function (role) {
  return {
    id: role.id,
    role: role.name,
    description: role.description,
    status: "Standard",
    createdBy: role.createdBy,
    createDate: role.createDate,
    functions: buildRoleFunctions(role.id)
  };
});

/* Shared Atlas global left nav — Finance / Rate Card `.vnav` shell.
   Pin, hover, focus, tooltip, and collapse behavior are the same as
   Finance. Selection is route-driven: this surface is the IAM module,
   so Admin stays active on every IAM page (Users / Roles / Teams and
   their Add/Edit flows). Other destinations are shared-shell
   placeholders and never become selected from a click. */
(function setupSharedAtlasVnav() {
  var vnavEl = document.querySelector(".vnav");
  if (!vnavEl) return;

  var VNAV_PIN_KEY = "iam_v41_vnav_pinned";
  var VNAV_ROUTE_KEY = "admin";
  var ADS_TT_GAP = 8;
  var ADS_TT_OPEN_DELAY = 300;
  var adsTooltipOpenTimer = 0;
  var adsTooltipPendingTrigger = null;
  var adsTooltipActiveTrigger = null;

  function resolveVnavRouteKey() {
    return VNAV_ROUTE_KEY;
  }

  function syncVnavTooltips(pinned) {
    document.querySelectorAll(".vnav__link").forEach(function (link) {
      var tip = link.getAttribute("aria-label") || "";
      if (pinned) link.removeAttribute("data-tooltip");
      else if (tip) link.setAttribute("data-tooltip", tip);
    });
  }

  function setVnavActive(route) {
    var next = route || resolveVnavRouteKey();
    document.querySelectorAll(".vnav__item").forEach(function (item) {
      var isActive = item.getAttribute("data-route") === next;
      item.classList.toggle("vnav__item--active", isActive);
      var link = item.querySelector(".vnav__link");
      if (!link) return;
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function readStoredVnavPinned() {
    try { return localStorage.getItem(VNAV_PIN_KEY) === "1"; }
    catch (_) { return false; }
  }

  function adsTooltipHide() {
    if (adsTooltipOpenTimer) {
      clearTimeout(adsTooltipOpenTimer);
      adsTooltipOpenTimer = 0;
    }
    adsTooltipPendingTrigger = null;
    adsTooltipActiveTrigger = null;
    var tip = document.querySelector("[data-ads-tooltip]");
    if (!tip) return;
    tip.removeAttribute("data-ads-tt-visible");
    setTimeout(function () {
      if (tip.getAttribute("data-ads-tt-visible") !== "true") {
        tip.hidden = true;
        tip.setAttribute("aria-hidden", "true");
      }
    }, 130);
  }

  function adsTooltipShow(trigger) {
    var tip = document.querySelector("[data-ads-tooltip]");
    if (!tip || !trigger) return;
    var label = trigger.getAttribute("data-tooltip");
    if (!label) return;
    var lbl = tip.querySelector("[data-ads-tooltip-label]");
    if (lbl) lbl.textContent = label;
    tip.hidden = false;
    tip.setAttribute("aria-hidden", "false");
    tip.style.visibility = "hidden";
    tip.style.opacity = "0";
    tip.removeAttribute("data-ads-tt-visible");
    tip.setAttribute("data-ads-tt-placement", "top");
    var tipRect = tip.getBoundingClientRect();
    var tw = tipRect.width;
    var th = tipRect.height;
    var tRect = trigger.getBoundingClientRect();
    var vw = document.documentElement.clientWidth || window.innerWidth;
    var gutter = 8;
    var placement = "top";
    var top = tRect.top - th - ADS_TT_GAP;
    if (top < gutter) {
      placement = "bottom";
      top = tRect.bottom + ADS_TT_GAP;
    }
    var triggerCenterX = tRect.left + tRect.width / 2;
    var left = triggerCenterX - tw / 2;
    left = Math.max(gutter, Math.min(left, vw - tw - gutter));
    tip.style.top = Math.round(top) + "px";
    tip.style.left = Math.round(left) + "px";
    tip.setAttribute("data-ads-tt-placement", placement);
    var arrow = tip.querySelector(".ads-tt__arrow");
    if (arrow) {
      var arrowOffset = triggerCenterX - left;
      arrowOffset = Math.max(8, Math.min(arrowOffset, tw - 8));
      arrow.style.left = Math.round(arrowOffset) + "px";
      arrow.style.marginLeft = "-4px";
    }
    tip.style.visibility = "";
    tip.style.opacity = "";
    requestAnimationFrame(function () {
      tip.setAttribute("data-ads-tt-visible", "true");
    });
    adsTooltipActiveTrigger = trigger;
  }

  function adsTooltipScheduleShow(trigger) {
    if (!trigger) return;
    if (adsTooltipOpenTimer) clearTimeout(adsTooltipOpenTimer);
    if (adsTooltipActiveTrigger && adsTooltipActiveTrigger !== trigger) {
      adsTooltipHide();
    }
    adsTooltipPendingTrigger = trigger;
    adsTooltipOpenTimer = setTimeout(function () {
      adsTooltipOpenTimer = 0;
      if (adsTooltipPendingTrigger !== trigger || !document.contains(trigger)) return;
      adsTooltipPendingTrigger = null;
      adsTooltipShow(trigger);
    }, ADS_TT_OPEN_DELAY);
  }

  function vnavTooltipTrigger(target) {
    if (!target || !target.closest) return null;
    var el = target.closest(".vnav [data-tooltip]");
    return el && el.getAttribute("data-tooltip") ? el : null;
  }

  function setVnavPinned(pinned) {
    var hoverZone = document.querySelector(".vnav__hover-zone");
    var toggleBtn = document.querySelector('.vnav__close, [data-action="vnav-toggle"]');
    vnavEl.classList.toggle("vnav--pinned", pinned);
    if (pinned) document.body.setAttribute("data-vnav-pinned", "1");
    else document.body.removeAttribute("data-vnav-pinned");
    document.documentElement.setAttribute("data-sidebar-collapsed", pinned ? "false" : "true");
    if (hoverZone) hoverZone.setAttribute("hidden", "");
    vnavEl.classList.remove("vnav--hovered");
    if (toggleBtn) {
      var label = pinned ? "Collapse navigation" : "Expand navigation";
      toggleBtn.setAttribute("aria-label", label);
      toggleBtn.setAttribute("aria-expanded", pinned ? "true" : "false");
      if (pinned) toggleBtn.setAttribute("data-tooltip", label);
      else toggleBtn.removeAttribute("data-tooltip");
    }
    syncVnavTooltips(pinned);
    adsTooltipHide();
    try { localStorage.setItem(VNAV_PIN_KEY, pinned ? "1" : "0"); } catch (_) {}
  }

  window.IamShell = window.IamShell || {};
  window.IamShell.setVnavPinned = setVnavPinned;
  window.IamShell.setVnavActive = setVnavActive;
  window.IamShell.readVnavPinned = readStoredVnavPinned;

  setVnavPinned(readStoredVnavPinned());
  setVnavActive(resolveVnavRouteKey());

  document.addEventListener("click", function (event) {
    var t = event.target instanceof Element ? event.target : null;
    if (!t) return;
    var vnavLink = t.closest(".vnav__link");
    if (vnavLink) {
      event.preventDefault();
      setVnavActive(resolveVnavRouteKey());
      return;
    }
    var actionBtn = t.closest("[data-action]");
    var action = actionBtn ? actionBtn.getAttribute("data-action") : null;
    if (action === "vnav-toggle" || action === "vnav-close") {
      event.preventDefault();
      var nextPinned = !vnavEl.classList.contains("vnav--pinned");
      setVnavPinned(nextPinned);
      var focusTarget = nextPinned
        ? document.querySelector(".vnav__close")
        : document.querySelector(".vnav__expand-target");
      if (focusTarget && focusTarget.focus) focusTarget.focus();
      return;
    }
    if (action === "vnav-expand") {
      event.preventDefault();
      setVnavPinned(true);
      var closeBtn = document.querySelector(".vnav__close");
      if (closeBtn && closeBtn.focus) closeBtn.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== " " && event.key !== "Spacebar") return;
    var t = event.target instanceof Element ? event.target : null;
    var vnavLink = t && t.closest(".vnav__link");
    if (!vnavLink) return;
    event.preventDefault();
    vnavLink.click();
  });

  document.addEventListener("mouseover", function (event) {
    var trigger = vnavTooltipTrigger(event.target);
    if (trigger) adsTooltipScheduleShow(trigger);
  });
  document.addEventListener("mouseout", function (event) {
    var from = vnavTooltipTrigger(event.target);
    var to = vnavTooltipTrigger(event.relatedTarget);
    if (from && from !== to) adsTooltipHide();
  });
  document.addEventListener("focusin", function (event) {
    var trigger = vnavTooltipTrigger(event.target);
    if (trigger) adsTooltipScheduleShow(trigger);
  });
  document.addEventListener("focusout", function (event) {
    var from = vnavTooltipTrigger(event.target);
    var to = vnavTooltipTrigger(event.relatedTarget);
    if (from && from !== to) adsTooltipHide();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") adsTooltipHide();
  });
  window.addEventListener("scroll", adsTooltipHide, true);
  window.addEventListener("resize", adsTooltipHide);
})();
var RP_ORIGINAL_ORDER = ROLES_PERMISSIONS_DATA.slice();

/* The thirteen roles the Roles table held before the workbook migration.
   None of them appears in the workbook, so none survives as a role — but
   a stored reference to one should resolve rather than orphan, so each
   maps to a canonical role by the same reproducible rule used to assign
   users (see `canonicalRoleIndexFor`). These are fixture-only continuity
   mappings, not a statement that the two roles are equivalent; the
   reconciliation is documented in ROLE-PERMISSION-WORKBOOK.md. */
var LEGACY_ROLE_RECORDS = [
  { id: "r001", name: "Atlas Admin" },
  { id: "r002", name: "Core Planning Admin" },
  { id: "r003", name: "Operations Admin" },
  { id: "r004", name: "Planner" },
  { id: "r005", name: "Planning Specialist" },
  { id: "r006", name: "Planning Manager" },
  { id: "r013", name: "Campaign Planner" },
  { id: "r014", name: "Ad Operations Specialist" },
  { id: "r008", name: "Read-Only Viewer" },
  { id: "r009", name: "ICM Admin" },
  { id: "r010", name: "TOM Admin" },
  { id: "r015", name: "Agency Admin" },
  { id: "r016", name: "External Partner Admin" }
];

/* djb2-xor. Any stable identifier in, the same canonical role out, on
   every run, in any test order, at any breakpoint, on every reload —
   the assignment is arbitrary but never random. */
function stableIdentifierHash(value) {
  var hash = 5381;
  var s = String(value == null ? "" : value);
  for (var i = 0; i < s.length; i++) {
    hash = ((hash * 33) ^ s.charCodeAt(i)) >>> 0;
  }
  return hash;
}
function canonicalRoleIndexFor(identifier) {
  return stableIdentifierHash(identifier) % CANONICAL_ROLE_DEFINITIONS.length;
}
function canonicalRoleNameFor(identifier) {
  return CANONICAL_ROLE_DEFINITIONS[canonicalRoleIndexFor(identifier)].name;
}

var LEGACY_ROLE_ALIASES = (function () {
  var canonicalIds = {};
  for (var c = 0; c < CANONICAL_ROLE_DEFINITIONS.length; c++) {
    canonicalIds[CANONICAL_ROLE_DEFINITIONS[c].id] = true;
  }
  var out = {};
  for (var i = 0; i < LEGACY_ROLE_RECORDS.length; i++) {
    var legacy = LEGACY_ROLE_RECORDS[i];
    /* Keyed on the name, because eight of these ids were re-used by a
       canonical role and so no longer identify the legacy record. Those
       ids resolve on their own and must not be aliased; only the five
       ids no canonical role claimed need an entry here. */
    var canonical = CANONICAL_ROLE_DEFINITIONS[canonicalRoleIndexFor(legacy.name)];
    if (!canonicalIds[legacy.id]) out[legacy.id] = canonical.id;
    out[legacy.name] = canonical.id;
  }
  return out;
})();

/** Canonical IAM role names — single source with `ROLES_PERMISSIONS_DATA` (R&P table, filters, Add User). */
function getIAMRoleNamesInTableOrder() {
  var names = [];
  for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
    names.push(ROLES_PERMISSIONS_DATA[i].role);
  }
  return names;
}

/** Users filter → Role combo options (same order as R&P table). */
function buildUserRoleFilterOptions() {
  var opts = [];
  var names = getIAMRoleNamesInTableOrder();
  for (var j = 0; j < names.length; j++) {
    opts.push({ value: names[j], label: names[j] });
  }
  return opts;
}

var rpCurrentPage = 1;
var rpPageSize = 10;
var rpSortKey = null;
var rpSortDir = null;
var rpSearchTerm = "";

var INITIALS_COLORS = [
  "#3611C8", "#1EA1C8", "#610BA8", "#004ACF", "#059D6D",
  "#C25100", "#A00032", "#BA06B1", "#776FD9", "#3A4652"
];

function esc(s) {
  var d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

/* ═══ EDL TOAST ═══
   Minimal runtime matching the canonical ADS Toast component (Figma
   node 70:62). Renders a titled notification with icon + body into
   #edlToastContainer, auto-dismisses after a readable delay, and
   supports manual dismiss via the close button. Four types ship:
   informative, success, warning, error.
   Icon glyphs are the exact ADS/Phosphor paths exported from the four
   Toast variant instances in node 70:62 (WarningCircle, Warning,
   CheckCircle, Info — each a filled shape, not an approximation), at
   their native design size (19.5×19.5, or 21×18.75 for the warning
   triangle) so the `.edl-toast-icon` flex wrapper reproduces the exact
   inset Figma shows within its 24×24 slot. `fill="currentColor"` lets
   CSS drive the per-variant tint (see the `--iam-ads-toast-text-*`
   rules in styles.css) instead of baking a color into the markup. */
var EDL_TOAST_ICONS = {
  informative:
    '<svg width="19.5" height="19.5" viewBox="0 0 19.5 19.5" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71452 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM9.75 18C8.11831 18 6.52326 17.5161 5.16655 16.6096C3.80984 15.7031 2.75242 14.4146 2.128 12.9071C1.50358 11.3996 1.3402 9.74085 1.65853 8.14051C1.97685 6.54016 2.76259 5.07015 3.91637 3.91637C5.07016 2.76259 6.54017 1.97685 8.14051 1.65852C9.74085 1.34019 11.3997 1.50357 12.9071 2.12799C14.4146 2.75242 15.7031 3.80984 16.6096 5.16655C17.5162 6.52325 18 8.1183 18 9.75C17.9975 11.9373 17.1275 14.0343 15.5809 15.5809C14.0343 17.1275 11.9373 17.9975 9.75 18ZM11.25 14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15C10.1022 15 9.72065 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V9.75C8.80109 9.75 8.61033 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61033 8.32902 8.80109 8.25 9 8.25C9.39783 8.25 9.77936 8.40804 10.0607 8.68934C10.342 8.97064 10.5 9.35218 10.5 9.75V13.5C10.6989 13.5 10.8897 13.579 11.0303 13.7197C11.171 13.8603 11.25 14.0511 11.25 14.25ZM8.25 5.625C8.25 5.4025 8.31598 5.18499 8.4396 4.99998C8.56322 4.81498 8.73892 4.67078 8.94449 4.58564C9.15005 4.50049 9.37625 4.47821 9.59448 4.52162C9.81271 4.56502 10.0132 4.67217 10.1705 4.8295C10.3278 4.98684 10.435 5.18729 10.4784 5.40552C10.5218 5.62375 10.4995 5.84995 10.4144 6.05552C10.3292 6.26109 10.185 6.43679 10 6.5604C9.81502 6.68402 9.59751 6.75 9.375 6.75C9.07664 6.75 8.79049 6.63147 8.57951 6.4205C8.36853 6.20952 8.25 5.92337 8.25 5.625Z"/></svg>',
  success:
    '<svg width="19.5" height="19.5" viewBox="0 0 19.5 19.5" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.0306 6.96937C14.1004 7.03903 14.1557 7.12175 14.1934 7.21279C14.2312 7.30384 14.2506 7.40144 14.2506 7.5C14.2506 7.59856 14.2312 7.69616 14.1934 7.78721C14.1557 7.87825 14.1004 7.96097 14.0306 8.03063L8.78063 13.2806C8.71097 13.3504 8.62826 13.4057 8.53721 13.4434C8.44616 13.4812 8.34857 13.5006 8.25 13.5006C8.15144 13.5006 8.05385 13.4812 7.9628 13.4434C7.87175 13.4057 7.78903 13.3504 7.71938 13.2806L5.46938 11.0306C5.32865 10.8899 5.24959 10.699 5.24959 10.5C5.24959 10.301 5.32865 10.1101 5.46938 9.96937C5.61011 9.82864 5.80098 9.74958 6 9.74958C6.19903 9.74958 6.3899 9.82864 6.53063 9.96937L8.25 11.6897L12.9694 6.96937C13.039 6.89964 13.1218 6.84432 13.2128 6.80658C13.3038 6.76884 13.4014 6.74941 13.5 6.74941C13.5986 6.74941 13.6962 6.76884 13.7872 6.80658C13.8783 6.84432 13.961 6.89964 14.0306 6.96937ZM19.5 9.75C19.5 11.6784 18.9282 13.5634 17.8568 15.1668C16.7855 16.7702 15.2627 18.0199 13.4812 18.7578C11.6996 19.4958 9.73919 19.6889 7.84787 19.3127C5.95656 18.9365 4.21928 18.0079 2.85571 16.6443C1.49215 15.2807 0.563554 13.5434 0.187348 11.6521C-0.188858 9.76082 0.00422452 7.80042 0.742179 6.01884C1.48013 4.23726 2.72982 2.71452 4.33319 1.64317C5.93657 0.571828 7.82164 0 9.75 0C12.335 0.00272983 14.8134 1.03084 16.6413 2.85872C18.4692 4.68661 19.4973 7.16498 19.5 9.75ZM18 9.75C18 8.1183 17.5162 6.52325 16.6096 5.16655C15.7031 3.80984 14.4146 2.75242 12.9071 2.12799C11.3997 1.50357 9.74085 1.34019 8.14051 1.65852C6.54017 1.97685 5.07016 2.76259 3.91637 3.91637C2.76259 5.07015 1.97685 6.54016 1.65853 8.14051C1.3402 9.74085 1.50358 11.3996 2.128 12.9071C2.75242 14.4146 3.80984 15.7031 5.16655 16.6096C6.52326 17.5161 8.11831 18 9.75 18C11.9373 17.9975 14.0343 17.1275 15.5809 15.5809C17.1275 14.0343 17.9975 11.9373 18 9.75Z"/></svg>',
  warning:
    '<svg width="21" height="18.75" viewBox="0 0 21.0011 18.7502" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.701 15.3835L12.5026 1.14569C12.2977 0.796866 12.0052 0.507642 11.6541 0.306681C11.303 0.10572 10.9055 0 10.501 0C10.0965 0 9.69896 0.10572 9.34787 0.306681C8.99679 0.507642 8.70431 0.796866 8.49944 1.14569L0.301006 15.3835C0.103883 15.7209 0 16.1046 0 16.4954C0 16.8861 0.103883 17.2699 0.301006 17.6072C0.503253 17.9582 0.795228 18.249 1.14697 18.4498C1.49871 18.6506 1.89755 18.7543 2.30257 18.7501H18.6994C19.1041 18.7539 19.5026 18.6501 19.854 18.4493C20.2054 18.2485 20.497 17.9579 20.6991 17.6072C20.8965 17.27 21.0007 16.8864 21.0011 16.4956C21.0014 16.1049 20.8978 15.7211 20.701 15.3835ZM19.4007 16.8563C19.3292 16.9782 19.2266 17.0789 19.1034 17.1481C18.9802 17.2173 18.8407 17.2525 18.6994 17.2501H2.30257C2.16127 17.2525 2.02185 17.2173 1.89863 17.1481C1.7754 17.0789 1.67279 16.9782 1.60132 16.8563C1.53658 16.7467 1.50243 16.6217 1.50243 16.4944C1.50243 16.3671 1.53658 16.2422 1.60132 16.1326L9.79976 1.89475C9.87267 1.77341 9.97575 1.67301 10.099 1.6033C10.2222 1.5336 10.3613 1.49696 10.5029 1.49696C10.6444 1.49696 10.7836 1.5336 10.9068 1.6033C11.03 1.67301 11.1331 1.77341 11.206 1.89475L19.4044 16.1326C19.4686 16.2425 19.5021 16.3676 19.5015 16.4949C19.5008 16.6222 19.466 16.747 19.4007 16.8563ZM9.75101 11.2501V7.50006C9.75101 7.30115 9.83002 7.11038 9.97068 6.96973C10.1113 6.82908 10.3021 6.75006 10.501 6.75006C10.6999 6.75006 10.8907 6.82908 11.0313 6.96973C11.172 7.11038 11.251 7.30115 11.251 7.50006V11.2501C11.251 11.449 11.172 11.6397 11.0313 11.7804C10.8907 11.921 10.6999 12.0001 10.501 12.0001C10.3021 12.0001 10.1113 11.921 9.97068 11.7804C9.83002 11.6397 9.75101 11.449 9.75101 11.2501ZM11.626 14.6251C11.626 14.8476 11.56 15.0651 11.4364 15.2501C11.3128 15.4351 11.1371 15.5793 10.9315 15.6644C10.726 15.7496 10.4998 15.7719 10.2815 15.7284C10.0633 15.685 9.86284 15.5779 9.70551 15.4206C9.54818 15.2632 9.44103 15.0628 9.39762 14.8445C9.35421 14.6263 9.37649 14.4001 9.46164 14.1945C9.54679 13.989 9.69098 13.8133 9.87599 13.6897C10.061 13.566 10.2785 13.5001 10.501 13.5001C10.7994 13.5001 11.0855 13.6186 11.2965 13.8296C11.5075 14.0405 11.626 14.3267 11.626 14.6251Z"/></svg>',
  error:
    '<svg width="19.5" height="19.5" viewBox="0 0 19.5 19.5" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71452 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM9.75 18C8.11831 18 6.52326 17.5161 5.16655 16.6096C3.80984 15.7031 2.75242 14.4146 2.128 12.9071C1.50358 11.3996 1.3402 9.74085 1.65853 8.14051C1.97685 6.54016 2.76259 5.07015 3.91637 3.91637C5.07016 2.76259 6.54017 1.97685 8.14051 1.65852C9.74085 1.34019 11.3997 1.50357 12.9071 2.12799C14.4146 2.75242 15.7031 3.80984 16.6096 5.16655C17.5162 6.52325 18 8.1183 18 9.75C17.9975 11.9373 17.1275 14.0343 15.5809 15.5809C14.0343 17.1275 11.9373 17.9975 9.75 18ZM9 10.5V5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36033 4.57902 9.55109 4.5 9.75 4.5C9.94892 4.5 10.1397 4.57902 10.2803 4.71967C10.421 4.86032 10.5 5.05109 10.5 5.25V10.5C10.5 10.6989 10.421 10.8897 10.2803 11.0303C10.1397 11.171 9.94892 11.25 9.75 11.25C9.55109 11.25 9.36033 11.171 9.21967 11.0303C9.07902 10.8897 9 10.6989 9 10.5ZM10.875 13.875C10.875 14.0975 10.809 14.315 10.6854 14.5C10.5618 14.685 10.3861 14.8292 10.1805 14.9144C9.97496 14.9995 9.74876 15.0218 9.53053 14.9784C9.3123 14.935 9.11184 14.8278 8.95451 14.6705C8.79717 14.5132 8.69003 14.3127 8.64662 14.0945C8.60321 13.8762 8.62549 13.65 8.71064 13.4445C8.79579 13.2389 8.93998 13.0632 9.12499 12.9396C9.30999 12.816 9.5275 12.75 9.75 12.75C10.0484 12.75 10.3345 12.8685 10.5455 13.0795C10.7565 13.2905 10.875 13.5766 10.875 13.875Z"/></svg>'
};
/* Close glyph — exact 10×10 ADS X path (Figma 70:62's dismiss icon),
   rendered at native size inside the 32×32/16px-padded hit target so
   the surrounding whitespace reproduces Figma's 16px icon box exactly.
   `currentColor` picks up the per-variant tint set in styles.css. */
var EDL_TOAST_CLOSE =
  '<svg width="10" height="10" viewBox="0 0 10.0006 10.0006" fill="none" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9.85403 9.14653C9.90048 9.19298 9.93733 9.24813 9.96247 9.30883C9.98762 9.36953 10.0006 9.43458 10.0006 9.50028C10.0006 9.56598 9.98762 9.63103 9.96247 9.69173C9.93733 9.75242 9.90048 9.80757 9.85403 9.85403C9.80757 9.90048 9.75242 9.93733 9.69173 9.96247C9.63103 9.98762 9.56598 10.0006 9.50028 10.0006C9.43458 10.0006 9.36953 9.98762 9.30883 9.96247C9.24813 9.93733 9.19298 9.90048 9.14653 9.85403L5.00028 5.70715L0.854028 9.85403C0.760208 9.94785 0.63296 10.0006 0.500278 10.0006C0.367596 10.0006 0.240348 9.94785 0.146528 9.85403C0.0527077 9.76021 2.61548e-09 9.63296 0 9.50028C-2.61548e-09 9.3676 0.0527077 9.24035 0.146528 9.14653L4.2934 5.00028L0.146528 0.854028C0.0527077 0.760208 0 0.63296 0 0.500278C0 0.367596 0.0527077 0.240348 0.146528 0.146528C0.240348 0.0527077 0.367596 0 0.500278 0C0.63296 0 0.760208 0.0527077 0.854028 0.146528L5.00028 4.2934L9.14653 0.146528C9.24035 0.0527077 9.3676 -2.61548e-09 9.50028 0C9.63296 2.61548e-09 9.76021 0.0527077 9.85403 0.146528C9.94785 0.240348 10.0006 0.367596 10.0006 0.500278C10.0006 0.63296 9.94785 0.760208 9.85403 0.854028L5.70715 5.00028L9.85403 9.14653Z"/></svg>';

function showEdlToast(opts) {
  var container = document.getElementById("edlToastContainer");
  if (!container) return;
  var type = (opts && opts.type) || "informative";
  if (!EDL_TOAST_ICONS[type]) type = "informative";
  var title = (opts && opts.title) || "";
  var bodyHtml = (opts && opts.bodyHtml) || esc((opts && opts.body) || "");
  var duration = (opts && typeof opts.duration === "number") ? opts.duration : 6000;
  /* Errors and warnings interrupt (assertive); success/informative
     updates are ambient (polite) — ADS Toast leaves this to the
     consuming app, this mirrors the existing V3 EDL toast behavior
     unchanged. Only the container is a live region (see the
     `#edlToastContainer` comment in index.html): the toast node itself
     carries no separate `aria-live`, so a screen reader announces the
     insertion exactly once instead of double-announcing from a nested
     live region. */
  var liveRole = (type === "error" || type === "warning") ? "alert" : "status";

  /* Anatomy matches the canonical ADS Toast (Figma 70:62): a single
     row of [status icon] [title + message, stacked] [close], not the
     older EDL "icon+title header, then indented body" split. The
     message paragraph is only rendered when bodyHtml is non-empty, so
     a title-only toast doesn't reserve empty space or an orphaned gap. */
  var toast = document.createElement("div");
  toast.className = "edl-toast edl-toast--" + type;
  toast.setAttribute("role", liveRole);
  toast.innerHTML =
    '<div class="edl-toast-icon" aria-hidden="true">' + EDL_TOAST_ICONS[type] + '</div>' +
    '<div class="edl-toast-content">' +
      '<p class="edl-toast-title">' + esc(title) + '</p>' +
      (bodyHtml ? '<p class="edl-toast-body">' + bodyHtml + '</p>' : '') +
    '</div>' +
    '<button type="button" class="edl-toast-close" aria-label="Dismiss notification">' + EDL_TOAST_CLOSE + '</button>';

  var timer = null;
  var remaining = duration;
  var timerStartedAt = 0;
  function clearAutoDismiss() {
    if (timer) { clearTimeout(timer); timer = null; }
  }
  function startAutoDismiss(ms) {
    clearAutoDismiss();
    if (ms > 0) {
      timerStartedAt = Date.now();
      timer = setTimeout(dismiss, ms);
    }
  }
  function dismiss() {
    if (toast.classList.contains("is-leaving")) return;
    toast.classList.add("is-leaving");
    clearAutoDismiss();
    /* Exit animation must finish before removal (see .edl-toast.is-leaving
       duration in styles.css) — 180ms covers the animated case; reduced-
       motion strips the animation but the same timeout still applies so
       the removal timing (and any caller awaiting `.dismiss()`) stays
       consistent either way. */
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 180);
  }
  /* Timing Adjustable: hovering or keyboard-focusing the toast pauses
     the auto-dismiss countdown (WCAG 2.2.1 pattern shared by ADS) so a
     reader isn't racing the clock — the remaining time resumes, it
     does not restart from the full duration, when the pointer leaves
     or focus moves elsewhere. Manual dismiss (the close button) and
     duration<=0 (persistent toasts) are unaffected. */
  function pauseAutoDismiss() {
    if (!timer) return;
    remaining -= (Date.now() - timerStartedAt);
    clearAutoDismiss();
  }
  function resumeAutoDismiss() {
    if (toast.classList.contains("is-leaving")) return;
    if (timer || duration <= 0) return;
    if (toast.matches(":hover") || toast.contains(document.activeElement)) return;
    startAutoDismiss(remaining > 0 ? remaining : 0);
  }
  toast.addEventListener("mouseenter", pauseAutoDismiss);
  toast.addEventListener("mouseleave", resumeAutoDismiss);
  toast.addEventListener("focusin", pauseAutoDismiss);
  toast.addEventListener("focusout", resumeAutoDismiss);
  toast.querySelector(".edl-toast-close").addEventListener("click", dismiss);
  startAutoDismiss(duration);

  container.appendChild(toast);
  return { dismiss: dismiss };
}

function getInitials(name) {
  var parts = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, "").trim().split(/\s+/);
  var first = parts[0] ? parts[0][0] : "";
  var last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function getInitialsColor(name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  return INITIALS_COLORS[Math.abs(hash) % INITIALS_COLORS.length];
}

function renderAvatarHtml(user, forceInitials) {
  if (forceInitials || !user.avatar) {
    return '<div class="name-avatar">' +
      '<div class="avatar-initials" aria-label="' + esc(user.name) + '">' +
        esc(getInitials(user.name)) +
      '</div>' +
      '</div>';
  }
  return '<div class="name-avatar">' +
    '<img src="' + esc(user.avatar) + '" alt="' + esc(user.name) + '">' +
    '</div>';
}

/** In-memory-only users created via Add User (`u_local_*` ids) — always show photo avatar. */
function isSessionAddedUser(user) {
  return !!(user && typeof user.id === "string" && user.id.indexOf("u_local_") === 0);
}

function hasActiveFilters() {
  return searchTerm || filters.name || filters.email || filters.role ||
    filters.status || filters.team || filters.title || filters.region;
}

function getFilteredData() {
  var result = DATA;
  if (filters.name) {
    var qn = filters.name.toLowerCase();
    result = result.filter(function (r) { return r.name.toLowerCase().indexOf(qn) !== -1; });
  }
  if (filters.email) {
    var qe = filters.email.toLowerCase();
    result = result.filter(function (r) { return r.email.toLowerCase().indexOf(qe) !== -1; });
  }
  if (filters.role) {
    var fr = filters.role;
    result = result.filter(function (r) {
      for (var i = 0; i < r.roles.length; i++) { if (r.roles[i] === fr) return true; }
      return false;
    });
  }
  if (filters.status) {
    var fs = filters.status;
    result = result.filter(function (r) { return r.status === fs; });
  }
  if (filters.team) {
    var qt = filters.team.toLowerCase();
    result = result.filter(function (r) { return r.team.toLowerCase().indexOf(qt) !== -1; });
  }
  if (filters.title) {
    var qc = filters.title.toLowerCase();
    result = result.filter(function (r) { return r.title.toLowerCase().indexOf(qc) !== -1; });
  }
  if (filters.region) {
    var rg = filters.region;
    result = result.filter(function (r) { return r.region === rg; });
  }
  if (searchTerm) {
    var q = searchTerm.toLowerCase();
    result = result.filter(function (row) {
      for (var i = 0; i < SEARCH_FIELDS.length; i++) {
        if ((row[SEARCH_FIELDS[i]] || "").toLowerCase().indexOf(q) !== -1) return true;
      }
      for (var r = 0; r < row.roles.length; r++) {
        if (row.roles[r].toLowerCase().indexOf(q) !== -1) return true;
      }
      return false;
    });
  }
  return result;
}

function getPageData() {
  var filtered = getFilteredData();
  var start = (currentPage - 1) * pageSize;
  var end = start + pageSize;
  return filtered.slice(start, Math.min(end, filtered.length));
}

function findUserInOriginalById(userId) {
  for (var ui = 0; ui < ORIGINAL_ORDER.length; ui++) {
    if (ORIGINAL_ORDER[ui].id === userId) return ORIGINAL_ORDER[ui];
  }
  return null;
}

/** Same lookup as findUserInOriginalById(), but against an EXPLICIT
    pool (the canonical Internal or External snapshot) rather than
    whichever pool `ORIGINAL_ORDER` currently points at. Needed because
    `ORIGINAL_ORDER` is reassigned in place by switchUserView() — if a
    user flips the Internal/External toggle while a Select Users →
    Export is still "preparing" (before the simulated Desktop/Excel
    screen has appeared), a lookup against the *live* `ORIGINAL_ORDER`
    would search the wrong population (ids are disjoint, "u0xx" vs
    "e0xx") and silently resolve to zero rows. Exported snapshots must
    stay pinned to the population they were captured from. */
function findUserInPoolById(userId, isExternal) {
  var pool = isExternal ? EXTERNAL_DATA_ARRAY : INTERNAL_ORIGINAL_SNAPSHOT;
  if (!Array.isArray(pool)) return findUserInOriginalById(userId);
  for (var ui = 0; ui < pool.length; ui++) {
    if (pool[ui].id === userId) return pool[ui];
  }
  return null;
}

/* Status cell — icon + text, no chip/pill/badge. Uses the exact 16x16
   Figma SVGs for Active (green check-circle) and Inactive (red no-entry).
   Alignment rules applied uniformly to both variants so they center
   identically inside the row:
     • inline-flex + align-items:center puts icon and label on one line
       and centers them against each other.
     • line-height:16px matches the icon height so the wrapper's own
       height can't exceed the icon — prevents the text line-box (which
       inherits the td's 21px leading) from pushing the group taller.
     • vertical-align:middle aligns the inline-flex wrapper to the middle
       of the td's line box, matching plain-text cells in the same row.
     • display:block on the <svg> removes the SVG's inline baseline
       descender, which otherwise nudges it down a sub-pixel. */
var STATUS_ICON_ACTIVE =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" style="display:block">' +
    '<g clip-path="url(#clip0_399_9288)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4418 2.51561C9.26 1.98901 7.93959 1.85856 6.67755 2.1437C5.41551 2.42884 4.27945 3.1143 3.43881 4.09785C2.59816 5.08141 2.09798 6.31035 2.01284 7.6014C1.92771 8.89245 2.2622 10.1764 2.96641 11.2619C3.67063 12.3473 4.70685 13.176 5.92052 13.6244C7.13419 14.0728 8.4603 14.1168 9.70105 13.75C10.9418 13.3831 12.0307 12.625 12.8054 11.5887C13.5801 10.5524 13.9991 9.29346 13.9998 7.99961V7.38666C13.9998 7.01847 14.2983 6.71999 14.6665 6.71999C15.0347 6.71999 15.3332 7.01847 15.3332 7.38666V7.99999C15.3323 9.58137 14.8202 11.1205 13.8733 12.387C12.9265 13.6536 11.5956 14.5802 10.0791 15.0286C8.56262 15.4769 6.94183 15.4231 5.45845 14.8751C3.97507 14.327 2.70858 13.3142 1.84787 11.9876C0.987166 10.6609 0.578351 9.09162 0.6824 7.51367C0.78645 5.93572 1.39779 4.43368 2.42524 3.23156C3.4527 2.02944 4.84121 1.19165 6.38371 0.843146C7.92621 0.49464 9.54003 0.654086 10.9845 1.29771C11.3208 1.44756 11.472 1.84168 11.3221 2.17799C11.1723 2.51431 10.7782 2.66546 10.4418 2.51561ZM15.1377 2.19502C15.3982 2.45524 15.3984 2.87735 15.1381 3.13783L8.47148 9.81116C8.34648 9.93629 8.17688 10.0066 8.00001 10.0067C7.82314 10.0067 7.6535 9.93646 7.52844 9.8114L5.52844 7.8114C5.26809 7.55105 5.26809 7.12894 5.52844 6.86859C5.78879 6.60824 6.2109 6.60824 6.47125 6.86859L7.99961 8.39695L14.1949 2.19549C14.4551 1.93501 14.8772 1.9348 15.1377 2.19502Z" fill="#056C07"/>' +
    '</g>' +
    '<defs><clipPath id="clip0_399_9288"><rect width="16" height="16" fill="white"/></clipPath></defs>' +
  '</svg>';
var STATUS_ICON_INACTIVE =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" style="display:block">' +
    '<g clip-path="url(#clip0_399_9264)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3119 4.25496C2.49082 5.2814 1.99984 6.58341 1.99984 8.00008C1.99984 11.3138 4.68613 14.0001 7.99984 14.0001C9.41651 14.0001 10.7185 13.5091 11.745 12.688L3.3119 4.25496ZM4.25471 3.31215L12.6878 11.7452C13.5089 10.7188 13.9998 9.41676 13.9998 8.00008C13.9998 4.68637 11.3135 2.00008 7.99984 2.00008C6.58316 2.00008 5.28116 2.49106 4.25471 3.31215ZM0.666504 8.00008C0.666504 3.94999 3.94975 0.666748 7.99984 0.666748C12.0499 0.666748 15.3332 3.94999 15.3332 8.00008C15.3332 12.0502 12.0499 15.3334 7.99984 15.3334C3.94975 15.3334 0.666504 12.0502 0.666504 8.00008Z" fill="#D40909"/>' +
    '</g>' +
    '<defs><clipPath id="clip0_399_9264"><rect width="16" height="16" fill="white"/></clipPath></defs>' +
  '</svg>';
function renderStatusHtml(status) {
  var label = esc(status);
  var variant = "default";
  if (status === "Active") variant = "success";
  else if (status === "Pending" || status === "Invited") variant = "warning";
  else if (status === "Error" || status === "Failed") variant = "error";
  return '<span class="ads-chip" data-variant="' + variant + '" data-status-tooltip="' + label + '" aria-label="' + label + '" tabindex="0">' + label + "</span>";
}

/* Generic hover/keyboard-focus tooltip, positioned at body level so table/
   toolbar overflow can't clip it. Originally built just for the status
   icons (`data-status-tooltip`); Round 24 (2026-08-11 — icon-only Filter
   button) broadened the trigger selector to any `[data-tooltip]` element
   (e.g. the Users toolbar's icon-only Filter button) so new icon-only
   controls get the same hover + keyboard-focus tooltip behavior for free
   without duplicating this plumbing. */
/* The shared tooltip only ever hides in response to the pointer or focus
   leaving a trigger that still exists. Code that takes a trigger off the
   page — collapsing a section, say — has to dismiss it itself, or it is
   left hanging over the spot the trigger used to occupy. */
function hideStatusTooltip() {
  var tooltip = document.getElementById("statusTooltip");
  if (!tooltip) return;
  tooltip.classList.remove("is-visible");
  tooltip.setAttribute("aria-hidden", "true");
}

function setupStatusTooltip() {
  var tooltip = document.getElementById("statusTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "statusTooltip";
    tooltip.className = "edl-status-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tooltip);
  }

  function show(target) {
    if (target.closest && target.closest(".vnav")) return;
    var label = target.getAttribute("data-status-tooltip") || target.getAttribute("data-tooltip");
    if (!label) return;
    tooltip.textContent = label;
    tooltip.setAttribute("aria-hidden", "false");
    tooltip.classList.add("is-visible");

    var rect = target.getBoundingClientRect();
    var tt = tooltip.getBoundingClientRect();
    var left = rect.left + (rect.width / 2) - (tt.width / 2);
    left = Math.max(8, Math.min(left, window.innerWidth - tt.width - 8));
    var top = rect.top - tt.height - 8;
    if (top < 8) top = rect.bottom + 8;

    tooltip.style.left = Math.round(left) + "px";
    tooltip.style.top = Math.round(top) + "px";
  }

  function hide() {
    hideStatusTooltip();
  }

  var TOOLTIP_TRIGGER_SEL = ".status-icon-wrap, .ads-chip[data-status-tooltip], [data-tooltip]";
  document.addEventListener("mouseover", function (e) {
    var target = e.target.closest(TOOLTIP_TRIGGER_SEL);
    if (target) show(target);
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(TOOLTIP_TRIGGER_SEL)) hide();
  });
  document.addEventListener("focusin", function (e) {
    var target = e.target.closest(TOOLTIP_TRIGGER_SEL);
    if (target) show(target);
  });
  document.addEventListener("focusout", function (e) {
    if (e.target.closest(TOOLTIP_TRIGGER_SEL)) hide();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hide();
  });
  window.addEventListener("scroll", hide, true);
  window.addEventListener("resize", hide);
}

/* Last login: the underlying record keeps the full "Mon D, YYYY,
   H:MM AM/PM" timestamp (used verbatim for export/CSV — see the
   `u.lastLogin` reference in the export row builder — and for the
   full-value tooltip below), but the table cell displays a shortened
   "Mon D, H:MM AM/PM" form (drops the year) so it comfortably fits a
   fixed, readable column width instead of relying on ellipsis for
   the common case. Any value that still doesn't fit at the column's
   width continues to ellipsis via the base `.tbl td` rule and picks
   up the full original timestamp as its hover tooltip through the
   existing generic `getCellTruncationInfo` cell-truncation tooltip
   (it prefers a `td[title]` over `textContent` when present). */
function shortLastLogin(str) {
  if (!str) return str;
  return str.replace(/,\s*\d{4}(?=,)/, "");
}

function renderTable() {
  var rows = getPageData();
  var tb = document.getElementById("tbody");
  if (rows.length === 0) {
    tb.innerHTML = '<tr><td colspan="9" class="empty-state">No results found</td></tr>';
    syncUserSelectionUI();
    return;
  }
  var html = "";
  var isExternal = userView === "external";
  for (var i = 0; i < rows.length; i++) {
    var u = rows[i];
    var rolesAttr = u.roles.join("|");
    var editHint = "Edit user " + u.name;
    var forceInitials = isExternal || (currentPage === 2 && !isSessionAddedUser(u));
    var teamOrOrg = isExternal ? (u.organization || "") : u.team;
    var loginFull = u.lastLogin || "";
    var loginStr = loginFull ? esc(shortLastLogin(loginFull)) : "—";
    var loginTitleAttr = loginFull ? ' title="' + esc(loginFull) + '"' : "";
    var isRowSelected = !!selectedUserIds[u.id];
    html += '<tr data-id="' + esc(u.id) + '"' + (isRowSelected ? ' class="is-selected" aria-selected="true"' : '') + '>' +
      /* Row checkbox — never triggers the name-link's row navigation
         (it lives in its own <td>, separate from a.name-link) and never
         mutates `u`; selection state lives only in `selectedUserIds`. */
      '<td class="c-sel"><input type="checkbox" class="cr-perm-check u-row-check" data-user-id="' + esc(u.id) + '"' + (isRowSelected ? ' checked' : '') + ' aria-label="Select ' + esc(u.name) + '"></td>' +
      '<td class="c-nm"><div class="name-cell">' + renderAvatarHtml(u, forceInitials) +
        '<div class="name-cell-text">' +
          '<a class="name-link" href="#" data-user-id="' + esc(u.id) + '" title="' + esc(u.name) + '" aria-label="' + esc(editHint) + '">' + esc(u.name) + '</a>' +
          '<span class="name-cell-email">' + esc(u.email) + '</span>' +
        '</div>' +
      '</div></td>' +
      '<td class="c-em">' + esc(u.email) + '</td>' +
      '<td class="c-rl" data-roles="' + esc(rolesAttr) + '"><span class="role-txt">' + esc(u.roles.join(', ')) + '</span></td>' +
      '<td class="c-st">' + renderStatusHtml(u.status) + '</td>' +
      '<td class="c-tm">' + esc(teamOrOrg) + '</td>' +
      '<td class="c-ct">' + esc(u.title) + '</td>' +
      '<td class="c-ll"' + loginTitleAttr + '>' + loginStr + '</td>' +
      '<td class="c-rg">' + esc(u.region) + '</td>' +
      '</tr>';
  }
  tb.innerHTML = html;
  fitUsersRoleCells();
  syncUserSelectionUI();
  if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
}

/* ═══ USERS LIST — SELECTION STATE + EXPORT (Figma 770:17428) ═══
   "Eligible" always means "currently represented by getFilteredData()"
   — i.e. the same rows the search box / Filter drawer / sort would show
   across every page, not just the rows on the current pagination page.
   The whole filtered dataset already lives in the browser (see
   getFilteredData/getPageData above — pagination is a client-side
   slice, not a server round-trip), so Select All can safely operate on
   the full filtered result set without an unbounded fetch. */

/** Drops any selected id that no longer exists in the active view's
    dataset (e.g. a user removed via Edit User → Remove). Does NOT
    prune ids that are merely hidden by the current search/filter —
    those stay selected so re-widening the filter restores them, per
    "selection persists across filter/search/sort/pagination changes". */
function pruneSelectionToExistingUsers() {
  var existing = {};
  var i;
  for (i = 0; i < DATA.length; i++) existing[DATA[i].id] = true;
  for (var id in selectedUserIds) {
    if (selectedUserIds.hasOwnProperty(id) && !existing[id]) delete selectedUserIds[id];
  }
}

/** Recomputes the header select-all checkbox (unchecked / indeterminate /
    checked / disabled) and the Export button's disabled + tooltip state
    from the CURRENT filtered result set. Called after every table
    render (search, filter, sort, pagination, view switch all flow
    through renderTable) and after every individual checkbox toggle. */
function syncUserSelectionUI() {
  var selectAll = document.getElementById("usersSelectAll");
  var exportBtn = document.getElementById("usersExportBtn");
  var rows = getFilteredData();
  var selectedEligible = 0;
  for (var i = 0; i < rows.length; i++) {
    if (selectedUserIds[rows[i].id]) selectedEligible++;
  }
  if (selectAll) {
    if (!rows.length) {
      selectAll.checked = false;
      selectAll.indeterminate = false;
      selectAll.disabled = true;
      selectAll.setAttribute("aria-label", "Select all users");
      selectAll.title = "No users to select";
    } else {
      selectAll.disabled = false;
      selectAll.checked = selectedEligible === rows.length;
      selectAll.indeterminate = selectedEligible > 0 && selectedEligible < rows.length;
      /* Communicates its TRUE scope — the complete current filtered
         result set across every page, not just the rows on screen —
         rather than a generic "Select all users" that leaves scope
         ambiguous. Mirrors the live count the Export button already
         shows below. */
      var scopeLabel = selectAll.checked
        ? "Deselect all " + rows.length + " filtered user" + (rows.length === 1 ? "" : "s")
        : "Select all " + rows.length + " filtered user" + (rows.length === 1 ? "" : "s");
      selectAll.setAttribute("aria-label", scopeLabel);
      selectAll.title = scopeLabel;
    }
  }
  if (exportBtn) {
    var hasSelection = selectedEligible > 0;
    exportBtn.disabled = !hasSelection;
    exportBtn.setAttribute("aria-disabled", hasSelection ? "false" : "true");
    var exportLabel = hasSelection
      ? "Export " + selectedEligible + " selected user" + (selectedEligible === 1 ? "" : "s")
      : "Select at least one user to export";
    exportBtn.title = exportLabel;
    /* Keep the action name stable when compact CSS removes the visible
       label. Native disabled/aria-disabled state communicates whether
       export is available; `title` above still carries the dynamic
       selection explanation for legacy hover behavior. */
    exportBtn.setAttribute("aria-label", "Export users");
  }
}

/** Prototype-only helper: true when the OS/browser has requested
    reduced motion, so the export→Desktop→Excel sequence can drop its
    (short, decorative) auto-advance timer and pulse animation and rely
    on an explicit click/keypress to advance instead. */
function simPrefersReducedMotion() {
  try {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  } catch (e) {
    return false;
  }
}

/** Screen-reader-only status announcement for prototype transitions
    that aren't already covered by an EDL toast (toasts are their own
    aria-live region already). */
function announceSimStatus(msg) {
  var el = document.getElementById("simA11yStatus");
  if (!el) return;
  el.textContent = "";
  window.setTimeout(function () { el.textContent = msg; }, 30);
}

/** Resolves `exportSnapshotIds` back into full, LIVE user records at
    render time (never a stale copy) — see the state-model comment
    above `exportStatus`. Looks up ORIGINAL_ORDER (the current view's
    complete unfiltered dataset, same source Edit User reads/writes)
    so an edit made anywhere else in the app is reflected the next time
    this snapshot is rendered. Silently skips an id that no longer
    resolves (e.g. the user was removed) rather than fabricating a row.
    Preserves the order the ids were captured in (== selection order at
    Export time), and de-dupes defensively even though selectedUserIds
    is already a set keyed by id (never index) and cannot itself hold
    duplicates. */
function resolveExportSnapshotUsers() {
  var out = [];
  var seen = {};
  for (var i = 0; i < exportSnapshotIds.length; i++) {
    var id = exportSnapshotIds[i];
    if (seen[id]) continue;
    /* Resolve against the population the snapshot was captured from
       (exportSnapshotIsExternal), NOT the live ORIGINAL_ORDER — the
       Internal/External toggle can be flipped while Export is still
       "preparing" or while the simulated Desktop/Excel is open, and
       the exported rows must stay pinned to their original view. */
    var rec = findUserInPoolById(id, exportSnapshotIsExternal);
    if (rec) {
      out.push(rec);
      seen[id] = true;
    }
  }
  return out;
}

/** Safely renders a single CSV field: wraps in quotes and escapes any
    embedded quote whenever the value contains a comma, quote, or line
    break, so names/teams/roles with those characters still round-trip
    correctly when opened in Excel. Currently unused now that Export is
    a visual-only simulation (see exportSelectedUsers() below) — kept
    for any future real-export implementation. */
function csvField(value) {
  var s = value === null || value === undefined ? "" : String(value);
  if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
  return s;
}

/* ═══ PROTOTYPE-ONLY: Select Users → Export to Excel simulation ═══════
   This whole flow is a design-prototype demo. It NEVER touches the
   real file system, never triggers a browser download, and never
   launches the real Microsoft Excel — every "Desktop" and "Excel"
   surface below is HTML/CSS rendered inside this same page
   (#simDesktopOverlay / #simExcelOverlay in index.html), gated behind
   `usersExportInProgress` / `exportStatus` / `prototypeScreen` so the
   sequence can't be re-entered mid-flight. */
var usersExportInProgress = false;
/* Handle for the "Export created." toast shown on the simulated Desktop —
   dismissed as soon as Excel actually opens so its "Opening…" wording
   never lingers, stale, over the already-open worksheet (its default
   6s auto-dismiss otherwise outlives the ~900ms Desktop→Excel beat). */
var simDesktopToastHandle = null;

/** Export click: captures an immutable snapshot of exactly which users
    are selected AND still eligible under the current filtered view
    (`selected ∩ filtered`, so a selection hidden by a later filter
    change is never silently exported), then plays a short, believable
    "preparing export" beat before handing off to the simulated Desktop.
    Reduced-motion users get a near-instant transition instead of the
    decorative delay. */
function exportSelectedUsers() {
  if (usersExportInProgress) return;
  var exportBtn = document.getElementById("usersExportBtn");
  var eligibleRows = getFilteredData();
  var rowsToExport = [];
  var i;
  for (i = 0; i < eligibleRows.length; i++) {
    if (selectedUserIds[eligibleRows[i].id]) rowsToExport.push(eligibleRows[i]);
  }
  if (!rowsToExport.length) return;

  usersExportInProgress = true;
  exportStatus = "preparing";
  simReturnFocusEl = document.activeElement;

  /* exportSnapshot = currently selected AND eligible user records,
     captured NOW (not after the delay) — ids only; values are resolved
     live at render time by resolveExportSnapshotUsers(). */
  exportSnapshotIds = rowsToExport.map(function (u) { return u.id; });
  exportSnapshotIsExternal = userView === "external";

  if (exportBtn) {
    exportBtn.setAttribute("aria-busy", "true");
    exportBtn.disabled = true;
    exportBtn.classList.add("is-loading");
  }
  announceSimStatus("Preparing Excel export\u2026");
  showEdlToast({
    type: "informative",
    title: "Preparing Excel export\u2026",
    bodyHtml: "Getting " + rowsToExport.length + " selected user" + (rowsToExport.length === 1 ? "" : "s") + " ready.",
    duration: 2200
  });

  var reduced = simPrefersReducedMotion();
  var delay = reduced ? 150 : (700 + Math.floor(Math.random() * 500)); /* ~700-1200ms, per spec */
  window.setTimeout(function () {
    exportStatus = "complete";
    usersExportInProgress = false;
    if (exportBtn) {
      exportBtn.removeAttribute("aria-busy");
      exportBtn.classList.remove("is-loading");
    }
    syncUserSelectionUI(); /* restores disabled/aria-label from current (still-intact) selection */
    openSimulatedDesktop();
  }, delay);
}

/** Screen 2 of the simulation: a lightweight "Mac Desktop" showing the
    newly "created" .xlsx file. Auto-advances to the simulated Excel
    window after a short pause UNLESS the user opens the file first
    (click/Enter/Space) or reduced-motion is requested, in which case
    the file simply sits there, fully keyboard-operable, until opened
    explicitly — the auto-advance is a presentation nicety, never the
    only path to Excel. */
function openSimulatedDesktop() {
  prototypeScreen = "desktop";
  var overlay = document.getElementById("simDesktopOverlay");
  var excelOverlay = document.getElementById("simExcelOverlay");
  var fileIcon = document.getElementById("simExcelFileIcon");
  var fileNameEl = document.getElementById("simExcelFileName");
  var titleEl = document.getElementById("simExcelTitleText");
  if (!overlay) return;

  var filename = simExportFilename();
  if (fileNameEl) fileNameEl.textContent = filename;
  if (titleEl) titleEl.textContent = filename + " \u2014 Excel";
  if (fileIcon) {
    fileIcon.setAttribute("aria-label", "Open " + filename + " in Excel");
    fileIcon.classList.remove("is-selected");
    fileIcon.classList.remove("is-new");
  }

  if (excelOverlay) excelOverlay.hidden = true;
  overlay.hidden = false;
  document.body.classList.add("sim-overlay-open");

  if (simDesktopToastHandle) { simDesktopToastHandle.dismiss(); simDesktopToastHandle = null; }
  simDesktopToastHandle = showEdlToast({
    type: "success",
    title: "Export created.",
    bodyHtml: "Opening <strong>" + esc(filename) + "</strong>\u2026"
  });
  announceSimStatus("Export created. " + filename + " appeared on the desktop.");

  var reduced = simPrefersReducedMotion();
  window.requestAnimationFrame(function () {
    if (fileIcon) {
      if (!reduced) fileIcon.classList.add("is-new");
      fileIcon.focus();
    }
  });

  if (simDesktopAutoOpenTimer) window.clearTimeout(simDesktopAutoOpenTimer);
  if (!reduced) {
    /* 2100ms, not 900ms: the file-arrival pulse (simFileArrive, 900ms)
       needs to fully finish AND leave a beat of "settled" desktop time
       afterward so a live audience can actually register the filename
       before auto-advancing — advancing the instant the pulse ends
       (as the previous 900ms value did) left effectively no visible
       Desktop step at all. */
    simDesktopAutoOpenTimer = window.setTimeout(function () {
      simDesktopAutoOpenTimer = null;
      if (prototypeScreen === "desktop") openSimulatedExcel();
    }, 2100);
  }
}

/** Builds this cycle's simulated filename. Deterministic per export
    (not per render), using the date Export was clicked. */
var simExportFilenameCache = null;
function simExportFilename() {
  if (simExportFilenameCache) return simExportFilenameCache;
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  simExportFilenameCache = "selected-users-" + y + "-" + m + "-" + day + ".xlsx";
  return simExportFilenameCache;
}

/** Screen 3: the simulated Excel window. Renders exclusively from
    exportSnapshotIds (never from a live re-read of the current
    selection), so changing the selection after Excel is already open
    has no effect until the administrator returns and exports again. */
function openSimulatedExcel() {
  if (simDesktopAutoOpenTimer) { window.clearTimeout(simDesktopAutoOpenTimer); simDesktopAutoOpenTimer = null; }
  if (simDesktopToastHandle) { simDesktopToastHandle.dismiss(); simDesktopToastHandle = null; }
  prototypeScreen = "excel";
  var desktopOverlay = document.getElementById("simDesktopOverlay");
  var excelOverlay = document.getElementById("simExcelOverlay");
  var fileIcon = document.getElementById("simExcelFileIcon");
  if (fileIcon) fileIcon.classList.add("is-selected");

  renderSimExcelGrid();

  if (desktopOverlay) desktopOverlay.hidden = true;
  if (excelOverlay) excelOverlay.hidden = false;
  document.body.classList.add("sim-overlay-open");

  var users = resolveExportSnapshotUsers();
  announceSimStatus("Previewing the Excel export. " + users.length + " selected user" + (users.length === 1 ? "" : "s") + " shown in " + simExportFilename() + ".");

  window.requestAnimationFrame(function () {
    var backBtn = document.getElementById("simExcelBackBtn");
    if (backBtn) backBtn.focus();
  });
}

/** Renders the "Selected Users" worksheet grid from the frozen export
    snapshot. Column set mirrors exactly the fields that already exist
    on a user record (never fabricated) — Name, Email, Role(s), Status,
    Team/Company, Title, Last login, Region — same field list the
    previous CSV export used, just rendered as an HTML grid instead of
    downloaded as a file. */
function renderSimExcelGrid() {
  var grid = document.getElementById("simExcelGrid");
  var countEl = document.getElementById("simExcelStatusCount");
  if (!grid) return;
  var users = resolveExportSnapshotUsers();
  var isExternal = exportSnapshotIsExternal;
  var headers = ["Name", "Email", "Role(s)", "Status", isExternal ? "Company" : "Team", "Title", "Last login", "Region"];
  var colLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  var html = "";
  html += "<thead><tr class=\"sim-excel-colrow\"><th class=\"sim-excel-corner\"></th>";
  for (var c = 0; c < colLetters.length; c++) {
    html += "<th class=\"sim-excel-colletter\">" + colLetters[c] + "</th>";
  }
  html += "</tr></thead><tbody>";

  html += "<tr><th class=\"sim-excel-rownum\">1</th>";
  for (var h = 0; h < headers.length; h++) {
    html += "<td class=\"sim-excel-headcell\">" + esc(headers[h]) + "</td>";
  }
  html += "</tr>";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];
    var teamOrOrg = isExternal ? (u.organization || "\u2014") : (u.team || "\u2014");
    var vals = [
      u.name || "\u2014",
      u.email || "\u2014",
      (u.roles && u.roles.length) ? u.roles.join(", ") : "\u2014",
      u.status || "\u2014",
      teamOrOrg,
      u.title || "\u2014",
      u.lastLogin || "\u2014",
      u.region || "\u2014"
    ];
    html += "<tr><th class=\"sim-excel-rownum\">" + (i + 2) + "</th>";
    for (var v = 0; v < vals.length; v++) {
      var cls = "sim-excel-cell";
      if (v === 3) {
        cls += " sim-excel-status-" + (String(vals[v]).toLowerCase() === "active" ? "active" : "inactive");
      }
      html += "<td class=\"" + cls + "\" title=\"" + esc(String(vals[v])) + "\">" + esc(String(vals[v])) + "</td>";
    }
    html += "</tr>";
  }
  html += "</tbody>";
  grid.innerHTML = html;

  if (countEl) {
    countEl.textContent = users.length + " of " + users.length + " rows shown \u00b7 " + headers.length + " columns";
  }
}

/** Common return path from either simulated screen back to the real
    User List. Resets only the prototype's own transient state
    (exportStatus/prototypeScreen/the auto-open timer) — filters,
    search, and `selectedUserIds` are untouched, per "preserve
    selection/filters/search unless the user explicitly clears them". */
function returnToUserListFromPrototype() {
  if (simDesktopAutoOpenTimer) { window.clearTimeout(simDesktopAutoOpenTimer); simDesktopAutoOpenTimer = null; }
  if (simDesktopToastHandle) { simDesktopToastHandle.dismiss(); simDesktopToastHandle = null; }
  prototypeScreen = "userList";
  exportStatus = "idle";
  simExportFilenameCache = null;
  var desktopOverlay = document.getElementById("simDesktopOverlay");
  var excelOverlay = document.getElementById("simExcelOverlay");
  if (desktopOverlay) desktopOverlay.hidden = true;
  if (excelOverlay) excelOverlay.hidden = true;
  document.body.classList.remove("sim-overlay-open");
  announceSimStatus("Returned to the User List.");

  var restoreEl = simReturnFocusEl;
  simReturnFocusEl = null;
  /* `document.activeElement` is `<body>` whenever nothing was actually
     focused (e.g. Export was invoked programmatically rather than via
     a real click/keypress) — focusing `<body>` is a no-op, so treat
     that case the same as "nothing to restore" and fall back to the
     Export button, the control that started this whole flow. */
  if (restoreEl && restoreEl !== document.body && document.body.contains(restoreEl) && typeof restoreEl.focus === "function") {
    restoreEl.focus();
  } else {
    var exportBtn = document.getElementById("usersExportBtn");
    if (exportBtn) exportBtn.focus();
  }
}

/* Stable primary-role + count-badge treatment for the Users tab.
   ────────────────────────────────────────────────────────────────
   The canonical role array is ordered: roles[0] is the primary role
   used by the visible table and Role sort; every later item is a
   supporting role. The list intentionally never renders supporting
   names inline, even when a wide viewport could fit them. It always
   renders:

       Primary role  +N role(s)

   This keeps row height and scanability stable while making the
   multi-role state explicit. The existing ADS chip carries the full,
   ordered role list in its tooltip. `.role-primary` owns ellipsis so a
   long primary role shrinks before the fixed-size badge.

   Called from:
     • renderTable() — after every table render.
     • setupRightmostAlignment's debounced window-resize handler.
     • setupColumnResize's onMove/onUp (Users table only) so dragging
       the Role handle reflows the primary-role ellipsis while the
       count badge remains visible.

   Filtering, search, sorting, export, Edit User and effective access
   continue to read the unchanged complete `user.roles` array. */
function fitUsersRoleCells() {
  var tbody = document.getElementById("tbody");
  if (!tbody) return;
  var probe = document.getElementById("roleFitProbe");
  if (!probe) {
    probe = document.createElement("span");
    probe.id = "roleFitProbe";
    probe.setAttribute("aria-hidden", "true");
    probe.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none;";
    document.body.appendChild(probe);
  }
  function suffix(hidden) {
    if (hidden <= 0) return "";
    return " … (+" + hidden + " role" + (hidden === 1 ? "" : "s") + ")";
  }
  var cells = tbody.querySelectorAll("td.c-rl[data-roles]");
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var span = cell.querySelector(".role-txt");
    if (!span) continue;
    var roles = (cell.getAttribute("data-roles") || "").split("|").filter(function (r) { return r; });
    if (!roles.length) continue;
    var cs = getComputedStyle(cell);
    probe.style.font = cs.font;
    var avail = cell.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 1;
    if (!(avail > 16)) avail = 16;
    function widthOf(text) {
      probe.textContent = text;
      return probe.getBoundingClientRect().width;
    }
    var html = "";
    if (roles.length === 1) {
      html = '<span class="role-line">' + esc(roles[0]) + "</span>";
    } else {
      var k = roles.length;
      var candidate = "";
      while (k > 0) {
        candidate = roles.slice(0, k).join(", ") + suffix(roles.length - k);
        if (widthOf(candidate) <= avail) break;
        k--;
      }
      if (k <= 0) {
        html =
          '<span class="role-line role-line-clip">' + esc(roles[0]) + "</span>" +
          '<span class="role-more" tabindex="0" data-tooltip="' + esc(roles.slice(1).join("\n")) + '">' +
            esc(suffix(roles.length - 1).replace(/^\s/, "")) +
          "</span>";
      } else if (k < roles.length) {
        html =
          '<span class="role-line">' + esc(roles.slice(0, k).join(", ")) +
            '<span class="role-more" tabindex="0" data-tooltip="' + esc(roles.slice(k).join("\n")) + '">' +
              esc(suffix(roles.length - k)) +
            "</span></span>";
      } else {
        html = '<span class="role-line">' + esc(roles.join(", ")) + "</span>";
      }
    }
    span.innerHTML = html;
    cell.removeAttribute("title");
  }
}

function totalPages() {
  return Math.max(1, Math.ceil(getFilteredData().length / pageSize));
}

function renderUsersJumpDdMenu() {
  var jumpMenu = document.getElementById("usersJumpMenu");
  var jumpValue = document.getElementById("usersJumpValue");
  if (!jumpMenu || !jumpValue) return;
  var tp = totalPages();
  var html = "";
  for (var p = 1; p <= tp; p++) {
    html += '<div class="cr-dd-option' + (p === currentPage ? " is-selected" : "") + '" role="option" data-users-jump="' + p + '">' + p + "</div>";
  }
  jumpMenu.innerHTML = html;
  jumpValue.textContent = String(currentPage);
}

function renderUsersPageSizeDdMenu() {
  var menu = document.getElementById("usersPageSizeMenu");
  var valEl = document.getElementById("usersPageSizeValue");
  if (!menu || !valEl) return;
  var sizes = [10, 25, 50];
  var html = "";
  for (var i = 0; i < sizes.length; i++) {
    var n = sizes[i];
    html += '<div class="cr-dd-option' + (n === pageSize ? " is-selected" : "") + '" role="option" data-users-psize="' + n + '">' + n + "</div>";
  }
  menu.innerHTML = html;
  valEl.textContent = String(pageSize);
}

function renderPagination() {
  var tp = totalPages();
  var pgNums = document.querySelector(".pg-nums");
  var btns = [];

  if (tp <= 7) {
    for (var i = 1; i <= tp; i++) btns.push(i);
  } else {
    btns.push(1);
    if (currentPage > 3) btns.push("...");
    var lo = Math.max(2, currentPage - 1);
    var hi = Math.min(tp - 1, currentPage + 1);
    if (currentPage <= 3) { lo = 2; hi = 4; }
    if (currentPage >= tp - 2) { lo = tp - 3; hi = tp - 1; }
    for (var j = lo; j <= hi; j++) btns.push(j);
    if (currentPage < tp - 2) btns.push("...");
    btns.push(tp);
  }

  var html = "";
  for (var k = 0; k < btns.length; k++) {
    if (btns[k] === "...") {
      html += '<span class="pg-dots">…</span>';
    } else {
      html += '<button class="pg-n' + (btns[k] === currentPage ? " on" : "") + '" data-pg="' + btns[k] + '">' + btns[k] + '</button>';
    }
  }
  pgNums.innerHTML = html;

  var navFirst = document.querySelector('.pg-nav[aria-label="First"]');
  var navPrev  = document.querySelector('.pg-nav[aria-label="Prev"]');
  var navNext  = document.querySelector('.pg-nav[aria-label="Next"]');
  var navLast  = document.querySelector('.pg-nav[aria-label="Last"]');

  navFirst.classList.toggle("off", currentPage === 1);
  navPrev.classList.toggle("off", currentPage === 1);
  navNext.classList.toggle("off", currentPage === tp);
  navLast.classList.toggle("off", currentPage === tp);

  var filteredCount = getFilteredData().length;
  var displayCount = hasActiveFilters() ? filteredCount : TOTAL_ITEMS;
  document.querySelector(".pgn-show .pgn-lbl:last-child").textContent = "of " + displayCount + " items";

  updateTotalLabel();
  renderUsersJumpDdMenu();
  renderUsersPageSizeDdMenu();
}

/* ─── User view toggle helpers ─── */

function updateTotalLabel() {
  var el = document.getElementById("usersTotalLabel");
  if (!el) return;
  var suffix = userView === "external" ? " (External)" : " (Internal)";
  el.textContent = "Total users: " + TOTAL_ITEMS + suffix;
}

function updateUserViewColumns() {
  var thTm = document.querySelector("#usersTable th.c-tm");
  if (!thTm) return;
  var span = thTm.querySelector(".th-inner span");
  /* Brief §2: "If there is a Team column, rename it to Company" for
     external users. The underlying data field stays `organization`;
     only the UI label/sort-key flips. */
  if (span) span.textContent = userView === "external" ? "Company" : "Team";
  thTm.setAttribute("data-sort", userView === "external" ? "organization" : "team");
}

function switchUserView(view) {
  if (view === userView) return;
  userView = view;
  /* Swap active dataset and virtual total */
  if (view === "external") {
    DATA = EXTERNAL_DATA_ARRAY.slice();
    ORIGINAL_ORDER = EXTERNAL_DATA_ARRAY.slice();
    TOTAL_ITEMS = EXTERNAL_TOTAL;
  } else {
    DATA = INTERNAL_ORIGINAL_SNAPSHOT.slice();
    ORIGINAL_ORDER = INTERNAL_ORIGINAL_SNAPSHOT.slice();
    TOTAL_ITEMS = INTERNAL_TOTAL;
  }
  /* Reset sort/page state */
  sortKey = null;
  sortDir = null;
  currentPage = 1;
  /* Internal and External are disjoint populations (ids "u0xx" vs.
     "e0xx" never collide) — but a selection made in one view has no
     meaning in the other, so clear it rather than silently carrying
     hidden selections into a future export. */
  selectedUserIds = {};
  /* Reflect new view in UI */
  var segBtns = document.querySelectorAll("#userViewToggle .seg-btn");
  for (var i = 0; i < segBtns.length; i++) {
    segBtns[i].classList.toggle("on", segBtns[i].dataset.view === view);
  }
  updateUserViewColumns();
  updateSortHeaders();
  renderTable();
  renderPagination();
}

function applySort(key) {
  if (sortKey === key) {
    if (sortDir === "asc") sortDir = "desc";
    else if (sortDir === "desc") { sortDir = null; sortKey = null; }
  } else {
    sortKey = key;
    sortDir = "asc";
  }

  if (!sortKey) {
    DATA = ORIGINAL_ORDER.slice();
  } else {
    DATA.sort(function (a, b) {
      var va = sortKey === "role" ? (a.roles[0] || "") : (a[sortKey] || "");
      var vb = sortKey === "role" ? (b.roles[0] || "") : (b[sortKey] || "");
      va = va.toLowerCase();
      vb = vb.toLowerCase();
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }

  currentPage = 1;
  renderTable();
  renderPagination();
  updateSortHeaders();
}

/** Rebuild `DATA` from `ORIGINAL_ORDER` using the current sort (no sort-key toggle). */
function reapplyUserDatasetOrder() {
  if (!sortKey) {
    DATA = ORIGINAL_ORDER.slice();
  } else {
    DATA = ORIGINAL_ORDER.slice();
    DATA.sort(function (a, b) {
      var va = sortKey === "role" ? (a.roles[0] || "") : (a[sortKey] || "");
      var vb = sortKey === "role" ? (b.roles[0] || "") : (b[sortKey] || "");
      va = va.toLowerCase();
      vb = vb.toLowerCase();
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }
}

function updateSortHeaders() {
  var ths = document.querySelectorAll("th[data-sort]");
  for (var i = 0; i < ths.length; i++) {
    ths[i].classList.remove("sort-asc", "sort-desc");
    var isActive = sortKey && ths[i].dataset.sort === sortKey;
    if (isActive) {
      if (sortDir === "asc") ths[i].classList.add("sort-asc");
      else if (sortDir === "desc") ths[i].classList.add("sort-desc");
    }
    // Accessible sort state (WAI-ARIA table sort pattern) — mirrors the
    // sort-asc/sort-desc classes above without altering sort logic.
    if (ths[i].hasAttribute("aria-sort")) {
      ths[i].setAttribute(
        "aria-sort",
        isActive ? (sortDir === "asc" ? "ascending" : "descending") : "none"
      );
    }
    var labelEl = ths[i].querySelector(".th-inner > span:first-child");
    if (labelEl) {
      ths[i].setAttribute("aria-label", sortHeaderA11yLabel(labelEl.textContent.trim(), isActive, sortDir));
    }
  }
}

function goToPage(pg) {
  var tp = totalPages();
  pg = Math.max(1, Math.min(pg, tp));
  if (pg === currentPage) return;
  currentPage = pg;
  renderTable();
  renderPagination();
  document.querySelector(".tbl-wrap").scrollTop = 0;
}

/* ═══ V4 page-shell scrollbar-gutter compensation ═══════════════════
   `.au-page`/`.cr-page` reserve a permanent `scrollbar-gutter: stable`
   track (pre-existing — keeps the centered `.au-shell` from shifting
   sideways between a short page/state, no real scrollbar, and a tall
   one, real scrollbar). That reservation lives on the *scrolling* box
   itself, so a normal `width: 100%` (or absolutely-positioned
   left:0/right:0) child is always exactly one scrollbar's-width
   narrower than the scrolling box's own border-box — there is no pure
   CSS way around this (the gutter is spec'd to behave like reserved
   padding on the affected edge, and both flow-width and abs-pos
   children resolve against that same, now-smaller, padding box).
   Page-header background region pass (Figma 1023:22021): the two new
   full-bleed `.au-page-header-surface` / `.au-page-main-surface`
   layers are `width: 100%` children of that same scrolling box, so
   without this fix they'd stop one scrollbar-width short of the
   page's own right edge — invisible on the old single-flat-background
   page (nothing to see a seam against), but a real light seam now
   that the main-content surface's darker wash needs to reach exactly
   as far right as the header surface above it.
   Fix: measure the *actual* reserved width for this browser/OS/zoom
   (never hardcode "15px" — overlay-scrollbar systems, browser zoom,
   and non-Chromium engines all reserve different amounts, and some
   reserve none) and feed it back in as `calc(100% + Npx)` via a CSS
   custom property, so the two surfaces bridge exactly onto the
   scrolling box's real border-box edge — no more, no less. */
function measureV4ScrollbarGutter() {
  var probe = document.createElement("div");
  probe.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;top:-9999px;left:-9999px;width:200px;height:100px;overflow-y:auto;scrollbar-gutter:stable;";
  probe.innerHTML = '<div style="height:400px"></div>';
  document.body.appendChild(probe);
  var w = Math.max(0, probe.offsetWidth - probe.clientWidth);
  document.body.removeChild(probe);
  document.documentElement.style.setProperty("--v4-scrollbar-gutter-w", w + "px");
  return w;
}

document.addEventListener("DOMContentLoaded", function () {
  /* Shared ADS sortable-header component — fills every table's sort
     icon slot and normalizes tabindex/aria-sort/scope once, before
     any table renders. See the block comment above SORT_ICON_SVG. */
  initSortableHeaders();

  measureV4ScrollbarGutter();
  window.addEventListener("resize", measureV4ScrollbarGutter);

  renderTable();
  renderPagination();

  /* Stamp total-users count into pagination footer from the single source of truth. */
  var totalEl = document.getElementById("usersTotalCount");
  if (totalEl) totalEl.textContent = TOTAL_ITEMS;

  /* ─── Segmented user-view toggle ─── */
  var toggle = document.getElementById("userViewToggle");
  if (toggle) {
    toggle.addEventListener("click", function (e) {
      var btn = e.target.closest(".seg-btn");
      if (btn && btn.dataset.view) switchUserView(btn.dataset.view);
    });
  }
  updateUserViewColumns();
  updateTotalLabel();
  setupStatusTooltip();

  /* ─── Row selection + Export (Figma 770:17428) ───
     Select-all always acts on the full current filtered result set
     (getFilteredData()), not just the visible page — see the block
     comment above syncUserSelectionUI(). Row checkboxes live in their
     own <td>, so toggling one never fires the tbody's separate
     a.name-link navigation handler. */
  var usersSelectAllEl = document.getElementById("usersSelectAll");
  if (usersSelectAllEl) {
    usersSelectAllEl.addEventListener("change", function () {
      var rows = getFilteredData();
      var i;
      if (usersSelectAllEl.checked) {
        for (i = 0; i < rows.length; i++) selectedUserIds[rows[i].id] = true;
      } else {
        for (i = 0; i < rows.length; i++) delete selectedUserIds[rows[i].id];
      }
      renderTable();
    });
  }

  var usersTbodyEl = document.getElementById("tbody");
  if (usersTbodyEl) {
    usersTbodyEl.addEventListener("change", function (e) {
      var cb = e.target.closest(".u-row-check");
      if (!cb) return;
      var uid = cb.getAttribute("data-user-id");
      if (!uid) return;
      if (cb.checked) selectedUserIds[uid] = true;
      else delete selectedUserIds[uid];
      var tr = cb.closest("tr[data-id]");
      if (tr) {
        tr.classList.toggle("is-selected", cb.checked);
        if (cb.checked) tr.setAttribute("aria-selected", "true");
        else tr.removeAttribute("aria-selected");
      }
      syncUserSelectionUI();
    });
  }

  var usersExportBtnEl = document.getElementById("usersExportBtn");
  if (usersExportBtnEl) {
    usersExportBtnEl.addEventListener("click", function () {
      exportSelectedUsers();
    });
  }

  /* ─── PROTOTYPE-ONLY: simulated Desktop + Excel wiring ───
     See exportSelectedUsers()/openSimulatedDesktop()/openSimulatedExcel()/
     returnToUserListFromPrototype() above for the full flow. Nothing
     here touches the real file system, downloads, or Excel — the file
     "icon" is a plain <button> and both "windows" are HTML overlays. */
  (function wireSimExportPrototype() {
    var fileIcon = document.getElementById("simExcelFileIcon");
    var desktopReturnBtn = document.getElementById("simDesktopReturn");
    var excelBackBtn = document.getElementById("simExcelBackBtn");
    var menubarClock = document.getElementById("simMenubarClock");

    /* Opening the file: click OR keyboard (Enter/Space on the focused
       button — native <button> semantics already give us this for
       free, this listener just needs "click", not a custom keydown).
       Explicit user action always wins over the auto-advance timer,
       whichever fires first. */
    if (fileIcon) {
      fileIcon.addEventListener("click", function () {
        if (prototypeScreen !== "desktop") return;
        openSimulatedExcel();
      });
    }
    if (desktopReturnBtn) {
      desktopReturnBtn.addEventListener("click", function () {
        returnToUserListFromPrototype();
      });
    }
    if (excelBackBtn) {
      excelBackBtn.addEventListener("click", function () {
        returnToUserListFromPrototype();
      });
    }
    /* Decorative traffic-light dots (red/yellow/green) are aria-hidden
       and non-interactive — .sim-excel-back-btn above is the single,
       clearly-labeled, keyboard-reachable close/return action. */

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var excelOv = document.getElementById("simExcelOverlay");
      var deskOv = document.getElementById("simDesktopOverlay");
      if (excelOv && !excelOv.hidden) { returnToUserListFromPrototype(); return; }
      if (deskOv && !deskOv.hidden) { returnToUserListFromPrototype(); }
    });

    if (menubarClock) {
      var updateClock = function () {
        menubarClock.textContent = new Date().toLocaleString(undefined, {
          weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
        });
      };
      updateClock();
      window.setInterval(updateClock, 30000);
    }
  })();

  /* ─── Column resize ─── Restores drag-to-resize on every visible
     column in both the Users and Roles & Permissions tables. Uses the
     existing `.col-resize-handle` styling already in styles.css.

     Behavior:
       • One shared implementation attached to both tables.
       • On mousedown of a handle, every column is "committed" to its
         current rendered pixel width and the table itself is pinned
         to its current pixel width. That way subsequent drags only
         resize the target column — adjacent columns do NOT reflow
         due to table-layout:fixed percentage redistribution.
       • The target column's width is then updated live on mousemove,
         clamped to a per-column MIN_WIDTHS value (chosen by content
         type so short cells like Status/Region can be narrow while
         long-content cells like Role/Description get sensible floors).
       • The table itself grows/shrinks to the sum of column widths,
         so `.tbl-wrap { overflow-x: auto }` naturally handles the
         horizontal scroll when a user widens a column beyond the
         container.
       • Clicking the handle never triggers the sort handler on the
         parent <th> (stopPropagation on mousedown + click).
       • The hidden Company Title column (data-u-col="ct") is skipped
         so no handle ever appears over a 0-width column.
     Sorting, search, filter, pagination, and sticky layout are not
     touched — only header cell widths change. */
  (function setupColumnResize() {
    /* Per-column minimum drag widths, chosen by content type so every
       column can still shrink to a *readable* state without ever
       collapsing to something unusable or letting content overlap
       neighbours. Content is always clipped by the cell's own
       overflow:hidden (see `.tbl th, .tbl td` in styles.css), so
       overlap is prevented by CSS; these floors simply keep the
       visible content meaningful when a user drags narrow.

       Short-content columns (single word / single badge):
         st  (Status, 60)   — icon-only status cell with compact header.
         rg  (Region, 80)   — 2–4 char codes ("NA", "EMEA").
         date(Create Date,120)— header "Create Date" ≈ 85px; body
                              "MM/DD/YYYY" ≈ 75px.
       Medium-content columns (short phrases / names):
         nm  (Name, 200)    — 48px avatar + gap + name text.
         tm  (Team, 140)    — team names can truncate gracefully
                              (e.g. "Agency & Holding Company Sales").
         ll  (Last Login,170)— full date strings ("Apr 30, 2026, 3:00 PM").
         by  (Created By,130)— user names ("Homer Simpson" ≈ 100px).
       Long-content columns (multi-item / long prose):
         em  (Email, 220)   — "first.last@disney.com" fits cleanly.
         rl  (Role, 220)    — one role + "+N role" chip fit at 220;
                              fitUsersRoleCells picks up from there.
         func(Functions,240)— keeps at least one app-group tag
                              visible alongside its (N) count button.

       Content that actually overflows a column at these floors falls
       back to the cell's CSS ellipsis + the truncation-gated tooltip
       (see getCellTruncationInfo), so nothing is ever lost — only
       visibly truncated when the column is too narrow to show it. */
    /* Per-column floor widths. Keys reflect the `data-*-col` attribute
       value on the <col> element. Added 2026-06-09 round 6:
         Teams (tmTable):       name 200, desc 240, mem 96, created 140
         Members (tmMembers):   name 180, em 220, role 180, actions 96
         Edit User Access:      app 180, level 140, summary 220
       Brief mandates Name/User ≥ 180, Role ≥ 180, Team/Company ≥ 180,
       Description ≥ 240, Status ≥ 96, Date ≥ 140, Action ≥ 72–96,
       Functions in matrix tables ≥ 180–220. Note Users-table `nm` was
       already set to 200 for the avatar + name layout; leaving that
       legacy floor in place. */
    var MIN_WIDTHS = {
      "nm": 200, "rl": 220, "st": 60, "tm": 140, "ll": 170, "rg": 80,
      "role": 160, "func": 240, "by": 130, "date": 120,

      "name": 200, "desc": 240, "mem": 96, "created": 140,
      "em": 220, "actions": 96,
      "app": 180, "level": 140, "summary": 220
    };
    /* Columns where a drag handle would never make sense, by data-key:
         ct      — hidden Company Title col (0-width in Users table)
         sel     — leading select-all/row-checkbox col (Figma 770:17428);
                   fixed-width by design, never user-resizable
       Note: previously this list also skipped Users `em` (email), but
       there is no design rule against resizing email; we now expose it. */
    var SKIP_KEYS = { "ct": 1, "sel": 1 };

    /* Read whatever data-*-col attribute a <col> declares. The shared
       resizer is now table-agnostic — Users (data-u-col), Roles
       (data-rp-col), Teams (data-tm-col), Edit Team Members
       (data-tmm-col), and Edit User Access (data-aueff-col) all map
       through the same MIN_WIDTHS table by key name. */
    function readColKey(col) {
      if (!col || !col.attributes) return "";
      for (var i = 0; i < col.attributes.length; i++) {
        var a = col.attributes[i];
        if (a && a.name && a.name.indexOf("data-") === 0 && a.name.slice(-4) === "-col") {
          return a.value || "";
        }
      }
      return "";
    }

    function attach(table) {
      if (!table) return;
      var colgroup = table.querySelector("colgroup");
      if (!colgroup) return;
      var cols = colgroup.children;
      var ths = table.querySelectorAll("thead th");
      for (var i = 0; i < ths.length; i++) {
        (function (idx) {
          var th = ths[idx];
          var col = cols[idx];
          if (!th || !col) return;
          if (th.querySelector(".col-resize-handle")) return;
          var key = readColKey(col);
          if (SKIP_KEYS[key]) return;
          var handle = document.createElement("span");
          handle.className = "col-resize-handle";
          handle.setAttribute("role", "separator");
          handle.setAttribute("aria-orientation", "vertical");
          handle.setAttribute("aria-label", "Resize column");
          handle.setAttribute("tabindex", "-1");
          handle.addEventListener("mousedown", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            startResize(ev, handle, table, cols, ths, idx, key);
          });
          handle.addEventListener("click", function (ev) { ev.stopPropagation(); });
          th.appendChild(handle);
        })(i);
      }
    }

    function startResize(ev, handle, table, cols, ths, idx, key) {
      for (var j = 0; j < cols.length; j++) {
        var thWidth = ths[j] ? ths[j].offsetWidth : 0;
        cols[j].style.width = thWidth + "px";
      }
      table.style.width = table.offsetWidth + "px";
      /* Drop any CSS-level min-width floor (e.g. .rp-tbl has 1244px)
         so explicit pixel widths are honored without being stretched. */
      table.style.minWidth = "0";

      var targetCol = cols[idx];
      var startX = ev.clientX;
      var startW = ths[idx].offsetWidth;
      var minW = MIN_WIDTHS[key] || 80;
      handle.classList.add("active");
      document.body.classList.add("col-resizing");

      /* When the Users table is being resized, re-fit the Role column
         live so "+N role" disappears as the drag widens and reappears
         as it narrows. rAF-throttled to avoid thrashing during fast
         drags; the trailing onUp call guarantees a final correct state
         even if the last mousemove was coalesced out. Only runs for
         the Users table since R&P's Role column uses a different
         layout. */
      var isUsersTable = table.id === "usersTable";
      var fitScheduled = false;
      function scheduleFit() {
        if (!isUsersTable || fitScheduled) return;
        fitScheduled = true;
        requestAnimationFrame(function () {
          fitScheduled = false;
          fitUsersRoleCells();
        });
      }

      function onMove(e) {
        var dx = e.clientX - startX;
        var newW = Math.max(minW, startW + dx);
        targetCol.style.width = newW + "px";
        var total = 0;
        for (var k = 0; k < cols.length; k++) {
          total += parseFloat(cols[k].style.width) || 0;
        }
        table.style.width = total + "px";
        scheduleFit();
      }
      function onUp() {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        handle.classList.remove("active");
        document.body.classList.remove("col-resizing");
        if (isUsersTable) fitUsersRoleCells();
      }
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    }

    attach(document.getElementById("usersTable"));
    attach(document.getElementById("rpTable"));
    /* Round 6 (2026-06-09): extend resizer to the rest of the V3
       table family. Each target ships with the same prerequisites the
       helper needs — a <colgroup> with `data-*-col` keys + a static
       <thead> whose <th>s persist across <tbody> re-renders. The
       handles are appended once per <th>; downstream tbody re-renders
       (e.g. team selection, role switch) never touch them.
         • tmTable        — Teams list
         • tmMembersTable — Edit Team Members
         • auEffTable     — Edit User Access (Effective access)
       The Create/Edit Role permission matrices are intentionally not
       attached — they don't carry a colgroup, and a column drag risks
       desynchronising header select-all checkboxes from body cell
       alignment. (Brief: "If matrix resizing is risky, report it and
       leave matrix tables unchanged rather than breaking them.") */
    attach(document.getElementById("tmTable"));
    attach(document.getElementById("tmMembersTable"));
    attach(document.getElementById("auEffTable"));

    /* ResizeObserver on the Users Role column header — guarantees
       fitUsersRoleCells() re-runs whenever the column's rendered
       width changes for *any* reason:
         • manual drag (already handled by onMove, but this is a
           safety net for edge cases like keyboard-driven width
           adjustments or browser zoom)
         • viewport resize (already handled by the resize listener
           in setupRightmostAlignment, also redundantly covered)
         • tab-switch visibility transition (display:none → "")
         • programmatic <col> width updates (setupRightmostAlignment
           writes pixel widths whenever it realigns to the CTA)
       Without this observer, a stale "+N role" chip could persist
       after one of those non-drag triggers changed the column's
       real width while the cell's innerHTML still reflected an
       older (narrower) state — which is the bug reported.

       rAF-throttled so a burst of resize ticks produces at most one
       fit per frame. `ResizeObserver` is supported in every modern
       browser; the guard falls back silently on older engines where
       the existing drag/render/window-resize hooks still cover the
       common paths. */
    if (typeof ResizeObserver !== "undefined") {
      var roleHead = document.querySelector("#usersTable th.c-rl");
      if (roleHead) {
        var roScheduled = false;
        var ro = new ResizeObserver(function () {
          if (roScheduled) return;
          roScheduled = true;
          requestAnimationFrame(function () {
            roScheduled = false;
            fitUsersRoleCells();
          });
        });
        ro.observe(roleHead);
      }
    }
  })();

  /* ─── Pixel-perfect rightmost-column → CTA alignment ───
     Locks the *left* edge of the rightmost data column (Create Date
     for R&P) to the *left* edge of the "+ Create Role" CTA above it
     — i.e. to the CTA's "+" icon anchor.

     Users' Region column USED to be the other half of this (anchored
     to "+ Add Users"), but that made Region's width — and its zero
     left padding — vary with the CTA's rendered position, which read
     as crowded/merged against Last login. Region is now a fixed
     ~100px column with normal left padding instead (see the
     usersTable-specific branch inside `align()` below and the
     `.c-rg` rule in styles.css); the CTA-anchor algorithm described
     here now only applies to R&P's Create Date column.

     Why JS and not just CSS:
       The CTA is right-anchored by `.tbar { padding-right: 56px }`,
       and its total width is `16px icon + 6px gap + text`, where the
       text width depends on font rendering and therefore varies
       across browsers/OSes. The column, in contrast, is declared as
       a percentage of the card. There is no viewport-independent %
       that makes these two values match. Measuring at runtime is
       the only way to get a truly pixel-exact anchor.

     Algorithm:
       1. Measure `tableRight - ctaLeft` — the CTA's left-edge offset
          from the table's right edge, in CSS pixels.
       2. Set the rightmost `<col>` to exactly that width. Combined
          with `padding-left: 0` on that column's cells (see
          styles.css), header and body content start precisely at the
          CTA's "+" x.
       3. Pro-rata shrink the other `<col>` widths so their new
          widths sum to `tableWidth − targetWidth`. This keeps the
          table flush with the card edge (no horizontal scrollbar,
          no collapsed columns).

     The existing column-resize feature (setupColumnResize above) is
     respected: once the user drags any column, a per-table flag is
     set so we stop auto-aligning for that tab — their manual sizes
     win. Tab switches and window resizes still trigger the initial
     alignment on untouched tables.

     None of the other columns' *content* or *order* changes; only
     their width is adjusted proportionally. CTAs are never moved. */
  (function setupRightmostAlignment() {
    var usersTable = document.getElementById("usersTable");
    var rpTable = document.getElementById("rpTable");
    /* Users toolbar wraps Add User in `.tbar-r` alongside Export (Figma
       770:17428 "Frame 627874" two-button group) so this can no longer
       be a direct-child selector; Roles' toolbar has no Export button
       and still has Add/Create as a direct `.tbar` child. */
    var addUsersBtn = document.getElementById("usersAddBtn") || document.querySelector("#usersPanel .tbar .btn-ghost");
    /* R58 fix: this used to be a direct-child selector (`.tbar >
       .btn-ghost`). Create Role was later moved into the same shared
       `.tbar-r` wrapper Users uses for Export + Add User (see the
       "Right-actions group" comment above #rolesPanel's markup in
       index.html), so the direct-child selector stopped matching
       anything — `createRoleBtn` was silently `null`, which made
       `align()`'s `if (!table || !cta) return;` guard bail out on
       *every* call. Net effect: Role/Functions/Created By/Create Date
       were never actually re-aligned by JS at all; they simply
       rendered at their raw CSS colgroup percentages (15/58/13/14%),
       which is exactly the flat, non-"intelligent" percentage growth
       this pass is trying to eliminate. Matching Users' descendant
       selector fixes it regardless of nesting depth. */
    var createRoleBtn = document.getElementById("rolesCreateBtn") || document.querySelector("#rolesPanel .tbar .btn-ghost");
    var dragged = { users: false, rp: false };

    /* ─── Left-side toolbar alignment (Round 38, 2026-08-12) ───
       Rounds 34/35 shifted each panel's `.tbar-l` group sideways with a
       JS-written inline `margin-left` so the Filter icon's glyph lined
       up with the active tab's LABEL. That anchor is wrong: a tab label
       sits at the tabs row's inset PLUS the tab component's own 16px
       internal padding, and — for any tab other than the first — plus
       every preceding tab's width. On Roles it computed a 94px inline
       margin, which is exactly the large unexplained blank area between
       the card's left edge and the Filter button that this round
       removes.
       Both toolbars now take their left inset from the ONE thing that
       already defines it for every panel — `.tbar`'s own horizontal
       padding (see `html[data-iam-version="v4"] .v4-card .tbar` in
       styles.css, shared by Users/Roles/Teams) — so Filter starts at
       the normal toolbar content inset on every tab, with no
       per-panel margin, spacer or absolute offset to drift out of sync.

       Round 39 (2026-08-12) keeps that mechanism and corrects the inset
       itself: `.tbar`'s start padding now resolves from the card's
       shared `--iam-card-content-inset` (32px, up from 16px), which is
       the edge the tab LABELS and the first table column were already
       rendering at. So Filter lands on the same vertical line as
       "Users", the checkbox column and the pagination text on every tab
       — still with zero per-panel offsets, and still without the tabs
       row and the toolbar sharing a text baseline. */

    /* Users' Select column left inset — read from the card's shared
       `--iam-card-content-inset` property, the single source of truth
       for where every row of the Access Management card starts (tab
       labels, toolbar, first table column, pagination). Only used below
       to size that column's colgroup track; the cells themselves are
       positioned by the stylesheet, so header and body can't drift.
       Falls back to the property's own desktop value if the card isn't
       in the DOM yet. */
    function selColPadLeft() {
      var card = document.querySelector(".v4-card");
      var v = card ? getComputedStyle(card).getPropertyValue("--iam-card-content-inset") : "";
      return parseFloat(v) || 32;
    }

    function align(table, cta, rightColKey, keyAttr) {
      if (!table || !cta) return;
      if (table.offsetWidth <= 0) return; /* hidden (e.g. other tab) */
      var colgroup = table.querySelector("colgroup");
      if (!colgroup) return;
      var cols = colgroup.children;
      var rightCol = colgroup.querySelector("col[" + keyAttr + '="' + rightColKey + '"]');
      if (!rightCol) return;
      var rightIdx = -1;
      for (var i = 0; i < cols.length; i++) {
        if (cols[i] === rightCol) { rightIdx = i; break; }
      }
      if (rightIdx < 0) return;
      var ths = table.querySelectorAll("thead th");
      if (!ths.length) return;

      var tableRect = table.getBoundingClientRect();
      var ctaRect = cta.getBoundingClientRect();
      /* Size against the wrapper, not a previously stretched table.
         Otherwise a wider viewport's pixel tracks stick and the last
         column grows into the scroll overflow instead of the card edge. */
      var wrap = table.parentElement;
      var availWidth = (wrap && wrap.clientWidth) ? wrap.clientWidth : tableRect.width;
      var wrapLeft = wrap ? wrap.getBoundingClientRect().left : tableRect.left;
      var contentRight = wrapLeft + availWidth;
      var tableWidth = availWidth;
      var targetRightPx = Math.round(contentRight - ctaRect.left);

      /* Users only — Round 25 (2026-08-11) column rebalance. Name was too
         narrow to comfortably show the avatar + full name + a useful
         slice of the email, while Role/Team carried more width than
         their real content needed. Replaces the old fixed 50/30/20
         flexPool split with an explicit min-width + proportional "fr"
         grow model — the JS equivalent of this CSS Grid track spec
         (Select | Name | Role | Status | Team | Last login | Region):
           40px | minmax(240px,1.2fr) | minmax(320px,2fr) | 92px |
           minmax(220px,1.4fr) | 170px | 96px
         Name/Role/Team share any extra space beyond their minimums in
         a 1.2 : 2 : 1.4 ratio — Role and Team absorb most of the
         growth on wide screens while Name settles near its 240–280px
         preferred range; Status/Last login stay fixed regardless of
         width. Doesn't need `targetRightPx`/the CTA for most of this,
         but Round 34 (2026-08-11 — toolbar/table horizontal-alignment
         pass) reintroduces a CTA-anchored value for Region (against
         "Add User", the same behavior an earlier Region implementation
         had before Round 25 replaced it with a flat 96px) — see below.
         Column order: [sel(0), nm(1), em(2,hidden), rl(3), st(4),
         tm(5), ct(6,hidden), ll(7), rg(8=rightIdx)]. */
      if (table.id === "usersTable" && cols.length >= 9 && rightIdx === 8) {
        /* Select column's left inset. Round 34 drove this from the
           "Users" tab label's x-coordinate (via the removed
           `alignToolbarFilterWithTab`); Round 38 hands it back to the
           table's own stylesheet, which owns this column's padding
           (`#usersTable th.c-sel`/`td.c-sel` in styles.css). The
           constant below only has to AGREE with that padding so the
           colgroup reserves the right width for it — the header and
           body cells themselves are positioned by the shared CSS rule,
           not shifted independently from here. */
        var filterBtn = document.getElementById("usersFilterBtn");
        var selPadLeft = selColPadLeft();

        /* The wrapper's clientWidth — not `tableWidth` (the table's OWN
           rect, from `table.getBoundingClientRect()` above) — is the
           true "available space" input. Once the narrow-viewport branch
           below has forced the table wider than its wrapper at least
           once, `tableWidth` on the NEXT call would already reflect
           that stale forced-wide value, so measuring the wrapper
           directly avoids a feedback loop that could only ever grow.
           This same staleness risk applies to `targetRightPx` (computed
           above from `tableRect.right`, which is exactly that same
           potentially-stale rect) — the Region alignment below uses
           `assumedTableRight` (this call's `tableRect.left` — always
           accurate; the table never moves horizontally — plus the
           WRAPPER's live width) instead, so a runaway feedback loop
           can never compound across calls the way `targetRightPx`
           could. */
        var uWrap = table.parentElement;
        var availWidth = (uWrap && uWrap.clientWidth) ? uWrap.clientWidth : tableWidth;
        var assumedTableRight = tableRect.left + availWidth;

        /* ─── Right-side alignment (Round 34): Region's left edge lines
           up with "Add User"'s left edge — the same CTA-anchoring idea
           `align()` already uses for R&P's Create Date column, applied
           here against the table's true (non-stale) available right
           edge instead of a flat 96px. Falls back to the flat 96px
           whenever the toolbar has wrapped onto a second row (Add User
           no longer shares Filter's row — see the responsive spec, "do
           not force Region to remain aligned … after the actions
           wrap"), the CTA sits outside the table's own span entirely
           (defensive), or the computed value would be too narrow for
           "Region" + its sort icon to render without clipping. */
        var toolbarWrapped = true;
        if (filterBtn) {
          var filterTop = filterBtn.getBoundingClientRect().top;
          toolbarWrapped = Math.abs(ctaRect.top - filterTop) > 4;
        }
        var regionTargetWidth = Math.round(assumedTableRight - ctaRect.left);
        var FIXED_SEL = selPadLeft + 16 /* checkbox */ + 12 /* trailing gap before Name */;
        var FIXED_ST = 92, FIXED_LL = 170;
        var FIXED_RG = (!toolbarWrapped && regionTargetWidth >= 100 && regionTargetWidth <= availWidth * 0.5)
          ? regionTargetWidth
          : 96;
        var MIN_NM = 240, MIN_RL = 320, MIN_TM = 220;
        var FR_NM = 1.2, FR_RL = 2, FR_TM = 1.4;
        var FIXED_TOTAL = FIXED_SEL + FIXED_ST + FIXED_LL + FIXED_RG;
        var MIN_FLEX_TOTAL = MIN_NM + MIN_RL + MIN_TM;
        var MIN_TABLE_WIDTH = FIXED_TOTAL + MIN_FLEX_TOTAL;
        var targetTableWidth = Math.max(availWidth, MIN_TABLE_WIDTH);
        var extra = Math.max(0, targetTableWidth - MIN_TABLE_WIDTH);
        var frTotal = FR_NM + FR_RL + FR_TM;
        var nmW = Math.round(MIN_NM + (extra * FR_NM) / frTotal);
        var tmW = Math.round(MIN_TM + (extra * FR_TM) / frTotal);
        /* Role absorbs any rounding drift from nm/tm — it's the
           largest, most-flexible column, so a stray ±1px here is
           invisible next to its own width. */
        var rlW = targetTableWidth - FIXED_TOTAL - nmW - tmW;
        cols[0].style.width = FIXED_SEL + "px";  /* sel */
        cols[1].style.width = nmW + "px";        /* nm  */
        cols[2].style.width = "0px";              /* em  (hidden) */
        cols[3].style.width = rlW + "px";        /* rl  */
        cols[4].style.width = FIXED_ST + "px";   /* st  */
        cols[5].style.width = tmW + "px";        /* tm  */
        cols[6].style.width = "0px";              /* ct  (hidden) */
        cols[7].style.width = FIXED_LL + "px";   /* ll  */
        cols[8].style.width = FIXED_RG + "px";   /* rg  */
        /* Force the table to this exact width. At/above
           MIN_TABLE_WIDTH it simply equals the wrapper's width
           (same as CSS `width: 100%`); below it, this makes the table
           wider than its wrapper so table-layout:fixed honors every
           column's declared px width instead of silently shrinking
           columns under their minimums — `.tbl-wrap`'s existing
           `overflow-x: auto` then provides real horizontal scrolling. */
        table.style.width = targetTableWidth + "px";
        return;
      }

      if (targetRightPx < 40 || targetRightPx >= tableWidth) return;

      /* Capture current rendered THs once, BEFORE any inline widths
         are written. We redistribute proportionally from this
         snapshot so repeated calls converge rather than drift. */
      var oldWidths = [];
      var oldTotalOthers = 0;
      for (var j = 0; j < ths.length; j++) {
        var w = ths[j] ? ths[j].offsetWidth : 0;
        oldWidths.push(w);
        if (j !== rightIdx) oldTotalOthers += w;
      }
      var newTotalOthers = tableWidth - targetRightPx;
      if (oldTotalOthers <= 0 || newTotalOthers <= 0) return;

      /* R&P (Roles & Permissions) — keep Role and Created By fixed at a
         deliberate content-based width; give 100% of the remaining
         slack to Functions (the long free-text column). Column order
         after the checkbox removal (2026-05-29): [role(0), func(1),
         by(2), date(3)]. The Date column is the right-anchor for
         alignment, so `rightIdx === 3`.
         R58: these were previously pinned to *whatever width they
         happened to render at* on the first call (`oldWidths[0]` /
         `oldWidths[2]`), which meant their "fixed" width silently
         varied by whatever viewport the page happened to first load
         at. Deliberate constants make Role/Created By/Create Date
         behave the same as Users' Checkbox/Status/Last login: content-
         based and viewport-independent, so Functions is the only
         column that grows as the page widens. */
      if (table.id === "rpTable" && oldWidths.length >= 4 && rightIdx === 3) {
        var MIN_FUNC = 220;
        var ROLE_PX = 180, BY_PX = 150;
        var rem = newTotalOthers - ROLE_PX - BY_PX;
        if (rem >= MIN_FUNC) {
          cols[0].style.width = ROLE_PX + "px";
          cols[1].style.width = Math.max(MIN_FUNC, rem) + "px";
          cols[2].style.width = BY_PX + "px";
          cols[3].style.width = targetRightPx + "px";
          table.style.width = availWidth + "px";
          return;
        }
      }

      var scale = newTotalOthers / oldTotalOthers;

      for (var k = 0; k < cols.length; k++) {
        if (k === rightIdx) {
          cols[k].style.width = targetRightPx + "px";
        } else {
          cols[k].style.width = Math.max(1, Math.round(oldWidths[k] * scale)) + "px";
        }
      }
    }

    function alignUsers() {
      /* v4.1 list geometry: Select/Status/Last login fixed, Name/Role/Team
         share leftover 1.2:2:1.4, Region anchored to Add User. */
      if (dragged.users) return;
      align(usersTable, addUsersBtn, "rg", "data-u-col");
    }
    function alignRP() {
      /* v4.1 list geometry: Role and Created By fixed, Functions takes
         the slack, Create Date anchored to Create Role. */
      if (dragged.rp) return;
      align(rpTable, createRoleBtn, "date", "data-rp-col");
      if (typeof rpFuncApplyOverflow === "function") rpFuncApplyOverflow();
    }

    /* Initial alignment. Users is visible on load; R&P is hidden
       until the user switches, so only Users runs here. */
    alignUsers();

    /* R58: re-run alignment on *any* actual change to `main.page`'s
       rendered width, not only real browser-window resizes. Several
       things can change the table's available width without ever
       firing a `window` "resize" event:
         • the sidebar's collapsed/expanded attribute is applied by a
           separate init script and can land a frame or two after this
           IIFE's first synchronous run, so the very first alignUsers()
           call above can measure the *pre-collapse* (wider padding)
           width and — with nothing else to re-trigger it — stay wrong
           for the rest of the page's life;
         • toggling the sidebar open/closed later (nav "«"/"»" control);
         • a custom @font-face webfont (InspireTWDC/MultiplaneTWDC)
           swapping in after first paint and changing the CTA/table
           text metrics;
         • `scrollbar-gutter` reservation appearing/disappearing as
           row count changes page height.
       A ResizeObserver on `main.page` itself catches all of these
       uniformly (it fires whenever the observed box's own size
       changes, regardless of cause), so this subsumes the old
       fonts.ready-only follow-up call. rAF + a trailing timer collapse
       bursts (e.g. the 160ms sidebar width transition firing many
       observer callbacks) into one settle pass after motion stops. */
    (function watchPageWidthForAlignment() {
      var pageEl = document.querySelector("main.page");
      if (!pageEl || typeof ResizeObserver === "undefined") return;
      var raf = null;
      var settleTimer = null;
      function resettle() {
        alignUsers();
        alignRP();
        fitUsersRoleCells();
      }
      var ro = new ResizeObserver(function () {
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          resettle();
          if (settleTimer) clearTimeout(settleTimer);
          /* One more pass shortly after the last observed change, so
             a still-animating CSS transition (sidebar width) settles
             on its *final* width rather than whatever mid-transition
             frame the observer happened to fire on. */
          settleTimer = setTimeout(resettle, 200);
        });
      });
      ro.observe(pageEl);
    })();

    /* Tab-switch: align the now-visible table on the next frame so
       the display:"" has actually taken effect in layout. The Users
       tab also re-runs fitUsersRoleCells() so the Role column
       overflow chip is re-evaluated against whatever width the Role
       column has now — prevents a stale "+N role" chip from lingering
       when the viewport was resized or columns were realigned while
       the Users table was hidden. */
    var tabBtns = document.querySelectorAll(".tab-btn");
    if (tabBtns[0]) tabBtns[0].addEventListener("click", function () {
      requestAnimationFrame(function () {
        alignUsers();
        fitUsersRoleCells();
      });
    });
    if (tabBtns[1]) tabBtns[1].addEventListener("click", function () {
      requestAnimationFrame(alignRP);
    });

    /* Window resize: re-align both tables (whichever is visible).
       The CTA's offset-from-table-right is viewport-invariant in
       theory, but the proportional redistribution of other columns
       needs to be re-computed against the new table width. */
    var resizeTimer = null;
    window.addEventListener("resize", function () {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        alignUsers();
        alignRP();
        /* Role column overflow re-adapts to the new column width so
           the "+N role" chip disappears on wider viewports and comes
           back only when the content actually overflows. */
        fitUsersRoleCells();
      }, 80);
    });

    /* If the user drags any column on a given table, stop
       auto-aligning that table so our re-runs don't fight their
       manual sizing. Captured at the document level so it works for
       handles created after this block runs too. */
    document.addEventListener("mousedown", function (e) {
      var t = e.target;
      if (!t || !t.classList || !t.classList.contains("col-resize-handle")) return;
      var tbl = t.closest && t.closest("table");
      if (!tbl) return;
      if (tbl.id === "usersTable") dragged.users = true;
      else if (tbl.id === "rpTable") dragged.rp = true;
    }, true);
  })();

  /* ─── User menu (profile dropdown + theme + version switchers) ───
     Wires the avatar trigger, the Theme submenu, the Version submenu,
     sub-item selection, outside-click/Escape close, and persists the
     chosen theme. The Version submenu navigates between the separate
     v1–v4 prototype builds (`../v1/`, `../v2/`, `../v3/`, `../v4/`); it
     never mutates page state — it just hands off via `location.assign`.

     Version submenu content: rendered at load time from the shared
     `window.IAM_VERSIONS` list (see `../version-config.js`) rather than
     hardcoded per build, so adding/removing a version is a one-file edit
     that every build's menu picks up. `IAM_CURRENT_VERSION_ID` is the one
     thing each build still declares locally — it's this bundle's own
     identity, used only to mark the matching item selected/checked (never
     hardcoded to a *different* version, and re-derived from this
     constant on every render rather than baked into static HTML).

     Keyboard: the Theme/Version/Log Out rows and their sub-items use a
     roving-tabindex menu pattern (ArrowUp/Down move the roving tab stop,
     Home/End jump to the first/last item, Enter/Space activates, and
     ArrowRight opens / Escape or ArrowLeft closes a submenu and returns
     focus to its parent row) so the menu is fully operable without a
     mouse, matching the ADS menu keyboard pattern. Mouse hover/click
     continue to work exactly as before — this is additive. */
  (function setupUserMenu() {
    /* V4.1 (2026-08-11): this bundle's own identity, so its Version
       submenu marks "4.1 (ADS)" selected/checked instead of "4.0
       (ADS)". This is the ONLY functional difference from the V4
       source this folder was duplicated from — see version-config.js
       for the full V4.1 entry and README-style comment. */
    var IAM_CURRENT_VERSION_ID = "v4.2";

    var menu = document.getElementById("userMenu");
    var trigger = document.getElementById("userMenuTrigger");
    var pop = document.getElementById("userMenuPop");
    var themeRow = document.getElementById("userMenuTheme");
    var versionRow = document.getElementById("userMenuVersion");
    var redlineRow = document.getElementById("userMenuRedline");
    var logoutRow = document.getElementById("userMenuLogout");
    if (!menu || !trigger || !pop || !themeRow) return;

    var versionSub = versionRow ? versionRow.querySelector(".user-menu-sub") : null;

    /* Render the Version submenu from the shared config. Re-run any time
       we need a fresh, correctly-selected item list (just once, on load —
       the current version never changes without a full page navigation). */
    function renderVersionSubmenu() {
      if (!versionSub || !window.IAM_VERSIONS) return;
      var html = "";
      for (var i = 0; i < window.IAM_VERSIONS.length; i++) {
        var v = window.IAM_VERSIONS[i];
        var selected = v.id === IAM_CURRENT_VERSION_ID;
        var href = window.iamVersionHref ? window.iamVersionHref(v.folder) : "../" + v.folder + "/";
        html += '<div class="user-menu-sub-item' + (selected ? " is-selected" : "") +
          '" role="menuitemradio" aria-checked="' + (selected ? "true" : "false") +
          '" data-version-id="' + v.id + '" data-version="' + v.label +
          '" data-version-href="' + href + '" tabindex="-1">' + v.label + "</div>";
      }
      versionSub.innerHTML = html;
    }
    renderVersionSubmenu();

    /* Scope sub-item lookups by submenu owner. Earlier this used a single
       `pop.querySelectorAll(".user-menu-sub-item")` which conflated Theme
       and Version children — clicking a Version item would call
       applyTheme(null) and silently reset the theme to EDL Light. Version
       items are re-queried on demand (see `subItemsOf`) since they're
       regenerated above, rather than captured once here. */
    var themeItems = themeRow.querySelectorAll(".user-menu-sub-item");
    var THEME_KEY = "atlas:theme";

    /* Theme controller — generic over any number of themes.
       "light" is the EDL Light default and is represented by the *absence*
       of the data-theme attribute (this preserves the pre-existing EDL Light
       behavior exactly). Any other string is applied verbatim as the
       data-theme attribute value, which lets isolated theme layers like
       [data-theme="dark"] (EDL Dark) and [data-theme="ads-preview"]
       (ADS Preview) activate via CSS without any new JS branching. */
    function currentTheme() {
      var v = document.documentElement.getAttribute("data-theme");
      return v ? v : "light";
    }

    function syncSelection() {
      var cur = currentTheme();
      for (var i = 0; i < themeItems.length; i++) {
        var it = themeItems[i];
        var on = it.getAttribute("data-theme") === cur;
        it.classList.toggle("is-selected", on);
        it.setAttribute("aria-checked", on ? "true" : "false");
      }
    }

    function applyTheme(val) {
      if (!val || val === "light") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", val);
      }
      try { localStorage.setItem(THEME_KEY, val || "light"); } catch (e) {}
      syncSelection();
    }

    /* ── Roving-tabindex keyboard menu ──────────────────────────────
       ROWS = the top-level menuitems (Version, Theme, Redline, Log Out —
       skips any that don't exist on this build). Only one row/sub-item
       has tabindex="0" at a time; arrow keys move that single tab stop.
       Redline has no submenu (not a `has-sub` row), so it falls through
       the same generic Enter/Space -> `row.click()` path Log Out already
       uses below; its actual click handler is registered by redline.js
       itself (`wireProfileMenuRow()`), not here. */
    var ROWS = [versionRow, themeRow, redlineRow, logoutRow].filter(function (r) { return !!r; });
    var rowIndex = 0;

    function subItemsOf(row) {
      return row ? Array.prototype.slice.call(row.querySelectorAll(".user-menu-sub-item")) : [];
    }

    function focusRow(idx) {
      rowIndex = ((idx % ROWS.length) + ROWS.length) % ROWS.length;
      for (var i = 0; i < ROWS.length; i++) {
        ROWS[i].setAttribute("tabindex", i === rowIndex ? "0" : "-1");
      }
      ROWS[rowIndex].focus();
    }

    function focusSubItem(items, idx, parentRow) {
      var n = ((idx % items.length) + items.length) % items.length;
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute("tabindex", i === n ? "0" : "-1");
      }
      items[n].focus();
    }

    function openRowSubmenu(row) {
      row.setAttribute("aria-expanded", "true");
      var items = subItemsOf(row);
      if (!items.length) return;
      var startAt = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("is-selected")) { startAt = i; break; }
      }
      focusSubItem(items, startAt, row);
    }

    function closeRowSubmenu(row) {
      row.setAttribute("aria-expanded", "false");
      focusRow(ROWS.indexOf(row));
    }

    function openMenu() {
      menu.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      focusRow(0);
    }
    function closeMenu() {
      menu.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      themeRow.setAttribute("aria-expanded", "false");
      if (versionRow) versionRow.setAttribute("aria-expanded", "false");
    }
    function toggleMenu() {
      if (menu.classList.contains("open")) closeMenu(); else openMenu();
    }

    syncSelection();

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!menu.classList.contains("open")) openMenu();
      }
    });

    themeRow.addEventListener("click", function (e) {
      if (e.target.closest(".user-menu-sub-item")) return;
      e.stopPropagation();
      var expanded = themeRow.getAttribute("aria-expanded") === "true";
      themeRow.setAttribute("aria-expanded", expanded ? "false" : "true");
    });

    for (var ti = 0; ti < themeItems.length; ti++) {
      themeItems[ti].addEventListener("click", function (e) {
        e.stopPropagation();
        var val = this.getAttribute("data-theme");
        if (val) applyTheme(val);
        closeMenu();
        trigger.focus();
      });
    }

    /* Version submenu — opens like Theme (click toggles aria-expanded; CSS
       hover also reveals it). Selecting an unselected version navigates to
       that build's HTML entry point; selecting the current version is a
       no-op aside from closing the menu. Delegated on the container (not
       bound per-item) so it keeps working after `renderVersionSubmenu`
       regenerates the item nodes. */
    if (versionRow) {
      versionRow.addEventListener("click", function (e) {
        if (e.target.closest(".user-menu-sub-item")) return;
        e.stopPropagation();
        var expanded = versionRow.getAttribute("aria-expanded") === "true";
        versionRow.setAttribute("aria-expanded", expanded ? "false" : "true");
      });

      versionRow.addEventListener("click", function (e) {
        var item = e.target.closest(".user-menu-sub-item");
        if (!item) return;
        e.stopPropagation();
        if (item.classList.contains("is-selected")) {
          closeMenu();
          trigger.focus();
          return;
        }
        var href = item.getAttribute("data-version-href");
        closeMenu();
        if (href) window.location.assign(href);
      });
    }

    if (logoutRow) {
      logoutRow.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMenu();
        trigger.focus();
      });
    }

    /* Row-level keyboard handling: Up/Down/Home/End move the roving tab
       stop among ROWS; Enter/Space/ArrowRight opens a has-sub row's
       submenu (or activates Log Out); Escape closes the whole menu. */
    ROWS.forEach(function (row) {
      row.addEventListener("keydown", function (e) {
        /* Only handle these keys when the ROW itself is focused. Key
           events from a focused sub-item bubble up to this same
           listener (since has-sub rows contain their sub-items) — the
           dedicated sub-item handler below owns that case instead. */
        if (e.target !== row) return;
        var isSub = row.classList.contains("has-sub");
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            focusRow(rowIndex + 1);
            break;
          case "ArrowUp":
            e.preventDefault();
            focusRow(rowIndex - 1);
            break;
          case "Home":
            e.preventDefault();
            focusRow(0);
            break;
          case "End":
            e.preventDefault();
            focusRow(ROWS.length - 1);
            break;
          case "ArrowRight":
            if (isSub) {
              e.preventDefault();
              openRowSubmenu(row);
            }
            break;
          case "Enter":
          case " ":
          case "Spacebar":
            e.preventDefault();
            if (isSub) {
              openRowSubmenu(row);
            } else {
              row.click();
            }
            break;
          case "Escape":
            e.preventDefault();
            closeMenu();
            trigger.focus();
            break;
          case "Tab":
            closeMenu();
            break;
        }
      });
    });

    /* Sub-item keyboard handling: Up/Down/Home/End roam the open
       submenu's items; Enter/Space activates (reuses the existing click
       handler so theme/version selection logic stays in one place);
       Escape/ArrowLeft closes the submenu and returns focus to its row. */
    [versionRow, themeRow].forEach(function (row) {
      if (!row) return;
      row.addEventListener("keydown", function (e) {
        var item = e.target.closest(".user-menu-sub-item");
        if (!item) return;
        var items = subItemsOf(row);
        var idx = items.indexOf(item);
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            focusSubItem(items, idx + 1, row);
            break;
          case "ArrowUp":
            e.preventDefault();
            focusSubItem(items, idx - 1, row);
            break;
          case "Home":
            e.preventDefault();
            focusSubItem(items, 0, row);
            break;
          case "End":
            e.preventDefault();
            focusSubItem(items, items.length - 1, row);
            break;
          case "Enter":
          case " ":
          case "Spacebar":
            e.preventDefault();
            item.click();
            break;
          case "Escape":
          case "ArrowLeft":
            e.preventDefault();
            closeRowSubmenu(row);
            break;
          case "Tab":
            closeMenu();
            break;
        }
      });
    });

    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("open")) return;
      if (menu.contains(e.target)) return;
      closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open") && !menu.contains(e.target)) {
        closeMenu();
        trigger.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "T" || e.key === "t")) {
        e.preventDefault();
        applyTheme(currentTheme() === "dark" ? "light" : "dark");
      }
    });
  })();

  /* ─── EDL Tooltip (universal cell-truncation + role-extra hover) ───
     One shared EDL tooltip element serves two jobs across BOTH tables:

       1. `.role-extra` (the "+N role" chip on Users): multi-line
          tooltip listing every role for that user (existing behavior
          preserved verbatim; `data-tooltip` carries \n-separated roles).

       2. Any table cell whose content is actually clipped by the
          column width: single-line tooltip with the full cell value.
          Truncation is detected at hover time via
          `scrollWidth > clientWidth`, so the tooltip appears only when
          content is genuinely cut off — if the user resizes a column
          wide enough to reveal the full value, no tooltip shows. This
          plays naturally with the column-resize feature.

     R&P Functions column (`.rp-func`) is excluded: no truncation tooltip
     there (see `getCellTruncationInfo`).

     The handler is bound to every `.tbl-wrap` so both the Users and
     R&P tables behave identically. `focusin`/`focusout` on focusable
     truncatable elements (`.role-extra`, `.rp-role-link`) provides
     keyboard parity with mouse hover. */
  var tooltip = document.createElement("div");
  tooltip.className = "edl-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  function showTooltipFor(anchorEl, text, multiline) {
    if (!text) return;
    if (multiline) {
      tooltip.innerHTML = text.split("\n").map(function (r) {
        return '<div class="edl-tooltip-line">' + esc(r) + '</div>';
      }).join("");
    } else {
      tooltip.innerHTML = '<div class="edl-tooltip-line">' + esc(text) + '</div>';
    }
    tooltip.classList.add("visible");
    positionTooltip(anchorEl);
  }

  /* Roles-list tooltip variant — adds a "Used in roles" caption above
     the role-name lines. Reuses the same .edl-tooltip element, anchor
     positioning, and below/above caret logic; only the body markup
     gains the leading title row. Called from the Permission Management
     "Used in" cell hover. */
  function showRolesTooltipFor(anchorEl, titleText, roleNames) {
    if (!roleNames || roleNames.length === 0) return;
    var html = '<div class="edl-tooltip-title">' + esc(titleText) + '</div>';
    for (var i = 0; i < roleNames.length; i++) {
      html += '<div class="edl-tooltip-line">' + esc(roleNames[i]) + '</div>';
    }
    tooltip.innerHTML = html;
    tooltip.classList.add("visible");
    positionTooltip(anchorEl);
  }

  function positionTooltip(anchorEl) {
    var rect = anchorEl.getBoundingClientRect();
    var tw = tooltip.offsetWidth;
    var th = tooltip.offsetHeight;
    var left = rect.left + rect.width / 2 - tw / 2;
    var top = rect.top - th - 8;
    if (left < 4) left = 4;
    if (left + tw > window.innerWidth - 4) left = window.innerWidth - tw - 4;
    if (top < 4) { top = rect.bottom + 8; tooltip.classList.add("below"); } else { tooltip.classList.remove("below"); }
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  }

  function hideTooltip() {
    tooltip.classList.remove("visible");
    tooltip.classList.remove("below");
  }

  /* Finds the element inside a cell that is actually being truncated
     (if any). Some cells delegate their truncation to an inner wrapper
     (e.g. Users `.c-nm` keeps the td open and truncates `.name-link`
     inside). R&P Functions (`.rp-func`) has no truncation tooltip. */
  function getCellTruncationInfo(td) {
    if (!td) return null;
    if (td.classList.contains("empty-state")) return null;
    if (td.classList.contains("c-ct")) return null; // hidden Company Title column
    if (td.classList.contains("rp-func")) return null;
    /* Role column: the primary label is the only truncating child.
       Additional roles have their own always-available count-badge
       tooltip, so hovering a clipped primary should reveal just that
       complete primary label through the shared ADS tooltip. */
    if (td.classList.contains("c-rl")) {
      var primary = td.querySelector(".role-primary");
      if (primary && primary.scrollWidth > primary.clientWidth + 1) {
        return { el: primary, text: primary.textContent.trim() };
      }
      return null;
    }
    var INNER_SELECTORS = ".name-link";
    var innerMatches = td.querySelectorAll(INNER_SELECTORS);
    for (var i = 0; i < innerMatches.length; i++) {
      var inner = innerMatches[i];
      if (inner.scrollWidth > inner.clientWidth + 1) {
        var innerText = inner.getAttribute("title") || td.getAttribute("title") || inner.textContent.trim();
        return { el: inner, text: innerText };
      }
    }
    if (td.scrollWidth > td.clientWidth + 1) {
      var cellText = td.getAttribute("title") || td.textContent.trim();
      return { el: td, text: cellText };
    }
    return null;
  }

  function handleCellHover(e) {
    /* Permission Management "Used in" cell — titled multi-line
       roles tooltip. Checked before the generic .role-extra branch
       so the .pm-used-roles span uses its own caption ("Used in
       roles") instead of falling through to the +N role variant. */
    var rolesTip = e.target.closest("[data-roles-tip]");
    if (rolesTip) {
      var rolesText = rolesTip.getAttribute("data-roles-tip");
      if (rolesText) showRolesTooltipFor(rolesTip, "Used in roles", rolesText.split("\n"));
      return;
    }
    var extra = e.target.closest(".role-more, .role-extra");
    if (extra) {
      var lines = extra.getAttribute("data-tooltip");
      if (lines) showTooltipFor(extra, lines, true);
      return;
    }
    var td = e.target.closest("td");
    if (!td) { hideTooltip(); return; }
    var info = getCellTruncationInfo(td);
    if (info) showTooltipFor(info.el, info.text, false);
    else hideTooltip();
  }

  var tblWraps = document.querySelectorAll(".tbl-wrap");
  for (var twi = 0; twi < tblWraps.length; twi++) {
    tblWraps[twi].addEventListener("mouseover", handleCellHover);
    tblWraps[twi].addEventListener("mouseleave", hideTooltip);
  }

  /* Keyboard focus parity for actually-focusable truncatable elements. */
  document.addEventListener("focusin", function (e) {
    var rolesTip = e.target.closest("[data-roles-tip]");
    if (rolesTip) {
      var rolesText = rolesTip.getAttribute("data-roles-tip");
      if (rolesText) showRolesTooltipFor(rolesTip, "Used in roles", rolesText.split("\n"));
      return;
    }
    var extra = e.target.closest(".role-more, .role-extra");
    if (extra) {
      var lines = extra.getAttribute("data-tooltip");
      if (lines) showTooltipFor(extra, lines, true);
      return;
    }
    /* Users-table Name link — keyboard-focus parity for the same
       truncation-tooltip mouse hover already gets via the generic
       `td` branch in handleCellHover(). Needed because `getCellTruncationInfo`
       only special-cases `.name-link` when the ENCLOSING `td` receives
       the event (mouseover bubbles up to `.tbl-wrap`), but `focusin`
       lands on the `<a>` itself — same detection (`scrollWidth >
       clientWidth`) and same shared ADS tooltip, just anchored
       explicitly to the link so it never sits over the wrong cell. */
    var nameLink = e.target.closest(".name-link");
    if (nameLink) {
      var nameTd = nameLink.closest("td");
      var nameInfo = getCellTruncationInfo(nameTd);
      if (nameInfo) showTooltipFor(nameInfo.el, nameInfo.text, false);
      return;
    }
    var link = e.target.closest(".rp-role-link");
    if (link) {
      var td = link.closest("td");
      var info = getCellTruncationInfo(td);
      if (info) showTooltipFor(link, info.text, false);
    }
  });
  document.addEventListener("focusout", function (e) {
    if (e.target.closest(".role-more, .role-extra, .rp-role-link, .name-link, [data-roles-tip]")) hideTooltip();
  });

  /* Per-role custom permission grids for Create Role / Edit Role
     prefill. Keys MUST match the canonical PM group names exposed by
     PC_GROUP_FOR_KEY (e.g. "Order" not "Orders") because Create Role
     resolves checkbox identity by `data-resource` which is set from
     the derived `app.resources[].title`. Adding entries here that
     reference groups PM does not define has no effect — the
     pre-checking pass simply skips unmatched rows. */
  var ROLE_ACCESS_DETAILS = {
    /* Empty since the workbook migration: every role's per-group actions
       are now read straight from its grants (`roleGrantsByGroup`), so
       there is nothing left for a hand-written override to correct. The
       hook stays because a future role could still need one. */
  };

  /* ─── R&P Functions Popover (click-activated) ───
     Trigger: semantic access link inside .rp-func.
     Content: application + access level + grouped permissions.
     Dismiss: click outside / Escape / another trigger. */
  var funcPop = document.createElement("div");
  funcPop.className = "func-popover";
  funcPop.setAttribute("role", "dialog");
  /* A dialog needs an accessible name; the application heading that
     showFuncPop() writes into the popover is the visible one. */
  funcPop.setAttribute("aria-labelledby", "rpFuncPopTitle");
  funcPop.id = "rpFuncPopover";
  document.body.appendChild(funcPop);

  var funcPopTrigger = null;
  /* APP_ACCESS_MODEL drives the R&P Functions popover (the
     "groups + presets" view that shows when you click a function-
     count link in the Role Assignment table). It is keyed by PM app
     token (IAM / Core Planning / ICM / TOM / Disney Ads Agent) so
     `accessActionsFor()` can look it up by the same token the role
     records use. Groups + presets are derived from PM via the shared
     helpers, so this view stays in lockstep with PM and with the
     Create Role panel. */
  var APP_ACCESS_MODEL = (function buildAppAccessModelFromPM() {
    var out = {};
    var tokens = Object.keys(PM_TOKEN_TO_CR_APP);
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var crKey = PM_TOKEN_TO_CR_APP[token];
      var levels = APP_LEVELS_BY_CR_KEY[crKey] || [];
      out[token] = {
        groups:  pmGroupsForAppToken(token),
        presets: deriveBundlesForApp(crKey, levels)
      };
    }
    return out;
  })();

  function accessActionsFor(appName, level) {
    var model = APP_ACCESS_MODEL[appName];
    if (!model) return {};
    var bundle = model.presets[level];
    if (!bundle) bundle = model.presets["View Only"] || {};
    var groups = {};
    for (var i = 0; i < model.groups.length; i++) {
      var group = model.groups[i];
      groups[group] = (bundle[group] || []).slice();
    }
    return groups;
  }

  function getRoleAppAccessDetails(roleId, appName, accessLevel) {
    if (accessLevel === "Custom Access") accessLevel = "Custom";
    /* The role's own grants first. A summary level is a description of
       those grants, so expanding the summary should show the grants
       themselves — reconstructing them from the level's bundle would
       reprint the label's approximation back at the reader, and for a
       "Custom" role there is no bundle to reprint at all. The bundle
       remains the fallback for a role the registry does not define. */
    var custom = ROLE_ACCESS_DETAILS[roleId] && ROLE_ACCESS_DETAILS[roleId][appName];
    var granted = CANONICAL_ROLE_BY_ID[roleId] ? roleGrantsByGroup(roleId, appName) : null;
    var groups = custom || (granted && Object.keys(granted).length ? granted : accessActionsFor(appName, accessLevel));
    return {
      level: accessLevel || "Custom",
      groups: groups
    };
  }

  function hideFuncPop() {
    if (!funcPop.classList.contains("visible")) return;
    funcPop.classList.remove("visible");
    funcPop.classList.remove("above");
    if (funcPopTrigger) funcPopTrigger.setAttribute("aria-expanded", "false");
    funcPopTrigger = null;
  }

  function showFuncPop(btn) {
    var app = btn.getAttribute("data-app") || "";
    var appDisplay = app;
    var roleId = btn.getAttribute("data-role-id") || "";
    var accessLevel = btn.getAttribute("data-access") || "Custom";
    if (accessLevel === "Custom Access") accessLevel = "Custom";
    var detail = getRoleAppAccessDetails(roleId, app, accessLevel);
    var html = '<div class="func-pop-title" id="rpFuncPopTitle">' + esc(appDisplay) + '</div>' +
      '<div class="func-pop-access">Access level: ' + esc(detail.level) + '</div>' +
      '<div class="permission-detail-list func-pop-permissions">';
    var model = APP_ACCESS_MODEL[app] || { groups: [] };
    for (var g = 0; g < model.groups.length; g++) {
      var group = model.groups[g];
      var actions = detail.groups[group] || [];
      if (!actions.length) continue;
      html +=
        '<div class="permission-row">' +
          '<div class="permission-label">' + esc(group) + ':</div>' +
          '<div class="permission-values">' + esc(actions.join(", ")) + '</div>' +
        '</div>';
    }
    html += '</div>';
    funcPop.innerHTML = html;
    funcPop.classList.add("visible");

    var rect = btn.getBoundingClientRect();
    var pw = funcPop.offsetWidth;
    var ph = funcPop.offsetHeight;

    var left = rect.left + rect.width / 2 - pw / 2;
    if (left < 8) left = 8;
    if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;

    var top = rect.bottom + 8;
    var above = false;
    if (top + ph > window.innerHeight - 8) {
      top = rect.top - ph - 8;
      above = true;
    }
    funcPop.classList.toggle("above", above);

    var caretLeft = rect.left + rect.width / 2 - left;
    if (caretLeft < 10) caretLeft = 10;
    if (caretLeft > pw - 10) caretLeft = pw - 10;
    funcPop.style.setProperty("--caret-left", caretLeft + "px");

    funcPop.style.left = left + "px";
    funcPop.style.top = top + "px";

    btn.setAttribute("aria-expanded", "true");
    funcPopTrigger = btn;
  }

  var rolesTblWrap = document.querySelector("#rolesPanel .tbl-wrap");
  if (rolesTblWrap) {
    rolesTblWrap.addEventListener("click", function (e) {
      var more = e.target.closest(".rp-func-more");
      if (more) {
        e.preventDefault();
        e.stopPropagation();
        var tip = more.getAttribute("data-tooltip");
        if (tip && typeof showTooltipFor === "function") showTooltipFor(more, tip, true);
        return;
      }
      var btn = e.target.closest(".rp-func-link");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        if (funcPopTrigger === btn) { hideFuncPop(); return; }
        hideFuncPop();
        showFuncPop(btn);
        return;
      }
    });
    rolesTblWrap.addEventListener("mouseover", function (e) {
      var more = e.target.closest(".rp-func-more");
      if (!more) return;
      var tip = more.getAttribute("data-tooltip");
      if (tip && typeof showTooltipFor === "function") showTooltipFor(more, tip, true);
    });
    rolesTblWrap.addEventListener("mouseout", function (e) {
      var more = e.target.closest(".rp-func-more");
      if (!more) return;
      var next = e.relatedTarget;
      if (next && more.contains(next)) return;
      if (typeof hideTooltip === "function") hideTooltip();
    });
  }
  document.addEventListener("click", function (e) {
    if (!funcPop.classList.contains("visible")) return;
    if (e.target.closest("#rpFuncPopover")) return;
    if (e.target.closest(".rp-func-link")) return;
    hideFuncPop();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && funcPop.classList.contains("visible")) {
      var t = funcPopTrigger;
      hideFuncPop();
      if (t) t.focus();
    }
  });
  window.addEventListener("scroll", hideFuncPop, true);
  window.addEventListener("resize", hideFuncPop);

  /* ─── EDL Search Component ───
     Owns the Users toolbar's search field: query state (`searchTerm`,
     read by getFilteredData()/hasActiveFilters()), the recent-searches
     dropdown, the clear action and keyboard handling. Roles
     (`#rpSearchWrap`) and Teams (`#tmSearchWrap`) keep their own
     separate search wiring elsewhere in this file.
     The whole block stays guarded behind `if (searchWrap)`: Round 24
     (2026-08-11) deleted the field's markup from index.html and this
     guard is what let every consumer here survive that removal
     untouched (`searchTerm` simply stayed "", indistinguishable from
     "no query" to the Filter drawer / segmented control / sort /
     pagination). Round 38 (2026-08-12) restored the markup, so the
     guard passes again and the original behavior came back with it —
     keep the guard rather than assuming the element exists. */
  var MAX_RECENT = 5;
  var recentSearches = JSON.parse(localStorage.getItem("iam_recent_searches") || "[]");
  var searchWrap = document.getElementById("searchWrap");
  if (searchWrap) {
  var searchInput = document.getElementById("searchInput");
  var searchClear = document.getElementById("searchClear");
  var searchIco = document.getElementById("searchIco");
  var searchDD = document.getElementById("searchDropdown");
  var searchDDContent = document.getElementById("searchDDContent");
  var searchOpen = false;

  var CLOCK_SVG = '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/></svg>';

  function saveRecent() {
    localStorage.setItem("iam_recent_searches", JSON.stringify(recentSearches));
  }

  function addRecentSearch(term) {
    if (!term) return;
    for (var i = recentSearches.length - 1; i >= 0; i--) {
      if (recentSearches[i].toLowerCase() === term.toLowerCase()) recentSearches.splice(i, 1);
    }
    recentSearches.unshift(term);
    if (recentSearches.length > MAX_RECENT) recentSearches.length = MAX_RECENT;
    saveRecent();
  }

  document.body.appendChild(searchDD);

  function positionSearchDD() {
    var rect = searchInput.getBoundingClientRect();
    searchDD.style.left = rect.left + "px";
    searchDD.style.top = (rect.bottom - 1) + "px";
    searchDD.style.width = rect.width + "px";
  }

  function openSearchDD() {
    if (searchOpen) return;
    searchOpen = true;
    searchWrap.classList.add("open");
    searchDD.classList.add("open");
    positionSearchDD();
    renderSearchDD();
  }

  function closeSearchDD() {
    if (!searchOpen) return;
    searchOpen = false;
    searchWrap.classList.remove("open");
    searchDD.classList.remove("open");
  }

  window.addEventListener("resize", function () { if (searchOpen) positionSearchDD(); });
  window.addEventListener("scroll", function () { if (searchOpen) positionSearchDD(); }, true);

  function updateSearchVisuals() {
    var hasVal = searchInput.value.length > 0;
    searchWrap.classList.toggle("has-value", hasVal);
    searchClear.classList.toggle("hidden", !hasVal);
  }

  function renderSearchDD() {
    var val = searchInput.value.trim();
    var html = "";

    if (val) {
      var count = getFilteredData().length;
      html += '<div class="search-dd-info"><strong>' + count + '</strong> result' + (count !== 1 ? 's' : '') + ' for \u201C' + esc(val) + '\u201D</div>';
      if (recentSearches.length > 0) {
        html += '<div class="search-dd-divider"></div>';
        html += '<p class="search-dd-label">Recent searches</p>';
        for (var i = 0; i < recentSearches.length; i++) {
          html += '<div class="search-dd-item" data-term="' + esc(recentSearches[i]) + '">' + CLOCK_SVG + '<span>' + esc(recentSearches[i]) + '</span></div>';
        }
      }
    } else {
      if (recentSearches.length > 0) {
        html += '<p class="search-dd-label">Recent searches</p>';
        for (var j = 0; j < recentSearches.length; j++) {
          html += '<div class="search-dd-item" data-term="' + esc(recentSearches[j]) + '">' + CLOCK_SVG + '<span>' + esc(recentSearches[j]) + '</span></div>';
        }
      } else {
        html += '<p class="search-dd-empty">No recent searches</p>';
      }
    }

    searchDDContent.innerHTML = html;
  }

  function executeSearch(term) {
    searchInput.value = term;
    searchTerm = term.trim();
    updateSearchVisuals();
    currentPage = 1;
    renderTable();
    renderPagination();
    if (searchOpen) renderSearchDD();
  }

  searchInput.addEventListener("input", function () {
    searchTerm = this.value.trim();
    updateSearchVisuals();
    currentPage = 1;
    renderTable();
    renderPagination();
    if (searchOpen) renderSearchDD();
  });

  searchInput.addEventListener("focus", function () {
    openSearchDD();
  });

  searchInput.addEventListener("click", function () {
    if (!searchOpen) openSearchDD();
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var term = this.value.trim();
      if (term) addRecentSearch(term);
      closeSearchDD();
      this.blur();
    }
    if (e.key === "Escape") {
      closeSearchDD();
      this.blur();
    }
  });

  searchClear.addEventListener("click", function (e) {
    e.stopPropagation();
    searchInput.value = "";
    searchTerm = "";
    updateSearchVisuals();
    currentPage = 1;
    renderTable();
    renderPagination();
    searchInput.focus();
    if (searchOpen) renderSearchDD();
  });

  document.addEventListener("mousedown", function (e) {
    if (!searchWrap.contains(e.target) && !searchDD.contains(e.target)) {
      closeSearchDD();
    }
  });

  searchInput.addEventListener("blur", function () {
    setTimeout(function () {
      if (document.activeElement !== searchInput && !searchDD.contains(document.activeElement)) {
        closeSearchDD();
      }
    }, 150);
  });

  searchDDContent.addEventListener("click", function (e) {
    var item = e.target.closest(".search-dd-item");
    if (!item) return;
    var term = item.getAttribute("data-term");
    addRecentSearch(term);
    executeSearch(term);
    closeSearchDD();
    searchInput.blur();
  });
  } /* end if (searchWrap) — EDL Search Component */

  document.querySelector("thead").addEventListener("click", function (e) {
    var th = e.target.closest("th[data-sort]");
    if (th) applySort(th.dataset.sort);
  });

  // Keyboard activation for sortable headers (Enter/Space), matching the
  // click behavior above. Only fires for headers that opted into
  // tabindex, so existing sort logic and other tables are unaffected.
  document.querySelector("thead").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    var th = e.target.closest("th[data-sort][tabindex]");
    if (!th) return;
    e.preventDefault();
    applySort(th.dataset.sort);
  });

  document.querySelector(".pg-nums").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-pg]");
    if (btn) goToPage(parseInt(btn.dataset.pg, 10));
  });

  document.querySelector('.pg-nav[aria-label="First"]').addEventListener("click", function () { goToPage(1); });
  document.querySelector('.pg-nav[aria-label="Prev"]').addEventListener("click", function () { goToPage(currentPage - 1); });
  document.querySelector('.pg-nav[aria-label="Next"]').addEventListener("click", function () { goToPage(currentPage + 1); });
  document.querySelector('.pg-nav[aria-label="Last"]').addEventListener("click", function () { goToPage(totalPages()); });

  function closeAllPgnDd() {
    var dds = document.querySelectorAll(".pgn-dd");
    for (var pi = 0; pi < dds.length; pi++) {
      detachCrDdLayeredMenu(dds[pi]);
      dds[pi].classList.remove("open");
      var ptr = dds[pi].querySelector(".cr-dd-trigger");
      if (ptr) ptr.setAttribute("aria-expanded", "false");
    }
  }

  function togglePgnDd(dd, trigger) {
    if (!dd || !trigger) return;
    var willOpen = !dd.classList.contains("open");
    closeAllPgnDd();
    if (willOpen) {
      dd.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      attachCrDdLayeredMenu(dd);
    }
  }

  document.addEventListener("mousedown", function (e) {
    if (e.target.closest(".pgn-dd") || e.target.closest(".cr-dd-menu.is-layered")) return;
    closeAllPgnDd();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeAllPgnDd();
    var aup = document.getElementById("addUsersPage");
    if (!aup || aup.style.display === "none") return;
    if (typeof window.__closeAuRemoveUserModal === "function") window.__closeAuRemoveUserModal();
    if (typeof window.__closeAllAddUserCombos === "function") window.__closeAllAddUserCombos();
    var openDd = aup.querySelectorAll(".cr-dd.open");
    for (var oi = 0; oi < openDd.length; oi++) {
      detachCrDdLayeredMenu(openDd[oi]);
      openDd[oi].classList.remove("open");
      var trg = openDd[oi].querySelector(".cr-dd-trigger");
      if (trg) trg.setAttribute("aria-expanded", "false");
    }
  });

  (function wireUsersPaginationDd() {
    var usersJumpMenu = document.getElementById("usersJumpMenu");
    var usersPageSizeMenu = document.getElementById("usersPageSizeMenu");
    var usersJumpDD = document.getElementById("usersJumpDD");
    var usersJumpTrigger = document.getElementById("usersJumpTrigger");
    var usersPageSizeDD = document.getElementById("usersPageSizeDD");
    var usersPageSizeTrigger = document.getElementById("usersPageSizeTrigger");
    if (usersJumpMenu) {
      usersJumpMenu.addEventListener("click", function (e) {
        var row = e.target.closest("[data-users-jump]");
        if (!row) return;
        goToPage(parseInt(row.getAttribute("data-users-jump"), 10));
        closeAllPgnDd();
      });
    }
    if (usersPageSizeMenu) {
      usersPageSizeMenu.addEventListener("click", function (e) {
        var row = e.target.closest("[data-users-psize]");
        if (!row) return;
        pageSize = parseInt(row.getAttribute("data-users-psize"), 10);
        currentPage = 1;
        closeAllPgnDd();
        renderTable();
        renderPagination();
      });
    }
    if (usersJumpDD && usersJumpTrigger) {
      usersJumpTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePgnDd(usersJumpDD, usersJumpTrigger);
      });
    }
    if (usersPageSizeDD && usersPageSizeTrigger) {
      usersPageSizeTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePgnDd(usersPageSizeDD, usersPageSizeTrigger);
      });
    }
  })();

  var overlay = document.getElementById("fltOverlay");
  var drawer  = document.getElementById("fltDrawer");
  var filterBtn = document.querySelector(".tbar .btn-std");

  function openFilter() {
    filterSnapshot = { name: filters.name, email: filters.email, role: filters.role, status: filters.status, team: filters.team, title: filters.title, region: filters.region };
    syncDrawerToFilters();
    overlay.classList.add("open");
    drawer.classList.add("open");
  }
  function closeFilter() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
  }
  function restoreSnapshot() {
    if (!filterSnapshot) return;
    for (var k in filterSnapshot) filters[k] = filterSnapshot[k];
    filterSnapshot = null;
    currentPage = 1;
    renderTable();
    renderPagination();
  }
  function applyFiltersLive() {
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  if (filterBtn) filterBtn.addEventListener("click", openFilter);
  document.getElementById("fltClose").addEventListener("click", function () { restoreSnapshot(); closeFilter(); });
  document.getElementById("fltCancel").addEventListener("click", function () { restoreSnapshot(); closeFilter(); });
  overlay.addEventListener("click", function () { restoreSnapshot(); closeFilter(); });

  /* ─── Text input live filtering ─── */
  var fltInputs = [
    { id: "fltName",  key: "name" },
    { id: "fltEmail", key: "email" },
    { id: "fltTeam",  key: "team" }
  ];

  function updateClearBtn(input) {
    var btn = input.parentNode.querySelector(".flt-input-clear");
    if (btn) btn.classList.toggle("hidden", !input.value);
  }

  for (var fi = 0; fi < fltInputs.length; fi++) {
    (function (cfg) {
      var input = document.getElementById(cfg.id);
      input.addEventListener("input", function () {
        filters[cfg.key] = this.value.trim();
        updateClearBtn(this);
        applyFiltersLive();
      });
    })(fltInputs[fi]);
  }

  drawer.addEventListener("click", function (e) {
    var clearBtn = e.target.closest(".flt-input-clear");
    if (!clearBtn) return;
    var input = document.getElementById(clearBtn.getAttribute("data-for"));
    input.value = "";
    input.focus();
    input.dispatchEvent(new Event("input"));
  });

  /* ─── EDL Combo Box ─── searchable dropdown with keyboard nav ─── */
  var CHECK_SVG = '<svg class="edl-combo-check" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>';
  var CHEV_SVG = '<svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';
  var CLEAR_SVG = '<svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>';

  /* The combo is shared between the Users filter drawer (live-apply) and
     the R&P filter drawer (apply-on-click). `filterObj` is the object the
     selection is written into, and `onChange` is the callback that fires
     after each selection — Users passes `filters` + `applyFiltersLive`,
     R&P passes its draft object + a no-op (commit happens only on Apply). */
  function initCombo(containerId, options, filterKey, allLabel, filterObj, onChange, menuExtraClass) {
    if (!filterObj) filterObj = filters;
    if (!onChange) onChange = applyFiltersLive;
    var container = document.getElementById(containerId);
    if (!container) {
      function noop() {}
      noop.setOptions = noop;
      noop.close = noop;
      noop.setDisabled = noop;
      return noop;
    }
    var optionList = options && options.slice ? options.slice() : (options || []);
    var selectedValue = (filterObj[filterKey] != null && filterObj[filterKey] !== "")
      ? String(filterObj[filterKey])
      : "";
    var kbIndex = -1;
    var isOpen = false;
    var inputId = containerId + "-ctl";
    var menuClass = "edl-combo-menu";
    if (menuExtraClass) menuClass += " " + menuExtraClass;
    else if (containerId === "roleCombo") menuClass += " edl-combo-menu--iam-roles";

    container.innerHTML =
      '<div class="edl-combo-input-wrap">' +
        '<input type="text" id="' + esc(inputId) + '" class="edl-combo-input" placeholder="' + esc(allLabel) + '" autocomplete="off">' +
        '<button type="button" class="edl-combo-clear hidden" aria-label="Clear">' + CLEAR_SVG + '</button>' +
        '<button type="button" class="edl-combo-toggle" aria-label="Toggle dropdown">' + CHEV_SVG + '</button>' +
      '</div>';

    var menu = document.createElement("div");
    menu.className = menuClass;
    document.body.appendChild(menu);

    var input = container.querySelector(".edl-combo-input");
    var clearBtn = container.querySelector(".edl-combo-clear");
    var toggleBtn = container.querySelector(".edl-combo-toggle");

    function labelForValue(val) {
      if (val === undefined || val === null || val === "") return "";
      for (var li = 0; li < optionList.length; li++) {
        if (String(optionList[li].value) === String(val)) return optionList[li].label;
      }
      return String(val);
    }

    function getDisplayLabel() {
      return selectedValue ? labelForValue(selectedValue) : "";
    }

    function getVisibleItems() {
      return menu.querySelectorAll(".edl-combo-item:not([style*='display: none']):not(.is-disabled)");
    }

    function positionMenu() {
      var rect = input.getBoundingClientRect();
      menu.style.left = rect.left + "px";
      menu.style.top = rect.bottom + "px";
      menu.style.width = rect.width + "px";
    }

    function renderMenu(filterText) {
      var q = (filterText || "").toLowerCase();
      var html = "";
      if (!optionList.length) {
        menu.innerHTML = '<div class="edl-combo-empty">No matches</div>';
        kbIndex = -1;
        return;
      }
      for (var i = 0; i < optionList.length; i++) {
        var opt = optionList[i];
        var match = !q || opt.label.toLowerCase().indexOf(q) !== -1;
        var dis = !!opt.disabled;
        html += '<div class="edl-combo-item' + (dis ? " is-disabled" : "") + (String(opt.value) === String(selectedValue) ? " selected" : "") + '"' +
          ' data-value="' + esc(opt.value) + '"' +
          (dis ? ' aria-disabled="true"' : "") +
          (match ? "" : ' style="display:none"') + ">" +
          "<span>" + esc(opt.label) + "</span>" +
          CHECK_SVG +
        "</div>";
      }
      var visible = 0;
      for (var j = 0; j < optionList.length; j++) {
        if (!q || optionList[j].label.toLowerCase().indexOf(q) !== -1) visible++;
      }
      if (visible === 0) html += '<div class="edl-combo-empty">No matches</div>';
      menu.innerHTML = html;
      kbIndex = -1;
    }

    function openMenu() {
      if (input.disabled) return;
      if (isOpen) return;
      isOpen = true;
      var openMenus = document.querySelectorAll(".edl-combo-menu.open");
      for (var i = 0; i < openMenus.length; i++) openMenus[i].classList.remove("open");
      var openCombos = document.querySelectorAll(".edl-combo.open");
      for (var j = 0; j < openCombos.length; j++) openCombos[j].classList.remove("open");
      container.classList.add("open");
      menu.classList.add("open");
      positionMenu();
      renderMenu(input.value === getDisplayLabel() ? "" : input.value);
    }

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      container.classList.remove("open");
      menu.classList.remove("open");
      kbIndex = -1;
      input.value = getDisplayLabel();
      updateClear();
    }

    function updateClear() {
      clearBtn.classList.toggle("hidden", !selectedValue);
      input.placeholder = allLabel;
    }

    function selectValue(val) {
      selectedValue = val != null && val !== "" ? String(val) : "";
      filterObj[filterKey] = selectedValue;
      input.value = getDisplayLabel();
      updateClear();
      onChange();
    }

    function updateKbHighlight() {
      var items = getVisibleItems();
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("kb-highlight", i === kbIndex);
        if (i === kbIndex) items[i].scrollIntoView({ block: "nearest" });
      }
    }

    input.addEventListener("focus", function () {
      if (input.disabled) return;
      if (selectedValue && input.value === getDisplayLabel()) input.select();
      openMenu();
    });

    input.addEventListener("click", function () {
      if (input.disabled) return;
      if (!isOpen) openMenu();
    });

    input.addEventListener("input", function () {
      if (input.disabled) return;
      if (!isOpen) openMenu();
      renderMenu(this.value);
    });

    input.addEventListener("keydown", function (e) {
      if (input.disabled) return;
      if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        e.preventDefault();
        openMenu();
        return;
      }
      if (!isOpen) return;
      var items = getVisibleItems();
      var count = items.length;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!count) return;
        kbIndex = (kbIndex + 1) % count;
        updateKbHighlight();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!count) return;
        kbIndex = (kbIndex - 1 + count) % count;
        updateKbHighlight();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (kbIndex >= 0 && kbIndex < count) {
          selectValue(items[kbIndex].getAttribute("data-value"));
        }
        closeMenu();
        input.blur();
      } else if (e.key === "Escape") {
        closeMenu();
        input.blur();
      }
    });

    toggleBtn.addEventListener("mousedown", function (e) {
      e.preventDefault();
      if (input.disabled) return;
      if (isOpen) { closeMenu(); input.blur(); } else { input.focus(); }
    });

    clearBtn.addEventListener("mousedown", function (e) {
      e.preventDefault();
      if (input.disabled) return;
      selectValue("");
      input.value = "";
      input.focus();
      if (isOpen) renderMenu("");
    });

    menu.addEventListener("mousedown", function (e) {
      e.preventDefault();
      var item = e.target.closest(".edl-combo-item");
      if (!item || item.classList.contains("is-disabled")) return;
      selectValue(item.getAttribute("data-value"));
      closeMenu();
      input.blur();
    });

    menu.addEventListener("mousemove", function (e) {
      var item = e.target.closest(".edl-combo-item");
      if (!item || item.classList.contains("is-disabled")) return;
      var items = getVisibleItems();
      for (var i = 0; i < items.length; i++) {
        if (items[i] === item) { kbIndex = i; break; }
      }
      updateKbHighlight();
    });

    document.addEventListener("mousedown", function (e) {
      if (isOpen && !container.contains(e.target) && !menu.contains(e.target)) closeMenu();
    });

    function setValue(val) {
      selectedValue = val != null && val !== "" ? String(val) : "";
      filterObj[filterKey] = selectedValue;
      input.value = getDisplayLabel();
      updateClear();
      renderMenu("");
    }

    setValue.setOptions = function (newOpts) {
      optionList = newOpts && newOpts.slice ? newOpts.slice() : (newOpts || []);
      var still = false;
      for (var vi = 0; vi < optionList.length; vi++) {
        if (String(optionList[vi].value) === String(selectedValue)) { still = true; break; }
      }
      if (!still) {
        selectedValue = "";
        filterObj[filterKey] = "";
      }
      input.value = getDisplayLabel();
      updateClear();
      renderMenu("");
    };

    setValue.close = function () {
      closeMenu();
    };

    setValue.setDisabled = function (dis) {
      var off = !!dis;
      input.disabled = off;
      toggleBtn.disabled = off;
      clearBtn.disabled = off;
      if (off) closeMenu();
    };

    input.value = getDisplayLabel();
    updateClear();
    renderMenu("");
    return setValue;
  }

  var statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" }
  ];
  var regionOptions = [
    { value: "NA", label: "NA" },
    { value: "EMEA", label: "EMEA" },
    { value: "ANZ", label: "ANZ" },
    { value: "LATAM", label: "LATAM" }
  ];

  var setRole   = initCombo("roleCombo",   buildUserRoleFilterOptions(), "role",   "All Roles", filters, applyFiltersLive, "edl-combo-menu--iam-roles");
  var setStatus = initCombo("statusCombo", statusOptions, "status", "All Statuses");
  var setRegion = initCombo("regionCombo", regionOptions, "region", "All Regions");

  function syncDrawerToFilters() {
    document.getElementById("fltName").value = filters.name;
    document.getElementById("fltEmail").value = filters.email;
    document.getElementById("fltTeam").value = filters.team;
    setRole(filters.role);
    setStatus(filters.status);
    setRegion(filters.region);
    for (var i = 0; i < fltInputs.length; i++) updateClearBtn(document.getElementById(fltInputs[i].id));
  }

  /* ─── Apply: commit filters and close ─── */
  document.getElementById("fltApply").addEventListener("click", function () {
    filterSnapshot = null;
    closeFilter();
  });

  /* ─── Reset: clear all drawer filters ─── */
  document.getElementById("fltReset").addEventListener("click", function () {
    filters = { name: "", email: "", role: "", status: "", team: "", title: "", region: "" };
    filterSnapshot = null;
    syncDrawerToFilters();
    currentPage = 1;
    renderTable();
    renderPagination();
  });

  /* Display names for the Functions column — referenced by both the table
     renderer (below) and the R&P filter drawer combo (just below). Declared
     up here so the drawer, which initialises at page load, sees the full
     mapping rather than a hoisted-but-undefined var. */
  var RP_FUNC_DISPLAY_NAME = (function () {
    var out = {};
    for (var token in WB_GROUPS_BY_TOKEN) {
      if (!Object.prototype.hasOwnProperty.call(WB_GROUPS_BY_TOKEN, token)) continue;
      out[token] = appDisplayNameForToken(token);
    }
    return out;
  })();

  /* Map Functions filter combo value (full label or legacy short label) → data key. */
  function rpFunctionsFilterKeyFromLabel(label) {
    if (!label) return label;
    if (RP_FUNC_DISPLAY_NAME[label]) return label;
    for (var k in RP_FUNC_DISPLAY_NAME) {
      if (RP_FUNC_DISPLAY_NAME[k] === label) return k;
    }
    return label;
  }

  /* ═══ ROLES & PERMISSIONS FILTER DRAWER ═══
     Structural mirror of the Users drawer above — same .flt-* classes and
     .edl-combo component — with two behavioural differences:
       1. Fields are scoped to R&P columns (Role, Description, Functions,
          Created By, Create Date).
       2. Selections are DRAFTED in the drawer and only committed to the
          table on Apply (prompt spec: "results update after clicking
          Apply"). Cancel / Close / overlay-click all discard the draft. */

  /* Committed (applied) filter state — read by getRPFilteredData(). */
  var rpFilters = { role: "", description: "", functions: "", createdBy: "", createDate: "" };
  /* Draft state — mutated live by drawer inputs / combos. */
  var rpDrawerDraft = { role: "", description: "", functions: "", createdBy: "", createDate: "" };

  /* Functions options — pulled from the live dataset + RP_FUNC_DISPLAY_NAME
     so added/renamed apps flow through without hand-maintained lists. */
  function buildRPFunctionsOptions() {
    var seen = {};
    for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
      var fns = ROLES_PERMISSIONS_DATA[i].functions;
      for (var j = 0; j < fns.length; j++) seen[fns[j].name] = true;
    }
    var opts = [];
    for (var k in seen) {
      var label = (RP_FUNC_DISPLAY_NAME && RP_FUNC_DISPLAY_NAME[k]) || k;
      opts.push({ value: label, label: label });
    }
    opts.sort(function (a, b) { return a.label.localeCompare(b.label); });
    return opts;
  }

  function buildRPCreatorOptions() {
    var seen = {};
    for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) seen[ROLES_PERMISSIONS_DATA[i].createdBy] = true;
    var opts = [];
    for (var k in seen) opts.push({ value: k, label: k });
    opts.sort(function (a, b) { return a.label.localeCompare(b.label); });
    return opts;
  }

  var rpOverlay = document.getElementById("rpFltOverlay");
  var rpDrawer  = document.getElementById("rpFltDrawer");
  var rpFilterBtn = document.getElementById("rpFilterBtn");

  /* Combos write into rpDrawerDraft; Apply commits to rpFilters. */
  var setRPFunctions = initCombo("rpFunctionsCombo", buildRPFunctionsOptions(), "functions", "All Functions", rpDrawerDraft, function () {});
  var setRPCreator   = initCombo("rpCreatorCombo",   buildRPCreatorOptions(),   "createdBy", "All Creators",  rpDrawerDraft, function () {});

  var rpFltInputs = [
    { id: "rpFltRole", key: "role" },
    { id: "rpFltDesc", key: "description" },
    { id: "rpFltDate", key: "createDate" }
  ];

  function updateRPClearBtn(input) {
    var btn = input.parentNode.querySelector(".flt-input-clear");
    if (btn) btn.classList.toggle("hidden", !input.value);
  }

  for (var rfi = 0; rfi < rpFltInputs.length; rfi++) {
    (function (cfg) {
      var input = document.getElementById(cfg.id);
      input.addEventListener("input", function () {
        rpDrawerDraft[cfg.key] = (cfg.key === "createDate") ? this.value : this.value.trim();
        updateRPClearBtn(this);
      });
    })(rpFltInputs[rfi]);
  }

  rpDrawer.addEventListener("click", function (e) {
    var clearBtn = e.target.closest(".flt-input-clear");
    if (!clearBtn) return;
    var input = document.getElementById(clearBtn.getAttribute("data-for"));
    input.value = "";
    input.focus();
    input.dispatchEvent(new Event("input"));
  });

  /* Populate the drawer from the currently applied filters. Called on
     every open and after Cancel so the drawer always reflects the
     committed state (not a stale draft).

     IMPORTANT: mutate the existing draft object in place — initCombo
     captured the reference at init time, so reassigning a new object
     would strand combo writes on the old reference. */
  function syncRPDrawerFromApplied() {
    rpDrawerDraft.role        = rpFilters.role;
    rpDrawerDraft.description = rpFilters.description;
    rpDrawerDraft.functions   = rpFilters.functions;
    rpDrawerDraft.createdBy   = rpFilters.createdBy;
    rpDrawerDraft.createDate  = rpFilters.createDate;
    document.getElementById("rpFltRole").value = rpFilters.role;
    document.getElementById("rpFltDesc").value = rpFilters.description;
    document.getElementById("rpFltDate").value = rpFilters.createDate;
    setRPFunctions(rpFilters.functions);
    setRPCreator(rpFilters.createdBy);
    for (var i = 0; i < rpFltInputs.length; i++) updateRPClearBtn(document.getElementById(rpFltInputs[i].id));
  }

  function openRPFilter() {
    syncRPDrawerFromApplied();
    rpOverlay.classList.add("open");
    rpDrawer.classList.add("open");
  }
  function closeRPFilter() {
    rpOverlay.classList.remove("open");
    rpDrawer.classList.remove("open");
  }

  if (rpFilterBtn) rpFilterBtn.addEventListener("click", openRPFilter);
  document.getElementById("rpFltClose").addEventListener("click", closeRPFilter);
  document.getElementById("rpFltCancel").addEventListener("click", closeRPFilter);
  rpOverlay.addEventListener("click", closeRPFilter);

  /* Apply: commit draft → applied, re-render table + pagination. */
  document.getElementById("rpFltApply").addEventListener("click", function () {
    rpFilters = {
      role: rpDrawerDraft.role,
      description: rpDrawerDraft.description,
      functions: rpDrawerDraft.functions,
      createdBy: rpDrawerDraft.createdBy,
      createDate: rpDrawerDraft.createDate
    };
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
    closeRPFilter();
  });

  /* Reset: clear every field (draft + applied) and show the full dataset. */
  document.getElementById("rpFltReset").addEventListener("click", function () {
    rpFilters = { role: "", description: "", functions: "", createdBy: "", createDate: "" };
    syncRPDrawerFromApplied();
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
  });

  function alignIamSearchToColumn() {
    var pairs = [
      { wrap: document.getElementById("searchWrap"), target: document.getElementById("usersSelectAll") },
      { wrap: document.getElementById("rpSearchWrap"), target: document.querySelector("#rpTable thead .th-inner span") },
      { wrap: document.getElementById("tmSearchWrap"), target: document.querySelector("#tmTable thead .th-inner span") }
    ];
    pairs.forEach(function (pair) {
      if (!pair.wrap) return;
      pair.wrap.style.marginLeft = "";
    });
  }

  function alignToolbarToActiveTab() {
    /* Left edge is CSS: toolbar padding equals the Users tab label
       (--iam-label-rail). Per-tab margins pushed Roles/Teams right of
       that label. Clear any leftover inline margin. */
    var nodes = [
      document.getElementById("usersFilterBtn"),
      document.getElementById("rpFilterBtn"),
      document.querySelector("#teamsPanel .tbar-l > :first-child"),
      document.getElementById("rpSearchWrap"),
      document.getElementById("tmSearchWrap")
    ];
    nodes.forEach(function (el) {
      if (!el) return;
      el.style.marginLeft = "";
    });
  }

  var toolbarAlignTimer = null;
  function scheduleToolbarAlign() {
    if (toolbarAlignTimer) clearTimeout(toolbarAlignTimer);
    toolbarAlignTimer = setTimeout(function () {
      toolbarAlignTimer = null;
      alignIamSearchToColumn();
      alignToolbarToActiveTab();
    }, 140);
  }
  window.addEventListener("resize", scheduleToolbarAlign);
  requestAnimationFrame(function () {
    alignIamSearchToColumn();
    alignToolbarToActiveTab();
  });

  /* ═══ TAB SWITCHING ═══ */
  var tabBtns = document.querySelectorAll(".tab-btn");
  var usersPanel = document.getElementById("usersPanel");
  var rolesPanel = document.getElementById("rolesPanel");
  var teamsPanel = document.getElementById("teamsPanel");
  var hdrTitle = document.querySelector(".hdr h1");
  var hdrSub = document.querySelector(".hdr p");

  function switchTab(tab) {
    activeTab = tab;
    for (var i = 0; i < tabBtns.length; i++) tabBtns[i].classList.remove("on");
    /* Page title is unified to "Access Management" across all tabs.
       Subtitle is also unified — the secondary tabs are sub-views
       inside the same workspace, so the page-level header shouldn't
       shape-shift with each tab click.

       Tab order finalized 2026-06-07 per Tatiana direction:
       Users / Roles / Teams. The standalone Functions / Permission
       Catalog tab was removed; the role/permission matrix lives in
       Edit Role and is unaffected. */
    hdrTitle.textContent = "Access Management";
    hdrSub.textContent = "Manage users, role assignments, and permission functions across Atlas";
    var iamCard = document.querySelector(".v4-card");
    if (iamCard) iamCard.setAttribute("data-iam-tab", tab);
    if (tab === "users") {
      tabBtns[0].classList.add("on");
      usersPanel.style.display = "";
      rolesPanel.style.display = "none";
      if (teamsPanel) teamsPanel.style.display = "none";
    } else if (tab === "roles") {
      tabBtns[1].classList.add("on");
      usersPanel.style.display = "none";
      rolesPanel.style.display = "";
      if (teamsPanel) teamsPanel.style.display = "none";
      renderRPTable();
      renderRPPagination();
    } else if (tab === "teams") {
      /* Teams is the 3rd visual tab (index 2). Read-only browse of
         team groups; clicking a team name opens #editTeamPage. */
      if (tabBtns[2]) tabBtns[2].classList.add("on");
      usersPanel.style.display = "none";
      rolesPanel.style.display = "none";
      if (teamsPanel) teamsPanel.style.display = "";
      if (typeof renderTMTable === "function") renderTMTable();
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        alignIamSearchToColumn();
        alignToolbarToActiveTab();
      });
    });
  }

  tabBtns[0].addEventListener("click", function () { switchTab("users"); });
  tabBtns[1].addEventListener("click", function () { switchTab("roles"); });
  if (tabBtns[2]) tabBtns[2].addEventListener("click", function () { switchTab("teams"); });
  /* Deep-link ?tab=users|roles|teams for demos / visual QA */
  (function () {
    try {
      var t = new URLSearchParams(location.search).get("tab");
      if (t === "roles" || t === "teams" || t === "users") switchTab(t);
    } catch (e) {}
  })();

  /* ═══ TEAMS PANEL + EDIT TEAM PAGE ═══
     Read-only IAM team browse + simple definition editor.

     Scope (per Frances brief, Tatiana direction, 2026-05-29):
       • Teams list: search + 4-column EDL table (Team / Description /
         Members / Created). Team name is the only interactive cell —
         clicking it opens the Edit Team page for that team.
       • Edit Team: editable Name + Description fields. Read-only
         Members section with helper "Assign users via the User edit
         screen." (The card title itself stays clean — the
         read-only rule lives in the helper, not the title.)
       • Top-right actions: Delete Team / Cancel / Save Team.
         All three are no-op safe (toggle UI only) — full CRUD is
         intentionally out of scope.

     Intentionally NOT built:
       • + Add Team
       • Add member / Remove member
       • Bulk actions / row checkboxes
       • Team permission matrix
       • Team-scoped Users filter (we just `switchTab('users')`)

     Data is colocated in this IIFE so it doesn't pollute the global
     namespace and is easy to remove if Teams is rolled back. */
  var renderTMTable;
  (function setupTeamsPanel() {
    var teamsPanelEl = document.getElementById("teamsPanel");
    var editTeamPage = document.getElementById("editTeamPage");
    if (!teamsPanelEl || !editTeamPage) return;

    /* ── Seed data ──
       Six teams aligned to the team values used in the Users table
       (Frances QA 2026-05-29 round 5). Every `name` here matches a
       value already present in `DATA[*].team`, so the Teams list
       feels like a natural rollup of the same access model — not a
       parallel taxonomy. The id is a stable lookup key used by
       openEditTeam().

       `members` is a plausible enterprise-scale count (the Users
       table is a 60-row internal sample of 610 total users; team
       counts here pad up to enterprise-level figures while
       preserving the relative ordering observed in the sample). */
    /* Disney Ad Sales approved team taxonomy (Frances QA 2026-06-07 round 3).
       7 teams; legacy placeholder teams (Digital Media Planning /
       Streaming Revenue / Ad Sales Finance / Revenue Operations /
       Inventory & Pricing Operations) were retired this round. Each
       user record's `team` field, the Edit User Team dropdown
       (`AU_TEAM_NAMES`), and the Edit Team members table all key off
       the same `name` strings, so adding a team here makes it
       immediately reachable across the prototype. */
    var TEAMS_DATA = [
      {
        id: "tm-national-ad-sales",
        name: "National Ad Sales",
        description: "National advertising sales organization",
        members: 24,
        created: "Jan 12, 2026"
      },
      {
        id: "tm-agency-holding-company-sales",
        name: "Agency & Holding Company Sales",
        description: "Sales coverage for agency and holding company relationships",
        members: 18,
        created: "Jan 18, 2026"
      },
      {
        id: "tm-client-brand-solutions",
        name: "Client & Brand Solutions",
        description: "Client strategy, branded solutions, and integrated marketing partnerships",
        members: 16,
        created: "Jan 24, 2026"
      },
      {
        id: "tm-revenue-yield-management",
        name: "Revenue & Yield Management",
        description: "Revenue strategy, pricing guidance, and yield management",
        members: 12,
        created: "Feb 3, 2026"
      },
      {
        id: "tm-sales-planning",
        name: "Sales Planning",
        description: "Planning support for media plans, orders, and campaign setup",
        members: 22,
        created: "Feb 8, 2026"
      },
      {
        id: "tm-addressable-programmatic-sales",
        name: "Addressable & Programmatic Sales",
        description: "Programmatic and addressable advertising sales support",
        members: 14,
        created: "Feb 14, 2026"
      },
      {
        id: "tm-ad-operations",
        name: "Ad Operations",
        description: "Campaign operations, trafficking coordination, and delivery support",
        members: 20,
        created: "Feb 21, 2026"
      }
    ];
    /* Test hook only (mirrors window.__auState) — exposes the SAME
       array reference so automated tests can assert Teams sorting
       never mutates/reorders TEAMS_DATA in place (getTMFilteredData()
       always sorts a `.slice()` copy, never TEAMS_DATA itself). */
    window.__TEAMS_DATA = TEAMS_DATA;

    /* Members table on Edit Team is derived at runtime from the Users
       table (`DATA`) so the Teams view stays automatically in sync
       with the same source of truth Users displays. For each team
       id we filter `DATA` by team-name match and project each user
       to {name, email, role}. The role rendered here is the user's
       first / most-prominent role from the Users table — chosen
       because:
         (a) the read-only members table only has a single Role
             column (not a multi-role badge stack),
         (b) Users displays the same first role at the head of its
             role-list cell, so the two surfaces stay consistent,
         (c) the table stays readable at narrow widths.
       This block is intentionally read-only (no add/remove member,
       no inline editing) per the brief's guardrails. */
    function buildTeamMembersForName(teamName) {
      /* Teams is an internal-only surface (per brief §8). Source from
         the canonical internal snapshot so this helper produces the
         same result whether the caller is on the Internal or External
         Users view (`DATA` is view-toggled). Falls back to `DATA` if
         the snapshot isn't ready yet during very early module init. */
      var source = Array.isArray(INTERNAL_ORIGINAL_SNAPSHOT) && INTERNAL_ORIGINAL_SNAPSHOT.length
        ? INTERNAL_ORIGINAL_SNAPSHOT
        : (Array.isArray(DATA) ? DATA : null);
      if (!source) return [];
      var rows = [];
      for (var i = 0; i < source.length; i++) {
        var u = source[i];
        if (!u || u.team !== teamName) continue;
        var role = (u.roles && u.roles.length) ? u.roles[0] : "";
        rows.push({ name: u.name, email: u.email, role: role });
      }
      return rows;
    }
    var TEAM_MEMBERS_DATA = {};
    for (var ti = 0; ti < TEAMS_DATA.length; ti++) {
      TEAM_MEMBERS_DATA[TEAMS_DATA[ti].id] = buildTeamMembersForName(TEAMS_DATA[ti].name);
    }

    /* HTML escaper — mirrors the helper used in renderTable for
       Users / renderRPTable for Roles / renderPMTable for Perms. */
    function escTM(s) {
      return String(s == null ? "" : s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    var tmTbody = document.getElementById("tmTbody");
    var tmSearchInput = document.getElementById("tmSearchInput");
    var tmSearchClear = document.getElementById("tmSearchClear");

    /* Pagination state — mirrors `rpCurrentPage` / `rpPageSize` so the
       Teams footer behaves like the Roles footer (Frances QA
       2026-05-31). With six seed rows there is only one page today,
       but the same Show 10 / page-nav / Total label render so both
       tabs share the same product surface. */
    var tmCurrentPage = 1;
    var tmPageSize = 10;

    /* Sort state — same null/"asc"/"desc" model as `sortKey`/`sortDir`
       (Users) and `rpSortKey`/`rpSortDir` (Roles): no bespoke sorting
       model for Teams. Default is unsorted (matches Users/Roles'
       default), so TEAMS_DATA's existing seed order — which already
       happens to read oldest-to-newest by Created — renders unchanged
       on first load; sorting is purely opt-in via a header click. */
    var tmSortKey = null; // null | "name" | "members" | "created"
    var tmSortDir = null; // null | "asc" | "desc"

    /* Parses a Teams "Created" display string (e.g. "Jan 12, 2026") into
       a comparable timestamp. Returns NaN for missing/unparseable values
       so callers can detect and consistently place them — see
       tmCompareTeams() below — instead of silently sorting them as
       "Jan 1 1970" or as smaller/larger than every real date. */
    function tmParseCreatedDate(value) {
      if (!value) return NaN;
      var t = Date.parse(value);
      return t;
    }

    /* Comparator for the Teams list. `key`/`dir` are read from the
       closed-over tmSortKey/tmSortDir at call time (mirrors
       applySort()/applyRPSort()'s inline sort callbacks) so this can be
       reused both for live sorting and for tests.
         • name    — locale-aware, case-insensitive full team name
                     (never the CSS-truncated label).
         • members — numeric compare (never string compare, so 2 < 7 <
                     12 < 24 instead of lexical "12" < "2" < "24" < "7").
         • created — parses the display string to a timestamp and
                     compares chronologically, never alphabetically.
       Missing/invalid values for the active sort key ALWAYS sort to the
       end of the list regardless of direction (a single, predictable
       rule instead of direction-dependent Infinity/-Infinity juggling).
       Ties (including when the primary key itself is "name") fall back
       to team name (locale/case-insensitive) and finally to the stable,
       immutable team `id`, so equal-valued rows never reorder between
       renders. */
    function tmCompareTeams(a, b) {
      function nameCmp(x, y) {
        return String(x.name || "").localeCompare(String(y.name || ""), undefined, { sensitivity: "base", numeric: true });
      }
      function idCmp(x, y) {
        return String(x.id || "") < String(y.id || "") ? -1 : (String(x.id || "") > String(y.id || "") ? 1 : 0);
      }
      function tieBreak(x, y) {
        var n = nameCmp(x, y);
        return n !== 0 ? n : idCmp(x, y);
      }

      if (!tmSortKey) return 0;
      var dir = tmSortDir === "desc" ? -1 : 1;
      var primary;

      if (tmSortKey === "name") {
        primary = nameCmp(a, b);
        if (primary !== 0) return primary * dir;
        return idCmp(a, b);
      }

      if (tmSortKey === "members") {
        var ma = typeof a.members === "number" ? a.members : parseFloat(a.members);
        var mb = typeof b.members === "number" ? b.members : parseFloat(b.members);
        var maValid = !isNaN(ma), mbValid = !isNaN(mb);
        if (!maValid && !mbValid) return tieBreak(a, b);
        if (!maValid) return 1;
        if (!mbValid) return -1;
        primary = ma < mb ? -1 : (ma > mb ? 1 : 0);
        return primary !== 0 ? primary * dir : tieBreak(a, b);
      }

      if (tmSortKey === "created") {
        var ta = tmParseCreatedDate(a.created);
        var tb = tmParseCreatedDate(b.created);
        var taValid = !isNaN(ta), tbValid = !isNaN(tb);
        if (!taValid && !tbValid) return tieBreak(a, b);
        if (!taValid) return 1;
        if (!tbValid) return -1;
        primary = ta < tb ? -1 : (ta > tb ? 1 : 0);
        return primary !== 0 ? primary * dir : tieBreak(a, b);
      }

      return 0;
    }

    /* Search -> filter -> sort, in that order, matching the required
       pipeline (sort must apply to filtered results, not the full
       dataset, and must run before pagination slices it). Builds a NEW
       array via `.slice().sort()` — TEAMS_DATA itself is never mutated
       or reordered in place, since it's also read directly elsewhere
       (Edit Team lookups, team-members derivation). */
    function getTMFilteredData() {
      var term = (tmSearchInput && tmSearchInput.value) ? tmSearchInput.value.trim().toLowerCase() : "";
      var filtered = TEAMS_DATA.filter(function (t) {
        if (!term) return true;
        return (
          t.name.toLowerCase().indexOf(term) !== -1 ||
          t.description.toLowerCase().indexOf(term) !== -1
        );
      });
      if (tmSortKey) {
        filtered = filtered.slice().sort(tmCompareTeams);
      }
      return filtered;
    }

    function getTMPageData() {
      var filtered = getTMFilteredData();
      var start = (tmCurrentPage - 1) * tmPageSize;
      return filtered.slice(start, start + tmPageSize);
    }

    function tmTotalPages() {
      return Math.max(1, Math.ceil(getTMFilteredData().length / tmPageSize));
    }

    /* Renders the Teams list table from the paginated slice. The
       Team-name cell is the ONLY interactive element — rendered as
       `.name-link` (same affordance Users tab uses for "open Edit
       User"). The rest of the row is plain text; the row itself is
       NOT clickable so the table reads as a data table, not a card
       grid. */
    renderTMTable = function () {
      if (!tmTbody) return;
      var rows = getTMPageData();

      if (rows.length === 0) {
        tmTbody.innerHTML =
          '<tr class="tbl-empty"><td colspan="4">' +
          'No teams match your search. Try a different term.' +
          '</td></tr>';
        renderTMPagination();
        return;
      }

      var html = "";
      for (var i = 0; i < rows.length; i++) {
        var t = rows[i];
        html +=
          '<tr data-team-id="' + escTM(t.id) + '">' +
            '<td class="tm-cell-name">' +
              '<a href="#" class="name-link tm-name-link" data-team-id="' + escTM(t.id) + '" aria-label="Edit ' + escTM(t.name) + '">' + escTM(t.name) + '</a>' +
            '</td>' +
            '<td class="tm-cell-desc">' + escTM(t.description) + '</td>' +
            '<td class="tm-cell-mem">' + escTM(t.members) + '</td>' +
            '<td class="tm-cell-created">' + escTM(t.created) + '</td>' +
          '</tr>';
      }
      tmTbody.innerHTML = html;
      renderTMPagination();
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    };

    /* Pagination renderer — same shape as `renderRPPagination`. Page
       numbers, page-size dropdown, item count, total label all
       update; nav arrows toggle `.off` when at the boundary. */
    function renderTMPagination() {
      var tp = tmTotalPages();
      var pgNums = document.getElementById("tmPgNums");
      if (!pgNums) return;
      var btns = [];
      if (tp <= 7) {
        for (var i = 1; i <= tp; i++) btns.push(i);
      } else {
        btns.push(1);
        if (tmCurrentPage > 3) btns.push("...");
        var lo = Math.max(2, tmCurrentPage - 1);
        var hi = Math.min(tp - 1, tmCurrentPage + 1);
        if (tmCurrentPage <= 3) { lo = 2; hi = 4; }
        if (tmCurrentPage >= tp - 2) { lo = tp - 3; hi = tp - 1; }
        for (var j = lo; j <= hi; j++) btns.push(j);
        if (tmCurrentPage < tp - 2) btns.push("...");
        btns.push(tp);
      }
      var html = "";
      for (var k = 0; k < btns.length; k++) {
        if (btns[k] === "...") {
          html += '<span class="pg-dots">\u2026</span>';
        } else {
          html += '<button class="pg-n' + (btns[k] === tmCurrentPage ? " on" : "") + '" data-tm-pg="' + btns[k] + '">' + btns[k] + '</button>';
        }
      }
      pgNums.innerHTML = html;

      var navFirst = document.querySelector('#tmPgnPages [data-tm-nav="first"]');
      var navPrev  = document.querySelector('#tmPgnPages [data-tm-nav="prev"]');
      var navNext  = document.querySelector('#tmPgnPages [data-tm-nav="next"]');
      var navLast  = document.querySelector('#tmPgnPages [data-tm-nav="last"]');
      if (navFirst) navFirst.classList.toggle("off", tmCurrentPage === 1);
      if (navPrev)  navPrev.classList.toggle("off", tmCurrentPage === 1);
      if (navNext)  navNext.classList.toggle("off", tmCurrentPage === tp);
      if (navLast)  navLast.classList.toggle("off", tmCurrentPage === tp);

      var filteredCount = getTMFilteredData().length;
      var tmItemCount = document.getElementById("tmItemCount");
      if (tmItemCount) tmItemCount.textContent = "of " + filteredCount + " items";
      var tmTotalLabel = document.getElementById("tmTotalLabel");
      if (tmTotalLabel) tmTotalLabel.textContent = "Total teams: " + filteredCount;

      var tmPageSizeMenu = document.getElementById("tmPageSizeMenu");
      var tmPageSizeValue = document.getElementById("tmPageSizeValue");
      if (tmPageSizeMenu && tmPageSizeValue) {
        var sizes = [10, 25, 50];
        var pshtml = "";
        for (var si = 0; si < sizes.length; si++) {
          var ns = sizes[si];
          pshtml += '<div class="cr-dd-option' + (ns === tmPageSize ? " is-selected" : "") + '" role="option" data-tm-psize="' + ns + '">' + ns + "</div>";
        }
        tmPageSizeMenu.innerHTML = pshtml;
        tmPageSizeValue.textContent = String(tmPageSize);
      }
    }

    function tmGoToPage(pg) {
      var tp = tmTotalPages();
      pg = Math.max(1, Math.min(pg, tp));
      if (pg === tmCurrentPage) return;
      tmCurrentPage = pg;
      renderTMTable();
    }

    /* Pagination event wiring — same shape as Roles. Click on a page
       number, nav arrow, or size option re-renders. The page-size
       dropdown reuses the shared `togglePgnDd` helper used by Users
       and Roles. */
    var tmPgNumsEl = document.getElementById("tmPgNums");
    if (tmPgNumsEl) {
      tmPgNumsEl.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tm-pg]");
        if (btn) tmGoToPage(parseInt(btn.getAttribute("data-tm-pg"), 10));
      });
    }
    var tmNavFirst = document.querySelector('#tmPgnPages [data-tm-nav="first"]');
    var tmNavPrev  = document.querySelector('#tmPgnPages [data-tm-nav="prev"]');
    var tmNavNext  = document.querySelector('#tmPgnPages [data-tm-nav="next"]');
    var tmNavLast  = document.querySelector('#tmPgnPages [data-tm-nav="last"]');
    if (tmNavFirst) tmNavFirst.addEventListener("click", function () { tmGoToPage(1); });
    if (tmNavPrev)  tmNavPrev.addEventListener("click",  function () { tmGoToPage(tmCurrentPage - 1); });
    if (tmNavNext)  tmNavNext.addEventListener("click",  function () { tmGoToPage(tmCurrentPage + 1); });
    if (tmNavLast)  tmNavLast.addEventListener("click",  function () { tmGoToPage(tmTotalPages()); });

    var tmPageSizeMenuEl = document.getElementById("tmPageSizeMenu");
    var tmPageSizeDDEl = document.getElementById("tmPageSizeDD");
    var tmPageSizeTriggerEl = document.getElementById("tmPageSizeTrigger");
    if (tmPageSizeMenuEl) {
      tmPageSizeMenuEl.addEventListener("click", function (e) {
        var row = e.target.closest("[data-tm-psize]");
        if (!row) return;
        tmPageSize = parseInt(row.getAttribute("data-tm-psize"), 10);
        tmCurrentPage = 1;
        if (tmPageSizeDDEl) tmPageSizeDDEl.classList.remove("open");
        if (tmPageSizeTriggerEl) tmPageSizeTriggerEl.setAttribute("aria-expanded", "false");
        renderTMTable();
      });
    }
    if (tmPageSizeDDEl && tmPageSizeTriggerEl && typeof togglePgnDd === "function") {
      tmPageSizeTriggerEl.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePgnDd(tmPageSizeDDEl, tmPageSizeTriggerEl);
      });
    }

    /* Search wiring — debounced via input event only (no Enter-to-
       submit needed for a small dataset). Clear button mirrors the
       Permissions search clear icon. Filtering resets to page 1 so
       the pagination state stays consistent with Roles. */
    if (tmSearchInput) {
      tmSearchInput.addEventListener("input", function () {
        if (tmSearchClear) {
          if (tmSearchInput.value.length > 0) tmSearchClear.classList.remove("hidden");
          else tmSearchClear.classList.add("hidden");
        }
        tmCurrentPage = 1;
        renderTMTable();
      });
    }
    if (tmSearchClear) {
      tmSearchClear.addEventListener("click", function () {
        if (!tmSearchInput) return;
        tmSearchInput.value = "";
        tmSearchClear.classList.add("hidden");
        tmCurrentPage = 1;
        renderTMTable();
        tmSearchInput.focus();
      });
    }

    /* Sort — same unsorted -> ascending -> descending -> unsorted cycle
       as applySort() (Users) / applyRPSort() (Roles); no bespoke model
       for Teams. Sorting re-applies on top of whatever the current
       search term has already filtered (getTMFilteredData() filters
       first, then sorts — see above) and always resets to page 1 so a
       new sort order is never viewed mid-page-3 against stale rows. */
    function applyTMSort(key) {
      if (tmSortKey === key) {
        if (tmSortDir === "asc") tmSortDir = "desc";
        else if (tmSortDir === "desc") { tmSortDir = null; tmSortKey = null; }
      } else {
        tmSortKey = key;
        tmSortDir = "asc";
      }
      tmCurrentPage = 1;
      renderTMTable(); // also re-renders pagination (renderTMPagination() runs inside it)
      updateTMSortHeaders();
    }
    window.__applyTMSort = applyTMSort; // test hook, mirrors no direct Users/Roles equivalent needed since those are global already

    function updateTMSortHeaders() {
      var ths = document.querySelectorAll("th[data-tm-sort]");
      for (var i = 0; i < ths.length; i++) {
        ths[i].classList.remove("sort-asc", "sort-desc");
        var isActive = tmSortKey && ths[i].dataset.tmSort === tmSortKey;
        if (isActive) {
          if (tmSortDir === "asc") ths[i].classList.add("sort-asc");
          else if (tmSortDir === "desc") ths[i].classList.add("sort-desc");
        }
        if (ths[i].hasAttribute("aria-sort")) {
          ths[i].setAttribute(
            "aria-sort",
            isActive ? (tmSortDir === "asc" ? "ascending" : "descending") : "none"
          );
        }
        var labelEl = ths[i].querySelector(".th-inner > span:first-child");
        if (labelEl) {
          ths[i].setAttribute("aria-label", sortHeaderA11yLabel(labelEl.textContent.trim(), isActive, tmSortDir));
        }
      }
    }

    /* Teams sort-header clicks + keyboard — mirrors the Users/Roles
       thead click/keydown pair exactly (shared component, see
       initSortableHeaders()) so all three sortable tables have
       identical click-target and keyboard behavior. The whole header
       cell (label + icon) is the click target via `closest()`, not
       just the icon. */
    var tmThead = document.querySelector(".tm-tbl thead");
    if (tmThead) {
      tmThead.addEventListener("click", function (e) {
        var th = e.target.closest("th[data-tm-sort]");
        if (th) applyTMSort(th.dataset.tmSort);
      });
      tmThead.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
        var th = e.target.closest("th[data-tm-sort][tabindex]");
        if (!th) return;
        e.preventDefault();
        applyTMSort(th.dataset.tmSort);
      });
    }

    /* Delegated click on the Team-name link → openEditTeam.
       We bind on tbody (not the link) so newly-rendered rows pick
       up the handler without re-binding after each search filter. */
    if (tmTbody) {
      tmTbody.addEventListener("click", function (e) {
        var link = e.target && e.target.closest ? e.target.closest("a.tm-name-link") : null;
        if (!link) return;
        e.preventDefault();
        var teamId = link.getAttribute("data-team-id");
        if (teamId) openEditTeam(teamId);
      });
    }

    /* ── Edit Team page ── */
    var mainPageEl = document.querySelector(".page");
    var addUsersPageEl = document.getElementById("addUsersPage");
    var createRolePageEl = document.getElementById("createRolePage");
    var tmEditSubtitle = document.getElementById("tmEditSubtitle");
    var tmName = document.getElementById("tmName");
    var tmDesc = document.getElementById("tmDesc");
    var tmMembersTbody = document.getElementById("tmMembersTbody");
    var tmBackBtn = document.getElementById("tmBack");
    var tmCancelBtn = document.getElementById("tmCancel");
    var tmSaveBtn = document.getElementById("tmSave");
    var tmDeleteBtn = document.getElementById("tmDelete");
    /* Delete Team confirmation dialog (Final-QA: "Update the V4 Edit
       Team page header" pass) — same canonical ADS Modal shell/JS
       pattern originally established for Edit User's since-removed
       Revoke access flow, replacing the previous no-confirmation stub
       that just called closeEditTeam(). */
    var tmDeleteConfirmBackdrop = document.getElementById("tmDeleteConfirmBackdrop");
    var tmDeleteConfirmClose = document.getElementById("tmDeleteConfirmClose");
    var tmDeleteConfirmCancel = document.getElementById("tmDeleteConfirmCancel");
    var tmDeleteConfirmConfirm = document.getElementById("tmDeleteConfirmConfirm");
    var tmDeleteConfirmConfirmLabel = document.getElementById("tmDeleteConfirmConfirmLabel");
    var tmDeleteConfirmTeamName = document.getElementById("tmDeleteConfirmTeamName");
    var tmDeleteConfirmError = document.getElementById("tmDeleteConfirmError");
    var tmDeleteConfirmDefaultLabel = tmDeleteConfirmConfirmLabel ? tmDeleteConfirmConfirmLabel.textContent : "Delete Team";
    var tmDeleteLastFocus = null;
    var tmDeletePending = false;
    var tmDeleteTimer = null;

    /* Local edit state — captures which team we're editing so the
       Save/Cancel/Delete handlers know what to operate on. We
       intentionally do NOT mutate TEAMS_DATA here; Save/Delete are
       no-op-safe per scope. */
    var tmCurrentTeamId = null;

    function getTeamById(id) {
      for (var i = 0; i < TEAMS_DATA.length; i++) {
        if (TEAMS_DATA[i].id === id) return TEAMS_DATA[i];
      }
      return null;
    }

    /* ─── Local edit state for the currently-open team ─────────────
       On Edit Team open we clone the team's member list into a
       per-session working set so add/remove are non-destructive
       until the user clicks Save Team. Cancel / Back close without
       persisting. The initial snapshot is captured for dirty-state
       comparison so Save Team enables only when the working set
       actually differs from the original. */
    var tmWorkingMembers = [];     /* [{userId, name, email, role}] */
    var tmInitialSnapshot = "";    /* JSON.stringify of the original */

    function tmSnapshot() {
      var name = (tmName && tmName.value) || "";
      var desc = (tmDesc && tmDesc.value) || "";
      var ids = [];
      for (var i = 0; i < tmWorkingMembers.length; i++) {
        ids.push(tmWorkingMembers[i].userId || tmWorkingMembers[i].email || tmWorkingMembers[i].name);
      }
      ids.sort();
      return JSON.stringify({ name: name, desc: desc, members: ids });
    }
    function tmRefreshDirty() {
      if (!tmSaveBtn) return;
      var dirty = tmSnapshot() !== tmInitialSnapshot;
      tmSaveBtn.disabled = !dirty;
    }

    /* Internal-user filter — Teams may only contain internal users
       (have a `team` field) and exclude inactive accounts is
       NOT required by the brief, but external (`organization`-based)
       users are explicitly excluded. The eligible list for the
       Add members modal excludes anyone already in the working
       set as well. */
    function tmIsInternalUser(u) {
      if (!u) return false;
      if (u.id && String(u.id).charAt(0) === "e") return false;
      if (u.organization && !u.team) return false;
      return true;
    }
    function tmMemberFromUser(u) {
      var role = (u.roles && u.roles.length) ? u.roles[0] : "";
      return { userId: u.id, name: u.name, email: u.email, role: role };
    }

    function renderTeamMembers() {
      if (!tmMembersTbody) return;
      if (!tmWorkingMembers || tmWorkingMembers.length === 0) {
        tmMembersTbody.innerHTML =
          '<tr class="tbl-empty"><td colspan="4">' +
          'No members yet. Click <strong>+ Add members</strong> to assign internal users to this team.' +
          '</td></tr>';
        return;
      }
      var html = "";
      for (var i = 0; i < tmWorkingMembers.length; i++) {
        var m = tmWorkingMembers[i];
        var idAttr = m.userId ? ' data-user-id="' + escTM(m.userId) + '"' : ' data-user-email="' + escTM(m.email || "") + '"';
        html +=
          '<tr' + idAttr + '>' +
            '<td>' + escTM(m.name) + '</td>' +
            '<td>' + escTM(m.email) + '</td>' +
            '<td>' + escTM(m.role) + '</td>' +
            '<td class="tm-cell-actions">' +
              '<button type="button" class="tm-row-remove" data-tm-remove="' + escTM(m.userId || m.email || m.name) + '" aria-label="Remove ' + escTM(m.name) + ' from team">Remove</button>' +
            '</td>' +
          '</tr>';
      }
      tmMembersTbody.innerHTML = html;
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    }

    function openEditTeam(teamId) {
      var team = getTeamById(teamId);
      if (!team) return;
      tmCurrentTeamId = teamId;
      if (tmEditSubtitle) tmEditSubtitle.textContent = team.name;
      if (tmName) tmName.value = team.name;
      if (tmDesc) tmDesc.value = team.description;

      /* Clone the canonical member list into the working set. We
         re-resolve userIds from DATA so removes can de-dup against
         a stable identifier (the seed member list only stores
         {name, email, role}). */
      var seed = TEAM_MEMBERS_DATA[teamId] || [];
      tmWorkingMembers = [];
      for (var s = 0; s < seed.length; s++) {
        var seedRow = seed[s];
        var userId = null;
        if (Array.isArray(DATA)) {
          for (var di = 0; di < DATA.length; di++) {
            if (DATA[di] && DATA[di].email === seedRow.email) { userId = DATA[di].id; break; }
          }
        }
        tmWorkingMembers.push({ userId: userId, name: seedRow.name, email: seedRow.email, role: seedRow.role });
      }
      tmInitialSnapshot = tmSnapshot();
      renderTeamMembers();
      tmRefreshDirty();

      /* Hide the main IAM page + any other detail pages, show
         Edit Team. Mirrors the Edit User / Create Role flow so we
         don't fight the existing page-toggle logic. */
      if (mainPageEl) mainPageEl.style.display = "none";
      if (addUsersPageEl) addUsersPageEl.style.display = "none";
      if (createRolePageEl) createRolePageEl.style.display = "none";
      editTeamPage.style.display = "";
      window.scrollTo(0, 0);
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    }

    function closeEditTeam() {
      if (tmDeleteConfirmBackdrop && !tmDeleteConfirmBackdrop.hasAttribute("hidden") && !tmDeletePending) {
        tmDeleteConfirmBackdrop.setAttribute("hidden", "");
        tmDeleteLastFocus = null;
      }
      editTeamPage.style.display = "none";
      if (mainPageEl) mainPageEl.style.display = "";
      /* Stay on the Teams tab — switchTab keeps the panel visible
         and re-renders the list (which re-applies any active
         search filter). */
      switchTab("teams");
    }

    if (tmBackBtn) tmBackBtn.addEventListener("click", closeEditTeam);
    if (tmCancelBtn) tmCancelBtn.addEventListener("click", closeEditTeam);

    if (tmSaveBtn) {
      tmSaveBtn.addEventListener("click", function () {
        /* Save is a no-op-safe stub: we mirror the field values +
           working member set back into TEAMS_DATA / TEAM_MEMBERS_DATA
           so the list reflects any local edit when the user returns.
           We do NOT call any API. */
        if (!tmCurrentTeamId) { closeEditTeam(); return; }
        var team = getTeamById(tmCurrentTeamId);
        if (team) {
          if (tmName) team.name = tmName.value || team.name;
          if (tmDesc) team.description = tmDesc.value || team.description;
        }
        /* Persist the working member set into the canonical map
           and update the team's member count so the Teams list
           reflects the new total. We strip the working `userId`
           so the persisted shape matches the seed shape. */
        var persisted = [];
        for (var pi = 0; pi < tmWorkingMembers.length; pi++) {
          var w = tmWorkingMembers[pi];
          persisted.push({ name: w.name, email: w.email, role: w.role });
        }
        TEAM_MEMBERS_DATA[tmCurrentTeamId] = persisted;
        if (team) team.members = persisted.length;
        if (typeof showEdlToast === "function") {
          showEdlToast({
            type: "success",
            title: "Team saved",
            bodyHtml: "Updates to <strong>" + escTM(team ? team.name : "this team") + "</strong> were saved."
          });
        }
        closeEditTeam();
      });
    }

    function setTmDeleteLoading(isLoading) {
      if (!tmDeleteConfirmConfirm) return;
      tmDeleteConfirmConfirm.disabled = isLoading;
      tmDeleteConfirmConfirm.classList.toggle("is-loading", isLoading);
      if (tmDeleteConfirmConfirmLabel) {
        tmDeleteConfirmConfirmLabel.textContent = isLoading ? "Deleting\u2026" : tmDeleteConfirmDefaultLabel;
      }
      // Cancel/Close stay disabled for the duration of the request so the
      // dialog can't be dismissed mid-mutation — same ADS pattern as
      // Revoke access: the safe exits are unavailable, not hidden, while
      // the destructive action is busy.
      if (tmDeleteConfirmCancel) tmDeleteConfirmCancel.disabled = isLoading;
      if (tmDeleteConfirmClose) tmDeleteConfirmClose.disabled = isLoading;
    }

    function clearTmDeleteError() {
      if (!tmDeleteConfirmError) return;
      tmDeleteConfirmError.setAttribute("hidden", "");
      tmDeleteConfirmError.textContent = "";
    }

    function showTmDeleteError(message) {
      if (!tmDeleteConfirmError) return;
      tmDeleteConfirmError.textContent = message;
      tmDeleteConfirmError.removeAttribute("hidden");
    }

    function closeTmDeleteConfirm() {
      if (!tmDeleteConfirmBackdrop) return;
      // Never dismiss out from under an in-flight request — Cancel/Close
      // are disabled during that window (see setTmDeleteLoading), so
      // reaching here while pending would only be a programmatic misuse.
      if (tmDeletePending) return;
      if (tmDeleteTimer) {
        clearTimeout(tmDeleteTimer);
        tmDeleteTimer = null;
      }
      clearTmDeleteError();
      setTmDeleteLoading(false);
      tmDeleteConfirmBackdrop.setAttribute("hidden", "");
      if (tmDeleteLastFocus && typeof tmDeleteLastFocus.focus === "function") {
        tmDeleteLastFocus.focus();
      }
      tmDeleteLastFocus = null;
    }

    function openTmDeleteConfirm() {
      if (!tmDeleteConfirmBackdrop || !tmCurrentTeamId) return;
      tmDeleteLastFocus = document.activeElement;
      clearTmDeleteError();
      setTmDeleteLoading(false);
      var team = getTeamById(tmCurrentTeamId);
      var dispName = (team && team.name) || (tmName && tmName.value) || "this team";
      if (tmDeleteConfirmTeamName) tmDeleteConfirmTeamName.textContent = dispName;
      tmDeleteConfirmBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (tmDeleteConfirmCancel) tmDeleteConfirmCancel.focus();
      }, 0);
    }

    function performDeleteTeam() {
      /* Guard against a rapid double-click firing the mutation twice —
         the dialog stays open through the whole request (loading
         state), so this also blocks re-clicking the disabled button. */
      if (tmDeletePending) return;
      // Stable snapshot of the affected team, taken before any async
      // delay, so this request can't silently act on the wrong record
      // if something changed tmCurrentTeamId in the meantime.
      var deleteId = tmCurrentTeamId;
      var team = deleteId ? getTeamById(deleteId) : null;
      var dispName = (team && team.name) || "this team";
      if (!team) {
        showTmDeleteError("We couldn\u2019t find " + dispName + "\u2019s record. Close this dialog and try again.");
        return;
      }
      tmDeletePending = true;
      clearTmDeleteError();
      setTmDeleteLoading(true);
      // Prototype-only simulated latency (same pattern as Revoke access /
      // the Select Users -> Export "preparing" beat) so the loading state
      // is visible; no real network/API call exists to await here. Modal
      // stays open, dimensions unchanged, and no success toast fires
      // until this resolves.
      tmDeleteTimer = setTimeout(function () {
        tmDeleteTimer = null;
        tmDeletePending = false;
        // Re-resolve rather than trust the closure — if the record became
        // unavailable while the request was in flight, surface an error
        // instead of silently mutating stale/missing data.
        var idx = -1;
        for (var i = 0; i < TEAMS_DATA.length; i++) {
          if (TEAMS_DATA[i].id === deleteId) { idx = i; break; }
        }
        if (idx === -1) {
          setTmDeleteLoading(false);
          showTmDeleteError("We couldn\u2019t find " + dispName + "\u2019s record. Close this dialog and try again.");
          return;
        }
        TEAMS_DATA.splice(idx, 1);
        delete TEAM_MEMBERS_DATA[deleteId];
        clearTmDeleteError();
        setTmDeleteLoading(false);
        tmDeleteConfirmBackdrop.setAttribute("hidden", "");
        tmDeleteLastFocus = null;
        closeEditTeam();
        if (typeof showEdlToast === "function") {
          showEdlToast({
            type: "success",
            title: "Team deleted",
            bodyHtml: "&ldquo;<strong>" + escTM(dispName) + "</strong>&rdquo; has been deleted."
          });
        }
      }, 700);
    }

    window.__closeTmDeleteConfirmModal = function () {
      if (tmDeleteConfirmBackdrop && !tmDeleteConfirmBackdrop.hasAttribute("hidden")) closeTmDeleteConfirm();
    };

    if (tmDeleteBtn) {
      tmDeleteBtn.addEventListener("click", function () {
        openTmDeleteConfirm();
      });
    }
    if (tmDeleteConfirmCancel) {
      tmDeleteConfirmCancel.addEventListener("click", function () {
        closeTmDeleteConfirm();
      });
    }
    if (tmDeleteConfirmClose) {
      // Close performs the exact same safe action as Cancel — no
      // separate dismissal semantics — and is disabled during the
      // loading state by setTmDeleteLoading(), same as Cancel.
      tmDeleteConfirmClose.addEventListener("click", function () {
        closeTmDeleteConfirm();
      });
    }
    if (tmDeleteConfirmConfirm) {
      tmDeleteConfirmConfirm.addEventListener("click", function () {
        performDeleteTeam();
      });
    }
    if (tmDeleteConfirmBackdrop) {
      tmDeleteConfirmBackdrop.addEventListener("click", function (e) {
        if (e.target === tmDeleteConfirmBackdrop) closeTmDeleteConfirm();
      });
      /* Focus trap: Tab/Shift+Tab wrap within the dialog while open —
         same pattern as the Add User search modal / Effective access
         breakdown modal. */
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Tab") return;
        if (tmDeleteConfirmBackdrop.hasAttribute("hidden")) return;
        var dialog = tmDeleteConfirmBackdrop.querySelector(".cr-confirm-dialog");
        if (!dialog) return;
        var focusable = dialog.querySelectorAll('button:not([hidden]):not(:disabled), input:not([hidden]):not(:disabled), [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }

    /* Dirty-state wiring: typing in Name or Description should
       enable Save Team if the new value differs from the captured
       initial snapshot. Add/Remove member calls also call
       tmRefreshDirty after mutating tmWorkingMembers. */
    if (tmName) tmName.addEventListener("input", tmRefreshDirty);
    if (tmDesc) tmDesc.addEventListener("input", tmRefreshDirty);

    /* Row-remove delegate — clicking the Remove button in a member
       row no longer immediately splices the working set. Instead we
       open the EDL confirmation dialog
       (`#tmRemoveMemberBackdrop`) named for the specific member and
       team. The actual splice + re-render + dirty refresh happens
       only when the user confirms (see `confirmTmRemoveMember` near
       the modal wiring further down). Cancel / Esc / backdrop click
       all leave the working set untouched. */
    var tmRemoveMemberBackdrop = document.getElementById("tmRemoveMemberBackdrop");
    var tmRemoveMemberTitle    = document.getElementById("tmRemoveMemberTitle");
    var tmRemoveMemberBody     = document.getElementById("tmRemoveMemberBody");
    var tmRemoveMemberCancel   = document.getElementById("tmRemoveMemberCancel");
    var tmRemoveMemberConfirm  = document.getElementById("tmRemoveMemberConfirm");
    /* Pending state. `tmPendingRemoveKey` is the data-tm-remove key
       (userId / email / name) of the row clicked, captured at open
       time so re-renders between open and confirm can't shift the
       target. `tmPendingRemoveName` and `tmPendingTeamName` are
       captured at open time and used to build the dialog body — both
       are also re-computed at confirm time only to find the row, not
       to label it. `tmRemoveMemberLastFocus` is the focus target we
       restore on close, mirroring the Remove user confirm pattern. */
    var tmPendingRemoveKey = null;
    var tmPendingRemoveName = "";
    var tmRemoveMemberLastFocus = null;

    function tmFindMemberByKey(key) {
      if (!key || !Array.isArray(tmWorkingMembers)) return null;
      for (var i = 0; i < tmWorkingMembers.length; i++) {
        var m = tmWorkingMembers[i];
        if ((m.userId && m.userId === key) || m.email === key || m.name === key) {
          return { idx: i, member: m };
        }
      }
      return null;
    }

    function openTmRemoveMemberConfirm(key, triggerEl) {
      if (!tmRemoveMemberBackdrop) return;
      var hit = tmFindMemberByKey(key);
      if (!hit) return;
      tmPendingRemoveKey = key;
      tmPendingRemoveName = (hit.member && hit.member.name) ? hit.member.name : "this user";
      tmRemoveMemberLastFocus = triggerEl || document.activeElement;
      /* Live team name: prefer the editable Team Name input if the
         user has typed there (so the dialog reflects the on-screen
         value); fall back to the original team record. */
      var teamName = "";
      if (tmName && typeof tmName.value === "string") teamName = tmName.value.trim();
      if (!teamName && tmCurrentTeamId) {
        var t = getTeamById(tmCurrentTeamId);
        if (t && t.name) teamName = t.name;
      }
      if (!teamName) teamName = "this team";
      if (tmRemoveMemberTitle) {
        tmRemoveMemberTitle.textContent = "Remove member from team?";
      }
      if (tmRemoveMemberBody) {
        tmRemoveMemberBody.textContent =
          "This will remove " + tmPendingRemoveName + " from " + teamName +
          ". The user account and assigned role will remain unchanged.";
      }
      tmRemoveMemberBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (tmRemoveMemberCancel) tmRemoveMemberCancel.focus();
      }, 0);
    }

    function closeTmRemoveMemberConfirm() {
      if (!tmRemoveMemberBackdrop) return;
      tmRemoveMemberBackdrop.setAttribute("hidden", "");
      var restore = tmRemoveMemberLastFocus;
      tmRemoveMemberLastFocus = null;
      tmPendingRemoveKey = null;
      tmPendingRemoveName = "";
      if (restore && typeof restore.focus === "function") {
        try { restore.focus(); } catch (_) {}
      }
    }

    function confirmTmRemoveMember() {
      var key = tmPendingRemoveKey;
      if (key) {
        var hit = tmFindMemberByKey(key);
        if (hit) {
          tmWorkingMembers.splice(hit.idx, 1);
          renderTeamMembers();
          tmRefreshDirty();
        }
      }
      closeTmRemoveMemberConfirm();
    }

    if (tmMembersTbody) {
      tmMembersTbody.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tm-remove]");
        if (!btn) return;
        var key = btn.getAttribute("data-tm-remove");
        openTmRemoveMemberConfirm(key, btn);
      });
    }
    if (tmRemoveMemberCancel) {
      tmRemoveMemberCancel.addEventListener("click", closeTmRemoveMemberConfirm);
    }
    if (tmRemoveMemberConfirm) {
      tmRemoveMemberConfirm.addEventListener("click", confirmTmRemoveMember);
    }
    if (tmRemoveMemberBackdrop) {
      tmRemoveMemberBackdrop.addEventListener("click", function (e) {
        if (e.target === tmRemoveMemberBackdrop) closeTmRemoveMemberConfirm();
      });
    }
    /* Expose a tiny close hook so the cascading global Esc handler
       (added near the Create Role confirms) can dismiss this dialog
       without depending on V3-IIFE-local symbols. */
    window.__closeTmRemoveMemberModal = function () {
      if (tmRemoveMemberBackdrop && !tmRemoveMemberBackdrop.hasAttribute("hidden")) {
        closeTmRemoveMemberConfirm();
      }
    };

    /* ─── Add members modal ─────────────────────────────────────────
       A searchable multi-select picker of internal users who are not
       already on the team.

       It behaves like the Add User Step-1 picker and is built from the
       same parts: the ADS modal shell, the `.au-adduser-*` search field
       and result rows, `renderAvatarHtml` for the avatar, and
       `auSearchAddUserCandidates` for the matching and ranking. Nothing
       is listed until the admin types — the modal used to render the
       entire internal directory (hundreds of rows) the moment it
       opened, which is both slow and useless, since finding anyone
       still meant searching.

       Two things stay deliberately different from Add User, because
       this flow is multi-select rather than single-select:

         · the results sit in a panel inside the modal body rather than
           a floating combobox popover — picking somebody here must not
           dismiss the list, since the next pick usually follows;
         · each row carries a real checkbox, and the selection survives
           the query changing (see `tmAddState.selected`), so an admin
           can gather people across several searches before confirming.

       Selection is local to the modal. On confirm the picked users
       append to `tmWorkingMembers` and the Members table re-renders;
       nothing reaches `TEAM_MEMBERS_DATA` until Save Team. Cancel
       discards. */
    var tmAddBtn = document.getElementById("tmAddMembersBtn");
    var tmAddBackdrop = document.getElementById("tmAddMembersBackdrop");
    var tmAddDialog = tmAddBackdrop ? tmAddBackdrop.querySelector(".cr-confirm-dialog") : null;
    var tmAddCloseBtn = document.getElementById("tmAddMembersClose");
    var tmAddSearch = document.getElementById("tmAddMembersSearch");
    var tmAddSearchClear = document.getElementById("tmAddMembersSearchClear");
    var tmAddSpinner = document.getElementById("tmAddMembersSpinner");
    var tmAddHint = document.getElementById("tmAddMembersHint");
    var tmAddPanel = document.getElementById("tmAddMembersPanel");
    var tmAddList = document.getElementById("tmAddMembersList");
    var tmAddNote = document.getElementById("tmAddMembersNote");
    var tmAddSubmitError = document.getElementById("tmAddMembersSubmitError");
    var tmAddSRStatus = document.getElementById("tmAddMembersSRStatus");
    var tmAddCancel = document.getElementById("tmAddMembersCancel");
    var tmAddConfirm = document.getElementById("tmAddMembersConfirm");
    var tmAddCount = document.getElementById("tmAddMembersCount");

    var TM_ADD_MIN_CHARS = 2;
    var TM_ADD_RESULT_LIMIT = 10;
    /* 220ms: long enough that a fast typist runs one search per word
       rather than one per keystroke, short enough that the list still
       feels like it is keeping up. */
    var tmAddSearchSeq = createSearchSequencer({ debounceMs: 220, minChars: TM_ADD_MIN_CHARS });

    var tmAddState = {
      query: "",
      status: "idle",        /* idle | loading | results | empty | error */
      results: [],
      total: 0,
      memberMatches: 0,      /* matches dropped because they are already on the team */
      selected: {},          /* userId → user object */
      order: [],             /* userIds, in the order they were picked */
      submitting: false
    };
    var tmAddLastFocus = null;

    function tmGetExistingKeySet() {
      var existing = {};
      for (var i = 0; i < tmWorkingMembers.length; i++) {
        var m = tmWorkingMembers[i];
        if (m.userId) existing[m.userId] = true;
        if (m.email) existing["email:" + m.email] = true;
      }
      return existing;
    }
    function tmIsExistingMember(u, existing) {
      if (!u) return false;
      if (u.id && existing[u.id]) return true;
      if (u.email && existing["email:" + u.email]) return true;
      return false;
    }
    /* The searchable directory: every internal user, members of this
       team included. They are subtracted *after* ranking (see
       `tmAddSearchDirectory`) so a search that only turns up people
       who are already on the team can say so, instead of claiming
       nobody matches.

       Round 31 (2026-06-09): always source from the canonical internal
       snapshot (`INTERNAL_ORIGINAL_SNAPSHOT`). This used to iterate
       `DATA`, which is view-toggled — with the External Users view
       active `DATA` held the external array and this modal silently
       came up empty, since `tmIsInternalUser` rejects every external.
       Teams membership is internal-only by spec, so the source must
       not depend on which Users-view tab happens to be open. Falls
       back to `DATA` only in case the snapshot isn't initialised. */
    function tmBuildSearchPool() {
      var source = Array.isArray(INTERNAL_ORIGINAL_SNAPSHOT) && INTERNAL_ORIGINAL_SNAPSHOT.length
        ? INTERNAL_ORIGINAL_SNAPSHOT
        : (Array.isArray(DATA) ? DATA : []);
      return source.filter(tmIsInternalUser);
    }
    /* Ranks the whole internal directory against the query using the
       shared Add User ranking, then splits the matches into the ones
       that can still be added and the ones already on this team. */
    function tmAddSearchDirectory(q) {
      var ranked = auSearchAddUserCandidates(q, tmBuildSearchPool(), Infinity).results;
      var existing = tmGetExistingKeySet();
      var addable = [];
      var memberMatches = 0;
      for (var i = 0; i < ranked.length; i++) {
        if (tmIsExistingMember(ranked[i], existing)) { memberMatches++; continue; }
        addable.push(ranked[i]);
      }
      return {
        total: addable.length,
        results: addable.slice(0, TM_ADD_RESULT_LIMIT),
        memberMatches: memberMatches
      };
    }

    function tmAddAnnounce(msg) {
      if (tmAddSRStatus) tmAddSRStatus.textContent = msg;
    }
    function tmAddSelectedCount() {
      return tmAddState.order.length;
    }
    function tmAddOptionId(userId) {
      return "tm-add-opt-" + String(userId).replace(/[^a-zA-Z0-9_-]/g, "-");
    }

    /* Result row — the Add User option row (avatar, stacked name/email,
       right-aligned semibold team) with a checkbox in front of it. The
       whole row is a <label>, so clicking anywhere in it toggles the
       box, and the box carries the full identity as its accessible
       name. */
    function tmRenderAddOptionHtml(u) {
      var selected = !!tmAddState.selected[u.id];
      var team = u.team || "";
      var boxLabel = "Select " + u.name + ", " + (u.email || "no email") +
        (team ? ", current team " + team : "");
      return (
        '<li class="tm-add-option-item">' +
          '<label class="au-adduser-option tm-add-option' + (selected ? " is-selected" : "") + '"' +
            ' id="' + tmAddOptionId(u.id) + '" data-user-id="' + escTM(u.id) + '">' +
            '<input type="checkbox" class="cr-perm-check tm-add-option-check"' +
              ' data-user-id="' + escTM(u.id) + '" aria-label="' + escTM(boxLabel) + '"' +
              (selected ? " checked" : "") + '>' +
            '<span class="au-adduser-option-avatar">' +
              renderAvatarHtml({ name: u.name, avatar: u.avatar }, !u.avatar) +
            '</span>' +
            '<span class="au-adduser-option-info">' +
              '<span class="au-adduser-option-name tm-add-option-name">' + escTM(u.name) + '</span>' +
              '<span class="au-adduser-option-meta">' +
                '<span class="au-adduser-option-email tm-add-option-email">' + escTM(u.email || "\u2014") + '</span>' +
              '</span>' +
            '</span>' +
            (team ? '<span class="au-adduser-option-team tm-add-option-team">' + escTM(team) + '</span>' : '') +
          '</label>' +
        '</li>'
      );
    }

    /* Long names, emails and team names ellipsize, and only the ones
       actually clipped get a tooltip — same rule the Basic Information
       identity block follows, so a value that fits never picks up a
       tooltip nobody needs. The row's checkbox carries the full text
       of whatever is clipped, which gives keyboard users the tooltip
       on a tab stop that already exists rather than adding three more
       per row. */
    function tmRefreshAddTooltips() {
      if (!tmAddList) return;
      var rows = tmAddList.querySelectorAll(".tm-add-option");
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var clipped = [];
        var parts = ["name", "email", "team"];
        for (var p = 0; p < parts.length; p++) {
          var el = row.querySelector(".tm-add-option-" + parts[p]);
          if (!el) continue;
          var full = el.textContent || "";
          if (el.scrollWidth > el.clientWidth + 1) {
            el.setAttribute("data-tooltip", full);
            clipped.push(full);
          } else {
            el.removeAttribute("data-tooltip");
          }
        }
        var box = row.querySelector(".tm-add-option-check");
        if (box) {
          if (clipped.length) box.setAttribute("data-tooltip", clipped.join(" · "));
          else box.removeAttribute("data-tooltip");
        }
      }
    }

    function tmRenderAddPanel() {
      if (!tmAddPanel || !tmAddList || !tmAddNote) return;
      var st = tmAddState;

      /* Below the threshold there is no panel at all — just the helper
         line under the field. An empty bordered box would only be a
         promise of content that isn't coming yet. */
      if (st.status === "idle") {
        tmAddPanel.setAttribute("hidden", "");
        tmAddList.innerHTML = "";
        tmAddNote.setAttribute("hidden", "");
        if (tmAddHint) tmAddHint.removeAttribute("hidden");
        return;
      }
      if (tmAddHint) tmAddHint.setAttribute("hidden", "");
      tmAddPanel.removeAttribute("hidden");
      tmAddNote.classList.remove("is-error");

      if (st.status === "loading") {
        /* The previous query's rows are cleared rather than left
           sitting under a spinner, so nothing stale reads as current. */
        tmAddList.innerHTML = '<li class="tm-add-state-msg">Searching&hellip;</li>';
        tmAddNote.setAttribute("hidden", "");
        return;
      }
      if (st.status === "error") {
        tmAddList.innerHTML =
          '<li class="tm-add-state-msg tm-add-state-error">' +
            'We couldn\u2019t load matching users. Try again. ' +
            '<button type="button" class="tm-add-retry" id="tmAddMembersRetry">Retry</button>' +
          '</li>';
        tmAddNote.setAttribute("hidden", "");
        return;
      }
      if (st.status === "empty") {
        /* "Nobody matches" and "everybody who matches is already here"
           are different answers, and only one of them means the admin
           should try a different search. */
        if (st.memberMatches > 0) {
          tmAddList.innerHTML =
            '<li class="tm-add-state-msg">Everyone matching this search is already a member of this team.</li>';
          tmAddNote.setAttribute("hidden", "");
        } else {
          tmAddList.innerHTML = '<li class="tm-add-state-msg">No matching users found.</li>';
          tmAddNote.textContent = "Try searching by name, email, or team.";
          tmAddNote.removeAttribute("hidden");
        }
        return;
      }

      var html = "";
      for (var i = 0; i < st.results.length; i++) html += tmRenderAddOptionHtml(st.results[i]);
      tmAddList.innerHTML = html;
      if (st.total > st.results.length) {
        tmAddNote.textContent = "Showing " + st.results.length + " of " + st.total + " results";
        tmAddNote.removeAttribute("hidden");
      } else {
        tmAddNote.setAttribute("hidden", "");
      }
      tmRefreshAddTooltips();
    }

    function tmUpdateAddConfirmState() {
      var n = tmAddSelectedCount();
      if (tmAddCount) tmAddCount.textContent = n + " selected";
      if (tmAddConfirm) tmAddConfirm.disabled = n === 0 || tmAddState.submitting;
    }

    function tmAddSyncSearchAffordances() {
      var hasText = !!(tmAddSearch && tmAddSearch.value.length);
      if (tmAddSearchClear) {
        if (hasText) tmAddSearchClear.removeAttribute("hidden");
        else tmAddSearchClear.setAttribute("hidden", "");
      }
    }

    function tmRunAddSearch(raw) {
      var st = tmAddState;
      st.query = raw;
      tmAddSyncSearchAffordances();
      tmAddSearchSeq.run(raw, {
        onBelowThreshold: function () {
          st.status = "idle";
          st.results = [];
          st.total = 0;
          st.memberMatches = 0;
          if (tmAddSpinner) tmAddSpinner.setAttribute("hidden", "");
          tmRenderAddPanel();
        },
        onLoading: function () {
          st.status = "loading";
          st.results = [];
          st.total = 0;
          st.memberMatches = 0;
          if (tmAddSpinner) tmAddSpinner.removeAttribute("hidden");
          tmRenderAddPanel();
          tmAddAnnounce("Searching\u2026");
        },
        onSettled: function (q) {
          var found;
          try {
            found = tmAddSearchDirectory(q);
          } catch (err) {
            st.status = "error";
            st.results = [];
            st.total = 0;
            st.memberMatches = 0;
            if (tmAddSpinner) tmAddSpinner.setAttribute("hidden", "");
            tmRenderAddPanel();
            tmAddAnnounce("We couldn\u2019t load matching users. Try again.");
            return;
          }
          st.results = found.results;
          st.total = found.total;
          st.memberMatches = found.memberMatches;
          st.status = found.total === 0 ? "empty" : "results";
          if (tmAddSpinner) tmAddSpinner.setAttribute("hidden", "");
          tmRenderAddPanel();
          tmAddAnnounce(
            found.total === 0
              ? (found.memberMatches > 0
                  ? "Everyone matching this search is already a member of this team."
                  : "No matching users found.")
              : (found.total + (found.total === 1 ? " result found." : " results found."))
          );
        }
      });
    }

    function tmClearAddSearch(focusInput) {
      /* Clearing the query empties the results and returns the helper
         line — but never the selection, which the admin may have built
         up across several searches. */
      if (tmAddSearch) tmAddSearch.value = "";
      tmRunAddSearch("");
      if (focusInput && tmAddSearch) tmAddSearch.focus();
    }

    function tmSetAddSelected(user, selected) {
      if (!user || !user.id) return;
      var id = user.id;
      var already = !!tmAddState.selected[id];
      if (selected && !already) {
        tmAddState.selected[id] = user;
        tmAddState.order.push(id);
      } else if (!selected && already) {
        delete tmAddState.selected[id];
        var at = tmAddState.order.indexOf(id);
        if (at !== -1) tmAddState.order.splice(at, 1);
      }
      tmUpdateAddConfirmState();
    }

    function tmOpenAddMembers() {
      if (!tmAddBackdrop) return;
      tmAddSearchSeq.cancel();
      tmAddState.query = "";
      tmAddState.status = "idle";
      tmAddState.results = [];
      tmAddState.total = 0;
      tmAddState.memberMatches = 0;
      tmAddState.selected = {};
      tmAddState.order = [];
      tmAddState.submitting = false;
      if (tmAddSearch) tmAddSearch.value = "";
      if (tmAddSpinner) tmAddSpinner.setAttribute("hidden", "");
      if (tmAddSubmitError) tmAddSubmitError.setAttribute("hidden", "");
      if (tmAddConfirm) tmAddConfirm.removeAttribute("aria-busy");
      tmAddAnnounce("");
      tmAddSyncSearchAffordances();
      tmRenderAddPanel();
      tmUpdateAddConfirmState();
      tmAddLastFocus = document.activeElement;
      tmAddBackdrop.removeAttribute("hidden");
      setTimeout(function () { if (tmAddSearch) tmAddSearch.focus(); }, 0);
    }
    function tmCloseAddMembers() {
      if (!tmAddBackdrop) return;
      tmAddSearchSeq.cancel();
      if (tmAddSpinner) tmAddSpinner.setAttribute("hidden", "");
      tmAddBackdrop.setAttribute("hidden", "");
      if (typeof hideStatusTooltip === "function") hideStatusTooltip();
      /* Focus goes back where it came from, falling back to the trigger:
         the modal can be opened from a script or a click that never
         moved focus onto the button, and dropping focus on <body> would
         strand a keyboard user at the top of the page. */
      var restore = tmAddLastFocus;
      if (!restore || restore === document.body || typeof restore.focus !== "function") restore = tmAddBtn;
      if (restore && typeof restore.focus === "function") restore.focus();
      tmAddLastFocus = null;
    }
    function tmConfirmAddMembers() {
      if (tmAddState.submitting) return;              /* no double submit */
      if (!tmAddSelectedCount()) return;
      tmAddState.submitting = true;
      if (tmAddSubmitError) tmAddSubmitError.setAttribute("hidden", "");
      if (tmAddConfirm) {
        tmAddConfirm.disabled = true;
        tmAddConfirm.setAttribute("aria-busy", "true");
      }
      var added = 0;
      try {
        /* Re-check membership at submit time: the working set can have
           moved on since the results were rendered, and nobody should
           land on the team twice. */
        var existing = tmGetExistingKeySet();
        for (var i = 0; i < tmAddState.order.length; i++) {
          var u = tmAddState.selected[tmAddState.order[i]];
          if (!u || tmIsExistingMember(u, existing)) continue;
          tmWorkingMembers.push(tmMemberFromUser(u));
          if (u.id) existing[u.id] = true;
          if (u.email) existing["email:" + u.email] = true;
          added++;
        }
      } catch (err) {
        tmAddState.submitting = false;
        if (tmAddConfirm) tmAddConfirm.removeAttribute("aria-busy");
        if (tmAddSubmitError) tmAddSubmitError.removeAttribute("hidden");
        tmUpdateAddConfirmState();
        return;                                       /* modal stays open, selection intact */
      }
      tmAddState.submitting = false;
      if (tmAddConfirm) tmAddConfirm.removeAttribute("aria-busy");
      tmCloseAddMembers();
      renderTeamMembers();
      tmRefreshDirty();
      if (added > 0 && typeof showEdlToast === "function") {
        showEdlToast({
          type: "success",
          title: added === 1 ? "1 member added" : added + " members added",
          bodyHtml: "Click <strong>Save Team</strong> to keep these changes."
        });
      }
    }

    if (tmAddBtn) tmAddBtn.addEventListener("click", tmOpenAddMembers);
    if (tmAddCancel) tmAddCancel.addEventListener("click", tmCloseAddMembers);
    if (tmAddCloseBtn) tmAddCloseBtn.addEventListener("click", tmCloseAddMembers);
    if (tmAddConfirm) tmAddConfirm.addEventListener("click", tmConfirmAddMembers);
    if (tmAddBackdrop) {
      tmAddBackdrop.addEventListener("click", function (e) {
        if (e.target === tmAddBackdrop) tmCloseAddMembers();
      });
    }
    if (tmAddSearch) {
      tmAddSearch.addEventListener("input", function () {
        tmRunAddSearch(tmAddSearch.value);
      });
      tmAddSearch.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          var first = tmAddList ? tmAddList.querySelector(".tm-add-option-check") : null;
          if (first) { e.preventDefault(); first.focus(); }
        }
      });
    }
    if (tmAddSearchClear) {
      tmAddSearchClear.addEventListener("click", function () { tmClearAddSearch(true); });
    }
    if (tmAddList) {
      tmAddList.addEventListener("change", function (e) {
        var box = e.target.closest(".tm-add-option-check");
        if (!box) return;
        var uid = box.getAttribute("data-user-id");
        var user = null;
        for (var i = 0; i < tmAddState.results.length; i++) {
          if (tmAddState.results[i].id === uid) { user = tmAddState.results[i]; break; }
        }
        if (!user) user = tmAddState.selected[uid] || null;
        tmSetAddSelected(user, box.checked);
        var row = box.closest(".tm-add-option");
        if (row) row.classList.toggle("is-selected", box.checked);
        tmAddAnnounce(
          (box.checked ? "Selected " : "Deselected ") + (user && user.name ? user.name : "user") +
          ". " + tmAddSelectedCount() + " selected."
        );
      });
      /* Arrow keys walk the result rows; Enter toggles the focused one
         (Space already does natively on a checkbox). */
      tmAddList.addEventListener("keydown", function (e) {
        var box = e.target.closest ? e.target.closest(".tm-add-option-check") : null;
        if (!box) return;
        if (e.key === "Enter") {
          e.preventDefault();
          box.checked = !box.checked;
          box.dispatchEvent(new Event("change", { bubbles: true }));
          return;
        }
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        var boxes = Array.prototype.slice.call(tmAddList.querySelectorAll(".tm-add-option-check"));
        var at = boxes.indexOf(box);
        if (at === -1) return;
        e.preventDefault();
        if (e.key === "ArrowDown") {
          if (at < boxes.length - 1) boxes[at + 1].focus();
        } else if (at > 0) {
          boxes[at - 1].focus();
        } else if (tmAddSearch) {
          tmAddSearch.focus();
        }
      });
      tmAddList.addEventListener("click", function (e) {
        var retry = e.target.closest ? e.target.closest("#tmAddMembersRetry") : null;
        if (!retry) return;
        tmRunAddSearch(tmAddSearch ? tmAddSearch.value : tmAddState.query);
        if (tmAddSearch) tmAddSearch.focus();
      });
    }
    /* Truncation is a function of the rendered width, so it has to be
       re-measured whenever the modal resizes. */
    window.addEventListener("resize", function () {
      if (tmAddBackdrop && !tmAddBackdrop.hasAttribute("hidden")) tmRefreshAddTooltips();
    });
    document.addEventListener("keydown", function (e) {
      if (!tmAddBackdrop || tmAddBackdrop.hasAttribute("hidden")) return;
      if (e.key === "Escape") { tmCloseAddMembers(); return; }
      /* Keep Tab inside the dialog, matching the Add User modal. */
      if (e.key !== "Tab" || !tmAddDialog) return;
      var focusables = tmAddDialog.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      var visible = [];
      for (var i = 0; i < focusables.length; i++) {
        if (focusables[i].offsetParent !== null || focusables[i] === document.activeElement) {
          visible.push(focusables[i]);
        }
      }
      if (!visible.length) return;
      var first = visible[0];
      var last = visible[visible.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    /* The "View all in Users" footer CTA was removed (Frances QA
       2026-05-31). Navigation back to Users is handled by the
       top-level tab nav. */

    /* Initial paint so the table is populated before the user
       first clicks the Teams tab (matches Roles/Perms behavior). */
    renderTMTable();
  })();

  /* ═══ ADD USERS PAGE ═══
     One page with 3 UI states:
       A. Empty (no selected roles)
       B. Selected role cards
       C. Expanded role preview inline in a card.
     Uses ROLES_PERMISSIONS_DATA as source of truth, so custom roles created
     in Roles & Permissions are immediately assignable here. */
  (function setupAddUsersPage() {
    var addUsersPage = document.getElementById("addUsersPage");
    if (!addUsersPage) return;

    var mainPage = document.querySelector(".page");
    var createRolePage = document.getElementById("createRolePage");
    var addUsersBtn = document.getElementById("usersAddBtn");
    if (!addUsersBtn) {
      var usersBtns = document.querySelectorAll("#usersPanel .btn-ghost");
      for (var ub = 0; ub < usersBtns.length; ub++) {
        var btnText = usersBtns[ub].textContent;
        if (btnText.indexOf("Add User") !== -1 || btnText.indexOf("Add Users") !== -1) {
          addUsersBtn = usersBtns[ub];
          break;
        }
      }
    }

    var auBack = document.getElementById("auBack");
    var auBackLabel = document.getElementById("auBackLabel");
    var auCancel = document.getElementById("auCancel");
    var auSave = document.getElementById("auSave");
    var auPageTitle = document.getElementById("auPageTitle");
    var auPageSubtitle = document.getElementById("auPageSubtitle");
    var auRemoveUser = document.getElementById("auRemoveUser");
    var auRoleComboEl = document.getElementById("auRoleCombo");
    var auRoleAdd = document.getElementById("auRoleAdd");
    var auRoleCards = document.getElementById("auRoleCards");
    /* Round 18 (2026-06-09): Edit User assigned-roles chip list. The
       chip list sits below the Assigned Role row and is the visible
       roster of `auState.selectedRoleIds` in edit mode. It is hidden
       in Add mode (the existing role-cards stack handles that flow). */
    var auAssignedRolesList = document.getElementById("auAssignedRolesList");

    /* Edit-mode identity block + Permission Options card refs (V3 only).
       These DOM nodes only render when the page is in edit mode
       (`#addUsersPage.is-edit-mode`); in Add mode they stay hidden and
       the existing Add User flow is untouched. */
    var auEditRow   = document.getElementById("auEditRow");
    var auIdBlock   = document.getElementById("auIdBlock");
    var auIdAvatar  = document.getElementById("auIdAvatar");
    var auIdName    = document.getElementById("auIdName");
    var auIdEmail   = document.getElementById("auIdEmail");
    var auIdStatus  = document.getElementById("auIdStatus");
    var auPermsCard      = document.getElementById("auPermsCard");
    var auPermsCardsEl   = document.getElementById("auPermsCards");
    var auPermsAppCombo  = document.getElementById("auPermsAppCombo");
    var auPermsAppHidden = document.getElementById("auPermsApp");
    var auPermsAppAdd    = document.getElementById("auPermsAppAdd");
    var setAuPermsAppCombo = null;

    var auFirstName = document.getElementById("auFirstName");
    var auLastName = document.getElementById("auLastName");
    var auFullName = document.getElementById("auFullName");
    var auPreferredName = document.getElementById("auPreferredName");
    var auEmail = document.getElementById("auEmail");
    var auRegion = document.getElementById("auRegion");
    var auTimezone = document.getElementById("auTimezone");
    var auTeam = document.getElementById("auTeam");
    /* Round 28 (2026-06-09 — Add User external-user field swap):
       sibling text input that replaces the Team EDL combo when the
       Add User page is opened against the External Users view.
       `applyAuBasicInfoCompanyOrTeam()` toggles visibility, label
       text, and the required-asterisk; `handleSaveUser` reads from
       this input (not `auTeam`) when the new record is external. */
    var auCompany = document.getElementById("auCompany");
    var auStatusValue = document.getElementById("auStatusValue");
    var auStatusSeg = document.getElementById("auStatusSeg");
    var auStatusReadonly = document.getElementById("auStatusReadonly");
    var auBasicCard = document.getElementById("auBasicCard");
    var auRolesCard = document.getElementById("auRolesCard");
    var auRolesPermissionsTitle = document.getElementById("auRolesPermissionsTitle");
    var auEffTbody = document.getElementById("auEffTbody");
    var auBasicSummary = document.getElementById("auBasicSummary");
    var auRolesSummary = document.getElementById("auRolesSummary");
    var auInactiveConfirmBackdrop = document.getElementById("auInactiveConfirmBackdrop");
    var auInactiveConfirmCancel = document.getElementById("auInactiveConfirmCancel");
    var auInactiveConfirmPrimary = document.getElementById("auInactiveConfirmPrimary");
    var auInactiveConfirmLastFocus = null;
    var auRemoveUserBackdrop = document.getElementById("auRemoveUserBackdrop");
    var auRemoveUserCancel = document.getElementById("auRemoveUserCancel");
    var auRemoveUserConfirm = document.getElementById("auRemoveUserConfirm");
    var auRemoveUserTitle = document.getElementById("auRemoveUserTitle");
    var auRemoveUserBody = document.getElementById("auRemoveUserBody");
    var auRemoveUserLastFocus = null;

    var auState = {
      selectedRoleId: "",
      selectedRoleIds: [],
      expandedRoleId: null,
      /* Round 21 (2026-06-09): Edit User assigned-role multi-select
         dropdown. `pendingRoleIds` is the dropdown's *draft* set —
         what the admin has checked/unchecked inside the open menu
         but not yet applied. The "Update access" button copies this
         into `selectedRoleIds` (the *applied* set that actually
         drives the Access table, breakdown modal, dirty state, and
         eventual save). The two arrays diverge while the dropdown is
         open and the admin is making changes; they re-sync on apply
         and whenever Edit User reopens. Add User mode does not use
         this — Add still uses the single-select `auRoleCombo`. */
      pendingRoleIds: []
    };
    /* Read-only cross-closure/test handle — same pattern as the
       existing `window.__close*Modal` hooks used by the shared Escape
       handler below, which live outside this IIFE's scope. Automated
       QA uses this to assert on / simulate "unsaved Role and
       Permission work" for the Change-user discard-work confirmation
       without duplicating this module's internal state shape. Never
       written from outside this closure. */
    window.__auState = auState;

    var auComboState = {
      addUserRegion: (auRegion && auRegion.value) || "NA",
      addUserTimezone: (auTimezone && auTimezone.value) || "America/New_York",
      addUserTeam: (auTeam && auTeam.value) || "",
      addUserRolePick: "",
      /* Edit-mode Permission Options: which assigned-application is
         currently selected in the Assigned Applications combo. Drives
         the enabled state of the Add button. */
      editPermsAppPick: ""
    };
    var setAuRegionCombo = null;
    var setAuTimezoneCombo = null;
    var setAuTeamCombo = null;
    var setAuRoleCombo = null;

    var auPageMode = "add";
    var auEditingUserId = null;
    var auEditBaselineJson = "";
    var auEditOriginalTitle = "";
    var auEditingDisplayName = "";
    var AU_PAGE_TITLE_ADD = "Add user";
    /* Exact Figma 1023:22015 string pattern ("...assign access for
       {product name}", not "Atlas" — this page's own Figma node uses
       the nav-brand name verbatim). Built from the shared
       `window.IAM_PRODUCT_NAME` constant (see top of file) rather than
       a hardcoded literal, so it stays in sync with the nav brand. */
    var AU_PAGE_SUB_ADD = "Capture user details and assign access for " + window.IAM_PRODUCT_NAME;

    var AU_REGION_TIMEZONES = {
      NA: [
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "America/Toronto",
        "America/Vancouver"
      ],
      LATAM: [
        "America/Mexico_City",
        "America/Bogota",
        "America/Lima",
        "America/Sao_Paulo",
        "America/Buenos_Aires",
        "America/Santiago"
      ],
      EMEA: [
        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Europe/Madrid",
        "Europe/Rome",
        "Europe/Warsaw",
        "Africa/Johannesburg",
        "Asia/Dubai"
      ],
      ANZ: [
        "Australia/Sydney",
        "Australia/Melbourne",
        "Australia/Brisbane",
        "Australia/Perth",
        "Australia/Adelaide",
        "Pacific/Auckland"
      ]
    };

    var AU_REGION_LABELS = {
      NA: "NA (United States and Canada)",
      LATAM: "LATAM",
      EMEA: "EMEA",
      ANZ: "ANZ"
    };

    /* ─── V3 Edit User → Permission Options data ─────────────────────────
       Predefined catalog used by the Permission Options card (Figma node
       847:16112) on the Edit User page. The current-state model only
       lets users pick from these allow-lists — no custom action builder,
       no custom access level. Custom function/action editing is a
       future-state concept surfaced as a disabled secondary affordance
       inside each application card (per Tatiana). */
    var AU_PERM_APPS = [
      "Core Planning",
      "Disney Ads Agent",
      "Inventory Catalog Manager",
      "Targeting Option Manager",
      "Deal Configuration Manager",
      "Unified Financial System"
    ];
    /* Access Level allow-list. "Custom" is intentionally absent — see
       Tatiana's clarification: customization lives at the function/action
       level, not at the access level. Do not add Custom back. */
    var AU_PERM_ACCESS_LEVELS = ["View Only", "Edit", "Approve", "Full Access"];
    /* Permission row coverage shown inside each application card. These
       are READ-ONLY display rows — no checkboxes, no edits, no reorder. */
    var AU_PERM_ROWS = [
      { label: "Inventory Items", actions: "View, Create, Edit, Delete" },
      { label: "Offerings",       actions: "View, Create, Edit, Delete" },
      { label: "Sales Packages",  actions: "View, Create, Edit, Delete" }
    ];
    /* Default assigned applications when opening Edit User. Matches the
       Figma node 847:16112 reference content. Per-user assignment data
       is not persisted in this static prototype — every Edit User open
       starts from this Figma-aligned seed for the IAM walkthrough. */
    var AU_PERM_DEFAULT_ASSIGNMENTS = [
      { app: "Core Planning",    access: "Full Access", coverage: "12 permissions" },
      { app: "Disney Ads Agent", access: "Full Access", coverage: "12 permissions" }
    ];

    /* Edit-mode in-memory state. Reset on every openEditUserForId so
       Edit ↔ Add transitions never leak state. */
    var auPermsState = {
      assignments: [],   // [{app, access, coverage, expanded}]
      addPick: ""        // current value of the Assigned Applications combo
    };

    /* Add User → Team list: AU_TEAM_NAMES (EDL combo options). */
    /* Disney Ad Sales team taxonomy (Frances QA 2026-06-07 round 3).
       The Add User / Edit User Team dropdown surfaces the same 7
       teams used in TEAMS_DATA so user-facing team strings stay in
       a single allow-list. Removed legacy / placeholder team names
       (National Sales / Local Sales / Sports Ad Sales / etc.) so
       admins can't pick a team that doesn't exist on the Teams tab. */
    var AU_TEAM_NAMES = [
      "National Ad Sales",
      "Agency & Holding Company Sales",
      "Client & Brand Solutions",
      "Revenue & Yield Management",
      "Sales Planning",
      "Addressable & Programmatic Sales",
      "Ad Operations"
    ];

    var TRASH_SVG = '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';

    function getAURegionKey() {
      var key = (auRegion.value || "").trim();
      if (AU_REGION_TIMEZONES[key]) return key;
      if (key.indexOf("NA") === 0) return "NA";
      if (key.indexOf("LATAM") === 0) return "LATAM";
      if (key.indexOf("EMEA") === 0) return "EMEA";
      if (key.indexOf("ANZ") === 0) return "ANZ";
      return "NA";
    }

    function closeAllAddUserCombos() {
      if (setAuPermsAppCombo && setAuPermsAppCombo.close) setAuPermsAppCombo.close();
      if (setAuRegionCombo && setAuRegionCombo.close) setAuRegionCombo.close();
      if (setAuTimezoneCombo && setAuTimezoneCombo.close) setAuTimezoneCombo.close();
      if (setAuTeamCombo && setAuTeamCombo.close) setAuTeamCombo.close();
      if (setAuRoleCombo && setAuRoleCombo.close) setAuRoleCombo.close();
      /* Round 21 (2026-06-09): also close the Edit User assigned-role
         multi-select dropdown so collapsing the Roles & Permissions
         card / cancelling out of Edit User doesn't leave it open. */
      if (typeof auRoleMultiClose === "function") auRoleMultiClose();
    }

    function buildAuRegionOptions() {
      var order = ["NA", "LATAM", "EMEA", "ANZ"];
      var out = [];
      for (var ri = 0; ri < order.length; ri++) {
        var rk = order[ri];
        out.push({ value: rk, label: AU_REGION_LABELS[rk] });
      }
      return out;
    }

    function buildAuTeamOptions() {
      var out = [];
      for (var ti = 0; ti < AU_TEAM_NAMES.length; ti++) {
        var nm = AU_TEAM_NAMES[ti];
        out.push({ value: nm, label: nm });
      }
      return out;
    }

    function buildAuTimezoneOptions(rkey) {
      var opts = AU_REGION_TIMEZONES[rkey] || AU_REGION_TIMEZONES.NA;
      var arr = [];
      for (var i = 0; i < opts.length; i++) {
        arr.push({ value: opts[i], label: opts[i] });
      }
      return arr;
    }

    function renderAUTimezones(regionKey, preferredTimezone) {
      var opts = AU_REGION_TIMEZONES[regionKey] || AU_REGION_TIMEZONES.NA;
      var current = preferredTimezone || (auTimezone && auTimezone.value) || "";
      var chosen = (current && opts.indexOf(current) !== -1) ? current : opts[0];
      if (auTimezone) auTimezone.value = chosen;
      auComboState.addUserTimezone = chosen;
      if (setAuTimezoneCombo && setAuTimezoneCombo.setOptions) {
        setAuTimezoneCombo.setOptions(buildAuTimezoneOptions(regionKey));
        setAuTimezoneCombo(chosen);
      }
    }

    setAuRegionCombo = initCombo(
      "auRegionCombo",
      buildAuRegionOptions(),
      "addUserRegion",
      "Select region",
      auComboState,
      function () {
        if (auRegion) auRegion.value = auComboState.addUserRegion || "NA";
        renderAUTimezones(getAURegionKey(), null);
        updateAuSummaries();
      },
      "edl-combo-menu--add-user"
    );

    setAuTimezoneCombo = initCombo(
      "auTimezoneCombo",
      buildAuTimezoneOptions(getAURegionKey()),
      "addUserTimezone",
      "Select timezone",
      auComboState,
      function () {
        if (auTimezone) auTimezone.value = auComboState.addUserTimezone || "";
        updateAuSummaries();
      },
      "edl-combo-menu--add-user"
    );

    setAuTeamCombo = initCombo(
      "auTeamCombo",
      buildAuTeamOptions(),
      "addUserTeam",
      "Select team",
      auComboState,
      function () {
        if (auTeam) auTeam.value = auComboState.addUserTeam ? auComboState.addUserTeam.trim() : "";
        updateAuSummaries();
      },
      "edl-combo-menu--add-user"
    );

    setAuRoleCombo = initCombo(
      "auRoleCombo",
      [],
      "addUserRolePick",
      "Search or select a role",
      auComboState,
      function () {
        auState.selectedRoleId = auComboState.addUserRolePick || "";
        syncAuRoleChrome();
        updateAuSummaries();
        /* Round 18 (2026-06-09): Edit User no longer re-renders the
           effective-access table when the picker selection changes.
           In the new model the table reflects the *currently assigned*
           role set (`auState.selectedRoleIds`), not the pending pick.
           The table re-renders only after the admin clicks Add (or
           removes a chip), which mutates `selectedRoleIds` and then
           calls `renderAuCombinedEffectiveAccess()`. The pending pick
           still drives the Add button's enabled state via
           `syncAuRoleChrome`. */
      },
      "edl-combo-menu--add-user"
    );

    /* V3 Edit User — Assigned Applications combo (Permission Options card).
       Same EDL combo factory as the other Add-User combos so visual +
       interaction parity is automatic. */
    if (auPermsAppCombo) {
      setAuPermsAppCombo = initCombo(
        "auPermsAppCombo",
        [],
        "editPermsAppPick",
        "Select an application",
        auComboState,
        function () {
          auPermsState.addPick = auComboState.editPermsAppPick || "";
          if (auPermsAppHidden) auPermsAppHidden.value = auPermsState.addPick;
          if (auPermsAppAdd) auPermsAppAdd.disabled = !auPermsState.addPick;
        },
        "edl-combo-menu--add-user"
      );
    }

    window.__closeAllAddUserCombos = closeAllAddUserCombos;

    /* ─── Round 21 (2026-06-09) ─── Edit User assigned-role multi-select
       dropdown.

       Wires the `#auRoleMultiCombo` element (declared in index.html)
       to a self-contained checkbox-list controller. Visible in Edit
       mode only; Add mode keeps the single-select `#auRoleCombo` and
       its `initCombo` instance, both untouched.

       Behavioural notes (per brief):
         • The dropdown manages a *draft* set (`auState.pendingRoleIds`).
           Checking/unchecking inside the open menu mutates the draft
           only — the applied set (`auState.selectedRoleIds`) and the
           Access table are left alone until the admin presses
           "Update access". This is what makes the interaction a
           "managing the selected role set" gesture rather than the
           Add-style one-at-a-time append the brief explicitly rejects.
         • The trigger label shows the applied set (so admins see what
           access is *currently* in effect even while drafting changes).
         • Search is intentionally omitted (brief §7). No search input,
           no filter, no icon.
         • Keyboard support mirrors EDL combo conventions: Enter/Space
           toggles the highlighted option, ArrowUp/Down moves the
           highlight, Esc closes, Home/End jumps. */
    var auRoleMulti = document.getElementById("auRoleMultiCombo");
    var auRoleMultiTrigger = document.getElementById("auRoleMultiTrigger");
    var auRoleMultiValue = document.getElementById("auRoleMultiValue");
    var auRoleMultiMenu = document.getElementById("auRoleMultiMenu");
    var auRoleMultiKbIndex = -1;

    /* Lookup map: roleId → role record, kept fresh by setOptions. */
    var auRoleMultiOptions = [];

    /* Format the closed-trigger summary using the Users-table
       convention ("Primary, Second" if it still fits the trigger,
       else "Primary +N role(s)"). The brief explicitly accepts both
       shapes and references the Users table as the canonical
       pattern. We measure overflow by comparing scrollWidth to
       clientWidth after rendering the long form; if it overflows we
       fall back to the compact "+N" form. */
    function auFormatRoleMultiSummary(ids) {
      var names = [];
      for (var i = 0; i < ids.length; i++) {
        var rec = (typeof findRoleById === "function") ? findRoleById(ids[i]) : null;
        if (rec && rec.role) names.push(rec.role);
      }
      if (!names.length) return { text: "Select roles", placeholder: true };
      if (names.length === 1) return { text: names[0], placeholder: false };
      var extra = names.length - 1;
      var compact = names[0] + " +" + extra + " role" + (extra > 1 ? "s" : "");
      var full = names.join(", ");
      return { text: full, fallback: compact, placeholder: false };
    }

    function auRoleMultiRenderTrigger() {
      if (!auRoleMultiValue) return;
      var summary = auFormatRoleMultiSummary(auState.selectedRoleIds || []);
      auRoleMultiValue.classList.toggle("is-placeholder", !!summary.placeholder);
      auRoleMultiValue.textContent = summary.text;
      if (summary.fallback && auRoleMultiValue.scrollWidth > auRoleMultiValue.clientWidth) {
        auRoleMultiValue.textContent = summary.fallback;
      }
    }

    function auRoleMultiRenderMenu() {
      if (!auRoleMultiMenu) return;
      auRoleMultiOptions = getAURoleOptions();
      var pending = auState.pendingRoleIds || [];
      var html = "";
      for (var i = 0; i < auRoleMultiOptions.length; i++) {
        var opt = auRoleMultiOptions[i];
        var selected = pending.indexOf(opt.id) !== -1;
        var optId = "auRoleMultiOpt_" + opt.id;
        html += '<label class="au-role-multi-option' + (selected ? " is-selected" : "") + '" role="option" data-au-role-id="' + esc(opt.id) + '" aria-selected="' + (selected ? "true" : "false") + '" tabindex="-1">' +
                  '<span class="au-role-multi-option-cb">' +
                    '<input type="checkbox" id="' + esc(optId) + '" data-au-role-id="' + esc(opt.id) + '"' + (selected ? ' checked' : '') + ' aria-label="' + esc(opt.name) + '">' +
                    '<span class="au-role-multi-option-cb-visual" aria-hidden="true">' +
                      '<svg width="3" height="3" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>' +
                    '</span>' +
                  '</span>' +
                  '<span class="au-role-multi-option-label">' + esc(opt.name) + '</span>' +
                '</label>';
      }
      auRoleMultiMenu.innerHTML = html;
      auRoleMultiKbIndex = -1;
    }

    function auRoleMultiPositionMenu() {
      if (!auRoleMultiTrigger || !auRoleMultiMenu) return;
      var r = auRoleMultiTrigger.getBoundingClientRect();
      auRoleMultiMenu.style.left = r.left + "px";
      auRoleMultiMenu.style.top  = r.bottom + "px";
      auRoleMultiMenu.style.width = r.width + "px";
      auRoleMultiMenu.style.minWidth = r.width + "px";
    }

    function auRoleMultiIsOpen() {
      return auRoleMulti && auRoleMulti.classList.contains("is-open");
    }

    function auRoleMultiOpen() {
      if (!auRoleMulti || !auRoleMultiMenu || auRoleMulti.classList.contains("is-disabled")) return;
      /* The draft (`pendingRoleIds`) is seeded from the applied set
         whenever the dropdown opens so the menu's checkboxes always
         start in sync with the closed-trigger summary. Any unsaved
         draft from a previous open-and-cancel is discarded — matches
         the EDL combo expectation that re-opening shows the current
         state. */
      auState.pendingRoleIds = (auState.selectedRoleIds || []).slice();
      auRoleMultiRenderMenu();
      auRoleMultiPositionMenu();
      auRoleMultiMenu.removeAttribute("hidden");
      auRoleMulti.classList.add("is-open");
      auRoleMultiTrigger.setAttribute("aria-expanded", "true");
      auSyncRoleApplyButton();
    }

    function auRoleMultiClose() {
      if (!auRoleMulti || !auRoleMultiMenu) return;
      auRoleMultiMenu.setAttribute("hidden", "");
      auRoleMulti.classList.remove("is-open");
      if (auRoleMultiTrigger) auRoleMultiTrigger.setAttribute("aria-expanded", "false");
      /* Reset the draft back to the applied set if the admin closed
         without applying. Keeps the dropdown's open-state predictable
         and the Update access button correctly disabled when nothing
         is pending. */
      auState.pendingRoleIds = (auState.selectedRoleIds || []).slice();
      auSyncRoleApplyButton();
    }

    function auRoleMultiToggle() {
      if (auRoleMultiIsOpen()) auRoleMultiClose();
      else auRoleMultiOpen();
    }

    function auRoleMultiSetDisabled(disabled) {
      if (!auRoleMulti) return;
      auRoleMulti.classList.toggle("is-disabled", !!disabled);
      if (auRoleMultiTrigger) auRoleMultiTrigger.disabled = !!disabled;
      if (disabled && auRoleMultiIsOpen()) auRoleMultiClose();
    }

    /* Apply-button (re-purposed `#auRoleAdd` in edit mode → "Update
       access") enabled state: enabled iff the dropdown's draft set
       differs from the applied set AND the user is not inactive. */
    function auRoleMultiPendingDiffers() {
      var applied = (auState.selectedRoleIds || []).slice().sort().join("\u001f");
      var pending = (auState.pendingRoleIds   || []).slice().sort().join("\u001f");
      return applied !== pending;
    }

    function auSyncRoleApplyButton() {
      if (!auRoleAdd) return;
      if (auPageMode !== "edit") return;          /* Add mode handled by syncAuRoleChrome */
      if (selectedStatus() === "Inactive") {
        auRoleAdd.disabled = true;
        return;
      }
      /* In edit mode the button is "Update access" and tracks the
         dropdown's pending diff, not the single-pick combo. */
      auRoleAdd.disabled = !auRoleMultiPendingDiffers();
    }

    if (auRoleMultiTrigger) {
      auRoleMultiTrigger.addEventListener("click", function (e) {
        e.preventDefault();
        if (auRoleMulti.classList.contains("is-disabled")) return;
        auRoleMultiToggle();
      });
      auRoleMultiTrigger.addEventListener("keydown", function (e) {
        if (auRoleMulti.classList.contains("is-disabled")) return;
        if (e.key === "ArrowDown" || e.key === "Down") {
          e.preventDefault();
          if (!auRoleMultiIsOpen()) auRoleMultiOpen();
          auRoleMultiMoveHighlight(1);
        } else if (e.key === "ArrowUp" || e.key === "Up") {
          e.preventDefault();
          if (!auRoleMultiIsOpen()) auRoleMultiOpen();
          auRoleMultiMoveHighlight(-1);
        } else if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          auRoleMultiToggle();
        } else if (e.key === "Escape" || e.key === "Esc") {
          if (auRoleMultiIsOpen()) { e.preventDefault(); auRoleMultiClose(); }
        }
      });
    }

    function auRoleMultiMoveHighlight(delta) {
      var items = auRoleMultiMenu ? auRoleMultiMenu.querySelectorAll(".au-role-multi-option") : [];
      if (!items.length) return;
      var next = auRoleMultiKbIndex + delta;
      if (next < 0) next = items.length - 1;
      if (next >= items.length) next = 0;
      auRoleMultiKbIndex = next;
      for (var i = 0; i < items.length; i++) items[i].classList.toggle("kb-highlight", i === next);
      var el = items[next];
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ block: "nearest" });
      }
    }

    if (auRoleMultiMenu) {
      /* Toggling an option mutates the draft only; the applied set is
         left alone until "Update access" is pressed. We re-render the
         visual selection state inline so the menu doesn't have to be
         fully rebuilt on every check (which would scroll the menu
         back to the top on each click). */
      auRoleMultiMenu.addEventListener("click", function (e) {
        var opt = e.target.closest(".au-role-multi-option");
        if (!opt) return;
        var roleId = opt.getAttribute("data-au-role-id");
        if (!roleId) return;
        /* If the click landed on the native checkbox input the browser
           toggles its `checked` state before this listener runs; for
           any other click target we want the same toggle behavior. */
        var input = opt.querySelector('input[type="checkbox"]');
        if (input && e.target !== input) {
          input.checked = !input.checked;
        }
        var idx = auState.pendingRoleIds.indexOf(roleId);
        if (input && input.checked) {
          if (idx === -1) auState.pendingRoleIds.push(roleId);
        } else {
          if (idx !== -1) auState.pendingRoleIds.splice(idx, 1);
        }
        var nowSelected = auState.pendingRoleIds.indexOf(roleId) !== -1;
        opt.classList.toggle("is-selected", nowSelected);
        opt.setAttribute("aria-selected", nowSelected ? "true" : "false");
        if (input) input.checked = nowSelected;
        auSyncRoleApplyButton();
        /* Stop the label-click from propagating to the document
           outside-click handler (which would close the menu). */
        e.stopPropagation();
        e.preventDefault();
      });
      auRoleMultiMenu.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.key === "Esc") {
          e.preventDefault();
          auRoleMultiClose();
          if (auRoleMultiTrigger) auRoleMultiTrigger.focus();
        }
      });
    }

    /* Outside click → close. Scoped so Add-mode combos and other
       open UI keep working. Listens for both `mousedown` (real-user
       clicks) and `click` (programmatic dispatchEvent and synthetic
       clicks from automation) so the dropdown closes regardless of
       which event reaches the document first. */
    function auRoleMultiHandleOutside(e) {
      if (!auRoleMultiIsOpen()) return;
      if (auRoleMulti.contains(e.target) || (auRoleMultiMenu && auRoleMultiMenu.contains(e.target))) return;
      auRoleMultiClose();
    }
    document.addEventListener("mousedown", auRoleMultiHandleOutside);
    document.addEventListener("click", auRoleMultiHandleOutside);
    window.addEventListener("resize", function () {
      if (auRoleMultiIsOpen()) auRoleMultiPositionMenu();
    });
    window.addEventListener("scroll", function () {
      if (auRoleMultiIsOpen()) auRoleMultiPositionMenu();
    }, true);

    renderAURolePicker();

    function setAUStatus(value) {
      var next = value === "Inactive" ? "Inactive" : "Active";
      if (auStatusValue) auStatusValue.value = next;
      if (auStatusReadonly) {
        var statusIcon = next === "Active" ? STATUS_ICON_ACTIVE : STATUS_ICON_INACTIVE;
        auStatusReadonly.innerHTML = statusIcon + '<span class="au-status-readonly-text">' + esc(next) + '</span>';
        auStatusReadonly.setAttribute("aria-label", next);
      }
      if (!auStatusSeg) return;
      var btns = auStatusSeg.querySelectorAll("[data-au-status]");
      for (var i = 0; i < btns.length; i++) {
        var on = btns[i].getAttribute("data-au-status") === next;
        btns[i].classList.toggle("is-selected", on);
        btns[i].setAttribute("aria-pressed", on ? "true" : "false");
      }
      updateAuSummaries();
      syncAuRoleChrome();
    }

    function syncAuRoleChrome() {
      var inactive = selectedStatus() === "Inactive";
      if (auRoleComboEl) {
        auRoleComboEl.classList.toggle("is-au-roles-locked", inactive);
        if (inactive && setAuRoleCombo && setAuRoleCombo.close) setAuRoleCombo.close();
      }
      if (setAuRoleCombo && setAuRoleCombo.setDisabled) setAuRoleCombo.setDisabled(inactive);
      /* Round 21 (2026-06-09): edit-mode Assigned Role uses the
         multi-select dropdown + "Update access" button, which has
         different disabled logic than Add mode's "Add" button. We
         delegate edit mode to `auSyncRoleApplyButton` and only do
         the Add-mode Add-button gating here. */
      if (typeof auRoleMultiSetDisabled === "function") auRoleMultiSetDisabled(inactive);
      if (auRoleAdd) {
        if (auPageMode === "edit") {
          auSyncRoleApplyButton();
        } else if (inactive) {
          auRoleAdd.disabled = true;
        } else {
          auRoleAdd.disabled = !auState.selectedRoleId || auState.selectedRoleIds.indexOf(auState.selectedRoleId) !== -1;
        }
      }
    }

    function closeAuInactiveConfirm() {
      if (!auInactiveConfirmBackdrop) return;
      auInactiveConfirmBackdrop.setAttribute("hidden", "");
      if (auInactiveConfirmLastFocus && typeof auInactiveConfirmLastFocus.focus === "function") {
        auInactiveConfirmLastFocus.focus();
      }
      auInactiveConfirmLastFocus = null;
    }

    function openAuInactiveConfirm() {
      if (!auInactiveConfirmBackdrop) return;
      auInactiveConfirmLastFocus = document.activeElement;
      auInactiveConfirmBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (auInactiveConfirmCancel) auInactiveConfirmCancel.focus();
      }, 0);
    }

    function cancelAuInactivePending() {
      closeAuInactiveConfirm();
      setAUStatus("Active");
    }

    function confirmAuInactive() {
      closeAuInactiveConfirm();
      auState.selectedRoleId = "";
      auState.selectedRoleIds = [];
      auState.pendingRoleIds = [];
      auState.expandedRoleId = null;
      setAUStatus("Inactive");
      renderAURolePicker();
      renderAURoleCards();
      if (typeof auRoleMultiClose === "function") auRoleMultiClose();
      if (typeof auRoleMultiRenderTrigger === "function") auRoleMultiRenderTrigger();
    }

    function auExpandSections() {
      if (auBasicCard) {
        auBasicCard.classList.remove("collapsed");
        var hb = auBasicCard.querySelector(".cr-section-header[data-au-toggle]");
        if (hb) hb.setAttribute("aria-expanded", "true");
      }
      if (auRolesCard) {
        auRolesCard.classList.remove("collapsed");
        var hr = auRolesCard.querySelector(".cr-section-header[data-au-toggle]");
        if (hr) hr.setAttribute("aria-expanded", "true");
      }
    }

    function resetAddUsersState() {
      auState.selectedRoleId = "";
      auState.selectedRoleIds = [];
      auState.pendingRoleIds = [];
      auState.expandedRoleId = null;
      auFirstName.value = "";
      auLastName.value = "";
      if (auFullName) auFullName.value = "";
      auPreferredName.value = "";
      auEmail.value = "";
      if (auRegion) auRegion.value = "NA";
      if (auTimezone) auTimezone.value = "America/New_York";
      if (auTeam) auTeam.value = "";
      /* Round 28: also clear the Company name text input so re-opens
         of the Add User page start blank regardless of `userView`. The
         `data-au-last-mode` reset is what tells
         applyAuBasicInfoCompanyOrTeam to treat the next mount as a
         fresh switch (and thus to clear any stale value when toggling
         between internal/external user types). */
      if (auCompany) {
        auCompany.value = "";
        auCompany.removeAttribute("data-au-last-mode");
      }
      auComboState.addUserRegion = "NA";
      auComboState.addUserTimezone = "America/New_York";
      auComboState.addUserTeam = "";
      auComboState.addUserRolePick = "";
      if (setAuRegionCombo) setAuRegionCombo("NA");
      renderAUTimezones("NA", "America/New_York");
      if (setAuTeamCombo) setAuTeamCombo("");
      if (setAuRoleCombo) setAuRoleCombo("");
      setAUStatus("Active");
      /* Resolve Team-vs-Company field state based on current mode:
         Edit mode reads from the user record; Add mode reads from
         the global `userView` (Internal/External Users segmented
         toggle on the Users page). The unified
         `applyAuBasicInfoCompanyOrTeam` helper handles both. */
      if (typeof applyAuBasicInfoCompanyOrTeam === "function") applyAuBasicInfoCompanyOrTeam(null);
      renderAURolePicker();
      renderAURoleCards();
      /* Round 18: clear the Edit-mode chip list when resetting (Add
         User has no chip list — `renderAuAssignedRolesChips` hides
         itself when `auPageMode !== "edit"`). */
      if (typeof renderAuAssignedRolesChips === "function") renderAuAssignedRolesChips();
      auExpandSections();
      updateAuSummaries();
      /* Add User modal integration: a fresh/manual Add User open has
         no roster selection — clear the "selected from roster" banner
         and any readonly state left over from a previous Continue. */
      if (typeof auHideRosterBanner === "function") auHideRosterBanner();
    }

    function openAddUsers() {
      if (mainPage) mainPage.style.display = "none";
      if (createRolePage) createRolePage.style.display = "none";
      addUsersPage.style.display = "";
      window.scrollTo(0, 0);
      auPageMode = "add";
      auEditingUserId = null;
      auEditBaselineJson = "";
      auEditOriginalTitle = "";
      auEditingDisplayName = "";
      applyAuPageChrome();
      resetAddUsersState();
      refreshAuSaveDirty();
    }

    function closeAddUsers() {
      if (auInactiveConfirmBackdrop && !auInactiveConfirmBackdrop.hasAttribute("hidden")) {
        closeAuInactiveConfirm();
      }
      if (auRemoveUserBackdrop && !auRemoveUserBackdrop.hasAttribute("hidden")) {
        closeAuRemoveUserConfirm();
      }
      auPageMode = "add";
      auEditingUserId = null;
      auEditBaselineJson = "";
      auEditOriginalTitle = "";
      auEditingDisplayName = "";
      applyAuPageChrome();
      addUsersPage.style.display = "none";
      if (mainPage) mainPage.style.display = "";
      switchTab("users");
      closeAllAddUserCombos();
    }

    /* ═══ Add User modal — single-step search/select (Figma 1023:22735)
       ═══════════════════════════════════════════════════════════════
       Opens BEFORE the existing Add User page when the admin clicks
       "Add User." Never creates or saves a user by itself — Next only
       captures the selected roster/IAM record into
       `auAddUserAppliedSelection` and hands it to the unchanged
       openAddUsers() + Basic Information grid, which is Step 2 of the
       overall flow. State model matches the prompt's suggested shape
       1:1.

       2026-08-10 flow change: this modal used to have an internal
       "Step 2 of 2" screen (a detailed review card + Back + "Continue"
       rendered in this same dialog once a user was selected) before
       handing off to the Add User page. That in-modal review step has
       been removed — Next now closes this modal immediately and the
       Add User page itself serves as Step 2, so the admin is never
       asked to confirm the same person twice across two dialogs. */
    var auAddUserModalBackdrop = document.getElementById("auAddUserModalBackdrop");
    var auAddUserModalClose = document.getElementById("auAddUserModalClose");
    var auAddUserStepOf = document.getElementById("auAddUserStepOf");
    var auAddUserStepName = document.getElementById("auAddUserStepName");
    var auAddUserModalSubtext = document.getElementById("auAddUserModalSubtext");
    var auAddUserSearchWrap = document.getElementById("auAddUserSearchWrap");
    var auAddUserSearchInput = document.getElementById("auAddUserSearchInput");
    var auAddUserSearchClear = document.getElementById("auAddUserSearchClear");
    var auAddUserSearchSpinner = document.getElementById("auAddUserSearchSpinner");
    var auAddUserDropdown = document.getElementById("auAddUserDropdown");
    var auAddUserListbox = document.getElementById("auAddUserListbox");
    var auAddUserDDNote = document.getElementById("auAddUserDDNote");
    var auAddUserSelected = document.getElementById("auAddUserSelected");
    var auAddUserSelectedLabel = document.getElementById("auAddUserSelectedLabel");
    var auAddUserSelectedCard = document.getElementById("auAddUserSelectedCard");
    var auAddUserDuplicate = document.getElementById("auAddUserDuplicate");
    var auAddUserSRStatus = document.getElementById("auAddUserSRStatus");
    var auAddUserCancel = document.getElementById("auAddUserCancel");
    var auAddUserNext = document.getElementById("auAddUserNext");
    /* Round 31 (2026-08-11, Add User parity pass): "Change user" was
       removed completely (no replacement control on this page — the
       admin returns to the previous selection step instead), so its
       header-row trigger and discard-work confirm modal are gone too. */
    var auIdEmpty = document.getElementById("auIdEmpty");
    var auIdEmptySelectBtn = document.getElementById("auIdEmptySelectBtn");

    /* Single-step search/select modal (Figma 1023:22735). The former
       internal "Step 2 of 2" review screen — a detailed card + Back +
       "Continue" button rendered inside this same dialog once a user
       was selected — has been removed per the 2026-08-10 flow change:
       clicking Next now closes this modal immediately and hands the
       selection straight to the Add User page, which is Step 2 of the
       overall flow (not a second modal). `step` is kept at a constant
       1 rather than deleted outright so the handful of helpers that
       read `auAddUserState.step` (announcements, chrome render) don't
       need a parallel "stepless" code path — it just never changes. */
    var auAddUserState = {
      open: false,
      step: 1,
      query: "",
      status: "idle",       /* idle | loading | results | empty | error */
      results: [],
      total: 0,
      highlightedIndex: -1,
      selectedId: null,     /* pool id, e.g. "roster:r001" or "iam:u002" */
      selectedUser: null
    };
    var auAddUserLastFocus = null;
    var auAddUserAppliedSelection = null; /* last selection applied to Basic Information (for "Change user") */
    /* How many ranked matches the dropdown lists at once; anything
       beyond this is surfaced as "Showing 10 of N results". */
    var AU_ADDUSER_RESULT_LIMIT = 10;
    var auAddUserSearchSeq = createSearchSequencer({ debounceMs: 160, minChars: 1 });

    function auAddUserOptionId(poolId) {
      return "au-add-opt-" + String(poolId).replace(/[^a-zA-Z0-9_-]/g, "-");
    }

    function auAddUserAnnounce(msg) {
      if (auAddUserSRStatus) auAddUserSRStatus.textContent = msg;
    }

    function auAddUserResetState() {
      auAddUserSearchSeq.cancel();
      auAddUserState.step = 1;
      auAddUserState.query = "";
      auAddUserState.status = "idle";
      auAddUserState.results = [];
      auAddUserState.total = 0;
      auAddUserState.highlightedIndex = -1;
      auAddUserState.selectedId = null;
      auAddUserState.selectedUser = null;
      if (auAddUserSearchInput) auAddUserSearchInput.value = "";
      auAddUserCloseDropdown();
    }

    function auAddUserCloseDropdown() {
      if (auAddUserDropdown) auAddUserDropdown.setAttribute("hidden", "");
      if (auAddUserSearchInput) {
        auAddUserSearchInput.setAttribute("aria-expanded", "false");
        auAddUserSearchInput.setAttribute("aria-activedescendant", "");
      }
      auAddUserState.highlightedIndex = -1;
    }

    function auAddUserRenderChrome() {
      /* Always Step 1 chrome now — see the state-model comment above.
         Kept as a function (rather than static markup) so the Selected-
         user preview re-renders consistently from a single call site. */
      if (auAddUserStepOf) auAddUserStepOf.textContent = "Step 1 of 2";
      if (auAddUserStepName) auAddUserStepName.textContent = ", Select user";
      if (auAddUserModalSubtext) {
        auAddUserModalSubtext.textContent = "Search for an employee, then select one user to continue.";
      }
      if (auAddUserSearchInput) {
        auAddUserSearchInput.placeholder = "Search by name, email, or team";
      }
      if (auAddUserNext) auAddUserNext.textContent = "Next";
    }

    /* Renders one dropdown option row: avatar, name, email, team only
       (Step 1 dropdown contract) — never the full Step 2 detail set.
       Round 26 (2026-08-11 — result-row cleanup): Team is now only
       shown for candidates who can still be added. For someone who
       `alreadyInIam`, Team is redundant with the "Already has access"
       badge and was crowding the row (both fighting for the same
       trailing space against a truncated team string), so it's simply
       omitted for that state — no placeholder/dash left behind. */
    function auAddUserRenderOptionHtml(u, isHighlighted) {
      var disabled = !u.eligible;
      var selected = auAddUserState.selectedId === u.poolId;
      var classes = "au-adduser-option" + (disabled ? " is-disabled" : "") + (isHighlighted ? " is-active" : "");
      var badge = "";
      if (u.alreadyInIam) badge = '<span class="au-adduser-option-badge">Already has access</span>';
      else if (disabled) badge = '<span class="au-adduser-option-badge">' + esc(u.ineligibleReason || "Unavailable") + '</span>';
      var showTeam = !!(u.team && !u.alreadyInIam);
      var avatarUser = { name: u.name, avatar: u.avatar };
      var ariaLabel = u.name + ", " + (u.email || "no email") + (showTeam ? (", " + u.team) : "") +
        (u.alreadyInIam ? ", already has access" : (disabled ? (", " + (u.ineligibleReason || "unavailable")) : ""));
      return (
        '<li id="' + auAddUserOptionId(u.poolId) + '" class="' + classes + '" role="option"' +
          ' aria-selected="' + (selected ? "true" : "false") + '"' +
          ' aria-disabled="' + (disabled ? "true" : "false") + '"' +
          ' data-pool-id="' + esc(u.poolId) + '" aria-label="' + esc(ariaLabel) + '">' +
          '<span class="au-adduser-option-avatar">' + renderAvatarHtml(avatarUser, !u.avatar) + '</span>' +
          '<span class="au-adduser-option-info">' +
            '<span class="au-adduser-option-name" title="' + esc(u.name) + '">' + esc(u.name) + '</span>' +
            '<span class="au-adduser-option-meta">' +
              '<span class="au-adduser-option-email" title="' + esc(u.email || "") + '">' + esc(u.email || "\u2014") + '</span>' +
            '</span>' +
          '</span>' +
          (showTeam ? '<span class="au-adduser-option-team" title="' + esc(u.team) + '">' + esc(u.team) + '</span>' : '') +
          badge +
          (selected ? '<svg class="au-adduser-option-check" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>' : "") +
        '</li>'
      );
    }

    /* The dropdown is `position:fixed` so it can escape `.au-adduser-body`'s
       own scroll clipping on short viewports (see CSS comment) — which
       means its left/top/width/max-height must be computed from the
       search field's live position instead of expressed in CSS. Re-run
       on every render while open, and on resize/scroll so it tracks the
       field if the window or an ancestor scrolls. */
    function auAddUserPositionDropdown() {
      if (!auAddUserDropdown || !auAddUserSearchWrap) return;
      if (auAddUserDropdown.hasAttribute("hidden")) return;
      var rect = auAddUserSearchWrap.getBoundingClientRect();
      var gap = 8; // space between the search field and results panel, so the clear button never visually collides with the dropdown below it
      var margin = 16;
      var top = rect.bottom + gap;
      var available = window.innerHeight - top - margin;
      auAddUserDropdown.style.left = Math.round(rect.left) + "px";
      auAddUserDropdown.style.width = Math.round(rect.width) + "px";
      auAddUserDropdown.style.top = Math.round(top) + "px";
      auAddUserDropdown.style.maxHeight = Math.max(120, Math.min(380, available)) + "px";
    }
    window.addEventListener("resize", auAddUserPositionDropdown);
    window.addEventListener("scroll", auAddUserPositionDropdown, true);

    function auAddUserRenderDropdown() {
      if (!auAddUserListbox || !auAddUserDropdown || !auAddUserDDNote) return;
      var st = auAddUserState;
      if (st.status === "idle") {
        auAddUserCloseDropdown();
        return;
      }
      auAddUserDropdown.removeAttribute("hidden");
      auAddUserPositionDropdown();
      if (auAddUserSearchInput) auAddUserSearchInput.setAttribute("aria-expanded", "true");

      if (st.status === "loading") {
        auAddUserListbox.innerHTML = '<li class="au-adduser-dd-empty-msg" role="presentation" style="padding:12px;font-family:var(--ff);font-size:13px;color:var(--iam-ads-text-muted);">Searching&hellip;</li>';
        auAddUserDDNote.setAttribute("hidden", "");
        return;
      }
      if (st.status === "error") {
        auAddUserListbox.innerHTML = "";
        auAddUserDDNote.textContent = "Something went wrong while searching. Please try again.";
        auAddUserDDNote.classList.add("is-error");
        auAddUserDDNote.removeAttribute("hidden");
        return;
      }
      if (st.status === "empty") {
        auAddUserListbox.innerHTML = '<li class="au-adduser-dd-empty-msg" role="presentation" style="padding:12px;font-family:var(--ff);font-size:13px;color:var(--iam-ads-text-secondary);">No users found.</li>';
        auAddUserDDNote.textContent = "Try a different name, email, or team.";
        auAddUserDDNote.classList.remove("is-error");
        auAddUserDDNote.removeAttribute("hidden");
        return;
      }
      /* results */
      var html = "";
      for (var i = 0; i < st.results.length; i++) {
        html += auAddUserRenderOptionHtml(st.results[i], i === st.highlightedIndex);
      }
      auAddUserListbox.innerHTML = html;
      auAddUserDDNote.classList.remove("is-error");
      if (st.total > st.results.length) {
        auAddUserDDNote.textContent = "Showing " + st.results.length + " of " + st.total + " results";
        auAddUserDDNote.removeAttribute("hidden");
      } else {
        auAddUserDDNote.setAttribute("hidden", "");
      }
      if (st.highlightedIndex >= 0 && st.results[st.highlightedIndex] && auAddUserSearchInput) {
        auAddUserSearchInput.setAttribute("aria-activedescendant", auAddUserOptionId(st.results[st.highlightedIndex].poolId));
      } else if (auAddUserSearchInput) {
        auAddUserSearchInput.setAttribute("aria-activedescendant", "");
      }
    }

    function auAddUserRunSearch(query) {
      var st = auAddUserState;
      st.query = query;
      /* Debounce, threshold and stale-response guard all live in the
         shared sequencer (see `createSearchSequencer`), which Add
         members uses too. This flow searches from the first character,
         so its threshold is 1. */
      auAddUserSearchSeq.run(query, {
        onBelowThreshold: function () {
          st.status = "idle";
          st.results = [];
          st.total = 0;
          st.highlightedIndex = -1;
          if (auAddUserSearchSpinner) auAddUserSearchSpinner.setAttribute("hidden", "");
          auAddUserRenderDropdown();
        },
        onLoading: function () {
          st.status = "loading";
          st.highlightedIndex = -1;
          if (auAddUserSearchSpinner) auAddUserSearchSpinner.removeAttribute("hidden");
          auAddUserRenderDropdown();
        },
        /* The delay before this runs is a simulated async search
           (prototype-only), the same latency pattern used elsewhere in
           this app (e.g. the Export "preparing" beat) — it gives the
           loading state something real to show and exercises the
           sequencer's stale-response guard. */
        onSettled: function (q) {
          var found;
          try {
            found = auSearchAddUserCandidates(q, auGetAddUserSearchPool(), AU_ADDUSER_RESULT_LIMIT);
          } catch (err) {
            /* The dropdown has always been able to render an error
               state; before this guard it was the one status nothing
               could actually reach, so a failing directory lookup threw
               past the sequencer and left a stale spinner up instead.
               Mirrors the Add members picker, which wraps the same
               lookup. */
            st.results = [];
            st.total = 0;
            st.status = "error";
            if (auAddUserSearchSpinner) auAddUserSearchSpinner.setAttribute("hidden", "");
            auAddUserRenderDropdown();
            auAddUserAnnounce("Something went wrong while searching. Please try again.");
            return;
          }
          st.results = found.results;
          st.total = found.total;
          st.status = found.total === 0 ? "empty" : "results";
          if (auAddUserSearchSpinner) auAddUserSearchSpinner.setAttribute("hidden", "");
          auAddUserRenderDropdown();
          auAddUserAnnounce(
            found.total === 0
              ? "No users found."
              : (found.total + (found.total === 1 ? " result found." : " results found."))
          );
        }
      });
    }

    function auAddUserHighlight(index) {
      var st = auAddUserState;
      if (!st.results.length) return;
      if (index < 0) index = 0;
      if (index > st.results.length - 1) index = st.results.length - 1;
      st.highlightedIndex = index;
      auAddUserRenderDropdown();
      var u = st.results[index];
      if (u) {
        auAddUserAnnounce(u.name + ", " + (u.email || "no email") + (u.team ? (", " + u.team) : "") + (u.eligible ? "" : (", " + (u.ineligibleReason || "unavailable"))));
        var optEl = document.getElementById(auAddUserOptionId(u.poolId));
        if (optEl && optEl.scrollIntoView) optEl.scrollIntoView({ block: "nearest" });
      }
    }

    /* Renders the Selected user preview: avatar, name, email, team,
       and the selected/check indicator (Figma 1023:22735). This is the
       ONLY selected-user rendering the modal ever shows now — the
       former "Step 2, detailed" variant (Employee ID/Region/Timezone/
       Department/User type/Status rows in an enlarged card) was the
       in-modal review screen the 2026-08-10 flow change removes. That
       full record is still shown to the admin — just on the Add User
       page's Basic Information section after Next, not a second time
       in here. Also drives the inline "already has access" banner and
       the Next button's enabled state. */
    function auAddUserRenderSelected() {
      var st = auAddUserState;
      var u = st.selectedUser;
      if (!u) {
        if (auAddUserSelected) auAddUserSelected.setAttribute("hidden", "");
        if (auAddUserNext) auAddUserNext.disabled = true;
        return;
      }
      if (auAddUserSelected) auAddUserSelected.removeAttribute("hidden");
      if (auAddUserSelectedLabel) auAddUserSelectedLabel.textContent = "Selected user";

      var rows = [];
      rows.push('<span class="au-adduser-selected-name">' + esc(u.name) + '</span>');
      if (u.email) rows.push('<span class="au-adduser-selected-row">' + esc(u.email) + '</span>');
      if (u.team) rows.push('<span class="au-adduser-selected-row">' + esc(u.team) + '</span>');

      if (auAddUserSelectedCard) {
        auAddUserSelectedCard.className = "au-adduser-selected-card";
        auAddUserSelectedCard.innerHTML =
          '<span class="au-adduser-selected-card-avatar">' + renderAvatarHtml({ name: u.name, avatar: u.avatar }, !u.avatar) + '</span>' +
          '<span class="au-adduser-selected-info">' +
            '<span class="au-adduser-selected-text">' + rows.join("") + '</span>' +
            '<span class="au-adduser-selected-check" aria-hidden="true">' +
              '<svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>' +
            '</span>' +
          '</span>';
      }

      if (auAddUserDuplicate) {
        if (u.alreadyInIam) {
          auAddUserDuplicate.innerHTML =
            esc(u.name) + ' already has access to Atlas.' +
            (u.existingUserId ? ' <button type="button" class="au-adduser-duplicate-link" id="auAddUserViewDuplicate">View user details</button>' : "");
          auAddUserDuplicate.removeAttribute("hidden");
        } else {
          auAddUserDuplicate.setAttribute("hidden", "");
          auAddUserDuplicate.innerHTML = "";
        }
      }

      if (auAddUserNext) auAddUserNext.disabled = !!u.alreadyInIam;
    }

    function auAddUserSelectCandidate(poolId) {
      var pool = auGetAddUserSearchPool();
      var found = null;
      for (var i = 0; i < pool.length; i++) { if (pool[i].poolId === poolId) { found = pool[i]; break; } }
      if (!found || !found.eligible) return;
      auAddUserState.selectedId = poolId;
      auAddUserState.selectedUser = found;
      if (auAddUserSearchInput) auAddUserSearchInput.value = "";
      if (auAddUserSearchClear) auAddUserSearchClear.setAttribute("hidden", "");
      auAddUserState.query = "";
      auAddUserState.status = "idle";
      auAddUserState.results = [];
      auAddUserCloseDropdown();
      auAddUserRenderSelected();
      auAddUserAnnounce((found.alreadyInIam ? "Already selected: " : "Selected: ") + found.name + (found.alreadyInIam ? " (already has access)" : ""));
    }

    /* Reopens the Step 1 modal with a person already selected — used by
       "Change user" so the admin doesn't have to re-search for the
       person they already picked if they just want to browse for
       someone else. This is NOT a review screen: it's the exact same
       Step 1 UI (search field + compact Selected-user preview + Next),
       just pre-populated. Clicking Next immediately replaces the
       Basic Information identity, same as a first-time selection. */
    function auAddUserOpen(opts) {
      if (!auAddUserModalBackdrop) { openAddUsers(); return; }
      var preselect = opts && opts.preselect;
      auAddUserResetState();
      if (preselect) {
        auAddUserState.selectedId = preselect.poolId;
        auAddUserState.selectedUser = preselect;
      }
      auAddUserLastFocus = document.activeElement;
      auAddUserModalBackdrop.removeAttribute("hidden");
      auAddUserRenderChrome();
      auAddUserRenderSelected();
      setTimeout(function () { if (auAddUserSearchInput) auAddUserSearchInput.focus(); }, 0);
    }

    function auAddUserClose() {
      if (!auAddUserModalBackdrop) return;
      auAddUserModalBackdrop.setAttribute("hidden", "");
      auAddUserResetState();
      if (auAddUserLastFocus && typeof auAddUserLastFocus.focus === "function") auAddUserLastFocus.focus();
      auAddUserLastFocus = null;
    }

    /* Splits a display name into (first, last) for the existing
       First name / Last name fields — the Add User grid has no
       single "Name" input outside edit mode. */
    function auAddUserSplitName(name) {
      var parts = String(name || "").trim().split(/\s+/);
      var first = parts.shift() || "";
      var last = parts.join(" ");
      return { first: first, last: last };
    }

    function auSetFieldReadonly(el, readonly) {
      if (!el) return;
      el.readOnly = !!readonly;
      el.setAttribute("aria-readonly", readonly ? "true" : "false");
      el.classList.toggle("au-input-readonly", !!readonly);
    }

    /* Shows/hides the shared identity row (`#auEditRow`, Figma 1023:22053 /
       847:16172) against the Add-mode "no employee selected" empty state
       (`#auIdEmpty`) and the header-row "Change user" trigger. Edit mode
       always has a user by construction, so it always takes the
       populated branch. Also keeps the primary Save action gated on a
       valid selection existing (Add mode only — Edit mode's dirty-check
       already gates Save independently). */
    function refreshAuIdentityVisibility() {
      var isEdit = auPageMode === "edit";
      var hasSelection = isEdit || !!auAddUserAppliedSelection;
      if (auEditRow) auEditRow.hidden = !hasSelection;
      if (auIdEmpty) auIdEmpty.hidden = isEdit || hasSelection;
      /* The identity row was just laid out (or hidden) — re-measure the
         name/email so their truncation tooltips match the width they
         actually got. */
      refreshAuIdentityTruncation();
      if (typeof refreshAuSaveDirty === "function") refreshAuSaveDirty();
    }

    function auHideRosterBanner() {
      auSetFieldReadonly(auFirstName, false);
      auSetFieldReadonly(auLastName, false);
      auSetFieldReadonly(auEmail, false);
      auAddUserAppliedSelection = null;
      refreshAuIdentityVisibility();
    }

    /* Copies the selected roster/candidate record into the existing
       Add User Basic Information fields (called from Next). Never
       saves/creates a user — Save (handleSaveUser) still owns that. */
    function auApplySelectedUserToBasicInfo(u) {
      if (!u) return;
      auAddUserAppliedSelection = u;
      var nameParts = auAddUserSplitName(u.name);
      if (auFirstName) auFirstName.value = nameParts.first;
      if (auLastName) auLastName.value = nameParts.last;
      auSetFieldReadonly(auFirstName, true);
      auSetFieldReadonly(auLastName, true);
      if (auEmail) auEmail.value = u.email || "";
      auSetFieldReadonly(auEmail, true);

      /* Region/Timezone/Team — roster-value-if-available, never a
         hardcoded default per-employee (the "NA" / "America/New_York"
         values on the hidden inputs are only the pre-selection
         placeholder state, never shown while `#auIdEmpty` is active). */
      if (u.region && AU_REGION_TIMEZONES[u.region]) {
        if (auRegion) auRegion.value = u.region;
        auComboState.addUserRegion = u.region;
        if (setAuRegionCombo) setAuRegionCombo(u.region);
        renderAUTimezones(u.region, u.timezone || null);
      }
      if (u.team && auTeam && typeof userView === "string" && userView !== "external") {
        auTeam.value = u.team;
        auComboState.addUserTeam = u.team;
        if (setAuTeamCombo) setAuTeamCombo(u.team);
      }

      /* Identity block (avatar + name + email + active/inactive
         check) — same renderer Edit mode uses, so Add mode's roster
         selection gets byte-identical treatment (Figma 1023:22053). */
      populateAuIdentityBlock(u);
      refreshAuIdentityVisibility();
      updateAuSummaries();
    }

    /* Next's only job (2026-08-10 flow change): close this modal and
       hand the selected roster/candidate record straight to the
       existing Add User page (Step 2 of the overall flow — not a
       second modal). Never saves/creates a user — Save
       (handleSaveUser) on the Add User page still owns that.

       Guards, in order:
         1. `auAddUserNext.disabled` — belt-and-suspenders duplicate-
            click guard; the button is disabled synchronously for the
            (effectively instant, no real async work) transition so a
            second click before repaint can't double-fire.
         2. try/catch around the actual navigation — if `openAddUsers()`
            or applying the selection throws, the modal (and the
            selection) is restored instead of leaving a blank page,
            and the existing EDL toast pattern reports the failure so
            the admin can retry. */
    function auAddUserHandleNext() {
      var st = auAddUserState;
      var u = st.selectedUser;
      if (!u || !u.eligible || u.alreadyInIam) return;
      if (!auAddUserNext || auAddUserNext.disabled) return;
      auAddUserNext.disabled = true;
      try {
        auAddUserModalBackdrop.setAttribute("hidden", "");
        auAddUserLastFocus = null;
        openAddUsers();
        auApplySelectedUserToBasicInfo(u);
        auAddUserResetState();
        /* Focus the Add User page heading — screen readers announce
           the new page/heading, keyboard users land somewhere logical
           instead of on whatever the (now-hidden) modal last focused. */
        if (auPageTitle && typeof auPageTitle.focus === "function") auPageTitle.focus();
      } catch (err) {
        auAddUserModalBackdrop.removeAttribute("hidden");
        st.selectedId = u.poolId;
        st.selectedUser = u;
        auAddUserRenderChrome();
        auAddUserRenderSelected();
        auAddUserAnnounce("Something went wrong opening the Add User page. " + u.name + " is still selected — please try Next again.");
        if (typeof showEdlToast === "function") {
          showEdlToast({
            type: "error",
            title: "Couldn't open Add User",
            bodyHtml: "Something went wrong. " + esc(u.name) + " is still selected — please try Next again."
          });
        }
        if (auAddUserSearchInput) auAddUserSearchInput.focus();
      }
    }

    if (auAddUserModalClose) auAddUserModalClose.addEventListener("click", auAddUserClose);
    if (auAddUserCancel) auAddUserCancel.addEventListener("click", auAddUserClose);
    if (auAddUserNext) auAddUserNext.addEventListener("click", auAddUserHandleNext);
    if (auAddUserModalBackdrop) {
      auAddUserModalBackdrop.addEventListener("click", function (e) {
        if (e.target === auAddUserModalBackdrop) auAddUserClose();
      });
    }

    /* Basic Information empty state (Figma-approved fallback for "no
       employee selected yet") — opens the two-step search modal fresh
       at Step 1, same entry point as the User List's "Add User" button. */
    if (auIdEmptySelectBtn) {
      auIdEmptySelectBtn.addEventListener("click", function () {
        auAddUserOpen();
      });
    }
    if (auAddUserSelected) {
      auAddUserSelected.addEventListener("click", function (e) {
        var link = e.target.closest("#auAddUserViewDuplicate");
        if (!link) return;
        var u = auAddUserState.selectedUser;
        auAddUserClose();
        if (u && u.existingUserId && typeof openEditUserForId === "function") openEditUserForId(u.existingUserId);
      });
    }
    if (auAddUserSearchInput) {
      auAddUserSearchInput.addEventListener("input", function () {
        auAddUserRunSearch(auAddUserSearchInput.value);
        if (auAddUserSearchClear) auAddUserSearchClear.toggleAttribute("hidden", !auAddUserSearchInput.value);
      });
      auAddUserSearchInput.addEventListener("keydown", function (e) {
        var st = auAddUserState;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (st.status === "idle" || st.status === "loading") return;
          auAddUserHighlight(st.highlightedIndex < 0 ? 0 : st.highlightedIndex + 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (!st.results.length) return;
          auAddUserHighlight(st.highlightedIndex < 0 ? st.results.length - 1 : st.highlightedIndex - 1);
        } else if (e.key === "Home") {
          if (!st.results.length) return;
          e.preventDefault();
          auAddUserHighlight(0);
        } else if (e.key === "End") {
          if (!st.results.length) return;
          e.preventDefault();
          auAddUserHighlight(st.results.length - 1);
        } else if (e.key === "Enter") {
          if (st.highlightedIndex >= 0 && st.results[st.highlightedIndex]) {
            e.preventDefault();
            auAddUserSelectCandidate(st.results[st.highlightedIndex].poolId);
          }
        } else if (e.key === "Escape") {
          if (!auAddUserDropdown.hasAttribute("hidden")) {
            e.stopPropagation();
            auAddUserCloseDropdown();
            auAddUserState.status = "idle";
          }
        }
      });
    }
    if (auAddUserSearchClear) {
      auAddUserSearchClear.addEventListener("click", function () {
        auAddUserSearchInput.value = "";
        auAddUserSearchClear.setAttribute("hidden", "");
        auAddUserRunSearch("");
        auAddUserSearchInput.focus();
      });
    }
    if (auAddUserListbox) {
      auAddUserListbox.addEventListener("mousemove", function (e) {
        var opt = e.target.closest(".au-adduser-option");
        if (!opt || opt.classList.contains("is-disabled")) return;
        var poolId = opt.getAttribute("data-pool-id");
        var idx = -1;
        for (var i = 0; i < auAddUserState.results.length; i++) { if (auAddUserState.results[i].poolId === poolId) { idx = i; break; } }
        if (idx !== -1 && idx !== auAddUserState.highlightedIndex) auAddUserHighlight(idx);
      });
      auAddUserListbox.addEventListener("click", function (e) {
        var opt = e.target.closest(".au-adduser-option");
        if (!opt || opt.classList.contains("is-disabled")) return;
        auAddUserSelectCandidate(opt.getAttribute("data-pool-id"));
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!auAddUserModalBackdrop || auAddUserModalBackdrop.hasAttribute("hidden")) return;
      if (auAddUserDropdown && !auAddUserDropdown.hasAttribute("hidden")) return; /* handled by the input's own keydown above */
      auAddUserClose();
    });
    /* Focus trap: Tab/Shift+Tab wrap within the dialog while open. */
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      if (!auAddUserModalBackdrop || auAddUserModalBackdrop.hasAttribute("hidden")) return;
      var dialog = auAddUserModalBackdrop.querySelector(".cr-confirm-dialog");
      if (!dialog) return;
      var focusable = dialog.querySelectorAll('button:not([hidden]):not(:disabled), input:not([hidden]):not(:disabled), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    function getAURoleOptions() {
      var items = [];
      for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
        items.push({ id: ROLES_PERMISSIONS_DATA[i].id, name: ROLES_PERMISSIONS_DATA[i].role });
      }
      return items;
    }

    /* Both lookups fall back to LEGACY_ROLE_ALIASES so a reference held
       from before the workbook migration — a bookmarked role page, a
       saved filter — resolves to a role that exists instead of
       disappearing. */
    function findRoleById(roleId) {
      for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
        if (ROLES_PERMISSIONS_DATA[i].id === roleId) return ROLES_PERMISSIONS_DATA[i];
      }
      var aliased = LEGACY_ROLE_ALIASES[roleId];
      if (!aliased) return null;
      for (var a = 0; a < ROLES_PERMISSIONS_DATA.length; a++) {
        if (ROLES_PERMISSIONS_DATA[a].id === aliased) return ROLES_PERMISSIONS_DATA[a];
      }
      return null;
    }

    function findRoleIdByRoleName(roleName) {
      for (var ri = 0; ri < ROLES_PERMISSIONS_DATA.length; ri++) {
        if (ROLES_PERMISSIONS_DATA[ri].role === roleName) return ROLES_PERMISSIONS_DATA[ri].id;
      }
      return LEGACY_ROLE_ALIASES[roleName] || "";
    }

    function auDerivedTitleForSave() {
      var p = auPreferredName ? auPreferredName.value.trim() : "";
      if (p) return "Preferred: " + p;
      if (auPageMode === "edit" && auEditOriginalTitle) return auEditOriginalTitle;
      return "Atlas User";
    }

    function auSerializedRoleKey() {
      var arr = auState.selectedRoleIds.slice();
      arr.sort();
      return arr.join("\u001f");
    }

    function serializeAuFormState() {
      return JSON.stringify({
        first: auFirstName ? auFirstName.value.trim() : "",
        last: auLastName ? auLastName.value.trim() : "",
        preferred: auPreferredName ? auPreferredName.value.trim() : "",
        email: auEmail ? auEmail.value.trim() : "",
        region: auRegion ? auRegion.value : "",
        timezone: auTimezone ? auTimezone.value : "",
        team: auTeam ? (auTeam.value || "").trim() : "",
        status: auStatusValue ? auStatusValue.value : "Active",
        roleKey: auSerializedRoleKey(),
        title: auDerivedTitleForSave()
      });
    }

    function isAuFormDirty() {
      if (auPageMode !== "edit" || !auEditBaselineJson) return false;
      return serializeAuFormState() !== auEditBaselineJson;
    }

    function captureAuEditBaseline() {
      auEditBaselineJson = serializeAuFormState();
    }

    function refreshAuSaveDirty() {
      if (!auSave) return;
      if (auPageMode !== "edit") {
        /* No selected employee yet (Figma empty state, `#auIdEmpty`) →
           the primary action stays disabled; the rest of the required-
           field validation still happens at submit time so we don't
           surface every error before the admin has interacted. */
        auSave.disabled = !auAddUserAppliedSelection;
        return;
      }
      if (!auEditBaselineJson) {
        auSave.disabled = true;
        return;
      }
      auSave.disabled = !isAuFormDirty();
    }

    function applyAuPageChrome() {
      var isEdit = auPageMode === "edit";
      if (addUsersPage) addUsersPage.classList.toggle("is-edit-mode", isEdit);
      if (auPageTitle) auPageTitle.textContent = isEdit ? "Edit User" : AU_PAGE_TITLE_ADD;
      if (auPageSubtitle) {
        /* Edit User v3 — Figma 788:4348 (Frances QA 2026-06-07).
           The page focuses on identity + role assignment now; the
           old standalone Permission Options card was retired this
           pass. Subtitle copy reflects that reduced scope.
           Add mode copy names the product per the exact Figma 1023:22015
           string pattern, built from `AU_PAGE_SUB_ADD` (shared
           `window.IAM_PRODUCT_NAME`) rather than the older "Atlas"
           wording (Atlas remains the platform name used elsewhere,
           e.g. Users List; this one page header matches its own Figma
           node verbatim per the brief). */
        auPageSubtitle.textContent = isEdit
          ? "Manage user details and role assignment"
          : AU_PAGE_SUB_ADD;
      }
      if (auBackLabel) {
        /* Figma 1003:20186 Code Connect snippet renders the ADS Button
           label as "Back to Users" (capital U) — the canonical current
           reference supersedes the older 788:4348 lowercase copy. */
        auBackLabel.textContent = "Back to Users";
      }
      if (auRemoveUser) auRemoveUser.hidden = !isEdit;
      /* Primary action label is "Save" in both modes (Figma 1023:22015
         Code Connect Button snippet for Add User agrees with the
         existing Edit User 1003:20186 snippet — same verb, mode-specific
         side effect). Stays disabled until a valid configuration exists;
         `refreshAuSaveDirty` / `refreshAuIdentityVisibility` drive
         `auSave.disabled` for edit and add mode respectively. */
      if (auSave) auSave.textContent = "Save";
      if (auEmail) {
        auEmail.readOnly = isEdit;
        auEmail.setAttribute("aria-readonly", isEdit ? "true" : "false");
      }
      if (auStatusReadonly) auStatusReadonly.hidden = !isEdit;
      /* Basic Information identity row (avatar + name + email +
         active-status icon flush with the field columns, Figma
         1023:22053 / 847:16172) is now shared by both modes —
         `refreshAuIdentityVisibility()` (not this function) decides
         whether it or the Add-mode empty state shows, based on
         whether a user is selected. */
      if (auPermsCard) auPermsCard.hidden = true;
      if (auRolesCard) auRolesCard.hidden = false;
      /* Section title: Add mode uses the exact Figma 1023:22053 string
         "Role and Permission" (singular Permission); Edit mode keeps
         its own "Access" per 788:4348 — the two pages are allowed to
         diverge here since their source Figma nodes do. */
      if (auRolesPermissionsTitle) {
        auRolesPermissionsTitle.textContent = isEdit ? "Access" : "Role and Permission";
      }
      refreshAuIdentityVisibility();
    }

    /* V3 Edit User — Internal/External classification.
       Rule (Frances QA, 2026-05-29): the Edit User avatar MUST match
       the avatar shown for the selected user on the Users list. The
       Users list renders the user's photo (`user.avatar`) via
       `renderAvatarHtml`; Edit User now mirrors that — when a real
       photo URL exists on the user record, it renders as `<img
       object-fit:cover>` in the 72-px circle. When no photo is
       available (external users, or any record without `.avatar`),
       Edit User falls back to the EDL neutral placeholder SVG so
       the circle stays crisp. */
    /* Figma node 847:16174 — the canonical EDL avatar placeholder
       asset (white circle, indigo outline + indigo silhouette).
       Rendered as inline SVG so it stays crisp at any DPI and never
       upscales a low-resolution raster source. */
    var AU_ID_AVATAR_PLACEHOLDER_SVG =
      '<svg class="au-id-avatar-svg" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">' +
        '<path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z" fill="white"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M36 69.1579C54.3126 69.1579 69.1579 54.3126 69.1579 36C69.1579 17.6874 54.3126 2.84211 36 2.84211C17.6874 2.84211 2.84211 17.6874 2.84211 36C2.84211 54.3126 17.6874 69.1579 36 69.1579ZM36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#5458C9"/>' +
        '<path d="M48.3159 27.0003C48.3159 34.0637 42.8019 39.7898 36.0001 39.7898C29.1983 39.7898 23.6843 34.0637 23.6843 27.0003C23.6843 19.9369 29.1983 14.2108 36.0001 14.2108C42.8019 14.2108 48.3159 19.9369 48.3159 27.0003Z" fill="white"/>' +
        /* Head ring. The outer contour needs all FOUR quarter-arcs:
           bottom→right→top→left→bottom. The exported path was missing the
           closing left→bottom arc, so `Z` shortcut it with a straight chord
           and sliced a wedge out of the ring's lower-left — the "incomplete
           circle" this fixes. The final `C23.6843 34.0637 29.1983 39.7898
           36.0001 39.7898` is that arc, mirroring the same quadrant in the
           white fill above. Kept byte-identical to the inline copy in
           index.html so the static markup and this runtime constant can't
           drift apart. */
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M36.0001 36.9477C41.1321 36.9477 45.4738 32.5961 45.4738 27.0003C45.4738 21.4045 41.1321 17.0529 36.0001 17.0529C30.8681 17.0529 26.5264 21.4045 26.5264 27.0003C26.5264 32.5961 30.8681 36.9477 36.0001 36.9477ZM36.0001 39.7898C42.8019 39.7898 48.3159 34.0637 48.3159 27.0003C48.3159 19.9369 42.8019 14.2108 36.0001 14.2108C29.1983 14.2108 23.6843 19.9369 23.6843 27.0003C23.6843 34.0637 29.1983 39.7898 36.0001 39.7898Z" fill="#5458C9"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.58008 60.4541C11.0036 50.5618 22.2891 42.8569 36.0001 42.8569C49.711 42.8569 60.9965 50.5617 62.4201 60.454C55.8443 67.555 46.4413 72.0001 36 72.0001C25.5588 72.0001 16.1558 67.5551 9.58008 60.4541Z" fill="white"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6586 59.5505C18.6534 65.4928 26.8968 69.158 36 69.158C45.1033 69.158 53.3467 65.4928 59.3416 59.5505C57.4032 52.1526 48.2393 45.699 36.0001 45.699C23.7608 45.699 14.5969 52.1526 12.6586 59.5505ZM62.4201 60.454C60.9965 50.5617 49.711 42.8569 36.0001 42.8569C22.2891 42.8569 11.0036 50.5618 9.58008 60.4541C16.1558 67.5551 25.5588 72.0001 36 72.0001C46.4413 72.0001 55.8443 67.555 62.4201 60.454Z" fill="#5458C9"/>' +
      '</svg>';
    function isAuUserExternal(user) {
      if (!user) return false;
      if (user.id && /^e/i.test(String(user.id))) return true;
      if (user.organization) return true;
      return false;
    }
    function populateAuIdentityBlock(user) {
      if (!auIdBlock || !user) return;
      var displayName = user.name || "";
      var displayEmail = (user.email || "").toLowerCase();
      if (auIdName) auIdName.textContent = displayName;
      if (auIdEmail) auIdEmail.textContent = displayEmail;
      /* Avatar — mirror the Users list (Frances QA, 2026-05-29):
           • External users → blue initials chip identical to the
             External Users table chip (`.avatar-initials`). Never
             show a real photo and never the generic 72-px SVG
             placeholder for externals (per rule: "Do not show the
             generic 72px profile icon for external users").
           • Internal users with a photo → render as `<img>` at 72 px
             with `object-fit: cover`. JS-attached `error` listener
             swaps in the EDL neutral placeholder if the photo URL
             fails to load.
           • Internal users without a photo → EDL neutral placeholder
             SVG (existing behavior preserved).
         The `.au-id-avatar--external` modifier on the container
         lets CSS scale the chip to the Edit User 72-px circle while
         keeping the table chip at 40 px untouched. */
      if (auIdAvatar) {
        var external = isAuUserExternal(user);
        auIdAvatar.classList.toggle("au-id-avatar--external", external);
        if (external) {
          var extInitials = getInitials(user.name || "");
          var extLabel = user.name || "External user";
          auIdAvatar.innerHTML =
            '<div class="au-id-avatar-initials avatar-initials" aria-label="' + esc(extLabel) + '">' +
              esc(extInitials) +
            '</div>';
        } else if (user.avatar) {
          auIdAvatar.innerHTML =
            '<img class="au-id-avatar-img" src="' + esc(user.avatar) + '"' +
              ' alt="" decoding="async" loading="eager">';
          var imgEl = auIdAvatar.querySelector("img.au-id-avatar-img");
          if (imgEl) {
            imgEl.addEventListener("error", function () {
              /* Only the photo still mounted in the avatar may swap in
                 the placeholder. An admin can pick a second user before
                 the first user's photo has finished loading, and that
                 first request can then fail against an avatar that now
                 belongs to somebody else — without this guard the late
                 failure wipes the current user's perfectly good photo. */
              if (!auIdAvatar || this.parentNode !== auIdAvatar) return;
              auIdAvatar.innerHTML = AU_ID_AVATAR_PLACEHOLDER_SVG;
            }, { once: true });
          }
        } else {
          auIdAvatar.innerHTML = AU_ID_AVATAR_PLACEHOLDER_SVG;
        }
      }
      /* Status icon: green check for Active, neutral gray dot for
         Inactive. Always read-only; never a toggle on Edit User.
         Shared EDL tooltip system (setupStatusTooltip) reads
         `data-status-tooltip`, so we keep it in sync with the
         aria-label for every selected user, internal or external. */
      if (auIdStatus) {
        var active = user.status !== "Inactive";
        var statusLabel = active ? "Active" : "Inactive";
        auIdStatus.setAttribute("aria-label", statusLabel);
        auIdStatus.setAttribute("data-status-tooltip", statusLabel);
        auIdStatus.innerHTML = active
          ? '<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>'
          : '<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-96a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,120Z"/></svg>';
      }
      refreshAuIdentityTruncation();
    }

    /* Name and email are single-line with a CSS ellipsis, so a long
       value stays complete in the DOM (screen readers and copy/paste
       still get the whole thing) while the visible text is clipped to
       the identity column. Surface the full value on hover and keyboard
       focus through the shared EDL tooltip — `data-tooltip` is the
       delegated trigger `setupStatusTooltip()` already listens for on
       both `mouseover` and `focusin`, which is also why `tabindex` is
       added here: without it the name/email spans can't be reached by
       keyboard at all.

       Both attributes are added ONLY while the text is actually clipped
       (`scrollWidth` exceeds `clientWidth`), and removed as soon as it
       fits, so short values never get a tooltip that just repeats what's
       already fully visible. That has to be re-evaluated whenever the
       available width changes, not just when the value changes — hence
       the calls from the visibility toggle and the resize listener
       below. Measuring while the card is hidden reports zero widths, so
       a hidden card simply clears the attributes and re-measures when it
       is shown. */
    function refreshAuIdentityTruncation() {
      var targets = [auIdName, auIdEmail];
      for (var i = 0; i < targets.length; i++) {
        var el = targets[i];
        if (!el) continue;
        var full = (el.textContent || "").trim();
        var clipped = !!full && el.scrollWidth > el.clientWidth + 1;
        if (clipped) {
          el.setAttribute("data-tooltip", full);
          el.setAttribute("tabindex", "0");
        } else {
          el.removeAttribute("data-tooltip");
          el.removeAttribute("tabindex");
        }
      }
    }
    window.addEventListener("resize", refreshAuIdentityTruncation);
    function seedAuPermsAssignments() {
      /* Static seed: every Edit User open starts from the Figma-aligned
         default set (Core Planning + Disney Ads Agent, both Full Access
         / 12 permissions). Per-user persistence is out of scope for
         this static prototype. */
      auPermsState.assignments = [];
      for (var i = 0; i < AU_PERM_DEFAULT_ASSIGNMENTS.length; i++) {
        var d = AU_PERM_DEFAULT_ASSIGNMENTS[i];
        auPermsState.assignments.push({ app: d.app, access: d.access, coverage: d.coverage, expanded: false });
      }
      auPermsState.addPick = "";
      auComboState.editPermsAppPick = "";
      if (auPermsAppHidden) auPermsAppHidden.value = "";
      if (setAuPermsAppCombo) setAuPermsAppCombo("");
    }

    /* Internal/External Basic Info field swap.

       The `.au-field-team` grid slot resolves to one of three states:

         Edit mode + Internal user
           → Label "Team" + editable EDL Team combo (existing).
         Edit mode + External user
           → Label "Company" + read-only static value (`user.organization`).
             This is the Round 13 cleanup-pass behavior — external user
             companies are tenant-managed, not editable inside Atlas.
         Add mode + Internal view (`userView === 'internal'`)
           → Label "Team" + editable EDL Team combo.
         Add mode + External view (`userView === 'external'`)
           → Label "Company name" + editable text input (Round 28).
             The brief explicitly disallows the Team dropdown for
             external Add User and requires Company name as a free-text
             input so the admin can capture an arbitrary external
             organization (Omnicom Media Group, GroupM, etc.).

       The DOM stays a single `.au-field-team` grid slot. Visibility
       and labels are managed here so no CSS layout changes are needed.
       Children that aren't relevant to the current state are hidden
       via `style.display = 'none'` (combo trigger) or the `hidden`
       attribute (Company input) instead of being removed, so the
       initCombo wiring and form references stay intact across mode
       switches. */
    function applyAuBasicInfoCompanyOrTeam(user) {
      var fieldEl  = document.querySelector("#addUsersPage .au-field-team");
      var labelEl  = fieldEl ? fieldEl.querySelector(".au-label") : null;
      var comboEl  = document.getElementById("auTeamCombo");
      if (!fieldEl || !labelEl || !comboEl) return;
      /* Mode resolution (Round 28):
           • Edit mode → external iff the user record itself is
             external (Round 13 logic).
           • Add mode  → external iff the page was opened against the
             External Users view (`window.userView === 'external'`).
         The two branches stay separate so the Edit-mode read-only
         Company display and the Add-mode editable Company input
         never collide. */
      var inEditMode = (auPageMode === "edit");
      var external;
      if (inEditMode) {
        external = isAuUserExternal(user);
      } else {
        /* `userView` lives at module scope (top of app.js, line ~169).
           Default to internal when the global hasn't been initialized
           (defensive — the Users page sets it during DOMContentLoaded
           before Add User can be opened). */
        external = (typeof userView === "string" && userView === "external");
      }
      var triggerEl = comboEl.querySelector(".edl-combo-input-wrap");
      var roEl = fieldEl.querySelector(".au-field-team-readonly");
      var companyInput = document.getElementById("auCompany");
      /* Required-asterisk: the original DOM omitted the asterisk on
         the Team label (Team is optional for internal users). The
         brief makes Company name required for external Add User. We
         render the asterisk only when external + add-mode so internal
         Add User and Edit User behaviour are untouched. */
      function setLabel(text, withAsterisk) {
        labelEl.textContent = "";
        labelEl.appendChild(document.createTextNode(text));
        if (withAsterisk) {
          var req = document.createElement("span");
          req.className = "au-req";
          req.textContent = "*";
          labelEl.appendChild(document.createTextNode(" "));
          labelEl.appendChild(req);
        }
      }

      if (external && inEditMode) {
        /* === Edit + External: read-only Company display === */
        setLabel("Company", false);
        labelEl.removeAttribute("for");
        if (triggerEl) triggerEl.style.display = "none";
        if (companyInput) {
          companyInput.hidden = true;
          companyInput.required = false;
          companyInput.value = "";
        }
        var companyText = (user && user.organization) ? String(user.organization) : "";
        if (!roEl) {
          roEl = document.createElement("div");
          /* Box metrics come from the shared control classes, not from
             inline styles. The inline set this used to carry (36px
             min-height, 8px padding, 6px radius) overrode `.au-input`
             and made Company 4px taller than every other control in the
             card, which pushed the Team/Company field out of horizontal
             alignment with Timezone beside it. `.au-input-readonly` is
             the same read-only treatment the read-only Email field
             uses. */
          roEl.className = "au-field-team-readonly au-input au-input-readonly";
          roEl.setAttribute("role", "textbox");
          roEl.setAttribute("aria-readonly", "true");
          comboEl.parentNode.insertBefore(roEl, comboEl.nextSibling);
        }
        roEl.style.display = "";
        roEl.textContent = companyText;
        roEl.setAttribute("aria-label", "Company");
      } else if (external && !inEditMode) {
        /* === Add + External: editable Company name text input === */
        setLabel("Company name", true);
        labelEl.setAttribute("for", "auCompany");
        if (triggerEl) triggerEl.style.display = "none";
        if (roEl) roEl.style.display = "none";
        if (companyInput) {
          companyInput.hidden = false;
          companyInput.required = true;
          companyInput.setAttribute("aria-required", "true");
          companyInput.setAttribute("placeholder", "Enter company name");
          /* Field-clear-on-switch (brief §3): never preserve an
             internal Team value as Company name. `resetAddUsersState`
             already clears `auTeam.value`; here we make sure the
             company input is fresh when switching from internal to
             external while the page is open. We only clear when the
             input was previously hidden (so re-opens within the
             external flow keep any typed-in value). */
          if (companyInput.getAttribute("data-au-last-mode") !== "external-add") {
            companyInput.value = "";
            companyInput.setAttribute("data-au-last-mode", "external-add");
          }
        }
      } else {
        /* === Internal (Add or Edit): EDL Team combo === */
        setLabel("Team", false);
        labelEl.setAttribute("for", "auTeamCombo-ctl");
        if (triggerEl) triggerEl.style.display = "";
        if (roEl) roEl.style.display = "none";
        if (companyInput) {
          /* Brief §3: never preserve a Company name as Team.
             Clear when transitioning away from the external Add flow
             so the next external open starts fresh. */
          if (companyInput.getAttribute("data-au-last-mode") === "external-add") {
            companyInput.value = "";
          }
          companyInput.hidden = true;
          companyInput.required = false;
          companyInput.removeAttribute("aria-required");
          companyInput.setAttribute("data-au-last-mode", "internal");
        }
      }
    }

    function populateEditFormFromUser(user) {
      if (!user) return;
      var parts = (user.name || "").trim().split(/\s+/);
      var firstN = parts[0] || "";
      var lastN = parts.length > 1 ? parts.slice(1).join(" ") : "";
      var preferredN = "";
      if (user.title && /^Preferred:\s*/i.test(user.title)) {
        preferredN = user.title.replace(/^Preferred:\s*/i, "").trim();
      } else {
        preferredN = firstN;
      }
      if (auFirstName) auFirstName.value = firstN;
      if (auLastName) auLastName.value = lastN;
      if (auFullName) auFullName.value = user.name || ((firstN + " " + lastN).trim());
      if (auPreferredName) auPreferredName.value = preferredN;
      if (auEmail) auEmail.value = user.email || "";
      var reg = (user.region || "NA").trim() || "NA";
      if (auRegion) auRegion.value = reg;
      if (setAuRegionCombo) setAuRegionCombo(reg);
      var rkey = getAURegionKey();
      var tzOpts = AU_REGION_TIMEZONES[rkey] || AU_REGION_TIMEZONES.NA;
      var tzPick = tzOpts[0];
      if (user.timezone && tzOpts.indexOf(user.timezone) !== -1) tzPick = user.timezone;
      if (auTimezone) auTimezone.value = tzPick;
      renderAUTimezones(rkey, tzPick);
      var teamVal = (user.team && user.team !== "Unassigned") ? user.team : "";
      if (auTeam) auTeam.value = teamVal;
      if (setAuTeamCombo) setAuTeamCombo(teamVal);
      /* Internal vs External Basic Info field (Frances QA 2026-06-08
         cleanup pass): internal users keep the editable Team combo,
         external users get a read-only Company line in the same
         `.au-field-team` slot — no layout change, just children. The
         brief explicitly disallows showing "Select team" or any
         internal team name for an external user. */
      applyAuBasicInfoCompanyOrTeam(user);
      setAUStatus(user.status === "Inactive" ? "Inactive" : "Active");
      var ids = [];
      var rns = user.roles || [];
      for (var rj = 0; rj < rns.length; rj++) {
        var rid = findRoleIdByRoleName(rns[rj]);
        if (rid && ids.indexOf(rid) === -1) ids.push(rid);
      }
      auState.selectedRoleId = "";
      auState.selectedRoleIds = ids;
      auState.expandedRoleId = null;
      if (setAuRoleCombo) setAuRoleCombo("");
      renderAURolePicker();
      renderAURoleCards();
      /* V3 Edit User — drive the identity block and Permission Options
         card from the same user record. Roles & Permissions data above
         is preserved for the prototype Save flow, but the visible
         layout in edit mode is the Figma-aligned identity + Permission
         Options shell. */
      populateAuIdentityBlock(user);
      seedAuPermsAssignments();
      renderAUPermsAppPicker();
      renderAUPermsCards();
      /* Round 18 (2026-06-09): Edit User now treats every entry in
         `user.roles` as part of the assigned-roles set. The Assigned
         Role dropdown is the picker for *adding* more roles, not for
         displaying the primary one — that role goes into the chip
         list below. This matches the brief's "consistency with the
         Users table" rule: whatever the Users table shows is exactly
         what the chip list shows on Edit User open.
         `editPrimaryRoleId` is retained for legacy callers but no
         longer drives the table. */
      var primaryRoleName = (user.roles && user.roles.length) ? user.roles[0] : "";
      var primaryRoleId = primaryRoleName ? findRoleIdByRoleName(primaryRoleName) : "";
      auState.editPrimaryRoleId = primaryRoleId || "";
      /* Clear the combo to its placeholder so admins see the picker
         in its empty state, ready to add another role. */
      auComboState.addUserRolePick = "";
      auState.selectedRoleId = "";
      if (setAuRoleCombo) setAuRoleCombo("");
      renderAURolePicker();
      /* Round 21 (2026-06-09): Edit User no longer renders external
         chips below the dropdown — the multi-select trigger summary
         + open-menu checkboxes are the role-management UI. The chip
         list element stays in the DOM (hidden via CSS) for safety;
         we still call the renderer so legacy callers don't break,
         but it's now a no-op in Edit mode (see implementation). */
      renderAuAssignedRolesChips();
      /* Seed the dropdown's draft state from the applied set so the
         menu reflects current assignment on first open, and refresh
         the trigger label to show the current role summary. The
         applied set is already populated above via `auState.selectedRoleIds = ids`. */
      auState.pendingRoleIds = (auState.selectedRoleIds || []).slice();
      if (typeof auRoleMultiRenderMenu === "function") auRoleMultiRenderMenu();
      if (typeof auRoleMultiRenderTrigger === "function") auRoleMultiRenderTrigger();
      if (typeof auSyncRoleApplyButton === "function") auSyncRoleApplyButton();
      renderAuCombinedEffectiveAccess(auState.selectedRoleIds, user);
      updateAuSummaries();
    }

    /* ── Edit User effective-access table ─────────────────────────────
       3-column read-only summary (Application / Access Level / Summary).

       Visible rows are now ROLE-CLASS-driven (Frances QA 2026-06-07
       round 2). Instead of always showing all 5 applications, the
       table shows only the apps the assigned role grants meaningful
       access to. This keeps the user page as a focused PREVIEW of
       effective access — full per-app inventory lives in Edit Role.

       Summary content is rendered as compact EDL chips per Figma
       node 4722:57889 (EDL Component Library — Chip, color=Promoted).
       Each chip is a resource name (Orders, Media Plans, Users, …);
       function-level verbs and `_list`/`_get` tokens never reach
       the user page.

       App display names stay PRD-aligned ("Inventory Catalog Manager",
       "Targeting Options Manager", "Disney Ads Agent" — never the
       internal abbreviations or the Figma placeholder typos). */

    /* Resource-chip allow-lists per application, derived from the
       permission registry so a resource can only appear in a user's
       effective access if some role can actually be granted it. Order
       follows the workbook — first ~3 chips render first; anything
       beyond shows as a "+N more" counter chip. */
    var AU_EFF_APP_CHIPS = (function () {
      var out = {};
      for (var token in WB_GROUPS_BY_TOKEN) {
        if (!Object.prototype.hasOwnProperty.call(WB_GROUPS_BY_TOKEN, token)) continue;
        out[appDisplayNameForToken(token)] = wbAllGroupsForToken(token);
      }
      return out;
    })();

    /* ── Effective access is derived, never classified ────────────────
       This used to route users onto hand-written access "patterns" by
       role class, and then nudge that class again by team name — so a
       viewer on a sales team was shown a sales user's access. Team
       membership is not evidence of permission, and a preview assembled
       from a parallel table is a second opinion about a role's access
       that can disagree with the role itself.

       Now every row comes from the assigned role's own grants:

         assigned role → permission codes → application / resource
         → verbs → this table

       so `AU_EFF_ROLE_CLASS` is an identity map (a role's class is the
       role) and each pattern is generated from what the workbook grants
       that role. Two users with the same role always see the same
       access, whatever their team, title, region or email. */
    var AU_EFF_ROLE_CLASS = (function () {
      var out = {};
      for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) {
        out[CANONICAL_ROLE_DEFINITIONS[i].id] = CANONICAL_ROLE_DEFINITIONS[i].id;
      }
      return out;
    })();

    /* Access-level vocabulary differs between the two surfaces: the
       Roles table says "View Only" / "Edit" / "Approve" / "Custom" /
       "Full Access", the user page has only three labels — "View
       Access" / "Edit Access" / "Full Access". Same derivation, mapped
       once here. "Approve" and "Custom" both collapse to "Edit Access"
       because both imply at least one write grant without covering the
       application's full pool: a role is only "Custom" when its grants
       break out of a standard bundle, which read-only grants never do. */
    var AU_EFF_LEVEL_FROM_ROLE_LEVEL = {
      "View Only":   "View Access",
      "Edit":        "Edit Access",
      "Approve":     "Edit Access",
      "Custom":      "Edit Access",
      "Full Access": "Full Access"
    };

    /* Read/write verbs the user page is allowed to print. The brief for
       this table mandates user-facing verbs only — Read / Create /
       Update / Delete / Approve — never function keys. */
    var AU_EFF_VERB_FROM_ACTION = {
      "View": "Read", "Create": "Create", "Edit": "Update",
      "Delete": "Delete", "Approve": "Approve", "Archive": "Archive"
    };

    var AU_EFF_PATTERNS = (function () {
      var out = {};
      for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) {
        var role = CANONICAL_ROLE_DEFINITIONS[i];
        var rows = [];
        for (var token in ROLE_FUNCTION_MAP[role.id]) {
          if (!Object.prototype.hasOwnProperty.call(ROLE_FUNCTION_MAP[role.id], token)) continue;
          var roleLevel = wbAccessLevel(role.id, token);
          if (!roleLevel) continue;
          var granted = roleGrantsByGroup(role.id, token);
          var chips = [];
          var groups = wbAllGroupsForToken(token);
          for (var g = 0; g < groups.length; g++) {
            var actions = granted[groups[g]];
            if (!actions || !actions.length) continue;
            chips.push({
              r: groups[g],
              a: actions.map(function (action) { return AU_EFF_VERB_FROM_ACTION[action] || action; })
            });
          }
          if (!chips.length) continue;
          rows.push({
            app: appDisplayNameForToken(token),
            level: AU_EFF_LEVEL_FROM_ROLE_LEVEL[roleLevel] || "View Access",
            chips: chips
          });
        }
        out[role.id] = rows;
      }
      /* A role the registry does not define grants nothing, and saying
         so is more accurate than showing a stand-in role's access. */
      out._default = [];
      return out;
    })();

    /* Per-(app, level, resource) fallback verbs. Every pattern above
       carries its own explicit verb list, so this is only reached for a
       resource a pattern did not name — in which case Read is the
       weakest honest answer. */
    var AU_EFF_ACTIONS = {};

    /* Resolve a pattern's `chips` field into a normalized array of
       resource entries. Each entry is `{r: "Resource", a: ["Read",…]
       | null}`. When `a` is null, the renderer falls back to
       AU_EFF_ACTIONS[app][level][resource]; when set, it overrides
       just for this row (so a pattern can show narrower actions than
       the row's Access Level would imply — see brief examples).
       "*" expands to all known resources for the app with default
       actions. */
    function auEffResolveChips(appName, chips) {
      var allow = AU_EFF_APP_CHIPS[appName] || [];
      if (chips === "*") {
        var all = [];
        for (var x = 0; x < allow.length; x++) all.push({r: allow[x], a: null});
        return all;
      }
      if (!chips || !chips.length) return [];
      var out = [];
      for (var i = 0; i < chips.length; i++) {
        var c = chips[i];
        var name, actions;
        if (typeof c === "string") { name = c; actions = null; }
        else if (c && typeof c === "object") { name = c.r; actions = (c.a && c.a.slice) ? c.a.slice() : null; }
        else continue;
        /* Defensive: only include resources that exist in the allow-
           list so the table can never leak an unintended raw key. */
        if (name && allow.indexOf(name) !== -1) out.push({r: name, a: actions});
      }
      return out;
    }

    /* Build the read-only "Resource: Actions; Resource: Actions; +N more"
       summary for the Effective access cell. Brief 2026-06-08 (round 3):
         • Plain table text — no chips, no purple pills, no border, no
           hover affordance, no clickable styling.
         • Single line at normal desktop widths; if the full string does
           not fit, the tail is trimmed and "+N more" is appended (with a
           native title tooltip that lists ONLY the hidden groups).
         • Semicolon "; " separates Resource: Actions groups.
         • Actions come from AU_EFF_ACTIONS[app][level][resource]. Any
           resource without an entry falls back to ["Read"]. */
    function auEffActionsFor(app, level, resource) {
      var byApp   = AU_EFF_ACTIONS[app];
      if (!byApp) return ["Read"];
      var byLevel = byApp[level];
      if (!byLevel) return ["Read"];
      var verbs   = byLevel[resource];
      return (verbs && verbs.length) ? verbs.slice() : ["Read"];
    }
    /* Build the normalized resource/action list used by both the
       initial render and the post-render measure pass. The list is
       independent of viewport width — overflow decisions happen in
       auEffApplyOverflow() based on the actual cell width. */
    function auEffBuildGroups(app, level, resEntries) {
      var groups = [];
      if (!resEntries || !resEntries.length) return groups;
      for (var i = 0; i < resEntries.length; i++) {
        var entry = resEntries[i];
        var verbs = (entry.a && entry.a.length) ? entry.a : auEffActionsFor(app, level, entry.r);
        groups.push({ r: entry.r, a: verbs.slice() });
      }
      return groups;
    }
    /* Round 5 (2026-06-09): summary row now renders compact resource
       counts — "Orders (3); Media Plans (1); …" — instead of the
       verbose "Resource: Action, Action" strings. The full action
       list is reserved for the "View access breakdown" modal so the table
       stays scannable. The count is the number of action verbs the
       user has for that resource at the row's Access Level. */
    function auEffGroupHtml(group) {
      var n = (group.a && group.a.length) ? group.a.length : 0;
      return (
        '<span class="au-eff-summary-group">' +
          '<span class="au-eff-summary-res">' + esc(group.r) + '</span> ' +
          '<span class="au-eff-summary-count">(' + n + ')</span>' +
        '</span>'
      );
    }
    function auEffGroupText(group) {
      var n = (group.a && group.a.length) ? group.a.length : 0;
      return group.r + " (" + n + ")";
    }
    /* Brief 2026-06-08 (round 3): single-line semicolon-separated
       summary. The renderer emits the FULL text; auEffApplyOverflow()
       then trims the tail until the row fits on one line and appends
       "+N more" with a native title tooltip listing only the hidden
       groups. No dot/bullet separators, no chips, no link styling. */
    function auEffSummaryTextHtml(app, level, resEntries) {
      var groups = auEffBuildGroups(app, level, resEntries);
      if (!groups.length) {
        return '<span class="au-eff-summary au-eff-summary--none">No assigned access</span>';
      }
      var SEP = '<span class="au-eff-summary-sep" aria-hidden="true">; </span>';
      var parts = [];
      for (var i = 0; i < groups.length; i++) parts.push(auEffGroupHtml(groups[i]));
      return '<span class="au-eff-summary">' + parts.join(SEP) + '</span>';
    }

    /* Resolve a role to the pattern that describes its access. Both
       call sites keep their signatures — team name and user record are
       still passed in — but neither is consulted: a role's access is
       whatever the workbook grants that role, and nothing about who
       holds it changes that. */
    function auEffClassifyById(roleId /*, teamName */) {
      if (!roleId) return "_default";
      return AU_EFF_ROLE_CLASS[roleId] || "_default";
    }

    function auEffClassifyForUser(roleId /*, teamName, userRecord */) {
      if (!roleId) return "_default";
      return AU_EFF_ROLE_CLASS[roleId] || "_default";
    }

    /* Round 5 (2026-06-09): we now also stash the resolved pattern
       (assigned-role name + per-app sections + per-resource action
       lists) into a module-level snapshot so the "View access breakdown"
       modal can render the long-form details without re-running the
       classify/resolve pipeline. The table itself continues to show
       the compact counts. */
    var auEffLastBreakdown = null;

    /* Round 31 (2026-08-11, Add User parity pass): "View access
       breakdown" is only ever useful once there's actual assigned-role
       data to break down — show/hide it (via the `hidden` attribute, so
       no placeholder or reserved vertical space is left behind) based
       strictly on `assignedRoleCount`, not on whatever the dropdown
       trigger happens to display. Called synchronously at the end of
       both effective-access renderers below, in both Add and Edit
       mode, so the button never flashes visible before disappearing
       and always reflects the true assigned-role count immediately
       after a role is added or removed. */
    function refreshAuEffActionsVisibility(assignedRoleCount) {
      var el = document.getElementById("auEffActions");
      if (!el) return;
      if (assignedRoleCount > 0) el.removeAttribute("hidden");
      else el.setAttribute("hidden", "");
    }

    function renderAuEffectiveAccessTable(roleId, userRecord) {
      if (!auEffTbody) return;
      /* userRecord is optional — when called from openEditUserForId
         it's the freshly-selected user. When called from the role
         combo onChange (without a fresh user), fall back to the
         currently-edited user via auEditingUserId. */
      var u = userRecord;
      if (!u && typeof findUserInOriginalById === "function" && auEditingUserId) {
        u = findUserInOriginalById(auEditingUserId);
      }
      var teamName = u ? (u.team || "") : "";
      var roleClass = auEffClassifyForUser(roleId, teamName, u);
      var pattern = AU_EFF_PATTERNS[roleClass] || AU_EFF_PATTERNS._default;
      var roleName = "";
      if (roleId && typeof findRoleById === "function") {
        var r = findRoleById(roleId);
        if (r && r.role) roleName = r.role;
      }
      /* Round 29: parallel snapshot shape with the multi-role renderer
         (`renderAuCombinedEffectiveAccess`). `roleCount=1` so the
         modal pluralization helper picks the singular label/intro
         when this code path is reached. */
      var breakdown = {
        roleName: roleName,
        roleNames: roleName ? [roleName] : [],
        roleCount: roleName ? 1 : 0,
        sections: []
      };
      var html = "";
      for (var i = 0; i < pattern.length; i++) {
        var spec = pattern[i];
        var chipKeys = auEffResolveChips(spec.app, spec.chips);
        var levelClass = "au-eff-level-pill--" + (spec.level || "").toLowerCase().replace(/\s+/g, "-");
        var groups = auEffBuildGroups(spec.app, spec.level, chipKeys);
        /* Round 12 (2026-06-09 copy refresh): the data key stays
           `"IAM"` so every downstream lookup (auEffBuildGroups,
           auEffResolveChips, AU_EFF_ACTIONS, AU_EFF_RESOURCES) keeps
           working unchanged. We translate to the full user-facing
           label *only* at render time and capture that same display
           label into the breakdown snapshot so the modal H3 matches
           the table row. */
        var appLabel = (spec.app === "IAM") ? "Identity and Access Management" : spec.app;
        breakdown.sections.push({ app: appLabel, level: spec.level, groups: groups });
        var groupsAttr = esc(JSON.stringify(groups)).replace(/"/g, "&quot;");
        html += '<tr>' +
          '<td class="au-eff-app">' +
            '<span class="au-eff-app-name">' + esc(appLabel) + '</span>' +
          '</td>' +
          '<td class="au-eff-level"><span class="au-eff-level-pill ' + levelClass + '">' + esc(spec.level) + '</span></td>' +
          '<td class="au-eff-summary-cell" data-eff-groups="' + groupsAttr + '">' +
            auEffSummaryTextHtml(spec.app, spec.level, chipKeys) +
          '</td>' +
        '</tr>';
      }
      auEffTbody.innerHTML = html;
      auEffLastBreakdown = breakdown;
      auEffApplyOverflow();
      refreshAuEffActionsVisibility(roleName ? 1 : 0);
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    }

    /* ─── Round 18 (2026-06-09) ──────────────────────────────────────
       Combined effective access across multiple assigned roles.

       The single-role renderer above (`renderAuEffectiveAccessTable`)
       drives off one `roleId`. In Edit User the admin can now assign
       multiple roles, so the table needs to show the *union* of every
       assigned role's pattern, merged per application:
         • If two roles both grant an app, take the higher level
           (Full > Edit > View).
         • Combine the chip resource lists (de-duped, preserving
           AU_EFF_APP_CHIPS order so the most important resources
           still render first).

       This function mirrors `renderAuEffectiveAccessTable`'s output
       contract — same DOM, same chip rendering, same breakdown
       snapshot for the "View access breakdown" modal — so the rest of the
       page stays untouched. The single-role function is kept intact
       for Add-User and any future single-role callers.

       Scope: Edit User only. Add-User flow does not call this. */
    var AU_EFF_LEVEL_RANK = { "View Access": 1, "Edit Access": 2, "Full Access": 3 };
    var AU_EFF_LEVEL_BY_RANK = { 1: "View Access", 2: "Edit Access", 3: "Full Access" };

    function auEffMergeLevel(levelA, levelB) {
      var rA = AU_EFF_LEVEL_RANK[levelA] || 0;
      var rB = AU_EFF_LEVEL_RANK[levelB] || 0;
      var rMax = rA > rB ? rA : rB;
      return AU_EFF_LEVEL_BY_RANK[rMax] || levelA || levelB;
    }

    function auEffMergeChipEntries(app, existingEntries, addEntries) {
      /* Each entry is the `{r, a}` shape returned by auEffResolveChips —
         `r` is the resource name (always present), `a` is either null
         (caller wants the default action list at the row's level) or
         an explicit verb override array.
         Merge rule (Round 18): de-dupe by `r`; if either side has
         `a: null` we keep `null` (defer verb resolution to the row's
         merged level); otherwise we union the action arrays so the
         caller never loses a verb that a contributing role granted.
         Preserve AU_EFF_APP_CHIPS canonical order so the most-important
         resources still render first in the truncated cell. */
      var canon = AU_EFF_APP_CHIPS[app] || null;
      var seen = {};
      var i, ent, key;
      for (i = 0; i < existingEntries.length; i++) {
        ent = existingEntries[i];
        if (!ent || !ent.r) continue;
        key = ent.r;
        seen[key] = { r: key, a: ent.a ? ent.a.slice() : null };
      }
      for (i = 0; i < addEntries.length; i++) {
        ent = addEntries[i];
        if (!ent || !ent.r) continue;
        key = ent.r;
        if (!seen[key]) {
          seen[key] = { r: key, a: ent.a ? ent.a.slice() : null };
        } else {
          var prev = seen[key];
          /* If either contributor wanted default verbs at the row's
             level (`a: null`), prefer null so the renderer resolves the
             correct verb list at the *merged* level — never silently
             clamp to an explicit-verb override that was correct only at
             the lower-level contributing role. */
          if (prev.a === null || ent.a === null) {
            seen[key] = { r: key, a: null };
          } else {
            var union = prev.a.slice();
            for (var j = 0; j < ent.a.length; j++) {
              if (union.indexOf(ent.a[j]) === -1) union.push(ent.a[j]);
            }
            seen[key] = { r: key, a: union };
          }
        }
      }
      var out = [];
      if (canon) {
        for (i = 0; i < canon.length; i++) {
          if (seen[canon[i]]) { out.push(seen[canon[i]]); delete seen[canon[i]]; }
        }
      }
      for (var k in seen) {
        if (Object.prototype.hasOwnProperty.call(seen, k)) out.push(seen[k]);
      }
      return out;
    }

    function renderAuCombinedEffectiveAccess(roleIds, userRecord) {
      if (!auEffTbody) return;
      var u = userRecord;
      if (!u && typeof findUserInOriginalById === "function" && auEditingUserId) {
        u = findUserInOriginalById(auEditingUserId);
      }
      var teamName = u ? (u.team || "") : "";
      var ids = roleIds || [];
      /* Per-app merged state: { app, level, chipKeys, contributingRoleNames } */
      var byApp = {};
      var order = [];
      var roleNamesForBreakdown = [];
      for (var i = 0; i < ids.length; i++) {
        var rid = ids[i];
        /* Round 27 (2026-06-09): classify *this* role by its own ID
           (with team context but without the legacy `userRecord.roles`
           scan that was collapsing every freshly-added role onto the
           user's primary saved role class — see `auEffClassifyById`
           comment for full diagnosis). */
        var roleClass = auEffClassifyById(rid, teamName);
        var pattern = AU_EFF_PATTERNS[roleClass] || AU_EFF_PATTERNS._default;
        var rRec = (typeof findRoleById === "function") ? findRoleById(rid) : null;
        if (rRec && rRec.role) roleNamesForBreakdown.push(rRec.role);
        for (var j = 0; j < pattern.length; j++) {
          var spec = pattern[j];
          /* auEffResolveChips returns the `{r, a}` entry shape, which
             is exactly what the merger and the renderer downstream
             expect. */
          var resEntries = auEffResolveChips(spec.app, spec.chips);
          if (!byApp[spec.app]) {
            byApp[spec.app] = { app: spec.app, level: spec.level, entries: resEntries.slice() };
            order.push(spec.app);
          } else {
            byApp[spec.app].level = auEffMergeLevel(byApp[spec.app].level, spec.level);
            byApp[spec.app].entries = auEffMergeChipEntries(spec.app, byApp[spec.app].entries, resEntries);
          }
        }
      }
      var html = "";
      /* Round 29 (2026-06-09 — Effective access breakdown modal
         pluralization). Capture the role-name LIST and the count
         alongside the joined string so the modal renderer can:
           • swap the label between "Assigned role" / "Assigned roles"
             based on count,
           • swap the intro between singular / plural copy,
           • render the value as the full comma-joined name list
             (already correct — `roleName`).
         The combined renderer (called for every Edit User mount and
         every Update access apply) is the authoritative source — the
         legacy single-role `renderAuEffectiveAccessTable` is no longer
         called by any code path but is still updated below for
         symmetry. */
      var breakdown = {
        roleName: roleNamesForBreakdown.join(", "),
        roleNames: roleNamesForBreakdown.slice(),
        roleCount: roleNamesForBreakdown.length,
        sections: []
      };
      for (var oi = 0; oi < order.length; oi++) {
        var appKey = order[oi];
        var merged = byApp[appKey];
        var levelClass = "au-eff-level-pill--" + (merged.level || "").toLowerCase().replace(/\s+/g, "-");
        var groups = auEffBuildGroups(merged.app, merged.level, merged.entries);
        /* Same "IAM" → "Identity and Access Management" copy translation
           as the single-role renderer (Round 12). */
        var appLabel = (merged.app === "IAM") ? "Identity and Access Management" : merged.app;
        breakdown.sections.push({ app: appLabel, level: merged.level, groups: groups });
        var groupsAttr = esc(JSON.stringify(groups)).replace(/"/g, "&quot;");
        html += '<tr>' +
          '<td class="au-eff-app">' +
            '<span class="au-eff-app-name">' + esc(appLabel) + '</span>' +
          '</td>' +
          '<td class="au-eff-level"><span class="au-eff-level-pill ' + levelClass + '">' + esc(merged.level) + '</span></td>' +
          '<td class="au-eff-summary-cell" data-eff-groups="' + groupsAttr + '">' +
            auEffSummaryTextHtml(merged.app, merged.level, merged.entries) +
          '</td>' +
        '</tr>';
      }
      if (!html) {
        html = '<tr><td colspan="3" class="au-eff-empty">No effective access for the assigned roles.</td></tr>';
      }
      auEffTbody.innerHTML = html;
      auEffLastBreakdown = breakdown;
      auEffApplyOverflow();
      refreshAuEffActionsVisibility(ids.length);
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    }

    /* Build/refresh the chip list of currently assigned roles below the
       Assigned Role row. Each chip exposes a small Remove `×` that
       splices the role from `auState.selectedRoleIds`, refreshes the
       combined effective access table, refreshes the dropdown's
       disabled set, and re-evaluates Save Dirty.

       Edit User only. Add User (which uses the per-role card stack
       above) is untouched. */
    function renderAuAssignedRolesChips() {
      /* Round 21 (2026-06-09): external assigned-role chips removed
         per brief — the multi-select dropdown's closed-trigger summary
         (rendered by `auRoleMultiRenderTrigger`) now stands in for
         the chip cluster. The container stays in the DOM (hidden via
         CSS `display: none !important`) so existing callers can keep
         invoking this function safely without conditional checks.
         We also refresh the trigger label here so any code path that
         used to call `renderAuAssignedRolesChips()` to reflect a new
         assigned-role set keeps producing a visible UI update. */
      if (!auAssignedRolesList) return;
      auAssignedRolesList.setAttribute("hidden", "");
      auAssignedRolesList.innerHTML = "";
      if (typeof auRoleMultiRenderTrigger === "function") auRoleMultiRenderTrigger();
    }

    /* ─── Effective access breakdown modal ──────────────────────────
       Opened by the "View access breakdown" action above the Access
       table. Rebuilt on the canonical ADS Modal shell (`.cr-confirm-*`
       — Revoke access / Remove Role / Add members) sized to the ADS
       Modal "Large" (640px) via `.au-eff-breakdown-dialog` so the
       resource/permission list reads comfortably. The modal is
       read-only and uses the snapshot captured by
       renderAuEffectiveAccessTable, so the content stays in sync with
       whatever the table currently shows. */
    var auEffModalBackdrop = document.getElementById("auEffBreakdownBackdrop");
    var auEffModalDialog   = auEffModalBackdrop ? auEffModalBackdrop.querySelector(".cr-confirm-dialog") : null;
    var auEffModalRoleName = document.getElementById("auEffBreakdownRoleName");
    var auEffModalSections = document.getElementById("auEffBreakdownSections");
    var auEffModalClose    = document.getElementById("auEffBreakdownClose");
    /* Round 8: EDL Modal exposes a header `×` icon button. Wire it
       to the same close handler so the icon, footer button, Esc, and
       backdrop click all converge on `closeAuEffBreakdown()`. */
    var auEffModalCloseX   = document.getElementById("auEffBreakdownX");
    var auEffViewBtn       = document.getElementById("auEffViewBreakdown");
    var auEffModalLastFocus = null;

    /* Round 29 (2026-06-09 — modal pluralization + DAA labels).

       Disney Ads Agent presentation override.
         • Resource (row) labels: the modal stores the canonical chip
           names ("Forecasting", "Planning Support", "Approval
           Comparisons", "Media Plan Queries") because role-pattern
           lookups, action lookups, and chip-merging all bind on those.
           The Functions matrix renders user-facing aliases per Round
           20/22 (CR_APP_RESOURCE_DISPLAY_LABEL). The brief asks the
           breakdown modal to read like the matrix — same alias set —
           so we apply the override at render time only. The data
           snapshot remains canonical, so future role/preview changes
           don't drift.
         • Action verb: DAA is a query/access capability, not CRUD.
           The matrix renders the column header as "Access" (Round 20
           CR_APP_COLUMN_DISPLAY_LABEL); we map the underlying "Read"
           verb to "Access" only for DAA rows so the modal matches.
       Scoped to this renderer — no other surface is affected. */
    var AU_EFF_BREAKDOWN_DAA_RES_LABEL = {
      "Media Plan Queries":   "Plan Queries",
      "Forecasting":          "Forecast Queries",
      "Planning Support":     "Team Summary",
      "Approval Comparisons": "IO Compare"
    };
    function auEffBreakdownDisplayResource(appLabel, canonicalResource) {
      if (appLabel === "Disney Ads Agent") {
        var alias = AU_EFF_BREAKDOWN_DAA_RES_LABEL[canonicalResource];
        if (alias) return alias;
      }
      return canonicalResource;
    }
    function auEffBreakdownDisplayVerbs(appLabel, verbs) {
      if (!verbs || !verbs.length) return appLabel === "Disney Ads Agent" ? "Access" : "Read";
      if (appLabel === "Disney Ads Agent") {
        /* Map any "Read" entry to "Access". Other verbs (none expected
           for DAA today) pass through verbatim so future expansion
           doesn't require touching this branch. */
        var mapped = [];
        for (var v = 0; v < verbs.length; v++) {
          mapped.push(verbs[v] === "Read" ? "Access" : verbs[v]);
        }
        /* Deduplicate while preserving order (Read+Read → Access). */
        var seen = {};
        var out = [];
        for (var k = 0; k < mapped.length; k++) {
          if (!seen[mapped[k]]) { seen[mapped[k]] = true; out.push(mapped[k]); }
        }
        return out.join(", ");
      }
      return verbs.join(", ");
    }

    function auEffRenderBreakdownModal() {
      if (!auEffModalSections) return;
      var b = auEffLastBreakdown;
      /* Round 29: pluralization based on the role count captured in
         the breakdown snapshot. Falls back gracefully when older
         snapshots without `roleCount` are encountered (treat as
         single-role to preserve current behaviour). */
      var rc = (b && typeof b.roleCount === "number") ? b.roleCount : ((b && b.roleName) ? 1 : 0);
      var isMulti = rc > 1;
      var labelEl = document.querySelector(".au-eff-modal-role-label");
      if (labelEl) {
        labelEl.textContent = isMulti ? "Assigned roles" : "Assigned role";
      }
      var introEl = document.getElementById("auEffBreakdownSubtitle");
      if (introEl) {
        introEl.textContent = isMulti
          ? "Access shown is inherited from the assigned roles."
          : "Access shown is inherited from the assigned role.";
      }
      if (auEffModalRoleName) {
        auEffModalRoleName.textContent = (b && b.roleName) ? b.roleName : "—";
      }
      if (!b || !b.sections || !b.sections.length) {
        auEffModalSections.innerHTML =
          '<p class="au-eff-modal-empty">' + (isMulti
            ? "No effective access for the assigned roles."
            : "No effective access for the assigned role.") + '</p>';
        return;
      }
      var html = "";
      for (var i = 0; i < b.sections.length; i++) {
        var sec = b.sections[i];
        html += '<section class="au-eff-modal-section">';
        html += '<h3 class="au-eff-modal-app">' + esc(sec.app) + '</h3>';
        if (!sec.groups || !sec.groups.length) {
          html += '<p class="au-eff-modal-empty">No assigned access.</p>';
        } else {
          html += '<dl class="au-eff-modal-list">';
          for (var j = 0; j < sec.groups.length; j++) {
            var g = sec.groups[j];
            var resourceLabel = auEffBreakdownDisplayResource(sec.app, g.r);
            var verbs = auEffBreakdownDisplayVerbs(sec.app, g.a);
            html +=
              '<div class="au-eff-modal-row">' +
                '<dt class="au-eff-modal-res">' + esc(resourceLabel) + '</dt>' +
                '<dd class="au-eff-modal-acts">' + esc(verbs) + '</dd>' +
              '</div>';
          }
          html += '</dl>';
        }
        html += '</section>';
      }
      auEffModalSections.innerHTML = html;
    }

    /* Background inert while open — the app shell (nav rail, sidebar,
       and the page content behind the backdrop) is hidden from
       assistive tech so screen readers can't reach it while the
       dialog is modal. Every `.cr-confirm-backdrop` in this app is a
       sibling of these three elements (see body child order), so
       toggling `aria-hidden` here never touches the modal itself. */
    var auEffBgEls = [".nav", "#sidebar", "main.page"].map(function (sel) {
      return document.querySelector(sel);
    }).filter(Boolean);
    function auEffSetBackgroundInert(hidden) {
      for (var i = 0; i < auEffBgEls.length; i++) {
        if (hidden) auEffBgEls[i].setAttribute("aria-hidden", "true");
        else auEffBgEls[i].removeAttribute("aria-hidden");
      }
    }

    /* Body scroll lock while open — restores the prior inline
       `overflow` value on close rather than assuming it was empty, so
       repeated opens/closes can't leave a stale style behind. */
    var auEffPrevBodyOverflow = null;
    function auEffLockScroll() {
      auEffPrevBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    function auEffUnlockScroll() {
      document.body.style.overflow = auEffPrevBodyOverflow || "";
      auEffPrevBodyOverflow = null;
    }

    /* Focus trap — keeps Tab/Shift+Tab cycling within the dialog's own
       focusable elements (header close icon, body links if any,
       footer Close button) while open, per standard ADS/WAI-ARIA
       dialog behavior. Scoped to this modal only. */
    var AU_EFF_FOCUSABLE_SEL = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function auEffFocusableEls() {
      if (!auEffModalDialog) return [];
      return Array.prototype.slice.call(auEffModalDialog.querySelectorAll(AU_EFF_FOCUSABLE_SEL))
        .filter(function (el) { return el.offsetParent !== null; });
    }
    function auEffTrapKeydown(e) {
      if (e.key !== "Tab" || !auEffModalBackdrop || auEffModalBackdrop.hasAttribute("hidden")) return;
      var items = auEffFocusableEls();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      var active = document.activeElement;
      if (e.shiftKey) {
        if (active === first || !auEffModalDialog.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last || !auEffModalDialog.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function openAuEffBreakdown() {
      if (!auEffModalBackdrop) return;
      auEffRenderBreakdownModal();
      auEffModalLastFocus = document.activeElement;
      auEffModalBackdrop.removeAttribute("hidden");
      auEffSetBackgroundInert(true);
      auEffLockScroll();
      setTimeout(function () {
        if (auEffModalCloseX) auEffModalCloseX.focus();
        else if (auEffModalClose) auEffModalClose.focus();
      }, 0);
    }
    function closeAuEffBreakdown() {
      if (!auEffModalBackdrop) return;
      auEffModalBackdrop.setAttribute("hidden", "");
      auEffSetBackgroundInert(false);
      auEffUnlockScroll();
      if (auEffModalLastFocus && typeof auEffModalLastFocus.focus === "function") {
        auEffModalLastFocus.focus();
      }
      auEffModalLastFocus = null;
    }

    if (auEffViewBtn) auEffViewBtn.addEventListener("click", openAuEffBreakdown);
    if (auEffModalClose) auEffModalClose.addEventListener("click", closeAuEffBreakdown);
    if (auEffModalCloseX) auEffModalCloseX.addEventListener("click", closeAuEffBreakdown);
    if (auEffModalBackdrop) {
      auEffModalBackdrop.addEventListener("click", function (e) {
        if (e.target === auEffModalBackdrop) closeAuEffBreakdown();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (!auEffModalBackdrop || auEffModalBackdrop.hasAttribute("hidden")) return;
      if (e.key === "Escape") { closeAuEffBreakdown(); return; }
      auEffTrapKeydown(e);
    });

    /* Post-render measure pass. For each .au-eff-summary-cell:
         1. Recover the full ordered group list from data-eff-groups.
         2. Render full text. If the cell's scrollWidth ≤ clientWidth
            and the inner span doesn't break the line, leave full text
            visible.
         3. Otherwise, drop groups from the tail and append
            "+N more" (with a native title tooltip listing only the
            HIDDEN groups, one per line) until the row fits on a
            single line OR we run out of groups to drop.
       Called on initial render and on debounced window resize so the
       summary expands back to full text when the user widens the
       viewport. The pass uses temporary DOM writes only — no external
       state — so it is safe to call repeatedly. */
    function auEffApplyOverflow() {
      if (!auEffTbody) return;
      var cells = auEffTbody.querySelectorAll(".au-eff-summary-cell");
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var raw = cell.getAttribute("data-eff-groups");
        if (!raw) continue;
        var groups;
        try { groups = JSON.parse(raw); } catch (_e) { groups = []; }
        if (!groups || !groups.length) continue;
        renderSummaryCell(cell, groups, groups.length);
        var n = groups.length;
        /* Iteratively trim the tail until the visible string fits on
           one line. cellFits() rounds to integer pixels because of
           sub-pixel rendering on macOS Retina. */
        while (n > 1 && !cellFits(cell)) {
          n -= 1;
          renderSummaryCell(cell, groups, n);
        }
      }
    }
    function cellFits(cell) {
      var span = cell.querySelector(".au-eff-summary");
      if (!span) return true;
      /* +1 fudge for sub-pixel layout differences. */
      return span.scrollWidth <= cell.clientWidth + 1;
    }
    function renderSummaryCell(cell, groups, visibleCount) {
      var SEP = '<span class="au-eff-summary-sep" aria-hidden="true">; </span>';
      var visible = groups.slice(0, visibleCount);
      var hidden  = groups.slice(visibleCount);
      var parts = [];
      for (var j = 0; j < visible.length; j++) parts.push(auEffGroupHtml(visible[j]));
      if (hidden.length) {
        var tipLines = [];
        for (var k = 0; k < hidden.length; k++) tipLines.push(auEffGroupText(hidden[k]));
        /* data-tooltip is consumed by the existing EDL tooltip system
           (showTooltipFor → multiline). Same attribute used by the
           Users-table "+N role" chip, so visuals and positioning are
           guaranteed consistent. The native title attribute is omitted
           on purpose — we don't want the OS tooltip racing the EDL one. */
        var tipAttr = esc(tipLines.join("\n")).replace(/"/g, "&quot;");
        parts.push(
          '<span class="au-eff-summary-more" aria-label="' + hidden.length + ' more"' +
            ' data-tooltip="' + tipAttr + '" tabindex="0">+' + hidden.length + ' more</span>'
        );
      }
      cell.innerHTML = '<span class="au-eff-summary">' + parts.join(SEP) + '</span>';
    }

    /* Debounced re-measure on viewport resize so "+N more" collapses or
       expands as the column width changes. Only applies when the Access
       table is mounted. Listener is attached once at IIFE scope. */
    var auEffResizeTimer = null;
    window.addEventListener("resize", function () {
      if (!auEffTbody || !auEffTbody.children.length) return;
      if (auEffResizeTimer) clearTimeout(auEffResizeTimer);
      auEffResizeTimer = setTimeout(auEffApplyOverflow, 120);
    });

    /* Round 4 (2026-06-08): wire the existing EDL tooltip system to the
       Access table's "+N more" trigger. The shared showTooltipFor /
       hideTooltip helpers live at top-level script scope (used by
       Users-table .role-extra and the PM "Used in" cell), so we can
       reach them from this IIFE via lexical scope.
       Native title= was unreliable for an inline span sitting inside an
       overflow:hidden cell, so the renderer now writes data-tooltip
       instead and we drive the EDL tooltip ourselves here. */
    if (auEffTbody) {
      auEffTbody.addEventListener("mouseover", function (e) {
        var more = e.target.closest(".au-eff-summary-more");
        if (!more) { hideTooltip(); return; }
        var lines = more.getAttribute("data-tooltip");
        if (lines) showTooltipFor(more, lines, true);
      });
      auEffTbody.addEventListener("mouseleave", hideTooltip);
      auEffTbody.addEventListener("focusin", function (e) {
        var more = e.target.closest(".au-eff-summary-more");
        if (!more) return;
        var lines = more.getAttribute("data-tooltip");
        if (lines) showTooltipFor(more, lines, true);
      });
      auEffTbody.addEventListener("focusout", function (e) {
        if (e.target.closest(".au-eff-summary-more")) hideTooltip();
      });
    }

    function openEditUserForId(userId) {
      var user = findUserInOriginalById(userId);
      if (!user) return;
      if (mainPage) mainPage.style.display = "none";
      if (createRolePage) createRolePage.style.display = "none";
      addUsersPage.style.display = "";
      window.scrollTo(0, 0);
      auPageMode = "edit";
      auEditingUserId = userId;
      auEditingDisplayName = user.name || "";
      auEditOriginalTitle = user.title || "";
      auEditBaselineJson = "";
      if (auSave) auSave.disabled = true;
      applyAuPageChrome();
      resetAddUsersState();
      populateEditFormFromUser(user);
      captureAuEditBaseline();
      refreshAuSaveDirty();
      var openedAs = userId;
      requestAnimationFrame(function () {
        if (auPageMode !== "edit" || auEditingUserId !== openedAs) return;
        refreshAuSaveDirty();
      });
    }

    function closeAuRemoveUserConfirm() {
      if (!auRemoveUserBackdrop) return;
      auRemoveUserBackdrop.setAttribute("hidden", "");
      if (auRemoveUserLastFocus && typeof auRemoveUserLastFocus.focus === "function") {
        auRemoveUserLastFocus.focus();
      }
      auRemoveUserLastFocus = null;
    }

    function openAuRemoveUserConfirm() {
      if (!auRemoveUserBackdrop || auPageMode !== "edit" || !auEditingUserId) return;
      auRemoveUserLastFocus = document.activeElement;
      var dispName = ((auFirstName ? auFirstName.value.trim() : "") + " " + (auLastName ? auLastName.value.trim() : "")).trim();
      if (!dispName) dispName = auEditingDisplayName || "user";
      if (auRemoveUserTitle) auRemoveUserTitle.textContent = "Remove " + dispName + "?";
      if (auRemoveUserBody) {
        auRemoveUserBody.textContent = "This user will be removed from Atlas and their assigned roles and permissions will no longer apply. This action cannot be undone in this prototype session.";
      }
      auRemoveUserBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (auRemoveUserCancel) auRemoveUserCancel.focus();
      }, 0);
    }

    function confirmRemoveEditedUser() {
      closeAuRemoveUserConfirm();
      var removeId = auEditingUserId;
      if (!removeId) return;
      var removedRec = findUserInOriginalById(removeId);
      var removedName = removedRec && removedRec.name ? removedRec.name : "User";
      for (var ox = ORIGINAL_ORDER.length - 1; ox >= 0; ox--) {
        if (ORIGINAL_ORDER[ox].id === removeId) {
          ORIGINAL_ORDER.splice(ox, 1);
          break;
        }
      }
      TOTAL_ITEMS = Math.max(0, TOTAL_ITEMS - 1);
      reapplyUserDatasetOrder();
      delete selectedUserIds[removeId];
      pruneSelectionToExistingUsers();
      var tpx = totalPages();
      if (currentPage > tpx) currentPage = tpx;
      updateSortHeaders();
      renderTable();
      renderPagination();
      auPageMode = "add";
      auEditingUserId = null;
      auEditBaselineJson = "";
      applyAuPageChrome();
      addUsersPage.style.display = "none";
      if (mainPage) mainPage.style.display = "";
      switchTab("users");
      closeAllAddUserCombos();
      showEdlToast({
        type: "success",
        title: "User removed",
        body: removedName + " has been removed from Atlas."
      });
    }

    function handleSaveEditUser() {
      if (auPageMode !== "edit" || !auEditingUserId) return;
      if (!isAuFormDirty()) return;
      var first = auFirstName.value.trim();
      var last = auLastName.value.trim();
      var email = auEmail.value.trim();
      if (!first || !last || !email) {
        showEdlToast({
          type: "warning",
          title: "Required fields missing",
          body: "First name, last name, and email are required."
        });
        iamRevealAccordionField(!first ? auFirstName : (!last ? auLastName : auEmail));
        return;
      }
      if (selectedStatus() !== "Inactive" && auState.selectedRoleIds.length === 0) {
        showEdlToast({
          type: "warning",
          title: "Role required",
          body: "Assign at least one role before saving this user."
        });
        iamRevealAccordionField(document.getElementById("auRoleMultiTrigger") || document.getElementById("auRoleAdd"));
        return;
      }
      var rec = findUserInOriginalById(auEditingUserId);
      if (!rec) return;
      var assignedRoleNames = [];
      if (selectedStatus() !== "Inactive") {
        for (var si = 0; si < auState.selectedRoleIds.length; si++) {
          var role = findRoleById(auState.selectedRoleIds[si]);
          if (role) assignedRoleNames.push(role.role);
        }
      }
      rec.name = first + " " + last;
      rec.email = email;
      rec.roles = selectedStatus() === "Inactive" ? [] : assignedRoleNames;
      rec.status = selectedStatus();
      rec.team = auTeam && auTeam.value && auTeam.value.trim() ? auTeam.value.trim() : "Unassigned";
      rec.region = selectedRegionCode();
      rec.title = auDerivedTitleForSave();
      var savedDisplayName = rec.name || ((first + " " + last).trim());
      reapplyUserDatasetOrder();
      updateSortHeaders();
      renderTable();
      renderPagination();
      closeAddUsers();
      resetAddUsersState();
      showEdlToast({
        type: "success",
        title: "User updated",
        body: savedDisplayName + "\u2019s user details have been saved."
      });
    }

    function auBuildBasicSummary() {
      var parts = [];
      var fn = auFirstName ? auFirstName.value.trim() : "";
      var ln = auLastName ? auLastName.value.trim() : "";
      var nm = (fn + " " + ln).trim();
      var em = auEmail ? auEmail.value.trim() : "";
      if (nm) parts.push(nm);
      else if (em) parts.push(em);
      var regCode = auRegion ? (auRegion.value || "").trim() : "";
      var reg = regCode ? (AU_REGION_LABELS[regCode] || regCode) : "";
      if (reg) {
        var shortReg = reg.indexOf("(") !== -1 ? reg.split("(")[0].trim() : reg;
        if (shortReg.length > 28) shortReg = shortReg.slice(0, 25) + "\u2026";
        parts.push(shortReg);
      }
      var tz = auTimezone ? (auTimezone.value || "").trim() : "";
      if (tz && parts.length < 6) parts.push(tz);
      var team = auTeam && auTeam.value ? auTeam.value.trim() : "";
      if (team && parts.length < 6) parts.push(team);
      var st = auStatusValue ? auStatusValue.value : "";
      if (st && parts.length < 6) parts.push(st);
      return parts.join(" \u00b7 ");
    }

    function auBuildRolesSummary() {
      var n = auState.selectedRoleIds.length;
      if (!n) return "";
      var names = [];
      for (var ri = 0; ri < n; ri++) {
        var role = findRoleById(auState.selectedRoleIds[ri]);
        if (role) names.push(role.role);
      }
      if (!names.length) return "";
      if (names.length === 1) return names[0];
      if (names.length === 2) return names[0] + ", " + names[1];
      return names[0] + ", " + names[1] + " (+" + (names.length - 2) + ")";
    }

    function updateAuSummaries() {
      if (auBasicSummary) auBasicSummary.textContent = auBuildBasicSummary();
      if (auRolesSummary) auRolesSummary.textContent = auBuildRolesSummary();
      refreshAuSaveDirty();
    }

    function auToggleSection(header) {
      var card = header.closest(".cr-card");
      if (!card || !addUsersPage.contains(card)) return;
      var willCollapse = !card.classList.contains("collapsed");
      card.classList.toggle("collapsed", willCollapse);
      header.setAttribute("aria-expanded", willCollapse ? "false" : "true");
      var auTitle = header.querySelector(".cr-section-title");
      if (auTitle) header.setAttribute("aria-label", (willCollapse ? "Expand " : "Collapse ") + auTitle.textContent.trim());
      if (willCollapse) {
        closeAllAddUserCombos();
        /* Whatever was showing a tooltip a moment ago is now hidden. */
        hideStatusTooltip();
      }
      /* A collapsed body is `display: none`, so anything that re-measures
         while collapsed (a resize, say) sees zero widths and clears the
         identity truncation tooltips. Re-measure on expand so they come
         back instead of staying cleared until the next resize. */
      if (!willCollapse) refreshAuIdentityTruncation();
      updateAuSummaries();
    }

    function rolePermissionCount(roleRecord) {
      var count = 0;
      var fns = roleRecord && roleRecord.functions ? roleRecord.functions : [];
      for (var i = 0; i < fns.length; i++) count += (fns[i].count || 0);
      return count;
    }

    function roleDescription(roleRecord) {
      var text = ((roleRecord && roleRecord.description) || "").trim();
      if (!text) return "Custom role with configured access permissions.";
      return text;
    }

    function auDisplayAccessLevel(level) {
      if (!level) return "";
      if (level === "Custom Access") return "Custom";
      return level;
    }

    function roleAccessLevelSummary(roleRecord) {
      var fns = roleRecord && roleRecord.functions ? roleRecord.functions : [];
      var total = rolePermissionCount(roleRecord);
      if (!fns.length) return "—";
      var uniq = [];
      var seen = {};
      for (var u = 0; u < fns.length; u++) {
        var raw = fns[u].access || roleAccessLevel(roleRecord.id, fns[u].name);
        var a = auDisplayAccessLevel(raw);
        if (!seen[a]) {
          seen[a] = true;
          uniq.push(a);
        }
      }
      if (uniq.length === 1) return uniq[0] + " (" + total + " permissions)";
      return uniq.join(", ") + " (" + total + " permissions)";
    }

    function buildAURolePermissionDetailHtml(roleRecord) {
      var fns = roleRecord && roleRecord.functions ? roleRecord.functions : [];
      if (!fns.length) {
        return '<p class="au-role-section-text">No applications assigned.</p>';
      }
      var cards = [];
      for (var fi = 0; fi < fns.length; fi++) {
        var appName = fns[fi].name;
        var access = fns[fi].access || roleAccessLevel(roleRecord.id, appName);
        var detail = getRoleAppAccessDetails(roleRecord.id, appName, access);
        var model = APP_ACCESS_MODEL[appName];
        var display = RP_FUNC_DISPLAY_NAME[appName] || appName;
        var cardHtml;
        if (!model) {
          var labs = resolveFunctionLabels(roleRecord.id, appName, fns[fi].count);
          cardHtml =
            '<div class="au-role-app-section au-perm-card">' +
            '<div class="cr-label">' + esc(display) + " permissions</div>" +
            '<div class="au-role-app-detail">' +
            '<ul class="au-role-list-fallback">';
          for (var li = 0; li < labs.length; li++) {
            cardHtml += "<li>" + esc(labs[li]) + "</li>";
          }
          cardHtml += "</ul></div></div>";
        } else {
          cardHtml =
            '<div class="au-role-app-section au-perm-card">' +
            '<div class="cr-label">' + esc(display) + " permissions</div>" +
            '<div class="au-role-app-detail">' +
            '<div class="permission-detail-list au-role-perm-summary-list">';
          for (var gi = 0; gi < model.groups.length; gi++) {
            var grp = model.groups[gi];
            var actions = detail.groups[grp] || [];
            if (!actions.length) continue;
            cardHtml +=
              '<div class="permission-row">' +
              '<div class="permission-label">' + esc(grp) + ":</div>" +
              '<div class="permission-values">' + esc(actions.join(", ")) + "</div>" +
              "</div>";
          }
          cardHtml += "</div></div></div>";
        }
        cards.push(cardHtml);
      }
      var rows = [];
      for (var ri = 0; ri < cards.length; ri += 2) {
        rows.push(
          '<div class="au-perm-card-row">' +
            '<div class="au-perm-card-stack">' + cards[ri] + "</div>" +
            (cards[ri + 1] ? '<div class="au-perm-card-stack">' + cards[ri + 1] + "</div>" : "") +
          "</div>"
        );
      }
      return '<div class="au-perm-card-list">' + rows.join("") + "</div>";
    }

    function renderAURoleCards() {
      /* Figma 1023:22053 QA pass: Add mode's populated/empty Role and
         Permission state now renders through the exact same
         Application/Access Level/Effective-access table Edit mode
         uses (`#auEffWrap`, un-scoped from `.is-edit-mode` in
         styles.css), not the retired `.au-role-cards` stack below.
         Edit mode already calls `renderAuCombinedEffectiveAccess`
         directly at its own call sites, so gate this to Add mode only
         to avoid a harmless but redundant double-render. */
      if (auPageMode !== "edit") {
        renderAuCombinedEffectiveAccess(auState.selectedRoleIds);
      }
      if (!auState.selectedRoleIds.length) {
        auRoleCards.innerHTML = "";
        auRoleCards.classList.remove("has-roles");
        return;
      }
      auRoleCards.classList.add("has-roles");
      var cards = [];
      for (var i = 0; i < auState.selectedRoleIds.length; i++) {
        var role = findRoleById(auState.selectedRoleIds[i]);
        if (!role) continue;
        var isExpanded = auState.expandedRoleId === role.id;
        cards.push(
          '<article class="au-role-card' + (isExpanded ? ' expanded' : '') + '" data-au-role-id="' + esc(role.id) + '">' +
            '<div class="au-role-card-top">' +
              '<div class="cr-app-section-head">' +
                '<div class="cr-app-head-left">' +
                  '<h3 class="cr-app-title">' + esc(role.role) + '</h3>' +
                '</div>' +
                '<button type="button" class="cr-app-remove" data-au-remove="' + esc(role.id) + '" aria-label="Remove ' + esc(role.role) + '">' +
                  TRASH_SVG +
                  "Remove" +
                "</button>" +
              "</div>" +
              '<div class="cr-app-body">' +
                '<div class="au-role-block">' +
                  '<div class="cr-label">Description</div>' +
                  '<p class="au-role-section-text">' + esc(roleDescription(role)) + '</p>' +
                '</div>' +
                '<div class="au-role-block">' +
                  '<div class="cr-label">Access level</div>' +
                  '<p class="cr-access-module-perms au-role-access-value" aria-live="polite">' + esc(roleAccessLevelSummary(role)) + "</p>" +
                '</div>' +
                '<button type="button" class="cr-customize-link au-role-view-toggle" data-au-toggle="' + esc(role.id) + '" aria-expanded="' + (isExpanded ? "true" : "false") + '">' +
                  '<span class="au-role-toggle-label">' +
                  (isExpanded ? "Hide all permissions" : "Show all permissions") +
                  "</span>" +
                  '<span class="au-role-toggle-arr" aria-hidden="true">' +
                  (isExpanded ? "\u2191" : "\u2193") +
                  "</span>" +
                "</button>" +
              "</div>" +
            '</div>' +
            '<div class="au-role-expand">' +
              '<div class="au-role-expand-inner">' +
              buildAURolePermissionDetailHtml(role) +
            '</div>' +
            '</div>' +
          '</article>'
        );
      }
      var html = "";
      for (var r = 0; r < cards.length; r += 2) {
        html += '<div class="au-role-cards-row">' + cards[r] + (cards[r + 1] || "") + "</div>";
      }
      auRoleCards.innerHTML = html;
      updateAuSummaries();
    }

    /* ─── V3 Edit User → Permission Options card renderers ─────────────── */

    /* Build one application card. All controls are display-only or
       allow-listed:
         • Card title + Remove button (removes ONLY this assigned app).
         • Access Level dropdown with the 4 predefined values.
         • Three read-only permission rows (Inventory Items, Offerings,
           Sales Packages → View, Create, Edit, Delete).
         • "Show all permissions" toggle reveals more read-only rows.
       The card has NO in-card future-state affordance. The custom-actions
       future phase is communicated only via the helper text above the
       card grid.

       The Access Level dropdown reuses the EDL `.cr-dd` pattern (same
       trigger / menu / option markup used by Create Role's access-level
       dropdown). This avoids the native OS dropdown that an HTML
       `<select>` would otherwise render — chevron, surface, hover, and
       brand-selected state all come from the shared `.cr-dd-*` styles.
       Menu is portalled to body via `attachCrDdLayeredMenu` so it
       overlays cleanly above the card without clipping. */
    function buildAUPermsAccessLevelMenuHtml(selected) {
      var html = "";
      for (var i = 0; i < AU_PERM_ACCESS_LEVELS.length; i++) {
        var v = AU_PERM_ACCESS_LEVELS[i];
        var isSel = (v === selected);
        html += '<div class="cr-dd-option au-perms-access-option' + (isSel ? " is-selected" : "") + '"' +
          ' role="option" data-au-perms-access-option="true" data-au-perms-access-value="' + esc(v) + '"' +
          ' aria-selected="' + (isSel ? "true" : "false") + '">' + esc(v) + '</div>';
      }
      return html;
    }
    function buildAUPermsRowsHtml() {
      var html = '<ul class="au-perms-rows" aria-label="Permission coverage">';
      for (var i = 0; i < AU_PERM_ROWS.length; i++) {
        html += '<li class="au-perms-row">' +
          '<span class="au-perms-row-label">' + esc(AU_PERM_ROWS[i].label) + ':</span>' +
          '<span class="au-perms-row-actions">' + esc(AU_PERM_ROWS[i].actions) + '</span>' +
        '</li>';
      }
      html += '</ul>';
      return html;
    }
    /* Per Figma 847:16138 the Remove control is a 24-px trash icon
       followed by the word "Remove" in indigo (#3611C8). Built inline
       so the icon strokes are crisp and the link tone matches the
       Permission Options card title. */
    var AU_PERMS_REMOVE_TRASH_SVG =
      '<svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';
    /* Show-all arrow per Figma 847:16415 — Feather "Arrow-Down" icon
       at 16 px (NOT the unicode `↓` glyph the earlier build used). */
    var AU_PERMS_SHOW_ARROW_DOWN_SVG =
      '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"/></svg>';
    var AU_PERMS_SHOW_ARROW_UP_SVG =
      '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"/></svg>';

    function buildAUPermsCardHtml(assignment, idx) {
      var expanded = !!assignment.expanded;
      var coverage = "Full Access | " + (assignment.coverage || "12 permissions");
      return '<article class="au-perms-card" data-au-perms-idx="' + idx + '">' +
        '<header class="au-perms-card-head">' +
          '<h3 class="au-perms-card-title">' + esc(assignment.app) + '</h3>' +
          '<button type="button" class="au-perms-card-remove" data-au-perms-remove="' + idx + '" title="Remove assigned application" aria-label="Remove assigned application ' + esc(assignment.app) + '">' +
            AU_PERMS_REMOVE_TRASH_SVG +
            '<span class="au-perms-card-remove-label">Remove</span>' +
          '</button>' +
        '</header>' +
        '<div class="au-perms-card-body">' +
          '<div class="au-perms-access-field">' +
            '<span class="au-label" id="auPermsAccessLbl-' + idx + '">Access Level<span class="au-req">*</span></span>' +
            '<div class="au-perms-access-wrap">' +
              '<div class="cr-dd au-perms-access-dd" data-au-perms-access-dd="' + idx + '">' +
                '<button type="button" class="cr-dd-trigger au-perms-access-trigger"' +
                  ' id="auPermsAccessTrigger-' + idx + '"' +
                  ' aria-haspopup="listbox" aria-expanded="false"' +
                  ' aria-controls="auPermsAccessMenu-' + idx + '"' +
                  ' aria-labelledby="auPermsAccessLbl-' + idx + ' auPermsAccessTrigger-' + idx + '">' +
                  '<span class="cr-dd-value au-perms-access-value">' + esc(assignment.access || "Full Access") + '</span>' +
                  '<svg class="cr-dd-chev" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>' +
                '</button>' +
                '<div class="cr-dd-menu au-perms-access-menu" id="auPermsAccessMenu-' + idx + '" role="listbox" aria-labelledby="auPermsAccessLbl-' + idx + '" data-au-perms-access-idx="' + idx + '">' +
                  buildAUPermsAccessLevelMenuHtml(assignment.access || "Full Access") +
                '</div>' +
              '</div>' +
              '<span class="au-perms-access-coverage" aria-hidden="true">' + esc(coverage) + '</span>' +
            '</div>' +
          '</div>' +
          buildAUPermsRowsHtml() +
          /* Show-all toggle. Expanded state still appends a duplicate
             rows-block (read-only) for the prototype walk-through;
             no extra hint paragraph (Figma 847:16413 has neither). */
          '<button type="button" class="au-perms-show-all" data-au-perms-toggle="' + idx + '" aria-expanded="' + (expanded ? 'true' : 'false') + '">' +
            '<span>' + (expanded ? 'Hide all permissions' : 'Show all permissions') + '</span>' +
            '<span class="au-perms-show-all-arr" aria-hidden="true">' + (expanded ? AU_PERMS_SHOW_ARROW_UP_SVG : AU_PERMS_SHOW_ARROW_DOWN_SVG) + '</span>' +
          '</button>' +
          (expanded
            ? ('<div class="au-perms-card-expand">' + buildAUPermsRowsHtml() + '</div>')
            : '') +
        '</div>' +
      '</article>';
    }
    function renderAUPermsCards() {
      if (!auPermsCardsEl) return;
      var cards = "";
      for (var i = 0; i < auPermsState.assignments.length; i++) {
        cards += buildAUPermsCardHtml(auPermsState.assignments[i], i);
      }
      auPermsCardsEl.innerHTML = cards;
    }
    function renderAUPermsAppPicker() {
      if (!setAuPermsAppCombo || !setAuPermsAppCombo.setOptions) return;
      var assigned = {};
      for (var i = 0; i < auPermsState.assignments.length; i++) assigned[auPermsState.assignments[i].app] = true;
      var opts = [];
      for (var j = 0; j < AU_PERM_APPS.length; j++) {
        opts.push({ value: AU_PERM_APPS[j], label: AU_PERM_APPS[j], disabled: !!assigned[AU_PERM_APPS[j]] });
      }
      setAuPermsAppCombo.setOptions(opts);
      if (auPermsState.addPick && assigned[auPermsState.addPick]) auPermsState.addPick = "";
      if (auPermsAppAdd) auPermsAppAdd.disabled = !auPermsState.addPick;
    }

    function renderAURolePicker() {
      var options = getAURoleOptions();
      var opts = [];
      for (var i = 0; i < options.length; i++) {
        var disabled = auState.selectedRoleIds.indexOf(options[i].id) !== -1;
        opts.push({ value: options[i].id, label: options[i].name, disabled: disabled });
      }
      if (setAuRoleCombo && setAuRoleCombo.setOptions) {
        setAuRoleCombo.setOptions(opts);
        if (!auComboState.addUserRolePick) auState.selectedRoleId = "";
        if (auState.selectedRoleId && auState.selectedRoleIds.indexOf(auState.selectedRoleId) !== -1) {
          auState.selectedRoleId = "";
        }
        setAuRoleCombo(auState.selectedRoleId || "");
      }
      syncAuRoleChrome();
      updateAuSummaries();
    }

    function selectedStatus() {
      return auStatusValue && auStatusValue.value === "Inactive" ? "Inactive" : "Active";
    }

    function selectedRegionCode() {
      return getAURegionKey();
    }

    function handleSaveUser() {
      if (auPageMode === "edit" && auEditingUserId) {
        handleSaveEditUser();
        return;
      }
      /* Defense in depth: `refreshAuSaveDirty` already disables the
         Save button until a roster/IAM record has been selected via
         the two-step search modal, but guard here too in case Save is
         ever reachable without going through that gate. */
      if (!auAddUserAppliedSelection) {
        showEdlToast({
          type: "warning",
          title: "No user selected",
          body: "Select an employee before adding a user."
        });
        return;
      }
      var first = auFirstName.value.trim();
      var last = auLastName.value.trim();
      var email = auEmail.value.trim();
      if (!first || !last || !email) {
        showEdlToast({
          type: "warning",
          title: "Required fields missing",
          body: "First name, last name, and email are required."
        });
        iamRevealAccordionField(!first ? auFirstName : (!last ? auLastName : auEmail));
        return;
      }
      if (selectedStatus() !== "Inactive" && auState.selectedRoleIds.length === 0) {
        showEdlToast({
          type: "warning",
          title: "Role required",
          body: "Assign at least one role before adding a user."
        });
        iamRevealAccordionField(document.getElementById("auRoleMultiTrigger") || document.getElementById("auRoleAdd"));
        return;
      }
      /* Round 28 (2026-06-09): determine whether the Add User flow is
         producing an internal or external user. Mirrors the global
         Users-page Internal/External segmented toggle (`userView`).
         External users carry `organization` (free-text from the
         Company name input) and never carry `team`; internal users
         carry `team` and never `organization`. The Users table render
         path (line ~1483) already prefers `organization` for external
         and `team` for internal — by keeping each record one-or-the-
         other we avoid stale fields leaking into the wrong view. */
      var isExternalAdd = (typeof userView === "string" && userView === "external");
      if (isExternalAdd) {
        var companyVal = auCompany && auCompany.value ? auCompany.value.trim() : "";
        if (!companyVal) {
          showEdlToast({
            type: "warning",
            title: "Company name required",
            body: "Enter the external user's company name."
          });
          if (auCompany) iamRevealAccordionField(auCompany);
          return;
        }
      }
      var assignedRoleNames = [];
      if (selectedStatus() !== "Inactive") {
        for (var i = 0; i < auState.selectedRoleIds.length; i++) {
          var role = findRoleById(auState.selectedRoleIds[i]);
          if (role) assignedRoleNames.push(role.role);
        }
      }

      /* New-user ID prefix encodes the user type so downstream helpers
         (`isAuUserExternal`, search field weighting) classify the
         locally-added user the same way as seeded external records
         (which use `e###`). External Add → `u_local_e_…`; internal
         Add → `u_local_…` (unchanged). */
      var newUserId = (isExternalAdd ? "u_local_e_" : "u_local_") + Date.now();
      var newUser = {
        id: newUserId,
        avatar: DEFAULT_ADD_USER_AVATAR,
        name: first + " " + last,
        email: email,
        roles: assignedRoleNames,
        status: selectedStatus(),
        title: auPreferredName.value.trim() ? ("Preferred: " + auPreferredName.value.trim()) : "Atlas User",
        region: selectedRegionCode()
      };
      if (isExternalAdd) {
        newUser.organization = auCompany.value.trim();
      } else {
        newUser.team = auTeam && auTeam.value && auTeam.value.trim() ? auTeam.value.trim() : "Unassigned";
      }
      /* Add User modal integration: carry the roster Employee ID (and
         the roster avatar, if the record had one) onto the created
         record when this Add flow started from a modal selection —
         additive only, never required by the rest of the app. */
      if (auAddUserAppliedSelection && auAddUserAppliedSelection.email &&
          auAddUserAppliedSelection.email.toLowerCase() === email.toLowerCase()) {
        if (auAddUserAppliedSelection.employeeId) newUser.employeeId = auAddUserAppliedSelection.employeeId;
        if (auAddUserAppliedSelection.avatar) newUser.avatar = auAddUserAppliedSelection.avatar;
      }
      /* Append to the correct dataset so the new record shows up in
         the right view (Internal vs External Users table). */
      if (isExternalAdd) {
        EXTERNAL_DATA_ARRAY.unshift(newUser);
        EXTERNAL_TOTAL += 1;
        /* If the user is currently looking at the External view, also
           refresh the live `DATA`/`ORIGINAL_ORDER` arrays so the
           visible table updates. (When they're on the Internal view,
           the new external user will be visible the next time they
           flip the segmented toggle to External.) */
        if (userView === "external") {
          ORIGINAL_ORDER.unshift(newUser);
          DATA = ORIGINAL_ORDER.slice();
          TOTAL_ITEMS = EXTERNAL_TOTAL;
        }
      } else {
        ORIGINAL_ORDER.unshift(newUser);
        DATA = ORIGINAL_ORDER.slice();
        if (typeof INTERNAL_ORIGINAL_SNAPSHOT !== "undefined" && INTERNAL_ORIGINAL_SNAPSHOT && INTERNAL_ORIGINAL_SNAPSHOT.unshift) {
          INTERNAL_ORIGINAL_SNAPSHOT.unshift(newUser);
        }
        if (typeof INTERNAL_TOTAL !== "undefined") INTERNAL_TOTAL += 1;
        TOTAL_ITEMS += 1;
      }
      sortKey = null;
      sortDir = null;
      currentPage = 1;
      updateSortHeaders();
      renderTable();
      renderPagination();
      closeAddUsers();
      resetAddUsersState();
      showEdlToast({
        type: "success",
        title: "User added",
        bodyHtml: '&ldquo;<strong>' + esc(newUser.name) + '</strong>&rdquo; has been added.'
      });
    }

    auRoleCards.addEventListener("click", function (e) {
      if (selectedStatus() === "Inactive") return;
      var removeBtn = e.target.closest("[data-au-remove]");
      if (removeBtn) {
        var removeId = removeBtn.getAttribute("data-au-remove");
        var next = [];
        for (var i = 0; i < auState.selectedRoleIds.length; i++) {
          if (auState.selectedRoleIds[i] !== removeId) next.push(auState.selectedRoleIds[i]);
        }
        auState.selectedRoleIds = next;
        if (auState.expandedRoleId === removeId) auState.expandedRoleId = null;
        renderAURolePicker();
        renderAURoleCards();
        return;
      }
      var toggleBtn = e.target.closest("[data-au-toggle]");
      if (!toggleBtn) return;
      var toggleId = toggleBtn.getAttribute("data-au-toggle");
      auState.expandedRoleId = auState.expandedRoleId === toggleId ? null : toggleId;
      renderAURoleCards();
    });

    auRoleAdd.addEventListener("click", function () {
      if (selectedStatus() === "Inactive" || auRoleAdd.disabled) return;
      /* Round 21 (2026-06-09): in Edit mode the button reads
         "Update access" and applies the dropdown's pending selection
         (`auState.pendingRoleIds`) to the applied set
         (`auState.selectedRoleIds`). The Add-mode single-role append
         path (single-select combo) is preserved unchanged below. */
      if (auPageMode === "edit") {
        var nextIds = (auState.pendingRoleIds || []).slice();
        /* De-duplicate defensively even though the multi-select can't
           produce dupes; keeps the data shape invariant the same as
           Round 18. */
        var seen = {};
        var deduped = [];
        for (var di = 0; di < nextIds.length; di++) {
          var id = nextIds[di];
          if (!seen[id]) { seen[id] = true; deduped.push(id); }
        }
        auState.selectedRoleIds = deduped;
        auState.pendingRoleIds = auState.selectedRoleIds.slice();
        if (typeof auRoleMultiClose === "function") auRoleMultiClose();
        if (typeof auRoleMultiRenderTrigger === "function") auRoleMultiRenderTrigger();
        renderAuCombinedEffectiveAccess(auState.selectedRoleIds);
        /* Effective-access breakdown modal pulls from the same
           snapshot the table just built (`auEffLastBreakdown`), so
           re-opening "View access breakdown" after Update access will show
           the merged role list. */
        refreshAuSaveDirty();
        return;
      }
      var roleId = auState.selectedRoleId;
      if (!roleId) return;
      if (auState.selectedRoleIds.indexOf(roleId) !== -1) return;
      auState.selectedRoleIds.push(roleId);
      auState.selectedRoleId = "";
      /* Clear the picker so it returns to its empty/placeholder state
         and the admin can immediately pick a *different* role to add
         next. The combo's internal pending pick is in `auComboState`,
         not `auState`, so we reset both. */
      auComboState.addUserRolePick = "";
      if (setAuRoleCombo) setAuRoleCombo("");
      renderAURolePicker();
      renderAURoleCards();
    });

    /* Round 18 (2026-06-09): assigned-role chip remove handler. The
       chip list is delegate-listened from the list container so each
       chip's `×` button can splice its role out of the assigned set,
       reflow the combined effective access table, and re-enable Save
       once the form differs from baseline. */
    if (auAssignedRolesList) {
      auAssignedRolesList.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-au-remove-role-id]");
        if (!btn) return;
        if (auPageMode !== "edit") return;
        if (selectedStatus() === "Inactive") return;
        var removeId = btn.getAttribute("data-au-remove-role-id");
        if (!removeId) return;
        var idx = auState.selectedRoleIds.indexOf(removeId);
        if (idx === -1) return;
        auState.selectedRoleIds.splice(idx, 1);
        renderAuAssignedRolesChips();
        renderAURolePicker();
        renderAuCombinedEffectiveAccess(auState.selectedRoleIds);
        refreshAuSaveDirty();
      });
    }

    /* V3 Edit User — Permission Options interactions. The Add button
       inserts the picked predefined application as a new assigned-app
       card (no custom function builder). Within each app card we
       delegate clicks for Remove, Show all permissions, and Access
       Level change. All other widgets inside the card are display-only
       per Tatiana's current-state guardrails. */
    if (auPermsAppAdd) {
      auPermsAppAdd.addEventListener("click", function () {
        if (auPermsAppAdd.disabled) return;
        var pick = auPermsState.addPick;
        if (!pick) return;
        for (var i = 0; i < auPermsState.assignments.length; i++) {
          if (auPermsState.assignments[i].app === pick) return; // already assigned
        }
        auPermsState.assignments.push({
          app: pick,
          access: "Full Access",
          coverage: "12 permissions",
          expanded: false
        });
        auPermsState.addPick = "";
        auComboState.editPermsAppPick = "";
        if (auPermsAppHidden) auPermsAppHidden.value = "";
        if (setAuPermsAppCombo) setAuPermsAppCombo("");
        renderAUPermsAppPicker();
        renderAUPermsCards();
      });
    }
    if (auPermsCardsEl) {
      /* ─── Access Level EDL dropdown (per card) ───
         Reuses the shared `.cr-dd` open/close + layered-menu helpers
         (same pattern as Create Role's access-level dropdown). Native
         <select> was retired in favour of this so the menu uses EDL
         styling instead of the OS dropdown. */
      function closeAuPermsAccessDD(dd) {
        if (!dd) return;
        if (typeof detachCrDdLayeredMenu === "function") detachCrDdLayeredMenu(dd);
        dd.classList.remove("open");
        var trigger = dd.querySelector(".au-perms-access-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
      function closeAllAuPermsAccessDDs(except) {
        var open = auPermsCardsEl.querySelectorAll(".au-perms-access-dd.open");
        for (var i = 0; i < open.length; i++) {
          if (except && open[i] === except) continue;
          closeAuPermsAccessDD(open[i]);
        }
      }
      function openAuPermsAccessDD(dd) {
        if (!dd) return;
        closeAllAuPermsAccessDDs(dd);
        dd.classList.add("open");
        var trigger = dd.querySelector(".au-perms-access-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "true");
        if (typeof attachCrDdLayeredMenu === "function") attachCrDdLayeredMenu(dd);
      }

      auPermsCardsEl.addEventListener("click", function (e) {
        var removeBtn = e.target.closest("[data-au-perms-remove]");
        if (removeBtn) {
          var ri = parseInt(removeBtn.getAttribute("data-au-perms-remove"), 10);
          if (!isNaN(ri) && ri >= 0 && ri < auPermsState.assignments.length) {
            auPermsState.assignments.splice(ri, 1);
            renderAUPermsAppPicker();
            renderAUPermsCards();
          }
          return;
        }
        var toggleBtn = e.target.closest("[data-au-perms-toggle]");
        if (toggleBtn) {
          var ti = parseInt(toggleBtn.getAttribute("data-au-perms-toggle"), 10);
          if (!isNaN(ti) && auPermsState.assignments[ti]) {
            auPermsState.assignments[ti].expanded = !auPermsState.assignments[ti].expanded;
            renderAUPermsCards();
          }
          return;
        }
        var accessTrigger = e.target.closest(".au-perms-access-trigger");
        if (accessTrigger) {
          e.stopPropagation();
          var hostDd = accessTrigger.closest(".au-perms-access-dd");
          if (!hostDd) return;
          if (hostDd.classList.contains("open")) closeAuPermsAccessDD(hostDd);
          else openAuPermsAccessDD(hostDd);
        }
      });

      /* Option clicks come from the menu, which `attachCrDdLayeredMenu`
         portals to <body>, so we listen on document for the option
         click and use [data-au-perms-access-option] to disambiguate
         from Create Role's access-level menu. */
      document.addEventListener("click", function (e) {
        var opt = e.target.closest("[data-au-perms-access-option]");
        if (!opt) return;
        var menu = opt.closest(".au-perms-access-menu");
        if (!menu) return;
        var idx = parseInt(menu.getAttribute("data-au-perms-access-idx"), 10);
        if (isNaN(idx) || !auPermsState.assignments[idx]) return;
        var newVal = opt.getAttribute("data-au-perms-access-value");
        if (!newVal) return;
        auPermsState.assignments[idx].access = newVal;
        /* Rebuild just the visible card so the trigger label + the
           menu's is-selected/aria-selected stay in sync. */
        renderAUPermsCards();
      });

      /* Close all access DDs on outside click or Escape. The outside
         test must also account for the layered menu, which is portalled
         to <body> (so it is not inside .au-perms-card). */
      document.addEventListener("click", function (e) {
        var inDd = e.target.closest(".au-perms-access-dd");
        var inMenu = e.target.closest(".au-perms-access-menu");
        if (inDd || inMenu) return;
        closeAllAuPermsAccessDDs();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeAllAuPermsAccessDDs();
      });
    }

    if (auStatusSeg) {
      auStatusSeg.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-au-status]");
        if (!btn) return;
        var val = btn.getAttribute("data-au-status");
        if (val === "Inactive") {
          if (auStatusValue && auStatusValue.value === "Active") {
            openAuInactiveConfirm();
          }
          return;
        }
        if (val === "Active") {
          setAUStatus("Active");
        }
      });
    }

    if (auInactiveConfirmCancel) {
      auInactiveConfirmCancel.addEventListener("click", function () {
        cancelAuInactivePending();
      });
    }
    if (auInactiveConfirmPrimary) {
      auInactiveConfirmPrimary.addEventListener("click", function () {
        confirmAuInactive();
      });
    }
    if (auInactiveConfirmBackdrop) {
      auInactiveConfirmBackdrop.addEventListener("click", function (e) {
        if (e.target === auInactiveConfirmBackdrop) cancelAuInactivePending();
      });
    }

    window.__cancelAuInactiveModal = cancelAuInactivePending;
    window.__closeAuRemoveUserModal = function () {
      if (auRemoveUserBackdrop && !auRemoveUserBackdrop.hasAttribute("hidden")) closeAuRemoveUserConfirm();
    };

    if (auRemoveUser) {
      auRemoveUser.addEventListener("click", function () {
        openAuRemoveUserConfirm();
      });
    }
    if (auRemoveUserCancel) {
      auRemoveUserCancel.addEventListener("click", function () {
        closeAuRemoveUserConfirm();
      });
    }
    if (auRemoveUserConfirm) {
      auRemoveUserConfirm.addEventListener("click", function () {
        confirmRemoveEditedUser();
      });
    }
    if (auRemoveUserBackdrop) {
      auRemoveUserBackdrop.addEventListener("click", function (e) {
        if (e.target === auRemoveUserBackdrop) closeAuRemoveUserConfirm();
      });
    }

    var tbodyUsers = document.getElementById("tbody");
    if (tbodyUsers) {
      tbodyUsers.addEventListener("click", function (e) {
        var link = e.target.closest("a.name-link");
        if (!link || !tbodyUsers.contains(link)) return;
        e.preventDefault();
        var uid = link.getAttribute("data-user-id");
        if (uid && findUserInOriginalById(uid)) openEditUserForId(uid);
      });
    }

    var auToggleHeaders = addUsersPage.querySelectorAll(".cr-section-header[data-au-toggle]");
    for (var ahi = 0; ahi < auToggleHeaders.length; ahi++) {
      (function (hdr) {
        hdr.addEventListener("click", function (e) {
          var nested = e.target.closest && e.target.closest("button, a, input, select, textarea");
          if (nested && hdr.contains(nested) && nested !== hdr) return;
          auToggleSection(hdr);
        });
        hdr.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            auToggleSection(hdr);
          }
        });
      })(auToggleHeaders[ahi]);
    }

    var auSummaryInputs = [auFirstName, auLastName, auPreferredName, auEmail];
    for (var sii = 0; sii < auSummaryInputs.length; sii++) {
      if (auSummaryInputs[sii]) auSummaryInputs[sii].addEventListener("input", updateAuSummaries);
    }

    if (addUsersBtn) {
      addUsersBtn.addEventListener("click", function (e) {
        e.preventDefault();
        /* Two-step search/select modal now gates entry to the Add User
           page (Figma 1023:22290 / 1023:22735) — falls back to the old
           direct-open behavior if the modal markup is ever missing. */
        if (typeof auAddUserOpen === "function" && auAddUserModalBackdrop) {
          auAddUserOpen();
        } else {
          openAddUsers();
        }
      });
    }
    if (auBack) auBack.addEventListener("click", closeAddUsers);
    if (auCancel) auCancel.addEventListener("click", closeAddUsers);
    if (auSave) auSave.addEventListener("click", handleSaveUser);
  })();

  /* ═══ ROLES & PERMISSIONS TABLE RENDERING ═══ */
  var EDIT_SVG = '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"/></svg>';
  var DELETE_SVG = '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';

  /* R&P Functions column renders semantic access labels per app. */

  function formatFunctions(fns, roleId) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) {
      parts.push(rpFuncGroupHtml(fns[i], roleId));
    }
    return parts.join(", ");
  }

  function rpFuncGroupHtml(fn, roleId) {
    var app = fn.name;
    var display = RP_FUNC_DISPLAY_NAME[app] || app;
    var access = fn.access || roleAccessLevel(roleId, app);
    return (
      '<span class="rp-func-group">' +
        '<span class="rp-func-app">' + esc(display) + "</span> " +
        '<button type="button" class="rp-func-link" ' +
          'data-role-id="' + esc(roleId) + '" ' +
          'data-app="' + esc(app) + '" ' +
          'data-access="' + esc(access) + '" ' +
          'aria-haspopup="dialog" aria-expanded="false">' +
            '<span class="rp-func-access">(' + esc(access) + ")</span>" +
          "</button>" +
      "</span>"
    );
  }

  function rpFuncGroupLabel(fn) {
    var display = RP_FUNC_DISPLAY_NAME[fn.name] || fn.name;
    return display + " (" + (fn.access || "") + ")";
  }

  function rpFuncRenderCell(cell, fns, roleId, visibleCount) {
    var visible = fns.slice(0, visibleCount);
    var hidden = fns.slice(visibleCount);
    var parts = [];
    for (var i = 0; i < visible.length; i++) parts.push(rpFuncGroupHtml(visible[i], roleId));
    if (hidden.length) {
      var tipLines = [];
      for (var k = 0; k < hidden.length; k++) tipLines.push(rpFuncGroupLabel(hidden[k]));
      var tipAttr = esc(tipLines.join("\n")).replace(/"/g, "&quot;");
      parts.push(
        '<button type="button" class="rp-func-more" data-tooltip="' + tipAttr +
          '" aria-label="' + hidden.length + ' more functions" tabindex="0">...' +
          hidden.length + " more</button>"
      );
    }
    var text = cell.querySelector(".rp-func-text");
    if (text) text.innerHTML = parts.join(", ");
  }

  function rpFuncCellFits(cell) {
    var span = cell.querySelector(".rp-func-text");
    if (!span) return true;
    return span.scrollWidth <= cell.clientWidth + 1;
  }

  function rpFuncApplyOverflow() {
    var table = document.getElementById("rpTable");
    if (!table || table.offsetParent === null) return;
    var cells = table.querySelectorAll("td.rp-func");
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var raw = cell.getAttribute("data-rp-func-groups");
      var roleId = cell.getAttribute("data-role-id");
      if (!raw) continue;
      var fns;
      try { fns = JSON.parse(raw); } catch (_e) { continue; }
      if (!fns || !fns.length) continue;
      rpFuncRenderCell(cell, fns, roleId, fns.length);
      var n = fns.length;
      while (n > 1 && !rpFuncCellFits(cell)) {
        n -= 1;
        rpFuncRenderCell(cell, fns, roleId, n);
      }
    }
  }

  if (window.IAM && IAM.evenColumns) {
    IAM.evenColumns.onApplied = function () {
      rpFuncApplyOverflow();
    };
  }

  function getFunctionsText(fns) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) {
      var app = fns[i].name;
      var display = RP_FUNC_DISPLAY_NAME[app] || app;
      parts.push(display + " " + (fns[i].access || ""));
    }
    return parts.join(", ");
  }

  function getRPFilteredData() {
    var result = ROLES_PERMISSIONS_DATA;
    if (rpSearchTerm) {
      /* Mirrors the Users tab search (see getFilteredData): iterate a
         flat field list for simple string columns, then scan the
         functions array separately. Case-insensitive substring match;
         single query string (no token splitting), identical to Users.
         Matches against every visible R&P column (Role, Description,
         Functions, Created By, Create Date) plus the underlying Status
         value so the filter covers all meaningful row content. */
      var q = rpSearchTerm.toLowerCase();
      result = result.filter(function (row) {
        for (var i = 0; i < RP_SEARCH_FIELDS.length; i++) {
          if ((row[RP_SEARCH_FIELDS[i]] || "").toLowerCase().indexOf(q) !== -1) return true;
        }
        for (var f = 0; f < row.functions.length; f++) {
          var fn = row.functions[f];
          if ((fn.name || "").toLowerCase().indexOf(q) !== -1) return true;
          if ((fn.access || "").toLowerCase().indexOf(q) !== -1) return true;
        }
        return false;
      });
    }
    /* Drawer filters — AND-combined with each other and with the search.
       Each guard is a pure "not set → skip" check so an empty drawer
       leaves the dataset untouched. */
    if (typeof rpFilters !== "undefined") {
      if (rpFilters.role) {
        var qRole = rpFilters.role.toLowerCase();
        result = result.filter(function (r) { return r.role.toLowerCase().indexOf(qRole) !== -1; });
      }
      if (rpFilters.description) {
        var qDesc = rpFilters.description.toLowerCase();
        result = result.filter(function (r) { return r.description.toLowerCase().indexOf(qDesc) !== -1; });
      }
      if (rpFilters.functions) {
        var key = rpFunctionsFilterKeyFromLabel(rpFilters.functions);
        result = result.filter(function (r) {
          for (var i = 0; i < r.functions.length; i++) if (r.functions[i].name === key) return true;
          return false;
        });
      }
      if (rpFilters.createdBy) {
        result = result.filter(function (r) { return r.createdBy === rpFilters.createdBy; });
      }
      if (rpFilters.createDate) {
        /* Native <input type="date"> returns YYYY-MM-DD; row.createDate is
           MM/DD/YYYY. Normalise to MM/DD/YYYY for exact-day comparison. */
        var p = rpFilters.createDate.split("-");
        var target = p[1] + "/" + p[2] + "/" + p[0];
        result = result.filter(function (r) { return r.createDate === target; });
      }
    }
    return result;
  }

  function getRPPageData() {
    var filtered = getRPFilteredData();
    var start = (rpCurrentPage - 1) * rpPageSize;
    return filtered.slice(start, start + rpPageSize);
  }

  function renderRPTable() {
    var rows = getRPPageData();
    var tb = document.getElementById("rpTbody");
    if (rows.length === 0) {
      tb.innerHTML = '<tr><td colspan="4" class="empty-state">No results found</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var roleCell = '<a class="rp-role-link" href="#" data-role-edit="' + esc(r.id) + '">' + esc(r.role) + '</a>';
      /* Roles table rows (Figma 770:19301, with the per-row checkbox
         intentionally removed — this page does not support bulk
         selection / bulk actions). Role link remains the row entry
         point into the Create / Edit Role flow. */
      html += '<tr data-id="' + esc(r.id) + '">' +
        '<td class="rp-role" title="' + esc(r.role) + '">' + roleCell + '</td>' +
        '<td class="rp-func" data-role-id="' + esc(r.id) + '" data-rp-func-groups="' +
          esc(JSON.stringify(r.functions)).replace(/"/g, "&quot;") +
          '"><span class="rp-func-text">' + formatFunctions(r.functions, r.id) + "</span></td>" +
        '<td class="rp-by">' + esc(r.createdBy) + '</td>' +
        '<td class="rp-date">' + esc(r.createDate) + '</td>' +
        '</tr>';
    }
    tb.innerHTML = html;
    if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule();
    else rpFuncApplyOverflow();
  }

  function rpTotalPages() {
    return Math.max(1, Math.ceil(getRPFilteredData().length / rpPageSize));
  }

  function renderRPPagination() {
    var tp = rpTotalPages();
    var pgNums = document.getElementById("rpPgNums");
    var btns = [];
    if (tp <= 7) {
      for (var i = 1; i <= tp; i++) btns.push(i);
    } else {
      btns.push(1);
      if (rpCurrentPage > 3) btns.push("...");
      var lo = Math.max(2, rpCurrentPage - 1);
      var hi = Math.min(tp - 1, rpCurrentPage + 1);
      if (rpCurrentPage <= 3) { lo = 2; hi = 4; }
      if (rpCurrentPage >= tp - 2) { lo = tp - 3; hi = tp - 1; }
      for (var j = lo; j <= hi; j++) btns.push(j);
      if (rpCurrentPage < tp - 2) btns.push("...");
      btns.push(tp);
    }
    var html = "";
    for (var k = 0; k < btns.length; k++) {
      if (btns[k] === "...") {
        html += '<span class="pg-dots">\u2026</span>';
      } else {
        html += '<button class="pg-n' + (btns[k] === rpCurrentPage ? " on" : "") + '" data-rp-pg="' + btns[k] + '">' + btns[k] + '</button>';
      }
    }
    pgNums.innerHTML = html;

    var navFirst = document.querySelector('#rpPgnPages [data-rp-nav="first"]');
    var navPrev  = document.querySelector('#rpPgnPages [data-rp-nav="prev"]');
    var navNext  = document.querySelector('#rpPgnPages [data-rp-nav="next"]');
    var navLast  = document.querySelector('#rpPgnPages [data-rp-nav="last"]');
    navFirst.classList.toggle("off", rpCurrentPage === 1);
    navPrev.classList.toggle("off", rpCurrentPage === 1);
    navNext.classList.toggle("off", rpCurrentPage === tp);
    navLast.classList.toggle("off", rpCurrentPage === tp);

    var filteredCount = getRPFilteredData().length;
    document.getElementById("rpItemCount").textContent = "of " + filteredCount + " items";
    /* Total roles has to be derived here for the same reason Users and
       Teams derive theirs: index.html can only carry a literal, and a
       literal goes stale the moment the role set changes — it still read
       "11" after the workbook migration left eight canonical roles, so
       the footer contradicted the "of 8 items" count beside it. */
    var rpTotalLabel = document.getElementById("rpTotalLabel");
    if (rpTotalLabel) rpTotalLabel.textContent = "Total roles: " + filteredCount;

    var rpJumpMenu = document.getElementById("rpJumpMenu");
    var rpJumpValue = document.getElementById("rpJumpValue");
    if (rpJumpMenu && rpJumpValue) {
      var jhtml = "";
      for (var pj = 1; pj <= tp; pj++) {
        jhtml += '<div class="cr-dd-option' + (pj === rpCurrentPage ? " is-selected" : "") + '" role="option" data-rp-jump="' + pj + '">' + pj + "</div>";
      }
      rpJumpMenu.innerHTML = jhtml;
      rpJumpValue.textContent = String(rpCurrentPage);
    }
    var rpPageSizeMenu = document.getElementById("rpPageSizeMenu");
    var rpPageSizeValue = document.getElementById("rpPageSizeValue");
    if (rpPageSizeMenu && rpPageSizeValue) {
      var sizes = [10, 25, 50];
      var pshtml = "";
      for (var si = 0; si < sizes.length; si++) {
        var ns = sizes[si];
        pshtml += '<div class="cr-dd-option' + (ns === rpPageSize ? " is-selected" : "") + '" role="option" data-rp-psize="' + ns + '">' + ns + "</div>";
      }
      rpPageSizeMenu.innerHTML = pshtml;
      rpPageSizeValue.textContent = String(rpPageSize);
    }
  }

  function rpGoToPage(pg) {
    var tp = rpTotalPages();
    pg = Math.max(1, Math.min(pg, tp));
    if (pg === rpCurrentPage) return;
    rpCurrentPage = pg;
    renderRPTable();
    renderRPPagination();
  }

  function applyRPSort(key) {
    if (rpSortKey === key) {
      if (rpSortDir === "asc") rpSortDir = "desc";
      else if (rpSortDir === "desc") { rpSortDir = null; rpSortKey = null; }
    } else {
      rpSortKey = key;
      rpSortDir = "asc";
    }
    if (!rpSortKey) {
      ROLES_PERMISSIONS_DATA = RP_ORIGINAL_ORDER.slice();
    } else {
      ROLES_PERMISSIONS_DATA.sort(function (a, b) {
        var va, vb;
        if (rpSortKey === "functions") {
          va = getFunctionsText(a.functions);
          vb = getFunctionsText(b.functions);
        } else {
          va = a[rpSortKey] || "";
          vb = b[rpSortKey] || "";
        }
        va = va.toLowerCase();
        vb = vb.toLowerCase();
        if (va < vb) return rpSortDir === "asc" ? -1 : 1;
        if (va > vb) return rpSortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
    updateRPSortHeaders();
  }

  function updateRPSortHeaders() {
    var ths = document.querySelectorAll("th[data-rp-sort]");
    for (var i = 0; i < ths.length; i++) {
      ths[i].classList.remove("sort-asc", "sort-desc");
      var isActive = rpSortKey && ths[i].dataset.rpSort === rpSortKey;
      if (isActive) {
        if (rpSortDir === "asc") ths[i].classList.add("sort-asc");
        else if (rpSortDir === "desc") ths[i].classList.add("sort-desc");
      }
      // Accessible sort state — same WAI-ARIA table-sort pattern used by
      // the Users table's updateSortHeaders(), via the shared component.
      if (ths[i].hasAttribute("aria-sort")) {
        ths[i].setAttribute(
          "aria-sort",
          isActive ? (rpSortDir === "asc" ? "ascending" : "descending") : "none"
        );
      }
      var labelEl = ths[i].querySelector(".th-inner > span:first-child");
      if (labelEl) {
        ths[i].setAttribute("aria-label", sortHeaderA11yLabel(labelEl.textContent.trim(), isActive, rpSortDir));
      }
    }
  }

  /* ─── R&P Sort header clicks + keyboard ───
     Mirrors the Users table's thead click/keydown pair (shared
     component, see initSortableHeaders()) so both sortable tables
     have identical click-target and keyboard behavior. */
  var rpThead = document.querySelector(".rp-tbl thead");
  if (rpThead) {
    rpThead.addEventListener("click", function (e) {
      var th = e.target.closest("th[data-rp-sort]");
      if (th) applyRPSort(th.dataset.rpSort);
    });
    rpThead.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      var th = e.target.closest("th[data-rp-sort][tabindex]");
      if (!th) return;
      e.preventDefault();
      applyRPSort(th.dataset.rpSort);
    });
  }

  /* ─── R&P Row selection ─────────────────────────────────────────
     Intentionally not implemented. The Roles table is a navigation /
     read-and-edit surface — clicking a role name opens the role
     detail; there is no bulk-action toolbar, no select-all behavior,
     and no per-row checkboxes. (Header + row checkboxes removed
     2026-05-29 per Frances QA on this tab.) Role-link click → Edit
     Role wiring lives further down via `document.getElementById('rpTbody')`. */

  /* Standalone Permission Catalog render / sort / pagination /
     status-chip / used-in helpers (getPMFilteredData,
     getPMSortedData, getPMPageData, pmTotalPages, renderPMTable,
     renderPMPagination, pmGoToPage, applyPMSort,
     updatePMSortHeaders, pmUsedInCell, pmStatusChipHtml) and the
     `pmThead` sort-header listener were REMOVED 2026-06-07 along
     with the Permissions / Functions tab. Edit Role's permission
     matrix (built from `derivePMResourcesForApp` /
     `pmGroupsForAppToken` / FUNCTION_REGISTRY / PC_GROUP_FOR_KEY /
     PC_POOL_BY_GROUP) is intentionally KEPT and unchanged. */

  /* PM Catalog row click / keydown — removed Frances QA 2026-05-29.
     The catalog is intentionally non-interactive; rows are pure
     data and never open a drawer or detail page. */

  /* ─── Permission Capability detail page (Figma 788:4348) ───
     Renders the detail view for the permission function the user
     clicked on the Permission Management table. Reuses the
     .cr-page / .cr-card shell so chrome, spacing, and back-button
     rhythm match #createRolePage / #addUsersPage.

     This page is intentionally NOT a Role-assignment surface — see
     Tatiana's note in the 2026-05-20 spec. It exposes only:
       • Basic Information (identity + lightweight metadata)
       • Permission Options (one group, its action pool, checked
         actions for this specific function key)
     No assigned-role chips, no capability-details panel, no registry
     metadata section. Role assignment stays on its own tab. */
  var pcDetailPage    = document.getElementById("pcDetailPage");
  var pcBackBtn       = document.getElementById("pcBack");
  var pcCancelBtn     = document.getElementById("pcCancel");
  var pcPermNameInput = document.getElementById("pcPermName");
  var pcCreatedByInput= document.getElementById("pcCreatedBy");
  var pcDescInput     = document.getElementById("pcDesc");
  var pcLastUpdatedEl = document.getElementById("pcLastUpdated");
  var pcGroupsEl      = document.getElementById("pcGroups");
  /* Choose Application dropdown (Figma 788:4348 dropdown control).
     Reuses .cr-dd / .cr-dd-menu / .cr-dd-option from Create Role. */
  var pcAppDD         = document.getElementById("pcAppDD");
  var pcAppTrigger    = document.getElementById("pcAppTrigger");
  var pcAppValueEl    = document.getElementById("pcAppValue");
  /* Add Permission Group dropdown (renamed from "Add permission" per
     2026-05-20 spec — it selects a group like Order / Roles / Users). */
  var pcAddGroupDD      = document.getElementById("pcAddGroupDD");
  var pcAddGroupTrigger = document.getElementById("pcAddGroupTrigger");
  var pcAddGroupValueEl = document.getElementById("pcAddGroupValue");
  var pcAddBtn          = document.getElementById("pcAddBtn");
  /* Default Access level dropdown — was a disabled input until
     2026-05-21; the Permission Capability authoring spec requires a
     working preset picker (Full Access / Read Only / Standard Access
     / Custom) that drives the action checkboxes below. */
  var pcAccessLevelDD       = document.getElementById("pcAccessLevelDD");
  var pcAccessLevelTrigger  = document.getElementById("pcAccessLevelTrigger");
  var pcAccessLevelValueEl  = document.getElementById("pcAccessLevelValue");
  var pcSaveBtn             = document.getElementById("pcSave");

  /* Preset definitions for the access-level dropdown. `allow: null`
     means "every action in the group's PC pool" (= Full Access).
     `allow: [...]` filters the pool down to the listed action labels.
     Custom is intentionally omitted from this map — it is the "do
     not touch checkboxes" state and is handled as a no-op preset.

     Alignment with the workbook role patterns (see ROLE_FUNCTION_MAP):
       • Full Access     — every CRUD + governance verb on each
         group's pool, as ACP Vendor Planning Specialist holds over
         Core Planning.
       • Read Only       — mirrors the Role Assignment "View Only"
         bundle (View action only), as ACP Viewer holds.
       • Standard Access — the everyday operating range: browse +
         author + edit (list/get/create/update). Maps cleanly to the
         Role Assignment "Edit" bundle.
       • Custom          — hand-tuned grants where the action grid
         does not fit a named bundle, as ACP Planner's Core Planning
         pool does. */
  var PC_LEVEL_OPTIONS = ["Full Access", "Read Only", "Standard Access", "Custom"];
  var PC_PRESET_ALLOW = {
    "Full Access":     null,
    "Read Only":       ["View"],
    "Standard Access": ["View", "Create", "Edit"]
  };

  /* Edits made before the page finishes seeding from a row click
     should not flip the Save Permission button to enabled — set true
     during openPermissionDetail() and cleared once seeding completes. */
  var pcInitializing = false;

  /* Build a .cr-dd menu inside `host` from a string[] of labels. The
     selected label is matched by textContent (no hidden value attr
     needed — the value === the label since both fields are display
     names, not opaque ids).

     `onSelect` is attached as a click handler on the menu element
     itself (not on `host`) — because `attachCrDdLayeredMenu` portals
     the menu to document.body when opened, after which clicks on
     options no longer bubble through `host`. This mirrors Create
     Role, which also binds its option click handler to `crAppMenu`. */
  function pcBuildDDMenu(host, menuId, options, onSelect) {
    if (!host) return null;
    /* If host's menu lives in document.body (portaled), remove from
       there too; otherwise remove from host. */
    var existing = document.getElementById(menuId);
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    var menu = document.createElement("div");
    menu.id = menuId;
    menu.className = "cr-dd-menu";
    menu.setAttribute("role", "listbox");
    for (var i = 0; i < options.length; i++) {
      var row = document.createElement("div");
      row.className = "cr-dd-option";
      row.setAttribute("role", "option");
      row.setAttribute("data-value", options[i]);
      row.textContent = options[i];
      menu.appendChild(row);
    }
    host.appendChild(menu);
    if (typeof onSelect === "function") {
      menu.addEventListener("click", function (e) {
        var opt = e.target.closest(".cr-dd-option");
        if (!opt || opt.classList.contains("is-disabled")) return;
        onSelect(opt.getAttribute("data-value"));
      });
    }
    return menu;
  }
  var pcAppMenu = pcBuildDDMenu(pcAppDD, "pcAppMenu", PC_APPS, function (value) {
    pcSetAppValue(value);
    pcCloseDD(pcAppDD);
    /* Changing the app rebinds which groups can be added going
       forward — a user-initiated change is a real edit to the
       capability's metadata, so flag the form dirty. Seeding paths
       (openPermissionDetail) skip this via pcInitializing. */
    pcMarkDirty();
  });
  var pcAddGroupMenu = null; /* built on first app-select via pcSetAppValue */
  var pcSelectedApp = "";
  var pcSelectedGroup = "";

  function pcSetAppValue(value) {
    var previousApp = pcSelectedApp;
    pcSelectedApp = value || "";
    var opts = pcAppMenu ? pcAppMenu.querySelectorAll(".cr-dd-option") : [];
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].getAttribute("data-value") === value) opts[i].classList.add("is-selected");
      else opts[i].classList.remove("is-selected");
    }
    if (pcAppValueEl) {
      if (value) {
        pcAppValueEl.textContent = value;
        pcAppValueEl.classList.remove("is-placeholder");
      } else {
        pcAppValueEl.textContent = "Select Application";
        pcAppValueEl.classList.add("is-placeholder");
      }
    }
    /* Refresh the Permission Group dropdown to match the selected app
       (per spec: "selected application should drive available
       permission groups where applicable"). Reset the group selection
       because the previously-picked group may not belong to the new
       app's catalog. */
    var groups = (PC_GROUPS_BY_APP[value] || []).slice();
    pcAddGroupMenu = pcBuildDDMenu(pcAddGroupDD, "pcAddGroupMenu", groups, function (groupValue) {
      pcSetGroupValue(groupValue);
      pcCloseDD(pcAddGroupDD);
    });
    pcSetGroupValue("");
    /* Update placeholder hints to match the new application's verb
       vocabulary. Only the placeholder changes; populated fields
       keep their values so an existing capability's name/description
       are never overwritten by an app switch. */
    var hint = PC_APP_HINTS[value];
    if (hint) {
      if (pcPermNameInput) pcPermNameInput.setAttribute("placeholder", hint.name);
      if (pcDescInput)     pcDescInput.setAttribute("placeholder",     hint.desc);
    }
    /* On a user-initiated app change (seeding from openPermissionDetail
       is guarded by pcInitializing), the existing permission group
       cards belong to the previous app's catalog and no longer apply.
       Clear them so the capability starts fresh against the new app's
       group/action vocabulary — the user can re-add groups from the
       refreshed picker above. */
    if (!pcInitializing && previousApp && previousApp !== pcSelectedApp && pcGroupsEl) {
      pcGroupsEl.innerHTML = "";
      /* No cards → access level reverts to the "Full Access" baseline
         (vacuous-truth case in pcDetectLevel). */
      pcSetAccessLevelValue("Full Access");
    }
  }

  function pcSetGroupValue(value) {
    pcSelectedGroup = value || "";
    var opts = pcAddGroupMenu ? pcAddGroupMenu.querySelectorAll(".cr-dd-option") : [];
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].getAttribute("data-value") === value) opts[i].classList.add("is-selected");
      else opts[i].classList.remove("is-selected");
    }
    if (pcAddGroupValueEl) {
      if (value) {
        pcAddGroupValueEl.textContent = value;
        pcAddGroupValueEl.classList.remove("is-placeholder");
      } else {
        pcAddGroupValueEl.textContent = "Select a group";
        pcAddGroupValueEl.classList.add("is-placeholder");
      }
    }
    if (pcAddBtn) pcAddBtn.disabled = !pcSelectedGroup;
  }

  function pcCloseDD(dd) {
    if (!dd) return;
    if (typeof detachCrDdLayeredMenu === "function") detachCrDdLayeredMenu(dd);
    dd.classList.remove("open");
    var trigger = dd.querySelector(".cr-dd-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }
  function pcOpenDD(dd) {
    if (!dd) return;
    /* Close the other PC dropdown so they never overlap. */
    if (dd === pcAppDD) pcCloseDD(pcAddGroupDD);
    else if (dd === pcAddGroupDD) pcCloseDD(pcAppDD);
    dd.classList.add("open");
    var trigger = dd.querySelector(".cr-dd-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    if (typeof attachCrDdLayeredMenu === "function") attachCrDdLayeredMenu(dd);
  }

  if (pcAppTrigger) {
    pcAppTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (pcAppDD.classList.contains("open")) pcCloseDD(pcAppDD);
      else pcOpenDD(pcAppDD);
    });
  }
  if (pcAddGroupTrigger) {
    pcAddGroupTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (pcAddGroupDD.classList.contains("open")) pcCloseDD(pcAddGroupDD);
      else pcOpenDD(pcAddGroupDD);
    });
  }
  /* Outside click + Esc close both PC dropdowns. The portaled menu
     lives outside `pcAppDD`/`pcAddGroupDD`, so check both the host
     and the menu element via id lookup (menu can be in body). */
  document.addEventListener("click", function (e) {
    if (pcAppDD && !pcAppDD.contains(e.target)) {
      var am = document.getElementById("pcAppMenu");
      if (!am || !am.contains(e.target)) pcCloseDD(pcAppDD);
    }
    if (pcAddGroupDD && !pcAddGroupDD.contains(e.target)) {
      var gm = document.getElementById("pcAddGroupMenu");
      if (!gm || !gm.contains(e.target)) pcCloseDD(pcAddGroupDD);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    pcCloseDD(pcAppDD);
    pcCloseDD(pcAddGroupDD);
  });

  /* Append a new empty group card when Add is clicked. Uses the same
     .pc-grp-card HTML shape as renderPCGroups so the chevron/Delete
     handlers (already bound to #pcGroups) light up automatically. */
  function pcAppendGroupCard(groupName) {
    if (!pcGroupsEl) return;
    var pool = PC_POOL_BY_GROUP[groupName] || ["View"];
    var html = '<div class="pc-grp-card" data-pc-group="' + esc(groupName) + '">';
    html +=   '<div class="pc-grp-header">';
    html +=     '<button type="button" class="pc-grp-header-left" data-pc-grp-toggle aria-expanded="true">';
    html +=       '<svg class="pc-grp-chev" width="2" height="2" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';
    html +=       '<span>' + esc(groupName) + '</span>';
    html +=     '</button>';
    html +=     '<button type="button" class="pc-grp-delete" data-pc-grp-delete aria-label="Delete ' + esc(groupName) + ' group">';
    html +=       '<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';
    html +=       '<span>Delete</span>';
    html +=     '</button>';
    html +=   '</div>';
    html +=   '<div class="pc-chk-row">';
    for (var i = 0; i < pool.length; i++) {
      html += '<label class="pc-chk-item">';
      html +=   '<input type="checkbox" class="pc-chk" data-pc-action="' + esc(pool[i]) + '">';
      html +=   '<span>' + esc(pool[i]) + '</span>';
      html += '</label>';
    }
    html +=   '</div>';
    html += '</div>';
    pcGroupsEl.insertAdjacentHTML("beforeend", html);
  }
  if (pcAddBtn) {
    pcAddBtn.addEventListener("click", function () {
      if (!pcSelectedGroup) return;
      pcAppendGroupCard(pcSelectedGroup);
      pcSetGroupValue("");
      /* New card starts with every action unchecked, so the current
         level (which was likely a preset) no longer matches. Drop to
         Custom and mark the capability dirty so Save Permission can
         enable. */
      pcSetAccessLevelValue("Custom");
      pcMarkDirty();
    });
  }

  /* ─── Dirty state + Default Access Level preset wiring ─── */

  /* Enable / disable the Save Permission button. pcInitializing
     guards openPermissionDetail() — programmatic seeding (setting
     name / app / description / etc.) must never flip Save to enabled. */
  function pcMarkDirty() {
    if (pcInitializing) return;
    if (pcSaveBtn) pcSaveBtn.disabled = false;
  }
  function pcMarkClean() {
    if (pcSaveBtn) pcSaveBtn.disabled = true;
  }

  /* Update only the dropdown trigger label + selected option marker.
     Does NOT touch checkboxes — separate from pcApplyAccessLevel
     which does the bulk update. Use this when the checkboxes have
     already been mutated independently and we just need the displayed
     level to track. */
  function pcSetAccessLevelValue(levelName) {
    if (!pcAccessLevelValueEl) return;
    pcAccessLevelValueEl.textContent = levelName || "Full Access";
    var menu = document.getElementById("pcAccessLevelMenu");
    if (!menu) return;
    var opts = menu.querySelectorAll(".cr-dd-option");
    for (var i = 0; i < opts.length; i++) {
      var selected = opts[i].getAttribute("data-value") === levelName;
      opts[i].classList.toggle("is-selected", selected);
      opts[i].setAttribute("aria-selected", selected ? "true" : "false");
    }
  }

  /* Inspect every group card's checkboxes and return the named level
     that matches, or "Custom" if no preset fits. Order: Full Access
     beats Read Only beats Standard Access (so an empty-pool group
     can still resolve to a sensible preset). */
  function pcDetectLevel() {
    if (!pcGroupsEl) return "Custom";
    var cards = pcGroupsEl.querySelectorAll(".pc-grp-card");
    if (!cards.length) return "Full Access";
    var levels = ["Full Access", "Read Only", "Standard Access"];
    for (var l = 0; l < levels.length; l++) {
      var rule = PC_PRESET_ALLOW[levels[l]];
      var matchAll = true;
      for (var c = 0; c < cards.length && matchAll; c++) {
        var boxes = cards[c].querySelectorAll(".pc-chk");
        var pool = [];
        var checked = [];
        for (var b = 0; b < boxes.length; b++) {
          var a = boxes[b].getAttribute("data-pc-action");
          pool.push(a);
          if (boxes[b].checked) checked.push(a);
        }
        var expected;
        if (rule === null) {
          expected = pool.slice();
        } else {
          expected = [];
          for (var p = 0; p < pool.length; p++) if (rule.indexOf(pool[p]) !== -1) expected.push(pool[p]);
        }
        if (checked.length !== expected.length) { matchAll = false; break; }
        for (var x = 0; x < expected.length; x++) if (checked.indexOf(expected[x]) === -1) { matchAll = false; break; }
      }
      if (matchAll) return levels[l];
    }
    return "Custom";
  }

  /* Bulk-update every group card's checkboxes to match the preset,
     then sync the dropdown label. Custom is a no-op for checkboxes
     (preserves manual selection) — only the label updates. */
  function pcApplyAccessLevel(levelName) {
    if (levelName !== "Custom" && pcGroupsEl) {
      var rule = PC_PRESET_ALLOW[levelName];
      if (rule === undefined) return;
      var cards = pcGroupsEl.querySelectorAll(".pc-grp-card");
      for (var c = 0; c < cards.length; c++) {
        var boxes = cards[c].querySelectorAll(".pc-chk");
        for (var i = 0; i < boxes.length; i++) {
          var a = boxes[i].getAttribute("data-pc-action");
          boxes[i].checked = rule === null ? true : (rule.indexOf(a) !== -1);
        }
      }
    }
    pcSetAccessLevelValue(levelName);
  }

  /* Build the access-level dropdown menu, wired to apply preset +
     mark dirty on user pick. */
  pcBuildDDMenu(pcAccessLevelDD, "pcAccessLevelMenu", PC_LEVEL_OPTIONS, function (value) {
    pcApplyAccessLevel(value);
    pcCloseDD(pcAccessLevelDD);
    pcMarkDirty();
  });
  if (pcAccessLevelTrigger) {
    pcAccessLevelTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (pcAccessLevelDD.classList.contains("open")) pcCloseDD(pcAccessLevelDD);
      else pcOpenDD(pcAccessLevelDD);
    });
  }
  /* Extend outside-click close + Esc close to include this dropdown. */
  document.addEventListener("click", function (e) {
    if (pcAccessLevelDD && !pcAccessLevelDD.contains(e.target)) {
      var m = document.getElementById("pcAccessLevelMenu");
      if (!m || !m.contains(e.target)) pcCloseDD(pcAccessLevelDD);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") pcCloseDD(pcAccessLevelDD);
  });

  /* Text-input edits (Permission Name, Description) mark dirty on
     every keystroke. Created By is `disabled` so it never fires. */
  if (pcPermNameInput) pcPermNameInput.addEventListener("input", pcMarkDirty);
  if (pcDescInput)     pcDescInput.addEventListener("input", pcMarkDirty);

  /* Checkbox edits inside the Permission Options card: auto-resolve
     the displayed level (so a manual change "out of" Full Access
     surfaces as Custom, and a manual change that happens to match a
     preset shows that preset), and mark dirty. */
  if (pcGroupsEl) {
    pcGroupsEl.addEventListener("change", function (e) {
      var t = e.target;
      if (!t || !t.classList || !t.classList.contains("pc-chk")) return;
      pcSetAccessLevelValue(pcDetectLevel());
      pcMarkDirty();
    });
  }

  /* Save Permission — prototype affordance. No persistence layer; the
     click resets the form to clean so the button visibly reflects
     the saved state. A real save would also POST the diff. */
  if (pcSaveBtn) {
    pcSaveBtn.addEventListener("click", function () {
      if (pcSaveBtn.disabled) return;
      pcMarkClean();
    });
  }

  /* Find a row in the materialized catalog by its synthetic id (p001…).
     Returns null if no match — caller treats that as a no-op so a stale
     link cannot crash the page. */
  function findPMRowById(rowId) {
    for (var i = 0; i < PERMISSION_FUNCTIONS_DATA.length; i++) {
      if (PERMISSION_FUNCTIONS_DATA[i].id === rowId) return PERMISSION_FUNCTIONS_DATA[i];
    }
    return null;
  }

  /* Render the option-group card(s) for the given permission row. The
     model is one group per row (see permissionOptionsForKey), but the
     container is built as a list so future capabilities that bundle
     multiple groups slot in without changing the HTML shape. */
  function renderPCGroups(row) {
    if (!pcGroupsEl) return;
    var model = permissionOptionsForKey(row.key);
    var html = '';
    html += '<div class="pc-grp-card" data-pc-group="' + esc(model.group) + '">';
    html +=   '<div class="pc-grp-header">';
    html +=     '<button type="button" class="pc-grp-header-left" data-pc-grp-toggle aria-expanded="true">';
    html +=       '<svg class="pc-grp-chev" width="2" height="2" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';
    html +=       '<span>' + esc(model.group) + '</span>';
    html +=     '</button>';
    html +=     '<button type="button" class="pc-grp-delete" data-pc-grp-delete aria-label="Delete ' + esc(model.group) + ' group">';
    html +=       '<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';
    html +=       '<span>Delete</span>';
    html +=     '</button>';
    html +=   '</div>';
    html +=   '<div class="pc-chk-row">';
    for (var i = 0; i < model.actions.length; i++) {
      var a = model.actions[i];
      html += '<label class="pc-chk-item">';
      html +=   '<input type="checkbox" class="pc-chk"' + (a.checked ? ' checked' : '') + ' data-pc-action="' + esc(a.label) + '">';
      html +=   '<span>' + esc(a.label) + '</span>';
      html += '</label>';
    }
    html +=   '</div>';
    html += '</div>';
    pcGroupsEl.innerHTML = html;
  }

  function openPermissionDetail(rowId) {
    var row = findPMRowById(rowId);
    if (!row || !pcDetailPage) return;
    /* Guard all seeding so input/dropdown/checkbox listeners do not
       fire markDirty before the user has actually interacted. */
    pcInitializing = true;
    try {
      /* Basic Information */
      if (pcPermNameInput)  pcPermNameInput.value = row.name;
      /* Choose Application is a dropdown — seed it with the row's app,
         which will also refresh the Add Permission Group menu to that
         app's groups via pcSetAppValue(). */
      pcSetAppValue(appDisplayNameForKey(row.key));
      /* Created By is a disabled input — value comes from the static
         Figma placeholder; not derived from row data. */
      if (pcCreatedByInput) pcCreatedByInput.value = "Marge Simpson";
      if (pcDescInput)      pcDescInput.value     = row.description;
      if (pcLastUpdatedEl)  pcLastUpdatedEl.textContent = row.lastUpdated;
      /* Reset the Add Permission Group selection on each open so the
         picker starts empty for this capability. */
      pcSetGroupValue("");
      /* Permission Options */
      renderPCGroups(row);
      /* Auto-resolve the displayed access level from the checkboxes
         renderPCGroups just wrote — e.g. "View IAM Analytics" with
         only View checked surfaces as Read Only; "Assign Function to
         Role" with two scoped actions surfaces as Custom. This is
         how an existing capability's persisted state gets reflected
         in the dropdown without storing a separate level field. */
      pcSetAccessLevelValue(pcDetectLevel());
    } finally {
      pcInitializing = false;
    }
    /* Capability just loaded from source — nothing to save until the
       user touches something. */
    pcMarkClean();
    /* Show the page (matches addUsersPage / createRolePage pattern) */
    var mp = document.querySelector(".page");
    if (mp) mp.style.display = "none";
    var auPage = document.getElementById("addUsersPage");
    var crPage = document.getElementById("createRolePage");
    if (auPage) auPage.style.display = "none";
    if (crPage) crPage.style.display = "none";
    pcDetailPage.style.display = "";
    window.scrollTo(0, 0);
  }

  function closePermissionDetail() {
    if (!pcDetailPage) return;
    pcDetailPage.style.display = "none";
    var mp = document.querySelector(".page");
    if (mp) mp.style.display = "";
    /* The standalone Permissions tab was removed 2026-06-07; this
       page is no longer reachable from any UI today, but if it ever
       gets opened programmatically, return to Users (the default). */
    if (typeof switchTab === "function") switchTab("users");
  }

  if (pcBackBtn)   pcBackBtn.addEventListener("click", closePermissionDetail);
  if (pcCancelBtn) pcCancelBtn.addEventListener("click", closePermissionDetail);

  /* The Permission Capability page lost its last UI entry point when the
     standalone Permissions tab was removed (2026-06-07), but the page and
     its "Delete permission group?" dialog are still live production code.
     This is the navigation hook the Redline overlay gallery uses to reach
     them (see redline-gallery.js) — the same `window.__*` convention the
     modal-close test hooks already use, and read-only with respect to
     every shipped flow. */
  window.__iamOpenPermissionCapability = function (rowId) {
    var row = rowId ? findPMRowById(rowId) : PERMISSION_FUNCTIONS_DATA[0];
    if (!row) return false;
    openPermissionDetail(row.id);
    return true;
  };

  /* Section header chevrons (Basic Information / Permission Options)
     toggle the parent .cr-card collapsed class, matching the existing
     pattern used by Create Role and Add Users. */
  var pcSectionHeaders = pcDetailPage ? pcDetailPage.querySelectorAll(".cr-section-header[data-pc-toggle]") : [];
  for (var pi = 0; pi < pcSectionHeaders.length; pi++) {
    pcSectionHeaders[pi].addEventListener("click", function (e) {
      var card = e.currentTarget.closest(".cr-card");
      if (!card) return;
      card.classList.toggle("collapsed");
      var expanded = !card.classList.contains("collapsed");
      e.currentTarget.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  /* ─── Impacted-roles data model for the Delete permission group dialog ───
     Two sources, used in order:
       1) PM-canonical: derive from ROLE_FUNCTION_MAP — any role that
          has at least one function key in the deleted group will
          break if the group disappears. Access level comes from
          ROLE_ACCESS_LEVELS so the dialog matches Role Assignment's
          "Edit" / "Full Access" / "View Only" / "Custom" vocabulary.
       2) Seeded extras for newly-onboarded admin apps (DCM / UFS /
          HARPS / PAID) — these have no FUNCTION_REGISTRY entries yet,
          so the canonical join returns 0 roles. The seed roles
          mirror the spec's example shape (Sales Planner / Billing
          Operations Analyst / etc.) so the dialog reads as
          enterprise-realistic regardless of which app the deleter
          is on. */
  var APP_DISPLAY_TO_TOKEN = {
    "Identity Access Management":  "IAM",
    "Core Planning":               "Core Planning",
    "Inventory Catalog Manager":   "ICM",
    "Targeting Options Manager":      "TOM",
    "Disney Ads Agent":            "Disney Ads Agent"
  };
  /* Per-app, per-group impacted-role seed for the newly-onboarded
     admin applications. Keyed by display name → group name → role
     list. Status defaults to Active; access levels reuse the four
     PC presets so the dialog and the Default Access Level dropdown
     share vocabulary. Re-using realistic Disney Ads enterprise role
     names (Sales Planner, Billing Operations Analyst, etc.) per the
     spec example. */
  var EXTRA_IMPACTED_ROLES = {
    "Deal Configuration Manager": {
      "Deal Types":     [
        { name: "Deal Operations Manager", access: "Full Access",     status: "Active" },
        { name: "Deal Pricing Analyst",    access: "Standard Access", status: "Active" }
      ],
      "Package Rules": [
        { name: "Deal Operations Manager", access: "Full Access",     status: "Active" }
      ],
      "Pricing Rules": [
        { name: "Deal Pricing Analyst",    access: "Standard Access", status: "Active" }
      ]
    },
    "Unified Financial System": {
      "Billing Periods":   [
        { name: "Finance Controller",         access: "Full Access",     status: "Active" },
        { name: "Billing Operations Analyst", access: "Read Only",       status: "Active" }
      ],
      "Invoice Dashboard": [
        { name: "Billing Operations Analyst", access: "Standard Access", status: "Active" }
      ],
      "Revenue Summary":   [
        { name: "Finance Controller",         access: "Full Access",     status: "Active" }
      ]
    },
    "HARPS": {
      "Revenue":           [
        { name: "Revenue Recognition Analyst", access: "Standard Access", status: "Active" },
        { name: "Finance Controller",          access: "Full Access",     status: "Active" }
      ],
      "Adjustments":       [
        { name: "Revenue Recognition Analyst", access: "Custom",          status: "Active" }
      ],
      "Recognition Rules": [
        { name: "Finance Controller",          access: "Full Access",     status: "Active" }
      ]
    },
    "PAID Invoice Centralization": {
      "Invoices":           [
        { name: "Billing Operations Analyst",   access: "Read Only",       status: "Active" },
        { name: "Invoice Operations Specialist",access: "Standard Access", status: "Active" }
      ],
      "Invoice Line Items": [
        { name: "Invoice Operations Specialist",access: "Standard Access", status: "Active" }
      ],
      "Sales Line Items":   [
        { name: "Billing Operations Analyst",   access: "Read Only",       status: "Active" }
      ],
      "NCS Export":         [
        { name: "Invoice Operations Specialist",access: "Standard Access", status: "Active" }
      ]
    }
  };

  /* Resolve impacted roles for `appDisplay` + `groupName` against the
     PM-canonical role data (ROLES_PERMISSIONS_DATA + ROLE_FUNCTION_MAP
     + PC_GROUP_FOR_KEY + ROLE_ACCESS_LEVELS). Falls back to the seed
     map for apps that have no FUNCTION_REGISTRY footprint. */
  function pcImpactedRolesForGroup(appDisplay, groupName) {
    var token = APP_DISPLAY_TO_TOKEN[appDisplay];
    var out = [];
    if (token && typeof ROLES_PERMISSIONS_DATA !== "undefined") {
      for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
        var role = ROLES_PERMISSIONS_DATA[i];
        var keys = (ROLE_FUNCTION_MAP[role.id] && ROLE_FUNCTION_MAP[role.id][token]) || [];
        var hit = false;
        for (var k = 0; k < keys.length; k++) {
          if (PC_GROUP_FOR_KEY[keys[k]] === groupName) { hit = true; break; }
        }
        if (hit) {
          out.push({
            name:   role.role,
            app:    appDisplay,
            access: roleAccessLevel(role.id, token),
            status: "Active"
          });
        }
      }
    }
    /* Layer in seeded extras (always — covers newly-onboarded apps
       where ROLE_FUNCTION_MAP has no entries for the token). */
    var seeded = (EXTRA_IMPACTED_ROLES[appDisplay] && EXTRA_IMPACTED_ROLES[appDisplay][groupName]) || [];
    for (var s = 0; s < seeded.length; s++) {
      out.push({
        name:   seeded[s].name,
        app:    appDisplay,
        access: seeded[s].access,
        status: seeded[s].status
      });
    }
    return out;
  }

  /* ─── Delete permission group dialog ─── */
  var pcDelBackdrop  = document.getElementById("pcDeleteGroupBackdrop");
  var pcDelTitle     = document.getElementById("pcDeleteGroupTitle");
  var pcDelCount     = document.getElementById("pcDeleteGroupCount");
  var pcDelListEl    = document.getElementById("pcImpactedRolesList");
  var pcDelEmptyEl   = document.getElementById("pcImpactedRolesEmpty");
  var pcDelCancel    = document.getElementById("pcDeleteGroupCancel");
  var pcDelConfirm   = document.getElementById("pcDeleteGroupConfirm");
  var pcDelLastFocus = null;
  var pcDelPendingCard = null; /* the .pc-grp-card the user clicked Delete on */

  function pcOpenDeleteGroupDialog(card) {
    if (!card || !pcDelBackdrop) return;
    pcDelPendingCard = card;
    pcDelLastFocus = document.activeElement;
    var groupName = card.getAttribute("data-pc-group") || "this permission group";
    var impacted = pcImpactedRolesForGroup(pcSelectedApp, groupName);
    if (pcDelCount) pcDelCount.textContent = String(impacted.length);
    if (pcDelListEl) {
      pcDelListEl.innerHTML = "";
      if (impacted.length === 0) {
        pcDelListEl.hidden = true;
        if (pcDelEmptyEl) pcDelEmptyEl.hidden = false;
      } else {
        pcDelListEl.hidden = false;
        if (pcDelEmptyEl) pcDelEmptyEl.hidden = true;
        for (var i = 0; i < impacted.length; i++) {
          var r = impacted[i];
          var li = document.createElement("li");
          li.className = "pc-impacted-role-item";
          var nameEl = document.createElement("span");
          nameEl.className = "pc-impacted-role-name";
          nameEl.textContent = r.name;
          var metaEl = document.createElement("span");
          metaEl.className = "pc-impacted-role-meta";
          metaEl.textContent = r.app + " · " + r.access + " · " + r.status;
          li.appendChild(nameEl);
          li.appendChild(metaEl);
          pcDelListEl.appendChild(li);
        }
      }
    }
    pcDelBackdrop.removeAttribute("hidden");
    setTimeout(function () { if (pcDelCancel) pcDelCancel.focus(); }, 0);
  }

  function pcCloseDeleteGroupDialog() {
    if (!pcDelBackdrop) return;
    pcDelBackdrop.setAttribute("hidden", "");
    pcDelPendingCard = null;
    if (pcDelLastFocus && typeof pcDelLastFocus.focus === "function") pcDelLastFocus.focus();
    pcDelLastFocus = null;
  }

  function pcPerformDeleteGroup() {
    var card = pcDelPendingCard;
    pcCloseDeleteGroupDialog();
    if (!card || !card.parentNode) return;
    card.parentNode.removeChild(card);
    /* Removing a card can change which preset (if any) fits the
       remaining cards. Re-detect so the label tracks reality, and
       mark dirty because a save would persist the smaller group set. */
    pcSetAccessLevelValue(pcDetectLevel());
    pcMarkDirty();
    if (typeof showEdlToast === "function") {
      showEdlToast({
        type:     "success",
        title:    "Permission group deleted",
        bodyHtml: "The permission group has been removed from this capability."
      });
    }
  }

  if (pcDelCancel)   pcDelCancel.addEventListener("click", pcCloseDeleteGroupDialog);
  if (pcDelConfirm)  pcDelConfirm.addEventListener("click", pcPerformDeleteGroup);
  if (pcDelBackdrop) {
    pcDelBackdrop.addEventListener("click", function (e) {
      if (e.target === pcDelBackdrop) pcCloseDeleteGroupDialog();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && pcDelBackdrop && !pcDelBackdrop.hasAttribute("hidden")) {
      pcCloseDeleteGroupDialog();
    }
  });

  /* Group-card chevron toggle + delete affordance. Delete now routes
     through the EDL confirmation dialog above (was an immediate
     remove until 2026-05-21). */
  if (pcGroupsEl) {
    pcGroupsEl.addEventListener("click", function (e) {
      var toggle = e.target.closest && e.target.closest("[data-pc-grp-toggle]");
      if (toggle) {
        var card = toggle.closest(".pc-grp-card");
        if (card) {
          card.classList.toggle("collapsed");
          toggle.setAttribute("aria-expanded", card.classList.contains("collapsed") ? "false" : "true");
        }
        return;
      }
      var del = e.target.closest && e.target.closest("[data-pc-grp-delete]");
      if (del) {
        var dcard = del.closest(".pc-grp-card");
        if (dcard) pcOpenDeleteGroupDialog(dcard);
      }
    });
  }

  /* Standalone Permission Catalog pagination events, page-size
     dropdown, search input, and filter drawer setup were REMOVED
     2026-06-07 along with the tab itself. Edit Role permission
     logic is unaffected. */

  /* ─── R&P Pagination events ─── */
  document.getElementById("rpPgNums").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-rp-pg]");
    if (btn) rpGoToPage(parseInt(btn.dataset.rpPg, 10));
  });
  document.querySelector('#rpPgnPages [data-rp-nav="first"]').addEventListener("click", function () { rpGoToPage(1); });
  document.querySelector('#rpPgnPages [data-rp-nav="prev"]').addEventListener("click", function () { rpGoToPage(rpCurrentPage - 1); });
  document.querySelector('#rpPgnPages [data-rp-nav="next"]').addEventListener("click", function () { rpGoToPage(rpCurrentPage + 1); });
  document.querySelector('#rpPgnPages [data-rp-nav="last"]').addEventListener("click", function () { rpGoToPage(rpTotalPages()); });

  (function wireRpPaginationDd() {
    var rpJumpMenu = document.getElementById("rpJumpMenu");
    var rpPageSizeMenu = document.getElementById("rpPageSizeMenu");
    var rpJumpDD = document.getElementById("rpJumpDD");
    var rpJumpTrigger = document.getElementById("rpJumpTrigger");
    var rpPageSizeDD = document.getElementById("rpPageSizeDD");
    var rpPageSizeTrigger = document.getElementById("rpPageSizeTrigger");
    if (rpJumpMenu) {
      rpJumpMenu.addEventListener("click", function (e) {
        var row = e.target.closest("[data-rp-jump]");
        if (!row) return;
        rpGoToPage(parseInt(row.getAttribute("data-rp-jump"), 10));
        closeAllPgnDd();
      });
    }
    if (rpPageSizeMenu) {
      rpPageSizeMenu.addEventListener("click", function (e) {
        var row = e.target.closest("[data-rp-psize]");
        if (!row) return;
        rpPageSize = parseInt(row.getAttribute("data-rp-psize"), 10);
        rpCurrentPage = 1;
        closeAllPgnDd();
        renderRPTable();
        renderRPPagination();
      });
    }
    if (rpJumpDD && rpJumpTrigger) {
      rpJumpTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePgnDd(rpJumpDD, rpJumpTrigger);
      });
    }
    if (rpPageSizeDD && rpPageSizeTrigger) {
      rpPageSizeTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePgnDd(rpPageSizeDD, rpPageSizeTrigger);
      });
    }
  })();

  /* ─── R&P Search ─── */
  var rpSearchInput = document.getElementById("rpSearchInput");
  var rpSearchClear = document.getElementById("rpSearchClear");
  var rpSearchWrap = document.getElementById("rpSearchWrap");

  rpSearchInput.addEventListener("input", function () {
    rpSearchTerm = this.value.trim();
    rpSearchWrap.classList.toggle("has-value", this.value.length > 0);
    rpSearchClear.classList.toggle("hidden", !this.value.length);
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
  });

  rpSearchClear.addEventListener("click", function (e) {
    e.stopPropagation();
    rpSearchInput.value = "";
    rpSearchTerm = "";
    rpSearchWrap.classList.remove("has-value");
    rpSearchClear.classList.add("hidden");
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
    rpSearchInput.focus();
  });

  /* ═══ CREATE ROLE PAGE ═══
     Navigation from the Roles & Permissions tab to the existing
     Create Role form (markup in #createRolePage). Includes multi-app
     builder (Add application), permissions rendering, summary +
     collapsible cards, and validation for the Save button. */
  /* APP_PERMISSIONS is the *Role Assignment* metadata catalog. It owns
     only the role-side concepts that PM does not model:
       • `label`  — display name for the picker / chips
       • `levels` — access-level vocabulary (View Only / Edit / Full
         Access / Custom / IAM-specific User & Role / etc.)
     `resources` and `bundles` are NOT defined here. They are derived
     from the Permission Management catalog at runtime via
     `derivePMResourcesForApp()` + `deriveBundlesForApp()`, so a change
     to PC_POOL_BY_GROUP, PC_GROUP_FOR_KEY, or FUNCTION_REGISTRY
     propagates to every Create Role panel automatically (see the
     "PM IS THE SOURCE OF TRUTH" comment block in the data layer). */
  var APP_PERMISSIONS = (function () {
    /* One entry per application the permission registry knows about, so
       the Add-application picker offers exactly the applications a role
       can actually be granted anything in. */
    var out = {};
    for (var crKey in CR_APP_TO_PM_TOKEN) {
      if (!Object.prototype.hasOwnProperty.call(CR_APP_TO_PM_TOKEN, crKey)) continue;
      out[crKey] = {
        label:  appDisplayNameForToken(CR_APP_TO_PM_TOKEN[crKey]),
        levels: (APP_LEVELS_BY_CR_KEY[crKey] || []).slice()
      };
    }
    return out;
  })();
  /* Populate `resources` + `bundles` from the PM catalog. Idempotent
     so it can be called again whenever the PM data model mutates (the
     Permission Management detail page saving a capability, a new
     group added, an action pool edited). The Functions popover model
     is refreshed in the same pass so both Role-Assignment surfaces
     stay in lockstep with PM. */
  function rehydrateRoleAssignmentFromPM() {
    for (var appKey in APP_PERMISSIONS) {
      if (!Object.prototype.hasOwnProperty.call(APP_PERMISSIONS, appKey)) continue;
      var app = APP_PERMISSIONS[appKey];
      app.resources = derivePMResourcesForApp(appKey);
      app.bundles   = deriveBundlesForApp(appKey, app.levels);
    }
    var tokens = Object.keys(PM_TOKEN_TO_CR_APP);
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var crKey = PM_TOKEN_TO_CR_APP[token];
      var levels = APP_LEVELS_BY_CR_KEY[crKey] || [];
      APP_ACCESS_MODEL[token] = {
        groups:  pmGroupsForAppToken(token),
        presets: deriveBundlesForApp(crKey, levels)
      };
    }
  }
  rehydrateRoleAssignmentFromPM();
  /* Expose on window for any future PM-side mutation handler to call;
     also makes the propagation testable from the console / QA tools. */
  window.rehydrateRoleAssignmentFromPM = rehydrateRoleAssignmentFromPM;

    var crPage = document.getElementById("createRolePage");
    /* Access-level dropdown + data-access-level value (legacy persisted strings may still read "Custom Access"). */
    function isCustomAccessLevel(level) {
      return level === "Custom" || level === "Custom Access";
    }
    if (crPage) {
    var crRoleName = document.getElementById("crRoleName");
    var crAppDD = document.getElementById("crAppDD");
    var crAppTrigger = document.getElementById("crAppTrigger");
    var crAppValue = document.getElementById("crAppValue");
    var crAddBtn = document.getElementById("crAddBtn");
    var crPermsContent = document.getElementById("crPermsContent");
    var crFunctionsTitle = document.getElementById("crFunctionsTitle");
    var crSaveBtn = document.getElementById("crSave");
    var crTitleEl = crPage.querySelector(".cr-title");
    var mainPage = document.querySelector(".page");

    /* Atlas IAM role configuration — PRD-aligned application set only.
       Sales, Ad Ops, and Billing are NOT defined by Tatiana's PRD as
       valid role-function targets, so they are excluded from the picker
       data source (not just visually hidden). APP_PERMISSIONS mirrors
       this set — any key not present below has no permissions definition
       and cannot be selected, preselected, or searched. */
    /* Round 12 (2026-06-09 copy refresh): user-facing visible labels
       now spell out "Identity and Access Management" in full. The
       internal `value` token (`identity_access_management`) is
       unchanged so all data hydration / persistence keys remain
       stable. Companion override lives in
       `CR_APP_DISPLAY_LABEL.identity_access_management` below — both
       must stay in sync so the picker option and the rendered
       Functions section header always agree. */
    var CR_APP_OPTIONS = [
      { value: "identity_access_management", label: "Identity and Access Management" },
      { value: "core_planning",              label: "Core Planning" },
      { value: "disney_ads_agent",           label: "Disney Ads Agent" },
      { value: "inventory_catalog_manager",  label: "Inventory Catalog Manager" },
      { value: "target_options_manager",     label: "Targeting Options Manager" }
    ];
    var crAppCurrent = "";
    var crAddedApps = [];

    /* Tracks the record currently being edited so the Remove Role confirmation
       can reference it. null whenever the page is in Create Role mode. */
    var crEditingRecord = null;
    var crRemoveBtn = document.getElementById("crRemove");

    /* EDL trash icon (same paths as Add Users `TRASH_SVG` — EDL component library). */
    var CR_EDL_TRASH_SVG =
      '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>';
    /* Accordion chevron matches `.cr-section-chev` (down = expanded, rotate -90° = collapsed / right). */
    var CR_MODULE_CHEV_SVG =
      '<svg class="cr-module-chev" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';

    function collapseAllModules(section) {
      if (!section) return;
      var mods = section.querySelectorAll(".cr-module");
      for (var m = 0; m < mods.length; m++) {
        var mHead = mods[m].querySelector("[data-module-toggle]");
        var mBody = mods[m].querySelector(".cr-module-body");
        if (mHead) mHead.setAttribute("aria-expanded", "false");
        if (mBody) mBody.style.display = "none";
      }
    }

    function updateCrModuleSummaries(section) {
      if (!section) return;
      var mods = section.querySelectorAll(".cr-module");
      for (var mi = 0; mi < mods.length; mi++) {
        var mod = mods[mi];
        var checked = mod.querySelectorAll(".cr-perm-check:checked").length;
        var meta = mod.querySelector(".cr-module-summary");
        if (meta) {
          meta.textContent =
            checked + " permission" + (checked === 1 ? "" : "s") + " selected";
        }
      }
    }

    function setSectionExpanded(section, expanded) {
      if (!section) return;
      section.setAttribute("data-expanded", expanded ? "true" : "false");
      if (expanded && !isCustomAccessLevel(section.getAttribute("data-access-level"))) {
        collapseAllModules(section);
      }
    }

    function setRemoveRoleVisible(visible) {
      /* Edit Role and Create Role share one header-actions row but are
         mutually-exclusive states of it: Create Role offers Save as
         Draft (there is no persisted role yet to remove), Edit Role
         replaces that slot with Remove Role (a role that already
         exists can be deleted, but "drafting" an edit in place isn't
         a supported concept). Toggling one every time the other is
         toggled keeps them from both being visible at once, which
         the previous version of this function allowed since it only
         ever touched `crRemoveBtn`. */
      if (crRemoveBtn) {
        if (visible) crRemoveBtn.removeAttribute("hidden");
        else crRemoveBtn.setAttribute("hidden", "");
      }
      if (crSaveDraftBtn) {
        if (visible) crSaveDraftBtn.setAttribute("hidden", "");
        else crSaveDraftBtn.removeAttribute("hidden");
      }
    }

    function showCreateRole() {
      if (mainPage) mainPage.style.display = "none";
      crPage.style.display = "";
      window.scrollTo(0, 0);
      resetCreateRole();
      if (crTitleEl) crTitleEl.textContent = "Create Role";
      crEditingRecord = null;
      setRemoveRoleVisible(false);
      /* Round 27 (2026-08-11 — Edit Role header/section-header QA):
         Create Role and Edit Role share this exact DOM/CSS (`#crBasicCard`
         / `#crFuncsCard`), but the right-aligned-chevron + #2D2F8C
         section-header treatment requested for that pass is scoped to
         Edit Role only (mirrors `#addUsersPage.is-edit-mode`) — Create
         Role keeps its original left-chevron header untouched. */
      crPage.classList.remove("is-edit-mode");
    }

    function hideCreateRole() {
      crPage.style.display = "none";
      if (mainPage) mainPage.style.display = "";
      if (crTitleEl) crTitleEl.textContent = "Create Role";
      crEditingRecord = null;
      setRemoveRoleVisible(false);
      crPage.classList.remove("is-edit-mode");
    }

    /* ─── Edit Role: reuses Create Role layout with prefilled values. */
    var FUNCTION_TO_APP_KEY = PM_TOKEN_TO_CR_APP;

    /* ─── Per-role permission matrix ────────────────────────────────
       roleId → app key → resource title → Figma column labels, derived
       from the role's workbook grants. This decides which application
       sections Edit Role opens with and which boxes are pre-checked, so
       an unchecked box now means the workbook left that cell blank —
       there is no second, hand-maintained opinion about a role's
       permissions to fall out of step with the first. */
    var CR_ROLE_MATRIX = (function () {
      var out = {};
      for (var i = 0; i < CANONICAL_ROLE_DEFINITIONS.length; i++) {
        var role = CANONICAL_ROLE_DEFINITIONS[i];
        var byApp = {};
        for (var c = 0; c < role.permissionCodes.length; c++) {
          var code = role.permissionCodes[c];
          var token = permissionTokenForCode(code);
          var crKey = token && PM_TOKEN_TO_CR_APP[token];
          var group = permissionGroupForCode(code);
          var column = permissionActionColumn(code);
          if (!crKey || !group || !column) continue;
          if (!byApp[crKey]) byApp[crKey] = {};
          if (!byApp[crKey][group]) byApp[crKey][group] = [];
          if (byApp[crKey][group].indexOf(column) === -1) byApp[crKey][group].push(column);
        }
        for (var appKey in byApp) {
          if (!Object.prototype.hasOwnProperty.call(byApp, appKey)) continue;
          for (var g in byApp[appKey]) {
            if (!Object.prototype.hasOwnProperty.call(byApp[appKey], g)) continue;
            byApp[appKey][g] = WB_COLUMN_ORDER.filter(function (col) { return byApp[appKey][g].indexOf(col) !== -1; });
          }
        }
        out[role.id] = byApp;
      }
      return out;
    })();

    function preferredValuesForRoleApp(roleId, appName) {
      var detail = (ROLE_ACCESS_DETAILS[roleId] && ROLE_ACCESS_DETAILS[roleId][appName]) || null;
      var values = [];
      if (detail) {
        for (var resource in detail) {
          if (!Object.prototype.hasOwnProperty.call(detail, resource)) continue;
          for (var i = 0; i < detail[resource].length; i++) {
            values.push(resource + "::" + detail[resource][i]);
          }
        }
        return values;
      }
      var keys = (ROLE_FUNCTION_MAP[roleId] && ROLE_FUNCTION_MAP[roleId][appName]) || [];
      var seen = {};
      for (var k = 0; k < keys.length; k++) {
        var lbl = labelForFunction(keys[k]);
        if (!lbl || seen[lbl]) continue;
        seen[lbl] = true;
        values.push(lbl);
      }
      return values;
    }

    function resolveAccessLevelForSection(appKey, level) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return "";
      if (!level) return app.levels[0];
      if (level === "Custom Access") level = "Custom";
      if (app.levels.indexOf(level) !== -1) return level;
      if (appKey === "identity_access_management") {
        if (level === "Edit") return "User";
        if (level === "Approve") return "Role";
      }
      return app.levels[0];
    }

    function accessPermissionCount(appKey, level, section) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return 0;
      if (isCustomAccessLevel(level)) {
        return section ? section.querySelectorAll(".cr-perm-check:checked").length : 0;
      }
      var bundle = app.bundles[level] || {};
      var count = 0;
      for (var i = 0; i < app.resources.length; i++) {
        var resource = app.resources[i].title;
        count += (bundle[resource] || []).length;
      }
      return count;
    }

    function accessLevelValueText(appKey, level, section) {
      var count = accessPermissionCount(appKey, level, section);
      return level + " | " + count + " " + (count === 1 ? "permission" : "permissions") + " selected";
    }

    function updateAccessLevelValue(section) {
      if (!section) return;
      var appKey = section.getAttribute("data-app-key");
      var app = APP_PERMISSIONS[appKey];
      if (!app) return;
      var level = section.getAttribute("data-access-level") || app.levels[0];
      var levelValue = section.querySelector(".cr-access-level-value");
      if (!levelValue) return;
      levelValue.textContent = accessLevelValueText(appKey, level, section);
      levelValue.classList.remove("is-placeholder");
    }

    function setSectionAccessLevel(section, level) {
      var appKey = section.getAttribute("data-app-key");
      var app = APP_PERMISSIONS[appKey];
      if (!app) return;
      var normalized = resolveAccessLevelForSection(appKey, level);
      var bundle = app.bundles[normalized] || {};
      section.setAttribute("data-access-level", normalized);
      var opts = section.querySelectorAll("[data-access-level-option]");
      for (var i = 0; i < opts.length; i++) {
        var selected = opts[i].getAttribute("data-access-level") === normalized;
        opts[i].classList.toggle("is-selected", selected);
        opts[i].setAttribute("aria-selected", selected ? "true" : "false");
      }
      if (!isCustomAccessLevel(normalized)) {
        var boxes = section.querySelectorAll(".cr-perm-check");
        for (var b = 0; b < boxes.length; b++) {
          var resource = boxes[b].getAttribute("data-resource");
          var action = boxes[b].getAttribute("data-action");
          boxes[b].checked = !!(bundle[resource] && bundle[resource].indexOf(action) !== -1);
        }
      }
      updateAccessLevelValue(section);
      if (isCustomAccessLevel(normalized)) {
        collapseAllModules(section);
      } else {
        setSectionExpanded(section, false);
      }
      renderAccessSummary(section);
      updateCrModuleSummaries(section);
    }

    function prefillAppChecks(appKey, count, preferredValues) {
      var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
      if (!section) return;
      var toCheck = {};
      if (preferredValues && preferredValues.length) {
        for (var p = 0; p < preferredValues.length; p++) toCheck[preferredValues[p]] = true;
      }
      var boxes = section.querySelectorAll(".cr-perm-check");
      var checked = 0;
      for (var x = 0; x < boxes.length; x++) boxes[x].checked = false;
      for (var i = 0; i < boxes.length && checked < count; i++) {
        if (preferredValues && preferredValues.length) {
          if (toCheck[boxes[i].value]) { boxes[i].checked = true; checked++; }
        }
      }
      for (var j = 0; j < boxes.length && checked < count; j++) {
        if (!boxes[j].checked) { boxes[j].checked = true; checked++; }
      }
      updateAccessLevelValue(section);
      renderAccessSummary(section);
      updateCrModuleSummaries(section);
      collapseAllModules(section);
    }

    function showEditRole(record) {
      if (!record) return;
      showCreateRole();
      crPage.classList.add("is-edit-mode");
      if (crTitleEl) crTitleEl.textContent = "Edit Role";
      crEditingRecord = record;
      setRemoveRoleVisible(true);
      crRoleName.value = record.role || "";
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = (record.description || "").replace(/\.$/, "");
      /* Sensitive/Regional Data Access hydrate per-application from
         CR_ROLE_MATRIX (or the legacy fallback) below, same as every
         other function row — there is no separate global checkbox to
         restore anymore. */

      /* Hydration source of truth: CR_ROLE_MATRIX (per role id).
         Falls back to the legacy record.functions → preferredValues
         path only if a role isn't in the matrix yet (defensive). */
      var matrix = CR_ROLE_MATRIX[record.id];
      if (matrix) {
        /* Add the matrix's apps in the order Atlas's app dropdown uses,
           skipping apps the role doesn't have. Taken from the app
           dropdown itself so an application added to the permission
           registry cannot be silently dropped from Edit Role. */
        var appOrder = Object.keys(CR_APP_TO_PM_TOKEN);
        for (var ai = 0; ai < appOrder.length; ai++) {
          var ak = appOrder[ai];
          if (!matrix[ak]) continue;
          crAddApplication(ak);
          var sec = crPermsContent.querySelector('.cr-app-section[data-app-key="' + ak + '"]');
          if (sec) {
            sec.setAttribute("data-role-id", record.id);
            applyRoleMatrixToSection(sec, ak, matrix[ak]);
          }
        }
      } else {
        var fns = record.functions || [];
        for (var i = 0; i < fns.length; i++) {
          var appKey = FUNCTION_TO_APP_KEY[fns[i].name];
          if (!appKey || !APP_PERMISSIONS[appKey]) continue;
          crAddApplication(appKey);
          var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
          if (section) {
            section.setAttribute("data-role-id", record.id);
            applyCheckedActions(section, preferredValuesForRoleApp(record.id, fns[i].name), fns[i].count);
          }
        }
      }
      updateFunctionsCount();
      captureCrInitialState();
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule("cr-matrix");
    }

    /* Check the matrix boxes that correspond to a CR_ROLE_MATRIX
       entry — `assignments` is { resourceTitle: [Figma columns] }.
       Body cells only — we use `.cr-matrix tbody .cr-perm-check` so
       the column-header select-all checkboxes (`.cr-matrix-col-toggle`,
       which also carry `.cr-perm-check` for visual reuse) are left
       alone during hydration. The header state is recomputed after
       hydration by refreshAllColumnTogglesForSection. */
    function applyRoleMatrixToSection(section, appKey, assignments) {
      if (!section || !assignments) return;
      var boxes = section.querySelectorAll('.cr-matrix tbody .cr-perm-check');
      for (var x = 0; x < boxes.length; x++) boxes[x].checked = false;
      for (var resource in assignments) {
        if (!Object.prototype.hasOwnProperty.call(assignments, resource)) continue;
        var cols = assignments[resource] || [];
        for (var c = 0; c < cols.length; c++) {
          var pmAction = CR_COLUMN_TO_PM_ACTION[cols[c]];
          if (!pmAction) continue;
          var sel = '.cr-matrix tbody .cr-perm-check[data-resource="' + resource.replace(/"/g, '\\"') + '"][data-action="' + pmAction.replace(/"/g, '\\"') + '"]';
          var box = section.querySelector(sel);
          if (box) box.checked = true;
        }
      }
      if (typeof refreshAllColumnTogglesForSection === "function") {
        refreshAllColumnTogglesForSection(section);
      }
    }

    /* Check the matrix boxes that correspond to the role's persisted
       resource::action pairs. If a `targetCount` is supplied and the
       preferred values don't cover it (legacy demo data that only
       stored a count), fall back to checking additional first-seen
       boxes until the count is met. Mirrors the prior
       prefillAppChecks behavior without any access-level coupling.
       Body cells only — see applyRoleMatrixToSection for why. */
    function applyCheckedActions(section, preferredValues, targetCount) {
      if (!section) return;
      var boxes = section.querySelectorAll('.cr-matrix tbody .cr-perm-check');
      for (var x = 0; x < boxes.length; x++) boxes[x].checked = false;
      var wanted = {};
      if (preferredValues && preferredValues.length) {
        for (var p = 0; p < preferredValues.length; p++) wanted[preferredValues[p]] = true;
      }
      var checked = 0;
      for (var i = 0; i < boxes.length; i++) {
        if (wanted[boxes[i].value]) { boxes[i].checked = true; checked++; }
      }
      if (typeof targetCount === "number") {
        for (var j = 0; j < boxes.length && checked < targetCount; j++) {
          if (!boxes[j].checked) { boxes[j].checked = true; checked++; }
        }
      }
      if (typeof refreshAllColumnTogglesForSection === "function") {
        refreshAllColumnTogglesForSection(section);
      }
    }

    function resetCreateRole() {
      closeAllAccessLevelDDs();
      crCloseAppDD();
      crRoleName.value = "";
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = "";
      crAddedApps = [];
      crPermsContent.innerHTML = "";
      crPermsContent.style.display = "none";
      crSetAppValue("");
      crRefreshAppMenu();
      updateFunctionsCount();
      var cards = crPage.querySelectorAll(".cr-card");
      for (var cc = 0; cc < cards.length; cc++) {
        cards[cc].classList.remove("collapsed");
        var hdr = cards[cc].querySelector(".cr-section-header[data-cr-toggle]");
        if (hdr) {
          hdr.setAttribute("aria-expanded", "true");
          var resetTitle = hdr.querySelector(".cr-section-title");
          if (resetTitle) hdr.setAttribute("aria-label", "Collapse " + resetTitle.textContent.trim());
        }
      }
      captureCrInitialState();
    }

    function updateFunctionsCount() {
      /* Figma section title is plain "Functions" with no count —
         keep the function so callers continue to work. */
      if (crFunctionsTitle) crFunctionsTitle.textContent = "Functions";
    }

    /* Dirty-state Save Role: the button mirrors whether the form differs from
       the captured baseline. The baseline is empty for Create Role and reflects
       the prefilled values for Edit Role. Any change — text, checkbox, added
       app, or permission — flips Save to enabled; reverting every field back
       to the baseline disables it again. */
    var crInitialState = "";

    function snapshotCrState() {
      var descEl = document.getElementById("crDescription");
      var perms = [];
      var levels = [];
      var sections = crPermsContent.querySelectorAll(".cr-app-section");
      for (var s = 0; s < sections.length; s++) {
        var key = sections[s].getAttribute("data-app-key") || "";
        levels.push(key + ":" + (sections[s].getAttribute("data-access-level") || ""));
        /* Body cells only — column-header select-all checkboxes
           share `.cr-perm-check` for visual reuse but are not
           perm assignments. This already includes each app's
           Sensitive/Regional Data Access checkboxes (they render as
           `.cr-perm-check` inside `.cr-matrix tbody`, same as any
           other function row), so per-app data-access state is
           captured for dirty-detection with no extra code. */
        var boxes = sections[s].querySelectorAll('.cr-matrix tbody .cr-perm-check:checked');
        var values = [];
        for (var b = 0; b < boxes.length; b++) values.push(boxes[b].value);
        values.sort();
        perms.push(key + ":" + values.join(","));
      }
      perms.sort();
      levels.sort();
      return JSON.stringify({
        name: crRoleName.value,
        desc: descEl ? descEl.value : "",
        apps: crAddedApps.slice().sort().join("|"),
        levels: levels.join("|"),
        perms: perms.join("|")
      });
    }

    function captureCrInitialState() {
      crInitialState = snapshotCrState();
      validateCreateRole();
    }

    /* Save Role enablement: the form must be both valid (name filled,
       ≥1 permission selected) AND dirty (different from the captured
       baseline). Create Role starts at an empty baseline so the first
       meaningful edit flips Save on; Edit Role starts at the prefilled
       baseline so reverting re-disables it. */
    function isCreateRoleValid() {
      var nameOk = !!(crRoleName.value && crRoleName.value.trim());
      /* Body cells only — exclude `.cr-matrix-col-toggle` headers. */
      var selected = crPermsContent.querySelectorAll('.cr-matrix tbody .cr-perm-check:checked').length;
      return nameOk && selected > 0;
    }
    function validateCreateRole() {
      var dirty = (snapshotCrState() !== crInitialState);
      crSaveBtn.disabled = !(dirty && isCreateRoleValid());
    }

    /* ─── App dropdown ─── */
    /* "Select applications" is an ADS searchable select — Figma
       1025:23238's Functions card shows a text-entry field with a
       dropdown caret, not a plain unfiltered listbox. Only 5
       applications exist today, so a full `initCombo` migration (that
       pattern owns its own filter-drawer "apply" semantics, which
       don't match this field's explicit two-step Select-then-Add
       flow) is unnecessary risk for the payoff; instead the existing
       `.cr-dd` menu gets its own lightweight type-to-filter search
       input at the top, matching the visual language of
       `.edl-combo-input` used by every other searchable field in the
       app (see `initCombo`). */
    var crAppSearchInput = null;
    function crBuildAppMenu() {
      var menu = document.createElement("div");
      menu.id = "crAppMenu";
      menu.className = "cr-dd-menu";
      menu.setAttribute("role", "listbox");

      var searchWrap = document.createElement("div");
      searchWrap.className = "cr-dd-search-wrap";
      var search = document.createElement("input");
      search.type = "text";
      search.className = "cr-dd-search";
      search.setAttribute("placeholder", "Search applications");
      search.setAttribute("aria-label", "Search applications");
      search.setAttribute("autocomplete", "off");
      searchWrap.appendChild(search);
      menu.appendChild(searchWrap);
      crAppSearchInput = search;

      var optionsWrap = document.createElement("div");
      optionsWrap.className = "cr-dd-options";
      for (var i = 0; i < CR_APP_OPTIONS.length; i++) {
        var opt = CR_APP_OPTIONS[i];
        var row = document.createElement("div");
        row.className = "cr-dd-option";
        row.id = "crAppOpt_" + opt.value;
        row.setAttribute("role", "option");
        row.setAttribute("data-value", opt.value);
        row.textContent = opt.label;
        optionsWrap.appendChild(row);
      }
      menu.appendChild(optionsWrap);

      var empty = document.createElement("div");
      empty.className = "cr-dd-empty";
      empty.textContent = "No applications found";
      empty.hidden = true;
      menu.appendChild(empty);

      crAppDD.appendChild(menu);
      return menu;
    }
    var crAppMenu = crBuildAppMenu();

    function crFilterAppMenu(query) {
      var q = (query || "").trim().toLowerCase();
      var opts = crAppMenu.querySelectorAll(".cr-dd-option");
      var visibleCount = 0;
      for (var i = 0; i < opts.length; i++) {
        var match = !q || opts[i].textContent.toLowerCase().indexOf(q) !== -1;
        opts[i].hidden = !match;
        if (match) visibleCount++;
      }
      var emptyEl = crAppMenu.querySelector(".cr-dd-empty");
      if (emptyEl) emptyEl.hidden = visibleCount !== 0;
    }
    /* ARIA combobox roving-highlight: ArrowDown/ArrowUp move an
       `.is-active` highlight among currently *visible* (search-matched),
       non-disabled options; Home/End jump to the first/last visible
       option; Enter selects whichever option is highlighted (falling
       back to the first visible option so Enter works immediately after
       typing, before any arrow key is pressed) — the same pattern as
       `initCombo`'s listbox, adapted for this lighter-weight `.cr-dd`. */
    function crVisibleAppOptions() {
      return Array.from(crAppMenu.querySelectorAll(".cr-dd-option")).filter(function (o) {
        return !o.hidden && !o.classList.contains("is-disabled");
      });
    }
    function crSetActiveAppOption(target) {
      var opts = crAppMenu.querySelectorAll(".cr-dd-option");
      for (var i = 0; i < opts.length; i++) opts[i].classList.remove("is-active");
      if (target) {
        target.classList.add("is-active");
        if (crAppSearchInput) crAppSearchInput.setAttribute("aria-activedescendant", target.id);
        if (typeof target.scrollIntoView === "function") target.scrollIntoView({ block: "nearest" });
      } else if (crAppSearchInput) {
        crAppSearchInput.removeAttribute("aria-activedescendant");
      }
    }
    if (crAppSearchInput) {
      crAppSearchInput.setAttribute("role", "combobox");
      crAppSearchInput.setAttribute("aria-expanded", "true");
      crAppSearchInput.setAttribute("aria-controls", "crAppMenu");
      crAppSearchInput.addEventListener("input", function () {
        crFilterAppMenu(crAppSearchInput.value);
        crSetActiveAppOption(null);
      });
      crAppSearchInput.addEventListener("click", function (e) { e.stopPropagation(); });
      crAppSearchInput.addEventListener("keydown", function (e) {
        e.stopPropagation();
        var visible = crVisibleAppOptions();
        var current = crAppMenu.querySelector(".cr-dd-option.is-active");
        var idx = current ? visible.indexOf(current) : -1;
        if (e.key === "Escape") {
          crCloseAppDD();
          crAppTrigger.focus();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (visible.length) crSetActiveAppOption(visible[Math.min(idx + 1, visible.length - 1)]);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (visible.length) crSetActiveAppOption(visible[Math.max(idx - 1, 0)]);
        } else if (e.key === "Home") {
          e.preventDefault();
          if (visible.length) crSetActiveAppOption(visible[0]);
        } else if (e.key === "End") {
          e.preventDefault();
          if (visible.length) crSetActiveAppOption(visible[visible.length - 1]);
        } else if (e.key === "Enter") {
          e.preventDefault();
          var pick = current || visible[0];
          if (pick) {
            crSetAppValue(pick.getAttribute("data-value"));
            crCloseAppDD();
          }
        }
      });
    }

    function crCloseAppDD() {
      detachCrDdLayeredMenu(crAppDD);
      crAppDD.classList.remove("open");
      crAppTrigger.setAttribute("aria-expanded", "false");
    }
    function crOpenAppDD() {
      crAppDD.classList.add("open");
      crAppTrigger.setAttribute("aria-expanded", "true");
      attachCrDdLayeredMenu(crAppDD);
      if (crAppSearchInput) {
        crAppSearchInput.value = "";
        crFilterAppMenu("");
        crSetActiveAppOption(null);
        setTimeout(function () { crAppSearchInput.focus(); }, 0);
      }
    }
    function crSetAppValue(value) {
      crAppCurrent = value;
      var opts = crAppMenu.querySelectorAll(".cr-dd-option");
      var label = "Select applications";
      for (var i = 0; i < opts.length; i++) {
        if (opts[i].getAttribute("data-value") === value) {
          opts[i].classList.add("is-selected");
          label = opts[i].textContent;
        } else {
          opts[i].classList.remove("is-selected");
        }
      }
      if (value) {
        crAppValue.textContent = label;
        crAppValue.classList.remove("is-placeholder");
      } else {
        crAppValue.textContent = "Select applications";
        crAppValue.classList.add("is-placeholder");
      }
      crUpdateAddBtnState();
    }
    function crUpdateAddBtnState() {
      var canAdd = !!crAppCurrent && crAddedApps.indexOf(crAppCurrent) === -1;
      crAddBtn.disabled = !canAdd;
    }
    function crRefreshAppMenu() {
      var opts = crAppMenu.querySelectorAll(".cr-dd-option");
      for (var i = 0; i < opts.length; i++) {
        var v = opts[i].getAttribute("data-value");
        if (crAddedApps.indexOf(v) >= 0) opts[i].classList.add("is-disabled");
        else opts[i].classList.remove("is-disabled");
      }
    }
    crSetAppValue("");

    function closeAccessLevelDD(dd) {
      if (!dd) return;
      detachCrDdLayeredMenu(dd);
      dd.classList.remove("open");
      var trigger = dd.querySelector(".cr-access-level-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }
    function closeAllAccessLevelDDs(exceptDd) {
      var open = crPermsContent.querySelectorAll(".cr-access-level-dd.open");
      for (var i = 0; i < open.length; i++) {
        if (exceptDd && open[i] === exceptDd) continue;
        closeAccessLevelDD(open[i]);
      }
    }
    function openAccessLevelDD(dd) {
      if (!dd) return;
      closeAllAccessLevelDDs(dd);
      dd.classList.add("open");
      var trigger = dd.querySelector(".cr-access-level-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
      attachCrDdLayeredMenu(dd);
    }
    function applyAccessLevelSelection(levelOption) {
      if (!levelOption) return false;
      var levelMenu = levelOption.closest(".cr-access-level-menu");
      if (!levelMenu) return false;
      var menuAppKey = levelMenu.getAttribute("data-app-key");
      var sec = menuAppKey ? crPermsContent.querySelector('.cr-app-section[data-app-key="' + menuAppKey + '"]') : null;
      if (!sec) return false;
      var level = levelOption.getAttribute("data-access-level");
      if (!level) return false;
      setSectionAccessLevel(sec, level);
      var secDd = sec.querySelector(".cr-access-level-dd");
      if (secDd) closeAccessLevelDD(secDd);
      updateFunctionsCount();
      validateCreateRole();
      return true;
    }

    crAppTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (crAppDD.classList.contains("open")) crCloseAppDD(); else crOpenAppDD();
    });
    crAppMenu.addEventListener("click", function (e) {
      var target = e.target.closest(".cr-dd-option");
      if (!target || target.classList.contains("is-disabled")) return;
      crSetAppValue(target.getAttribute("data-value"));
      crCloseAppDD();
    });
    document.addEventListener("click", function (e) {
      if (crAppDD.contains(e.target)) return;
      var appMenu = getCrDdMenuForHost(crAppDD);
      if (appMenu && appMenu.contains(e.target)) return;
      var openAccessDDs = crPermsContent.querySelectorAll(".cr-access-level-dd.open");
      for (var i = 0; i < openAccessDDs.length; i++) {
        if (openAccessDDs[i].contains(e.target)) return;
        var accessMenu = getCrDdMenuForHost(openAccessDDs[i]);
        if (accessMenu && accessMenu.contains(e.target)) return;
      }
      crCloseAppDD();
      closeAllAccessLevelDDs();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (crAppDD.classList.contains("open")) crCloseAppDD();
      closeAllAccessLevelDDs();
    });
    document.addEventListener("click", function (e) {
      var levelOption = e.target.closest("[data-access-level-option]");
      if (!levelOption) return;
      applyAccessLevelSelection(levelOption);
    });

    /* ─── Permissions rendering ─── */
    function renderPermissionGroup(group, appKey) {
      var html = '<div class="cr-perm-group">';
      html += '<div class="cr-perm-group-title">' + esc(group.title) + '</div>';
      html += '<div class="cr-perm-grid">';
      html += '<div class="cr-perm-col">';
      for (var p = 0; p < group.actions.length; p++) {
        var name = group.actions[p];
        var id = "perm_" + appKey + "_" + group.title.toLowerCase().replace(/[^a-z0-9]+/g, "_") + "_" + name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
        html += '<label class="cr-perm-item">' +
          '<input type="checkbox" class="cr-perm-check" id="' + id + '" value="' + esc(group.title + "::" + name) + '" data-resource="' + esc(group.title) + '" data-action="' + esc(name) + '">' +
          '<span class="cr-perm-label">' + esc(name) + '</span>' +
          '</label>';
      }
      html += '</div>';
      html += '</div></div>';
      return html;
    }

    function renderAccessSummary(section) {
      var appKey = section.getAttribute("data-app-key");
      var app = APP_PERMISSIONS[appKey];
      if (!app) return;
      var summaryNode = section.querySelector(".cr-access-summary");
      if (!summaryNode) return;
      var level = section.getAttribute("data-access-level") || app.levels[0];
      if (isCustomAccessLevel(level)) {
        summaryNode.innerHTML = "";
        return;
      }
      var bundle = app.bundles[level] || {};
      var lines = [];
      for (var r = 0; r < app.resources.length; r++) {
        var resource = app.resources[r].title;
        var actions = bundle[resource] || [];
        if (!actions.length) continue;
        lines.push(
          '<div class="permission-row">' +
            '<div class="permission-label">' + esc(resource) + ":</div>" +
            '<div class="permission-values">' + esc(actions.join(", ")) + "</div>" +
          "</div>"
        );
      }
      summaryNode.innerHTML =
        lines.length ? ('<div class="permission-detail-list cr-access-summary-list">' + lines.join("") + '</div>') : '<div class="cr-access-summary-empty">No permissions selected.</div>';
    }

    /* Build the per-application function-action matrix table that
       matches Figma 924:14107 ("Create Role").

       Layout per app:
         ┌─ Core Planning ────────────────────────── Remove ─┐
         │  Functions ⇅ │ Read ⇅ │ Create ⇅ │ Update ⇅ │ … │
         │  Orders      │   ☐    │    ☐     │    ☐     │ … │
         │  Media Plans │   ☐    │    ☐     │    ☐     │ … │
         └────────────────────────────────────────────────────┘

       The matrix columns follow the Figma vocabulary
       (Read / Create / Update / …). Underlying permission data uses the
       canonical action verbs (View, Edit, …), so we keep a render-only
       mapping between the column heading and the action the checkbox
       writes into form state. The column set is the one the workbook's
       actions need: Approve and Archive replace the former Assign
       column, which no registered function code uses. Each application
       still renders only the columns its own resources support. */
    var CR_MATRIX_COLUMNS = WB_COLUMN_ORDER.slice();
    var CR_COLUMN_TO_PM_ACTION = (function () {
      var out = {};
      for (var action in WB_ACTION_COLUMN) {
        if (!Object.prototype.hasOwnProperty.call(WB_ACTION_COLUMN, action)) continue;
        out[WB_ACTION_COLUMN[action]] = WB_ACTION_LABEL[action];
      }
      return out;
    })();

    /* ─── Create Role matrix rows ────────────────────────────────────
       One row per resource the workbook defines for the application,
       with `support` listing the columns that resource actually has a
       function code for. The support union across an application's
       resources decides which column headers its matrix renders, so an
       application with nothing to approve never grows an Approve
       column. Cells within an app's column set always render as real
       checkboxes — there are no disabled tri-state cells — matching
       Figma 924:14107 and the per-app column rule in the Create Role
       brief. */
    var CR_MATRIX_RESOURCES_BY_APP = (function () {
      var out = {};
      for (var crKey in CR_APP_TO_PM_TOKEN) {
        if (!Object.prototype.hasOwnProperty.call(CR_APP_TO_PM_TOKEN, crKey)) continue;
        var token = CR_APP_TO_PM_TOKEN[crKey];
        out[crKey] = (WB_GROUPS_BY_TOKEN[token] || []).map(function (group) {
          return { title: group, pmGroup: group, support: (WB_COLUMNS_BY_GROUP[group] || []).slice() };
        });
      }
      return out;
    })();

    /* ─── Application-level data-access rows (2026-08-10 Create Role
       rebuild, Figma 1025:23238 + follow-up brief) ───────────────────
       "Sensitive Data Access" and "Regional Data Access" are NOT
       global, form-level checkboxes anymore (that block is removed
       from Role Details entirely). They are per-application rows,
       appended as the final two rows of *every* application's
       function table, with independent state per application — e.g.
       Core Planning's Sensitive Data Access is completely separate
       from Identity and Access Management's.

       The columns they support are the ones the workbook gives them:
       `acp_sensitive_read` / `acp_sensitive_update` and
       `acp_regional_read` / `acp_regional_update`, i.e. Read + Update.
       (They previously offered Read + Create, an action neither pair of
       codes has.) The two checkboxes are independently selectable —
       there is no cross-column dependency (no "Update implies Read" or
       similar) since the product brief never defined one; inventing one
       would be exactly the kind of unrequested rule the brief says not
       to add. `isDataAccessRow` + `dataAccessKey` are read by
       `buildAppSectionHtml` to render the two supported columns as
       real checkboxes and every other column as a fully empty,
       non-interactive cell — never a checkbox, dash, or any other
       placeholder glyph — per the brief.

       Appended via a loop (not hand-duplicated per app) so any future
       application added to CR_MATRIX_RESOURCES_BY_APP — or derived
       from PM via the `crResourcesForApp` fallback below — receives
       both rows automatically, always last, with no per-app opt-out. */
    var CR_DATA_ACCESS_ROWS = [
      { title: "Sensitive Data Access", isDataAccessRow: true, dataAccessKey: "sensitive", support: (WB_COLUMNS_BY_GROUP["Sensitive Data Access"] || ["Read", "Update"]).slice() },
      { title: "Regional Data Access",  isDataAccessRow: true, dataAccessKey: "regional",  support: (WB_COLUMNS_BY_GROUP["Regional Data Access"] || ["Read", "Update"]).slice() }
    ];
    (function appendDataAccessRowsToEveryApplication() {
      for (var appKey in CR_MATRIX_RESOURCES_BY_APP) {
        if (!Object.prototype.hasOwnProperty.call(CR_MATRIX_RESOURCES_BY_APP, appKey)) continue;
        var list = CR_MATRIX_RESOURCES_BY_APP[appKey];
        for (var i = 0; i < CR_DATA_ACCESS_ROWS.length; i++) {
          list.push(CR_DATA_ACCESS_ROWS[i]);
        }
      }
    })();

    /* Round 20 (2026-06-09): per-app, per-resource display-label
       override for the Functions matrix. Keys are the canonical
       `title` strings stored in CR_MATRIX_RESOURCES_BY_APP and
       referenced as `data-resource` by CR_ROLE_MATRIX /
       applyRoleMatrixToSection / serialize logic; values are the
       shorter strings the user sees in the Functions column. This
       lets us match the brief's request for shorter Disney Ads Agent
       row labels (Plan Queries / Forecasting / Team Summary /
       IO Compare) WITHOUT renaming any data keys, so checked-state
       hydration, dirty-state tracking, role serialization, and
       effective-access patterns all continue to bind off the
       canonical names. Only `buildAppSectionHtml` consults this map
       when emitting the `<td class="cr-matrix-fn">` text — every
       other code path keeps using `resource.title`. */
    var CR_APP_RESOURCE_DISPLAY_LABEL = {
      /* Empty since the workbook migration. The four Disney Ads Agent
         rows this shortened ("Plan Queries", "Forecast Queries", …)
         belonged to the previous query-capability model; the workbook's
         Agent resources are Sales / Planning / Account, which are
         already short enough to render as they are. */
    };

    /* Per-app column-header display override for the Functions matrix.
       Disney Ads Intelligence is an access capability rather than CRUD
       — its three resources exist only as `agent_*_access` codes — so
       its single Read column reads as "Access". Internal column
       identity stays "Read" so column-toggle wiring,
       CR_COLUMN_TO_PM_ACTION lookups and checkbox `data-column`
       continue to work unchanged. */
    var CR_APP_COLUMN_DISPLAY_LABEL = {
      disney_ads_intelligence: {
        "Read": "Access"
      }
    };

    /* Optional Create-Role display label override per app (does NOT
       change `APP_PERMISSIONS[k].label` — used elsewhere).
       Round 12 (2026-06-09 copy refresh): user-facing app label now
       reads "Identity and Access Management" in full to align with
       the rest of V3 (Edit User effective access table, breakdown
       modal, picker option). The internal app key
       (`identity_access_management`) is unchanged, so all data
       lookups, role hydration, dirty-state snapshots, and persistence
       paths remain stable. */
    var CR_APP_DISPLAY_LABEL = {
      identity_access_management: "Identity and Access Management"
    };

    function crResourcesForApp(appKey) {
      var overrides = CR_MATRIX_RESOURCES_BY_APP[appKey];
      if (overrides) return overrides;
      /* Fall back to PM-derived resources (shouldn't happen for the
         five supported apps but defends against future apps added to
         APP_PERMISSIONS). */
      var fallback = [];
      var app = APP_PERMISSIONS[appKey];
      if (app) {
        for (var i = 0; i < app.resources.length; i++) {
          var r = app.resources[i];
          var support = [];
          for (var j = 0; j < CR_MATRIX_COLUMNS.length; j++) {
            var col = CR_MATRIX_COLUMNS[j];
            var pmAction = CR_COLUMN_TO_PM_ACTION[col];
            if (pmAction && r.actions && r.actions.indexOf(pmAction) !== -1) support.push(col);
          }
          fallback.push({ title: r.title, pmGroup: r.title, support: support });
        }
      }
      /* Any future application not yet hand-curated in
         CR_MATRIX_RESOURCES_BY_APP still gets the two data-access
         rows automatically — see CR_DATA_ACCESS_ROWS above. */
      for (var d = 0; d < CR_DATA_ACCESS_ROWS.length; d++) fallback.push(CR_DATA_ACCESS_ROWS[d]);
      return fallback;
    }

    /* Determine which Figma column headers to render for this app.
       A column is shown if *any* resource in the app supports it. */
    function crAppActionColumns(appKey) {
      var resources = crResourcesForApp(appKey);
      var seen = {};
      var cols = [];
      for (var i = 0; i < CR_MATRIX_COLUMNS.length; i++) {
        var col = CR_MATRIX_COLUMNS[i];
        for (var r = 0; r < resources.length; r++) {
          if ((resources[r].support || []).indexOf(col) !== -1 && !seen[col]) {
            seen[col] = true;
            cols.push(col);
            break;
          }
        }
      }
      return cols;
    }

    /* One column schema for every application matrix: the workbook
       order (Read, Create, Update, Delete, Approve, Archive). A
       permission the application does not define stays as a
       non-interactive ghost track so later columns cannot slide left. */
    function crAppRenderColumns(appKey) {
      var supported = crAppActionColumns(appKey);
      var supportSet = {};
      var i;
      for (i = 0; i < supported.length; i++) supportSet[supported[i]] = true;
      var out = [];
      for (i = 0; i < CR_MATRIX_COLUMNS.length; i++) {
        var key = CR_MATRIX_COLUMNS[i];
        out.push({ key: key, ghost: !supportSet[key] });
      }
      return out;
    }

    function buildAppSectionHtml(appKey) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return "";
      var cols = crAppActionColumns(appKey);
      var renderCols = crAppRenderColumns(appKey);
      var resources = crResourcesForApp(appKey);
      var displayLabel = CR_APP_DISPLAY_LABEL[appKey] || app.label;
      var html = '<div class="cr-app-section cr-app-section--matrix" data-app-key="' + esc(appKey) + '">';
      /* App header with Remove (kept from the prior layout — Figma
         doesn't show it on this state but the existing flow needs
         a way to remove an added app, and the Roles list / Edit Role
         flows depend on this affordance).

         Round 28 (2026-08-11 — nested "Core Planning" header QA): the
         accordion toggle target is now the WHOLE `.cr-app-section-head`
         row (`role="button"`, moved off the old `.cr-app-head-left`
         wrapper), so clicking anywhere in the row — not just the
         chevron/title — expands or collapses the section. The three
         children (chevron button, title, Remove application) are flat
         flex siblings, ordered via CSS so Create Role keeps its
         original "chevron+title left / Remove right" look untouched
         while Edit Role (`#createRolePage.is-edit-mode`, see
         styles.css) reorders them to "title left / Remove application
         + chevron grouped at the right", per an explicit updated
         layout spec. `.cr-app-title` grows to fill the remaining
         space either way, which is what actually pushes Remove
         application (and, in Edit Role, the chevron) to the row's
         right edge — no `justify-content: space-between` needed
         anymore. Remove application's own click handler still calls
         `stopPropagation()` (see the `crPermsContent` click listener
         below) so the delete action never accidentally toggles the
         section; the chevron button is `tabindex="-1"` and purely
         decorative (an actual `<button>` element per an accessibility
         requirement, but not a second independent tab stop — the
         header row itself carries the real `aria-expanded` +
         dynamically-updated `aria-label`, see `crToggleAppSection`). */
      var matrixWrapperId = "crMatrixWrap_" + appKey;
      var isEditRole = !!crEditingRecord;
      html += '<div class="cr-app-section-head" role="button" tabindex="0" aria-expanded="true" aria-controls="' + esc(matrixWrapperId) + '" aria-label="Collapse ' + esc(displayLabel) + '" data-cr-app-toggle="' + esc(appKey) + '">';
      html += '<button type="button" class="cr-app-head-chev-btn" tabindex="-1" aria-hidden="true">';
      /* Inline "v" chevron matching Figma 924:14138. Rotates -90deg on
         collapse in Create Role (unchanged); rotates 180deg (up) in
         Edit Role, matching Role Details/Functions — see styles.css. */
      html += '<svg class="cr-app-head-chev" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';
      html += '</button>';
      html += '<span class="cr-app-title" title="' + esc(displayLabel) + '">' + esc(displayLabel) + '</span>';
      /* Round 9 (2026-06-09): rename "Remove" → "Remove application"
         to disambiguate from per-row remove affordances.
         Round 28 (2026-08-11): in Edit Role only, this now reuses the
         existing ADS compact outlined/secondary `.btn-std` component
         (bordered, 36px, matching Cancel/Save Role's own contract)
         instead of the compact 26px ghost/text-only treatment Create
         Role keeps — same label, same preserved indigo text color
         (`.btn-std`'s `#4045c2` is the exact same token this control
         already used), no icon, no arrow. */
      html += '<button type="button" class="cr-app-remove' + (isEditRole ? ' btn-std' : '') + '" data-remove-app="' + esc(appKey) + '" aria-label="Remove ' + esc(displayLabel) + ' application">';
      html += 'Remove application';
      html += '</button>';
      html += '</div>';
      /* Wrap the matrix table so the accordion has a single body
         element to hide. Checkbox state lives in the inputs and is
         preserved across collapse/expand. */
      html += '<div class="cr-app-section-body" id="' + esc(matrixWrapperId) + '">';
      /* Matrix table.

         Action column headers render a compact select-all checkbox
         + label (no sort glyph — this is a permission-assignment
         matrix, not a sortable data table). The first "Functions"
         column intentionally has NO header checkbox per the brief.
         Each header checkbox is scoped to its own (app, column)
         pair: clicking it only toggles cells inside the same
         `.cr-app-section` and the same `data-column`. The
         indeterminate state is recomputed from body checkboxes
         after every change. */
      /* Round 11 (2026-06-09): emit a <colgroup> so the Functions
         column and every action column have explicit, locked widths.
         Combined with `table-layout: fixed` on `.cr-matrix`, this
         guarantees the Functions column starts at the same x-position
         and renders at the same width across every application
         section regardless of how many action columns the app
         supports. Disney Ads Agent (1 action) renders a short table
         that still anchors to the same left edge, while IAM/TOM
         (5 actions) extend further to the right — no fakes, no
         shifting. The `data-action` attribute lets us key any future
         per-action override off the column without re-walking the
         <th> tree. */
      /* Round 13 (2026-06-09): every matrix table now spans the full
         section width (`width: 100%` in CSS) so all five application
         tables share the same left AND right edges. Functions column
         is still locked to 240px and each supported action column is
         still locked to 100px via <col class="cr-mcol-act">. A
         trailing **spacer column** (no width) absorbs any remaining
         width — that's how Disney Ads Agent (1 action) ends up as
         wide as Core Planning (4 actions) and IAM (5 actions) without
         distorting any action-column width and without adding fake
         disabled action columns. The spacer column also gives the
         section-level "Remove application" button a real right edge
         to anchor against. */
      /* The application heading and Remove application action remain
         outside this dedicated horizontal scroller. Keeping the region
         keyboard-focusable lets compact-desktop users reach later action
         columns without making the whole detail page overflow. */
      html += '<div class="cr-matrix-scroll" role="region" tabindex="0" aria-label="' + esc(displayLabel) + ' permission table, scroll horizontally for more actions">';
      html += '<table class="cr-matrix" role="table" aria-label="' + esc(displayLabel) + ' functions matrix" data-action-count="' + cols.length + '">';
      html += '<colgroup>';
      html += '<col class="cr-mcol-fn">';
      for (var cg = 0; cg < renderCols.length; cg++) {
        html += '<col class="cr-mcol-act' + (renderCols[cg].ghost ? ' cr-mcol-ghost' : '') + '" data-action="' + esc(renderCols[cg].key) + '"' +
          (renderCols[cg].ghost ? ' data-ghost="true"' : '') + '>';
      }
      html += '<col class="cr-mcol-spacer">';
      html += '</colgroup>';
      html += '<thead><tr>';
      html += '<th class="cr-matrix-th cr-matrix-th-fn"><span class="cr-matrix-th-inner"><span>Functions</span></span></th>';
      /* Round 20 (2026-06-09): per-app column-header display override
         (CR_APP_COLUMN_DISPLAY_LABEL). DAA's "Read" column reads as
         "Access" per the brief, but the column's internal identity
         (`data-column`, input id slug, CR_COLUMN_TO_PM_ACTION lookup,
         "Select all X actions in Y" tooltip) stays on the canonical
         column key — only the visible `<span>` label is overridden. */
      var colDisplay = CR_APP_COLUMN_DISPLAY_LABEL[appKey] || {};
      for (var c = 0; c < renderCols.length; c++) {
        var colLabel0 = renderCols[c].key;
        if (renderCols[c].ghost) {
          /* Empty shared-track placeholder so later columns (e.g. Update)
             keep the same x across apps. No controls, no label. */
          html += '<th class="cr-matrix-th cr-matrix-th-act cr-matrix-th-ghost" data-column="' + esc(colLabel0) + '" aria-hidden="true" role="presentation"></th>';
          continue;
        }
        var colLabelDisplay = colDisplay[colLabel0] || colLabel0;
        var headerInputId = "perm_head_" + appKey + "_" + colLabel0.toLowerCase();
        var headerTitle = "Select all " + colLabel0 + " actions in " + displayLabel;
        html += '<th class="cr-matrix-th cr-matrix-th-act">' +
          '<label class="cr-matrix-th-inner cr-matrix-col-head">' +
            '<input type="checkbox" class="cr-perm-check cr-matrix-col-toggle" id="' + headerInputId + '"' +
              ' data-app-key="' + esc(appKey) + '"' +
              ' data-column="' + esc(colLabel0) + '"' +
              ' title="' + esc(headerTitle) + '"' +
              ' aria-label="' + esc(headerTitle) + '">' +
            '<span class="cr-matrix-col-head-label">' + esc(colLabelDisplay) + '</span>' +
          '</label>' +
        '</th>';
      }
      /* Trailing spacer <th> — intentionally empty (no label, no
         control). aria-hidden + presentation role so screen readers
         don't announce a phantom column header. */
      html += '<th class="cr-matrix-th cr-matrix-th-spacer" aria-hidden="true" role="presentation"></th>';
      html += '</tr></thead>';
      html += '<tbody>';
      /* Round 20 (2026-06-09): per-app, per-resource display-label
         override (CR_APP_RESOURCE_DISPLAY_LABEL). The visible row
         label may be a shorter alias (DAA: Plan Queries / Forecasting /
         Team Summary / IO Compare) but `data-resource` and the
         checkbox `value` stay on the canonical `resource.title` so
         CR_ROLE_MATRIX hydration, dirty-state, and serialization
         keep working unchanged. */
      var resourceDisplay = CR_APP_RESOURCE_DISPLAY_LABEL[appKey] || {};
      for (var k = 0; k < resources.length; k++) {
        var resource = resources[k];
        var rowDisplayLabel = resourceDisplay[resource.title] || resource.title;
        var isDataAccessRow = !!resource.isDataAccessRow;
        html += '<tr class="cr-matrix-row' + (isDataAccessRow ? ' cr-matrix-row--data-access' : '') + '"' +
          (isDataAccessRow ? ' data-data-access-key="' + esc(resource.dataAccessKey) + '"' : '') + '>';
        html += '<td class="cr-matrix-fn">' + esc(rowDisplayLabel) + '</td>';
        for (var cc = 0; cc < renderCols.length; cc++) {
          var colLabel = renderCols[cc].key;
          if (renderCols[cc].ghost) {
            html += '<td class="cr-matrix-cell cr-matrix-cell-ghost" data-column="' + esc(colLabel) + '" aria-hidden="true"></td>';
            continue;
          }
          /* Sensitive/Regional Data Access rows only support Read +
             Create — every other column (Update/Delete/Assign) must
             render as a fully empty, non-interactive, non-focusable
             cell — no checkbox, no dash/em-dash/placeholder glyph of
             any kind (brief: "unsupported cells must remain visually
             empty"). Standard CRUD rows keep the pre-existing
             behavior of a real checkbox in every column the app
             supports (Figma 924:14107). */
          var cellIsSupported = !!(resource.support && resource.support.indexOf(colLabel) !== -1);
          if (!cellIsSupported) {
            html += '<td class="cr-matrix-cell cr-matrix-cell-unsupported" aria-hidden="true"></td>';
            continue;
          }
          var pmAction = CR_COLUMN_TO_PM_ACTION[colLabel];
          var slug = resource.title.toLowerCase().replace(/[^a-z0-9]+/g, "_") + "_" + pmAction.toLowerCase().replace(/[^a-z0-9]+/g, "_");
          var inputId = "perm_" + appKey + "_" + slug;
          /* Accessible name always spells out App, Function, Action —
             e.g. "Core Planning, Sensitive Data Access, Read" — never
             just the bare column label, so the checkbox's identity
             survives outside the visual table grid (brief a11y rule). */
          var checkAriaLabel = displayLabel + ", " + rowDisplayLabel + ", " + colLabel;
          html += '<td class="cr-matrix-cell' + (isDataAccessRow ? ' cr-matrix-cell-data-access' : '') + '">' +
            '<label class="cr-matrix-check-wrap">' +
              '<input type="checkbox" class="cr-perm-check cr-matrix-check' + (isDataAccessRow ? ' cr-data-access-check' : '') + '" id="' + inputId + '"' +
                ' value="' + esc(resource.title + "::" + pmAction) + '"' +
                ' data-resource="' + esc(resource.title) + '"' +
                ' data-action="' + esc(pmAction) + '"' +
                ' data-column="' + esc(colLabel) + '"' +
                (isDataAccessRow ? ' data-data-access-key="' + esc(resource.dataAccessKey) + '" data-data-access-role="' + esc(colLabel.toLowerCase()) + '"' : '') +
                ' aria-label="' + esc(checkAriaLabel) + '">' +
              '<span class="cr-matrix-check-visual" aria-hidden="true"></span>' +
            '</label>' +
          '</td>';
        }
        /* Trailing spacer <td> — intentionally empty so the table
           width matches the section. */
        html += '<td class="cr-matrix-cell cr-matrix-cell-spacer" aria-hidden="true"></td>';
        html += '</tr>';
      }
      html += '</tbody></table>';
      html += '</div>'; /* /.cr-matrix-scroll */
      html += '</div>'; /* /.cr-app-section-body */
      html += '</div>'; /* /.cr-app-section--matrix */
      return html;
    }

    function crAddApplication(appKey) {
      if (!appKey || crAddedApps.indexOf(appKey) >= 0 || !APP_PERMISSIONS[appKey]) return;
      crAddedApps.push(appKey);
      var wrapper = document.createElement("div");
      wrapper.innerHTML = buildAppSectionHtml(appKey);
      var section = wrapper.firstChild;
      crPermsContent.appendChild(section);
      /* Figma matrix presentation has no Access Level dropdown — the
         matrix opens with all checkboxes unchecked so the user
         deliberately selects each action. Edit Role hydration calls
         applyCheckedActions() later to restore the persisted state. */
      crPermsContent.style.display = "";
      crSetAppValue("");
      crRefreshAppMenu();
      updateFunctionsCount();
      validateCreateRole();
      if (window.IAM && IAM.evenColumns) IAM.evenColumns.schedule("cr-matrix");
    }
    function crRemoveApplication(appKey) {
      var idx = crAddedApps.indexOf(appKey);
      if (idx === -1) return;
      /* Accessibility (Final-QA): removing a section deletes the very
         button that currently has focus, which would otherwise drop
         focus to <body> with no visible indicator of where keyboard
         navigation continues from. Move focus BEFORE the DOM removal
         to whichever sibling application's Remove button sits next
         (below first, else the previous one), or — if this was the
         last remaining application — to the "Select applications"
         trigger, which is the next logical control once the Functions
         card returns to its empty state. Only redirects focus when
         the removal actually originated from this section's own
         Remove button, so removals triggered programmatically (e.g.
         Edit Role's confirm-modal path, which already restores focus
         to its own opener) are left untouched. */
      var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
      var removeBtn = section ? section.querySelector('[data-remove-app="' + appKey + '"]') : null;
      var focusWasOnRemoveBtn = !!(removeBtn && document.activeElement === removeBtn);
      var nextFocusTarget = null;
      if (focusWasOnRemoveBtn && section) {
        var nextSection = section.nextElementSibling;
        var prevSection = section.previousElementSibling;
        var candidate = (nextSection && nextSection.classList.contains("cr-app-section")) ? nextSection
          : (prevSection && prevSection.classList.contains("cr-app-section")) ? prevSection
          : null;
        nextFocusTarget = candidate ? candidate.querySelector(".cr-app-remove") : crAppTrigger;
      }
      crAddedApps.splice(idx, 1);
      if (section) {
        var accessDd = section.querySelector(".cr-access-level-dd");
        if (accessDd) closeAccessLevelDD(accessDd);
        if (section.parentNode) section.parentNode.removeChild(section);
      }
      if (crAddedApps.length === 0) crPermsContent.style.display = "none";
      crRefreshAppMenu();
      crUpdateAddBtnState();
      updateFunctionsCount();
      validateCreateRole();
      if (nextFocusTarget && typeof nextFocusTarget.focus === "function") {
        nextFocusTarget.focus();
      }
    }

    /* ─── Remove application (Create/Edit Role) — canonical ADS Modal
       confirm (Figma 38:46) + toast. Final-QA pass (2026-08-11): added
       the same pending-guard / loading-state / inline-error scaffold
       Delete Team already uses (`tmDeletePending` / setTmDeleteLoading
       / showTmDeleteError) — this action has no real network call to
       await, but the "confirmed product pattern" for every destructive
       confirm in this prototype is to still show a brief busy state
       and re-validate the record right before mutating it, rather than
       resolving instantly, so Remove application now matches Delete
       Team / Revoke access instead of being the one confirm dialog
       without it. */
    var crAppRemoveBackdrop = document.getElementById("crAppRemoveBackdrop");
    var crAppRemoveClose = document.getElementById("crAppRemoveClose");
    var crAppRemoveCancel = document.getElementById("crAppRemoveCancel");
    var crAppRemoveConfirm = document.getElementById("crAppRemoveConfirm");
    var crAppRemoveConfirmLabel = document.getElementById("crAppRemoveConfirmLabel");
    var crAppRemoveAppNameEl = document.getElementById("crAppRemoveAppName");
    var crAppRemoveError = document.getElementById("crAppRemoveError");
    var crAppRemoveDefaultLabel = crAppRemoveConfirmLabel ? crAppRemoveConfirmLabel.textContent : "Remove";
    var crAppRemovePendingKey = null;
    var crAppRemoveLastFocus = null;
    var crAppRemoveInFlight = false;
    var crAppRemoveTimer = null;

    function setCrAppRemoveLoading(isLoading) {
      if (crAppRemoveConfirm) {
        crAppRemoveConfirm.disabled = isLoading;
        crAppRemoveConfirm.classList.toggle("is-loading", isLoading);
      }
      if (crAppRemoveConfirmLabel) {
        crAppRemoveConfirmLabel.textContent = isLoading ? "Removing\u2026" : crAppRemoveDefaultLabel;
      }
      // Cancel/Close stay disabled for the duration of the request — same
      // ADS pattern as Revoke access / Delete Team: the safe exits are
      // unavailable, not hidden, while the destructive action is busy.
      if (crAppRemoveCancel) crAppRemoveCancel.disabled = isLoading;
      if (crAppRemoveClose) crAppRemoveClose.disabled = isLoading;
    }

    function clearCrAppRemoveError() {
      if (!crAppRemoveError) return;
      crAppRemoveError.setAttribute("hidden", "");
      crAppRemoveError.textContent = "";
    }

    function showCrAppRemoveError(message) {
      if (!crAppRemoveError) return;
      crAppRemoveError.textContent = message;
      crAppRemoveError.removeAttribute("hidden");
    }

    function openRemoveAppConfirm(appKey) {
      if (!appKey || !crAppRemoveBackdrop) return;
      var app = APP_PERMISSIONS[appKey];
      var appLabel = app ? app.label : appKey;
      crAppRemovePendingKey = appKey;
      crAppRemoveLastFocus = document.activeElement;
      clearCrAppRemoveError();
      setCrAppRemoveLoading(false);
      if (crAppRemoveAppNameEl) crAppRemoveAppNameEl.textContent = appLabel;
      crAppRemoveBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (crAppRemoveCancel) crAppRemoveCancel.focus();
      }, 0);
    }

    function closeRemoveAppConfirm() {
      if (!crAppRemoveBackdrop) return;
      // Never dismiss out from under an in-flight request — Cancel/Close
      // are disabled during that window (see setCrAppRemoveLoading), so
      // reaching here while pending would only be a programmatic misuse.
      if (crAppRemoveInFlight) return;
      if (crAppRemoveTimer) {
        clearTimeout(crAppRemoveTimer);
        crAppRemoveTimer = null;
      }
      clearCrAppRemoveError();
      setCrAppRemoveLoading(false);
      crAppRemoveBackdrop.setAttribute("hidden", "");
      crAppRemovePendingKey = null;
      if (crAppRemoveLastFocus && typeof crAppRemoveLastFocus.focus === "function") {
        crAppRemoveLastFocus.focus();
      }
      crAppRemoveLastFocus = null;
    }

    function performRemoveAppAfterConfirm() {
      // Guard against a rapid double-click firing the mutation twice —
      // the dialog stays open through the whole request (loading
      // state), so this also blocks re-clicking the disabled button.
      if (crAppRemoveInFlight) return;
      if (!crAppRemovePendingKey) {
        closeRemoveAppConfirm();
        return;
      }
      // Stable snapshot taken before any delay, so this request can't
      // silently act on the wrong application if something changed
      // crAppRemovePendingKey in the meantime.
      var appKey = crAppRemovePendingKey;
      var app = APP_PERMISSIONS[appKey];
      var appLabel = app ? app.label : appKey;
      crAppRemoveInFlight = true;
      clearCrAppRemoveError();
      setCrAppRemoveLoading(true);
      // Prototype-only simulated latency (same 700ms pattern as Delete
      // Team / Revoke access) so the loading state is visible; no real
      // network/API call exists to await here. Modal stays open,
      // dimensions unchanged, and no success toast fires until this
      // resolves.
      crAppRemoveTimer = setTimeout(function () {
        crAppRemoveTimer = null;
        crAppRemoveInFlight = false;
        // Re-validate rather than trust the closure — if the
        // application was already removed (e.g. via a second control)
        // while this request was in flight, surface an error instead
        // of silently no-op'ing or double-removing.
        if (crAddedApps.indexOf(appKey) === -1) {
          setCrAppRemoveLoading(false);
          showCrAppRemoveError("We couldn\u2019t find " + appLabel + "\u2019s application record. Close this dialog and try again.");
          return;
        }
        clearCrAppRemoveError();
        setCrAppRemoveLoading(false);
        crAppRemoveBackdrop.setAttribute("hidden", "");
        crAppRemovePendingKey = null;
        crAppRemoveLastFocus = null;
        crRemoveApplication(appKey);
        showEdlToast({
          type: "success",
          title: "Application removed",
          bodyHtml: "Permissions for <strong>" + esc(appLabel) + "</strong> have been removed from the role."
        });
      }, 700);
    }

    if (crAppRemoveClose) crAppRemoveClose.addEventListener("click", closeRemoveAppConfirm);
    if (crAppRemoveCancel) crAppRemoveCancel.addEventListener("click", closeRemoveAppConfirm);
    if (crAppRemoveConfirm) crAppRemoveConfirm.addEventListener("click", performRemoveAppAfterConfirm);
    if (crAppRemoveBackdrop) {
      crAppRemoveBackdrop.addEventListener("click", function (e) {
        if (e.target === crAppRemoveBackdrop) closeRemoveAppConfirm();
      });
      /* Focus trap: Tab/Shift+Tab wrap within the dialog while open —
         same pattern as Delete Team / the Add User search modal. */
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Tab") return;
        if (crAppRemoveBackdrop.hasAttribute("hidden")) return;
        var dialog = crAppRemoveBackdrop.querySelector(".cr-confirm-dialog");
        if (!dialog) return;
        var focusable = dialog.querySelectorAll('button:not([hidden]):not(:disabled), input:not([hidden]):not(:disabled), [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }

    /* ─── Per-application accordion ─────────────────────────────────
       Toggle the matrix-wrapper visibility on each app section
       independently. The toggle target is `.cr-app-head-left`
       (chevron + app title). The Remove button intentionally sits
       outside the toggle so deletion never accidentally collapses
       the section. The accordion is purely visual:
       - Checkbox state lives on the inputs and is preserved across
         collapse/expand (CSS uses `display: none`, which keeps
         checked-state in the DOM).
       - `snapshotCrState` does not read collapsed state, so toggling
         can never enable Save Role. */
    function crToggleAppSection(head) {
      if (!head) return;
      var section = head.closest(".cr-app-section--matrix");
      if (!section) return;
      var willCollapse = !section.classList.contains("cr-app-section--collapsed");
      section.classList.toggle("cr-app-section--collapsed", willCollapse);
      head.setAttribute("aria-expanded", willCollapse ? "false" : "true");
      var titleEl = head.querySelector(".cr-app-title");
      var titleText = titleEl ? titleEl.textContent.trim() : "";
      if (titleText) {
        head.setAttribute("aria-label", (willCollapse ? "Expand " : "Collapse ") + titleText);
      }
    }
    crPermsContent.addEventListener("click", function (e) {
      var removeBtn = e.target.closest("[data-remove-app]");
      if (removeBtn) {
        e.preventDefault();
        e.stopPropagation();
        var appKey = removeBtn.getAttribute("data-remove-app");
        if (crEditingRecord) {
          openRemoveAppConfirm(appKey);
        } else {
          crRemoveApplication(appKey);
        }
        return;
      }
      var appToggle = e.target.closest("[data-cr-app-toggle]");
      if (appToggle) {
        e.preventDefault();
        crToggleAppSection(appToggle);
        return;
      }
      var levelTrigger = e.target.closest(".cr-access-level-trigger");
      if (levelTrigger) {
        e.preventDefault();
        e.stopPropagation();
        var triggerDd = levelTrigger.closest(".cr-access-level-dd");
        if (!triggerDd) return;
        if (triggerDd.classList.contains("open")) closeAccessLevelDD(triggerDd);
        else openAccessLevelDD(triggerDd);
        return;
      }
      var levelOption = e.target.closest("[data-access-level-option]");
      if (levelOption) {
        applyAccessLevelSelection(levelOption);
        return;
      }
      var showBtn = e.target.closest("[data-show-all]");
      if (showBtn) {
        var sec2 = showBtn.closest(".cr-app-section");
        if (!sec2) return;
        var allSections = crPermsContent.querySelectorAll(".cr-app-section");
        for (var s = 0; s < allSections.length; s++) {
          if (allSections[s] !== sec2) setSectionExpanded(allSections[s], false);
        }
        setSectionExpanded(sec2, true);
        updateCrModuleSummaries(sec2);
        return;
      }
      var moduleBtn = e.target.closest("[data-module-toggle]");
      if (moduleBtn) {
        var mod = moduleBtn.closest(".cr-module");
        if (!mod) return;
        var body = mod.querySelector(".cr-module-body");
        var expanded = moduleBtn.getAttribute("aria-expanded") !== "false";
        moduleBtn.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (body) body.style.display = expanded ? "none" : "";
        return;
      }
      var collapseBtn = e.target.closest("[data-collapse-all]");
      if (collapseBtn) {
        var sec3 = collapseBtn.closest(".cr-app-section");
        if (!sec3) return;
        collapseAllModules(sec3);
        if (!isCustomAccessLevel(sec3.getAttribute("data-access-level"))) {
          setSectionExpanded(sec3, false);
        }
      }
    });
    crPermsContent.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      var moduleHead = e.target.closest("[data-module-toggle]");
      if (moduleHead && moduleHead === e.target) {
        e.preventDefault();
        moduleHead.click();
        return;
      }
      var appHead = e.target.closest("[data-cr-app-toggle]");
      if (appHead && appHead === e.target) {
        e.preventDefault();
        crToggleAppSection(appHead);
      }
    });
    /* ─── Column-level select-all (matrix headers) ─────────────────
       Each action column header has its own `.cr-matrix-col-toggle`
       checkbox. Clicking it toggles every body checkbox in the same
       column within the same app section. The native browser
       indeterminate state is set programmatically by
       `refreshColumnToggleState` after any body checkbox change
       (cell-driven or header-driven). Scope is strictly the
       enclosing `.cr-app-section` — never crosses apps.

       Body checkboxes carry `data-column` so we can target a column
       cheaply via a single selector; the header checkbox is
       identified by `.cr-matrix-col-toggle` (it's a `.cr-perm-check`
       so it inherits EDL hover/focus/checked visuals, but the
       `.cr-matrix-col-toggle` class is what excludes it from "body
       cell" queries below). */
    function getColumnBodyChecks(section, colLabel) {
      if (!section || !colLabel) return [];
      var sel = '.cr-matrix tbody .cr-perm-check[data-column="' + colLabel.replace(/"/g, '\\"') + '"]';
      return section.querySelectorAll(sel);
    }
    function refreshColumnToggleState(section, colLabel) {
      var head = section.querySelector('.cr-matrix-col-toggle[data-column="' + colLabel.replace(/"/g, '\\"') + '"]');
      if (!head) return;
      var boxes = getColumnBodyChecks(section, colLabel);
      if (!boxes.length) {
        head.checked = false;
        head.indeterminate = false;
        return;
      }
      var checkedCount = 0;
      for (var i = 0; i < boxes.length; i++) if (boxes[i].checked) checkedCount++;
      if (checkedCount === 0) {
        head.checked = false;
        head.indeterminate = false;
      } else if (checkedCount === boxes.length) {
        head.checked = true;
        head.indeterminate = false;
      } else {
        head.checked = false;
        head.indeterminate = true;
      }
      /* Tooltip reflects current state — "some selected" gets the
         indeterminate hint, otherwise the standard select/deselect
         hint based on whether all are checked. */
      var appTitle = (section.querySelector(".cr-app-title") || {}).textContent || "";
      var base;
      if (head.indeterminate) {
        base = "Some " + colLabel + " actions selected. Click to select all.";
      } else if (head.checked) {
        base = "Deselect all " + colLabel + " actions in " + appTitle;
      } else {
        base = "Select all " + colLabel + " actions in " + appTitle;
      }
      head.setAttribute("title", base);
    }
    function refreshAllColumnTogglesForSection(section) {
      if (!section) return;
      var heads = section.querySelectorAll(".cr-matrix-col-toggle");
      for (var i = 0; i < heads.length; i++) {
        refreshColumnToggleState(section, heads[i].getAttribute("data-column"));
      }
    }
    function refreshAllColumnTogglesEverywhere() {
      var sections = crPermsContent.querySelectorAll(".cr-app-section--matrix");
      for (var i = 0; i < sections.length; i++) refreshAllColumnTogglesForSection(sections[i]);
    }
    function applyColumnToggle(head) {
      if (!head) return;
      var section = head.closest(".cr-app-section");
      if (!section) return;
      var colLabel = head.getAttribute("data-column");
      var boxes = getColumnBodyChecks(section, colLabel);
      /* "If indeterminate: treat click as select all" — browsers
         report `head.checked` as `true` immediately after a click on
         an indeterminate native checkbox, so the post-click state
         already encodes our desired semantics (indeterminate→true
         turns into select-all; checked→false turns into clear-all).
         We don't need extra branching here. */
      var nextChecked = head.checked;
      head.indeterminate = false;
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked !== nextChecked) {
          boxes[i].checked = nextChecked;
        }
      }
      /* Sensitive/Regional Data Access's Read and Create checkboxes
         are independently selectable (no dependency between them —
         see CR_DATA_ACCESS_ROWS above), so a column select-all simply
         toggles them like any other checkbox; no extra reconciliation
         pass is needed here. */
      /* Header tooltip + downstream state. The header is its own
         element; refreshing the column also rewrites its title. */
      refreshColumnToggleState(section, colLabel);
    }
    /* ─── Sensitive/Regional Data Access: independent Read/Create ───
       Scoped per application section — every application owns its own
       Sensitive/Regional state, so toggling Core Planning's Sensitive
       Data Access never touches Identity and Access Management's.
       Read and Create are plain, independently-selectable checkboxes;
       no dependency is enforced between them (the brief explicitly
       says not to invent one). */
    crPermsContent.addEventListener("change", function (e) {
      var sec = e.target.closest(".cr-app-section");
      if (!sec) return;
      if (e.target.classList && e.target.classList.contains("cr-matrix-col-toggle")) {
        /* Header click — bulk-toggle the column within this section
           only, then update form state. */
        applyColumnToggle(e.target);
      } else if (e.target.classList && e.target.classList.contains("cr-perm-check")) {
        /* Body cell change — recompute the column header state for
           the affected column only (scope: this section). */
        var colLabel = e.target.getAttribute("data-column");
        if (colLabel) refreshColumnToggleState(sec, colLabel);
      }
      /* Figma matrix has no access-level dropdown — each checkbox
         change updates the form state directly. */
      updateFunctionsCount();
      validateCreateRole();
    });

    crAddBtn.addEventListener("click", function () {
      if (crAddBtn.disabled) return;
      crAddApplication(crAppCurrent);
    });

    crRoleName.addEventListener("input", function () {
      validateCreateRole();
    });

    var crDescriptionEl = document.getElementById("crDescription");
    if (crDescriptionEl) {
      crDescriptionEl.addEventListener("input", function () {
        validateCreateRole();
      });
    }

    /* ─── Collapsible sections (Basic Information, Functions) ─── */
    function crToggleSection(header) {
      var card = header.closest(".cr-card");
      if (!card) return;
      var willCollapse = !card.classList.contains("collapsed");
      card.classList.toggle("collapsed", willCollapse);
      header.setAttribute("aria-expanded", willCollapse ? "false" : "true");
      /* Round 28 (2026-08-11): keep the header's own accessible name in
         sync with its live state ("Expand Role Details" / "Collapse
         Role Details") — the chevron itself is a decorative
         `tabindex="-1"` button (real `<button>` element per an
         accessibility requirement, but not an independent tab stop),
         so this label lives on the one real keyboard toggle target:
         the header row itself. */
      var titleEl = header.querySelector(".cr-section-title");
      var titleText = titleEl ? titleEl.textContent.trim() : "";
      if (titleText) {
        header.setAttribute("aria-label", (willCollapse ? "Expand " : "Collapse ") + titleText);
      }
    }
    var crToggleHeaders = crPage.querySelectorAll(".cr-section-header[data-cr-toggle]");
    for (var ch = 0; ch < crToggleHeaders.length; ch++) {
      (function (header) {
        header.addEventListener("click", function (e) {
          var nested = e.target.closest && e.target.closest("button, a, input, select, textarea");
          if (nested && header.contains(nested) && nested !== header) return;
          crToggleSection(header);
        });
        header.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            crToggleSection(header);
          }
        });
      })(crToggleHeaders[ch]);
    }
    /* ─── Back / Cancel ─── */
    var crBackBtn = document.getElementById("crBack");
    var crCancelBtn = document.getElementById("crCancel");
    if (crBackBtn) crBackBtn.addEventListener("click", hideCreateRole);
    if (crCancelBtn) crCancelBtn.addEventListener("click", hideCreateRole);

    /* ─── Save Role — demo-only local CRUD ───
       Maps the live form state into a Roles & Permissions table row,
       prepends it to the in-memory dataset, returns to the list, and
       fires an EDL success toast. On Edit Role the same handler updates
       the existing record in place. No network. */
    var APP_KEY_TO_TABLE_LABEL = {
      core_planning:              "Core Planning",
      identity_access_management: "IAM",
      target_options_manager:     "TOM",
      disney_ads_agent:           "Disney Ads Agent",
      inventory_catalog_manager:  "ICM"
    };
    var CR_CURRENT_USER = "Marge Simpson";

    function crTodayString() {
      var d = new Date();
      function pad(n) { return (n < 10 ? "0" : "") + n; }
      return pad(d.getMonth() + 1) + "/" + pad(d.getDate()) + "/" + d.getFullYear();
    }

    function crCollectFunctions() {
      var out = [];
      var sections = crPermsContent.querySelectorAll(".cr-app-section");
      for (var i = 0; i < sections.length; i++) {
        var key = sections[i].getAttribute("data-app-key") || "";
        /* Body cells only — exclude column-header select-all
           checkboxes (they share `.cr-perm-check` for EDL visual
           reuse but are not assignment cells). */
        var count = sections[i].querySelectorAll('.cr-matrix tbody .cr-perm-check:checked').length;
        if (!count) continue;
        var label = APP_KEY_TO_TABLE_LABEL[key] ||
                    (APP_PERMISSIONS[key] && APP_PERMISSIONS[key].label) || key;
        /* `access` retained on the persisted record for backwards
           compatibility with the Roles list / Edit Role hydration —
           the Figma Create Role matrix doesn't surface an Access
           Level dropdown, so we default to "Custom" so existing
           consumers don't mistake the row for a preset bundle. */
        out.push({ name: label, count: count, access: "Custom" });
      }
      return out;
    }

    /* Data Accessibility is no longer a single global choice — it's
       per-application (every application's function table carries its
       own independent Sensitive/Regional Data Access rows). `status`
       is kept for backward compatibility with the persisted role
       shape (it predates the per-app model and nothing else in the UI
       renders it as a badge), derived here as "does ANY added
       application have Sensitive/Regional Data Access set to Read or
       Create" rather than from a single pair of checkboxes. */
    function crCollectStatus() {
      var sensAny = crPermsContent.querySelector('.cr-data-access-check[data-data-access-key="sensitive"]:checked');
      var regAny  = crPermsContent.querySelector('.cr-data-access-check[data-data-access-key="regional"]:checked');
      if (sensAny && regAny) return "Standard";
      if (sensAny) return "Sensitive";
      if (regAny)  return "Regional";
      return "Standard";
    }

    function crNewRoleId() {
      return "r_local_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
    }

    function handleCrSave() {
      if (!isCreateRoleValid()) {
        var nameMissing = !(crRoleName.value && crRoleName.value.trim());
        iamRevealAccordionField(nameMissing ? crRoleName : document.getElementById("crAppTrigger"));
        return;
      }
      if (crSaveBtn.disabled) return;

      var descEl = document.getElementById("crDescription");
      var name = crRoleName.value.trim();
      var description = descEl ? descEl.value.trim() : "";
      if (description && description.slice(-1) !== ".") description += ".";
      var functions = crCollectFunctions();
      var status = crCollectStatus();

      if (crEditingRecord) {
        crEditingRecord.role = name;
        crEditingRecord.description = description;
        crEditingRecord.functions = functions;
        crEditingRecord.status = status;
        hideCreateRole();
        renderRPTable();
        renderRPPagination();
        showEdlToast({
          type: "success",
          title: "Role updated",
          bodyHtml: '&ldquo;<strong>' + esc(name) + '</strong>&rdquo; has been updated.'
        });
        return;
      }

      var record = {
        id: crNewRoleId(),
        role: name,
        description: description,
        functions: functions,
        status: status,
        createdBy: CR_CURRENT_USER,
        createDate: crTodayString()
      };
      ROLES_PERMISSIONS_DATA.unshift(record);
      RP_ORIGINAL_ORDER.unshift(record);

      rpSortKey = null;
      rpSortDir = null;
      rpCurrentPage = 1;

      hideCreateRole();
      renderRPTable();
      renderRPPagination();

      showEdlToast({
        type: "success",
        title: "Role created",
        bodyHtml: '&ldquo;<strong>' + esc(name) + '</strong>&rdquo; has been created.'
      });
    }

    if (crSaveBtn) {
      crSaveBtn.addEventListener("click", handleCrSave);
      /* A disabled Save does not receive the click; the header action
         row behind it does. Reveal the collapsed section that still
         fails validation. */
      if (crSaveBtn.parentElement) {
        crSaveBtn.parentElement.addEventListener("click", function (e) {
          if (!crSaveBtn.disabled || e.target !== crSaveBtn.parentElement) return;
          var rect = crSaveBtn.getBoundingClientRect();
          if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
          handleCrSave();
        });
      }
    }

    /* ─── Save as Draft (Figma 1025:23238 page-header action group) ───
       Create Role's own draft action (unrelated to Edit User, which no
       longer has a "Save as Draft" concept as of the Final-QA header
       simplification pass): unlike Save Role, a draft is NOT gated
       behind full validation (no required Role Name, no required
       application/permission) — drafting must always succeed so a
       partially-configured role is never lost.
       It does not create or update a fully active role record; it
       simply confirms the draft and returns to the Roles list,
       leaving the in-progress form values exactly as the admin left
       them (no reset, no mutation of ROLES_PERMISSIONS_DATA). */
    var crSaveDraftBtn = document.getElementById("crSaveDraft");
    function handleCrSaveDraft() {
      var name = crRoleName.value.trim() || (crEditingRecord && crEditingRecord.role) || "This role";
      hideCreateRole();
      showEdlToast({
        type: "success",
        title: "Draft saved",
        bodyHtml: '&ldquo;<strong>' + esc(name) + '</strong>&rdquo; has been saved as a draft. Nothing was published yet.'
      });
    }
    if (crSaveDraftBtn) crSaveDraftBtn.addEventListener("click", handleCrSaveDraft);

    /* ─── Remove Role (Edit Role only) ─── */
    var crConfirmBackdrop = document.getElementById("crConfirmBackdrop");
    var crConfirmRoleName = document.getElementById("crConfirmRoleName");
    var crConfirmCancel   = document.getElementById("crConfirmCancel");
    var crConfirmRemove   = document.getElementById("crConfirmRemove");
    var crConfirmLastFocus = null;

    function openRemoveConfirm() {
      if (!crEditingRecord || !crConfirmBackdrop) return;
      crConfirmLastFocus = document.activeElement;
      crConfirmRoleName.textContent = crEditingRecord.role || "this role";
      crConfirmBackdrop.removeAttribute("hidden");
      setTimeout(function () { if (crConfirmCancel) crConfirmCancel.focus(); }, 0);
    }

    function closeRemoveConfirm() {
      if (!crConfirmBackdrop) return;
      crConfirmBackdrop.setAttribute("hidden", "");
      if (crConfirmLastFocus && typeof crConfirmLastFocus.focus === "function") {
        crConfirmLastFocus.focus();
      }
      crConfirmLastFocus = null;
    }

    /* PRD rule: a role cannot be removed while it is assigned to any
       active user. Returns true if at least one user with status
       "Active" carries this role name. */
    function roleHasActiveAssignees(roleName) {
      if (!roleName || typeof DATA === "undefined" || !DATA) return false;
      for (var i = 0; i < DATA.length; i++) {
        var u = DATA[i];
        if (!u || u.status !== "Active") continue;
        var roles = u.roles || [];
        for (var r = 0; r < roles.length; r++) {
          if (roles[r] === roleName) return true;
        }
      }
      return false;
    }

    function performRemoveRole() {
      if (!crEditingRecord) { closeRemoveConfirm(); return; }
      var record = crEditingRecord;
      var name = record.role || "";
      closeRemoveConfirm();

      if (roleHasActiveAssignees(name)) {
        showEdlToast({
          type: "error",
          title: "Unable to remove role",
          bodyHtml: '&ldquo;<strong>' + esc(name) + '</strong>&rdquo; is assigned to active users and cannot be removed.'
        });
        return;
      }

      var id = record.id;
      for (var i = ROLES_PERMISSIONS_DATA.length - 1; i >= 0; i--) {
        if (ROLES_PERMISSIONS_DATA[i].id === id) ROLES_PERMISSIONS_DATA.splice(i, 1);
      }
      for (var j = RP_ORIGINAL_ORDER.length - 1; j >= 0; j--) {
        if (RP_ORIGINAL_ORDER[j].id === id) RP_ORIGINAL_ORDER.splice(j, 1);
      }
      var tp = Math.max(1, Math.ceil(getRPFilteredData().length / rpPageSize));
      if (rpCurrentPage > tp) rpCurrentPage = tp;
      hideCreateRole();
      renderRPTable();
      renderRPPagination();

      showEdlToast({
        type: "success",
        title: "Role removed",
        bodyHtml: '&ldquo;<strong>' + esc(name) + '</strong>&rdquo; has been removed.'
      });
    }

    if (crRemoveBtn)     crRemoveBtn.addEventListener("click", openRemoveConfirm);
    if (crConfirmCancel) crConfirmCancel.addEventListener("click", closeRemoveConfirm);
    if (crConfirmRemove) crConfirmRemove.addEventListener("click", performRemoveRole);
    if (crConfirmBackdrop) {
      crConfirmBackdrop.addEventListener("click", function (e) {
        if (e.target === crConfirmBackdrop) closeRemoveConfirm();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      /* Edit Team — Remove member confirm sits above any role/user
         confirms in the V3 modal stack because it can be opened while
         on the Edit Team page. Close it first so Esc behaves the
         same as Cancel for this dialog. */
      var tmDb = document.getElementById("tmDeleteConfirmBackdrop");
      if (tmDb && !tmDb.hasAttribute("hidden") && typeof window.__closeTmDeleteConfirmModal === "function") {
        window.__closeTmDeleteConfirmModal();
        return;
      }
      var tmRb = document.getElementById("tmRemoveMemberBackdrop");
      if (tmRb && !tmRb.hasAttribute("hidden") && typeof window.__closeTmRemoveMemberModal === "function") {
        window.__closeTmRemoveMemberModal();
        return;
      }
      var auRb = document.getElementById("auRemoveUserBackdrop");
      if (auRb && !auRb.hasAttribute("hidden") && typeof window.__closeAuRemoveUserModal === "function") {
        window.__closeAuRemoveUserModal();
        return;
      }
      var auIb = document.getElementById("auInactiveConfirmBackdrop");
      if (auIb && !auIb.hasAttribute("hidden") && typeof window.__cancelAuInactiveModal === "function") {
        window.__cancelAuInactiveModal();
        return;
      }
      if (crAppRemoveBackdrop && !crAppRemoveBackdrop.hasAttribute("hidden")) {
        closeRemoveAppConfirm();
        return;
      }
      if (crConfirmBackdrop && !crConfirmBackdrop.hasAttribute("hidden")) {
        closeRemoveConfirm();
      }
    });

    /* ─── "+ Create Role" trigger in Roles & Permissions panel ─── */
    var createRoleBtns = document.querySelectorAll("#rolesCreateBtn, #rolesPanel .btn-ghost");
    for (var cri = 0; cri < createRoleBtns.length; cri++) {
      if (createRoleBtns[cri].id === "rolesCreateBtn" || createRoleBtns[cri].textContent.trim().indexOf("Create Role") !== -1) {
        createRoleBtns[cri].addEventListener("click", function (e) {
          e.preventDefault();
          showCreateRole();
        });
      }
    }

    /* ─── Role-name click (opt-in per row via .rp-role-link) opens Edit Role ─── */
    var rpTbody = document.getElementById("rpTbody");
    if (rpTbody) {
      rpTbody.addEventListener("click", function (e) {
        var link = e.target.closest(".rp-role-link[data-role-edit]");
        if (!link) return;
        e.preventDefault();
        var id = link.getAttribute("data-role-edit");
        var record = null;
        for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
          if (ROLES_PERMISSIONS_DATA[i].id === id) { record = ROLES_PERMISSIONS_DATA[i]; break; }
        }
        if (record) showEditRole(record);
      });
    }
  }
});

/* ADS Accordion: open a collapsed card and focus the field that
   blocked submit. Form values stay on the inputs; this only changes
   the section's expanded state. */
function iamRevealAccordionField(el) {
  if (!el || !el.closest) return;
  var card = el.closest(".cr-card, .au-card");
  if (card && card.classList.contains("collapsed")) {
    card.classList.remove("collapsed");
    var header = card.querySelector(".cr-section-header[role='button']");
    if (header) {
      header.setAttribute("aria-expanded", "true");
      var titleEl = header.querySelector(".cr-section-title");
      var titleText = titleEl ? titleEl.textContent.trim() : "";
      if (titleText) header.setAttribute("aria-label", "Collapse " + titleText);
    }
  }
  setTimeout(function () {
    try { el.focus(); } catch (err) {}
    if (typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "nearest" });
  }, 0);
}
