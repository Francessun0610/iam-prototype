var DATA = [
  /* ── Page 1 ── */
  { id: "u001", avatar: "avatars/photos/m01.png", name: "Homer Simpson", email: "Homer.Simpson@disney.com", roles: ["Core Planning Admin", "Strategy & Planning Manager", "Sales Planner"], status: "Active", team: "National Ad Sales", title: "VP, Ad Sales Operations", region: "USA" },
  { id: "u002", avatar: "avatars/photos/f01.png", name: "Marge Simpson", email: "Marge.Simpson@disney.com", roles: ["Sales Planner", "Media Strategy Director"], status: "Active", team: "Digital Media Planning", title: "Director, Media Strategy", region: "USA" },
  { id: "u003", avatar: "avatars/photos/m02.png", name: "Bart Simpson", email: "Bart.Simpson@disney.com", roles: ["Account Executive"], status: "Active", team: "Client Partnerships", title: "Coordinator, Sales Support", region: "USA" },
  { id: "u004", avatar: "avatars/photos/m03.png", name: "Ned Flanders", email: "Ned.Flanders@disney.com", roles: ["Account Manager", "Client Partnerships Manager", "Sales Planner"], status: "Active", team: "Streaming Revenue", title: "Manager, Client Partnerships", region: "EMEA" },
  { id: "u005", avatar: "avatars/photos/f02.png", name: "Lisa Simpson", email: "Lisa.Simpson@disney.com", roles: ["Ad Ops Specialist", "Campaign Manager", "Inventory Analyst", "Programmatic Specialist"], status: "Active", team: "Ad Solutions & Innovation", title: "Sr. Analyst, Audience Insights", region: "USA" },
  { id: "u006", avatar: "avatars/photos/m04.png", name: "Montgomery Burns", email: "Montgomery.Burns@disney.com", roles: ["Campaign Manager", "Strategy & Planning Manager"], status: "Active", team: "Yield & Inventory", title: "SVP, Revenue Strategy", region: "USA" },
  { id: "u007", avatar: "avatars/photos/m05.png", name: "Milhouse Van Houten", email: "Milhouse.VanHouten@disney.com", roles: ["Yield Manager"], status: "Active", team: "Programmatic Sales", title: "Analyst, Campaign Planning", region: "APAC" },
  { id: "u008", avatar: "avatars/photos/f03.png", name: "Maggie Simpson", email: "Maggie.Simpson@disney.com", roles: ["Revenue Operations Analyst", "Finance Analyst"], status: "Active", team: "Revenue Operations", title: "Associate, Revenue Ops", region: "USA" },
  { id: "u009", avatar: "avatars/photos/m06.png", name: "Waylon Smithers", email: "Waylon.Smithers@disney.com", roles: ["Billing Operations Specialist", "Finance Analyst", "Revenue Operations Analyst"], status: "Active", team: "Ad Sales Finance", title: "Lead, Billing Operations", region: "USA" },
  { id: "u010", avatar: "avatars/photos/m07.png", name: "Nelson Muntz", email: "Nelson.Muntz@disney.com", roles: ["Finance Analyst"], status: "Active", team: "Addressable Ad Ops", title: "Associate, Finance & Planning", region: "LATAM" },

  /* ── Page 2 ── */
  { id: "u011", avatar: "avatars/photos/m08.png", name: "Ralph Wiggum", email: "Ralph.Wiggum@disney.com", roles: ["Ad Ops Specialist", "Campaign Manager"], status: "Active", team: "Addressable Ad Ops", title: "Associate, Ad Operations", region: "USA" },
  { id: "u012", avatar: "avatars/photos/m09.png", name: "Principal Skinner", email: "Principal.Skinner@disney.com", roles: ["Account Manager", "Client Partnerships Manager", "Account Executive"], status: "Active", team: "Agency Sales", title: "Sr. Manager, Agency Partnerships", region: "USA" },
  { id: "u013", avatar: "avatars/photos/m10.png", name: "Krusty the Clown", email: "Krusty.TheClown@disney.com", roles: ["Campaign Manager"], status: "Active", team: "National Ad Sales", title: "Director, Brand Partnerships", region: "USA" },
  { id: "u014", avatar: "avatars/photos/f04.png", name: "Selma Bouvier", email: "Selma.Bouvier@disney.com", roles: ["Billing Operations Specialist", "Revenue Operations Analyst", "Finance Analyst", "Inventory Analyst"], status: "Active", team: "Ad Sales Finance", title: "Manager, Billing Operations", region: "EMEA" },
  { id: "u015", avatar: "avatars/photos/f05.png", name: "Patty Bouvier", email: "Patty.Bouvier@disney.com", roles: ["Revenue Operations Analyst"], status: "Active", team: "Revenue Operations", title: "Sr. Analyst, Revenue Reporting", region: "EMEA" },
  { id: "u016", avatar: "avatars/photos/m11.png", name: "Lenny Leonard", email: "Lenny.Leonard@disney.com", roles: ["Sales Planner", "Media Strategy Director", "Strategy & Planning Manager"], status: "Active", team: "Digital Media Planning", title: "Sr. Planner, Media Investment", region: "USA" },
  { id: "u017", avatar: "avatars/photos/m12.png", name: "Carl Carlson", email: "Carl.Carlson@disney.com", roles: ["Yield Manager", "Inventory Analyst"], status: "Active", team: "Yield & Inventory", title: "Manager, Yield Optimization", region: "USA" },
  { id: "u018", avatar: "avatars/photos/m13.png", name: "Moe Szyslak", email: "Moe.Szyslak@disney.com", roles: ["Account Executive", "Account Manager"], status: "Pending", team: "Client Partnerships", title: "Coordinator, Client Services", region: "LATAM" },
  { id: "u019", avatar: "avatars/photos/m14.png", name: "Apu Nahasapeemapetilon", email: "Apu.Nahasapeemapetilon@disney.com", roles: ["Strategy & Planning Manager", "Client Partnerships Manager", "Media Strategy Director", "Sales Planner"], status: "Active", team: "Global Partnerships", title: "Sr. Manager, International Strategy", region: "APAC" },
  { id: "u020", avatar: "avatars/photos/m15.png", name: "Comic Book Guy", email: "Comic.BookGuy@disney.com", roles: ["Finance Analyst", "Billing Operations Specialist"], status: "Active", team: "Ad Sales Finance", title: "Analyst, Financial Planning", region: "USA" },

  /* ── Page 3 ── */
  { id: "u021", avatar: "avatars/photos/m16.png", name: "Chief Wiggum", email: "Chief.Wiggum@disney.com", roles: ["Account Manager"], status: "Active", team: "National Ad Sales", title: "VP, Client Solutions", region: "USA" },
  { id: "u022", avatar: "avatars/photos/f06.png", name: "Edna Krabappel", email: "Edna.Krabappel@disney.com", roles: ["Sales Planner", "Campaign Manager", "Ad Ops Specialist"], status: "Active", team: "Digital Media Planning", title: "Director, Planning & Activation", region: "USA" },
  { id: "u023", avatar: "avatars/photos/m17.png", name: "Groundskeeper Willie", email: "Groundskeeper.Willie@disney.com", roles: ["Ad Ops Specialist", "Inventory Analyst"], status: "Active", team: "Ad Solutions & Innovation", title: "Lead, Campaign Trafficking", region: "EMEA" },
  { id: "u024", avatar: "avatars/photos/m18.png", name: "Fat Tony", email: "Fat.Tony@disney.com", roles: ["Strategy & Planning Manager", "Media Strategy Director", "Client Partnerships Manager"], status: "Active", team: "Streaming Revenue", title: "SVP, Distribution Strategy", region: "USA" },
  { id: "u025", avatar: "avatars/photos/m19.png", name: "Dr. Hibbert", email: "Julius.Hibbert@disney.com", roles: ["Revenue Operations Analyst", "Finance Analyst", "Billing Operations Specialist"], status: "Active", team: "Revenue Operations", title: "Manager, Revenue Analytics", region: "USA" },
  { id: "u026", avatar: "avatars/photos/m20.png", name: "Professor Frink", email: "Professor.Frink@disney.com", roles: ["Yield Manager", "Programmatic Specialist", "Inventory Analyst", "Ad Ops Specialist"], status: "Active", team: "Programmatic Sales", title: "Sr. Analyst, Programmatic Yield", region: "USA" },
  { id: "u027", avatar: "avatars/photos/m21.png", name: "Barney Gumble", email: "Barney.Gumble@disney.com", roles: ["Campaign Manager", "Ad Ops Specialist"], status: "Disabled", team: "Addressable Ad Ops", title: "Coordinator, Campaign Delivery", region: "USA" },
  { id: "u028", avatar: "avatars/photos/m22.png", name: "Sideshow Bob", email: "Sideshow.Bob@disney.com", roles: ["Account Executive", "Client Partnerships Manager", "Account Manager"], status: "Active", team: "Agency Sales", title: "Director, Agency Development", region: "EMEA" },
  { id: "u029", avatar: "avatars/photos/m23.png", name: "Kent Brockman", email: "Kent.Brockman@disney.com", roles: ["Core Planning Admin", "Strategy & Planning Manager"], status: "Active", team: "Global Partnerships", title: "VP, Global Media Sales", region: "USA" },
  { id: "u030", avatar: "avatars/photos/m24.png", name: "Otto Mann", email: "Otto.Mann@disney.com", roles: ["Finance Analyst"], status: "Active", team: "Ad Sales Finance", title: "Associate, Accounts Receivable", region: "LATAM" },

  /* ── Page 4 ── */
  { id: "u031", avatar: "avatars/photos/m25.png", name: "Mayor Quimby", email: "Mayor.Quimby@disney.com", roles: ["Strategy & Planning Manager", "Media Strategy Director"], status: "Active", team: "National Ad Sales", title: "SVP, Sales & Partnerships", region: "USA" },
  { id: "u032", avatar: "avatars/photos/m26.png", name: "Hans Moleman", email: "Hans.Moleman@disney.com", roles: ["Billing Operations Specialist"], status: "Active", team: "Ad Sales Finance", title: "Associate, Billing Support", region: "USA" },
  { id: "u033", avatar: "avatars/photos/m27.png", name: "Gil Gunderson", email: "Gil.Gunderson@disney.com", roles: ["Account Executive", "Sales Planner", "Client Partnerships Manager"], status: "Pending", team: "Client Partnerships", title: "Coordinator, New Business", region: "USA" },
  { id: "u034", avatar: "avatars/photos/m28.png", name: "Rainier Wolfcastle", email: "Rainier.Wolfcastle@disney.com", roles: ["Campaign Manager", "Ad Ops Specialist", "Programmatic Specialist"], status: "Active", team: "Streaming Revenue", title: "Director, Content Partnerships", region: "EMEA" },
  { id: "u035", avatar: "avatars/photos/m29.png", name: "Troy McClure", email: "Troy.McClure@disney.com", roles: ["Sales Planner", "Media Strategy Director"], status: "Active", team: "Digital Media Planning", title: "Manager, Cross-Platform Planning", region: "USA" },
  { id: "u036", avatar: "avatars/photos/m30.png", name: "Disco Stu", email: "Disco.Stu@disney.com", roles: ["Ad Ops Specialist"], status: "Active", team: "Ad Solutions & Innovation", title: "Analyst, Creative Ad Solutions", region: "LATAM" },
  { id: "u037", avatar: "avatars/photos/m31.png", name: "Dr. Nick Riviera", email: "Nick.Riviera@disney.com", roles: ["Revenue Operations Analyst", "Billing Operations Specialist", "Finance Analyst", "Inventory Analyst"], status: "Active", team: "Revenue Operations", title: "Analyst, Revenue Reconciliation", region: "USA" },
  { id: "u038", avatar: "avatars/photos/m32.png", name: "Kirk Van Houten", email: "Kirk.VanHouten@disney.com", roles: ["Yield Manager", "Inventory Analyst"], status: "Disabled", team: "Yield & Inventory", title: "Associate, Inventory Management", region: "USA" },
  { id: "u039", avatar: "avatars/photos/f07.png", name: "Luann Van Houten", email: "Luann.VanHouten@disney.com", roles: ["Account Manager", "Client Partnerships Manager"], status: "Active", team: "Agency Sales", title: "Manager, Client Relations", region: "APAC" },
  { id: "u040", avatar: "avatars/photos/f08.png", name: "Agnes Skinner", email: "Agnes.Skinner@disney.com", roles: ["Finance Analyst", "Revenue Operations Analyst"], status: "Active", team: "Addressable Ad Ops", title: "Sr. Analyst, Financial Controls", region: "USA" },

  /* ── Page 5 ── */
  { id: "u041", avatar: "avatars/photos/m43.png", name: "Snake Jailbird", email: "Snake.Jailbird@disney.com", roles: ["Account Executive", "Account Manager", "Client Partnerships Manager"], status: "Active", team: "Programmatic Sales", title: "Coordinator, Programmatic Deals", region: "USA" },
  { id: "u042", avatar: "avatars/photos/m44.png", name: "Jimbo Jones", email: "Jimbo.Jones@disney.com", roles: ["Ad Ops Specialist", "Campaign Manager"], status: "Active", team: "Addressable Ad Ops", title: "Analyst, Ad Targeting", region: "USA" },
  { id: "u043", avatar: "avatars/photos/m45.png", name: "Dolph Starbeam", email: "Dolph.Starbeam@disney.com", roles: ["Campaign Manager", "Programmatic Specialist", "Ad Ops Specialist"], status: "Pending", team: "Ad Solutions & Innovation", title: "Associate, Campaign Strategy", region: "EMEA" },
  { id: "u044", avatar: "avatars/photos/f09.png", name: "Sherri Mackleberry", email: "Sherri.Mackleberry@disney.com", roles: ["Sales Planner"], status: "Active", team: "Digital Media Planning", title: "Sr. Planner, Audience Strategy", region: "USA" },
  { id: "u045", avatar: "avatars/photos/f10.png", name: "Terri Mackleberry", email: "Terri.Mackleberry@disney.com", roles: ["Sales Planner", "Media Strategy Director", "Strategy & Planning Manager"], status: "Active", team: "Digital Media Planning", title: "Sr. Planner, Integrated Media", region: "USA" },
  { id: "u046", avatar: "avatars/photos/m33.png", name: "Martin Prince", email: "Martin.Prince@disney.com", roles: ["Revenue Operations Analyst", "Finance Analyst"], status: "Active", team: "Revenue Operations", title: "Sr. Analyst, Data Governance", region: "USA" },
  { id: "u047", avatar: "avatars/photos/m34.png", name: "Timothy Lovejoy", email: "Timothy.Lovejoy@disney.com", roles: ["Strategy & Planning Manager", "Client Partnerships Manager", "Media Strategy Director", "Core Planning Admin"], status: "Active", team: "Global Partnerships", title: "Director, Strategic Accounts", region: "APAC" },
  { id: "u048", avatar: "avatars/photos/m35.png", name: "Cletus Spuckler", email: "Cletus.Spuckler@disney.com", roles: ["Billing Operations Specialist", "Finance Analyst"], status: "Active", team: "Ad Sales Finance", title: "Coordinator, Invoice Processing", region: "USA" },
  { id: "u049", avatar: "avatars/photos/f11.png", name: "Cookie Kwan", email: "Cookie.Kwan@disney.com", roles: ["Account Manager"], status: "Active", team: "National Ad Sales", title: "Sr. Manager, Regional Sales", region: "APAC" },
  { id: "u050", avatar: "avatars/photos/f12.png", name: "Lindsey Naegle", email: "Lindsey.Naegle@disney.com", roles: ["Yield Manager", "Inventory Analyst", "Programmatic Specialist"], status: "Active", team: "Yield & Inventory", title: "Director, Yield Strategy", region: "USA" },

  /* ── Page 6 ── */
  { id: "u051", avatar: "avatars/photos/m36.png", name: "Lionel Hutz", email: "Lionel.Hutz@disney.com", roles: ["Account Executive"], status: "Active", team: "Client Partnerships", title: "Manager, Business Development", region: "USA" },
  { id: "u052", avatar: "avatars/photos/f13.png", name: "Helen Lovejoy", email: "Helen.Lovejoy@disney.com", roles: ["Sales Planner", "Campaign Manager", "Media Strategy Director"], status: "Active", team: "Agency Sales", title: "Sr. Planner, Agency Investment", region: "EMEA" },
  { id: "u053", avatar: "avatars/photos/m37.png", name: "Artie Ziff", email: "Artie.Ziff@disney.com", roles: ["Strategy & Planning Manager", "Core Planning Admin"], status: "Active", team: "Streaming Revenue", title: "VP, Digital Revenue", region: "USA" },
  { id: "u054", avatar: "avatars/photos/f14.png", name: "Ruth Powers", email: "Ruth.Powers@disney.com", roles: ["Revenue Operations Analyst", "Billing Operations Specialist"], status: "Active", team: "Revenue Operations", title: "Manager, Revenue Systems", region: "USA" },
  { id: "u055", avatar: "avatars/photos/m38.png", name: "Herman Hermann", email: "Herman.Hermann@disney.com", roles: ["Finance Analyst", "Billing Operations Specialist", "Revenue Operations Analyst", "Inventory Analyst"], status: "Disabled", team: "Ad Sales Finance", title: "Analyst, Cost Allocation", region: "LATAM" },
  { id: "u056", avatar: "avatars/photos/m39.png", name: "Wendell Borton", email: "Wendell.Borton@disney.com", roles: ["Ad Ops Specialist", "Programmatic Specialist"], status: "Active", team: "Ad Solutions & Innovation", title: "Associate, Creative Operations", region: "USA" },
  { id: "u057", avatar: "avatars/photos/m40.png", name: "Lyle Lanley", email: "Lyle.Lanley@disney.com", roles: ["Campaign Manager", "Strategy & Planning Manager", "Sales Planner"], status: "Active", team: "Programmatic Sales", title: "Sr. Manager, Programmatic Sales", region: "USA" },
  { id: "u058", avatar: "avatars/photos/m41.png", name: "Lewis Clark", email: "Lewis.Clark@disney.com", roles: ["Yield Manager"], status: "Pending", team: "Yield & Inventory", title: "Analyst, Inventory Forecasting", region: "APAC" },
  { id: "u059", avatar: "avatars/photos/m42.png", name: "Kearney Zzyzwicz", email: "Kearney.Zzyzwicz@disney.com", roles: ["Account Manager", "Client Partnerships Manager", "Account Executive"], status: "Active", team: "Global Partnerships", title: "Coordinator, Partner Relations", region: "EMEA" },
  { id: "u060", avatar: "avatars/photos/f15.png", name: "Manjula Nahasapeemapetilon", email: "Manjula.Nahasapeemapetilon@disney.com", roles: ["Billing Operations Specialist", "Revenue Operations Analyst", "Finance Analyst"], status: "Active", team: "Addressable Ad Ops", title: "Lead, Operations Support", region: "APAC" }
];

