var DATA = [
  /* ── Page 1 ── */
  { id: "u001", avatar: "../avatars/photos/m01.png", name: "Homer Simpson",                email: "Homer.Simpson@disney.com",                roles: ["Core Planning Admin", "Planning Manager", "Planner"],              status: "Active",   team: "National Ad Sales",          title: "VP, Ad Sales Operations",              region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"   },
  { id: "u002", avatar: "../avatars/photos/f01.png", name: "Marge Simpson",                email: "Marge.Simpson@disney.com",                roles: ["Planner", "Planning Specialist"],                                   status: "Active",   team: "Digital Media Planning",     title: "Director, Media Strategy",             region: "NA",    lastLogin: "May 2, 2026, 2:30 PM"   },
  { id: "u003", avatar: "../avatars/photos/m02.png", name: "Bart Simpson",                 email: "Bart.Simpson@disney.com",                 roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Client Partnerships",        title: "Coordinator, Sales Support",           region: "NA",    lastLogin: "May 3, 2026, 9:15 AM"   },
  { id: "u004", avatar: "../avatars/photos/m03.png", name: "Ned Flanders",                 email: "Ned.Flanders@disney.com",                 roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Streaming Revenue",          title: "Manager, Client Partnerships",         region: "EMEA",  lastLogin: "Apr 28, 2026, 11:20 AM"  },
  { id: "u005", avatar: "../avatars/photos/f02.png", name: "Lisa Simpson",                 email: "Lisa.Simpson@disney.com",                 roles: ["Ad Operations Specialist", "Campaign Planner", "Planning Specialist"], status: "Active", team: "Ad Solutions & Innovation",  title: "Sr. Analyst, Audience Insights",       region: "NA",    lastLogin: "May 1, 2026, 4:00 PM"   },
  { id: "u006", avatar: "../avatars/photos/m04.png", name: "Montgomery Burns",             email: "Montgomery.Burns@disney.com",             roles: ["Campaign Planner", "Planning Manager"],                             status: "Inactive", team: "Yield & Inventory",          title: "SVP, Revenue Strategy",                region: "NA",    lastLogin: "Feb 14, 2026, 10:30 AM"  },
  { id: "u007", avatar: "../avatars/photos/m05.png", name: "Milhouse Van Houten",          email: "Milhouse.VanHouten@disney.com",           roles: ["Operations Admin"],                                                 status: "Active",   team: "Programmatic Sales",         title: "Analyst, Campaign Planning",           region: "ANZ",   lastLogin: "Apr 30, 2026, 3:45 PM"   },
  { id: "u008", avatar: "../avatars/photos/f03.png", name: "Maggie Simpson",               email: "Maggie.Simpson@disney.com",               roles: ["Read-Only Viewer", "Planner"],                                      status: "Active",   team: "Revenue Operations",         title: "Associate, Revenue Ops",               region: "NA",    lastLogin: "May 2, 2026, 7:00 PM"   },
  { id: "u009", avatar: "../avatars/photos/m06.png", name: "Waylon Smithers",              email: "Waylon.Smithers@disney.com",              roles: ["Operations Admin", "Read-Only Viewer", "ICM Admin"],                status: "Inactive", team: "Ad Sales Finance",           title: "Lead, Billing Operations",             region: "NA",    lastLogin: "Jan 22, 2026, 9:00 AM"   },
  { id: "u010", avatar: "../avatars/photos/m07.png", name: "Nelson Muntz",                 email: "Nelson.Muntz@disney.com",                 roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Addressable Ad Ops",         title: "Associate, Finance & Planning",        region: "LATAM", lastLogin: "Apr 25, 2026, 5:30 PM"   },

  /* ── Page 2 ── */
  { id: "u011", avatar: "../avatars/photos/m08.png", name: "Ralph Wiggum",                 email: "Ralph.Wiggum@disney.com",                 roles: ["Ad Operations Specialist", "Campaign Planner"],                     status: "Active",   team: "Addressable Ad Ops",         title: "Associate, Ad Operations",             region: "NA",    lastLogin: "Apr 29, 2026, 1:15 PM"   },
  { id: "u012", avatar: "../avatars/photos/m09.png", name: "Principal Skinner",            email: "Principal.Skinner@disney.com",            roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Agency Sales",               title: "Sr. Manager, Agency Partnerships",     region: "NA",    lastLogin: "May 1, 2026, 10:00 AM"   },
  { id: "u013", avatar: "../avatars/photos/m10.png", name: "Krusty the Clown",             email: "Krusty.TheClown@disney.com",              roles: ["Campaign Planner"],                                                 status: "Active",   team: "National Ad Sales",          title: "Director, Brand Partnerships",         region: "NA",    lastLogin: "Apr 22, 2026, 2:00 PM"   },
  { id: "u014", avatar: "../avatars/photos/f04.png", name: "Selma Bouvier",                email: "Selma.Bouvier@disney.com",                roles: ["Operations Admin", "Read-Only Viewer", "Planning Specialist"],      status: "Active",   team: "Ad Sales Finance",           title: "Manager, Billing Operations",          region: "EMEA",  lastLogin: "Apr 18, 2026, 9:30 AM"   },
  { id: "u015", avatar: "../avatars/photos/f05.png", name: "Patty Bouvier",                email: "Patty.Bouvier@disney.com",                roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Revenue Operations",         title: "Sr. Analyst, Revenue Reporting",       region: "EMEA",  lastLogin: "May 2, 2026, 11:45 AM"   },
  { id: "u016", avatar: "../avatars/photos/m11.png", name: "Lenny Leonard",                email: "Lenny.Leonard@disney.com",                roles: ["Planner", "Planning Specialist", "Planning Manager"],               status: "Active",   team: "Digital Media Planning",     title: "Sr. Planner, Media Investment",        region: "NA",    lastLogin: "Apr 30, 2026, 4:15 PM"   },
  { id: "u017", avatar: "../avatars/photos/m12.png", name: "Carl Carlson",                 email: "Carl.Carlson@disney.com",                 roles: ["Operations Admin", "Planning Specialist"],                          status: "Active",   team: "Yield & Inventory",          title: "Manager, Yield Optimization",          region: "NA",    lastLogin: "Apr 27, 2026, 3:00 PM"   },
  { id: "u018", avatar: "../avatars/photos/m13.png", name: "Moe Szyslak",                  email: "Moe.Szyslak@disney.com",                  roles: ["Read-Only Viewer", "Planner"],                                      status: "Inactive", team: "Client Partnerships",        title: "Coordinator, Client Services",         region: "LATAM", lastLogin: "Mar 10, 2026, 6:00 PM"   },
  { id: "u019", avatar: "../avatars/photos/m14.png", name: "Apu Nahasapeemapetilon",       email: "Apu.Nahasapeemapetilon@disney.com",       roles: ["Planning Manager", "Campaign Planner", "Planning Specialist", "Planner"], status: "Active", team: "Global Partnerships",    title: "Sr. Manager, International Strategy",  region: "ANZ",   lastLogin: "May 3, 2026, 7:30 AM"   },
  { id: "u020", avatar: "../avatars/photos/m15.png", name: "Comic Book Guy",               email: "Comic.BookGuy@disney.com",                roles: ["Read-Only Viewer", "Operations Admin"],                             status: "Active",   team: "Ad Sales Finance",           title: "Analyst, Financial Planning",          region: "NA",    lastLogin: "Apr 14, 2026, 12:30 PM"  },

  /* ── Page 3 ── */
  { id: "u021", avatar: "../avatars/photos/m16.png", name: "Chief Wiggum",                 email: "Chief.Wiggum@disney.com",                 roles: ["Planner"],                                                          status: "Active",   team: "National Ad Sales",          title: "VP, Client Solutions",                 region: "NA",    lastLogin: "Apr 24, 2026, 10:15 AM"  },
  { id: "u022", avatar: "../avatars/photos/f06.png", name: "Edna Krabappel",               email: "Edna.Krabappel@disney.com",               roles: ["Planner", "Campaign Planner", "Ad Operations Specialist"],         status: "Active",   team: "Digital Media Planning",     title: "Director, Planning & Activation",      region: "NA",    lastLogin: "May 1, 2026, 3:30 PM"   },
  { id: "u023", avatar: "../avatars/photos/m17.png", name: "Groundskeeper Willie",         email: "Groundskeeper.Willie@disney.com",         roles: ["Ad Operations Specialist", "Planning Specialist"],                  status: "Active",   team: "Ad Solutions & Innovation",  title: "Lead, Campaign Trafficking",           region: "EMEA",  lastLogin: "Apr 20, 2026, 8:00 AM"   },
  { id: "u024", avatar: "../avatars/photos/m18.png", name: "Fat Tony",                     email: "Fat.Tony@disney.com",                     roles: ["Planning Manager", "Planning Specialist", "Campaign Planner"],      status: "Active",   team: "Streaming Revenue",          title: "SVP, Distribution Strategy",           region: "NA",    lastLogin: "Apr 16, 2026, 1:00 PM"   },
  { id: "u025", avatar: "../avatars/photos/m19.png", name: "Dr. Hibbert",                  email: "Julius.Hibbert@disney.com",               roles: ["Read-Only Viewer", "Operations Admin", "Planning Manager"],         status: "Active",   team: "Revenue Operations",         title: "Manager, Revenue Analytics",           region: "NA",    lastLogin: "Apr 29, 2026, 9:45 AM"   },
  { id: "u026", avatar: "../avatars/photos/m20.png", name: "Professor Frink",              email: "Professor.Frink@disney.com",              roles: ["Operations Admin", "Planning Specialist", "Ad Operations Specialist"], status: "Active", team: "Programmatic Sales",         title: "Sr. Analyst, Programmatic Yield",      region: "NA",    lastLogin: "Apr 12, 2026, 2:15 PM"   },
  { id: "u027", avatar: "../avatars/photos/m21.png", name: "Barney Gumble",                email: "Barney.Gumble@disney.com",                roles: ["Campaign Planner", "Ad Operations Specialist"],                     status: "Inactive", team: "Addressable Ad Ops",         title: "Coordinator, Campaign Delivery",       region: "NA",    lastLogin: "Feb 28, 2026, 11:00 AM"  },
  { id: "u028", avatar: "../avatars/photos/m22.png", name: "Sideshow Bob",                 email: "Sideshow.Bob@disney.com",                 roles: ["Read-Only Viewer", "Campaign Planner", "Planner"],                  status: "Active",   team: "Agency Sales",               title: "Director, Agency Development",         region: "EMEA",  lastLogin: "Apr 8, 2026, 4:45 PM"    },
  { id: "u029", avatar: "../avatars/photos/m23.png", name: "Kent Brockman",                email: "Kent.Brockman@disney.com",                roles: ["Core Planning Admin", "Planning Manager"],                          status: "Active",   team: "Global Partnerships",        title: "VP, Global Media Sales",               region: "NA",    lastLogin: "May 2, 2026, 6:30 PM"   },
  { id: "u030", avatar: "../avatars/photos/m24.png", name: "Otto Mann",                    email: "Otto.Mann@disney.com",                    roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Ad Sales Finance",           title: "Associate, Accounts Receivable",       region: "LATAM", lastLogin: "Apr 5, 2026, 10:00 AM"   },

  /* ── Page 4 ── */
  { id: "u031", avatar: "../avatars/photos/m25.png", name: "Mayor Quimby",                 email: "Mayor.Quimby@disney.com",                 roles: ["Planning Manager", "Planning Specialist"],                          status: "Active",   team: "National Ad Sales",          title: "SVP, Sales & Partnerships",            region: "NA",    lastLogin: "Apr 3, 2026, 11:30 AM"   },
  { id: "u032", avatar: "../avatars/photos/m26.png", name: "Hans Moleman",                 email: "Hans.Moleman@disney.com",                 roles: ["Operations Admin"],                                                 status: "Active",   team: "Ad Sales Finance",           title: "Associate, Billing Support",           region: "NA",    lastLogin: "Apr 18, 2026, 8:15 AM"   },
  { id: "u033", avatar: "../avatars/photos/m27.png", name: "Gil Gunderson",                email: "Gil.Gunderson@disney.com",                roles: ["Read-Only Viewer", "Planner", "Campaign Planner"],                  status: "Inactive", team: "Client Partnerships",        title: "Coordinator, New Business",            region: "NA",    lastLogin: "Jan 15, 2026, 3:00 PM"   },
  { id: "u034", avatar: "../avatars/photos/m28.png", name: "Rainier Wolfcastle",           email: "Rainier.Wolfcastle@disney.com",           roles: ["Campaign Planner", "Ad Operations Specialist", "Planning Specialist"], status: "Active", team: "Streaming Revenue",          title: "Director, Content Partnerships",       region: "EMEA",  lastLogin: "Apr 14, 2026, 9:00 AM"   },
  { id: "u035", avatar: "../avatars/photos/m29.png", name: "Troy McClure",                 email: "Troy.McClure@disney.com",                 roles: ["Planner", "Planning Specialist"],                                   status: "Active",   team: "Digital Media Planning",     title: "Manager, Cross-Platform Planning",     region: "NA",    lastLogin: "Apr 10, 2026, 2:45 PM"   },
  { id: "u036", avatar: "../avatars/photos/m30.png", name: "Disco Stu",                    email: "Disco.Stu@disney.com",                    roles: ["Ad Operations Specialist"],                                         status: "Active",   team: "Ad Solutions & Innovation",  title: "Analyst, Creative Ad Solutions",       region: "LATAM", lastLogin: "Mar 28, 2026, 12:00 PM"  },
  { id: "u037", avatar: "../avatars/photos/m31.png", name: "Dr. Nick Riviera",             email: "Nick.Riviera@disney.com",                 roles: ["Read-Only Viewer", "Operations Admin", "Planning Specialist"],      status: "Active",   team: "Revenue Operations",         title: "Analyst, Revenue Reconciliation",      region: "NA",    lastLogin: "Apr 22, 2026, 11:15 AM"  },
  { id: "u038", avatar: "../avatars/photos/m32.png", name: "Kirk Van Houten",              email: "Kirk.VanHouten@disney.com",               roles: ["Operations Admin", "Planning Specialist"],                          status: "Inactive", team: "Yield & Inventory",          title: "Associate, Inventory Management",      region: "NA",    lastLogin: "Mar 5, 2026, 4:00 PM"    },
  { id: "u039", avatar: "../avatars/photos/f07.png", name: "Luann Van Houten",             email: "Luann.VanHouten@disney.com",              roles: ["Planner", "Campaign Planner"],                                      status: "Active",   team: "Agency Sales",               title: "Manager, Client Relations",            region: "ANZ",   lastLogin: "Apr 25, 2026, 8:30 AM"   },
  { id: "u040", avatar: "../avatars/photos/f08.png", name: "Agnes Skinner",                email: "Agnes.Skinner@disney.com",                roles: ["Read-Only Viewer", "TOM Admin"],                                    status: "Active",   team: "Addressable Ad Ops",         title: "Sr. Analyst, Financial Controls",      region: "NA",    lastLogin: "Apr 17, 2026, 1:30 PM"   },

  /* ── Page 5 ── */
  { id: "u041", avatar: "../avatars/photos/m43.png", name: "Snake Jailbird",               email: "Snake.Jailbird@disney.com",               roles: ["Read-Only Viewer", "Planner", "Campaign Planner"],                  status: "Active",   team: "Programmatic Sales",         title: "Coordinator, Programmatic Deals",      region: "NA",    lastLogin: "Apr 2, 2026, 9:15 AM"    },
  { id: "u042", avatar: "../avatars/photos/m44.png", name: "Jimbo Jones",                  email: "Jimbo.Jones@disney.com",                  roles: ["Ad Operations Specialist", "Campaign Planner"],                     status: "Active",   team: "Addressable Ad Ops",         title: "Analyst, Ad Targeting",                region: "NA",    lastLogin: "Apr 30, 2026, 2:00 PM"   },
  { id: "u043", avatar: "../avatars/photos/m45.png", name: "Dolph Starbeam",               email: "Dolph.Starbeam@disney.com",               roles: ["Campaign Planner", "Planning Specialist", "Ad Operations Specialist"], status: "Inactive", team: "Ad Solutions & Innovation", title: "Associate, Campaign Strategy",         region: "EMEA",  lastLogin: "Mar 20, 2026, 10:45 AM"  },
  { id: "u044", avatar: "../avatars/photos/f09.png", name: "Sherri Mackleberry",           email: "Sherri.Mackleberry@disney.com",           roles: ["Planner"],                                                          status: "Active",   team: "Digital Media Planning",     title: "Sr. Planner, Audience Strategy",       region: "NA",    lastLogin: "May 1, 2026, 8:45 AM"    },
  { id: "u045", avatar: "../avatars/photos/f10.png", name: "Terri Mackleberry",            email: "Terri.Mackleberry@disney.com",            roles: ["Planner", "Planning Specialist", "Planning Manager"],               status: "Active",   team: "Digital Media Planning",     title: "Sr. Planner, Integrated Media",        region: "NA",    lastLogin: "Apr 28, 2026, 5:00 PM"   },
  { id: "u046", avatar: "../avatars/photos/m33.png", name: "Martin Prince",                email: "Martin.Prince@disney.com",                roles: ["Read-Only Viewer", "Planning Manager"],                             status: "Active",   team: "Revenue Operations",         title: "Sr. Analyst, Data Governance",         region: "NA",    lastLogin: "Apr 24, 2026, 3:15 PM"   },
  { id: "u047", avatar: "../avatars/photos/m34.png", name: "Timothy Lovejoy",              email: "Timothy.Lovejoy@disney.com",              roles: ["Planning Manager", "Campaign Planner", "Planning Specialist", "Core Planning Admin"], status: "Active", team: "Global Partnerships", title: "Director, Strategic Accounts",        region: "ANZ",   lastLogin: "Apr 19, 2026, 10:30 AM"  },
  { id: "u048", avatar: "../avatars/photos/m35.png", name: "Cletus Spuckler",              email: "Cletus.Spuckler@disney.com",              roles: ["Operations Admin", "Read-Only Viewer"],                             status: "Active",   team: "Ad Sales Finance",           title: "Coordinator, Invoice Processing",      region: "NA",    lastLogin: "Apr 13, 2026, 12:00 PM"  },
  { id: "u049", avatar: "../avatars/photos/f11.png", name: "Cookie Kwan",                  email: "Cookie.Kwan@disney.com",                  roles: ["Planner"],                                                          status: "Active",   team: "National Ad Sales",          title: "Sr. Manager, Regional Sales",          region: "ANZ",   lastLogin: "May 2, 2026, 9:00 AM"    },
  { id: "u050", avatar: "../avatars/photos/f12.png", name: "Lindsey Naegle",               email: "Lindsey.Naegle@disney.com",               roles: ["Operations Admin", "Planning Specialist", "TOM Admin"],             status: "Active",   team: "Yield & Inventory",          title: "Director, Yield Strategy",             region: "NA",    lastLogin: "Apr 26, 2026, 4:30 PM"   },

  /* ── Page 6 ── */
  { id: "u051", avatar: "../avatars/photos/m36.png", name: "Lionel Hutz",                  email: "Lionel.Hutz@disney.com",                  roles: ["Read-Only Viewer"],                                                 status: "Active",   team: "Client Partnerships",        title: "Manager, Business Development",        region: "NA",    lastLogin: "Apr 11, 2026, 2:45 PM"   },
  { id: "u052", avatar: "../avatars/photos/f13.png", name: "Helen Lovejoy",                email: "Helen.Lovejoy@disney.com",                roles: ["Planner", "Campaign Planner", "Planning Specialist"],               status: "Active",   team: "Agency Sales",               title: "Sr. Planner, Agency Investment",        region: "EMEA",  lastLogin: "Apr 22, 2026, 10:00 AM"  },
  { id: "u053", avatar: "../avatars/photos/m37.png", name: "Artie Ziff",                   email: "Artie.Ziff@disney.com",                   roles: ["Planning Manager", "Core Planning Admin"],                          status: "Active",   team: "Streaming Revenue",          title: "VP, Digital Revenue",                  region: "NA",    lastLogin: "May 3, 2026, 11:00 AM"   },
  { id: "u054", avatar: "../avatars/photos/f14.png", name: "Ruth Powers",                  email: "Ruth.Powers@disney.com",                  roles: ["Read-Only Viewer", "Operations Admin"],                             status: "Active",   team: "Revenue Operations",         title: "Manager, Revenue Systems",             region: "NA",    lastLogin: "Apr 27, 2026, 3:30 PM"   },
  { id: "u055", avatar: "../avatars/photos/m38.png", name: "Herman Hermann",               email: "Herman.Hermann@disney.com",               roles: ["Read-Only Viewer", "Operations Admin", "Planning Specialist"],      status: "Inactive", team: "Ad Sales Finance",           title: "Analyst, Cost Allocation",             region: "LATAM", lastLogin: "Feb 8, 2026, 9:15 AM"    },
  { id: "u056", avatar: "../avatars/photos/m39.png", name: "Wendell Borton",               email: "Wendell.Borton@disney.com",               roles: ["Ad Operations Specialist", "Planning Specialist"],                  status: "Active",   team: "Ad Solutions & Innovation",  title: "Associate, Creative Operations",       region: "NA",    lastLogin: "Apr 23, 2026, 1:45 PM"   },
  { id: "u057", avatar: "../avatars/photos/m40.png", name: "Lyle Lanley",                  email: "Lyle.Lanley@disney.com",                  roles: ["Campaign Planner", "Planning Manager", "Planner"],                  status: "Active",   team: "Programmatic Sales",         title: "Sr. Manager, Programmatic Sales",      region: "NA",    lastLogin: "May 1, 2026, 7:30 PM"    },
  { id: "u058", avatar: "../avatars/photos/m41.png", name: "Lewis Clark",                  email: "Lewis.Clark@disney.com",                  roles: ["Operations Admin"],                                                 status: "Inactive", team: "Yield & Inventory",          title: "Analyst, Inventory Forecasting",       region: "ANZ",   lastLogin: "Mar 14, 2026, 11:00 AM"  },
  { id: "u059", avatar: "../avatars/photos/m42.png", name: "Kearney Zzyzwicz",             email: "Kearney.Zzyzwicz@disney.com",             roles: ["Planner", "Campaign Planner", "Read-Only Viewer"],                  status: "Active",   team: "Global Partnerships",        title: "Coordinator, Partner Relations",       region: "EMEA",  lastLogin: "Apr 16, 2026, 6:15 PM"   },
  { id: "u060", avatar: "../avatars/photos/f15.png", name: "Manjula Nahasapeemapetilon",   email: "Manjula.Nahasapeemapetilon@disney.com",   roles: ["Operations Admin", "Read-Only Viewer", "Planner"],                  status: "Active",   team: "Addressable Ad Ops",         title: "Lead, Operations Support",             region: "ANZ",   lastLogin: "Apr 29, 2026, 8:00 AM"   }
];

var ORIGINAL_ORDER = DATA.slice();
var TOTAL_ITEMS = 610;

/* ─── User view toggle state ───
   userView: 'internal' (default) | 'external'
   Switching swaps DATA / ORIGINAL_ORDER / TOTAL_ITEMS so that all
   existing filter, sort, and pagination logic works without modification. */
var INTERNAL_ORIGINAL_SNAPSHOT = ORIGINAL_ORDER.slice();
var INTERNAL_TOTAL = TOTAL_ITEMS;

/* External (agency / partner) users — 12 representative records.
   Structure matches internal DATA except: no `avatar` (initials shown),
   no `team` (replaced by `organization` in the Team column). */
var EXTERNAL_DATA_ARRAY = [
  /* ── Page 1 — Omnicom, OMD, PHD, Hearts & Science, GroupM ── */
  { id: "e001", name: "Rachel Morales",       email: "r.morales@omnicommedia.com",   roles: ["Agency Admin"],             status: "Active",   organization: "Omnicom Media Group", title: "VP, Media Partnerships",           region: "NA",    lastLogin: "Apr 30, 2026, 10:15 AM"  },
  { id: "e002", name: "Kevin Zhang",          email: "k.zhang@omnicommedia.com",     roles: ["Campaign Planner"],         status: "Active",   organization: "Omnicom Media Group", title: "Group Director, Media",            region: "NA",    lastLogin: "May 2, 2026, 3:00 PM"    },
  { id: "e003", name: "Danielle Foster",      email: "d.foster@omd.com",             roles: ["Campaign Planner"],         status: "Active",   organization: "OMD",                 title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 28, 2026, 2:30 PM"   },
  { id: "e004", name: "James Okonkwo",        email: "j.okonkwo@omd.com",            roles: ["Planning Manager"],         status: "Active",   organization: "OMD",                 title: "Director, Media Planning",         region: "EMEA",  lastLogin: "May 1, 2026, 9:45 AM"    },
  { id: "e005", name: "Leila Sharma",         email: "l.sharma@omd.com",             roles: ["Read-Only Viewer"],         status: "Active",   organization: "OMD",                 title: "Media Analyst",                    region: "NA",    lastLogin: "Apr 27, 2026, 11:00 AM"  },
  { id: "e006", name: "Thomas Erikson",       email: "t.erikson@phdmedia.com",       roles: ["Campaign Planner"],         status: "Active",   organization: "PHD",                 title: "Media Investment Lead",            region: "EMEA",  lastLogin: "Apr 24, 2026, 4:30 PM"   },
  { id: "e007", name: "Ana Gutierrez",        email: "a.gutierrez@phdmedia.com",     roles: ["Planner"],                  status: "Active",   organization: "PHD",                 title: "Associate Media Director",         region: "LATAM", lastLogin: "May 3, 2026, 8:15 AM"    },
  { id: "e008", name: "Michelle Kim",         email: "m.kim@heartsci.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "Hearts & Science",    title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 1:30 PM"   },
  { id: "e009", name: "Brandon Wu",           email: "b.wu@heartsci.com",            roles: ["Ad Operations Specialist"], status: "Active",   organization: "Hearts & Science",    title: "Programmatic Operations Lead",     region: "NA",    lastLogin: "Apr 25, 2026, 3:45 PM"   },
  { id: "e010", name: "Sophie Laurent",       email: "s.laurent@groupm.com",         roles: ["External Partner Admin"],   status: "Active",   organization: "WPP / GroupM",        title: "Director, Partner Engagement",     region: "EMEA",  lastLogin: "May 2, 2026, 10:00 AM"   },
  /* ── Page 2 — GroupM, Mindshare, Wavemaker, EssenceMediacom, Publicis ── */
  { id: "e011", name: "Patrick O'Brien",      email: "p.obrien@groupm.com",          roles: ["Read-Only Viewer"],         status: "Active",   organization: "WPP / GroupM",        title: "Media Finance Analyst",            region: "NA",    lastLogin: "Apr 22, 2026, 2:15 PM"   },
  { id: "e012", name: "Yuki Tanaka",          email: "y.tanaka@mindshare.com",       roles: ["Campaign Planner"],         status: "Active",   organization: "Mindshare",           title: "Media Planner",                    region: "APAC",  lastLogin: "Apr 30, 2026, 9:00 AM"   },
  { id: "e013", name: "Nadia Hassan",         email: "n.hassan@mindshare.com",       roles: ["Planning Manager"],         status: "Active",   organization: "Mindshare",           title: "Head of Planning",                 region: "EMEA",  lastLogin: "May 1, 2026, 11:30 AM"   },
  { id: "e014", name: "Derek Williams",       email: "d.williams@mindshare.com",     roles: ["Read-Only Viewer"],         status: "Inactive", organization: "Mindshare",           title: "Digital Activation Specialist",    region: "NA",    lastLogin: "Feb 20, 2026, 3:00 PM"   },
  { id: "e015", name: "Camille Rousseau",     email: "c.rousseau@wavemaker.com",     roles: ["Planner"],                  status: "Active",   organization: "Wavemaker",           title: "Content Investment Planner",       region: "EMEA",  lastLogin: "Apr 26, 2026, 1:00 PM"   },
  { id: "e016", name: "Marcus Johnson",       email: "m.johnson@wavemaker.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Wavemaker",           title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 3, 2026, 8:45 AM"    },
  { id: "e017", name: "Pooja Patel",          email: "p.patel@essencemediacom.com",  roles: ["External Partner Admin"],   status: "Active",   organization: "EssenceMediacom",     title: "Partner Solutions Director",       region: "NA",    lastLogin: "Apr 21, 2026, 4:00 PM"   },
  { id: "e018", name: "Ryan Nguyen",          email: "r.nguyen@essencemediacom.com", roles: ["Ad Operations Specialist"], status: "Active",   organization: "EssenceMediacom",     title: "Programmatic Trader",              region: "NA",    lastLogin: "Apr 28, 2026, 10:30 AM"  },
  { id: "e019", name: "Isabella Torres",      email: "i.torres@publicismedia.com",   roles: ["Campaign Planner"],         status: "Active",   organization: "Publicis Media",      title: "Sr. Campaign Planner",             region: "LATAM", lastLogin: "Apr 18, 2026, 2:00 PM"   },
  { id: "e020", name: "Omar Shaikh",          email: "o.shaikh@publicismedia.com",   roles: ["Planning Manager"],         status: "Active",   organization: "Publicis Media",      title: "VP, Media Planning",               region: "NA",    lastLogin: "May 2, 2026, 9:15 AM"    },
  /* ── Page 3 — Starcom, Zenith, Spark Foundry, IPG Mediabrands, UM ── */
  { id: "e021", name: "Caroline Berg",        email: "c.berg@starcom.com",           roles: ["Planner"],                  status: "Active",   organization: "Starcom",             title: "Associate Media Director",         region: "EMEA",  lastLogin: "Apr 16, 2026, 11:45 AM"  },
  { id: "e022", name: "Andre Dupont",         email: "a.dupont@starcom.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Starcom",             title: "Media Investment Director",        region: "EMEA",  lastLogin: "Apr 29, 2026, 3:30 PM"   },
  { id: "e023", name: "Hiroshi Nakamura",     email: "h.nakamura@zenith.com",        roles: ["Read-Only Viewer"],         status: "Active",   organization: "Zenith",              title: "Digital Planner",                  region: "APAC",  lastLogin: "Apr 14, 2026, 10:00 AM"  },
  { id: "e024", name: "Elena Petrov",         email: "e.petrov@zenith.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "Zenith",              title: "Sr. Programmatic Planner",         region: "EMEA",  lastLogin: "May 1, 2026, 8:00 AM"    },
  { id: "e025", name: "Jasmine Reed",         email: "j.reed@sparkfoundry.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Spark Foundry",       title: "Media Campaign Manager",           region: "NA",    lastLogin: "Apr 24, 2026, 2:45 PM"   },
  { id: "e026", name: "Trevor Blackwood",     email: "t.blackwood@sparkfoundry.com", roles: ["Planner"],                  status: "Inactive", organization: "Spark Foundry",       title: "Media Planner",                    region: "NA",    lastLogin: "Jan 30, 2026, 11:00 AM"  },
  { id: "e027", name: "Amara Diallo",         email: "a.diallo@ipgmediabrands.com",  roles: ["External Partner Admin"],   status: "Active",   organization: "IPG Mediabrands",     title: "Partner Activation Lead",          region: "NA",    lastLogin: "Apr 20, 2026, 4:15 PM"   },
  { id: "e028", name: "Steven Park",          email: "s.park@ipgmediabrands.com",    roles: ["Read-Only Viewer"],         status: "Active",   organization: "IPG Mediabrands",     title: "Investment Analyst",               region: "NA",    lastLogin: "May 2, 2026, 1:30 PM"    },
  { id: "e029", name: "Fatima Al-Rashid",     email: "f.alrashid@umww.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "UM",                  title: "Global Media Planner",             region: "EMEA",  lastLogin: "Apr 17, 2026, 9:30 AM"   },
  { id: "e030", name: "Lucas Martins",        email: "l.martins@umww.com",           roles: ["Planner"],                  status: "Active",   organization: "UM",                  title: "Associate Media Planner",          region: "LATAM", lastLogin: "Apr 27, 2026, 2:00 PM"   },
  /* ── Page 4 — Initiative, Dentsu, Carat, iProspect, Havas ── */
  { id: "e031", name: "Diana Hoffman",        email: "d.hoffman@initiative.com",     roles: ["Planning Manager"],         status: "Active",   organization: "Initiative",          title: "Director, Strategic Planning",     region: "NA",    lastLogin: "May 3, 2026, 10:00 AM"   },
  { id: "e032", name: "Kwame Asante",         email: "k.asante@initiative.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Initiative",          title: "Sr. Media Planner",                region: "NA",    lastLogin: "Apr 22, 2026, 3:15 PM"   },
  { id: "e033", name: "Mei-Ling Chen",        email: "m.chen@dentsu.com",            roles: ["Agency Admin"],             status: "Active",   organization: "Dentsu",              title: "Managing Director",                region: "APAC",  lastLogin: "Apr 15, 2026, 9:45 AM"   },
  { id: "e034", name: "Roberto Russo",        email: "r.russo@dentsu.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "Dentsu",              title: "Media Activation Manager",         region: "EMEA",  lastLogin: "Apr 30, 2026, 11:30 AM"  },
  { id: "e035", name: "Zoe Mitchell",         email: "z.mitchell@carat.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "Carat",               title: "Digital Campaign Planner",         region: "NA",    lastLogin: "Apr 28, 2026, 2:00 PM"   },
  { id: "e036", name: "Aleksei Volkov",       email: "a.volkov@carat.com",           roles: ["Planner"],                  status: "Active",   organization: "Carat",               title: "Media Planner",                    region: "EMEA",  lastLogin: "May 1, 2026, 10:15 AM"   },
  { id: "e037", name: "Tanya Iyer",           email: "t.iyer@iprospect.com",         roles: ["Ad Operations Specialist"], status: "Active",   organization: "iProspect",           title: "Biddable Media Specialist",        region: "NA",    lastLogin: "Apr 19, 2026, 4:30 PM"   },
  { id: "e038", name: "Christopher Lam",      email: "c.lam@iprospect.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "iProspect",           title: "Performance Media Manager",        region: "APAC",  lastLogin: "Apr 25, 2026, 8:45 AM"   },
  { id: "e039", name: "Samira Khalil",        email: "s.khalil@havasmedia.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Havas Media",         title: "Media Campaign Lead",              region: "EMEA",  lastLogin: "May 2, 2026, 3:45 PM"    },
  { id: "e040", name: "Ben Nakajima",         email: "b.nakajima@havasmedia.com",    roles: ["Read-Only Viewer"],         status: "Active",   organization: "Havas Media",         title: "Media Analytics Lead",             region: "APAC",  lastLogin: "Apr 13, 2026, 12:00 PM"  },
  /* ── Page 5 — Horizon, Stagwell, Assembly, Amazon Ads, Walmart Connect, Coca-Cola ── */
  { id: "e041", name: "Veronica Cruz",        email: "v.cruz@horizonmedia.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Horizon Media",       title: "Sr. Campaign Manager",             region: "NA",    lastLogin: "Apr 29, 2026, 10:30 AM"  },
  { id: "e042", name: "Daniel Schwartz",      email: "d.schwartz@horizonmedia.com",  roles: ["Planning Manager"],         status: "Active",   organization: "Horizon Media",       title: "VP, Investment",                   region: "NA",    lastLogin: "May 3, 2026, 9:00 AM"    },
  { id: "e043", name: "Naomi Clarke",         email: "n.clarke@stagwellglobal.com",  roles: ["External Partner Admin"],   status: "Active",   organization: "Stagwell",            title: "Partner Development Director",     region: "NA",    lastLogin: "Apr 23, 2026, 1:15 PM"   },
  { id: "e044", name: "Felix Andersson",      email: "f.andersson@stagwellglobal.com", roles: ["Campaign Planner"],       status: "Active",   organization: "Stagwell",            title: "Media Strategy Manager",           region: "EMEA",  lastLogin: "Apr 26, 2026, 4:00 PM"   },
  { id: "e045", name: "Jade Thompson",        email: "j.thompson@assemblyglobal.com", roles: ["Campaign Planner"],        status: "Active",   organization: "Assembly",            title: "Sr. Media Planner",                region: "NA",    lastLogin: "May 1, 2026, 2:30 PM"    },
  { id: "e046", name: "Ravi Mehta",           email: "r.mehta@assemblyg.com",        roles: ["Ad Operations Specialist"], status: "Active",   organization: "Assembly",            title: "Programmatic Lead",                region: "NA",    lastLogin: "Apr 21, 2026, 11:00 AM"  },
  { id: "e047", name: "Christine Wu",         email: "c.wu@amazon.com",              roles: ["External Partner Admin"],   status: "Active",   organization: "Amazon Ads",          title: "Partner Account Manager",          region: "NA",    lastLogin: "Apr 28, 2026, 9:30 AM"   },
  { id: "e048", name: "Michael Torres",       email: "m.torres@amazon.com",          roles: ["Campaign Planner"],         status: "Active",   organization: "Amazon Ads",          title: "Advertising Campaign Manager",     region: "NA",    lastLogin: "May 2, 2026, 4:15 PM"    },
  { id: "e049", name: "Ashley Brennan",       email: "a.brennan@walmartconnect.com", roles: ["Read-Only Viewer"],         status: "Active",   organization: "Walmart Connect",     title: "Retail Media Planner",             region: "NA",    lastLogin: "Apr 24, 2026, 10:45 AM"  },
  { id: "e050", name: "Sophia Adebayo",       email: "s.adebayo@coca-cola.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Coca-Cola",           title: "Global Media Manager",             region: "NA",    lastLogin: "Apr 30, 2026, 3:00 PM"   },
  /* ── Page 6 — Coca-Cola, PepsiCo, P&G, Nike, Toyota, Verizon, T-Mobile, Samsung, Apple ── */
  { id: "e051", name: "Gregory Faulkner",     email: "g.faulkner@coca-cola.com",     roles: ["Read-Only Viewer"],         status: "Active",   organization: "Coca-Cola",           title: "Media Analytics Director",         region: "NA",    lastLogin: "Apr 17, 2026, 2:15 PM"   },
  { id: "e052", name: "Natalia Romero",       email: "n.romero@pepsico.com",         roles: ["Campaign Planner"],         status: "Active",   organization: "PepsiCo",             title: "Sr. Media Manager",                region: "NA",    lastLogin: "May 3, 2026, 11:30 AM"   },
  { id: "e053", name: "William Chen",         email: "w.chen@pg.com",                roles: ["Planning Manager"],         status: "Active",   organization: "Procter & Gamble",    title: "Media Investment Lead",            region: "NA",    lastLogin: "Apr 25, 2026, 9:00 AM"   },
  { id: "e054", name: "Amelia Grant",         email: "a.grant@pg.com",               roles: ["Campaign Planner"],         status: "Active",   organization: "Procter & Gamble",    title: "Sr. Brand Media Planner",          region: "NA",    lastLogin: "Apr 29, 2026, 1:45 PM"   },
  { id: "e055", name: "Jordan Rivera",        email: "j.rivera@nike.com",            roles: ["Campaign Planner"],         status: "Active",   organization: "Nike",                title: "Global Sports Media Manager",      region: "NA",    lastLogin: "Apr 22, 2026, 4:00 PM"   },
  { id: "e056", name: "Takeshi Yamamoto",     email: "t.yamamoto@toyota.com",        roles: ["Read-Only Viewer"],         status: "Active",   organization: "Toyota",              title: "Media Planning Specialist",        region: "APAC",  lastLogin: "Apr 15, 2026, 10:30 AM"  },
  { id: "e057", name: "Catherine O'Sullivan", email: "c.osullivan@verizon.com",      roles: ["Campaign Planner"],         status: "Active",   organization: "Verizon",             title: "National Media Planner",           region: "NA",    lastLogin: "May 2, 2026, 8:30 AM"    },
  { id: "e058", name: "Brandon Nguyen",       email: "b.nguyen@t-mobile.com",        roles: ["Ad Operations Specialist"], status: "Active",   organization: "T-Mobile",            title: "Digital Activation Manager",       region: "NA",    lastLogin: "Apr 27, 2026, 2:45 PM"   },
  { id: "e059", name: "Ji-Young Park",        email: "j.park@samsung.com",           roles: ["Campaign Planner"],         status: "Active",   organization: "Samsung",             title: "Sr. Campaign Strategist",          region: "APAC",  lastLogin: "Apr 20, 2026, 11:15 AM"  },
  { id: "e060", name: "Rachel Huang",         email: "r.huang@apple.com",            roles: ["External Partner Admin"],   status: "Inactive", organization: "Apple",               title: "Partner Channel Manager",          region: "NA",    lastLogin: "Feb 11, 2026, 3:30 PM"   }
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
  { id: "r010", role: "TOM Admin", description: "Administers Target Options Manager options, groups, and templates.", status: "Standard", createdBy: "Homer Simpson", createDate: "02/18/2026", functions: buildRoleFunctions("r010") }
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
  if (span) span.textContent = userView === "external" ? "Organization" : "Team";
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
                              (e.g. "Ad Solutions & Innovation").
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
    var MIN_WIDTHS = {
      "nm": 200, "rl": 220, "st": 60, "tm": 140, "ll": 170, "rg": 80,
      "role": 160, "func": 240, "by": 130, "date": 120
    };
    var SKIP_KEYS = { "ct": 1, "em": 1 };

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
          var key = col.getAttribute("data-u-col") || col.getAttribute("data-rp-col") || "";
          if (SKIP_KEYS[key]) return;
          var handle = document.createElement("span");
          handle.className = "col-resize-handle";
          handle.setAttribute("aria-hidden", "true");
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

      /* R&P only: keep Role and Created By at their measured widths; give
         all horizontal slack to Functions (Description column removed). */
      if (table.id === "rpTable" && oldWidths.length >= 4 && rightIdx === 3) {
        var MIN_FUNC = 220;
        var rolePx = oldWidths[0];
        var func0 = oldWidths[1];
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
    var IAM_CURRENT_VERSION_ID = "v1";

    var menu = document.getElementById("userMenu");
    var trigger = document.getElementById("userMenuTrigger");
    var pop = document.getElementById("userMenuPop");
    var themeRow = document.getElementById("userMenuTheme");
    var versionRow = document.getElementById("userMenuVersion");
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
       ROWS = the top-level menuitems (Version, Theme, Log Out — skips
       any that don't exist on this build). Only one row/sub-item has
       tabindex="0" at a time; arrow keys move that single tab stop. */
    var ROWS = [versionRow, themeRow, logoutRow].filter(function (r) { return !!r; });
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
    if (e.target.closest(".role-extra, .rp-role-link")) hideTooltip();
  });

  /* Per-role custom permission grids for Create Role / Edit Role prefill. */
  var ROLE_ACCESS_DETAILS = {
    r003: {
      "Core Planning": {
        Orders: ["View", "Edit", "Assign", "Comment"],
        "Media Plans": ["View", "Edit"],
        "Line Items": ["View", "Edit"]
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
  var APP_ACCESS_MODEL = {
    "Core Planning": {
      groups: ["Orders", "Media Plans", "Line Items"],
      presets: {
        "View Only": { Orders: ["View"], "Media Plans": ["View"], "Line Items": ["View"] },
        "Edit": { Orders: ["View", "Create", "Edit", "Comment"], "Media Plans": ["View", "Create", "Edit"], "Line Items": ["View", "Create", "Edit"] },
        "Approve": { Orders: ["View", "Approve", "Reject"], "Media Plans": ["View"], "Line Items": ["View"] },
        "Full Access": { Orders: ["View", "Create", "Edit", "Delete", "Assign", "Comment", "Approve", "Reject"], "Media Plans": ["View", "Create", "Edit", "Delete"], "Line Items": ["View", "Create", "Edit", "Delete"] }
      }
    },
    "IAM": {
      groups: ["Roles", "Users", "Analytics", "Admin Actions"],
      presets: {
        "View Only": { Roles: ["View"], Users: ["View"], Analytics: ["View"], "Admin Actions": [] },
        "User": { Roles: ["View"], Users: ["View", "Create", "Edit", "Delete", "Impersonate users"], Analytics: ["View"], "Admin Actions": [] },
        "Role": { Roles: ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage data access"], Users: ["View"], Analytics: ["View"], "Admin Actions": [] },
        "Full Access": { Roles: ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage data access"], Users: ["View", "Create", "Edit", "Delete", "Impersonate users"], Analytics: ["View"], "Admin Actions": ["Manage configuration", "Manage settings"] }
      }
    },
    "ICM": {
      groups: ["Inventory Items", "Offerings", "Sales Packages"],
      presets: {
        "View Only": { "Inventory Items": ["View"], Offerings: ["View"], "Sales Packages": ["View"] },
        "Edit": { "Inventory Items": ["View", "Create", "Edit"], Offerings: ["View", "Create", "Edit"], "Sales Packages": ["View", "Create", "Edit"] },
        "Approve": { "Inventory Items": ["View", "Approve", "Reject"], Offerings: ["View"], "Sales Packages": ["View"] },
        "Full Access": { "Inventory Items": ["View", "Create", "Edit", "Delete"], Offerings: ["View", "Create", "Edit", "Delete"], "Sales Packages": ["View", "Create", "Edit", "Delete"] }
      }
    },
    "TOM": {
      groups: ["Targeting Categories", "Dimensions", "Values", "Groups", "Templates"],
      presets: {
        "View Only": { "Targeting Categories": ["View"], Dimensions: ["View"], Values: ["View"], Groups: ["View"], Templates: ["View"] },
        "Edit": { "Targeting Categories": ["View", "Edit"], Dimensions: ["View", "Edit"], Values: ["View", "Edit"], Groups: ["View", "Create", "Edit"], Templates: ["View", "Create", "Edit"] },
        "Approve": { "Targeting Categories": ["View"], Dimensions: ["View"], Values: ["View"], Groups: ["View", "Approve", "Reject"], Templates: ["View", "Approve", "Reject"] },
        "Full Access": { "Targeting Categories": ["View", "Create", "Edit", "Delete"], Dimensions: ["View", "Create", "Edit", "Delete"], Values: ["View", "Create", "Edit", "Delete"], Groups: ["View", "Create", "Edit", "Delete", "Assign"], Templates: ["View", "Create", "Edit", "Delete", "Assign permissions"] }
      }
    },
    "Disney Ads Agent": {
      groups: ["Agent Workflows", "Forecasting", "Insights"],
      presets: {
        "View Only": { "Agent Workflows": ["View"], Forecasting: ["View"], Insights: ["View"] },
        "Edit": { "Agent Workflows": ["View", "Create", "Edit"], Forecasting: ["View", "Edit"], Insights: ["View"] },
        "Full Access": { "Agent Workflows": ["View", "Create", "Edit", "Delete"], Forecasting: ["View", "Create", "Edit", "Delete"], Insights: ["View"] }
      }
    }
  };

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
    "TOM": "Target Options Manager",
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
  var hdrTitle = document.querySelector(".hdr h1");
  var hdrSub = document.querySelector(".hdr p");

  function switchTab(tab) {
    activeTab = tab;
    for (var i = 0; i < tabBtns.length; i++) tabBtns[i].classList.remove("on");
    if (tab === "users") {
      tabBtns[0].classList.add("on");
      usersPanel.style.display = "";
      rolesPanel.style.display = "none";
      hdrTitle.textContent = "User Management";
      hdrSub.textContent = "Assign roles and manage access across Atlas";
    } else {
      tabBtns[1].classList.add("on");
      usersPanel.style.display = "none";
      rolesPanel.style.display = "";
      hdrTitle.textContent = "Roles and Permissions";
      hdrSub.textContent = "Define roles, permissions, and data access across Atlas applications";
      renderRPTable();
      renderRPPagination();
    }
  }

  tabBtns[0].addEventListener("click", function () { switchTab("users"); });
  tabBtns[1].addEventListener("click", function () { switchTab("roles"); });

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
      if (usersBtns[ub].textContent.indexOf("Add Users") !== -1) {
        addUsersBtn = usersBtns[ub];
        break;
      }
    }

    var auBack = document.getElementById("auBack");
    var auCancel = document.getElementById("auCancel");
    var auSave = document.getElementById("auSave");
    var auPageTitle = document.getElementById("auPageTitle");
    var auPageSubtitle = document.getElementById("auPageSubtitle");
    var auRemoveUser = document.getElementById("auRemoveUser");
    var auRoleComboEl = document.getElementById("auRoleCombo");
    var auRoleAdd = document.getElementById("auRoleAdd");
    var auRoleCards = document.getElementById("auRoleCards");

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
      addUserRolePick: ""
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
    var AU_PAGE_TITLE_ADD = "Add users";
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

    /* Add User → Team list: AU_TEAM_NAMES (EDL combo options). */
    var AU_TEAM_NAMES = [
      "National Sales",
      "Local Sales",
      "Integrated Marketing & Sales",
      "Client Partnerships",
      "Programmatic Sales",
      "Sports Ad Sales",
      "Entertainment Ad Sales",
      "Kids & Family Ad Sales",
      "Streaming/Streaming Ad Sales",
      "Direct Response Sales",
      "Sales Solutions & Strategy",
      "Ad Operations & Yield Management",
      "International Sales",
      "Digital Ad Sales",
      "Agency Partnerships"
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
      },
      "edl-combo-menu--add-user"
    );

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
      if (addUsersPage) addUsersPage.classList.toggle("is-edit-mode", auPageMode === "edit");
      if (auPageTitle) auPageTitle.textContent = auPageMode === "edit" ? "Edit User" : AU_PAGE_TITLE_ADD;
      if (auPageSubtitle) {
        auPageSubtitle.textContent = auPageMode === "edit"
          ? ("Manage user details and access for " + (auEditingDisplayName || "this user"))
          : AU_PAGE_SUB_ADD;
      }
      if (auRemoveUser) auRemoveUser.hidden = auPageMode !== "edit";
      if (auSave) auSave.textContent = auPageMode === "edit" ? "Save User" : "Add User";
      if (auEmail) {
        auEmail.readOnly = auPageMode === "edit";
        auEmail.setAttribute("aria-readonly", auPageMode === "edit" ? "true" : "false");
      }
      if (auStatusReadonly) auStatusReadonly.hidden = auPageMode !== "edit";
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
      updateAuSummaries();
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
      tb.innerHTML = '<tr><td colspan="5" class="empty-state">No results found</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var roleCell = '<a class="rp-role-link" href="#" data-role-edit="' + esc(r.id) + '">' + esc(r.role) + '</a>';
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
  var APP_PERMISSIONS = {
    core_planning: {
      label: "Core Planning",
      resources: [
        { title: "Orders", actions: ["View", "Create", "Edit", "Delete", "Assign", "Comment", "Approve", "Reject"] },
        { title: "Media Plans", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Line Items", actions: ["View", "Create", "Edit", "Delete"] }
      ],
      levels: ["View Only", "Edit", "Approve", "Full Access", "Custom"],
      bundles: {
        "View Only": { Orders: ["View"], "Media Plans": ["View"], "Line Items": ["View"] },
        "Edit": { Orders: ["View", "Create", "Edit", "Comment"], "Media Plans": ["View", "Create", "Edit"], "Line Items": ["View", "Create", "Edit"] },
        "Approve": { Orders: ["View", "Approve", "Reject"], "Media Plans": ["View"], "Line Items": ["View"] },
        "Full Access": { Orders: ["View", "Create", "Edit", "Delete", "Assign", "Comment", "Approve", "Reject"], "Media Plans": ["View", "Create", "Edit", "Delete"], "Line Items": ["View", "Create", "Edit", "Delete"] }
      }
    },
    identity_access_management: {
      label: "Identity Access Management",
      resources: [
        { title: "Roles", actions: ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage data access"] },
        { title: "Users", actions: ["View", "Create", "Edit", "Delete", "Impersonate users"] },
        { title: "Analytics", actions: ["View"] },
        { title: "Admin Actions", actions: ["Manage configuration", "Manage settings"] }
      ],
      levels: ["View Only", "User", "Role", "Full Access", "Custom"],
      bundles: {
        "View Only": { Roles: ["View"], Users: ["View"], Analytics: ["View"], "Admin Actions": [] },
        "User": { Roles: ["View"], Users: ["View", "Create", "Edit", "Delete", "Impersonate users"], Analytics: ["View"], "Admin Actions": [] },
        "Role": { Roles: ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage data access"], Users: ["View"], Analytics: ["View"], "Admin Actions": [] },
        "Full Access": { Roles: ["View", "Create", "Edit", "Delete", "Assign permissions", "Manage data access"], Users: ["View", "Create", "Edit", "Delete", "Impersonate users"], Analytics: ["View"], "Admin Actions": ["Manage configuration", "Manage settings"] }
      }
    },
    disney_ads_agent: {
      label: "Disney Ads Agent",
      resources: [
        { title: "Agent Workflows", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Forecasting", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Insights", actions: ["View"] }
      ],
      levels: ["View Only", "Edit", "Full Access", "Custom"],
      bundles: {
        "View Only": { "Agent Workflows": ["View"], Forecasting: ["View"], Insights: ["View"] },
        "Edit": { "Agent Workflows": ["View", "Create", "Edit"], Forecasting: ["View", "Edit"], Insights: ["View"] },
        "Full Access": { "Agent Workflows": ["View", "Create", "Edit", "Delete"], Forecasting: ["View", "Create", "Edit", "Delete"], Insights: ["View"] }
      }
    },
    inventory_catalog_manager: {
      label: "Inventory Catalog Manager",
      resources: [
        { title: "Inventory Items", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Offerings", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Sales Packages", actions: ["View", "Create", "Edit", "Delete"] }
      ],
      levels: ["View Only", "Edit", "Approve", "Full Access", "Custom"],
      bundles: {
        "View Only": { "Inventory Items": ["View"], Offerings: ["View"], "Sales Packages": ["View"] },
        "Edit": { "Inventory Items": ["View", "Create", "Edit"], Offerings: ["View", "Create", "Edit"], "Sales Packages": ["View", "Create", "Edit"] },
        "Approve": { "Inventory Items": ["View", "Approve", "Reject"], Offerings: ["View"], "Sales Packages": ["View"] },
        "Full Access": { "Inventory Items": ["View", "Create", "Edit", "Delete"], Offerings: ["View", "Create", "Edit", "Delete"], "Sales Packages": ["View", "Create", "Edit", "Delete"] }
      }
    },
    target_options_manager: {
      label: "Target Options Manager",
      resources: [
        { title: "Targeting Categories", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Dimensions", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Values", actions: ["View", "Create", "Edit", "Delete"] },
        { title: "Groups", actions: ["View", "Create", "Edit", "Delete", "Assign"] },
        { title: "Templates", actions: ["View", "Create", "Edit", "Delete", "Assign permissions"] }
      ],
      levels: ["View Only", "Edit", "Approve", "Full Access", "Custom"],
      bundles: {
        "View Only": { "Targeting Categories": ["View"], Dimensions: ["View"], Values: ["View"], Groups: ["View"], Templates: ["View"] },
        "Edit": { "Targeting Categories": ["View", "Edit"], Dimensions: ["View", "Edit"], Values: ["View", "Edit"], Groups: ["View", "Create", "Edit"], Templates: ["View", "Create", "Edit"] },
        "Approve": { "Targeting Categories": ["View"], Dimensions: ["View"], Values: ["View"], Groups: ["View", "Approve", "Reject"], Templates: ["View", "Approve", "Reject"] },
        "Full Access": { "Targeting Categories": ["View", "Create", "Edit", "Delete"], Dimensions: ["View", "Create", "Edit", "Delete"], Values: ["View", "Create", "Edit", "Delete"], Groups: ["View", "Create", "Edit", "Delete", "Assign"], Templates: ["View", "Create", "Edit", "Delete", "Assign permissions"] }
      }
    }
  };

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
    var CR_APP_OPTIONS = [
      { value: "identity_access_management", label: "Identity Access Management" },
      { value: "core_planning",              label: "Core Planning" },
      { value: "disney_ads_agent",           label: "Disney Ads Agent" },
      { value: "inventory_catalog_manager",  label: "Inventory Catalog Manager" },
      { value: "target_options_manager",     label: "Target Options Manager" }
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
      "ICM": "inventory_catalog_manager"
    };

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

      var fns = record.functions || [];
      for (var i = 0; i < fns.length; i++) {
        var appKey = FUNCTION_TO_APP_KEY[fns[i].name];
        if (!appKey || !APP_PERMISSIONS[appKey]) continue;
        crAddApplication(appKey);
        var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
        if (section) {
          var access = fns[i].access || roleAccessLevel(record.id, fns[i].name);
          section.setAttribute("data-role-id", record.id);
          setSectionAccessLevel(section, access);
          if (isCustomAccessLevel(access)) prefillAppChecks(appKey, fns[i].count, preferredValuesForRoleApp(record.id, fns[i].name));
        }
      }
      updateFunctionsCount();
      updateCrSummaries();
      captureCrInitialState();
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
      var checked = crPermsContent.querySelectorAll(".cr-perm-check:checked");
      crFunctionsTitle.textContent = "Permissions (" + checked.length + " Selected)";
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
        var boxes = sections[s].querySelectorAll(".cr-perm-check:checked");
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
      var selected = crPermsContent.querySelectorAll(".cr-perm-check:checked").length;
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
      var label = "Select Application";
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
        crAppValue.textContent = "Select Application";
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

    function buildAppSectionHtml(appKey) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return "";
      var accessMenuId = "cr-access-menu-" + appKey;
      var accessTriggerId = "cr-access-trigger-" + appKey;
      var html = '<div class="cr-app-section" data-app-key="' + esc(appKey) + '" data-expanded="false">';
      html += '<div class="cr-app-section-head">';
      html += '<div class="cr-app-head-left">';
      html += '<span class="cr-app-title">' + esc(app.label) + '</span>';
      html += '</div>';
      html += '<button type="button" class="cr-app-remove" data-remove-app="' + esc(appKey) + '" aria-label="Remove ' + esc(app.label) + '">';
      html += CR_EDL_TRASH_SVG;
      html += 'Remove';
      html += '</button>';
      html += '</div>';
      html += '<div class="cr-app-body" id="cr-app-body-' + esc(appKey) + '">';
      html += '<div class="cr-access-level-row"><div class="cr-label">Access level</div><div class="cr-access-level-wrap"><div class="cr-dd cr-access-level-dd" data-access-dd data-app-key="' + esc(appKey) + '">';
      html += '<button type="button" class="cr-dd-trigger cr-access-level-trigger" id="' + esc(accessTriggerId) + '" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + esc(accessMenuId) + '">';
      html += '<span class="cr-dd-value cr-access-level-value">' + esc(accessLevelValueText(appKey, app.levels[0], null)) + '</span>';
      html += '<svg class="cr-dd-chev" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      html += '</button>';
      html += '<div class="cr-dd-menu cr-access-level-menu" id="' + esc(accessMenuId) + '" role="listbox" aria-labelledby="' + esc(accessTriggerId) + '" data-app-key="' + esc(appKey) + '">';
      for (var i = 0; i < app.levels.length; i++) {
        html += '<div class="cr-dd-option cr-access-level-option' + (i === 0 ? " is-selected" : "") + '" role="option" data-access-level-option="true" data-access-level="' + esc(app.levels[i]) + '" aria-selected="' + (i === 0 ? "true" : "false") + '">' + esc(app.levels[i]) + '</div>';
      }
      html += "</div></div></div></div>";
      html += '<div class="cr-summary-stack">';
      html += '<div class="cr-access-summary-card">';
      html += '<div class="cr-access-summary"></div>';
      html += '<button type="button" class="cr-customize-link cr-summary-cta" data-show-all="true">Show all permissions \u2193</button>';
      html += '</div></div>';
      html += '<div class="cr-custom-area">';
      for (var k = 0; k < app.resources.length; k++) {
        var resource = app.resources[k];
        html += '<div class="cr-module" data-module="' + esc(resource.title) + '">' +
          '<button type="button" class="cr-module-head" data-module-toggle="' + esc(resource.title) + '" aria-expanded="false">' +
            '<span class="cr-module-head-main">' +
              CR_MODULE_CHEV_SVG +
              '<span class="cr-module-title">' + esc(resource.title) + '</span>' +
            '</span>' +
            '<span class="cr-module-summary" aria-live="polite">0 permissions selected</span>' +
          '</button>' +
          '<div class="cr-module-body" style="display:none">' + renderPermissionGroup(resource, appKey) + '</div>' +
        '</div>';
      }
      html += '<button type="button" class="cr-customize-link cr-collapse-all-link" data-collapse-all="true">Collapse all permissions \u2191</button>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      return html;
    }

    function crAddApplication(appKey) {
      if (!appKey || crAddedApps.indexOf(appKey) >= 0 || !APP_PERMISSIONS[appKey]) return;
      crAddedApps.push(appKey);
      var wrapper = document.createElement("div");
      wrapper.innerHTML = buildAppSectionHtml(appKey);
      var section = wrapper.firstChild;
      crPermsContent.appendChild(section);
      setSectionAccessLevel(section, APP_PERMISSIONS[appKey].levels[0]);
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
      var head = e.target.closest("[data-module-toggle]");
      if (!head || head !== e.target) return;
      e.preventDefault();
      head.click();
    });
    crPermsContent.addEventListener("change", function (e) {
      var sec = e.target.closest(".cr-app-section");
      if (sec) {
        if (!isCustomAccessLevel(sec.getAttribute("data-access-level"))) {
          setSectionAccessLevel(sec, "Custom");
        } else {
          updateCrModuleSummaries(sec);
        }
        updateAccessLevelValue(sec);
        updateFunctionsCount();
        validateCreateRole();
      }
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
        var access = sections[i].getAttribute("data-access-level") || "View Only";
        var count = sections[i].querySelectorAll(".cr-perm-check:checked").length;
        if (!count) continue;
        var label = APP_KEY_TO_TABLE_LABEL[key] ||
                    (APP_PERMISSIONS[key] && APP_PERMISSIONS[key].label) || key;
        out.push({ name: label, count: count, access: access });
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
