var DATA = [
  { id: "u001", avatar: "/avatars/photos/m01.png", name: "Homer Simpson", email: "Homer.Simpson@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "VP, Ad Sales Operations", region: "NA" },
  { id: "u002", avatar: "/avatars/photos/f01.png", name: "Marge Simpson", email: "Marge.Simpson@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "Director, Media Strategy", region: "NA" },
  { id: "u003", avatar: "/avatars/photos/m02.png", name: "Bart Simpson", email: "Bart.Simpson@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Coordinator, Sales Support", region: "NA" },
  { id: "u004", avatar: "/avatars/photos/m03.png", name: "Ned Flanders", email: "Ned.Flanders@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "Manager, Client Partnerships", region: "EMEA" },
  { id: "u005", avatar: "/avatars/photos/f02.png", name: "Lisa Simpson", email: "Lisa.Simpson@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Sr. Analyst, Audience Insights", region: "NA" },
  { id: "u006", avatar: "/avatars/photos/m04.png", name: "Montgomery Burns", email: "Montgomery.Burns@disney.com", roles: ["Ad Account Analyst"], status: "Inactive", team: "Ad Account \u00b7 EMEA Programmatic", title: "SVP, Revenue Strategy", region: "NA" },
  { id: "u007", avatar: "/avatars/photos/m05.png", name: "Milhouse Van Houten", email: "Milhouse.VanHouten@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Active", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Analyst, Campaign Planning", region: "ANZ" },
  { id: "u008", avatar: "/avatars/photos/f03.png", name: "Maggie Simpson", email: "Maggie.Simpson@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "Associate, Revenue Ops", region: "NA" },
  { id: "u009", avatar: "/avatars/photos/m06.png", name: "Waylon Smithers", email: "Waylon.Smithers@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Inactive", team: "Ad Account \u00b7 Local Sales West", title: "Lead, Billing Operations", region: "NA" },
  { id: "u010", avatar: "/avatars/photos/m07.png", name: "Nelson Muntz", email: "Nelson.Muntz@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "Associate, Finance & Planning", region: "LATAM" },
  { id: "u011", avatar: "/avatars/photos/m08.png", name: "Ralph Wiggum", email: "Ralph.Wiggum@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "Associate, Ad Operations", region: "NA" },
  { id: "u012", avatar: "/avatars/photos/m09.png", name: "Principal Skinner", email: "Principal.Skinner@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Sr. Manager, Agency Partnerships", region: "NA" },
  { id: "u013", avatar: "/avatars/photos/m10.png", name: "Krusty the Clown", email: "Krusty.TheClown@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "Director, Brand Partnerships", region: "NA" },
  { id: "u014", avatar: "/avatars/photos/f04.png", name: "Selma Bouvier", email: "Selma.Bouvier@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Manager, Billing Operations", region: "EMEA" },
  { id: "u015", avatar: "/avatars/photos/f05.png", name: "Patty Bouvier", email: "Patty.Bouvier@disney.com", roles: ["Ad Account Analyst"], status: "Active", team: "Ad Account \u00b7 EMEA Programmatic", title: "Sr. Analyst, Revenue Reporting", region: "EMEA" },
  { id: "u016", avatar: "/avatars/photos/m11.png", name: "Lenny Leonard", email: "Lenny.Leonard@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Active", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Sr. Planner, Media Investment", region: "NA" },
  { id: "u017", avatar: "/avatars/photos/m12.png", name: "Carl Carlson", email: "Carl.Carlson@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "Manager, Yield Optimization", region: "NA" },
  { id: "u018", avatar: "/avatars/photos/m13.png", name: "Moe Szyslak", email: "Moe.Szyslak@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Inactive", team: "Ad Account \u00b7 Local Sales West", title: "Coordinator, Client Services", region: "LATAM" },
  { id: "u019", avatar: "/avatars/photos/m14.png", name: "Apu Nahasapeemapetilon", email: "Apu.Nahasapeemapetilon@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "Sr. Manager, International Strategy", region: "ANZ" },
  { id: "u020", avatar: "/avatars/photos/m15.png", name: "Comic Book Guy", email: "Comic.BookGuy@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "Analyst, Financial Planning", region: "NA" },
  { id: "u021", avatar: "/avatars/photos/m16.png", name: "Chief Wiggum", email: "Chief.Wiggum@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "VP, Client Solutions", region: "NA" },
  { id: "u022", avatar: "/avatars/photos/f06.png", name: "Edna Krabappel", email: "Edna.Krabappel@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "Director, Planning & Activation", region: "NA" },
  { id: "u023", avatar: "/avatars/photos/m17.png", name: "Groundskeeper Willie", email: "Groundskeeper.Willie@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Lead, Campaign Trafficking", region: "EMEA" },
  { id: "u024", avatar: "/avatars/photos/m18.png", name: "Fat Tony", email: "Fat.Tony@disney.com", roles: ["Ad Account Analyst"], status: "Active", team: "Ad Account \u00b7 EMEA Programmatic", title: "SVP, Distribution Strategy", region: "NA" },
  { id: "u025", avatar: "/avatars/photos/m19.png", name: "Dr. Hibbert", email: "Julius.Hibbert@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Active", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Manager, Revenue Analytics", region: "NA" },
  { id: "u026", avatar: "/avatars/photos/m20.png", name: "Professor Frink", email: "Professor.Frink@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "Sr. Analyst, Programmatic Yield", region: "NA" },
  { id: "u027", avatar: "/avatars/photos/m21.png", name: "Barney Gumble", email: "Barney.Gumble@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Inactive", team: "Ad Account \u00b7 Local Sales West", title: "Coordinator, Campaign Delivery", region: "NA" },
  { id: "u028", avatar: "/avatars/photos/m22.png", name: "Sideshow Bob", email: "Sideshow.Bob@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "Director, Agency Development", region: "EMEA" },
  { id: "u029", avatar: "/avatars/photos/m23.png", name: "Kent Brockman", email: "Kent.Brockman@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "VP, Global Media Sales", region: "NA" },
  { id: "u030", avatar: "/avatars/photos/m24.png", name: "Otto Mann", email: "Otto.Mann@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Associate, Accounts Receivable", region: "LATAM" },
  { id: "u031", avatar: "/avatars/photos/m25.png", name: "Mayor Quimby", email: "Mayor.Quimby@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "SVP, Sales & Partnerships", region: "NA" },
  { id: "u032", avatar: "/avatars/photos/m26.png", name: "Hans Moleman", email: "Hans.Moleman@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Associate, Billing Support", region: "NA" },
  { id: "u033", avatar: "/avatars/photos/m27.png", name: "Gil Gunderson", email: "Gil.Gunderson@disney.com", roles: ["Ad Account Analyst"], status: "Inactive", team: "Ad Account \u00b7 EMEA Programmatic", title: "Coordinator, New Business", region: "NA" },
  { id: "u034", avatar: "/avatars/photos/m28.png", name: "Rainier Wolfcastle", email: "Rainier.Wolfcastle@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Active", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Director, Content Partnerships", region: "EMEA" },
  { id: "u035", avatar: "/avatars/photos/m29.png", name: "Troy McClure", email: "Troy.McClure@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "Manager, Cross-Platform Planning", region: "NA" },
  { id: "u036", avatar: "/avatars/photos/m30.png", name: "Disco Stu", email: "Disco.Stu@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Active", team: "Ad Account \u00b7 Local Sales West", title: "Analyst, Creative Ad Solutions", region: "LATAM" },
  { id: "u037", avatar: "/avatars/photos/m31.png", name: "Dr. Nick Riviera", email: "Nick.Riviera@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "Analyst, Revenue Reconciliation", region: "NA" },
  { id: "u038", avatar: "/avatars/photos/m32.png", name: "Kirk Van Houten", email: "Kirk.VanHouten@disney.com", roles: ["Organization Analyst"], status: "Inactive", team: "Organization", title: "Associate, Inventory Management", region: "NA" },
  { id: "u039", avatar: "/avatars/photos/f07.png", name: "Luann Van Houten", email: "Luann.VanHouten@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Manager, Client Relations", region: "ANZ" },
  { id: "u040", avatar: "/avatars/photos/f08.png", name: "Agnes Skinner", email: "Agnes.Skinner@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "Sr. Analyst, Financial Controls", region: "NA" },
  { id: "u041", avatar: "/avatars/photos/m43.png", name: "Snake Jailbird", email: "Snake.Jailbird@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Coordinator, Programmatic Deals", region: "NA" },
  { id: "u042", avatar: "/avatars/photos/m44.png", name: "Jimbo Jones", email: "Jimbo.Jones@disney.com", roles: ["Ad Account Analyst"], status: "Active", team: "Ad Account \u00b7 EMEA Programmatic", title: "Analyst, Ad Targeting", region: "NA" },
  { id: "u043", avatar: "/avatars/photos/m45.png", name: "Dolph Starbeam", email: "Dolph.Starbeam@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Inactive", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Associate, Campaign Strategy", region: "EMEA" },
  { id: "u044", avatar: "/avatars/photos/f09.png", name: "Sherri Mackleberry", email: "Sherri.Mackleberry@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "Sr. Planner, Audience Strategy", region: "NA" },
  { id: "u045", avatar: "/avatars/photos/f10.png", name: "Terri Mackleberry", email: "Terri.Mackleberry@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Active", team: "Ad Account \u00b7 Local Sales West", title: "Sr. Planner, Integrated Media", region: "NA" },
  { id: "u046", avatar: "/avatars/photos/m33.png", name: "Martin Prince", email: "Martin.Prince@disney.com", roles: ["Organization Admin"], status: "Active", team: "Organization", title: "Sr. Analyst, Data Governance", region: "NA" },
  { id: "u047", avatar: "/avatars/photos/m34.png", name: "Timothy Lovejoy", email: "Timothy.Lovejoy@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "Director, Strategic Accounts", region: "ANZ" },
  { id: "u048", avatar: "/avatars/photos/m35.png", name: "Cletus Spuckler", email: "Cletus.Spuckler@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Coordinator, Invoice Processing", region: "NA" },
  { id: "u049", avatar: "/avatars/photos/f11.png", name: "Cookie Kwan", email: "Cookie.Kwan@disney.com", roles: ["Ad Account Admin"], status: "Active", team: "Brand \u00b7 Sports", title: "Sr. Manager, Regional Sales", region: "ANZ" },
  { id: "u050", avatar: "/avatars/photos/f12.png", name: "Lindsey Naegle", email: "Lindsey.Naegle@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Director, Yield Strategy", region: "NA" },
  { id: "u051", avatar: "/avatars/photos/m36.png", name: "Lionel Hutz", email: "Lionel.Hutz@disney.com", roles: ["Ad Account Analyst"], status: "Active", team: "Ad Account \u00b7 EMEA Programmatic", title: "Manager, Business Development", region: "NA" },
  { id: "u052", avatar: "/avatars/photos/f13.png", name: "Helen Lovejoy", email: "Helen.Lovejoy@disney.com", roles: ["Organization Admin", "Ad Account Analyst"], status: "Active", team: "Organization \u00b7 Brand \u00b7 Hulu", title: "Sr. Planner, Agency Investment", region: "EMEA" },
  { id: "u053", avatar: "/avatars/photos/m37.png", name: "Artie Ziff", email: "Artie.Ziff@disney.com", roles: ["Organization Member", "Ad Account Buyer"], status: "Active", team: "Brand \u00b7 Marvel \u00b7 UK", title: "VP, Digital Revenue", region: "NA" },
  { id: "u054", avatar: "/avatars/photos/f14.png", name: "Ruth Powers", email: "Ruth.Powers@disney.com", roles: ["Ad Account Admin", "Organization Analyst"], status: "Active", team: "Ad Account \u00b7 Local Sales West", title: "Manager, Revenue Systems", region: "NA" },
  { id: "u055", avatar: "/avatars/photos/m38.png", name: "Herman Hermann", email: "Herman.Hermann@disney.com", roles: ["Organization Admin"], status: "Inactive", team: "Organization", title: "Analyst, Cost Allocation", region: "LATAM" },
  { id: "u056", avatar: "/avatars/photos/m39.png", name: "Wendell Borton", email: "Wendell.Borton@disney.com", roles: ["Organization Analyst"], status: "Active", team: "Organization", title: "Associate, Creative Operations", region: "NA" },
  { id: "u057", avatar: "/avatars/photos/m40.png", name: "Lyle Lanley", email: "Lyle.Lanley@disney.com", roles: ["Organization Member"], status: "Active", team: "Brand \u00b7 Entertainment", title: "Sr. Manager, Programmatic Sales", region: "NA" },
  { id: "u058", avatar: "/avatars/photos/m41.png", name: "Lewis Clark", email: "Lewis.Clark@disney.com", roles: ["Ad Account Admin"], status: "Inactive", team: "Brand \u00b7 Sports", title: "Analyst, Inventory Forecasting", region: "ANZ" },
  { id: "u059", avatar: "/avatars/photos/m42.png", name: "Kearney Zzyzwicz", email: "Kearney.Zzyzwicz@disney.com", roles: ["Ad Account Buyer"], status: "Active", team: "Ad Account \u00b7 North America", title: "Coordinator, Partner Relations", region: "EMEA" },
  { id: "u060", avatar: "/avatars/photos/f15.png", name: "Manjula Nahasapeemapetilon", email: "Manjula.Nahasapeemapetilon@disney.com", roles: ["Ad Account Analyst"], status: "Active", team: "Ad Account \u00b7 EMEA Programmatic", title: "Lead, Operations Support", region: "ANZ" }
];

var DCM_ORG_ROLE_NAMES = ["Organization Admin", "Organization Analyst", "Organization Member"];
var DCM_AD_ROLE_NAMES = ["Ad Account Admin", "Ad Account Buyer", "Ad Account Analyst"];

/** Demo dropdown lists for assignment fields (subset aligns with deriveAdAssignmentsForUser). */
var DCM_ASSIGNMENT_TEAMS = [
  "Entertainment",
  "Sports",
  "Marvel · UK",
  "Hulu",
  "Disney+",
  "ESPN",
  "Organization"
];
var DCM_ASSIGNMENT_AD_ACCOUNTS = [
  "North America",
  "EMEA Programmatic",
  "Local Sales West",
  "UK",
  "LATAM",
  "ANZ"
];

function hashUserId(id) {
  var n = 0;
  for (var hi = 0; hi < id.length; hi++) n = ((n << 5) - n + id.charCodeAt(hi)) | 0;
  return Math.abs(n);
}

function syntheticLastLogin(id) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var h = hashUserId(id);
  var d = 1 + (h % 27);
  var m = months[h % 12];
  var y = 2025 + (h % 2);
  var hh = 8 + (h % 12);
  var mm = h % 60;
  return m + " " + d + ", " + y + ", " + hh + ":" + (mm < 10 ? "0" : "") + mm + " AM";
}

function deriveAdAssignmentsForUser(u) {
  var tm = (u.team || "").trim();
  var teamVal = "Entertainment";
  if (tm.indexOf("Brand \u00b7") !== -1) {
    teamVal = tm.replace(/^[\s\S]*?Brand \u00b7\s*/, "").split("\u00b7")[0].trim();
  } else if (tm.indexOf("Marvel") !== -1) {
    teamVal = "Marvel · UK";
  }
  var acct = "North America";
  if (tm.indexOf("Ad Account \u00b7") !== -1) {
    acct = tm.replace(/^[\s\S]*?Ad Account \u00b7\s*/, "").trim();
  } else if (tm.indexOf("EMEA") !== -1) {
    acct = "EMEA Programmatic";
  } else if (tm.indexOf("Local Sales") !== -1) {
    acct = "Local Sales West";
  }
  var adFound = [];
  for (var ai = 0; ai < DCM_AD_ROLE_NAMES.length; ai++) {
    if (u.roles.indexOf(DCM_AD_ROLE_NAMES[ai]) !== -1) adFound.push(DCM_AD_ROLE_NAMES[ai]);
  }
  if (!adFound.length) return [];
  var out = [];
  for (var j = 0; j < adFound.length; j++) {
    out.push({
      adAccount: acct,
      team: teamVal,
      adRoleFull: adFound[j],
      assignmentStatus: u.status === "Inactive" ? "Inactive" : "Active"
    });
  }
  return out;
}

function summarizeAdAccountAccess(assignments) {
  if (!assignments || !assignments.length) return "\u2014";
  var parts = [];
  for (var i = 0; i < assignments.length; i++) {
    var a = assignments[i];
    var shortR = (a.adRoleFull || "").replace(/^Ad Account\s+/i, "");
    var tm = a.team != null ? a.team : a.brand;
    parts.push((a.adAccount || "") + " · " + (tm || "") + " · " + shortR);
  }
  return parts.join("; ");
}

/** Derives DCM table fields from legacy `roles` / `team` on each user row. */
function hydrateDcmUserDerived(arr) {
  for (var i = 0; i < arr.length; i++) {
    var u = arr[i];
    var orgR = "";
    for (var j = 0; j < DCM_ORG_ROLE_NAMES.length; j++) {
      if (u.roles.indexOf(DCM_ORG_ROLE_NAMES[j]) !== -1) {
        orgR = DCM_ORG_ROLE_NAMES[j];
        break;
      }
    }
    u.organizationRole = orgR;
    u.organization = u.organization || "Disney Advertising Sales";
    u.lastLogin = u.lastLogin || syntheticLastLogin(u.id);
    u.adAssignments = u.adAssignments && u.adAssignments.length ? u.adAssignments : deriveAdAssignmentsForUser(u);
    u.adAccountAccess = summarizeAdAccountAccess(u.adAssignments);
  }
}

hydrateDcmUserDerived(DATA);

var ORIGINAL_ORDER = DATA.slice();
var TOTAL_ITEMS = 60;
/* Session-added users (Add User flow) — same image for every new row until page refresh. */
var DEFAULT_ADD_USER_AVATAR = "/avatars/default-add-user.png";
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
var filters = { name: "", email: "", orgRole: "", status: "", adAccess: "" };
var filterSnapshot = null;
var SEARCH_FIELDS = ["name", "email", "organizationRole", "adAccountAccess", "lastLogin", "organization", "status"];
/* R&P search fields — mirrors SEARCH_FIELDS above; scoped columns use plain strings. */
var RP_SEARCH_FIELDS = ["role", "description", "status", "createdBy", "createDate", "dcmScope", "dcmAccessLevel", "appliesTo", "accessSummary"];
var activeTab = "users";

/* ═══ ROLES & PERMISSIONS DATA ═══
   DCM scoped roles: Organization vs Ad Account, access levels, applies-to text. */

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

function dcmAppliesToForScope(scope) {
  if (scope === "Organization") return "Organization-wide";
  if (scope === "Ad Account") return "Assigned ad accounts";
  return "";
}

function dcmAccessComboOptions(scope) {
  if (scope === "Organization") {
    return [
      { value: "Admin", label: "Admin" },
      { value: "Analyst", label: "Analyst" },
      { value: "Member", label: "Member" }
    ];
  }
  if (scope === "Ad Account") {
    return [
      { value: "Admin", label: "Admin" },
      { value: "Buyer", label: "Buyer" },
      { value: "Analyst", label: "Analyst" }
    ];
  }
  return [];
}

/**
 * DCM role source of truth (Create/Edit Role, R&P). Keys = Role Name.
 * Fields: scope, accessLevel, appliesTo, description, permissions[].
 */
var dcmRoleDefinitions = {
  "Organization Admin": {
    scope: "Organization",
    accessLevel: "Admin",
    appliesTo: "Organization-wide",
    description:
      "Manages users, roles, organization details, Brands, Ad Accounts, billing settings, campaigns, line items, Ads, reports, transactions, and invoices across the organization.",
    permissions: [
      "Manage organization information",
      "Invite users",
      "Manage user role assignments",
      "Manage Brands and Ad Accounts",
      "Manage payment methods and billing settings",
      "Manage campaigns, line items, Ads, and reports across all Ad Accounts",
      "View transactions and invoices",
      "Configure Ad Account status email notifications"
    ]
  },
  "Organization Analyst": {
    scope: "Organization",
    accessLevel: "Analyst",
    appliesTo: "Organization-wide",
    description:
      "Provides read-only visibility across organization and Ad Account information with reporting access.",
    permissions: [
      "View organization details",
      "View Ad Account users",
      "View Ad Account settings, billing settings, and payment method",
      "View campaigns, line items, and Ads",
      "Manage reports",
      "View transactions and invoices"
    ]
  },
  "Organization Member": {
    scope: "Organization",
    accessLevel: "Member",
    appliesTo: "Organization + assigned Ad Accounts",
    description:
      "Provides organization visibility and access to assigned Ad Accounts based on assigned Ad Account role.",
    permissions: [
      "View organization details",
      "Access assigned Ad Accounts",
      "Permissions depend on assigned Ad Account role"
    ]
  },
  "Ad Account Admin": {
    scope: "Ad Account",
    accessLevel: "Admin",
    appliesTo: "Assigned Ad Accounts only",
    description:
      "Manages users, role assignments, settings, campaigns, Ads, reports, transactions, and invoices within assigned Ad Accounts.",
    permissions: [
      "Invite users to assigned Ad Accounts",
      "View Ad Account users",
      "Manage user role assignments",
      "Manage Ad Account settings",
      "View billing settings and payment method",
      "Manage campaigns, line items, Ads, and reports",
      "View transactions and invoices"
    ]
  },
  "Ad Account Buyer": {
    scope: "Ad Account",
    accessLevel: "Buyer",
    appliesTo: "Assigned Ad Accounts only",
    description: "Manages campaigns, line items, Ads, and reports within assigned Ad Accounts.",
    permissions: [
      "View Ad Account users",
      "View Ad Account settings, billing settings, and payment method",
      "Manage campaigns, line items, Ads, and reports",
      "View transactions and invoices"
    ]
  },
  "Ad Account Analyst": {
    scope: "Ad Account",
    accessLevel: "Analyst",
    appliesTo: "Assigned Ad Accounts only",
    description: "Provides read-only visibility and reporting access within assigned Ad Accounts.",
    permissions: [
      "View Ad Account users",
      "View Ad Account settings, billing settings, and payment method",
      "View campaigns, line items, and Ads",
      "Manage reports",
      "View transactions and invoices"
    ]
  }
};

var DCM_COMPOSITE_TO_ROLE_NAME = {
  "Organization|Admin": "Organization Admin",
  "Organization|Analyst": "Organization Analyst",
  "Organization|Member": "Organization Member",
  "Ad Account|Admin": "Ad Account Admin",
  "Ad Account|Buyer": "Ad Account Buyer",
  "Ad Account|Analyst": "Ad Account Analyst"
};

function dcmCompositeKey(scope, accessLevel) {
  return (scope || "") + "|" + (accessLevel || "");
}

function dcmDefinitionForComposite(scope, accessLevel) {
  var roleName = DCM_COMPOSITE_TO_ROLE_NAME[dcmCompositeKey(scope, accessLevel)];
  return roleName ? dcmRoleDefinitions[roleName] : null;
}

function dcmPermissionsFromComposite(scope, accessLevel) {
  var def = dcmDefinitionForComposite(scope, accessLevel);
  if (def) return def.permissions.slice();
  if (!scope || !accessLevel) {
    return ["Select scope and access level to view permissions."];
  }
  return ["Permissions follow the selected scope and access level."];
}

function dcmAccessSummaryFromScopeLevel(scope, level) {
  var map = {
    "Organization|Admin": "Organization scope · Admin — full administration across the organization.",
    "Organization|Analyst": "Organization scope · Analyst — view broadly; reporting responsibilities.",
    "Organization|Member": "Organization scope · Member — org visibility; Ad Account access from assignments.",
    "Ad Account|Admin": "Ad Account scope · Admin — administer assigned accounts.",
    "Ad Account|Buyer": "Ad Account scope · Buyer — manage buying workflows within assignments.",
    "Ad Account|Analyst": "Ad Account scope · Analyst — analytics and reporting within assignments."
  };
  var k = (scope || "") + "|" + (level || "");
  return map[k] || ((scope || "") + " · " + (level || "") + " — scoped access.");
}

var ROLES_PERMISSIONS_DATA = [
  { id: "dc001", role: "Organization Admin", description: "Manages users, roles, and access across the organization.", status: "Standard", createdBy: "Alex Rivera", createDate: "03/01/2026", dcmScope: "Organization", dcmAccessLevel: "Admin", appliesTo: "Organization-wide", accessSummary: "Organization scope · Admin — full org admin capabilities (users, brands, ad accounts, billing, campaigns, reporting)." },
  { id: "dc002", role: "Organization Analyst", description: "Read-focused organization visibility with reporting responsibilities.", status: "Standard", createdBy: "Alex Rivera", createDate: "03/02/2026", dcmScope: "Organization", dcmAccessLevel: "Analyst", appliesTo: "Organization-wide", accessSummary: "Organization scope · Analyst — view org and ad account context; manage reports; view transactions and invoices." },
  { id: "dc003", role: "Organization Member", description: "Baseline organization visibility; Ad Account access follows assignments.", status: "Standard", createdBy: "Jordan Lee", createDate: "03/03/2026", dcmScope: "Organization", dcmAccessLevel: "Member", appliesTo: "Organization + assigned Ad Accounts", accessSummary: "Organization scope · Member — view organization details; Ad Account permissions come from assigned Ad Account roles." },
  { id: "dc004", role: "Ad Account Admin", description: "Administers users and settings within assigned ad accounts.", status: "Standard", createdBy: "Jordan Lee", createDate: "03/04/2026", dcmScope: "Ad Account", dcmAccessLevel: "Admin", appliesTo: "Assigned Ad Accounts only", accessSummary: "Ad Account scope · Admin — invite users, manage assignments and settings, campaigns and reporting; view billing activity." },
  { id: "dc005", role: "Ad Account Buyer", description: "Plans and activates campaigns within assigned ad accounts.", status: "Standard", createdBy: "Sam Chen", createDate: "03/05/2026", dcmScope: "Ad Account", dcmAccessLevel: "Buyer", appliesTo: "Assigned Ad Accounts only", accessSummary: "Ad Account scope · Buyer — view users and settings; manage campaigns, line items, ads, and reports; view transactions and invoices." },
  { id: "dc006", role: "Ad Account Analyst", description: "Analytics and reporting within assigned ad accounts.", status: "Standard", createdBy: "Sam Chen", createDate: "03/06/2026", dcmScope: "Ad Account", dcmAccessLevel: "Analyst", appliesTo: "Assigned Ad Accounts only", accessSummary: "Ad Account scope · Analyst — view users, settings, and delivery objects; manage reports; view transactions and invoices." }
];
var RP_ORIGINAL_ORDER = ROLES_PERMISSIONS_DATA.slice();

/** Organization roles for Users filter (same labels as Organization Role column). */
function buildOrgRoleFilterOptions() {
  var opts = [];
  for (var j = 0; j < DCM_ORG_ROLE_NAMES.length; j++) {
    opts.push({ value: DCM_ORG_ROLE_NAMES[j], label: DCM_ORG_ROLE_NAMES[j] });
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
  if (forceInitials) {
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
  return searchTerm || filters.name || filters.email || filters.orgRole ||
    filters.status || filters.adAccess;
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
  if (filters.orgRole) {
    var fo = filters.orgRole;
    result = result.filter(function (r) { return (r.organizationRole || "") === fo; });
  }
  if (filters.status) {
    var fs = filters.status;
    result = result.filter(function (r) { return r.status === fs; });
  }
  if (filters.adAccess) {
    var qa = filters.adAccess.toLowerCase();
    result = result.filter(function (r) {
      return ((r.adAccountAccess || "") + " " + (JSON.stringify(r.adAssignments || []))).toLowerCase().indexOf(qa) !== -1;
    });
  }
  if (searchTerm) {
    var q = searchTerm.toLowerCase();
    result = result.filter(function (row) {
      for (var i = 0; i < SEARCH_FIELDS.length; i++) {
        var sf = SEARCH_FIELDS[i];
        if ((row[sf] || "").toLowerCase().indexOf(q) !== -1) return true;
      }
      if ((row.organizationRole || "").toLowerCase().indexOf(q) !== -1) return true;
      if ((row.adAccountAccess || "").toLowerCase().indexOf(q) !== -1) return true;
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
  return '<span style="display:inline-flex;align-items:center;gap:6px;line-height:16px;vertical-align:middle;white-space:nowrap">' +
    icon + '<span>' + esc(status) + '</span></span>';
}

function renderTable() {
  var rows = getPageData();
  var tb = document.getElementById("tbody");
  if (rows.length === 0) {
    tb.innerHTML = '<tr><td colspan="6" class="empty-state">No results found</td></tr>';
    return;
  }
  var html = "";
  for (var i = 0; i < rows.length; i++) {
    var u = rows[i];
    var orgAttr = u.organizationRole || "";
    var aaSegs = (u.adAccountAccess && u.adAccountAccess !== "\u2014") ? u.adAccountAccess.split("; ").filter(function (x) { return String(x).trim(); }) : [];
    var aaAttr = aaSegs.join("|");
    var editHint = "Edit user " + u.name;
    html += '<tr data-id="' + esc(u.id) + '">' +
      '<td class="c-nm"><div class="name-cell">' + renderAvatarHtml(u, currentPage === 2 && !isSessionAddedUser(u)) +
        '<a class="name-link" href="#" data-user-id="' + esc(u.id) + '" title="' + esc(u.name) + '" aria-label="' + esc(editHint) + '">' + esc(u.name) + "</a></div></td>" +
      '<td class="c-em">' + esc(u.email) + '</td>' +
      '<td class="c-or" data-org-role="' + esc(orgAttr) + '"><span class="role-txt">' + esc(orgAttr || "\u2014") + '</span></td>' +
      '<td class="c-aa" data-access-parts="' + esc(aaAttr) + '"><span class="role-txt">' + esc(u.adAccountAccess || "\u2014") + '</span></td>' +
      '<td class="c-st">' + renderStatusHtml(u.status) + '</td>' +
      '<td class="c-ll">' + esc(u.lastLogin || "\u2014") + '</td>' +
      '</tr>';
  }
  tb.innerHTML = html;
  fitDcmUsersOverflowCells();
}

/* Width-responsive overflow on Organization Role + Ad Account Access columns. */
function fitDcmUsersOverflowCells() {
  var tbody = document.getElementById("tbody");
  if (!tbody) return;
  function fitCells(selector, attrName, joiner) {
    var cells = tbody.querySelectorAll(selector);
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var span = cell.querySelector(".role-txt");
      if (!span) continue;
      var raw = cell.getAttribute(attrName) || "";
      var parts = raw ? raw.split("|") : [];
      if (!parts.length) continue;
      cell.removeAttribute("title");
      span.innerHTML = esc(parts.join(joiner));
      if (cell.scrollWidth <= cell.clientWidth + 1) continue;
      var tooltip = parts.join("\n");
      for (var count = parts.length - 1; count >= 1; count--) {
        var shown = parts.slice(0, count);
        var extra = parts.length - count;
        span.innerHTML = esc(shown.join(joiner)) +
          ' <a href="#" class="role-extra" data-tooltip="' + esc(tooltip) +
          '">+' + extra + " assignment" + (extra > 1 ? "s" : "") + "</a>";
        if (cell.scrollWidth <= cell.clientWidth + 1) break;
      }
      cell.removeAttribute("title");
    }
  }
  fitCells("td.c-aa[data-access-parts]", "data-access-parts", "; ");
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

  renderUsersJumpDdMenu();
  renderUsersPageSizeDdMenu();
}

function applySort(key) {
  if (sortKey === key) {
    if (sortDir === "asc") sortDir = "desc";
    else if (sortDir === "desc") { sortDir = null; sortKey = null; }
  } else {
    sortKey = key;
    sortDir = "asc";
  }

  function sortVal(row) {
    if (!sortKey) return "";
    if (sortKey === "organizationRole") return (row.organizationRole || "").toLowerCase();
    if (sortKey === "adAccountAccess") return (row.adAccountAccess || "").toLowerCase();
    if (sortKey === "lastLogin") return (row.lastLogin || "").toLowerCase();
    if (sortKey === "role") return ((row.organizationRole || row.roles[0]) || "").toLowerCase();
    return (row[sortKey] || "").toLowerCase();
  }

  if (!sortKey) {
    DATA = ORIGINAL_ORDER.slice();
  } else {
    DATA.sort(function (a, b) {
      var va = sortVal(a);
      var vb = sortVal(b);
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
  function sortVal(row) {
    if (!sortKey) return "";
    if (sortKey === "organizationRole") return (row.organizationRole || "").toLowerCase();
    if (sortKey === "adAccountAccess") return (row.adAccountAccess || "").toLowerCase();
    if (sortKey === "lastLogin") return (row.lastLogin || "").toLowerCase();
    if (sortKey === "role") return ((row.organizationRole || row.roles[0]) || "").toLowerCase();
    return (row[sortKey] || "").toLowerCase();
  }
  if (!sortKey) {
    DATA = ORIGINAL_ORDER.slice();
  } else {
    DATA = ORIGINAL_ORDER.slice();
    DATA.sort(function (a, b) {
      var va = sortVal(a);
      var vb = sortVal(b);
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
         st  (Status, 100)  — header "Status" + sort icon ≈ 66px;
                              pill max ≈ 85px. 100 leaves pill air.
         rg  (Region, 80)   — 2–4 char codes ("NA", "EMEA").
         date(Create Date,120)— header "Create Date" ≈ 85px; body
                              "MM/DD/YYYY" ≈ 75px.
       Medium-content columns (short phrases / names):
         nm  (Name, 200)    — 48px avatar + gap + name text.
         tm  (Team, 140)    — team names can truncate gracefully
                              (e.g. "Ad Solutions & Innovation").
         by  (Created By,130)— user names ("Homer Simpson" ≈ 100px).
       Long-content columns (multi-item / long prose):
         em  (Email, 220)   — "first.last@disney.com" fits cleanly.
         rl  (Role, 220)    — one role + "+N role" chip fit at 220;
                              fitDcmUsersOverflowCells picks up from there.
         desc(Description,220)
         func(Functions,240)— keeps at least one app-group tag
                              visible alongside its (N) count button.

       Content that actually overflows a column at these floors falls
       back to the cell's CSS ellipsis + the truncation-gated tooltip
       (see getCellTruncationInfo), so nothing is ever lost — only
       visibly truncated when the column is too narrow to show it. */
    var MIN_WIDTHS = {
      "nm": 200, "em": 220, "or": 180, "aa": 240, "st": 100, "ll": 140,
      "role": 160, "desc": 200, "scope": 96, "summary": 200, "by": 130, "date": 120
    };
    var SKIP_KEYS = {};

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
          fitDcmUsersOverflowCells();
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
        if (isUsersTable) fitDcmUsersOverflowCells();
      }
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    }

    attach(document.getElementById("usersTable"));
    attach(document.getElementById("rpTable"));

    /* ResizeObserver on the Users Role column header — guarantees
       fitDcmUsersOverflowCells() re-runs whenever the column's rendered
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
      var roleHead = document.querySelector("#usersTable th.c-aa");
      if (roleHead) {
        var roScheduled = false;
        var ro = new ResizeObserver(function () {
          if (roScheduled) return;
          roScheduled = true;
          requestAnimationFrame(function () {
            roScheduled = false;
            fitDcmUsersOverflowCells();
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

      /* R&P six columns: fix Role + Created By widths; split slack across
         Description, Scope, and Access Summary proportionally. */
      if (table.id === "rpTable" && oldWidths.length >= 6 && rightIdx === 5) {
        var MIN_DESC = 160;
        var MIN_SCOPE = 96;
        var MIN_SUM = 140;
        var rolePx = oldWidths[0];
        var scope0 = oldWidths[1];
        var desc0 = oldWidths[2];
        var sum0 = oldWidths[3];
        var byPx = oldWidths[4];
        var rem = newTotalOthers - rolePx - byPx;
        var triple = scope0 + desc0 + sum0;
        if (triple <= 0) triple = 1;
        if (rem >= MIN_DESC + MIN_SCOPE + MIN_SUM) {
          var descPx = Math.max(MIN_DESC, Math.round(rem * desc0 / triple));
          var scopePx = Math.max(MIN_SCOPE, Math.round(rem * scope0 / triple));
          var sumPx = rem - descPx - scopePx;
          if (sumPx < MIN_SUM) {
            var deficit = MIN_SUM - sumPx;
            sumPx = MIN_SUM;
            if (descPx - deficit >= MIN_DESC) descPx -= deficit;
            else if (scopePx - deficit >= MIN_SCOPE) scopePx -= deficit;
          }
          if (descPx >= MIN_DESC && scopePx >= MIN_SCOPE && sumPx >= MIN_SUM) {
            cols[0].style.width = Math.max(1, Math.round(rolePx)) + "px";
            cols[1].style.width = scopePx + "px";
            cols[2].style.width = descPx + "px";
            cols[3].style.width = sumPx + "px";
            cols[4].style.width = Math.max(1, Math.round(byPx)) + "px";
            cols[5].style.width = targetRightPx + "px";
            return;
          }
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
      align(usersTable, addUsersBtn, "ll", "data-u-col");
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
       tab also re-runs fitDcmUsersOverflowCells() so the Role column
       overflow chip is re-evaluated against whatever width the Role
       column has now — prevents a stale "+N role" chip from lingering
       when the viewport was resized or columns were realigned while
       the Users table was hidden. */
    var tabBtns = document.querySelectorAll(".tab-btn");
    if (tabBtns[0]) tabBtns[0].addEventListener("click", function () {
      requestAnimationFrame(function () {
        alignUsers();
        fitDcmUsersOverflowCells();
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
        fitDcmUsersOverflowCells();
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

  /* ─── User menu (profile dropdown + theme switcher) ───
     Wires the avatar trigger, theme submenu, sub-item selection,
     outside-click/Escape close, and persists the chosen theme. */
  (function setupUserMenu() {
    var menu = document.getElementById("userMenu");
    var trigger = document.getElementById("userMenuTrigger");
    var pop = document.getElementById("userMenuPop");
    var themeRow = document.getElementById("userMenuTheme");
    var logoutRow = document.getElementById("userMenuLogout");
    if (!menu || !trigger || !pop || !themeRow) return;

    var subItems = pop.querySelectorAll(".user-menu-sub-item");
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
      for (var i = 0; i < subItems.length; i++) {
        var it = subItems[i];
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

    for (var i = 0; i < subItems.length; i++) {
      subItems[i].addEventListener("click", function (e) {
        e.stopPropagation();
        var val = this.getAttribute("data-theme");
        if (val) applyTheme(val);
        closeMenu();
      });
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
    if (td.classList.contains("c-ct")) return null; /* legacy hidden column */
    if (td.classList.contains("rp-func")) return null;
    /* Organization Role — full text from data-org-role when clipped. */
    if (td.classList.contains("c-or")) {
      if (td.scrollWidth <= td.clientWidth + 1) return null;
      var ora = td.getAttribute("data-org-role") || "";
      var roleFull = ora || td.textContent.trim();
      return { el: td, text: roleFull };
    }
    /* Ad Account Access — joined segments from data-access-parts when clipped. */
    if (td.classList.contains("c-aa")) {
      if (td.scrollWidth <= td.clientWidth + 1) return null;
      var ap = td.getAttribute("data-access-parts") || "";
      var aaFull = ap ? ap.split("|").join("; ") : td.textContent.trim();
      return { el: td, text: aaFull };
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
      '<div class="func-pop-access">Access level: ' + esc(detail.level) + '</div>';
    var model = APP_ACCESS_MODEL[app] || { groups: [] };
    for (var g = 0; g < model.groups.length; g++) {
      var group = model.groups[g];
      var actions = detail.groups[group] || [];
      if (!actions.length) continue;
      html += '<div class="func-pop-group-title">' + esc(group) + '</div><ul class="func-pop-list">';
      for (var i = 0; i < actions.length; i++) {
        html += '<li>' + esc(actions[i]) + '</li>';
      }
      html += '</ul>';
    }
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
    filterSnapshot = { name: filters.name, email: filters.email, orgRole: filters.orgRole, status: filters.status, adAccess: filters.adAccess };
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
    { id: "fltName", key: "name" },
    { id: "fltEmail", key: "email" },
    { id: "fltAdAccess", key: "adAccess" }
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

  var setRole   = initCombo("roleCombo",   buildOrgRoleFilterOptions(), "orgRole",   "All Organization Roles", filters, applyFiltersLive, "edl-combo-menu--iam-roles");
  var setStatus = initCombo("statusCombo", statusOptions, "status", "All Statuses");

  function syncDrawerToFilters() {
    document.getElementById("fltName").value = filters.name;
    document.getElementById("fltEmail").value = filters.email;
    document.getElementById("fltAdAccess").value = filters.adAccess;
    setRole(filters.orgRole);
    setStatus(filters.status);
    for (var i = 0; i < fltInputs.length; i++) updateClearBtn(document.getElementById(fltInputs[i].id));
  }

  /* ─── Apply: commit filters and close ─── */
  document.getElementById("fltApply").addEventListener("click", function () {
    filterSnapshot = null;
    closeFilter();
  });

  /* ─── Reset: clear all drawer filters ─── */
  document.getElementById("fltReset").addEventListener("click", function () {
    filters = { name: "", email: "", orgRole: "", status: "", adAccess: "" };
    filterSnapshot = null;
    syncDrawerToFilters();
    currentPage = 1;
    renderTable();
    renderPagination();
  });

  /* ═══ ROLES & PERMISSIONS FILTER DRAWER ═══
     Structural mirror of the Users drawer above — same .flt-* classes and
     .edl-combo component — with two behavioural differences:
       1. Fields are scoped to R&P columns (Role, Description, Scope,
          Created By, Create Date).
       2. Selections are DRAFTED in the drawer and only committed to the
          table on Apply (prompt spec: "results update after clicking
          Apply"). Cancel / Close / overlay-click all discard the draft. */

  /* Committed (applied) filter state — read by getRPFilteredData(). */
  var rpFilters = { role: "", description: "", dcmScope: "", createdBy: "", createDate: "" };
  /* Draft state — mutated live by drawer inputs / combos. */
  var rpDrawerDraft = { role: "", description: "", dcmScope: "", createdBy: "", createDate: "" };

  function buildRPScopeFilterOptions() {
    return [
      { value: "Organization", label: "Organization" },
      { value: "Ad Account", label: "Ad Account" }
    ];
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
  var setRPScope = initCombo("rpScopeCombo", buildRPScopeFilterOptions(), "dcmScope", "All scopes", rpDrawerDraft, function () {});
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
    rpDrawerDraft.dcmScope   = rpFilters.dcmScope;
    rpDrawerDraft.createdBy   = rpFilters.createdBy;
    rpDrawerDraft.createDate  = rpFilters.createDate;
    document.getElementById("rpFltRole").value = rpFilters.role;
    document.getElementById("rpFltDesc").value = rpFilters.description;
    document.getElementById("rpFltDate").value = rpFilters.createDate;
    setRPScope(rpFilters.dcmScope);
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
      dcmScope: rpDrawerDraft.dcmScope,
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
    rpFilters = { role: "", description: "", dcmScope: "", createdBy: "", createDate: "" };
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
      hdrTitle.textContent = "DCM Access Management";
      hdrSub.textContent = "Organization, Brand, and Ad Account scoped roles for Disney Campaign Manager";
    } else {
      tabBtns[1].classList.add("on");
      usersPanel.style.display = "none";
      rolesPanel.style.display = "";
      hdrTitle.textContent = "Roles and Permissions";
      hdrSub.textContent = "Define scoped roles for Organization, Brand, and Ad Account access";
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

    var auFirstName = document.getElementById("auFirstName");
    var auLastName = document.getElementById("auLastName");
    var auPreferredName = document.getElementById("auPreferredName");
    var auEmail = document.getElementById("auEmail");
    var auOrganization = document.getElementById("auOrganization");
    var auStatusValue = document.getElementById("auStatusValue");
    var auStatusSeg = document.getElementById("auStatusSeg");
    var auBasicCard = document.getElementById("auBasicCard");
    var auRolesCard = document.getElementById("auRolesCard");
    var auBasicSummary = document.getElementById("auBasicSummary");
    var auRolesSummary = document.getElementById("auRolesSummary");
    var auOrgRoleComboEl = document.getElementById("auOrgRoleCombo");
    var auAssignmentsBody = document.getElementById("auAssignmentsBody");
    var auAssignSubsection = document.getElementById("auAssignSubsection");
    var auAssignmentAdd = document.getElementById("auAssignmentAdd");
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
      assignments: []
    };

    var auComboState = {
      auOrgRolePick: ""
    };
    var setAuOrgRoleCombo = null;

    var auPageMode = "add";
    var auEditingUserId = null;
    var auEditBaselineJson = "";
    var auEditOriginalTitle = "";
    var auEditingDisplayName = "";
    var AU_PAGE_TITLE_ADD = "Add users";
    var AU_PAGE_SUB_ADD = "Capture user details and assign scoped Organization / Ad Account roles for Disney Campaign Manager";

    var TRASH_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
    var ADD_ASSIGN_SVG =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

    function buildRolesFromDcmForm(orgRole, assignments) {
      var out = [];
      if (orgRole) out.push(orgRole);
      for (var i = 0; i < assignments.length; i++) {
        var ar = assignments[i].adRoleFull;
        if (ar && out.indexOf(ar) === -1) out.push(ar);
      }
      return out;
    }

    function buildAuOrgRoleOptions() {
      var out = [];
      for (var i = 0; i < DCM_ORG_ROLE_NAMES.length; i++) {
        out.push({ value: DCM_ORG_ROLE_NAMES[i], label: DCM_ORG_ROLE_NAMES[i] });
      }
      return out;
    }

    function auAdRoleOptionsHtml(selected) {
      var h = "";
      for (var i = 0; i < DCM_AD_ROLE_NAMES.length; i++) {
        var nm = DCM_AD_ROLE_NAMES[i];
        h += '<option value="' + esc(nm) + '"' + (nm === selected ? " selected" : "") + ">" + esc(nm) + "</option>";
      }
      return h;
    }

    function auAssignmentSelectOptions(items, selected, placeholder) {
      var selNorm = selected != null ? String(selected) : "";
      var h =
        '<option value=""' +
        (!selNorm ? " selected" : "") +
        ">" +
        esc(placeholder) +
        "</option>";
      var found = false;
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var isSel = selNorm === it;
        if (isSel) found = true;
        h +=
          '<option value="' +
          esc(it) +
          '"' +
          (isSel ? " selected" : "") +
          ">" +
          esc(it) +
          "</option>";
      }
      if (selNorm && !found) {
        h +=
          '<option value="' +
          esc(selNorm) +
          '" selected>' +
          esc(selNorm) +
          "</option>";
      }
      return h;
    }

    function auAssignmentStatusSelectHtml(ix, st, inactive) {
      var dis = inactive ? " disabled" : "";
      return (
        '<div class="au-field">' +
        '<label class="au-label" for="au-asg-status-' +
        ix +
        '">Status</label>' +
        '<select id="au-asg-status-' +
        ix +
        '" class="au-input dc-au-assignment-input" data-au-asg-f="assignmentStatus"' +
        dis +
        ">" +
        '<option value="Active"' +
        (st === "Active" ? " selected" : "") +
        ">Active</option>" +
        '<option value="Inactive"' +
        (st === "Inactive" ? " selected" : "") +
        ">Inactive</option>" +
        "</select>" +
        "</div>"
      );
    }

    function closeAllAddUserCombos() {
      if (setAuOrgRoleCombo && setAuOrgRoleCombo.close) setAuOrgRoleCombo.close();
    }

    setAuOrgRoleCombo = initCombo(
      "auOrgRoleCombo",
      buildAuOrgRoleOptions(),
      "auOrgRolePick",
      "Select organization role",
      auComboState,
      function () {
        updateAuSummaries();
        refreshAuSaveDirty();
      },
      "edl-combo-menu--add-user"
    );

    window.__closeAllAddUserCombos = closeAllAddUserCombos;

    function addAuAssignmentCanProceed() {
      if (selectedStatus() === "Inactive") return false;
      if (auAssignmentAdd && auAssignmentAdd.disabled) return false;
      return true;
    }

    function addAuAssignmentRow() {
      if (!addAuAssignmentCanProceed()) return;
      auState.assignments.push({
        adAccount: "",
        team: "",
        adRoleFull: "Ad Account Buyer",
        assignmentStatus: "Active"
      });
      renderAuAssignmentsTable();
      refreshAuSaveDirty();
      updateAuSummaries();
    }

    function renderAuAssignmentsTable() {
      if (!auAssignmentsBody) return;
      var inactive = selectedStatus() === "Inactive";
      var rows = auState.assignments;
      if (!rows.length) {
        var addDis = inactive ? " disabled" : "";
        auAssignmentsBody.innerHTML =
          '<div class="au-assign-empty" role="region" aria-labelledby="au-assign-empty-title">' +
          '<h4 class="au-assign-empty-title" id="au-assign-empty-title">No ad account access assigned yet</h4>' +
          '<p class="au-assign-empty-desc">Assign users to specific Brands and Ad Accounts to grant access.</p>' +
          '<button type="button" class="btn-std au-assign-add-btn au-assign-add-action"' +
          addDis +
          ">" +
          ADD_ASSIGN_SVG +
          "Add assignment</button>" +
          "</div>";
        if (auAssignSubsection) auAssignSubsection.classList.add("is-empty");
        return;
      }
      if (auAssignSubsection) auAssignSubsection.classList.remove("is-empty");
      var html = "";
      for (var r = 0; r < rows.length; r++) {
        var a = rows[r];
        var arf = a.adRoleFull || DCM_AD_ROLE_NAMES[1];
        var st = a.assignmentStatus === "Inactive" ? "Inactive" : "Active";
        var brandOpts = auAssignmentSelectOptions(DCM_ASSIGNMENT_BRANDS, a.brand || "", "Select brand");
        var acctOpts = auAssignmentSelectOptions(DCM_ASSIGNMENT_AD_ACCOUNTS, a.adAccount || "", "Select ad account");
        html +=
          '<div class="dc-au-assignment" data-au-asg-ix="' +
          r +
          '" aria-labelledby="dc-au-asg-title-' +
          r +
          '">' +
          '<header class="dc-au-assignment-hd">' +
          '<h4 class="dc-au-assignment-title" id="dc-au-asg-title-' +
          r +
          '">Assignment ' +
          (r + 1) +
          "</h4>" +
          (!inactive
            ? '<div class="dc-au-assignment-actions">' +
              '<button type="button" class="cr-app-remove au-asg-remove dc-au-assignment-rm" data-au-asg-rm="' +
              r +
              '" aria-label="Remove assignment ' +
              (r + 1) +
              '">' +
              TRASH_SVG +
              "</button>" +
              "</div>"
            : "") +
          "</header>" +
          '<div class="au-grid dc-au-assignment-grid">' +
          '<div class="au-field">' +
          '<label class="au-label" for="au-asg-brand-' +
          r +
          '">Brand</label>' +
          '<select id="au-asg-brand-' +
          r +
          '" class="au-input" data-au-asg-f="brand"' +
          (inactive ? " disabled" : "") +
          ">" +
          brandOpts +
          "</select>" +
          "</div>" +
          '<div class="au-field">' +
          '<label class="au-label" for="au-asg-adacct-' +
          r +
          '">Ad Account</label>' +
          '<select id="au-asg-adacct-' +
          r +
          '" class="au-input" data-au-asg-f="adAccount"' +
          (inactive ? " disabled" : "") +
          ">" +
          acctOpts +
          "</select>" +
          "</div>" +
          '<div class="au-field">' +
          '<label class="au-label" for="au-asg-role-' +
          r +
          '">Ad Account Role</label>' +
          '<select id="au-asg-role-' +
          r +
          '" class="au-input" data-au-asg-f="adRoleFull"' +
          (inactive ? " disabled" : "") +
          ">" +
          auAdRoleOptionsHtml(arf) +
          "</select>" +
          "</div>" +
          auAssignmentStatusSelectHtml(r, st, inactive) +
          "</div>" +
          "</div>";
      }
      auAssignmentsBody.innerHTML = html;
    }

    function syncAuAssignmentChrome() {
      var inactive = selectedStatus() === "Inactive";
      if (auOrgRoleComboEl) auOrgRoleComboEl.classList.toggle("is-au-roles-locked", inactive);
      if (setAuOrgRoleCombo && setAuOrgRoleCombo.setDisabled) setAuOrgRoleCombo.setDisabled(inactive);
      if (auAssignmentAdd) auAssignmentAdd.disabled = inactive;
      renderAuAssignmentsTable();
    }

    function setAUStatus(value) {
      var next = value === "Inactive" ? "Inactive" : "Active";
      if (auStatusValue) auStatusValue.value = next;
      if (!auStatusSeg) return;
      var btns = auStatusSeg.querySelectorAll("[data-au-status]");
      for (var i = 0; i < btns.length; i++) {
        var on = btns[i].getAttribute("data-au-status") === next;
        btns[i].classList.toggle("is-selected", on);
        btns[i].setAttribute("aria-pressed", on ? "true" : "false");
      }
      updateAuSummaries();
      syncAuAssignmentChrome();
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
      auState.assignments = [];
      auComboState.auOrgRolePick = "";
      if (setAuOrgRoleCombo) setAuOrgRoleCombo("");
      setAUStatus("Inactive");
      syncAuAssignmentChrome();
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
      auState.assignments = [];
      auFirstName.value = "";
      auLastName.value = "";
      auPreferredName.value = "";
      auEmail.value = "";
      if (auOrganization) auOrganization.value = "";
      auComboState.auOrgRolePick = "";
      if (setAuOrgRoleCombo) setAuOrgRoleCombo("");
      setAUStatus("Active");
      renderAuAssignmentsTable();
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
      return "DCM User";
    }

    function serializeAuFormState() {
      return JSON.stringify({
        first: auFirstName ? auFirstName.value.trim() : "",
        last: auLastName ? auLastName.value.trim() : "",
        preferred: auPreferredName ? auPreferredName.value.trim() : "",
        email: auEmail ? auEmail.value.trim() : "",
        organization: auOrganization ? auOrganization.value.trim() : "",
        status: auStatusValue ? auStatusValue.value : "Active",
        orgRole: auComboState.auOrgRolePick || "",
        assignments: auState.assignments.slice(),
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
      if (auPageTitle) auPageTitle.textContent = auPageMode === "edit" ? "Edit User" : AU_PAGE_TITLE_ADD;
      if (auPageSubtitle) {
        auPageSubtitle.textContent = auPageMode === "edit"
          ? ("Manage user details and access for " + (auEditingDisplayName || "this user"))
          : AU_PAGE_SUB_ADD;
      }
      if (auRemoveUser) auRemoveUser.hidden = auPageMode !== "edit";
      if (auSave) auSave.textContent = auPageMode === "edit" ? "Save User" : "Add User";
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
      if (auPreferredName) auPreferredName.value = preferredN;
      if (auEmail) auEmail.value = user.email || "";
      if (auOrganization) auOrganization.value = user.organization || "Disney Advertising Sales";
      auComboState.auOrgRolePick = user.organizationRole || "";
      if (setAuOrgRoleCombo) setAuOrgRoleCombo(user.organizationRole || "");
      setAUStatus(user.status === "Inactive" ? "Inactive" : "Active");
      auState.assignments = [];
      var srcAsg = user.adAssignments && user.adAssignments.length ? user.adAssignments : deriveAdAssignmentsForUser(user);
      for (var cj = 0; cj < srcAsg.length; cj++) {
        auState.assignments.push({
          adAccount: srcAsg[cj].adAccount || "",
          team:
            srcAsg[cj].team != null && String(srcAsg[cj].team).length
              ? srcAsg[cj].team
              : srcAsg[cj].brand || "",
          adRoleFull: srcAsg[cj].adRoleFull || DCM_AD_ROLE_NAMES[1],
          assignmentStatus: srcAsg[cj].assignmentStatus === "Inactive" ? "Inactive" : "Active"
        });
      }
      renderAuAssignmentsTable();
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
        auRemoveUserBody.textContent = "This user will be removed from Disney Campaign Manager and their assigned roles will no longer apply. This action cannot be undone in this prototype session.";
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
        body: removedName + " has been removed from Disney Campaign Manager."
      });
    }

    function handleSaveEditUser() {
      if (auPageMode !== "edit" || !auEditingUserId) return;
      if (!isAuFormDirty()) return;
      var first = auFirstName.value.trim();
      var last = auLastName.value.trim();
      var email = auEmail.value.trim();
      var orgName = auOrganization ? auOrganization.value.trim() : "";
      if (!first || !last || !email || !orgName) {
        showEdlToast({
          type: "warning",
          title: "Required fields missing",
          body: "First name, last name, email, and organization are required."
        });
        return;
      }
      if (!dcmValidateUserAccess()) return;
      var rec = findUserInOriginalById(auEditingUserId);
      if (!rec) return;
      var assignments = selectedStatus() === "Inactive" ? [] : JSON.parse(JSON.stringify(auState.assignments));
      rec.name = first + " " + last;
      rec.email = email;
      rec.organization = orgName;
      rec.organizationRole = auComboState.auOrgRolePick || "";
      rec.adAssignments = assignments;
      rec.roles = selectedStatus() === "Inactive" ? [] : buildRolesFromDcmForm(rec.organizationRole, assignments);
      rec.status = selectedStatus();
      rec.adAccountAccess = summarizeAdAccountAccess(assignments);
      rec.team = assignments.length
        ? ((assignments[0].team != null && assignments[0].team !== "" ? assignments[0].team : assignments[0].brand || "") +
            " \u00b7 " +
            (assignments[0].adAccount || ""))
        : "Unassigned";
      rec.region = rec.region || "NA";
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

    function dcmValidateUserAccess() {
      var org = auComboState.auOrgRolePick || "";
      if (!org) {
        showEdlToast({
          type: "warning",
          title: "Organization role required",
          body: "Select an organization role before saving."
        });
        return false;
      }
      if (selectedStatus() === "Inactive") return true;
      if (org === "Organization Member" && auState.assignments.length === 0) {
        showEdlToast({
          type: "warning",
          title: "Ad Account assignments required",
          body: "Organization Members need at least one Ad Account assignment."
        });
        return false;
      }
      return true;
    }

    function auBuildBasicSummary() {
      var parts = [];
      var fn = auFirstName ? auFirstName.value.trim() : "";
      var ln = auLastName ? auLastName.value.trim() : "";
      var nm = (fn + " " + ln).trim();
      var em = auEmail ? auEmail.value.trim() : "";
      if (nm) parts.push(nm);
      else if (em) parts.push(em);
      var org = auOrganization ? auOrganization.value.trim() : "";
      if (org && parts.length < 6) parts.push(org);
      var st = auStatusValue ? auStatusValue.value : "";
      if (st && parts.length < 6) parts.push(st);
      return parts.join(" \u00b7 ");
    }

    function auBuildRolesSummary() {
      var org = auComboState.auOrgRolePick || "";
      var n = auState.assignments.length;
      if (!org && !n) return "";
      var bits = [];
      if (org) bits.push(org);
      if (n) bits.push(n + " Ad Account assignment" + (n > 1 ? "s" : ""));
      return bits.join(" \u00b7 ");
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


    function selectedStatus() {
      return auStatusValue && auStatusValue.value === "Inactive" ? "Inactive" : "Active";
    }

    function handleSaveUser() {
      if (auPageMode === "edit" && auEditingUserId) {
        handleSaveEditUser();
        return;
      }
      var first = auFirstName.value.trim();
      var last = auLastName.value.trim();
      var email = auEmail.value.trim();
      var orgName = auOrganization ? auOrganization.value.trim() : "";
      if (!first || !last || !email || !orgName) {
        showEdlToast({
          type: "warning",
          title: "Required fields missing",
          body: "First name, last name, email, and organization are required."
        });
        return;
      }
      if (!dcmValidateUserAccess()) return;
      var assignments = selectedStatus() === "Inactive" ? [] : JSON.parse(JSON.stringify(auState.assignments));
      var orgRole = auComboState.auOrgRolePick || "";
      var newUser = {
        id: "u_local_" + Date.now(),
        avatar: DEFAULT_ADD_USER_AVATAR,
        name: first + " " + last,
        email: email,
        organization: orgName,
        organizationRole: orgRole,
        adAssignments: assignments,
        roles: selectedStatus() === "Inactive" ? [] : buildRolesFromDcmForm(orgRole, assignments),
        status: selectedStatus(),
        team: assignments.length
          ? ((assignments[0].team != null && assignments[0].team !== "" ? assignments[0].team : assignments[0].brand || "") +
              " \u00b7 " +
              (assignments[0].adAccount || ""))
          : "Unassigned",
        title: auPreferredName.value.trim() ? ("Preferred: " + auPreferredName.value.trim()) : "DCM User",
        region: "NA"
      };
      hydrateDcmUserDerived([newUser]);
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

    if (auAssignmentsBody) {
      auAssignmentsBody.addEventListener("change", function (e) {
        var el = e.target.closest("[data-au-asg-f]");
        if (!el) return;
        var row = el.closest("[data-au-asg-ix]");
        if (!row) return;
        var ix = parseInt(row.getAttribute("data-au-asg-ix"), 10);
        if (!auState.assignments[ix]) return;
        auState.assignments[ix][el.getAttribute("data-au-asg-f")] = el.value;
        refreshAuSaveDirty();
        updateAuSummaries();
      });
      auAssignmentsBody.addEventListener("click", function (e) {
        var addAct = e.target.closest(".au-assign-add-action");
        if (addAct) {
          e.preventDefault();
          addAuAssignmentRow();
          return;
        }
        var rm = e.target.closest("[data-au-asg-rm]");
        if (!rm) return;
        e.preventDefault();
        var ix = parseInt(rm.getAttribute("data-au-asg-rm"), 10);
        auState.assignments.splice(ix, 1);
        renderAuAssignmentsTable();
        refreshAuSaveDirty();
        updateAuSummaries();
      });
    }
    if (auAssignmentAdd) {
      auAssignmentAdd.addEventListener("click", function () {
        addAuAssignmentRow();
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

    var auSummaryInputs = [auFirstName, auLastName, auPreferredName, auEmail, auOrganization];
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

  /* R&P table: Scope + Access level columns (DCM scoped access). */

  function getRPFilteredData() {
    var result = ROLES_PERMISSIONS_DATA;
    if (rpSearchTerm) {
      /* Case-insensitive substring match across string columns (RP_SEARCH_FIELDS). */
      var q = rpSearchTerm.toLowerCase();
      result = result.filter(function (row) {
        for (var i = 0; i < RP_SEARCH_FIELDS.length; i++) {
          if ((row[RP_SEARCH_FIELDS[i]] || "").toLowerCase().indexOf(q) !== -1) return true;
        }
        return false;
      });
    }
    /* Drawer filters — AND-combined with each other and with the search. */
    if (typeof rpFilters !== "undefined") {
      if (rpFilters.role) {
        var qRole = rpFilters.role.toLowerCase();
        result = result.filter(function (r) { return r.role.toLowerCase().indexOf(qRole) !== -1; });
      }
      if (rpFilters.description) {
        var qDesc = rpFilters.description.toLowerCase();
        result = result.filter(function (r) { return r.description.toLowerCase().indexOf(qDesc) !== -1; });
      }
      if (rpFilters.dcmScope) {
        result = result.filter(function (r) { return r.dcmScope === rpFilters.dcmScope; });
      }
      if (rpFilters.createdBy) {
        result = result.filter(function (r) { return r.createdBy === rpFilters.createdBy; });
      }
      if (rpFilters.createDate) {
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
      tb.innerHTML = '<tr><td colspan="6" class="empty-state">No results found</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var roleCell = '<a class="rp-role-link" href="#" data-role-edit="' + esc(r.id) + '">' + esc(r.role) + '</a>';
      html += '<tr data-id="' + esc(r.id) + '">' +
        '<td class="rp-role" title="' + esc(r.role) + '">' + roleCell + '</td>' +
        '<td class="rp-func"><span class="rp-func-text">' + esc(r.dcmScope || "") + "</span></td>" +
        '<td class="rp-desc" title="' + esc(r.description) + '">' + esc(r.description) + '</td>' +
        '<td class="rp-sum" title="' + esc(r.accessSummary || "") + '">' + esc(r.accessSummary || "") + "</td>" +
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
        var va = (a[rpSortKey] || "").toLowerCase();
        var vb = (b[rpSortKey] || "").toLowerCase();
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

  /* ═══ CREATE ROLE PAGE (DCM scoped access) ═══ */
  var crPage = document.getElementById("createRolePage");
  if (crPage) {
    var crRoleName = document.getElementById("crRoleName");
    var crSaveBtn = document.getElementById("crSave");
    var crBasicSummary = document.getElementById("crBasicSummary");
    var crFuncsSummary = document.getElementById("crFuncsSummary");
    var crFunctionsTitle = document.getElementById("crFunctionsTitle");
    var crAppliesToText = document.getElementById("crAppliesToText");
    var crTitleEl = crPage.querySelector(".cr-title");
    var mainPage = document.querySelector(".page");
    var crEditingRecord = null;
    var crRemoveBtn = document.getElementById("crRemove");
    var crPermissionSummaryEl = document.getElementById("crPermissionSummary");

    var crDcmDraft = { dcmScope: "", dcmAccessLevel: "", appliesToLabel: "" };
    var crApplyingPreset = false;

    var CR_SCOPE_OPTIONS = [
      { value: "Organization", label: "Organization" },
      { value: "Ad Account", label: "Ad Account" }
    ];

    function renderCrPermissionBullets() {
      if (!crPermissionSummaryEl) return;
      var bullets = dcmPermissionsFromComposite(crDcmDraft.dcmScope, crDcmDraft.dcmAccessLevel);
      var html = "";
      for (var bi = 0; bi < bullets.length; bi++) {
        html += "<li>" + esc(bullets[bi]) + "</li>";
      }
      crPermissionSummaryEl.innerHTML = html;
    }

    function applyCanonicalRoleFromName() {
      var t = crRoleName.value.trim();
      var preset = dcmRoleDefinitions[t];
      if (!preset) {
        crDcmDraft.appliesToLabel = "";
        syncRoleFieldsFromScopeAccess();
        return;
      }
      crApplyingPreset = true;
      crDcmDraft.appliesToLabel = preset.appliesTo;
      crDcmDraft.dcmScope = preset.scope;
      crDcmDraft.dcmAccessLevel = preset.accessLevel;
      setCrScope(preset.scope);
      syncCrAccessOptionsFromScope();
      setCrAccess(preset.accessLevel);
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = preset.description;
      crApplyingPreset = false;
      updateCrAppliesHint();
      updateCrSummaries();
      validateCreateRole();
    }

    /** Applies applies-to, description (when composite matches), and permission bullets from dcmRoleDefinitions. */
    function syncRoleFieldsFromScopeAccess() {
      var def = dcmDefinitionForComposite(crDcmDraft.dcmScope, crDcmDraft.dcmAccessLevel);
      var desc = document.getElementById("crDescription");
      var rn = crRoleName.value.trim();
      var compositeName = DCM_COMPOSITE_TO_ROLE_NAME[dcmCompositeKey(crDcmDraft.dcmScope, crDcmDraft.dcmAccessLevel)];
      if (def) {
        crDcmDraft.appliesToLabel = def.appliesTo;
        if (desc && !crApplyingPreset) {
          if (!rn || rn === compositeName) desc.value = def.description;
        }
      } else {
        crDcmDraft.appliesToLabel = "";
      }
      updateCrAppliesHint();
      validateCreateRole();
      updateCrSummaries();
    }

    function syncCrAccessOptionsFromScope() {
      if (!crDcmDraft.dcmScope) {
        setCrAccess.setOptions([{ value: "__need_scope__", label: "Select scope first" }]);
        setCrAccess.setDisabled(true);
        setCrAccess("");
        return;
      }
      setCrAccess.setDisabled(false);
      var opts = dcmAccessComboOptions(crDcmDraft.dcmScope);
      setCrAccess.setOptions(opts);
    }

    function updateCrAppliesHint() {
      if (!crAppliesToText) return;
      if (crDcmDraft.appliesToLabel) {
        crAppliesToText.textContent = crDcmDraft.appliesToLabel;
        return;
      }
      var t = dcmAppliesToForScope(crDcmDraft.dcmScope);
      crAppliesToText.textContent = t || "\u2014";
    }

    var setCrScope = initCombo("crScopeCombo", CR_SCOPE_OPTIONS, "dcmScope", "Select scope", crDcmDraft, function () {
      syncCrAccessOptionsFromScope();
      syncRoleFieldsFromScopeAccess();
    });

    var setCrAccess = initCombo("crAccessCombo", [], "dcmAccessLevel", "Select access level", crDcmDraft, function () {
      syncRoleFieldsFromScopeAccess();
    });

    var crInitialState = "";

    function snapshotCrState() {
      var descEl = document.getElementById("crDescription");
      return JSON.stringify({
        name: crRoleName.value,
        desc: descEl ? descEl.value : "",
        dcmScope: crDcmDraft.dcmScope,
        dcmAccessLevel: crDcmDraft.dcmAccessLevel
      });
    }

    function captureCrInitialState() {
      crInitialState = snapshotCrState();
      validateCreateRole();
    }

    function isCreateRoleValid() {
      var nameOk = !!(crRoleName.value && crRoleName.value.trim());
      return nameOk && !!crDcmDraft.dcmScope && !!crDcmDraft.dcmAccessLevel;
    }

    function validateCreateRole() {
      var dirty = (snapshotCrState() !== crInitialState);
      crSaveBtn.disabled = !(dirty && isCreateRoleValid());
    }

    function crBuildBasicSummary() {
      var name = crRoleName.value.trim();
      var parts = [];
      if (name) parts.push(name);
      if (crDcmDraft.dcmScope) parts.push(crDcmDraft.dcmScope);
      var descEl = document.getElementById("crDescription");
      var d = descEl ? descEl.value.trim() : "";
      if (d) {
        var short = d.length > 40 ? d.slice(0, 37) + "\u2026" : d;
        parts.push(short);
      }
      return parts.join(" \u2022 ");
    }

    function crBuildFuncsSummary() {
      if (!crDcmDraft.dcmScope || !crDcmDraft.dcmAccessLevel) return "";
      return crDcmDraft.dcmScope + " \u00b7 " + crDcmDraft.dcmAccessLevel;
    }

    function updateCrSummaries() {
      if (crBasicSummary) crBasicSummary.textContent = crBuildBasicSummary();
      if (crFuncsSummary) crFuncsSummary.textContent = crBuildFuncsSummary();
      if (crFunctionsTitle) crFunctionsTitle.textContent = "Role configuration";
      renderCrPermissionBullets();
    }

    function setRemoveRoleVisible(visible) {
      if (!crRemoveBtn) return;
      if (visible) crRemoveBtn.removeAttribute("hidden");
      else crRemoveBtn.setAttribute("hidden", "");
    }

    function resetCreateRole() {
      crRoleName.value = "";
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = "";
      crDcmDraft.dcmScope = "";
      crDcmDraft.dcmAccessLevel = "";
      crDcmDraft.appliesToLabel = "";
      setCrScope("");
      syncCrAccessOptionsFromScope();
      syncRoleFieldsFromScopeAccess();
      var cards = crPage.querySelectorAll(".cr-card");
      for (var cc = 0; cc < cards.length; cc++) {
        cards[cc].classList.remove("collapsed");
        var hdr = cards[cc].querySelector(".cr-section-header[data-cr-toggle]");
        if (hdr) hdr.setAttribute("aria-expanded", "true");
      }
      captureCrInitialState();
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

    function showEditRole(record) {
      if (!record) return;
      showCreateRole();
      if (crTitleEl) crTitleEl.textContent = "Edit Role";
      crEditingRecord = record;
      setRemoveRoleVisible(true);
      var rn = (record.role || "").trim();
      var def = dcmRoleDefinitions[rn];
      crRoleName.value = record.role || "";
      var desc = document.getElementById("crDescription");
      if (def) {
        crDcmDraft.dcmScope = def.scope;
        crDcmDraft.dcmAccessLevel = def.accessLevel;
        crDcmDraft.appliesToLabel = def.appliesTo;
        if (desc) desc.value = def.description;
      } else {
        crDcmDraft.dcmScope = record.dcmScope || "";
        crDcmDraft.dcmAccessLevel = record.dcmAccessLevel || "";
        crDcmDraft.appliesToLabel = record.appliesTo || "";
        if (desc) desc.value = (record.description || "").replace(/\.$/, "");
      }
      crApplyingPreset = true;
      setCrScope(crDcmDraft.dcmScope);
      syncCrAccessOptionsFromScope();
      setCrAccess(crDcmDraft.dcmAccessLevel);
      crApplyingPreset = false;
      syncRoleFieldsFromScopeAccess();
      captureCrInitialState();
    }

    crRoleName.addEventListener("input", function () {
      applyCanonicalRoleFromName();
    });

    var crDescriptionEl = document.getElementById("crDescription");
    if (crDescriptionEl) {
      crDescriptionEl.addEventListener("input", function () {
        validateCreateRole();
        updateCrSummaries();
      });
    }

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

    var crBackBtn = document.getElementById("crBack");
    var crCancelBtn = document.getElementById("crCancel");
    if (crBackBtn) crBackBtn.addEventListener("click", hideCreateRole);
    if (crCancelBtn) crCancelBtn.addEventListener("click", hideCreateRole);

    var CR_CURRENT_USER = "Marge Simpson";

    function crTodayString() {
      var d = new Date();
      function pad(n) { return (n < 10 ? "0" : "") + n; }
      return pad(d.getMonth() + 1) + "/" + pad(d.getDate()) + "/" + d.getFullYear();
    }

    function crCollectStatus() {
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
      var status = crCollectStatus();
      var applies =
        crDcmDraft.appliesToLabel && String(crDcmDraft.appliesToLabel).trim()
          ? String(crDcmDraft.appliesToLabel).trim()
          : dcmAppliesToForScope(crDcmDraft.dcmScope);
      var accessSummary = dcmAccessSummaryFromScopeLevel(crDcmDraft.dcmScope, crDcmDraft.dcmAccessLevel);

      if (crEditingRecord) {
        crEditingRecord.role = name;
        crEditingRecord.description = description;
        crEditingRecord.dcmScope = crDcmDraft.dcmScope;
        crEditingRecord.dcmAccessLevel = crDcmDraft.dcmAccessLevel;
        crEditingRecord.appliesTo = applies;
        crEditingRecord.status = status;
        crEditingRecord.accessSummary = accessSummary;
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
        status: status,
        dcmScope: crDcmDraft.dcmScope,
        dcmAccessLevel: crDcmDraft.dcmAccessLevel,
        appliesTo: applies,
        accessSummary: accessSummary,
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
      if (crConfirmBackdrop && !crConfirmBackdrop.hasAttribute("hidden")) {
        closeRemoveConfirm();
      }
    });

    var createRoleBtns = document.querySelectorAll("#rolesPanel .btn-ghost");
    for (var cri = 0; cri < createRoleBtns.length; cri++) {
      if (createRoleBtns[cri].textContent.trim().indexOf("Create Role") !== -1) {
        createRoleBtns[cri].addEventListener("click", function (e) {
          e.preventDefault();
          showCreateRole();
        });
      }
    }

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
