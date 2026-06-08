var DATA = [
  /* ── Page 1 ── */
  { id: "u001", avatar: "../avatars/photos/m01.png", name: "Homer Simpson",                email: "Homer.Simpson@disney.com",                roles: ["Core Planning Admin", "Planning Manager", "Planner"],              status: "Active",   team: "National Ad Sales",          title: "VP, Ad Sales Operations",              region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"   },
  { id: "u002", avatar: "../avatars/photos/f01.png", name: "Marge Simpson",                email: "marge.simpson@disney.com",                roles: ["Planner", "Planning Specialist"],                                   status: "Active",   team: "Sales Planning",             title: "Director, Media Strategy",             region: "NA",    lastLogin: "May 2, 2026, 2:30 PM"   },
  { id: "u003", avatar: "../avatars/photos/m02.png", name: "Bart Simpson",                 email: "Bart.Simpson@disney.com",                 roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "National Ad Sales",          title: "Coordinator, Sales Support",           region: "NA",    lastLogin: "May 3, 2026, 9:15 AM"   },
  { id: "u004", avatar: "../avatars/photos/m03.png", name: "Ned Flanders",                 email: "Ned.Flanders@disney.com",                 roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Client & Brand Solutions",   title: "Manager, Client Partnerships",         region: "EMEA",  lastLogin: "Apr 28, 2026, 11:20 AM"  },
  { id: "u005", avatar: "../avatars/photos/f02.png", name: "Lisa Simpson",                 email: "Lisa.Simpson@disney.com",                 roles: ["Ad Operations Specialist", "Campaign Planner", "Planning Specialist"], status: "Active", team: "Ad Operations",              title: "Sr. Analyst, Audience Insights",       region: "NA",    lastLogin: "May 1, 2026, 4:00 PM"   },
  { id: "u006", avatar: "../avatars/photos/m04.png", name: "Montgomery Burns",             email: "Montgomery.Burns@disney.com",             roles: ["Campaign Planner", "Planning Manager"],                             status: "Inactive", team: "Revenue & Yield Management", title: "SVP, Revenue Strategy",                region: "NA",    lastLogin: "Feb 14, 2026, 10:30 AM"  },
  { id: "u007", avatar: "../avatars/photos/m05.png", name: "Milhouse Van Houten",          email: "Milhouse.VanHouten@disney.com",           roles: ["Operations Admin"],                                                 status: "Active",   team: "Sales Planning",             title: "Analyst, Campaign Planning",           region: "ANZ",   lastLogin: "Apr 30, 2026, 3:45 PM"   },
  { id: "u008", avatar: "../avatars/photos/f03.png", name: "Maggie Simpson",               email: "Maggie.Simpson@disney.com",               roles: ["Read-Only Viewer", "Planner"],                                      status: "Active",   team: "Revenue & Yield Management", title: "Associate, Revenue Ops",               region: "NA",    lastLogin: "May 2, 2026, 7:00 PM"   },
  { id: "u009", avatar: "../avatars/photos/m06.png", name: "Waylon Smithers",              email: "Waylon.Smithers@disney.com",              roles: ["Operations Admin", "Read-Only Viewer", "ICM Admin"],                status: "Inactive", team: "Sales Planning",             title: "Lead, Billing Operations",             region: "NA",    lastLogin: "Jan 22, 2026, 9:00 AM"   },
  { id: "u010", avatar: "../avatars/photos/m07.png", name: "Nelson Muntz",                 email: "Nelson.Muntz@disney.com",                 roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Revenue & Yield Management", title: "Associate, Finance & Planning",        region: "LATAM", lastLogin: "Apr 25, 2026, 5:30 PM"   },

  /* ── Page 2 ── */
  { id: "u011", avatar: "../avatars/photos/m08.png", name: "Ralph Wiggum",                 email: "Ralph.Wiggum@disney.com",                 roles: ["Ad Operations Specialist", "Campaign Planner"],                     status: "Active",   team: "Ad Operations",              title: "Associate, Ad Operations",             region: "NA",    lastLogin: "Apr 29, 2026, 1:15 PM"   },
  { id: "u012", avatar: "../avatars/photos/m09.png", name: "Principal Skinner",            email: "Principal.Skinner@disney.com",            roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Agency & Holding Company Sales", title: "Sr. Manager, Agency Partnerships",     region: "NA",    lastLogin: "May 1, 2026, 10:00 AM"   },
  { id: "u013", avatar: "../avatars/photos/m10.png", name: "Krusty the Clown",             email: "Krusty.TheClown@disney.com",              roles: ["Campaign Planner"],                                                 status: "Active",   team: "Client & Brand Solutions",   title: "Director, Brand Partnerships",         region: "NA",    lastLogin: "Apr 22, 2026, 2:00 PM"   },
  { id: "u014", avatar: "../avatars/photos/f04.png", name: "Selma Bouvier",                email: "Selma.Bouvier@disney.com",                roles: ["Operations Admin", "Read-Only Viewer", "Planning Specialist"],      status: "Active",   team: "National Ad Sales",          title: "Manager, Billing Operations",          region: "EMEA",  lastLogin: "Apr 18, 2026, 9:30 AM"   },
  { id: "u015", avatar: "../avatars/photos/f05.png", name: "Patty Bouvier",                email: "Patty.Bouvier@disney.com",                roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Revenue & Yield Management", title: "Sr. Analyst, Revenue Reporting",       region: "EMEA",  lastLogin: "May 2, 2026, 11:45 AM"   },
  { id: "u016", avatar: "../avatars/photos/m11.png", name: "Lenny Leonard",                email: "Lenny.Leonard@disney.com",                roles: ["Planner", "Planning Specialist", "Planning Manager"],               status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Media Investment",        region: "NA",    lastLogin: "Apr 30, 2026, 4:15 PM"   },
  { id: "u017", avatar: "../avatars/photos/m12.png", name: "Carl Carlson",                 email: "Carl.Carlson@disney.com",                 roles: ["Operations Admin", "Planning Specialist"],                          status: "Active",   team: "Revenue & Yield Management", title: "Manager, Yield Optimization",          region: "NA",    lastLogin: "Apr 27, 2026, 3:00 PM"   },
  { id: "u018", avatar: "../avatars/photos/m13.png", name: "Moe Szyslak",                  email: "Moe.Szyslak@disney.com",                  roles: ["Read-Only Viewer", "Planner"],                                      status: "Inactive", team: "Client & Brand Solutions",   title: "Coordinator, Client Services",         region: "LATAM", lastLogin: "Mar 10, 2026, 6:00 PM"   },
  { id: "u019", avatar: "../avatars/photos/m14.png", name: "Apu Nahasapeemapetilon",       email: "Apu.Nahasapeemapetilon@disney.com",       roles: ["Planning Manager", "Campaign Planner", "Planning Specialist", "Planner"], status: "Active", team: "Agency & Holding Company Sales", title: "Sr. Manager, International Strategy",  region: "ANZ",   lastLogin: "May 3, 2026, 7:30 AM"   },
  { id: "u020", avatar: "../avatars/photos/m15.png", name: "Comic Book Guy",               email: "Comic.BookGuy@disney.com",                roles: ["Read-Only Viewer", "Operations Admin"],                             status: "Active",   team: "Revenue & Yield Management", title: "Analyst, Financial Planning",          region: "NA",    lastLogin: "Apr 14, 2026, 12:30 PM"  },

  /* ── Page 3 ── */
  { id: "u021", avatar: "../avatars/photos/m16.png", name: "Chief Wiggum",                 email: "Chief.Wiggum@disney.com",                 roles: ["Planner"],                                                          status: "Active",   team: "Client & Brand Solutions",   title: "VP, Client Solutions",                 region: "NA",    lastLogin: "Apr 24, 2026, 10:15 AM"  },
  { id: "u022", avatar: "../avatars/photos/f06.png", name: "Edna Krabappel",               email: "Edna.Krabappel@disney.com",               roles: ["Planner", "Campaign Planner", "Ad Operations Specialist"],         status: "Active",   team: "Sales Planning",             title: "Director, Planning & Activation",      region: "NA",    lastLogin: "May 1, 2026, 3:30 PM"   },
  { id: "u023", avatar: "../avatars/photos/m17.png", name: "Groundskeeper Willie",         email: "Groundskeeper.Willie@disney.com",         roles: ["Ad Operations Specialist", "Planning Specialist"],                  status: "Active",   team: "Ad Operations",              title: "Lead, Campaign Trafficking",           region: "EMEA",  lastLogin: "Apr 20, 2026, 8:00 AM"   },
  { id: "u024", avatar: "../avatars/photos/m18.png", name: "Fat Tony",                     email: "Fat.Tony@disney.com",                     roles: ["Planning Manager", "Planning Specialist", "Campaign Planner"],      status: "Active",   team: "Revenue & Yield Management", title: "SVP, Distribution Strategy",           region: "NA",    lastLogin: "Apr 16, 2026, 1:00 PM"   },
  { id: "u025", avatar: "../avatars/photos/m19.png", name: "Dr. Hibbert",                  email: "Julius.Hibbert@disney.com",               roles: ["Read-Only Viewer", "Operations Admin", "Planning Manager"],         status: "Active",   team: "Revenue & Yield Management", title: "Manager, Revenue Analytics",           region: "NA",    lastLogin: "Apr 29, 2026, 9:45 AM"   },
  { id: "u026", avatar: "../avatars/photos/m20.png", name: "Professor Frink",              email: "Professor.Frink@disney.com",              roles: ["Operations Admin", "Planning Specialist", "Ad Operations Specialist"], status: "Active", team: "Addressable & Programmatic Sales", title: "Sr. Analyst, Programmatic Yield",      region: "NA",    lastLogin: "Apr 12, 2026, 2:15 PM"   },
  { id: "u027", avatar: "../avatars/photos/m21.png", name: "Barney Gumble",                email: "Barney.Gumble@disney.com",                roles: ["Campaign Planner", "Ad Operations Specialist"],                     status: "Inactive", team: "Ad Operations",              title: "Coordinator, Campaign Delivery",       region: "NA",    lastLogin: "Feb 28, 2026, 11:00 AM"  },
  { id: "u028", avatar: "../avatars/photos/m22.png", name: "Sideshow Bob",                 email: "Sideshow.Bob@disney.com",                 roles: ["Read-Only Viewer", "Campaign Planner", "Planner"],                  status: "Active",   team: "Agency & Holding Company Sales", title: "Director, Agency Development",         region: "EMEA",  lastLogin: "Apr 8, 2026, 4:45 PM"    },
  { id: "u029", avatar: "../avatars/photos/m23.png", name: "Kent Brockman",                email: "Kent.Brockman@disney.com",                roles: ["Core Planning Admin", "Planning Manager"],                          status: "Active",   team: "National Ad Sales",          title: "VP, Global Media Sales",               region: "NA",    lastLogin: "May 2, 2026, 6:30 PM"   },
  { id: "u030", avatar: "../avatars/photos/m24.png", name: "Otto Mann",                    email: "Otto.Mann@disney.com",                    roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Revenue & Yield Management", title: "Associate, Accounts Receivable",       region: "LATAM", lastLogin: "Apr 5, 2026, 10:00 AM"   },

  /* ── Page 4 ── */
  { id: "u031", avatar: "../avatars/photos/m25.png", name: "Mayor Quimby",                 email: "Mayor.Quimby@disney.com",                 roles: ["Planning Manager", "Planning Specialist"],                          status: "Active",   team: "Sales Planning",             title: "SVP, Sales & Partnerships",            region: "NA",    lastLogin: "Apr 3, 2026, 11:30 AM"   },
  { id: "u032", avatar: "../avatars/photos/m26.png", name: "Hans Moleman",                 email: "Hans.Moleman@disney.com",                 roles: ["Operations Admin"],                                                 status: "Active",   team: "National Ad Sales",          title: "Associate, Billing Support",           region: "NA",    lastLogin: "Apr 18, 2026, 8:15 AM"   },
  { id: "u033", avatar: "../avatars/photos/m27.png", name: "Gil Gunderson",                email: "Gil.Gunderson@disney.com",                roles: ["Read-Only Viewer", "Planner", "Campaign Planner"],                  status: "Inactive", team: "National Ad Sales",          title: "Coordinator, New Business",            region: "NA",    lastLogin: "Jan 15, 2026, 3:00 PM"   },
  { id: "u034", avatar: "../avatars/photos/m28.png", name: "Rainier Wolfcastle",           email: "Rainier.Wolfcastle@disney.com",           roles: ["Campaign Planner", "Ad Operations Specialist", "Planning Specialist"], status: "Active", team: "Client & Brand Solutions",   title: "Director, Content Partnerships",       region: "EMEA",  lastLogin: "Apr 14, 2026, 9:00 AM"   },
  { id: "u035", avatar: "../avatars/photos/m29.png", name: "Troy McClure",                 email: "Troy.McClure@disney.com",                 roles: ["Planner", "Planning Specialist"],                                   status: "Active",   team: "Sales Planning",             title: "Manager, Cross-Platform Planning",     region: "NA",    lastLogin: "Apr 10, 2026, 2:45 PM"   },
  { id: "u036", avatar: "../avatars/photos/m30.png", name: "Disco Stu",                    email: "Disco.Stu@disney.com",                    roles: ["Ad Operations Specialist"],                                         status: "Active",   team: "Ad Operations",              title: "Analyst, Creative Ad Solutions",       region: "LATAM", lastLogin: "Mar 28, 2026, 12:00 PM"  },
  { id: "u037", avatar: "../avatars/photos/m31.png", name: "Dr. Nick Riviera",             email: "Nick.Riviera@disney.com",                 roles: ["Read-Only Viewer", "Operations Admin", "Planning Specialist"],      status: "Active",   team: "Revenue & Yield Management", title: "Analyst, Revenue Reconciliation",      region: "NA",    lastLogin: "Apr 22, 2026, 11:15 AM"  },
  { id: "u038", avatar: "../avatars/photos/m32.png", name: "Kirk Van Houten",              email: "Kirk.VanHouten@disney.com",               roles: ["Operations Admin", "Planning Specialist"],                          status: "Inactive", team: "Sales Planning",             title: "Associate, Inventory Management",      region: "NA",    lastLogin: "Mar 5, 2026, 4:00 PM"    },
  { id: "u039", avatar: "../avatars/photos/f07.png", name: "Luann Van Houten",             email: "Luann.VanHouten@disney.com",              roles: ["Planner", "Campaign Planner"],                                      status: "Active",   team: "Agency & Holding Company Sales", title: "Manager, Client Relations",            region: "ANZ",   lastLogin: "Apr 25, 2026, 8:30 AM"   },
  { id: "u040", avatar: "../avatars/photos/f08.png", name: "Agnes Skinner",                email: "Agnes.Skinner@disney.com",                roles: ["Read-Only Viewer", "TOM Admin"],                                    status: "Active",   team: "National Ad Sales",          title: "Sr. Analyst, Financial Controls",      region: "NA",    lastLogin: "Apr 17, 2026, 1:30 PM"   },

  /* ── Page 5 ── */
  { id: "u041", avatar: "../avatars/photos/m43.png", name: "Snake Jailbird",               email: "Snake.Jailbird@disney.com",               roles: ["Read-Only Viewer", "Planner", "Campaign Planner"],                  status: "Active",   team: "Addressable & Programmatic Sales", title: "Coordinator, Programmatic Deals",      region: "NA",    lastLogin: "Apr 2, 2026, 9:15 AM"    },
  { id: "u042", avatar: "../avatars/photos/m44.png", name: "Jimbo Jones",                  email: "Jimbo.Jones@disney.com",                  roles: ["Ad Operations Specialist", "Campaign Planner"],                     status: "Active",   team: "Addressable & Programmatic Sales", title: "Analyst, Ad Targeting",                region: "NA",    lastLogin: "Apr 30, 2026, 2:00 PM"   },
  { id: "u043", avatar: "../avatars/photos/m45.png", name: "Dolph Starbeam",               email: "Dolph.Starbeam@disney.com",               roles: ["Campaign Planner", "Planning Specialist", "Ad Operations Specialist"], status: "Inactive", team: "Ad Operations",              title: "Associate, Campaign Strategy",         region: "EMEA",  lastLogin: "Mar 20, 2026, 10:45 AM"  },
  { id: "u044", avatar: "../avatars/photos/f09.png", name: "Sherri Mackleberry",           email: "Sherri.Mackleberry@disney.com",           roles: ["Planner"],                                                          status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Audience Strategy",       region: "NA",    lastLogin: "May 1, 2026, 8:45 AM"    },
  { id: "u045", avatar: "../avatars/photos/f10.png", name: "Terri Mackleberry",            email: "Terri.Mackleberry@disney.com",            roles: ["Planner", "Planning Specialist", "Planning Manager"],               status: "Active",   team: "Sales Planning",             title: "Sr. Planner, Integrated Media",        region: "NA",    lastLogin: "Apr 28, 2026, 5:00 PM"   },
  { id: "u046", avatar: "../avatars/photos/m33.png", name: "Martin Prince",                email: "Martin.Prince@disney.com",                roles: ["Read-Only Viewer", "Planning Manager"],                             status: "Active",   team: "Sales Planning",             title: "Sr. Analyst, Data Governance",         region: "NA",    lastLogin: "Apr 24, 2026, 3:15 PM"   },
  { id: "u047", avatar: "../avatars/photos/m34.png", name: "Timothy Lovejoy",              email: "Timothy.Lovejoy@disney.com",              roles: ["Planning Manager", "Campaign Planner", "Planning Specialist", "Core Planning Admin"], status: "Active", team: "National Ad Sales",          title: "Director, Strategic Accounts",        region: "ANZ",   lastLogin: "Apr 19, 2026, 10:30 AM"  },
  { id: "u048", avatar: "../avatars/photos/m35.png", name: "Cletus Spuckler",              email: "Cletus.Spuckler@disney.com",              roles: ["Operations Admin", "Read-Only Viewer"],                             status: "Active",   team: "National Ad Sales",          title: "Coordinator, Invoice Processing",      region: "NA",    lastLogin: "Apr 13, 2026, 12:00 PM"  },
  { id: "u049", avatar: "../avatars/photos/f11.png", name: "Cookie Kwan",                  email: "Cookie.Kwan@disney.com",                  roles: ["Planner"],                                                          status: "Active",   team: "National Ad Sales",          title: "Sr. Manager, Regional Sales",          region: "ANZ",   lastLogin: "May 2, 2026, 9:00 AM"    },
  { id: "u050", avatar: "../avatars/photos/f12.png", name: "Lindsey Naegle",               email: "Lindsey.Naegle@disney.com",               roles: ["Operations Admin", "Planning Specialist", "TOM Admin"],             status: "Active",   team: "Revenue & Yield Management", title: "Director, Yield Strategy",             region: "NA",    lastLogin: "Apr 26, 2026, 4:30 PM"   },

  /* ── Page 6 ── */
  { id: "u051", avatar: "../avatars/photos/m36.png", name: "Lionel Hutz",                  email: "Lionel.Hutz@disney.com",                  roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Client & Brand Solutions",   title: "Manager, Business Development",        region: "NA",    lastLogin: "Apr 11, 2026, 2:45 PM"   },
  { id: "u052", avatar: "../avatars/photos/f13.png", name: "Helen Lovejoy",                email: "Helen.Lovejoy@disney.com",                roles: ["Planner", "Campaign Planner", "Planning Specialist"],               status: "Active",   team: "Agency & Holding Company Sales", title: "Sr. Planner, Agency Investment",        region: "EMEA",  lastLogin: "Apr 22, 2026, 10:00 AM"  },
  { id: "u053", avatar: "../avatars/photos/m37.png", name: "Artie Ziff",                   email: "Artie.Ziff@disney.com",                   roles: ["Planning Manager", "Core Planning Admin"],                          status: "Active",   team: "Revenue & Yield Management", title: "VP, Digital Revenue",                  region: "NA",    lastLogin: "May 3, 2026, 11:00 AM"   },
  { id: "u054", avatar: "../avatars/photos/f14.png", name: "Ruth Powers",                  email: "Ruth.Powers@disney.com",                  roles: ["Read-Only Viewer", "Operations Admin"],                             status: "Active",   team: "Revenue & Yield Management", title: "Manager, Revenue Systems",             region: "NA",    lastLogin: "Apr 27, 2026, 3:30 PM"   },
  { id: "u055", avatar: "../avatars/photos/m38.png", name: "Herman Hermann",               email: "Herman.Hermann@disney.com",               roles: ["Read-Only Viewer", "Operations Admin", "Planning Specialist"],      status: "Inactive", team: "Revenue & Yield Management", title: "Analyst, Cost Allocation",             region: "LATAM", lastLogin: "Feb 8, 2026, 9:15 AM"    },
  { id: "u056", avatar: "../avatars/photos/m39.png", name: "Wendell Borton",               email: "Wendell.Borton@disney.com",               roles: ["Ad Operations Specialist", "Planning Specialist"],                  status: "Active",   team: "Ad Operations",              title: "Associate, Creative Operations",       region: "NA",    lastLogin: "Apr 23, 2026, 1:45 PM"   },
  { id: "u057", avatar: "../avatars/photos/m40.png", name: "Lyle Lanley",                  email: "Lyle.Lanley@disney.com",                  roles: ["Campaign Planner", "Planning Manager", "Planner"],                  status: "Active",   team: "Addressable & Programmatic Sales", title: "Sr. Manager, Programmatic Sales",      region: "NA",    lastLogin: "May 1, 2026, 7:30 PM"    },
  { id: "u058", avatar: "../avatars/photos/m41.png", name: "Lewis Clark",                  email: "Lewis.Clark@disney.com",                  roles: ["Operations Admin"],                                                 status: "Inactive", team: "Revenue & Yield Management", title: "Analyst, Inventory Forecasting",       region: "ANZ",   lastLogin: "Mar 14, 2026, 11:00 AM"  },
  { id: "u059", avatar: "../avatars/photos/m42.png", name: "Kearney Zzyzwicz",             email: "Kearney.Zzyzwicz@disney.com",             roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Agency & Holding Company Sales", title: "Coordinator, Partner Relations",       region: "EMEA",  lastLogin: "Apr 16, 2026, 6:15 PM"   },
  { id: "u060", avatar: "../avatars/photos/f15.png", name: "Manjula Nahasapeemapetilon",   email: "Manjula.Nahasapeemapetilon@disney.com",   roles: ["Operations Admin", "Read-Only Viewer", "Planner"],                  status: "Active",   team: "Ad Operations",              title: "Lead, Operations Support",             region: "ANZ",   lastLogin: "Apr 29, 2026, 8:00 AM"   }
];

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
  { id: "e001", name: "Rachel Morales",       email: "r.morales@omnicommedia.com",       roles: ["Agency Admin"],             status: "Active",   organization: "Omnicom Media Group", title: "VP, Media Partnerships",           region: "NA",    lastLogin: "Apr 30, 2026, 10:15 AM"  },
  { id: "e002", name: "Kevin Zhang",          email: "k.zhang@omnicommedia.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Omnicom Media Group", title: "Group Director, Media",            region: "NA",    lastLogin: "May 2, 2026, 3:00 PM"    },
  { id: "e003", name: "Danielle Foster",      email: "d.foster@omd.com",                 roles: ["Campaign Planner"],         status: "Active",   organization: "OMD",                 title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 28, 2026, 2:30 PM"   },
  { id: "e004", name: "James Okonkwo",        email: "j.okonkwo@omd.com",                roles: ["Planning Manager"],         status: "Active",   organization: "OMD",                 title: "Director, Media Planning",         region: "EMEA",  lastLogin: "May 1, 2026, 9:45 AM"    },
  { id: "e005", name: "Leila Sharma",         email: "l.sharma@omd.com",                 roles: ["Read-Only Viewer"],         status: "Active",   organization: "OMD",                 title: "Media Analyst",                    region: "NA",    lastLogin: "Apr 27, 2026, 11:00 AM"  },
  { id: "e006", name: "Thomas Erikson",       email: "t.erikson@phdmedia.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "PHD",                 title: "Media Investment Lead",            region: "EMEA",  lastLogin: "Apr 24, 2026, 4:30 PM"   },
  { id: "e007", name: "Ana Gutierrez",        email: "a.gutierrez@phdmedia.com",         roles: ["Planner"],                  status: "Active",   organization: "PHD",                 title: "Associate Media Director",         region: "LATAM", lastLogin: "May 3, 2026, 8:15 AM"    },
  { id: "e008", name: "Michelle Kim",         email: "m.kim@omnicommedia.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "Omnicom Media Group", title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 1:30 PM"   },
  { id: "e009", name: "Brandon Wu",           email: "b.wu@omnicommedia.com",            roles: ["Ad Operations Specialist"], status: "Active",   organization: "Omnicom Media Group", title: "Programmatic Operations Lead",     region: "NA",    lastLogin: "Apr 25, 2026, 3:45 PM"   },
  { id: "e010", name: "Sophie Laurent",       email: "s.laurent@groupm.com",             roles: ["External Partner Admin"],   status: "Active",   organization: "WPP / GroupM",        title: "Director, Partner Engagement",     region: "EMEA",  lastLogin: "May 2, 2026, 10:00 AM"   },
  /* ── Page 2 — WPP / GroupM, Publicis Media ── */
  { id: "e011", name: "Patrick O'Brien",      email: "p.obrien@groupm.com",              roles: ["Read-Only Viewer"],         status: "Active",   organization: "WPP / GroupM",        title: "Media Finance Analyst",            region: "NA",    lastLogin: "Apr 22, 2026, 2:15 PM"   },
  { id: "e012", name: "Yuki Tanaka",          email: "y.tanaka@groupm.com",              roles: ["Campaign Planner"],         status: "Active",   organization: "WPP / GroupM",        title: "Media Planner",                    region: "APAC",  lastLogin: "Apr 30, 2026, 9:00 AM"   },
  { id: "e013", name: "Nadia Hassan",         email: "n.hassan@groupm.com",              roles: ["Planning Manager"],         status: "Active",   organization: "WPP / GroupM",        title: "Head of Planning",                 region: "EMEA",  lastLogin: "May 1, 2026, 11:30 AM"   },
  { id: "e014", name: "Derek Williams",       email: "d.williams@groupm.com",            roles: ["Read-Only Viewer"],         status: "Inactive", organization: "WPP / GroupM",        title: "Digital Activation Specialist",    region: "NA",    lastLogin: "Feb 20, 2026, 3:00 PM"   },
  { id: "e015", name: "Camille Rousseau",     email: "c.rousseau@groupm.com",            roles: ["Planner"],                  status: "Active",   organization: "WPP / GroupM",        title: "Content Investment Planner",       region: "EMEA",  lastLogin: "Apr 26, 2026, 1:00 PM"   },
  { id: "e016", name: "Marcus Johnson",       email: "m.johnson@groupm.com",             roles: ["Campaign Planner"],         status: "Active",   organization: "WPP / GroupM",        title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"    },
  { id: "e017", name: "Pooja Patel",          email: "p.patel@groupm.com",               roles: ["External Partner Admin"],   status: "Active",   organization: "WPP / GroupM",        title: "Partner Solutions Director",       region: "NA",    lastLogin: "Apr 21, 2026, 4:00 PM"   },
  { id: "e018", name: "Ryan Nguyen",          email: "r.nguyen@groupm.com",              roles: ["Ad Operations Specialist"], status: "Active",   organization: "WPP / GroupM",        title: "Programmatic Trader",              region: "NA",    lastLogin: "Apr 28, 2026, 10:30 AM"  },
  { id: "e019", name: "Isabella Torres",      email: "i.torres@publicismedia.com",       roles: ["Campaign Planner"],         status: "Active",   organization: "Publicis Media",      title: "Sr. Campaign Planner",             region: "LATAM", lastLogin: "Apr 18, 2026, 2:00 PM"   },
  { id: "e020", name: "Omar Shaikh",          email: "o.shaikh@publicismedia.com",       roles: ["Planning Manager"],         status: "Active",   organization: "Publicis Media",      title: "VP, Media Planning",               region: "NA",    lastLogin: "May 2, 2026, 9:15 AM"    },
  /* ── Page 3 — Publicis Media, IPG Mediabrands ── */
  { id: "e021", name: "Caroline Berg",        email: "c.berg@publicismedia.com",         roles: ["Planner"],                  status: "Active",   organization: "Publicis Media",      title: "Associate Media Director",         region: "EMEA",  lastLogin: "Apr 16, 2026, 11:45 AM"  },
  { id: "e022", name: "Andre Dupont",         email: "a.dupont@publicismedia.com",       roles: ["Campaign Planner"],         status: "Active",   organization: "Publicis Media",      title: "Media Investment Director",        region: "EMEA",  lastLogin: "Apr 29, 2026, 3:30 PM"   },
  { id: "e023", name: "Hiroshi Nakamura",     email: "h.nakamura@publicismedia.com",     roles: ["Read-Only Viewer"],         status: "Active",   organization: "Publicis Media",      title: "Digital Planner",                  region: "APAC",  lastLogin: "Apr 14, 2026, 10:00 AM"  },
  { id: "e024", name: "Elena Petrov",         email: "e.petrov@publicismedia.com",       roles: ["Campaign Planner"],         status: "Active",   organization: "Publicis Media",      title: "Sr. Programmatic Planner",         region: "EMEA",  lastLogin: "May 1, 2026, 8:00 AM"    },
  { id: "e025", name: "Jasmine Reed",         email: "j.reed@publicismedia.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Publicis Media",      title: "Media Campaign Manager",           region: "NA",    lastLogin: "Apr 24, 2026, 2:45 PM"   },
  { id: "e026", name: "Trevor Blackwood",     email: "t.blackwood@publicismedia.com",    roles: ["Planner"],                  status: "Inactive", organization: "Publicis Media",      title: "Media Planner",                    region: "NA",    lastLogin: "Jan 30, 2026, 11:00 AM"  },
  { id: "e027", name: "Amara Diallo",         email: "a.diallo@ipgmediabrands.com",      roles: ["External Partner Admin"],   status: "Active",   organization: "IPG Mediabrands",     title: "Partner Activation Lead",          region: "NA",    lastLogin: "Apr 20, 2026, 4:15 PM"   },
  { id: "e028", name: "Steven Park",          email: "s.park@ipgmediabrands.com",        roles: ["Read-Only Viewer"],         status: "Active",   organization: "IPG Mediabrands",     title: "Investment Analyst",               region: "NA",    lastLogin: "May 2, 2026, 1:30 PM"    },
  { id: "e029", name: "Fatima Al-Rashid",     email: "f.alrashid@ipgmediabrands.com",    roles: ["Campaign Planner"],         status: "Active",   organization: "IPG Mediabrands",     title: "Global Media Planner",             region: "EMEA",  lastLogin: "Apr 17, 2026, 9:30 AM"   },
  { id: "e030", name: "Lucas Martins",        email: "l.martins@ipgmediabrands.com",     roles: ["Planner"],                  status: "Active",   organization: "IPG Mediabrands",     title: "Associate Media Planner",          region: "LATAM", lastLogin: "Apr 27, 2026, 2:00 PM"   },
  /* ── Page 4 — IPG Mediabrands, Horizon Media ── */
  { id: "e031", name: "Diana Hoffman",        email: "d.hoffman@ipgmediabrands.com",     roles: ["Planning Manager"],         status: "Active",   organization: "IPG Mediabrands",     title: "Director, Strategic Planning",     region: "NA",    lastLogin: "May 3, 2026, 10:00 AM"   },
  { id: "e032", name: "Kwame Asante",         email: "k.asante@ipgmediabrands.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "IPG Mediabrands",     title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 22, 2026, 3:15 PM"   },
  { id: "e033", name: "Mei-Ling Chen",        email: "m.chen@horizonmedia.com",          roles: ["Agency Admin"],             status: "Active",   organization: "Horizon Media",       title: "Managing Director",                region: "APAC",  lastLogin: "Apr 15, 2026, 9:45 AM"   },
  { id: "e034", name: "Roberto Russo",        email: "r.russo@horizonmedia.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Media Activation Manager",         region: "EMEA",  lastLogin: "Apr 30, 2026, 11:30 AM"  },
  { id: "e035", name: "Zoe Mitchell",         email: "z.mitchell@horizonmedia.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Digital Campaign Planner",         region: "NA",    lastLogin: "Apr 28, 2026, 2:00 PM"   },
  { id: "e036", name: "Aleksei Volkov",       email: "a.volkov@horizonmedia.com",        roles: ["Planner"],                  status: "Active",   organization: "Horizon Media",       title: "Media Planner",                    region: "EMEA",  lastLogin: "May 1, 2026, 10:15 AM"   },
  { id: "e037", name: "Tanya Iyer",           email: "t.iyer@horizonmedia.com",          roles: ["Ad Operations Specialist"], status: "Active",   organization: "Horizon Media",       title: "Biddable Media Specialist",        region: "NA",    lastLogin: "Apr 19, 2026, 4:30 PM"   },
  { id: "e038", name: "Christopher Lam",      email: "c.lam@horizonmedia.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Performance Media Manager",        region: "APAC",  lastLogin: "Apr 25, 2026, 8:45 AM"   },
  { id: "e039", name: "Samira Khalil",        email: "s.khalil@horizonmedia.com",        roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Media Campaign Lead",              region: "EMEA",  lastLogin: "May 2, 2026, 3:45 PM"    },
  { id: "e040", name: "Ben Nakajima",         email: "b.nakajima@horizonmedia.com",      roles: ["Read-Only Viewer"],         status: "Active",   organization: "Horizon Media",       title: "Media Analytics Lead",             region: "APAC",  lastLogin: "Apr 13, 2026, 12:00 PM"  },
  /* ── Page 5 — Horizon Media, American Express, Mercedes-Benz ── */
  { id: "e041", name: "Veronica Cruz",        email: "v.cruz@horizonmedia.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 10:30 AM"  },
  { id: "e042", name: "Daniel Schwartz",      email: "d.schwartz@horizonmedia.com",      roles: ["Planning Manager"],         status: "Active",   organization: "Horizon Media",       title: "VP, Investment",                   region: "NA",    lastLogin: "May 3, 2026, 9:00 AM"    },
  { id: "e043", name: "Naomi Clarke",         email: "n.clarke@horizonmedia.com",        roles: ["External Partner Admin"],   status: "Active",   organization: "Horizon Media",       title: "Partner Development Director",     region: "NA",    lastLogin: "Apr 23, 2026, 1:15 PM"   },
  { id: "e044", name: "Felix Andersson",      email: "f.andersson@horizonmedia.com",     roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Media Strategy Manager",           region: "EMEA",  lastLogin: "Apr 26, 2026, 4:00 PM"   },
  { id: "e045", name: "Jade Thompson",        email: "j.thompson@horizonmedia.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 1, 2026, 2:30 PM"    },
  { id: "e046", name: "Ravi Mehta",           email: "r.mehta@horizonmedia.com",         roles: ["Ad Operations Specialist"], status: "Active",   organization: "Horizon Media",       title: "Programmatic Lead",                region: "NA",    lastLogin: "Apr 21, 2026, 11:00 AM"  },
  { id: "e047", name: "Christine Wu",         email: "c.wu@aexp.com",                    roles: ["External Partner Admin"],   status: "Active",   organization: "American Express",    title: "Brand Partnerships Manager",       region: "NA",    lastLogin: "Apr 28, 2026, 9:30 AM"   },
  { id: "e048", name: "Michael Torres",       email: "m.torres@aexp.com",                roles: ["Campaign Planner"],         status: "Active",   organization: "American Express",    title: "Advertising Campaign Manager",     region: "NA",    lastLogin: "May 2, 2026, 4:15 PM"    },
  { id: "e049", name: "Ashley Brennan",       email: "a.brennan@aexp.com",               roles: ["Read-Only Viewer"],         status: "Active",   organization: "American Express",    title: "Brand Media Planner",              region: "NA",    lastLogin: "Apr 24, 2026, 10:45 AM"  },
  { id: "e050", name: "Sophia Adebayo",       email: "s.adebayo@mbusa.com",              roles: ["Campaign Planner"],         status: "Active",   organization: "Mercedes-Benz",       title: "Global Media Manager",             region: "NA",    lastLogin: "Apr 30, 2026, 3:00 PM"   },
  /* ── Page 6 — Mercedes-Benz, Progressive, Honda, Lexus ── */
  { id: "e051", name: "Gregory Faulkner",     email: "g.faulkner@mbusa.com",             roles: ["Read-Only Viewer"],         status: "Active",   organization: "Mercedes-Benz",       title: "Media Analytics Director",         region: "NA",    lastLogin: "Apr 17, 2026, 2:15 PM"   },
  { id: "e052", name: "Natalia Romero",       email: "n.romero@mbusa.com",               roles: ["Campaign Planner"],         status: "Active",   organization: "Mercedes-Benz",       title: "Sr. Media Manager",                region: "NA",    lastLogin: "May 3, 2026, 11:30 AM"   },
  { id: "e053", name: "William Chen",         email: "w.chen@progressive.com",           roles: ["Planning Manager"],         status: "Active",   organization: "Progressive",         title: "Media Investment Lead",            region: "NA",    lastLogin: "Apr 25, 2026, 9:00 AM"   },
  { id: "e054", name: "Amelia Grant",         email: "a.grant@progressive.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "Progressive",         title: "Sr. Brand Media Planner",          region: "NA",    lastLogin: "Apr 29, 2026, 1:45 PM"   },
  { id: "e055", name: "Jordan Rivera",        email: "j.rivera@progressive.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Progressive",         title: "Global Media Manager",             region: "NA",    lastLogin: "Apr 22, 2026, 4:00 PM"   },
  { id: "e056", name: "Takeshi Yamamoto",     email: "t.yamamoto@honda.com",             roles: ["Read-Only Viewer"],         status: "Active",   organization: "Honda",               title: "Media Planning Specialist",        region: "APAC",  lastLogin: "Apr 15, 2026, 10:30 AM"  },
  { id: "e057", name: "Catherine O'Sullivan", email: "c.osullivan@honda.com",            roles: ["Campaign Planner"],         status: "Active",   organization: "Honda",               title: "National Media Planner",           region: "NA",    lastLogin: "May 2, 2026, 8:30 AM"    },
  { id: "e058", name: "Brandon Nguyen",       email: "b.nguyen@honda.com",               roles: ["Ad Operations Specialist"], status: "Active",   organization: "Honda",               title: "Digital Activation Manager",       region: "NA",    lastLogin: "Apr 27, 2026, 2:45 PM"   },
  { id: "e059", name: "Ji-Young Park",        email: "j.park@lexus.com",                 roles: ["Campaign Planner"],         status: "Active",   organization: "Lexus",               title: "Sr. Campaign Strategist",          region: "APAC",  lastLogin: "Apr 20, 2026, 11:15 AM"  },
  { id: "e060", name: "Rachel Huang",         email: "r.huang@lexus.com",                roles: ["External Partner Admin"],   status: "Inactive", organization: "Lexus",               title: "Partner Channel Manager",          region: "NA",    lastLogin: "Feb 11, 2026, 3:30 PM"   }
];
var EXTERNAL_TOTAL = 60;
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
var filterSnapshot = null;
var SEARCH_FIELDS = ["name", "email", "status", "team", "organization", "title", "region"];
/* R&P search fields — mirrors SEARCH_FIELDS above so the two tabs share
   the same case-insensitive substring-match model. `functions` is an
   array of {name, count} and is handled separately in getRPFilteredData
   (parallel to how `roles` is handled for the Users tab). */
var RP_SEARCH_FIELDS = ["role", "status", "createdBy", "createDate"];
var activeTab = "users";

/* ═══ ROLES & PERMISSIONS DATA ═══
   Enterprise IAM seed set for Atlas (permission bundles, not job titles). */

/* ═══ FUNCTIONS POPOVER DATA ═══ */
var FUNCTION_REGISTRY = {
  "IAM": [
    "iam_role_get","iam_role_list","iam_role_create","iam_role_update","iam_role_delete",
    "iam_function_assign","iam_data_assign",
    "iam_user_get","iam_user_list","iam_user_create","iam_user_update","iam_user_deactivate","iam_user_impersonate",
    "iam_analytics_get"
  ],
  "Core Planning": [
    "planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_order_delete",
    "planning_order_assign","planning_order_comment","planning_order_approve","planning_order_reject",
    "planning_plan_list","planning_plan_get","planning_plan_create","planning_plan_update","planning_plan_delete",
    "planning_lineitem_list","planning_lineitem_get","planning_lineitem_create","planning_lineitem_update","planning_lineitem_delete"
  ],
  "ICM": [
    "icm_offering_list","icm_offering_get","icm_offering_create","icm_offering_update","icm_offering_delete",
    "icm_salespackage_list","icm_salespackage_get","icm_salespackage_create","icm_salespackage_update","icm_salespackage_delete"
  ],
  "TOM": [
    "tom_option_list","tom_option_get","tom_option_update","tom_option_assign",
    "tom_group_list","tom_group_get","tom_group_create","tom_group_update","tom_group_assign","tom_group_archive",
    "tom_template_list","tom_template_get","tom_template_create","tom_template_update","tom_template_assign","tom_template_archive"
  ]
};

var ROLE_FUNCTION_MAP = {
  r001: { /* Atlas Admin */
    "IAM": FUNCTION_REGISTRY["IAM"].slice(),
    "Core Planning": FUNCTION_REGISTRY["Core Planning"].slice(),
    "ICM": FUNCTION_REGISTRY["ICM"].slice(),
    "TOM": FUNCTION_REGISTRY["TOM"].slice(),
    "Disney Ads Agent": ["media_plan_queries","forecasting_queries","planning_activity_summaries","approval_io_comparisons"]
  },
  r002: { /* Core Planning Admin */
    "Core Planning": FUNCTION_REGISTRY["Core Planning"].slice()
  },
  r003: { /* Operations Admin */
    "Core Planning": [
      "planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_order_assign","planning_order_comment",
      "planning_plan_list","planning_plan_get","planning_plan_create","planning_plan_update",
      "planning_lineitem_list","planning_lineitem_get","planning_lineitem_create","planning_lineitem_update"
    ]
  },
  r004: { /* Planner */
    "Core Planning": [
      "planning_order_list","planning_order_create","planning_order_update",
      "planning_plan_list","planning_plan_create","planning_plan_update",
      "planning_lineitem_list","planning_lineitem_create","planning_lineitem_update"
    ]
  },
  r005: { /* Planning Specialist */
    "Core Planning": [
      "planning_order_list","planning_order_create","planning_order_update",
      "planning_plan_list","planning_plan_create","planning_plan_update",
      "planning_lineitem_list","planning_lineitem_create","planning_lineitem_update"
    ]
  },
  r006: { /* Planning Manager */
    "Core Planning": [
      "planning_order_list","planning_order_approve","planning_order_reject",
      "planning_plan_list","planning_lineitem_list"
    ]
  },
  r013: { /* Campaign Planner */
    "Core Planning": [
      "planning_order_list","planning_order_create","planning_order_update",
      "planning_plan_list","planning_plan_create","planning_plan_update",
      "planning_lineitem_list","planning_lineitem_create","planning_lineitem_update"
    ],
    "Disney Ads Agent": ["media_plan_queries","forecasting_queries","planning_activity_summaries"]
  },
  r014: { /* Ad Operations Specialist */
    "Core Planning": [
      "planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_order_assign",
      "planning_plan_list","planning_plan_get","planning_plan_update",
      "planning_lineitem_list","planning_lineitem_get","planning_lineitem_update"
    ],
    "Disney Ads Agent": ["media_plan_queries","forecasting_queries","planning_activity_summaries","approval_io_comparisons"],
    "IAM": ["iam_user_list","iam_role_list","iam_analytics_get"]
  },
  r008: { /* Read-Only Viewer */
    "Core Planning": ["planning_order_list","planning_plan_list","planning_lineitem_list"]
  },
  r009: { /* ICM Admin */
    "ICM": FUNCTION_REGISTRY["ICM"].slice()
  },
  r010: { /* TOM Admin */
    "TOM": FUNCTION_REGISTRY["TOM"].slice()
  }
};

var ROLE_ACCESS_LEVELS = {
  r001: { "IAM": "Full Access", "Core Planning": "Full Access", "ICM": "Full Access", "TOM": "Full Access", "Disney Ads Agent": "Full Access" },
  r002: { "Core Planning": "Full Access" },
  r003: { "Core Planning": "Custom" },
  r004: { "Core Planning": "Edit" },
  r005: { "Core Planning": "Edit" },
  r006: { "Core Planning": "Approve" },
  r013: { "Core Planning": "Edit", "Disney Ads Agent": "Edit" },
  r014: { "Core Planning": "Edit", "Disney Ads Agent": "Full Access", "IAM": "View Only" },
  r008: { "Core Planning": "View Only" },
  r009: { "ICM": "Full Access" },
  r010:{ "TOM": "Full Access" }
};

var FUNCTION_LABEL_MAP = {
  "planning_order_list":"View","planning_order_get":"View","planning_order_create":"Create","planning_order_update":"Edit","planning_order_delete":"Delete","planning_order_assign":"Assign","planning_order_comment":"Comment","planning_order_approve":"Approve","planning_order_reject":"Reject",
  "planning_plan_list":"View","planning_plan_get":"View","planning_plan_create":"Create","planning_plan_update":"Edit","planning_plan_delete":"Delete",
  "planning_lineitem_list":"View","planning_lineitem_get":"View","planning_lineitem_create":"Create","planning_lineitem_update":"Edit","planning_lineitem_delete":"Delete",
  "iam_role_list":"View","iam_role_get":"View","iam_role_create":"Create","iam_role_update":"Edit","iam_role_delete":"Delete","iam_function_assign":"Assign permissions","iam_data_assign":"Manage data access",
  "iam_user_list":"View","iam_user_get":"View","iam_user_create":"Create","iam_user_update":"Edit","iam_user_deactivate":"Delete","iam_user_impersonate":"Impersonate users","iam_analytics_get":"View",
  "tom_option_list":"View","tom_option_get":"View","tom_option_update":"Edit","tom_option_assign":"Assign",
  "tom_group_list":"View","tom_group_get":"View","tom_group_create":"Create","tom_group_update":"Edit","tom_group_assign":"Assign","tom_group_archive":"Delete",
  "tom_template_list":"View","tom_template_get":"View","tom_template_create":"Create","tom_template_update":"Edit","tom_template_assign":"Assign permissions","tom_template_archive":"Delete",
  "admin_role_manage":"Assign permissions","admin_user_manage":"Manage configuration","admin_system_config":"Manage configuration","admin_audit_view":"View","admin_settings_update":"Manage settings",
  "media_plan_queries":"View","forecasting_queries":"View","planning_activity_summaries":"View","approval_io_comparisons":"View",
  "icm_offering_list":"View","icm_offering_get":"View","icm_offering_create":"Create","icm_offering_update":"Edit","icm_offering_delete":"Delete",
  "icm_salespackage_list":"View","icm_salespackage_get":"View","icm_salespackage_create":"Create","icm_salespackage_update":"Edit","icm_salespackage_delete":"Delete"
};

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
  if (key.indexOf("iam_") === 0) return "IAM";
  if (key.indexOf("planning_") === 0) return "Core Planning";
  if (key.indexOf("icm_") === 0) return "ICM";
  if (key.indexOf("tom_") === 0) return "TOM";
  if (key.indexOf("admin_") === 0) return "Admin";
  return "Disney Ads Agent";
}

/* Full application display name for the Permission Capability detail
   page (Figma 788:4348 "Choose Application*"). The PM table uses the
   short app token ("IAM") so it scans quickly in a 180px column; the
   detail page has space for the full product name and the user spec
   calls for "Identity Access Management" specifically. */
function appDisplayNameForKey(key) {
  var token = appForFunctionKey(key);
  if (token === "IAM") return "Identity Access Management";
  if (token === "ICM") return "Inventory Catalog Manager";
  if (token === "TOM") return "Targeting Options Manager";
  return token;
}

/* Applications available in the Choose Application dropdown on the
   Permission Capability detail page (Figma 788:4348). The first five
   are the apps with capabilities already onboarded into the IAM
   prototype (their function keys live in FUNCTION_REGISTRY and they
   appear as rows in the Permission Management table). The last four
   are Atlas admin applications onboarded for permission authoring —
   their first capability is created right here on this page, so they
   have permission groups + action pools defined below in
   PC_GROUPS_BY_APP / PC_POOL_BY_GROUP but no FUNCTION_REGISTRY
   capabilities yet. This is the "new application onboarding" path:
   IAM admin defines the capability surface (groups + actions) before
   the first capability instance is authored. */
var PC_APPS = [
  "Identity Access Management",
  "Core Planning",
  "Inventory Catalog Manager",
  "Targeting Options Manager",
  "Disney Ads Agent",
  "Deal Configuration Manager",
  "Unified Financial System",
  "HARPS",
  "PAID Invoice Centralization"
];

/* Permission Groups available per application. The first five rows
   are sourced from the PC_GROUP_FOR_KEY catalog so the dropdown
   lists exactly the groups that exist in the real permission data
   (no invented groups for onboarded apps). The remaining four are
   the spec'd group sets for the newly-onboarded admin applications;
   each group's action pool is defined in PC_POOL_BY_GROUP below. */
var PC_GROUPS_BY_APP = {
  "Identity Access Management":   ["Analytics", "Data Access", "Roles", "Users"],
  "Core Planning":                ["Order", "Media Plans", "Line Items"],
  "Inventory Catalog Manager":    ["Offerings", "Sales Packages"],
  "Targeting Options Manager":       ["Targeting Options", "Targeting Groups", "Targeting Templates"],
  "Disney Ads Agent":             ["Disney Ads Agent"],
  "Deal Configuration Manager":   ["Deal Types", "Package Rules", "Pricing Rules"],
  "Unified Financial System":     ["Billing Periods", "Invoice Dashboard", "Revenue Summary"],
  "HARPS":                        ["Revenue", "Adjustments", "Recognition Rules"],
  "PAID Invoice Centralization":  ["Invoices", "Invoice Line Items", "Sales Line Items", "NCS Export"]
};

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
  "Disney Ads Agent":             { name: "e.g. Run Forecasting Queries",     desc: "Query forecasting and planning summaries from Disney Ads Agent." },
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
var CR_APP_TO_PM_TOKEN = {
  identity_access_management: "IAM",
  core_planning:               "Core Planning",
  disney_ads_agent:            "Disney Ads Agent",
  inventory_catalog_manager:   "ICM",
  target_options_manager:      "TOM"
};
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
var BUNDLE_RULES = {
  "View Only":   { allow: ["View"] },
  "Edit":        { allow: ["View", "Create", "Edit", "Comment"] },
  "Approve":     { allow: ["View", "Approve", "Reject"] },
  "Full Access": { allow: null /* = entire pool */ },
  /* IAM-specific: User level grants everything in the Users group + read elsewhere */
  "User":        { allow: ["View"], fullGroups: ["Users"] },
  /* IAM-specific: Role level grants everything in the Roles group + read elsewhere */
  "Role":        { allow: ["View"], fullGroups: ["Roles"] }
};
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
var APP_LEVELS_BY_CR_KEY = {
  identity_access_management: ["View Only", "User", "Role", "Full Access", "Custom"],
  core_planning:               ["View Only", "Edit", "Approve", "Full Access", "Custom"],
  disney_ads_agent:            ["View Only", "Full Access", "Custom"],
  inventory_catalog_manager:   ["View Only", "Edit", "Full Access", "Custom"],
  target_options_manager:      ["View Only", "Edit", "Full Access", "Custom"]
};

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
var PC_GROUP_FOR_KEY = {
  /* IAM */
  "iam_analytics_get":    "Analytics",
  "iam_data_assign":      "Data Access",
  "iam_function_assign":  "Roles",
  "iam_role_list":        "Roles",
  "iam_role_get":         "Roles",
  "iam_role_create":      "Roles",
  "iam_role_update":      "Roles",
  "iam_role_delete":      "Roles",
  "iam_user_list":        "Users",
  "iam_user_get":         "Users",
  "iam_user_create":      "Users",
  "iam_user_update":      "Users",
  "iam_user_deactivate":  "Users",
  "iam_user_impersonate": "Users",
  /* Core Planning */
  "planning_order_list":      "Order",
  "planning_order_get":       "Order",
  "planning_order_create":    "Order",
  "planning_order_update":    "Order",
  "planning_order_delete":    "Order",
  "planning_order_assign":    "Order",
  "planning_order_comment":   "Order",
  "planning_order_approve":   "Order",
  "planning_order_reject":    "Order",
  "planning_plan_list":       "Media Plans",
  "planning_plan_get":        "Media Plans",
  "planning_plan_create":     "Media Plans",
  "planning_plan_update":     "Media Plans",
  "planning_plan_delete":     "Media Plans",
  "planning_lineitem_list":   "Line Items",
  "planning_lineitem_get":    "Line Items",
  "planning_lineitem_create": "Line Items",
  "planning_lineitem_update": "Line Items",
  "planning_lineitem_delete": "Line Items",
  /* ICM */
  "icm_offering_list":      "Offerings",
  "icm_offering_get":       "Offerings",
  "icm_offering_create":    "Offerings",
  "icm_offering_update":    "Offerings",
  "icm_offering_delete":    "Offerings",
  "icm_salespackage_list":   "Sales Packages",
  "icm_salespackage_get":    "Sales Packages",
  "icm_salespackage_create": "Sales Packages",
  "icm_salespackage_update": "Sales Packages",
  "icm_salespackage_delete": "Sales Packages",
  /* TOM */
  "tom_option_list":   "Targeting Options",
  "tom_option_get":    "Targeting Options",
  "tom_option_update": "Targeting Options",
  "tom_option_assign": "Targeting Options",
  "tom_group_list":    "Targeting Groups",
  "tom_group_get":     "Targeting Groups",
  "tom_group_create":  "Targeting Groups",
  "tom_group_update":  "Targeting Groups",
  "tom_group_assign":  "Targeting Groups",
  "tom_group_archive": "Targeting Groups",
  "tom_template_list":   "Targeting Templates",
  "tom_template_get":    "Targeting Templates",
  "tom_template_create": "Targeting Templates",
  "tom_template_update": "Targeting Templates",
  "tom_template_assign": "Targeting Templates",
  "tom_template_archive":"Targeting Templates",
  /* Disney Ads Agent — keep all four functions in one group so the
     detail page reads as "this capability lets the role query DAA". */
  "media_plan_queries":          "Disney Ads Agent",
  "forecasting_queries":         "Disney Ads Agent",
  "planning_activity_summaries": "Disney Ads Agent",
  "approval_io_comparisons":     "Disney Ads Agent"
};

var PC_POOL_BY_GROUP = {
  /* IAM groups */
  "Analytics":   ["View", "Export"],
  "Data Access": ["Assign", "Manage", "Region scope", "Team scope", "Organization scope"],
  "Roles":       ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage role functions"],
  "Users":       ["View", "Create", "Edit", "Delete", "Deactivate", "Impersonate"],
  /* Core Planning groups (the eight-checkbox Order row in Figma) */
  "Order":       ["View", "Create", "Edit", "Delete", "Assign", "Comment", "Approve", "Reject"],
  "Media Plans": ["View", "Create", "Edit", "Delete", "Export"],
  "Line Items":  ["View", "Create", "Edit", "Delete", "Export"],
  /* ICM */
  "Offerings":      ["View", "Create", "Edit", "Delete"],
  "Sales Packages": ["View", "Create", "Edit", "Delete"],
  /* TOM */
  "Targeting Options":   ["View", "Edit", "Assign"],
  "Targeting Groups":    ["View", "Create", "Edit", "Assign", "Archive"],
  "Targeting Templates": ["View", "Create", "Edit", "Assign", "Archive"],
  /* Disney Ads Agent */
  "Disney Ads Agent": ["View", "Export"],
  /* Deal Configuration Manager — admin app for deal/package/pricing
     configuration. All three groups share the DCM verb vocabulary
     since the resources are configurational siblings. */
  "Deal Types":         ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
  "Package Rules":      ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
  "Pricing Rules":      ["View", "Create", "Edit", "Archive", "Activate", "Manage rules"],
  /* Unified Financial System — period-locking + reconciliation
     vocabulary; "Lock period" and "Reconcile" are UFS-specific
     governance actions beyond the standard CRUD set. */
  "Billing Periods":    ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
  "Invoice Dashboard":  ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
  "Revenue Summary":    ["View", "Edit", "Export", "Lock period", "Validate", "Reconcile"],
  /* HARPS — revenue recognition + adjustment approval vocabulary;
     "Approve adjustment" is HARPS' governance gate before posted
     revenue. */
  "Revenue":            ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
  "Adjustments":        ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
  "Recognition Rules":  ["View", "Edit", "Validate", "Approve adjustment", "Export", "Reconcile"],
  /* PAID Invoice Centralization — invoice lifecycle + NCS export
     vocabulary; "Hold invoice"/"Release invoice"/"Export to NCS"
     reflect the PAID-specific operational verbs. */
  "Invoices":           ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
  "Invoice Line Items": ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
  "Sales Line Items":   ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"],
  "NCS Export":         ["View", "Edit", "Validate", "Export to NCS", "Hold invoice", "Release invoice"]
};

/* Pre-checked actions per function key. Most keys check a single
   action that matches their verb; a handful of keys check multiple
   actions where the function spans more than one capability:
     • iam_data_assign       — Assign + Manage  (region/team/org scoping)
     • iam_function_assign   — Assign permissions + Manage role functions
   These align with the user-supplied examples in the 2026-05-20 spec. */
var PC_ON_FOR_KEY = {
  /* IAM */
  "iam_analytics_get":    ["View"],
  "iam_data_assign":      ["Assign", "Manage"],
  "iam_function_assign":  ["Assign permissions", "Manage role functions"],
  "iam_role_list":        ["View"],
  "iam_role_get":         ["View"],
  "iam_role_create":      ["Create"],
  "iam_role_update":      ["Edit"],
  "iam_role_delete":      ["Delete"],
  "iam_user_list":        ["View"],
  "iam_user_get":         ["View"],
  "iam_user_create":      ["Create"],
  "iam_user_update":      ["Edit"],
  "iam_user_deactivate":  ["Deactivate"],
  "iam_user_impersonate": ["Impersonate"],
  /* Core Planning */
  "planning_order_list":      ["View"],
  "planning_order_get":       ["View"],
  "planning_order_create":    ["Create"],
  "planning_order_update":    ["Edit"],
  "planning_order_delete":    ["Delete"],
  "planning_order_assign":    ["Assign"],
  "planning_order_comment":   ["Comment"],
  "planning_order_approve":   ["Approve"],
  "planning_order_reject":    ["Reject"],
  "planning_plan_list":       ["View"],
  "planning_plan_get":        ["View"],
  "planning_plan_create":     ["Create"],
  "planning_plan_update":     ["Edit"],
  "planning_plan_delete":     ["Delete"],
  "planning_lineitem_list":   ["View"],
  "planning_lineitem_get":    ["View"],
  "planning_lineitem_create": ["Create"],
  "planning_lineitem_update": ["Edit"],
  "planning_lineitem_delete": ["Delete"],
  /* ICM */
  "icm_offering_list":     ["View"],
  "icm_offering_get":      ["View"],
  "icm_offering_create":   ["Create"],
  "icm_offering_update":   ["Edit"],
  "icm_offering_delete":   ["Delete"],
  "icm_salespackage_list":   ["View"],
  "icm_salespackage_get":    ["View"],
  "icm_salespackage_create": ["Create"],
  "icm_salespackage_update": ["Edit"],
  "icm_salespackage_delete": ["Delete"],
  /* TOM */
  "tom_option_list":   ["View"],
  "tom_option_get":    ["View"],
  "tom_option_update": ["Edit"],
  "tom_option_assign": ["Assign"],
  "tom_group_list":    ["View"],
  "tom_group_get":     ["View"],
  "tom_group_create":  ["Create"],
  "tom_group_update":  ["Edit"],
  "tom_group_assign":  ["Assign"],
  "tom_group_archive": ["Archive"],
  "tom_template_list":   ["View"],
  "tom_template_get":    ["View"],
  "tom_template_create": ["Create"],
  "tom_template_update": ["Edit"],
  "tom_template_assign": ["Assign"],
  "tom_template_archive":["Archive"],
  /* Disney Ads Agent */
  "media_plan_queries":          ["View"],
  "forecasting_queries":         ["View"],
  "planning_activity_summaries": ["View"],
  "approval_io_comparisons":     ["View"]
};

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

/* Human-readable name for a function key, e.g.
   `planning_order_approve` → "Approve Planning Order".
   Falls back to a titlecased version of the key if no special case
   applies, so adding a new key to FUNCTION_REGISTRY never produces
   empty/null cells. */
var PERMISSION_NAME_OVERRIDES = {
  "iam_role_get":"View Role","iam_role_list":"List Roles","iam_role_create":"Create Role","iam_role_update":"Edit Role","iam_role_delete":"Delete Role",
  "iam_function_assign":"Assign Function to Role","iam_data_assign":"Assign Data Access",
  "iam_user_get":"View User","iam_user_list":"List Users","iam_user_create":"Create User","iam_user_update":"Edit User","iam_user_deactivate":"Deactivate User","iam_user_impersonate":"Impersonate User",
  "iam_analytics_get":"View IAM Analytics",
  "planning_order_list":"List Planning Orders","planning_order_get":"View Planning Order","planning_order_create":"Create Planning Order","planning_order_update":"Edit Planning Order","planning_order_delete":"Delete Planning Order",
  "planning_order_assign":"Assign Planning Order","planning_order_comment":"Comment on Planning Order","planning_order_approve":"Approve Planning Order","planning_order_reject":"Reject Planning Order",
  "planning_plan_list":"List Media Plans","planning_plan_get":"View Media Plan","planning_plan_create":"Create Media Plan","planning_plan_update":"Edit Media Plan","planning_plan_delete":"Delete Media Plan",
  "planning_lineitem_list":"List Line Items","planning_lineitem_get":"View Line Item","planning_lineitem_create":"Create Line Item","planning_lineitem_update":"Edit Line Item","planning_lineitem_delete":"Delete Line Item",
  "icm_offering_list":"List Inventory Offerings","icm_offering_get":"View Inventory Offering","icm_offering_create":"Create Inventory Offering","icm_offering_update":"Edit Inventory Offering","icm_offering_delete":"Delete Inventory Offering",
  "icm_salespackage_list":"List Sales Packages","icm_salespackage_get":"View Sales Package","icm_salespackage_create":"Create Sales Package","icm_salespackage_update":"Edit Sales Package","icm_salespackage_delete":"Delete Sales Package",
  "tom_option_list":"List Targeting Options","tom_option_get":"View Targeting Option","tom_option_update":"Edit Targeting Option","tom_option_assign":"Assign Targeting Option",
  "tom_group_list":"List Targeting Groups","tom_group_get":"View Targeting Group","tom_group_create":"Create Targeting Group","tom_group_update":"Edit Targeting Group","tom_group_assign":"Assign Targeting Group","tom_group_archive":"Archive Targeting Group",
  "tom_template_list":"List Targeting Templates","tom_template_get":"View Targeting Template","tom_template_create":"Create Targeting Template","tom_template_update":"Edit Targeting Template","tom_template_assign":"Assign Targeting Template","tom_template_archive":"Archive Targeting Template",
  "media_plan_queries":"Query Media Plans (DAA)","forecasting_queries":"Query Forecasts (DAA)","planning_activity_summaries":"Query Planning Summaries (DAA)","approval_io_comparisons":"Compare IO Approvals (DAA)"
};
function permissionNameForKey(key) {
  if (PERMISSION_NAME_OVERRIDES[key]) return PERMISSION_NAME_OVERRIDES[key];
  return key.split("_").map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(" ");
}

/* Human-readable description per function. Concise, enterprise-focused;
   reads as documentation a Planning Manager or IAM Admin would skim
   when deciding whether to grant a role this function. Keep ≤ 90 chars
   so it fits the 320px description column without truncation at the
   compact 48px row height. */
var PERMISSION_DESCRIPTIONS = {
  /* IAM */
  "iam_role_list":"Browse the catalog of roles configured in IAM.",
  "iam_role_get":"View a role's detail page, including assigned functions and access levels.",
  "iam_role_create":"Author a new role and define its access scope across Atlas apps.",
  "iam_role_update":"Modify a role's name, description, or assigned functions.",
  "iam_role_delete":"Remove a role from IAM. Blocked while users are still assigned.",
  "iam_function_assign":"Grant or revoke individual functions on a role.",
  "iam_data_assign":"Constrain a role's data access (region, team, or organization scope).",
  "iam_user_list":"Browse users across internal and external directories.",
  "iam_user_get":"View a user's profile, role assignments, and audit history.",
  "iam_user_create":"Provision a new internal or external user account.",
  "iam_user_update":"Edit a user's profile, attributes, or assigned roles.",
  "iam_user_deactivate":"Disable a user account and revoke all active sessions.",
  "iam_user_impersonate":"Assume a user's session for support and troubleshooting flows.",
  "iam_analytics_get":"Read IAM usage analytics and access-pattern reports.",
  /* Core Planning */
  "planning_order_list":"Browse planning orders across teams and accounts.",
  "planning_order_get":"View a planning order's detail, line items, and approval history.",
  "planning_order_create":"Author a new planning order from a brief or media plan.",
  "planning_order_update":"Edit planning order header fields, dates, and configuration.",
  "planning_order_delete":"Remove a planning order. Restricted to admin-tier roles.",
  "planning_order_assign":"Reassign a planning order to a different owner or team.",
  "planning_order_comment":"Add review comments or change requests to a planning order.",
  "planning_order_approve":"Sign off on a planning order so it can move to execution.",
  "planning_order_reject":"Return a planning order to the author with reasons.",
  "planning_plan_list":"Browse media plans linked to planning orders.",
  "planning_plan_get":"View a media plan's structure, budget, and goals.",
  "planning_plan_create":"Author a new media plan inside a planning order.",
  "planning_plan_update":"Edit media plan parameters, audience, and budget allocation.",
  "planning_plan_delete":"Remove a media plan from a planning order.",
  "planning_lineitem_list":"Browse line items within a media plan.",
  "planning_lineitem_get":"View a line item's targeting, pricing, and delivery configuration.",
  "planning_lineitem_create":"Add a new line item to a media plan.",
  "planning_lineitem_update":"Edit a line item's targeting, schedule, or delivery settings.",
  "planning_lineitem_delete":"Remove a line item from a media plan.",
  /* ICM */
  "icm_offering_list":"Browse the inventory offering catalog across ICM.",
  "icm_offering_get":"View an inventory offering's pricing, segments, and availability.",
  "icm_offering_create":"Author a new inventory offering for sales packaging.",
  "icm_offering_update":"Edit an inventory offering's metadata or pricing.",
  "icm_offering_delete":"Retire an inventory offering from the catalog.",
  "icm_salespackage_list":"Browse sales packages assembled from inventory offerings.",
  "icm_salespackage_get":"View a sales package's bundled offerings and constraints.",
  "icm_salespackage_create":"Author a new sales package for go-to-market.",
  "icm_salespackage_update":"Edit a sales package's bundled offerings or pricing.",
  "icm_salespackage_delete":"Retire a sales package from active selling.",
  /* TOM */
  "tom_option_list":"Browse targeting options across audiences, geos, and devices.",
  "tom_option_get":"View a targeting option's taxonomy and segment definition.",
  "tom_option_update":"Edit a targeting option's name, taxonomy, or scope.",
  "tom_option_assign":"Assign a targeting option to a targeting group or template.",
  "tom_group_list":"Browse targeting groups composed of one or more options.",
  "tom_group_get":"View a targeting group's component options and usage.",
  "tom_group_create":"Author a new targeting group for reuse across templates.",
  "tom_group_update":"Edit a targeting group's options or metadata.",
  "tom_group_assign":"Assign a targeting group to a template or campaign.",
  "tom_group_archive":"Archive a targeting group so it can no longer be selected.",
  "tom_template_list":"Browse targeting templates that bundle groups for fast reuse.",
  "tom_template_get":"View a targeting template's groups and usage history.",
  "tom_template_create":"Author a new targeting template for repeatable campaigns.",
  "tom_template_update":"Edit a targeting template's groups or metadata.",
  "tom_template_assign":"Assign a targeting template to a campaign or line item.",
  "tom_template_archive":"Archive a targeting template so it is hidden from selection.",
  /* Disney Ads Agent */
  "media_plan_queries":"Query Disney Ads Agent for media plan summaries and structure.",
  "forecasting_queries":"Query Disney Ads Agent for forecast and inventory estimates.",
  "planning_activity_summaries":"Query Disney Ads Agent for planning activity and recent edits.",
  "approval_io_comparisons":"Compare an IO against its approved version via Disney Ads Agent."
};

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

/* Role names that include this function key, for the Permission
   Management "Used in" hover tooltip (Figma 770:20039 + 2026-05-20 spec).

   For the ten IAM keys explicitly enumerated in the spec, we use the
   curated mapping below rather than deriving from ROLE_FUNCTION_MAP.
   The curated mapping is what the user expects to see in the tooltip,
   and the underlying role assignments are still consistent because
   the COUNT (length of the array) matches permissionUsedInCount() for
   each of those keys — that count is what the table cell reads.

   For every other function key (Core Planning, ICM, TOM, Disney Ads
   Agent), we derive role names directly from ROLE_FUNCTION_MAP so the
   tooltip stays in lock-step with the rest of the prototype. No
   invented names — the picker pulls real ROLES_PERMISSIONS_DATA. */
var PERMISSION_USED_IN_OVERRIDES = {
  "iam_analytics_get":    ["Atlas Admin", "Operations Admin"],
  "iam_data_assign":      ["Atlas Admin"],
  "iam_function_assign":  ["Atlas Admin"],
  "iam_role_create":      ["Atlas Admin"],
  "iam_role_delete":      ["Atlas Admin"],
  "iam_role_get":         ["Planner"],
  "iam_role_list":        ["Planner", "Planning Specialist"],
  "iam_role_update":      ["Atlas Admin"],
  "iam_user_create":      ["Operations Admin"],
  "iam_user_deactivate":  ["Operations Admin"]
};

function permissionUsedInRoles(key) {
  if (PERMISSION_USED_IN_OVERRIDES[key]) return PERMISSION_USED_IN_OVERRIDES[key].slice();
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

var ROLES_PERMISSIONS_DATA = [
  { id: "r001", role: "Atlas Admin", description: "Owns full IAM administration and end-to-end Core Planning governance.", status: "Standard", createdBy: "Homer Simpson", createDate: "01/15/2026", functions: buildRoleFunctions("r001") },
  { id: "r002", role: "Core Planning Admin", description: "Controls all Core Planning configuration, lifecycle, and approvals.", status: "Standard", createdBy: "Homer Simpson", createDate: "01/18/2026", functions: buildRoleFunctions("r002") },
  { id: "r003", role: "Operations Admin", description: "Manages execution workflows with edit, assign, and comment authority.", status: "Standard", createdBy: "Marge Simpson", createDate: "01/22/2026", functions: buildRoleFunctions("r003") },
  { id: "r004", role: "Planner", description: "Builds and updates planning objects without approval or deletion rights.", status: "Standard", createdBy: "Kent Brockman", createDate: "01/25/2026", functions: buildRoleFunctions("r004") },
  { id: "r005", role: "Planning Specialist", description: "Performs detailed planning updates including line-item level edits.", status: "Standard", createdBy: "Kent Brockman", createDate: "01/28/2026", functions: buildRoleFunctions("r005") },
  { id: "r006", role: "Planning Manager", description: "Reviews plans and executes approval workflows for planning governance.", status: "Standard", createdBy: "Homer Simpson", createDate: "02/02/2026", functions: buildRoleFunctions("r006") },
  { id: "r013", role: "Campaign Planner", description: "Builds and updates campaign plans, manages planning inputs, and prepares campaigns for execution without approval authority.", status: "Standard", createdBy: "Kent Brockman", createDate: "02/07/2026", functions: buildRoleFunctions("r013") },
  { id: "r014", role: "Ad Operations Specialist", description: "Executes and manages live campaigns, handles trafficking, monitoring, and optimization tasks across active orders.", status: "Standard", createdBy: "Marge Simpson", createDate: "02/09/2026", functions: buildRoleFunctions("r014") },
  { id: "r008", role: "Read-Only Viewer", description: "Provides read-only visibility across planning entities and details.", status: "Standard", createdBy: "Marge Simpson", createDate: "02/10/2026", functions: buildRoleFunctions("r008") },
  { id: "r009", role: "ICM Admin", description: "Maintains Inventory Catalog Manager offerings and sales package access.", status: "Standard", createdBy: "Homer Simpson", createDate: "02/14/2026", functions: buildRoleFunctions("r009") },
  { id: "r010", role: "TOM Admin", description: "Administers Targeting Options Manager options, groups, and templates.", status: "Standard", createdBy: "Homer Simpson", createDate: "02/18/2026", functions: buildRoleFunctions("r010") }
];
var RP_ORIGINAL_ORDER = ROLES_PERMISSIONS_DATA.slice();

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
   Minimal runtime matching the EDL Toast component (Figma 15094:75972).
   Renders a titled notification with icon + body into #edlToastContainer,
   auto-dismisses after a readable delay, and supports manual dismiss via
   the X button. Four types ship: informative, success, warning, error.
   Icons match EDL (info-circle, check-circle, alert-triangle, alert-circle). */
var EDL_TOAST_ICONS = {
  informative:
    '<svg class="edl-toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  success:
    '<svg class="edl-toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  warning:
    '<svg class="edl-toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  error:
    '<svg class="edl-toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
};
var EDL_TOAST_CLOSE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

function showEdlToast(opts) {
  var container = document.getElementById("edlToastContainer");
  if (!container) return;
  var type = (opts && opts.type) || "informative";
  if (!EDL_TOAST_ICONS[type]) type = "informative";
  var title = (opts && opts.title) || "";
  var bodyHtml = (opts && opts.bodyHtml) || esc((opts && opts.body) || "");
  var duration = (opts && typeof opts.duration === "number") ? opts.duration : 6000;
  var liveRole = (type === "error" || type === "warning") ? "alert" : "status";

  var toast = document.createElement("div");
  toast.className = "edl-toast edl-toast--" + type;
  toast.setAttribute("role", liveRole);
  toast.setAttribute("aria-live", liveRole === "alert" ? "assertive" : "polite");
  toast.innerHTML =
    '<div class="edl-toast-header">' +
      EDL_TOAST_ICONS[type] +
      '<span class="edl-toast-title">' + esc(title) + '</span>' +
      '<button type="button" class="edl-toast-close" aria-label="Dismiss notification">' + EDL_TOAST_CLOSE + '</button>' +
    '</div>' +
    '<div class="edl-toast-body">' + bodyHtml + '</div>';

  var timer = null;
  function dismiss() {
    if (toast.classList.contains("is-leaving")) return;
    toast.classList.add("is-leaving");
    if (timer) { clearTimeout(timer); timer = null; }
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 180);
  }
  toast.querySelector(".edl-toast-close").addEventListener("click", dismiss);
  if (duration > 0) timer = setTimeout(dismiss, duration);

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
  var icon = status === "Active" ? STATUS_ICON_ACTIVE : STATUS_ICON_INACTIVE;
  var label = esc(status);
  return '<span class="status-icon-wrap" data-status-tooltip="' + label + '" aria-label="' + label + '" role="img" tabindex="0">' + icon + '</span>';
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
    var label = target.getAttribute("data-status-tooltip");
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
    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("mouseover", function (e) {
    var target = e.target.closest(".status-icon-wrap");
    if (target) show(target);
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(".status-icon-wrap")) hide();
  });
  document.addEventListener("focusin", function (e) {
    var target = e.target.closest(".status-icon-wrap");
    if (target) show(target);
  });
  document.addEventListener("focusout", function (e) {
    if (e.target.closest(".status-icon-wrap")) hide();
  });
  window.addEventListener("scroll", hide, true);
  window.addEventListener("resize", hide);
}

function renderTable() {
  var rows = getPageData();
  var tb = document.getElementById("tbody");
  if (rows.length === 0) {
    tb.innerHTML = '<tr><td colspan="8" class="empty-state">No results found</td></tr>';
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
    var loginStr = u.lastLogin ? esc(u.lastLogin) : "—";
    html += '<tr data-id="' + esc(u.id) + '">' +
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
      '<td class="c-ll">' + loginStr + '</td>' +
      '<td class="c-rg">' + esc(u.region) + '</td>' +
      '</tr>';
  }
  tb.innerHTML = html;
  fitUsersRoleCells();
}

/* Width-responsive Role column overflow on the Users tab.
   ─────────────────────────────────────────────────────────
   Walks every visible Role cell and decides whether to show the full
   role list or collapse the tail into a "+N role(s)" link. Reads the
   row's roles from its td's `data-roles` attribute (pipe-delimited,
   set in renderTable) so this works after any re-render and also for
   size-only events that don't rebuild the table (window resize,
   manual column resize).

   Algorithm, per cell:
     1. Render the full role list, no chip. Because `.tbl td` is
        `overflow: hidden; text-overflow: ellipsis`, content that
        fits produces `scrollWidth <= clientWidth` and we leave it
        alone — no "+N" chip on wide/roomy layouts.
     2. If the full list overflows, iteratively drop trailing roles
        and append a "+N role(s)" chip until the cell fits. Stops at
        1 visible role; if even that plus the chip overflows, the
        cell's natural ellipsis truncates inside the last role — the
        EDL truncation tooltip (when scrollWidth > clientWidth) and the
        +N chip's data-tooltip reveal the full list on hover, so nothing is lost.
     3. A +1px tolerance on the fit check absorbs sub-pixel rounding
        from the browser so cells right at the boundary don't flap
        between states during resize.

   Called from:
     • renderTable() — after every table render.
     • setupRightmostAlignment's debounced window-resize handler.
     • setupColumnResize's onMove/onUp (Users table only) so dragging
       the Role handle wider restores hidden roles in real time and
       dragging it narrower brings the chip back only when needed.

   No styling, row height, typography, tooltip/search/filter/pagination
   or alignment behavior is touched — this only swaps the innerHTML of
   the existing `.role-txt` span inside the existing td. */
function fitUsersRoleCells() {
  var tbody = document.getElementById("tbody");
  if (!tbody) return;
  var cells = tbody.querySelectorAll("td.c-rl[data-roles]");
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var span = cell.querySelector(".role-txt");
    if (!span) continue;
    var rolesAttr = cell.getAttribute("data-roles") || "";
    var roles = rolesAttr ? rolesAttr.split("|") : [];
    if (!roles.length) continue;
    cell.removeAttribute("title");
    span.innerHTML = esc(roles.join(", "));
    if (cell.scrollWidth <= cell.clientWidth + 1) continue;
    var tooltip = roles.join("\n");
    for (var count = roles.length - 1; count >= 1; count--) {
      var shown = roles.slice(0, count);
      var extra = roles.length - count;
      span.innerHTML = esc(shown.join(", ")) +
        ' <a href="#" class="role-extra" data-tooltip="' + esc(tooltip) +
        '">+' + extra + " role" + (extra > 1 ? "s" : "") + "</a>";
      if (cell.scrollWidth <= cell.clientWidth + 1) break;
    }
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
    if (sortKey && ths[i].dataset.sort === sortKey) {
      if (sortDir === "asc") ths[i].classList.add("sort-asc");
      else if (sortDir === "desc") ths[i].classList.add("sort-desc");
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

document.addEventListener("DOMContentLoaded", function () {
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
       Note: previously this list also skipped Users `em` (email), but
       there is no design rule against resizing email; we now expose it. */
    var SKIP_KEYS = { "ct": 1 };

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
     Locks the *left* edge of the rightmost data column (Region for
     Users, Create Date for R&P) to the *left* edge of the "+ Add
     Users" / "+ Create Role" CTA above it — i.e. to the CTA's "+"
     icon anchor.

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
    var addUsersBtn = document.querySelector("#usersPanel .tbar > .btn-ghost");
    var createRoleBtn = document.querySelector("#rolesPanel .tbar > .btn-ghost");
    var dragged = { users: false, rp: false };

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
      var tableWidth = tableRect.width;
      var targetRightPx = Math.round(tableRect.right - ctaRect.left);
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

      /* R&P only: keep Role and Created By at their measured widths;
         give all horizontal slack to Functions.
         Column order after the checkbox removal (2026-05-29):
           [role(0), func(1), by(2), date(3)]. The Date column is the
         right-anchor for alignment, so `rightIdx === 3`. */
      if (table.id === "rpTable" && oldWidths.length >= 4 && rightIdx === 3) {
        var MIN_FUNC = 220;
        var rolePx = oldWidths[0];
        var byPx = oldWidths[2];
        var rem = newTotalOthers - rolePx - byPx;
        if (rem >= MIN_FUNC) {
          var funcPx = Math.max(MIN_FUNC, rem);
          cols[0].style.width = Math.max(1, Math.round(rolePx)) + "px";
          cols[1].style.width = funcPx + "px";
          cols[2].style.width = Math.max(1, Math.round(byPx)) + "px";
          cols[3].style.width = targetRightPx + "px";
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
      if (dragged.users) return;
      align(usersTable, addUsersBtn, "rg", "data-u-col");
    }
    function alignRP() {
      if (dragged.rp) return;
      align(rpTable, createRoleBtn, "date", "data-rp-col");
    }

    /* Initial alignment. Users is visible on load; R&P is hidden
       until the user switches, so only Users runs here. */
    alignUsers();

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
     chosen theme. The Version submenu navigates between the 1.0 and 2.0
     prototype builds (`/index.html` and `/v2/index.html` respectively);
     it never mutates page state — it just hands off via `location.assign`. */
  (function setupUserMenu() {
    var menu = document.getElementById("userMenu");
    var trigger = document.getElementById("userMenuTrigger");
    var pop = document.getElementById("userMenuPop");
    var themeRow = document.getElementById("userMenuTheme");
    var versionRow = document.getElementById("userMenuVersion");
    var logoutRow = document.getElementById("userMenuLogout");
    if (!menu || !trigger || !pop || !themeRow) return;

    /* Scope sub-item lookups by submenu owner. Earlier this used a single
       `pop.querySelectorAll(".user-menu-sub-item")` which conflated Theme
       and Version children — clicking a Version item would call
       applyTheme(null) and silently reset the theme to EDL Light. */
    var themeItems = themeRow.querySelectorAll(".user-menu-sub-item");
    var versionItems = versionRow
      ? versionRow.querySelectorAll(".user-menu-sub-item")
      : [];
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

    function openMenu() {
      menu.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
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
      });
    }

    /* Version submenu — opens like Theme (click toggles aria-expanded; CSS
       hover also reveals it). Selecting an unselected version navigates to
       that build's HTML entry point; selecting the current version is a
       no-op aside from closing the menu. The current-version attribute is
       declared in markup (`is-selected`) so each prototype build ships its
       own correct selection state — no JS theme-style sync needed. */
    if (versionRow) {
      versionRow.addEventListener("click", function (e) {
        if (e.target.closest(".user-menu-sub-item")) return;
        e.stopPropagation();
        var expanded = versionRow.getAttribute("aria-expanded") === "true";
        versionRow.setAttribute("aria-expanded", expanded ? "false" : "true");
      });

      for (var vi = 0; vi < versionItems.length; vi++) {
        versionItems[vi].addEventListener("click", function (e) {
          e.stopPropagation();
          if (this.classList.contains("is-selected")) {
            closeMenu();
            return;
          }
          var href = this.getAttribute("data-version-href");
          closeMenu();
          if (href) window.location.assign(href);
        });
      }
    }

    if (logoutRow) {
      logoutRow.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMenu();
      });
    }

    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("open")) return;
      if (menu.contains(e.target)) return;
      closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
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
    /* Role column: no native title — full text from data-roles only when clipped. */
    if (td.classList.contains("c-rl")) {
      if (td.scrollWidth <= td.clientWidth + 1) return null;
      var ra = td.getAttribute("data-roles") || "";
      var roleFull = ra ? ra.split("|").join(", ") : td.textContent.trim();
      return { el: td, text: roleFull };
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
    var extra = e.target.closest(".role-extra");
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
    var extra = e.target.closest(".role-extra");
    if (extra) {
      var lines = extra.getAttribute("data-tooltip");
      if (lines) showTooltipFor(extra, lines, true);
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
    if (e.target.closest(".role-extra, .rp-role-link, [data-roles-tip]")) hideTooltip();
  });

  /* Per-role custom permission grids for Create Role / Edit Role
     prefill. Keys MUST match the canonical PM group names exposed by
     PC_GROUP_FOR_KEY (e.g. "Order" not "Orders") because Create Role
     resolves checkbox identity by `data-resource` which is set from
     the derived `app.resources[].title`. Adding entries here that
     reference groups PM does not define has no effect — the
     pre-checking pass simply skips unmatched rows. */
  var ROLE_ACCESS_DETAILS = {
    r003: {
      "Core Planning": {
        Order:          ["View", "Edit", "Assign", "Comment"],
        "Media Plans":  ["View", "Edit"],
        "Line Items":   ["View", "Edit"]
      }
    }
  };

  /* ─── R&P Functions Popover (click-activated) ───
     Trigger: semantic access link inside .rp-func.
     Content: application + access level + grouped permissions.
     Dismiss: click outside / Escape / another trigger. */
  var funcPop = document.createElement("div");
  funcPop.className = "func-popover";
  funcPop.setAttribute("role", "dialog");
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
    if (!bundle && appName === "IAM") {
      if (level === "Edit") bundle = model.presets["User"];
      else if (level === "Approve") bundle = model.presets["Role"];
    }
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
    var custom = ROLE_ACCESS_DETAILS[roleId] && ROLE_ACCESS_DETAILS[roleId][appName];
    var groups = custom || accessActionsFor(appName, accessLevel);
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
    var html = '<div class="func-pop-title">' + esc(appDisplay) + '</div>' +
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

  /* ─── EDL Search Component ─── */
  var MAX_RECENT = 5;
  var recentSearches = JSON.parse(localStorage.getItem("iam_recent_searches") || "[]");
  var searchWrap = document.getElementById("searchWrap");
  var searchInput = document.getElementById("searchInput");
  var searchClear = document.getElementById("searchClear");
  var searchIco = document.getElementById("searchIco");
  var searchDD = document.getElementById("searchDropdown");
  var searchDDContent = document.getElementById("searchDDContent");
  var searchOpen = false;

  var CLOCK_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

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

  document.querySelector("thead").addEventListener("click", function (e) {
    var th = e.target.closest("th[data-sort]");
    if (th) applySort(th.dataset.sort);
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
  var CHECK_SVG = '<svg class="edl-combo-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  var CHEV_SVG = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CLEAR_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

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
  var RP_FUNC_DISPLAY_NAME = {
    "Core Planning": "Core Planning",
    "TOM": "Targeting Options Manager",
    "IAM": "Identity Access Management",
    "ICM": "Inventory Catalog Manager",
    "Disney Ads Agent": "Disney Ads Agent"
  };

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
  }

  tabBtns[0].addEventListener("click", function () { switchTab("users"); });
  tabBtns[1].addEventListener("click", function () { switchTab("roles"); });
  if (tabBtns[2]) tabBtns[2].addEventListener("click", function () { switchTab("teams"); });

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
      if (!Array.isArray(DATA)) return [];
      var rows = [];
      for (var i = 0; i < DATA.length; i++) {
        var u = DATA[i];
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

    function getTMFilteredData() {
      var term = (tmSearchInput && tmSearchInput.value) ? tmSearchInput.value.trim().toLowerCase() : "";
      return TEAMS_DATA.filter(function (t) {
        if (!term) return true;
        return (
          t.name.toLowerCase().indexOf(term) !== -1 ||
          t.description.toLowerCase().indexOf(term) !== -1
        );
      });
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
    }

    function closeEditTeam() {
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

    if (tmDeleteBtn) {
      tmDeleteBtn.addEventListener("click", function () {
        /* Delete is intentionally a soft no-op for the prototype:
           we just route back to the list. Implementing real delete
           is out of scope and would require a confirmation dialog
           we don't want to invent here. */
        closeEditTeam();
      });
    }

    /* Dirty-state wiring: typing in Name or Description should
       enable Save Team if the new value differs from the captured
       initial snapshot. Add/Remove member calls also call
       tmRefreshDirty after mutating tmWorkingMembers. */
    if (tmName) tmName.addEventListener("input", tmRefreshDirty);
    if (tmDesc) tmDesc.addEventListener("input", tmRefreshDirty);

    /* Row-remove delegate — clicking the Remove button in a member
       row drops the user from the working set, re-renders, and
       updates the dirty state. */
    if (tmMembersTbody) {
      tmMembersTbody.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tm-remove]");
        if (!btn) return;
        var key = btn.getAttribute("data-tm-remove");
        for (var i = 0; i < tmWorkingMembers.length; i++) {
          var m = tmWorkingMembers[i];
          if ((m.userId && m.userId === key) || m.email === key || m.name === key) {
            tmWorkingMembers.splice(i, 1);
            break;
          }
        }
        renderTeamMembers();
        tmRefreshDirty();
      });
    }

    /* ─── Add members modal ─────────────────────────────────────────
       Opens a compact searchable multi-select dialog of internal
       users not yet on the team. The modal reuses the EDL
       .cr-confirm-* shell (Remove Role / Remove app / Set inactive)
       so behavior (keyboard close, backdrop click) is consistent
       with the rest of the prototype. Selection is local to the
       modal; on confirm the picked users append to tmWorkingMembers
       and the Members table re-renders. Cancel discards. */
    var tmAddBtn = document.getElementById("tmAddMembersBtn");
    var tmAddBackdrop = document.getElementById("tmAddMembersBackdrop");
    var tmAddSearch = document.getElementById("tmAddMembersSearch");
    var tmAddList = document.getElementById("tmAddMembersList");
    var tmAddEmpty = document.getElementById("tmAddMembersEmpty");
    var tmAddCancel = document.getElementById("tmAddMembersCancel");
    var tmAddConfirm = document.getElementById("tmAddMembersConfirm");
    var tmAddCount = document.getElementById("tmAddMembersCount");

    var tmAddEligible = [];      /* all eligible internal users for the current team */
    var tmAddSelected = {};      /* userId → user object */
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
    function tmBuildEligible() {
      var existing = tmGetExistingKeySet();
      var out = [];
      if (!Array.isArray(DATA)) return out;
      for (var i = 0; i < DATA.length; i++) {
        var u = DATA[i];
        if (!tmIsInternalUser(u)) continue;
        if (u.id && existing[u.id]) continue;
        if (u.email && existing["email:" + u.email]) continue;
        out.push(u);
      }
      out.sort(function (a, b) { return (a.name || "").localeCompare(b.name || ""); });
      return out;
    }
    /* Round 7 (2026-06-09): the right-side metadata in each user row
       now surfaces the user's CURRENT TEAM (not their primary role).
       Rationale: this dialog is "Add members to <thisTeam>". The admin
       needs to see where the candidate currently sits so they can
       decide whether the move is appropriate. Search matches name /
       email / team. External users are still filtered out by
       tmIsInternalUser.

       Round 10 (2026-06-09): per brief, the repeated "Current team"
       caption was removed from every row — the modal title +
       subtitle + search placeholder already make the context clear,
       and the caption was adding visual noise. The right-side
       metadata now collapses to a single 14/20 muted team-name span
       (no caption stack). Aria-label on the row still carries the
       "Current team" context for screen readers so the affordance
       is preserved for assistive tech. */
    function tmRenderAddList() {
      if (!tmAddList) return;
      var q = (tmAddSearch && tmAddSearch.value || "").trim().toLowerCase();
      var rendered = 0;
      var html = "";
      for (var i = 0; i < tmAddEligible.length; i++) {
        var u = tmAddEligible[i];
        var teamName = u.team || "";
        if (q) {
          var hay = (u.name + " " + u.email + " " + teamName).toLowerCase();
          if (hay.indexOf(q) === -1) continue;
        }
        rendered++;
        var sel = !!tmAddSelected[u.id];
        var teamLabel = teamName || "—";
        var rowAria = "Select " + u.name + ", " + u.email +
          (teamName ? ", current team " + teamName : "");
        html +=
          '<label class="tm-add-row' + (sel ? " is-selected" : "") + '" data-user-id="' + escTM(u.id) + '" aria-label="' + escTM(rowAria) + '">' +
            '<input type="checkbox" class="cr-perm-check tm-add-row-check" data-user-id="' + escTM(u.id) + '"' + (sel ? " checked" : "") + ">" +
            '<span class="tm-add-row-info">' +
              '<span class="tm-add-row-name">' + escTM(u.name) + '</span>' +
              '<span class="tm-add-row-meta">' + escTM(u.email) + '</span>' +
            '</span>' +
            '<span class="tm-add-row-side">' +
              '<span class="tm-add-row-side-value">' + escTM(teamLabel) + '</span>' +
            '</span>' +
          '</label>';
      }
      tmAddList.innerHTML = html;
      if (tmAddEmpty) {
        if (rendered === 0) tmAddEmpty.removeAttribute("hidden");
        else tmAddEmpty.setAttribute("hidden", "");
      }
    }
    function tmUpdateAddConfirmState() {
      var n = 0;
      for (var k in tmAddSelected) if (Object.prototype.hasOwnProperty.call(tmAddSelected, k)) n++;
      if (tmAddCount) tmAddCount.textContent = n + " selected";
      if (tmAddConfirm) tmAddConfirm.disabled = n === 0;
    }
    function tmOpenAddMembers() {
      if (!tmAddBackdrop) return;
      tmAddSelected = {};
      tmAddEligible = tmBuildEligible();
      if (tmAddSearch) tmAddSearch.value = "";
      tmRenderAddList();
      tmUpdateAddConfirmState();
      tmAddLastFocus = document.activeElement;
      tmAddBackdrop.removeAttribute("hidden");
      setTimeout(function () { if (tmAddSearch) tmAddSearch.focus(); }, 0);
    }
    function tmCloseAddMembers() {
      if (!tmAddBackdrop) return;
      tmAddBackdrop.setAttribute("hidden", "");
      if (tmAddLastFocus && typeof tmAddLastFocus.focus === "function") tmAddLastFocus.focus();
      tmAddLastFocus = null;
    }
    function tmConfirmAddMembers() {
      var added = 0;
      for (var k in tmAddSelected) {
        if (!Object.prototype.hasOwnProperty.call(tmAddSelected, k)) continue;
        var u = tmAddSelected[k];
        tmWorkingMembers.push(tmMemberFromUser(u));
        added++;
      }
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
    if (tmAddConfirm) tmAddConfirm.addEventListener("click", tmConfirmAddMembers);
    if (tmAddBackdrop) {
      tmAddBackdrop.addEventListener("click", function (e) {
        if (e.target === tmAddBackdrop) tmCloseAddMembers();
      });
    }
    if (tmAddSearch) tmAddSearch.addEventListener("input", tmRenderAddList);
    if (tmAddList) {
      tmAddList.addEventListener("change", function (e) {
        var box = e.target.closest(".tm-add-row-check");
        if (!box) return;
        var uid = box.getAttribute("data-user-id");
        if (box.checked) {
          for (var i = 0; i < tmAddEligible.length; i++) {
            if (tmAddEligible[i].id === uid) { tmAddSelected[uid] = tmAddEligible[i]; break; }
          }
        } else {
          delete tmAddSelected[uid];
        }
        var row = box.closest(".tm-add-row");
        if (row) row.classList.toggle("is-selected", box.checked);
        tmUpdateAddConfirmState();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (tmAddBackdrop && !tmAddBackdrop.hasAttribute("hidden")) {
        tmCloseAddMembers();
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
    var addUsersBtn = null;
    var usersBtns = document.querySelectorAll("#usersPanel .btn-ghost");
    for (var ub = 0; ub < usersBtns.length; ub++) {
      var btnText = usersBtns[ub].textContent;
      if (btnText.indexOf("Add User") !== -1 || btnText.indexOf("Add Users") !== -1) {
        addUsersBtn = usersBtns[ub];
        break;
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
      expandedRoleId: null
    };

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
    var AU_PAGE_SUB_ADD = "Capture user details and assign access for Atlas";

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

    var TRASH_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';

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
        /* Edit User v3 — when the role picker changes, also re-render
           the effective-access table so the Application/Access/Summary
           rows update to match the newly chosen role. Add-mode is
           unaffected (the table only renders in edit mode anyway). */
        if (auPageMode === "edit") {
          auState.editPrimaryRoleId = auState.selectedRoleId || "";
          renderAuEffectiveAccessTable(auState.editPrimaryRoleId);
        }
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
      if (auRoleAdd) {
        if (inactive) auRoleAdd.disabled = true;
        else auRoleAdd.disabled = !auState.selectedRoleId || auState.selectedRoleIds.indexOf(auState.selectedRoleId) !== -1;
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
      auState.expandedRoleId = null;
      setAUStatus("Inactive");
      renderAURolePicker();
      renderAURoleCards();
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
      auState.expandedRoleId = null;
      auFirstName.value = "";
      auLastName.value = "";
      if (auFullName) auFullName.value = "";
      auPreferredName.value = "";
      auEmail.value = "";
      if (auRegion) auRegion.value = "NA";
      if (auTimezone) auTimezone.value = "America/New_York";
      if (auTeam) auTeam.value = "";
      auComboState.addUserRegion = "NA";
      auComboState.addUserTimezone = "America/New_York";
      auComboState.addUserTeam = "";
      auComboState.addUserRolePick = "";
      if (setAuRegionCombo) setAuRegionCombo("NA");
      renderAUTimezones("NA", "America/New_York");
      if (setAuTeamCombo) setAuTeamCombo("");
      if (setAuRoleCombo) setAuRoleCombo("");
      setAUStatus("Active");
      /* Always restore the Team combo (not Company readonly) on
         reset — Add User mode is always internal-team only; the
         readonly Company display only exists while editing an
         external user. */
      if (typeof applyAuBasicInfoCompanyOrTeam === "function") applyAuBasicInfoCompanyOrTeam(null);
      renderAURolePicker();
      renderAURoleCards();
      auExpandSections();
      updateAuSummaries();
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

    function getAURoleOptions() {
      var items = [];
      for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
        items.push({ id: ROLES_PERMISSIONS_DATA[i].id, name: ROLES_PERMISSIONS_DATA[i].role });
      }
      return items;
    }

    function findRoleById(roleId) {
      for (var i = 0; i < ROLES_PERMISSIONS_DATA.length; i++) {
        if (ROLES_PERMISSIONS_DATA[i].id === roleId) return ROLES_PERMISSIONS_DATA[i];
      }
      return null;
    }

    function findRoleIdByRoleName(roleName) {
      for (var ri = 0; ri < ROLES_PERMISSIONS_DATA.length; ri++) {
        if (ROLES_PERMISSIONS_DATA[ri].role === roleName) return ROLES_PERMISSIONS_DATA[ri].id;
      }
      return "";
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
        auSave.disabled = false;
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
      if (auPageTitle) auPageTitle.textContent = isEdit ? "Edit user" : AU_PAGE_TITLE_ADD;
      if (auPageSubtitle) {
        /* Edit User v3 — Figma 788:4348 (Frances QA 2026-06-07).
           The page focuses on identity + role assignment now; the
           old standalone Permission Options card was retired this
           pass. Subtitle copy reflects that reduced scope. */
        auPageSubtitle.textContent = isEdit
          ? "Manage user details and role assignment"
          : AU_PAGE_SUB_ADD;
      }
      if (auBackLabel) {
        /* Lowercase "users" in both modes — matches Figma 788:4348
           and the on-page tab label. */
        auBackLabel.textContent = "Back to users";
      }
      if (auRemoveUser) auRemoveUser.hidden = !isEdit;
      /* Edit-mode primary action label per Figma 788:4348 ("Save user").
         Stays disabled until legitimate edits exist; dirty tracking
         already drives `auSave.disabled` via `refreshAuSaveDirty`. */
      if (auSave) auSave.textContent = isEdit ? "Save user" : "Add User";
      if (auEmail) {
        auEmail.readOnly = isEdit;
        auEmail.setAttribute("aria-readonly", isEdit ? "true" : "false");
      }
      if (auStatusReadonly) auStatusReadonly.hidden = !isEdit;
      /* Edit-mode card visibility (Figma 788:4348):
           • Identity row (avatar + name + email + active-status icon
             flush with the form field columns) — show.
           • Permission Options card — HIDDEN in edit mode. The user
             page no longer edits per-app permissions; that lives in
             Edit Role.
           • Access card — show in edit mode (this is the renamed
             "Roles & Permissions" card; in edit mode it carries the
             helper text + Assigned Role dropdown + effective-access
             table). Add-mode behavior unchanged. */
      if (auEditRow)   auEditRow.hidden   = !isEdit;
      if (auPermsCard) auPermsCard.hidden = true;
      if (auRolesCard) auRolesCard.hidden = false;
      /* Section title swaps: "Access" in edit mode, original
         "Roles & Permissions" in add mode. */
      if (auRolesPermissionsTitle) {
        auRolesPermissionsTitle.textContent = isEdit ? "Access" : "Roles & Permissions";
      }
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M36.0001 36.9477C41.1321 36.9477 45.4738 32.5961 45.4738 27.0003C45.4738 21.4045 41.1321 17.0529 36.0001 17.0529C30.8681 17.0529 26.5264 21.4045 26.5264 27.0003C26.5264 32.5961 30.8681 36.9477 36.0001 36.9477ZM36.0001 39.7898C42.8019 39.7898 48.3159 34.0637 48.3159 27.0003C48.3159 19.9369 42.8019 14.2108 36.0001 14.2108C29.1983 14.2108 23.6843 19.9369 23.6843 27.0003Z" fill="#5458C9"/>' +
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
              if (auIdAvatar) auIdAvatar.innerHTML = AU_ID_AVATAR_PLACEHOLDER_SVG;
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
          ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#056C07" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 16 9.5"/></svg>'
          : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8498A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="9" y1="12" x2="15" y2="12"/></svg>';
      }
    }
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

    /* Internal/External Basic Info field swap (Frances QA 2026-06-08
       cleanup pass).

       The `.au-field-team` slot holds either:
         • Internal user → label "Team" + editable EDL combo (existing).
         • External user → label "Company" + read-only static value
           (the company string from `user.organization`).

       The DOM structure stays identical (same `.au-field` grid slot,
       same label element, same combo container) so no CSS layout
       changes are needed. The combo's `<div>` shell stays in the DOM
       so initCombo's wiring keeps working when the next user is
       internal; we just hide its `.edl-combo-input-wrap` (the
       interactive trigger) and inject a sibling read-only display
       node when external. Switching back to an internal user
       removes the read-only node and unhides the combo trigger. */
    function applyAuBasicInfoCompanyOrTeam(user) {
      var fieldEl  = document.querySelector("#addUsersPage .au-field-team");
      var labelEl  = fieldEl ? fieldEl.querySelector(".au-label") : null;
      var comboEl  = document.getElementById("auTeamCombo");
      if (!fieldEl || !labelEl || !comboEl) return;
      var external = isAuUserExternal(user);
      /* The interactive trigger lives at `.edl-combo-input-wrap` inside
         the combo shell. The combo's menu/options sit elsewhere
         (rendered into body for layered combos), so hiding the
         trigger is sufficient to hide all interactive surface area. */
      var triggerEl = comboEl.querySelector(".edl-combo-input-wrap");
      var roEl = fieldEl.querySelector(".au-field-team-readonly");
      if (external) {
        labelEl.textContent = "Company";
        labelEl.removeAttribute("for");
        if (triggerEl) triggerEl.style.display = "none";
        var companyText = (user && user.organization) ? String(user.organization) : "";
        if (!roEl) {
          roEl = document.createElement("div");
          roEl.className = "au-field-team-readonly au-input";
          /* Inline styles only — no `styles.css` changes per the
             cleanup-pass guardrails. Match the existing read-only
             email field's visual rhythm: same border / padding /
             color tokens used by `.au-input[readonly]`. */
          roEl.style.background = "var(--bg-readonly, #F6F8FA)";
          roEl.style.border     = "1px solid var(--border-input, #D8DEE5)";
          roEl.style.borderRadius = "6px";
          roEl.style.padding    = "8px 12px";
          roEl.style.fontSize   = "14px";
          roEl.style.lineHeight = "20px";
          roEl.style.color      = "var(--text-primary, #1F2933)";
          roEl.style.minHeight  = "36px";
          roEl.style.display    = "flex";
          roEl.style.alignItems = "center";
          roEl.setAttribute("role", "textbox");
          roEl.setAttribute("aria-readonly", "true");
          comboEl.parentNode.insertBefore(roEl, comboEl.nextSibling);
        }
        roEl.textContent = companyText;
        roEl.setAttribute("aria-label", "Company");
      } else {
        labelEl.textContent = "Team";
        labelEl.setAttribute("for", "auTeamCombo-ctl");
        if (triggerEl) triggerEl.style.display = "";
        if (roEl && roEl.parentNode) roEl.parentNode.removeChild(roEl);
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
      /* Edit User v3 — Figma 788:4348 (Frances QA 2026-06-07).
         Pick the user's first role (the same one Users-table displays
         on the row) and seed the single Assigned Role dropdown +
         effective access table. The user's full role list still feeds
         the Add-mode role-cards stack above (which is hidden in edit
         mode but kept in DOM for Add User compatibility). */
      var primaryRoleName = (user.roles && user.roles.length) ? user.roles[0] : "";
      var primaryRoleId = primaryRoleName ? findRoleIdByRoleName(primaryRoleName) : "";
      auState.editPrimaryRoleId = primaryRoleId || "";
      if (setAuRoleCombo && primaryRoleId) setAuRoleCombo(primaryRoleId);
      /* Pass the full user record so the effective-access renderer
         can route via role + team (Frances QA 2026-06-07 round 4). */
      renderAuEffectiveAccessTable(primaryRoleId, user);
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

    /* Resource-chip allow-lists per application (PRD-aligned, per
       brief). Order matters — first ~3 chips render first; anything
       beyond shows as a "+N more" counter chip. */
    var AU_EFF_APP_CHIPS = {
      "Core Planning":              ["Orders", "Media Plans", "Line Items", "Approvals"],
      "IAM":                        ["Users", "Roles", "Teams"],
      "Inventory Catalog Manager":  ["Offerings", "Sales Packages"],
      "Targeting Options Manager":  ["Targeting Options", "Targeting Groups", "Templates"],
      "Disney Ads Agent":           ["Forecasting", "Planning Support", "Approval Comparisons"]
    };

    /* Role classification (brief §3) — maps role.id → access-class.
       Each class then maps to a compact list of {app, level, chipKeys}.
       This is the authoritative PRD-aligned access preview for the
       user page; the underlying per-function authorization model in
       Edit Role is unchanged. */
    var AU_EFF_ROLE_CLASS = {
      r001: "admin",            /* Atlas Admin            */
      r002: "planning_admin",   /* Core Planning Admin    */
      r003: "planning_admin",   /* Operations Admin       */
      r004: "planner",          /* Planner                */
      r005: "planner",          /* Planning Specialist    */
      r006: "planning_manager", /* Planning Manager       */
      r013: "planner",          /* Campaign Planner       */
      r014: "ad_ops",           /* Ad Operations Spec.    */
      r008: "viewer",           /* Read-Only Viewer       */
      r009: "icm_admin",        /* ICM Admin              */
      r010: "tom_admin"         /* TOM Admin              */
      /* (planning_admin class now exists in AU_EFF_PATTERNS so the
         Core Planning Admin row renders the brief's 2-row preview
         instead of falling back to _default.) */
    };

    /* Effective-access patterns by class. Each entry is an array of
       row specs the table renders, in display order. Apps not listed
       are intentionally omitted from the preview (per brief §8:
       "Only show applications where the selected role grants
       meaningful access. … This page is a role-based access preview,
       not an audit report."). Chips reference resources from
       AU_EFF_APP_CHIPS in the order they should appear; "*" means
       "all chips for this app".

       Class taxonomy (Frances QA 2026-06-07 round 4 — Disney Ad Sales
       PRD alignment):
         • sales            — Account Executive / sales user (§7.A)
         • planner          — Planner / Sales Planner (§7.B)
         • planning_manager — Planning Manager on Sales Planning team (§7.C)
         • revenue_yield    — Planning Manager / R&YM-team users (§7.F)
         • programmatic     — Addressable / Programmatic user (§7.D)
         • ad_ops           — Ad Operations / Trafficking user (§7.E)
         • admin            — DEP / Atlas Admin (§7.G)
         • icm_admin        — ICM Admin (§7.H)
         • tom_admin        — TOM Admin (§7.I)
         • viewer           — Read-Only Viewer with no other signal */
    /* Patterns aligned to brief 2026-06-08 ("Tatiana-style resource/action
       summary"). Each row's `chips` is the ORDERED list of resources to
       surface in the read-only Effective access cell. A resource entry
       may either be a string (use the default actions from
       AU_EFF_ACTIONS[app][level][resource]) or an object
       `{r:"Resource", a:["Read", …]}` that overrides the action list
       just for this row — needed when the brief lists a narrower
       per-resource action set than the row's overall Access Level
       would imply (e.g., a Sales user has "Edit Access" to Core
       Planning at the row level but the brief's example only lists
       "Read" verbs per resource). */
    var AU_EFF_PATTERNS = {
      sales: [
        /* Brief: "Core Planning | Edit Access | Orders: Read · Media Plans: Read" */
        { app: "Core Planning",    level: "Edit Access", chips: [{r:"Orders", a:["Read"]}, {r:"Media Plans", a:["Read"]}] },
        { app: "Disney Ads Agent", level: "View Access", chips: ["Forecasting", "Planning Support"] }
      ],
      planner: [
        /* Brief: "Core Planning | Full Access | Orders: Read, Create, Update · Media Plans: Read · Line Items: Read" */
        { app: "Core Planning",    level: "Full Access", chips: ["Orders", {r:"Media Plans", a:["Read"]}, {r:"Line Items", a:["Read"]}] },
        { app: "Disney Ads Agent", level: "View Access", chips: ["Forecasting", "Planning Support"] }
      ],
      planning_admin: [
        /* Brief: "Core Planning | Full Access | Orders: Read, Create, Update · Media Plans: Read · +2 more" */
        { app: "Core Planning", level: "Full Access", chips: ["Orders", {r:"Media Plans", a:["Read"]}, {r:"Line Items", a:["Read"]}, {r:"Approvals", a:["Read"]}] },
        /* Brief: "IAM | View Access | Users: Read · Roles: Assign" */
        { app: "IAM",           level: "View Access", chips: ["Users", "Roles"] }
      ],
      planning_manager: [
        { app: "Core Planning",    level: "Full Access", chips: "*" },
        { app: "IAM",              level: "View Access", chips: ["Users", "Roles"] },
        { app: "Disney Ads Agent", level: "View Access", chips: ["Forecasting"] }
      ],
      revenue_yield: [
        { app: "Core Planning",             level: "View Access", chips: ["Orders", "Media Plans"] },
        { app: "Disney Ads Agent",          level: "View Access", chips: ["Forecasting"] },
        { app: "Inventory Catalog Manager", level: "View Access", chips: ["Offerings"] }
      ],
      programmatic: [
        { app: "Core Planning",    level: "Edit Access", chips: [{r:"Orders", a:["Read"]}, {r:"Media Plans", a:["Read"]}] },
        { app: "Disney Ads Agent", level: "View Access", chips: ["Forecasting", "Planning Support"] }
      ],
      ad_ops: [
        /* Brief: "Core Planning | Edit Access | Orders: Read · Line Items: Read, Update · Approvals: Read" */
        { app: "Core Planning",    level: "Edit Access", chips: [{r:"Orders", a:["Read"]}, "Line Items", {r:"Approvals", a:["Read"]}] },
        { app: "Disney Ads Agent", level: "View Access", chips: ["Approval Comparisons", "Planning Support"] }
      ],
      admin: [
        /* Brief: "Core Planning | Full Access | Orders: Read, Create, Update · Media Plans: Read · +2 more" */
        { app: "Core Planning",             level: "Full Access", chips: ["Orders", {r:"Media Plans", a:["Read"]}, {r:"Line Items", a:["Read"]}, {r:"Approvals", a:["Read"]}] },
        { app: "IAM",                       level: "Full Access", chips: ["Users", "Roles", "Teams"] },
        { app: "Inventory Catalog Manager", level: "Edit Access", chips: ["Offerings", {r:"Sales Packages", a:["Read"]}] },
        { app: "Targeting Options Manager", level: "Edit Access", chips: ["Targeting Options", {r:"Targeting Groups", a:["Read"]}] },
        { app: "Disney Ads Agent",          level: "View Access", chips: ["Forecasting", "Planning Support"] }
      ],
      icm_admin: [
        { app: "Inventory Catalog Manager", level: "Full Access", chips: ["Offerings", "Sales Packages"] },
        { app: "Core Planning",             level: "View Access", chips: ["Orders"] },
        { app: "IAM",                       level: "View Access", chips: ["Users"] }
      ],
      tom_admin: [
        { app: "Targeting Options Manager", level: "Full Access", chips: ["Targeting Options", "Targeting Groups", "Templates"] },
        { app: "Core Planning",             level: "View Access", chips: ["Orders"] },
        { app: "IAM",                       level: "View Access", chips: ["Users"] }
      ],
      viewer: [
        { app: "Core Planning", level: "View Access", chips: ["Orders"] }
      ],
      /* Fallback for any unmapped / unknown role (per brief §3 fallback). */
      _default: [
        { app: "Core Planning", level: "View Access", chips: ["Orders"] }
      ]
    };

    /* Per-(app, level, resource) → action wording for the Effective
       access cell. Brief 2026-06-08 explicitly mandates user-facing
       verbs only — Read / Create / Update / Assign — never list/get,
       function keys, or "Query Access". Any resource not listed here
       falls back to ["Read"] so the cell never breaks. */
    var AU_EFF_ACTIONS = {
      "Core Planning": {
        "Full Access": {
          "Orders":     ["Read", "Create", "Update"],
          "Media Plans":["Read", "Create", "Update"],
          "Line Items": ["Read", "Create", "Update"],
          "Approvals":  ["Read", "Update"]
        },
        "Edit Access": {
          "Orders":     ["Read", "Update"],
          "Media Plans":["Read"],
          "Line Items": ["Read", "Update"],
          "Approvals":  ["Read"]
        },
        "View Access": {
          "Orders":     ["Read"],
          "Media Plans":["Read"],
          "Line Items": ["Read"],
          "Approvals":  ["Read"]
        }
      },
      "IAM": {
        "Full Access": {
          "Users": ["Read", "Update"],
          "Roles": ["Read", "Assign"],
          "Teams": ["Read", "Update"]
        },
        "View Access": {
          "Users": ["Read"],
          "Roles": ["Assign"],
          "Teams": ["Read"]
        }
      },
      "Inventory Catalog Manager": {
        "Full Access": {
          "Offerings":     ["Read", "Create", "Update"],
          "Sales Packages":["Read", "Create", "Update"]
        },
        "Edit Access": {
          "Offerings":     ["Read", "Update"],
          "Sales Packages":["Read"]
        },
        "View Access": {
          "Offerings":     ["Read"],
          "Sales Packages":["Read"]
        }
      },
      "Targeting Options Manager": {
        "Full Access": {
          "Targeting Options":["Read", "Create", "Update"],
          "Targeting Groups": ["Read", "Create", "Update"],
          "Templates":        ["Read", "Update"]
        },
        "Edit Access": {
          "Targeting Options":["Read", "Update"],
          "Targeting Groups": ["Read"],
          "Templates":        ["Read"]
        },
        "View Access": {
          "Targeting Options":["Read"],
          "Targeting Groups": ["Read"],
          "Templates":        ["Read"]
        }
      },
      "Disney Ads Agent": {
        "View Access": {
          "Forecasting":         ["Read"],
          "Planning Support":    ["Read"],
          "Approval Comparisons":["Read"]
        }
      }
    };

    /* Sales-context teams. When a user's primary role classifies as a
       generic Read-Only Viewer / Planner, but their TEAM is one of these
       sales-context teams, surface the sales pattern (§7.A) so the
       preview reflects the actual day-to-day surface they touch. */
    var AU_EFF_SALES_TEAMS = {
      "National Ad Sales":              true,
      "Agency & Holding Company Sales": true,
      "Client & Brand Solutions":       true
    };

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
       list is reserved for the "View breakdown" modal so the table
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

    /* Pick the most plausible access-class for a (role, team) pair.
       Priority order:
         1. Admin/ICM/TOM admin role → admin/icm_admin/tom_admin
         2. Programmatic-relevant team → programmatic
         3. Ad Ops team → ad_ops
         4. Planning Manager + Revenue & Yield Management team → revenue_yield
         5. Planning Manager (any other team) → planning_manager
         6. Planner / Planning Specialist / Campaign Planner → planner
         7. Ad Operations Specialist role → ad_ops (covers Lisa etc.)
         8. Read-Only Viewer ON sales team → sales (§7.A)
         9. Read-Only Viewer ON revenue team → revenue_yield
        10. Read-Only Viewer (no other signal) → viewer
        11. Operations Admin (catch-all) → planner if on planning team
            else sales if on sales team else viewer
       The function is conservative: only signal-driven mappings, no
       random surprises. Unknown user → _default. */
    function auEffClassifyForUser(roleId, teamName, userRecord) {
      /* Honour explicit admin role IDs first. */
      if (roleId && AU_EFF_ROLE_CLASS[roleId]) {
        var byRole = AU_EFF_ROLE_CLASS[roleId];
        if (byRole === "admin" || byRole === "icm_admin" || byRole === "tom_admin") return byRole;
        if (byRole === "ad_ops") return "ad_ops";
      }
      /* Team-driven routing for the new sales / programmatic / ad-ops
         / revenue-yield classes. */
      if (teamName === "Addressable & Programmatic Sales") return "programmatic";
      if (teamName === "Ad Operations") return "ad_ops";

      /* Detect ICM Admin / TOM Admin even when it's a secondary role. */
      var roleNames = (userRecord && userRecord.roles) || [];
      for (var i = 0; i < roleNames.length; i++) {
        if (roleNames[i] === "ICM Admin") return "icm_admin";
        if (roleNames[i] === "TOM Admin") return "tom_admin";
        if (roleNames[i] === "Atlas Admin") return "admin";
      }
      var primary = roleNames[0] || "";
      if (primary === "Planning Manager") {
        if (teamName === "Revenue & Yield Management") return "revenue_yield";
        return "planning_manager";
      }
      if (primary === "Planner" || primary === "Planning Specialist" || primary === "Campaign Planner") {
        if (teamName === "Revenue & Yield Management") return "revenue_yield";
        if (AU_EFF_SALES_TEAMS[teamName]) return "sales";
        return "planner";
      }
      if (primary === "Ad Operations Specialist") return "ad_ops";
      if (primary === "Core Planning Admin") return "planning_admin";
      if (primary === "Operations Admin") {
        if (teamName === "Revenue & Yield Management") return "revenue_yield";
        if (teamName === "Sales Planning") return "planner";
        if (AU_EFF_SALES_TEAMS[teamName]) return "sales";
        return "viewer";
      }
      if (primary === "Read-Only Viewer") {
        if (teamName === "Revenue & Yield Management") return "revenue_yield";
        if (AU_EFF_SALES_TEAMS[teamName]) return "sales";
        return "viewer";
      }
      /* Fall back to roleId mapping if no other signal fired. */
      if (roleId && AU_EFF_ROLE_CLASS[roleId]) return AU_EFF_ROLE_CLASS[roleId];
      return "_default";
    }

    /* Round 5 (2026-06-09): we now also stash the resolved pattern
       (assigned-role name + per-app sections + per-resource action
       lists) into a module-level snapshot so the "View breakdown"
       modal can render the long-form details without re-running the
       classify/resolve pipeline. The table itself continues to show
       the compact counts. */
    var auEffLastBreakdown = null;

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
      var breakdown = { roleName: roleName, sections: [] };
      var html = "";
      for (var i = 0; i < pattern.length; i++) {
        var spec = pattern[i];
        var chipKeys = auEffResolveChips(spec.app, spec.chips);
        var levelClass = "au-eff-level-pill--" + (spec.level || "").toLowerCase().replace(/\s+/g, "-");
        var groups = auEffBuildGroups(spec.app, spec.level, chipKeys);
        breakdown.sections.push({ app: spec.app, level: spec.level, groups: groups });
        var groupsAttr = esc(JSON.stringify(groups)).replace(/"/g, "&quot;");
        html += '<tr>' +
          '<td class="au-eff-app">' +
            '<span class="au-eff-app-name">' + esc(spec.app) + '</span>' +
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
    }

    /* ─── Effective access breakdown modal ──────────────────────────
       Opened by the "View breakdown" action in the Access table
       header area. Reuses the EDL `.cr-confirm-*` shell (Remove Role /
       Remove application / Set inactive / Add members) widened via
       `.au-eff-modal-dialog` so the long resource/action list reads
       comfortably. The modal is read-only and uses the snapshot
       captured by renderAuEffectiveAccessTable, so the content stays
       in sync with whatever the table currently shows. */
    var auEffModalBackdrop = document.getElementById("auEffBreakdownBackdrop");
    var auEffModalRoleName = document.getElementById("auEffBreakdownRoleName");
    var auEffModalSections = document.getElementById("auEffBreakdownSections");
    var auEffModalClose    = document.getElementById("auEffBreakdownClose");
    /* Round 8: EDL Modal exposes a header `×` icon button. Wire it
       to the same close handler so the icon, footer button, Esc, and
       backdrop click all converge on `closeAuEffBreakdown()`. */
    var auEffModalCloseX   = document.getElementById("auEffBreakdownX");
    var auEffViewBtn       = document.getElementById("auEffViewBreakdown");
    var auEffModalLastFocus = null;

    function auEffRenderBreakdownModal() {
      if (!auEffModalSections) return;
      var b = auEffLastBreakdown;
      if (auEffModalRoleName) {
        auEffModalRoleName.textContent = (b && b.roleName) ? b.roleName : "—";
      }
      if (!b || !b.sections || !b.sections.length) {
        auEffModalSections.innerHTML =
          '<p class="au-eff-modal-empty">No effective access for the assigned role.</p>';
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
            var verbs = (g.a && g.a.length) ? g.a.join(", ") : "Read";
            html +=
              '<div class="au-eff-modal-row">' +
                '<dt class="au-eff-modal-res">' + esc(g.r) + '</dt>' +
                '<dd class="au-eff-modal-acts">' + esc(verbs) + '</dd>' +
              '</div>';
          }
          html += '</dl>';
        }
        html += '</section>';
      }
      auEffModalSections.innerHTML = html;
    }

    function openAuEffBreakdown() {
      if (!auEffModalBackdrop) return;
      auEffRenderBreakdownModal();
      auEffModalLastFocus = document.activeElement;
      auEffModalBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (auEffModalClose) auEffModalClose.focus();
      }, 0);
    }
    function closeAuEffBreakdown() {
      if (!auEffModalBackdrop) return;
      auEffModalBackdrop.setAttribute("hidden", "");
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
      if (e.key !== "Escape") return;
      if (auEffModalBackdrop && !auEffModalBackdrop.hasAttribute("hidden")) {
        closeAuEffBreakdown();
      }
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
        return;
      }
      if (selectedStatus() !== "Inactive" && auState.selectedRoleIds.length === 0) {
        showEdlToast({
          type: "warning",
          title: "Role required",
          body: "Assign at least one role before saving this user."
        });
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
      if (willCollapse) closeAllAddUserCombos();
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
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<polyline points="3 6 5 6 21 6"/>' +
        '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' +
      '</svg>';
    /* Show-all arrow per Figma 847:16415 — Feather "Arrow-Down" icon
       at 16 px (NOT the unicode `↓` glyph the earlier build used). */
    var AU_PERMS_SHOW_ARROW_DOWN_SVG =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>' +
      '</svg>';
    var AU_PERMS_SHOW_ARROW_UP_SVG =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>' +
      '</svg>';

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
                  '<svg class="cr-dd-chev" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
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
      var first = auFirstName.value.trim();
      var last = auLastName.value.trim();
      var email = auEmail.value.trim();
      if (!first || !last || !email) {
        showEdlToast({
          type: "warning",
          title: "Required fields missing",
          body: "First name, last name, and email are required."
        });
        return;
      }
      if (selectedStatus() !== "Inactive" && auState.selectedRoleIds.length === 0) {
        showEdlToast({
          type: "warning",
          title: "Role required",
          body: "Assign at least one role before adding a user."
        });
        return;
      }
      var assignedRoleNames = [];
      if (selectedStatus() !== "Inactive") {
        for (var i = 0; i < auState.selectedRoleIds.length; i++) {
          var role = findRoleById(auState.selectedRoleIds[i]);
          if (role) assignedRoleNames.push(role.role);
        }
      }

      var newUser = {
        id: "u_local_" + Date.now(),
        avatar: DEFAULT_ADD_USER_AVATAR,
        name: first + " " + last,
        email: email,
        roles: assignedRoleNames,
        status: selectedStatus(),
        team: auTeam && auTeam.value && auTeam.value.trim() ? auTeam.value.trim() : "Unassigned",
        title: auPreferredName.value.trim() ? ("Preferred: " + auPreferredName.value.trim()) : "Atlas User",
        region: selectedRegionCode()
      };
      ORIGINAL_ORDER.unshift(newUser);
      sortKey = null;
      sortDir = null;
      DATA = ORIGINAL_ORDER.slice();
      TOTAL_ITEMS += 1;
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
      var roleId = auState.selectedRoleId;
      if (!roleId) return;
      if (auState.selectedRoleIds.indexOf(roleId) !== -1) return;
      auState.selectedRoleIds.push(roleId);
      auState.selectedRoleId = "";
      renderAURolePicker();
      renderAURoleCards();
    });

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
        hdr.addEventListener("click", function () {
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
        openAddUsers();
      });
    }
    if (auBack) auBack.addEventListener("click", closeAddUsers);
    if (auCancel) auCancel.addEventListener("click", closeAddUsers);
    if (auSave) auSave.addEventListener("click", handleSaveUser);
  })();

  /* ═══ ROLES & PERMISSIONS TABLE RENDERING ═══ */
  var EDIT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
  var DELETE_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';

  /* R&P Functions column renders semantic access labels per app. */

  function formatFunctions(fns, roleId) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) {
      var app = fns[i].name;
      var display = RP_FUNC_DISPLAY_NAME[app] || app;
      var access = fns[i].access || roleAccessLevel(roleId, app);
      parts.push(
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
    return parts.join(", ");
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
        '<td class="rp-func"><span class="rp-func-text">' + formatFunctions(r.functions, r.id) + "</span></td>" +
        '<td class="rp-by">' + esc(r.createdBy) + '</td>' +
        '<td class="rp-date">' + esc(r.createDate) + '</td>' +
        '</tr>';
    }
    tb.innerHTML = html;
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
      if (rpSortKey && ths[i].dataset.rpSort === rpSortKey) {
        if (rpSortDir === "asc") ths[i].classList.add("sort-asc");
        else if (rpSortDir === "desc") ths[i].classList.add("sort-desc");
      }
    }
  }

  /* ─── R&P Sort header clicks ─── */
  var rpThead = document.querySelector(".rp-tbl thead");
  if (rpThead) {
    rpThead.addEventListener("click", function (e) {
      var th = e.target.closest("th[data-rp-sort]");
      if (th) applyRPSort(th.dataset.rpSort);
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

     Alignment with existing IAM role patterns (see ROLE_FUNCTION_MAP):
       • Full Access     — Atlas Admin / app-tier Admin roles (every
         CRUD + governance verb on each group's pool).
       • Read Only       — Read-Only Viewer / lurker roles, mirrors
         the Role Assignment "View Only" bundle (View action only).
       • Standard Access — Planner / Planning Specialist / Operations
         Admin operational range (browse + author + edit). Matches
         the verbs Tatiana's PRD highlights as the everyday operating
         set: list/get/create/update. Maps cleanly to the Role
         Assignment "Edit" bundle for non-IAM apps.
       • Custom          — Planning Manager / hand-tuned roles where
         the action grid does not fit a named bundle. */
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
    html +=       '<svg class="pc-grp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
    html +=       '<span>' + esc(groupName) + '</span>';
    html +=     '</button>';
    html +=     '<button type="button" class="pc-grp-delete" data-pc-grp-delete aria-label="Delete ' + esc(groupName) + ' group">';
    html +=       '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';
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
    html +=       '<svg class="pc-grp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
    html +=       '<span>' + esc(model.group) + '</span>';
    html +=     '</button>';
    html +=     '<button type="button" class="pc-grp-delete" data-pc-grp-delete aria-label="Delete ' + esc(model.group) + ' group">';
    html +=       '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';
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
  var APP_PERMISSIONS = {
    core_planning:              { label: "Core Planning",               levels: APP_LEVELS_BY_CR_KEY.core_planning.slice() },
    identity_access_management: { label: "Identity Access Management",  levels: APP_LEVELS_BY_CR_KEY.identity_access_management.slice() },
    disney_ads_agent:           { label: "Disney Ads Agent",            levels: APP_LEVELS_BY_CR_KEY.disney_ads_agent.slice() },
    /* Approve dropped from ICM/TOM in favor of the lean vocabulary
       declared in APP_LEVELS_BY_CR_KEY — no Approve actions exist in
       PM's ICM/TOM pools, so the level would have resolved to an
       empty bundle. */
    inventory_catalog_manager:  { label: "Inventory Catalog Manager",   levels: APP_LEVELS_BY_CR_KEY.inventory_catalog_manager.slice() },
    target_options_manager:     { label: "Targeting Options Manager",      levels: APP_LEVELS_BY_CR_KEY.target_options_manager.slice() }
  };
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
    var crBasicSummary = document.getElementById("crBasicSummary");
    var crFuncsSummary = document.getElementById("crFuncsSummary");
    var crTitleEl = crPage.querySelector(".cr-title");
    var mainPage = document.querySelector(".page");

    /* Atlas IAM role configuration — PRD-aligned application set only.
       Sales, Ad Ops, and Billing are NOT defined by Tatiana's PRD as
       valid role-function targets, so they are excluded from the picker
       data source (not just visually hidden). APP_PERMISSIONS mirrors
       this set — any key not present below has no permissions definition
       and cannot be selected, preselected, or searched. */
    /* Round 9 (2026-06-09): the brief's Application Names list for
       Create/Edit Role uses "IAM" (matches Figma node 924:14138). The
       dropdown option label is updated here to match the matrix
       section title (`CR_APP_DISPLAY_LABEL.identity_access_management
       = "IAM"`). The underlying `value` is unchanged so all data
       hydration / persistence keys remain stable. */
    var CR_APP_OPTIONS = [
      { value: "identity_access_management", label: "IAM" },
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
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
    /* Accordion chevron matches `.cr-section-chev` (down = expanded, rotate -90° = collapsed / right). */
    var CR_MODULE_CHEV_SVG =
      '<svg class="cr-module-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';

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
      if (!crRemoveBtn) return;
      if (visible) crRemoveBtn.removeAttribute("hidden");
      else crRemoveBtn.setAttribute("hidden", "");
    }

    function showCreateRole() {
      if (mainPage) mainPage.style.display = "none";
      crPage.style.display = "";
      window.scrollTo(0, 0);
      resetCreateRole();
      if (crTitleEl) crTitleEl.textContent = "Create Role";
      crEditingRecord = null;
      setRemoveRoleVisible(false);
    }

    function hideCreateRole() {
      crPage.style.display = "none";
      if (mainPage) mainPage.style.display = "";
      if (crTitleEl) crTitleEl.textContent = "Create Role";
      crEditingRecord = null;
      setRemoveRoleVisible(false);
    }

    /* ─── Edit Role: reuses Create Role layout with prefilled values. */
    var FUNCTION_TO_APP_KEY = {
      "Core Planning": "core_planning",
      "TOM": "target_options_manager",
      "IAM": "identity_access_management",
      "ICM": "inventory_catalog_manager",
      "Disney Ads Agent": "disney_ads_agent"
    };

    /* ─── Authoritative per-role permission matrix ──────────────────
       Encodes the role archetypes from the Create/Edit Role brief.
       Each entry maps role id → app key → resource title → list of
       Figma column labels (Read/Create/Update/Delete/Assign).

       This is the source of truth for which applications the role
       opens with in Edit Role and which checkboxes are pre-checked.
       The mapping mirrors the brief's "Suggested role matrix
       mapping" section (A–J) so different roles look meaningfully
       different on the Edit Role page (broad / partial / read-only /
       partial-application coverage). */
    var CR_ROLE_MATRIX = {
      /* A. Atlas Admin — broad cross-app access (all 5 apps) */
      r001: {
        core_planning: {
          "Orders":      ["Read", "Create", "Update", "Delete"],
          "Media Plans": ["Read", "Create", "Update"],
          "Line Items":  ["Read", "Create", "Update"],
          "Approvals":   ["Read", "Update"]
        },
        identity_access_management: {
          "Users": ["Read", "Create", "Update", "Delete"],
          "Roles": ["Read", "Create", "Update", "Delete", "Assign"],
          "Teams": ["Read", "Create", "Update"]
        },
        inventory_catalog_manager: {
          "Offerings":      ["Read", "Create", "Update", "Delete"],
          "Sales Packages": ["Read", "Create", "Update", "Delete"]
        },
        target_options_manager: {
          "Targeting Options":   ["Read", "Create", "Update", "Delete", "Assign"],
          "Targeting Groups":    ["Read", "Create", "Update", "Delete", "Assign"],
          "Targeting Templates": ["Read", "Create", "Update", "Assign"]
        },
        disney_ads_agent: {
          "Forecasting":          ["Read"],
          "Planning Support":     ["Read"],
          "Approval Comparisons": ["Read"]
        }
      },
      /* B. Core Planning Admin */
      r002: {
        core_planning: {
          "Orders":      ["Read", "Create", "Update"],
          "Media Plans": ["Read", "Create", "Update"],
          "Line Items":  ["Read", "Create", "Update"],
          "Approvals":   ["Read", "Update"]
        },
        identity_access_management: {
          "Users": ["Read"],
          "Roles": ["Read", "Assign"],
          "Teams": ["Read"]
        },
        disney_ads_agent: {
          "Forecasting":      ["Read"],
          "Planning Support": ["Read"]
        }
      },
      /* C. Planning Manager */
      r006: {
        core_planning: {
          "Orders":      ["Read", "Create", "Update"],
          "Media Plans": ["Read", "Update"],
          "Line Items":  ["Read", "Update"],
          "Approvals":   ["Read", "Update"]
        },
        identity_access_management: {
          "Users": ["Read"],
          "Roles": ["Read"],
          "Teams": ["Read"]
        },
        disney_ads_agent: {
          "Forecasting":      ["Read"],
          "Planning Support": ["Read"]
        }
      },
      /* D. Planner (used for Planner, Planning Specialist, Campaign Planner) */
      r004: {
        core_planning: {
          "Orders":      ["Read", "Create", "Update"],
          "Media Plans": ["Read"],
          "Line Items":  ["Read", "Create", "Update"],
          "Approvals":   ["Read"]
        },
        disney_ads_agent: {
          "Forecasting":      ["Read"],
          "Planning Support": ["Read"]
        }
      },
      /* F. Ad Operations Specialist (also Operations Admin) */
      r014: {
        core_planning: {
          "Orders":     ["Read"],
          "Line Items": ["Read", "Update"],
          "Approvals":  ["Read", "Update"]
        },
        disney_ads_agent: {
          "Planning Support":     ["Read"],
          "Approval Comparisons": ["Read"]
        }
      },
      /* G. Read-Only Viewer */
      r008: {
        core_planning: {
          "Orders":      ["Read"],
          "Media Plans": ["Read"],
          "Line Items":  ["Read"]
        }
      },
      /* H. ICM Admin */
      r009: {
        inventory_catalog_manager: {
          "Offerings":      ["Read", "Create", "Update", "Delete"],
          "Sales Packages": ["Read", "Create", "Update", "Delete"]
        },
        core_planning: {
          "Orders":      ["Read"],
          "Media Plans": ["Read"]
        },
        identity_access_management: {
          "Users": ["Read"],
          "Roles": ["Read"]
        }
      },
      /* I. TOM Admin */
      r010: {
        target_options_manager: {
          "Targeting Options":   ["Read", "Create", "Update", "Delete", "Assign"],
          "Targeting Groups":    ["Read", "Create", "Update", "Delete", "Assign"],
          "Targeting Templates": ["Read", "Create", "Update", "Assign"]
        },
        core_planning: {
          "Orders":      ["Read"],
          "Media Plans": ["Read"]
        },
        identity_access_management: {
          "Users": ["Read"],
          "Roles": ["Read"]
        }
      }
    };
    /* Alias entries — roles in the dataset that share an archetype
       with another role get the same matrix without duplicating
       data. r003 = Operations Admin → Ad Operations Specialist;
       r005 = Planning Specialist & r013 = Campaign Planner → Planner. */
    CR_ROLE_MATRIX.r003 = CR_ROLE_MATRIX.r014;
    CR_ROLE_MATRIX.r005 = CR_ROLE_MATRIX.r004;
    CR_ROLE_MATRIX.r013 = CR_ROLE_MATRIX.r004;

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
      if (crTitleEl) crTitleEl.textContent = "Edit Role";
      crEditingRecord = record;
      setRemoveRoleVisible(true);
      crRoleName.value = record.role || "";
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = (record.description || "").replace(/\.$/, "");
      var sens = crPage.querySelector('input[name="dataAccess"][value="sensitive"]');
      var reg  = crPage.querySelector('input[name="dataAccess"][value="regional"]');
      if (sens) sens.checked = (record.status === "Sensitive" || record.status === "Standard");
      if (reg)  reg.checked  = (record.status === "Regional" || record.status === "Standard");

      /* Hydration source of truth: CR_ROLE_MATRIX (per role id).
         Falls back to the legacy record.functions → preferredValues
         path only if a role isn't in the matrix yet (defensive). */
      var matrix = CR_ROLE_MATRIX[record.id];
      if (matrix) {
        /* Add the matrix's apps in the order Atlas's app dropdown
           uses (core_planning → IAM → ICM → TOM → Disney Ads Agent),
           skipping apps the role doesn't have. */
        var appOrder = ["core_planning", "identity_access_management", "inventory_catalog_manager", "target_options_manager", "disney_ads_agent"];
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
      updateCrSummaries();
      captureCrInitialState();
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
      var checks = crPage.querySelectorAll('input[name="dataAccess"]');
      for (var i = 0; i < checks.length; i++) checks[i].checked = true;
      crAddedApps = [];
      crPermsContent.innerHTML = "";
      crPermsContent.style.display = "none";
      crSetAppValue("");
      crRefreshAppMenu();
      updateFunctionsCount();
      updateCrSummaries();
      var cards = crPage.querySelectorAll(".cr-card");
      for (var cc = 0; cc < cards.length; cc++) {
        cards[cc].classList.remove("collapsed");
        var hdr = cards[cc].querySelector(".cr-section-header[data-cr-toggle]");
        if (hdr) hdr.setAttribute("aria-expanded", "true");
      }
      captureCrInitialState();
    }

    function updateFunctionsCount() {
      /* Figma section title is plain "Functions" with no count —
         keep the function so callers continue to work and so the
         summary chips stay fresh. */
      if (crFunctionsTitle) crFunctionsTitle.textContent = "Functions";
      updateCrSummaries();
    }

    /* Dirty-state Save Role: the button mirrors whether the form differs from
       the captured baseline. The baseline is empty for Create Role and reflects
       the prefilled values for Edit Role. Any change — text, checkbox, added
       app, or permission — flips Save to enabled; reverting every field back
       to the baseline disables it again. */
    var crInitialState = "";

    function snapshotCrState() {
      var descEl = document.getElementById("crDescription");
      var sensCb = crPage.querySelector('input[name="dataAccess"][value="sensitive"]');
      var regCb  = crPage.querySelector('input[name="dataAccess"][value="regional"]');
      var perms = [];
      var levels = [];
      var sections = crPermsContent.querySelectorAll(".cr-app-section");
      for (var s = 0; s < sections.length; s++) {
        var key = sections[s].getAttribute("data-app-key") || "";
        levels.push(key + ":" + (sections[s].getAttribute("data-access-level") || ""));
        /* Body cells only — column-header select-all checkboxes
           share `.cr-perm-check` for visual reuse but are not
           perm assignments. */
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
        sens: !!(sensCb && sensCb.checked),
        reg:  !!(regCb  && regCb.checked),
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

    function crBuildBasicSummary() {
      var name = crRoleName.value.trim();
      var access = [];
      var checks = crPage.querySelectorAll('input[name="dataAccess"]:checked');
      for (var i = 0; i < checks.length; i++) {
        var lbl = checks[i].parentNode.querySelector(".cr-check-label");
        if (lbl) access.push(lbl.textContent.trim());
      }
      var parts = [];
      if (name) parts.push(name);
      if (access.length) parts.push(access.join(", "));
      return parts.join(" • ");
    }
    function crBuildFuncsSummary() {
      if (!crAddedApps.length) return "";
      var labels = [];
      for (var i = 0; i < crAddedApps.length; i++) {
        var key = crAddedApps[i];
        if (APP_PERMISSIONS[key]) {
          var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + key + '"]');
          var level = section ? (section.getAttribute("data-access-level") || APP_PERMISSIONS[key].levels[0]) : APP_PERMISSIONS[key].levels[0];
          labels.push(APP_PERMISSIONS[key].label + " (" + level + ")");
        }
      }
      return labels.join(", ");
    }
    function updateCrSummaries() {
      if (crBasicSummary) crBasicSummary.textContent = crBuildBasicSummary();
      if (crFuncsSummary) crFuncsSummary.textContent = crBuildFuncsSummary();
    }

    /* ─── App dropdown ─── */
    function crBuildAppMenu() {
      var menu = document.createElement("div");
      menu.id = "crAppMenu";
      menu.className = "cr-dd-menu";
      menu.setAttribute("role", "listbox");
      for (var i = 0; i < CR_APP_OPTIONS.length; i++) {
        var opt = CR_APP_OPTIONS[i];
        var row = document.createElement("div");
        row.className = "cr-dd-option";
        row.setAttribute("role", "option");
        row.setAttribute("data-value", opt.value);
        row.textContent = opt.label;
        menu.appendChild(row);
      }
      crAppDD.appendChild(menu);
      return menu;
    }
    var crAppMenu = crBuildAppMenu();

    function crCloseAppDD() {
      detachCrDdLayeredMenu(crAppDD);
      crAppDD.classList.remove("open");
      crAppTrigger.setAttribute("aria-expanded", "false");
    }
    function crOpenAppDD() {
      crAppDD.classList.add("open");
      crAppTrigger.setAttribute("aria-expanded", "true");
      attachCrDdLayeredMenu(crAppDD);
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
       (Read / Create / Update / Delete / Assign). Underlying PM data
       still uses the canonical action verbs (View, Edit, …), so we
       keep a render-only mapping between the column heading and the
       PM action that the checkbox writes into form state. */
    var CR_MATRIX_COLUMNS = ["Read", "Create", "Update", "Delete", "Assign"];
    var CR_COLUMN_TO_PM_ACTION = {
      "Read":   "View",
      "Create": "Create",
      "Update": "Edit",
      "Delete": "Delete",
      "Assign": "Assign"
    };

    /* ─── Create-Role-only resource catalog ─────────────────────────
       The PM catalog (PC_GROUP_FOR_KEY / PC_POOL_BY_GROUP) is the
       single source of truth for the Permission Management screen.
       For Create Role's matrix we need two adjustments without
       touching PM:
         1. Pluralized / cleaned resource names — Order → Orders,
            Media Plan → Media Plans (PM data is unchanged because it
            already uses "Approvals", "Line Items", etc.; "Order"
            was the only typo we surface here).
         2. Per-resource support map — which Figma columns are
            *applicable* for that resource. The support union across
            all resources determines which column headers an app's
            matrix renders (e.g. Disney Ads Agent → Read only;
            Core Planning → R/C/U/D; IAM/TOM → R/C/U/D/A). Cells
            within an app's column set always render as real
            checkboxes — there are no disabled tri-state cells —
            matching Figma 924:14107 and the per-app column rule in
            the latest Create Role brief. */
    var CR_MATRIX_RESOURCES_BY_APP = {
      core_planning: [
        { title: "Orders",      pmGroup: "Order",       support: ["Read", "Create", "Update", "Delete"] },
        { title: "Media Plans", pmGroup: "Media Plans", support: ["Read", "Create", "Update"] },
        { title: "Line Items",  pmGroup: "Line Items",  support: ["Read", "Create", "Update"] },
        { title: "Approvals",   pmGroup: "Approvals",   support: ["Read", "Update"] }
      ],
      identity_access_management: [
        { title: "Users", pmGroup: "Users", support: ["Read", "Create", "Update", "Delete"] },
        { title: "Roles", pmGroup: "Roles", support: ["Read", "Create", "Update", "Delete", "Assign"] },
        { title: "Teams", pmGroup: "Teams", support: ["Read", "Create", "Update"] }
      ],
      inventory_catalog_manager: [
        { title: "Offerings",      pmGroup: "Offerings",      support: ["Read", "Create", "Update", "Delete"] },
        { title: "Sales Packages", pmGroup: "Sales Packages", support: ["Read", "Create", "Update", "Delete"] }
      ],
      target_options_manager: [
        { title: "Targeting Options",   pmGroup: "Targeting Options",   support: ["Read", "Create", "Update", "Delete", "Assign"] },
        { title: "Targeting Groups",    pmGroup: "Targeting Groups",    support: ["Read", "Create", "Update", "Delete", "Assign"] },
        { title: "Targeting Templates", pmGroup: "Targeting Templates", support: ["Read", "Create", "Update", "Assign"] }
      ],
      disney_ads_agent: [
        /* Disney Ads Agent in PM is a single group named "Disney Ads
           Agent" containing four function keys. The brief asks us to
           surface three sub-resources in the matrix
           (Forecasting / Planning Support / Approval Comparisons),
           each read-only. We honor that here while leaving PM
           untouched — the matrix is a presentation layer over the
           same underlying function keys, identified via `pmKey`. */
        { title: "Forecasting",         pmGroup: "Disney Ads Agent", pmKey: "forecasting_queries",         support: ["Read"] },
        { title: "Planning Support",    pmGroup: "Disney Ads Agent", pmKey: "planning_activity_summaries", support: ["Read"] },
        { title: "Approval Comparisons",pmGroup: "Disney Ads Agent", pmKey: "approval_io_comparisons",     support: ["Read"] }
      ]
    };

    /* Optional Create-Role display label override per app (does NOT
       change `APP_PERMISSIONS[k].label` — used elsewhere).
       Round 9 (2026-06-09): the brief's application-name list for
       Create/Edit Role uses "IAM" (matches Figma node 924:14138).
       Override here so the Functions matrix section header reads
       "IAM" without disturbing the dropdown option list, the Roles
       list summary, or any other surface that consumes
       `APP_PERMISSIONS.identity_access_management.label`. */
    var CR_APP_DISPLAY_LABEL = {
      identity_access_management: "IAM"
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

    function buildAppSectionHtml(appKey) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return "";
      var cols = crAppActionColumns(appKey);
      var resources = crResourcesForApp(appKey);
      var displayLabel = CR_APP_DISPLAY_LABEL[appKey] || app.label;
      var html = '<div class="cr-app-section cr-app-section--matrix" data-app-key="' + esc(appKey) + '">';
      /* App header with Remove (kept from the prior layout — Figma
         doesn't show it on this state but the existing flow needs
         a way to remove an added app, and the Roles list / Edit Role
         flows depend on this affordance).

         The `.cr-app-head-left` is the accordion toggle target —
         click or Enter/Space toggles `.cr-app-section--collapsed`
         on the section, which rotates the chevron and hides the
         matrix wrapper. Remove sits outside the toggle so the
         delete button never accidentally collapses the section. */
      html += '<div class="cr-app-section-head">';
      var matrixWrapperId = "crMatrixWrap_" + appKey;
      html += '<div class="cr-app-head-left" role="button" tabindex="0" aria-expanded="true" aria-controls="' + esc(matrixWrapperId) + '" data-cr-app-toggle="' + esc(appKey) + '">';
      /* Inline "v" chevron matching Figma 924:14138 (left of the app
         name). Rotates -90deg when the section is collapsed. */
      html += '<svg class="cr-app-head-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
      html += '<span class="cr-app-title">' + esc(displayLabel) + '</span>';
      html += '</div>';
      /* Round 9 (2026-06-09): rename "Remove" → "Remove application"
         to disambiguate from per-row remove affordances. The button
         lives in `.cr-app-section-head` which uses
         `justify-content: space-between`, and `.cr-app-section--matrix`
         now stretches to `width: 100%` of the indented content
         column, so this button aligns to the same right edge for
         every application section regardless of matrix table width. */
      html += '<button type="button" class="cr-app-remove" data-remove-app="' + esc(appKey) + '" aria-label="Remove ' + esc(displayLabel) + ' application">';
      html += CR_EDL_TRASH_SVG;
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
      html += '<table class="cr-matrix" role="table" aria-label="' + esc(displayLabel) + ' functions matrix">';
      html += '<thead><tr>';
      html += '<th class="cr-matrix-th cr-matrix-th-fn"><span class="cr-matrix-th-inner"><span>Functions</span></span></th>';
      for (var c = 0; c < cols.length; c++) {
        var colLabel0 = cols[c];
        var headerInputId = "perm_head_" + appKey + "_" + colLabel0.toLowerCase();
        var headerTitle = "Select all " + colLabel0 + " actions in " + displayLabel;
        html += '<th class="cr-matrix-th cr-matrix-th-act">' +
          '<label class="cr-matrix-th-inner cr-matrix-col-head">' +
            '<input type="checkbox" class="cr-perm-check cr-matrix-col-toggle" id="' + headerInputId + '"' +
              ' data-app-key="' + esc(appKey) + '"' +
              ' data-column="' + esc(colLabel0) + '"' +
              ' title="' + esc(headerTitle) + '"' +
              ' aria-label="' + esc(headerTitle) + '">' +
            '<span class="cr-matrix-col-head-label">' + esc(colLabel0) + '</span>' +
          '</label>' +
        '</th>';
      }
      html += '</tr></thead>';
      html += '<tbody>';
      for (var k = 0; k < resources.length; k++) {
        var resource = resources[k];
        html += '<tr class="cr-matrix-row">';
        html += '<td class="cr-matrix-fn">' + esc(resource.title) + '</td>';
        /* Every cell within an app's column set renders as a real
           empty checkbox. Matches Figma 924:14107 (Media Plans
           Create/Update/Delete and similar cells are shown as
           unchecked checkboxes, not as a disabled tri-state). */
        for (var cc = 0; cc < cols.length; cc++) {
          var colLabel = cols[cc];
          var pmAction = CR_COLUMN_TO_PM_ACTION[colLabel];
          var slug = resource.title.toLowerCase().replace(/[^a-z0-9]+/g, "_") + "_" + pmAction.toLowerCase().replace(/[^a-z0-9]+/g, "_");
          var inputId = "perm_" + appKey + "_" + slug;
          html += '<td class="cr-matrix-cell">' +
            '<label class="cr-matrix-check-wrap">' +
              '<input type="checkbox" class="cr-perm-check cr-matrix-check" id="' + inputId + '"' +
                ' value="' + esc(resource.title + "::" + pmAction) + '"' +
                ' data-resource="' + esc(resource.title) + '"' +
                ' data-action="' + esc(pmAction) + '"' +
                ' data-column="' + esc(colLabel) + '">' +
              '<span class="cr-matrix-check-visual" aria-hidden="true"></span>' +
            '</label>' +
          '</td>';
        }
        html += '</tr>';
      }
      html += '</tbody></table>';
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
    }
    function crRemoveApplication(appKey) {
      var idx = crAddedApps.indexOf(appKey);
      if (idx === -1) return;
      crAddedApps.splice(idx, 1);
      var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
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
    }

    /* ─── Remove application (Edit Role only) — EDL confirm modal + toast ─── */
    var crAppRemoveBackdrop = document.getElementById("crAppRemoveBackdrop");
    var crAppRemoveCancel = document.getElementById("crAppRemoveCancel");
    var crAppRemoveConfirm = document.getElementById("crAppRemoveConfirm");
    var crAppRemovePendingKey = null;
    var crAppRemoveLastFocus = null;

    function openRemoveAppConfirm(appKey) {
      if (!appKey || !crAppRemoveBackdrop) return;
      crAppRemovePendingKey = appKey;
      crAppRemoveLastFocus = document.activeElement;
      crAppRemoveBackdrop.removeAttribute("hidden");
      setTimeout(function () {
        if (crAppRemoveCancel) crAppRemoveCancel.focus();
      }, 0);
    }

    function closeRemoveAppConfirm() {
      if (!crAppRemoveBackdrop) return;
      crAppRemoveBackdrop.setAttribute("hidden", "");
      crAppRemovePendingKey = null;
      if (crAppRemoveLastFocus && typeof crAppRemoveLastFocus.focus === "function") {
        crAppRemoveLastFocus.focus();
      }
      crAppRemoveLastFocus = null;
    }

    function performRemoveAppAfterConfirm() {
      if (!crAppRemovePendingKey) {
        closeRemoveAppConfirm();
        return;
      }
      var appKey = crAppRemovePendingKey;
      var app = APP_PERMISSIONS[appKey];
      var appLabel = app ? app.label : appKey;
      closeRemoveAppConfirm();
      crRemoveApplication(appKey);
      showEdlToast({
        type: "success",
        title: "Application removed",
        bodyHtml: "Permissions for <strong>" + esc(appLabel) + "</strong> have been removed from the role."
      });
    }

    if (crAppRemoveCancel) crAppRemoveCancel.addEventListener("click", closeRemoveAppConfirm);
    if (crAppRemoveConfirm) crAppRemoveConfirm.addEventListener("click", performRemoveAppAfterConfirm);
    if (crAppRemoveBackdrop) {
      crAppRemoveBackdrop.addEventListener("click", function (e) {
        if (e.target === crAppRemoveBackdrop) closeRemoveAppConfirm();
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
      /* Header tooltip + downstream state. The header is its own
         element; refreshing the column also rewrites its title. */
      refreshColumnToggleState(section, colLabel);
    }
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
      updateCrSummaries();
    });

    var crDescriptionEl = document.getElementById("crDescription");
    if (crDescriptionEl) {
      crDescriptionEl.addEventListener("input", function () {
        validateCreateRole();
        updateCrSummaries();
      });
    }

    /* ─── Collapsible sections (Basic Information, Functions) ─── */
    function crToggleSection(header) {
      var card = header.closest(".cr-card");
      if (!card) return;
      var willCollapse = !card.classList.contains("collapsed");
      card.classList.toggle("collapsed", willCollapse);
      header.setAttribute("aria-expanded", willCollapse ? "false" : "true");
      if (willCollapse) updateCrSummaries();
    }
    var crToggleHeaders = crPage.querySelectorAll(".cr-section-header[data-cr-toggle]");
    for (var ch = 0; ch < crToggleHeaders.length; ch++) {
      (function (header) {
        header.addEventListener("click", function () { crToggleSection(header); });
        header.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            crToggleSection(header);
          }
        });
      })(crToggleHeaders[ch]);
    }
    crPage.addEventListener("change", function (e) {
      if (e.target && e.target.name === "dataAccess") {
        updateCrSummaries();
        validateCreateRole();
      }
    });

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

    function crCollectStatus() {
      var sens = crPage.querySelector('input[name="dataAccess"][value="sensitive"]');
      var reg  = crPage.querySelector('input[name="dataAccess"][value="regional"]');
      if (sens && sens.checked && reg && reg.checked) return "Standard";
      if (sens && sens.checked) return "Sensitive";
      if (reg  && reg.checked)  return "Regional";
      return "Standard";
    }

    function crNewRoleId() {
      return "r_local_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
    }

    function handleCrSave() {
      if (crSaveBtn.disabled) return;
      if (!isCreateRoleValid()) return;

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

    if (crSaveBtn) crSaveBtn.addEventListener("click", handleCrSave);

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
    var createRoleBtns = document.querySelectorAll("#rolesPanel .btn-ghost");
    for (var cri = 0; cri < createRoleBtns.length; cri++) {
      if (createRoleBtns[cri].textContent.trim().indexOf("Create Role") !== -1) {
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