var ORIGINAL_ORDER = DATA.slice();
var TOTAL_ITEMS = 610;
var currentPage = 1;
var pageSize = 10;
var sortKey = null;
var sortDir = null; // null | "asc" | "desc"
var searchTerm = "";
var filters = { name: "", email: "", role: "", status: "", team: "", title: "", region: "" };
var filterSnapshot = null;
var SEARCH_FIELDS = ["name", "email", "status", "team", "title", "region"];
var activeTab = "users";

/* ═══ ROLES & PERMISSIONS DATA ═══ */
var ROLES_PERMISSIONS_DATA = [
  { id: "r001", role: "Core Planning Admin", description: "Full access to Core Planning workflows including order and media plan management.", functions: [{ name: "Core Planning", count: 8 }, { name: "TOM", count: 2 }, { name: "Admin", count: 3 }], status: "Sensitive", createdBy: "Homer Simpson", createDate: "01/15/2026" },
  { id: "r002", role: "Strategy & Planning Manager", description: "Manage strategic planning initiatives and oversee cross-team planning coordination.", functions: [{ name: "Core Planning", count: 7 }, { name: "TOM", count: 2 }, { name: "Admin", count: 2 }], status: "Regional", createdBy: "Homer Simpson", createDate: "01/15/2026" },
  { id: "r003", role: "Sales Planner", description: "Create and manage sales plans and proposals within the planning workflow.", functions: [{ name: "Core Planning", count: 5 }, { name: "Sales", count: 4 }], status: "Regional", createdBy: "Kent Brockman", createDate: "01/20/2026" },
  { id: "r004", role: "Media Strategy Director", description: "Define and oversee media investment strategy across linear and digital platforms.", functions: [{ name: "Core Planning", count: 6 }, { name: "Sales", count: 3 }, { name: "TOM", count: 2 }], status: "Regional", createdBy: "Homer Simpson", createDate: "01/20/2026" },
  { id: "r005", role: "Account Executive", description: "Manage client accounts and execute sales orders and deal negotiations.", functions: [{ name: "Sales", count: 6 }, { name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Kent Brockman", createDate: "02/03/2026" },
  { id: "r006", role: "Account Manager", description: "Oversee client account relationships and manage account-level configurations.", functions: [{ name: "Sales", count: 5 }, { name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Kent Brockman", createDate: "02/03/2026" },
  { id: "r007", role: "Client Partnerships Manager", description: "Manage strategic client partnerships and coordinate cross-functional planning.", functions: [{ name: "Sales", count: 5 }, { name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/10/2026" },
  { id: "r008", role: "Campaign Manager", description: "Plan, launch, and monitor advertising campaigns across platforms.", functions: [{ name: "Core Planning", count: 6 }, { name: "Ad Ops", count: 4 }, { name: "TOM", count: 2 }], status: "Regional", createdBy: "Homer Simpson", createDate: "02/10/2026" },
  { id: "r009", role: "Ad Ops Specialist", description: "Execute ad trafficking, campaign setup, and creative asset management.", functions: [{ name: "Ad Ops", count: 7 }, { name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/18/2026" },
  { id: "r010", role: "Programmatic Specialist", description: "Manage programmatic deal setup, automated transactions, and bid optimization.", functions: [{ name: "Ad Ops", count: 6 }, { name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Artie Ziff", createDate: "02/18/2026" },
  { id: "r011", role: "Inventory Analyst", description: "Monitor and analyze ad inventory availability, utilization, and capacity.", functions: [{ name: "Ad Ops", count: 5 }, { name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/25/2026" },
  { id: "r012", role: "Yield Manager", description: "Optimize ad inventory pricing, yield, and sell-through rates.", functions: [{ name: "Ad Ops", count: 6 }, { name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Artie Ziff", createDate: "02/25/2026" },
  { id: "r013", role: "Billing Operations Specialist", description: "Process invoices, manage billing workflows, and reconcile payment records.", functions: [{ name: "Billing", count: 8 }, { name: "Core Planning", count: 2 }], status: "Sensitive", createdBy: "Homer Simpson", createDate: "03/05/2026" },
  { id: "r014", role: "Finance Analyst", description: "Analyze financial performance, revenue forecasting, and reporting for ad sales.", functions: [{ name: "Billing", count: 6 }, { name: "Core Planning", count: 2 }], status: "Sensitive", createdBy: "Kent Brockman", createDate: "03/05/2026" },
  { id: "r015", role: "Revenue Operations Analyst", description: "Track revenue performance, pipeline reporting, and operational metrics.", functions: [{ name: "Billing", count: 5 }, { name: "Core Planning", count: 3 }], status: "Sensitive", createdBy: "Artie Ziff", createDate: "03/12/2026" }
];
var RP_ORIGINAL_ORDER = ROLES_PERMISSIONS_DATA.slice();
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

function renderAvatarHtml(user) {
  return '<div class="name-avatar">' +
    '<img src="' + esc(user.avatar) + '" alt="' + esc(user.name) + '">' +
    '</div>';
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

function renderTable() {
  var rows = getPageData();
  var tb = document.getElementById("tbody");
  if (rows.length === 0) {
    tb.innerHTML = '<tr><td colspan="7" class="empty-state">No results found</td></tr>';
    return;
  }
  var html = "";
  for (var i = 0; i < rows.length; i++) {
    var u = rows[i];
    var extra = u.roles.length - 1;
    var extraHtml = '';
    if (extra > 0) {
      var tooltipLines = u.roles.join('\n');
      extraHtml = ' <a href="#" class="role-extra" data-tooltip="' + esc(tooltipLines) + '">+' + extra + ' role' + (extra > 1 ? 's' : '') + '</a>';
    }
    html += '<tr data-id="' + esc(u.id) + '">' +
      '<td class="c-nm"><div class="name-cell">' + renderAvatarHtml(u) +
        '<span class="name-link" title="' + esc(u.name) + '">' + esc(u.name) + '</span></div></td>' +
      '<td class="c-em" title="' + esc(u.email) + '">' + esc(u.email) + '</td>' +
      '<td class="c-rl"><span class="role-txt">' + esc(u.roles[0]) + extraHtml + '</span></td>' +
      '<td class="c-st">' + esc(u.status) + '</td>' +
      '<td class="c-tm" title="' + esc(u.team) + '">' + esc(u.team) + '</td>' +
      '<td class="c-ct" title="' + esc(u.title) + '">' + esc(u.title) + '</td>' +
      '<td class="c-rg">' + esc(u.region) + '</td>' +
      '</tr>';
  }
  tb.innerHTML = html;
}

function totalPages() {
  return Math.max(1, Math.ceil(getFilteredData().length / pageSize));
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

  var jumpSel = document.querySelector(".pgn-jump .pgn-sel");
  jumpSel.innerHTML = "";
  for (var p = 1; p <= tp; p++) {
    var opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    if (p === currentPage) opt.selected = true;
    jumpSel.appendChild(opt);
  }
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

  /* ─── EDL Tooltip for role hover ─── */
  var tooltip = document.createElement("div");
  tooltip.className = "edl-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  var tblWrap = document.querySelector(".tbl-wrap");
  tblWrap.addEventListener("mouseover", function (e) {
    var link = e.target.closest(".role-extra");
    if (!link) return;
    var lines = link.getAttribute("data-tooltip");
    if (!lines) return;
    tooltip.innerHTML = lines.split("\n").map(function (r) { return '<div class="edl-tooltip-line">' + esc(r) + '</div>'; }).join("");
    tooltip.classList.add("visible");
    var rect = link.getBoundingClientRect();
    var tw = tooltip.offsetWidth;
    var th = tooltip.offsetHeight;
    var left = rect.left + rect.width / 2 - tw / 2;
    var top = rect.top - th - 8;
    if (left < 4) left = 4;
    if (left + tw > window.innerWidth - 4) left = window.innerWidth - tw - 4;
    if (top < 4) { top = rect.bottom + 8; tooltip.classList.add("below"); } else { tooltip.classList.remove("below"); }
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  });
  tblWrap.addEventListener("mouseout", function (e) {
    var link = e.target.closest(".role-extra");
    if (link) { tooltip.classList.remove("visible"); tooltip.classList.remove("below"); }
  });

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

  document.querySelector(".pgn-jump .pgn-sel").addEventListener("change", function () {
    goToPage(parseInt(this.value, 10));
  });

  document.querySelector(".pgn-show .pgn-sel").addEventListener("change", function () {
    pageSize = parseInt(this.value, 10);
    currentPage = 1;
    renderTable();
    renderPagination();
  });

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
    { id: "fltTeam",  key: "team" },
    { id: "fltTitle", key: "title" }
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

  function initCombo(containerId, options, filterKey, allLabel) {
    var container = document.getElementById(containerId);
    var selectedValue = "";
    var kbIndex = -1;
    var isOpen = false;

    container.innerHTML =
      '<div class="edl-combo-input-wrap">' +
        '<input type="text" class="edl-combo-input" placeholder="' + esc(allLabel) + '" autocomplete="off">' +
        '<button type="button" class="edl-combo-clear hidden" aria-label="Clear">' + CLEAR_SVG + '</button>' +
        '<button type="button" class="edl-combo-toggle" aria-label="Toggle dropdown">' + CHEV_SVG + '</button>' +
      '</div>';

    var menu = document.createElement("div");
    menu.className = "edl-combo-menu";
    document.body.appendChild(menu);

    var input = container.querySelector(".edl-combo-input");
    var clearBtn = container.querySelector(".edl-combo-clear");
    var toggleBtn = container.querySelector(".edl-combo-toggle");

    function getVisibleItems() { return menu.querySelectorAll(".edl-combo-item:not([style*='display: none'])"); }

    function positionMenu() {
      var rect = input.getBoundingClientRect();
      menu.style.left = rect.left + "px";
      menu.style.top = rect.bottom + "px";
      menu.style.width = rect.width + "px";
    }

    function renderMenu(filterText) {
      var q = (filterText || "").toLowerCase();
      var html = "";
      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var match = !q || opt.label.toLowerCase().indexOf(q) !== -1;
        html += '<div class="edl-combo-item' + (opt.value === selectedValue ? ' selected' : '') + '"' +
          ' data-value="' + esc(opt.value) + '"' +
          (match ? '' : ' style="display:none"') + '>' +
          '<span>' + esc(opt.label) + '</span>' +
          CHECK_SVG +
        '</div>';
      }
      var visible = 0;
      for (var j = 0; j < options.length; j++) {
        if (!q || options[j].label.toLowerCase().indexOf(q) !== -1) visible++;
      }
      if (visible === 0) html += '<div class="edl-combo-empty">No matches</div>';
      menu.innerHTML = html;
      kbIndex = -1;
    }

    function openMenu() {
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

    function getDisplayLabel() { return selectedValue || ""; }

    function updateClear() {
      clearBtn.classList.toggle("hidden", !selectedValue);
      if (!selectedValue) {
        input.placeholder = allLabel;
      } else {
        input.placeholder = allLabel;
      }
    }

    function selectValue(val) {
      selectedValue = val;
      filters[filterKey] = val;
      input.value = val || "";
      updateClear();
      applyFiltersLive();
    }

    function updateKbHighlight() {
      var items = getVisibleItems();
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("kb-highlight", i === kbIndex);
        if (i === kbIndex) items[i].scrollIntoView({ block: "nearest" });
      }
    }

    input.addEventListener("focus", function () {
      if (selectedValue && input.value === selectedValue) input.select();
      openMenu();
    });

    input.addEventListener("click", function () {
      if (!isOpen) openMenu();
    });

    input.addEventListener("input", function () {
      if (!isOpen) openMenu();
      renderMenu(this.value);
    });

    input.addEventListener("keydown", function (e) {
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
        kbIndex = (kbIndex + 1) % count;
        updateKbHighlight();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
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
      if (isOpen) { closeMenu(); input.blur(); } else { input.focus(); }
    });

    clearBtn.addEventListener("mousedown", function (e) {
      e.preventDefault();
      selectValue("");
      input.value = "";
      input.focus();
      if (isOpen) renderMenu("");
    });

    menu.addEventListener("mousedown", function (e) {
      e.preventDefault();
      var item = e.target.closest(".edl-combo-item");
      if (!item) return;
      selectValue(item.getAttribute("data-value"));
      closeMenu();
      input.blur();
    });

    menu.addEventListener("mousemove", function (e) {
      var item = e.target.closest(".edl-combo-item");
      if (!item) return;
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
      selectedValue = val;
      input.value = val || "";
      updateClear();
      renderMenu("");
    }

    updateClear();
    renderMenu("");
    return setValue;
  }

  var roleOptions = [
    { value: "Account Executive", label: "Account Executive" },
    { value: "Account Manager", label: "Account Manager" },
    { value: "Ad Ops Specialist", label: "Ad Ops Specialist" },
    { value: "Billing Operations Specialist", label: "Billing Operations Specialist" },
    { value: "Campaign Manager", label: "Campaign Manager" },
    { value: "Client Partnerships Manager", label: "Client Partnerships Manager" },
    { value: "Core Planning Admin", label: "Core Planning Admin" },
    { value: "Finance Analyst", label: "Finance Analyst" },
    { value: "Inventory Analyst", label: "Inventory Analyst" },
    { value: "Media Strategy Director", label: "Media Strategy Director" },
    { value: "Programmatic Specialist", label: "Programmatic Specialist" },
    { value: "Revenue Operations Analyst", label: "Revenue Operations Analyst" },
    { value: "Sales Planner", label: "Sales Planner" },
    { value: "Strategy & Planning Manager", label: "Strategy & Planning Manager" },
    { value: "Yield Manager", label: "Yield Manager" }
  ];
  var statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Disabled", label: "Disabled" },
    { value: "Pending", label: "Pending" }
  ];
  var regionOptions = [
    { value: "USA", label: "USA" },
    { value: "EMEA", label: "EMEA" },
    { value: "APAC", label: "APAC" },
    { value: "LATAM", label: "LATAM" }
  ];

  var setRole   = initCombo("roleCombo",   roleOptions,   "role",   "All Roles");
  var setStatus = initCombo("statusCombo", statusOptions, "status", "All Statuses");
  var setRegion = initCombo("regionCombo", regionOptions, "region", "All Regions");

  function syncDrawerToFilters() {
    document.getElementById("fltName").value = filters.name;
    document.getElementById("fltEmail").value = filters.email;
    document.getElementById("fltTeam").value = filters.team;
    document.getElementById("fltTitle").value = filters.title;
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

  /* ═══ ROLES & PERMISSIONS TABLE RENDERING ═══ */
  var EDIT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
  var DELETE_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';

  function formatFunctions(fns) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) {
      parts.push(esc(fns[i].name) + ' <span class="rp-func-count">(' + fns[i].count + ')</span>');
    }
    return parts.join(", ");
  }

  function getFunctionsText(fns) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) parts.push(fns[i].name + " (" + fns[i].count + ")");
    return parts.join(", ");
  }

  function getRPFilteredData() {
    var result = ROLES_PERMISSIONS_DATA;
    if (rpSearchTerm) {
      var q = rpSearchTerm.toLowerCase();
      result = result.filter(function (r) {
        return r.role.toLowerCase().indexOf(q) !== -1 ||
          r.description.toLowerCase().indexOf(q) !== -1 ||
          getFunctionsText(r.functions).toLowerCase().indexOf(q) !== -1;
      });
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
      tb.innerHTML = '<tr><td colspan="8" class="empty-state">No results found</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var chipClass = r.status === "Sensitive" ? "rp-chip-sensitive" : "rp-chip-regional";
      html += '<tr data-id="' + esc(r.id) + '">' +
        '<td class="rp-cb"><input type="checkbox" class="rp-check-input" data-rid="' + esc(r.id) + '"></td>' +
        '<td class="rp-role" title="' + esc(r.role) + '">' + esc(r.role) + '</td>' +
        '<td class="rp-desc" title="' + esc(r.description) + '">' + esc(r.description) + '</td>' +
        '<td class="rp-func"><span class="rp-func-text">' + formatFunctions(r.functions) + '</span></td>' +
        '<td class="rp-stat"><span class="rp-chip ' + chipClass + '">' + esc(r.status) + '</span></td>' +
        '<td class="rp-by">' + esc(r.createdBy) + '</td>' +
        '<td class="rp-date">' + esc(r.createDate) + '</td>' +
        '<td class="rp-act"><div class="rp-action-wrap">' +
          '<button class="rp-action-btn rp-action-btn-edit" title="Edit" aria-label="Edit ' + esc(r.role) + '">' + EDIT_SVG + '</button>' +
          '<button class="rp-action-btn rp-action-btn-delete" title="Delete" aria-label="Delete ' + esc(r.role) + '">' + DELETE_SVG + '</button>' +
        '</div></td>' +
        '</tr>';
    }
    tb.innerHTML = html;
    document.getElementById("rpSelectAll").checked = false;
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

    var jumpSel = document.getElementById("rpJumpSel");
    jumpSel.innerHTML = "";
    for (var p = 1; p <= tp; p++) {
      var opt = document.createElement("option");
      opt.value = p;
      opt.textContent = p;
      if (p === rpCurrentPage) opt.selected = true;
      jumpSel.appendChild(opt);
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

  document.getElementById("rpJumpSel").addEventListener("change", function () {
    rpGoToPage(parseInt(this.value, 10));
  });

  document.getElementById("rpPageSizeSel").addEventListener("change", function () {
    rpPageSize = parseInt(this.value, 10);
    rpCurrentPage = 1;
    renderRPTable();
    renderRPPagination();
  });

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

  /* ─── R&P Select all checkbox ─── */
  document.getElementById("rpSelectAll").addEventListener("change", function () {
    var checked = this.checked;
    var cbs = document.querySelectorAll('#rpTbody .rp-check-input');
    for (var i = 0; i < cbs.length; i++) cbs[i].checked = checked;
  });
});
