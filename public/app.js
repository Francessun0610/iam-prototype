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
  { id: "r003", role: "Sales Planner", description: "Create and manage sales plans and proposals within the planning workflow.", functions: [{ name: "Core Planning", count: 5 }], status: "Regional", createdBy: "Kent Brockman", createDate: "01/20/2026" },
  { id: "r004", role: "Media Strategy Director", description: "Define and oversee media investment strategy across linear and digital platforms.", functions: [{ name: "Core Planning", count: 6 }, { name: "TOM", count: 2 }], status: "Regional", createdBy: "Homer Simpson", createDate: "01/20/2026" },
  { id: "r005", role: "Account Executive", description: "Manage client accounts and execute sales orders and deal negotiations.", functions: [{ name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Kent Brockman", createDate: "02/03/2026" },
  { id: "r006", role: "Account Manager", description: "Oversee client account relationships and manage account-level configurations.", functions: [{ name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Kent Brockman", createDate: "02/03/2026" },
  { id: "r007", role: "Client Partnerships Manager", description: "Manage strategic client partnerships and coordinate cross-functional planning.", functions: [{ name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/10/2026" },
  { id: "r008", role: "Campaign Manager", description: "Plan, launch, and monitor advertising campaigns across platforms.", functions: [{ name: "Core Planning", count: 6 }, { name: "TOM", count: 2 }], status: "Regional", createdBy: "Homer Simpson", createDate: "02/10/2026" },
  { id: "r009", role: "Ad Ops Specialist", description: "Execute ad trafficking, campaign setup, and creative asset management.", functions: [{ name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/18/2026" },
  { id: "r010", role: "Programmatic Specialist", description: "Manage programmatic deal setup, automated transactions, and bid optimization.", functions: [{ name: "Core Planning", count: 2 }], status: "Regional", createdBy: "Artie Ziff", createDate: "02/18/2026" },
  { id: "r011", role: "Inventory Analyst", description: "Monitor and analyze ad inventory availability, utilization, and capacity.", functions: [{ name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Timothy Lovejoy", createDate: "02/25/2026" },
  { id: "r012", role: "Yield Manager", description: "Optimize ad inventory pricing, yield, and sell-through rates.", functions: [{ name: "Core Planning", count: 3 }], status: "Regional", createdBy: "Artie Ziff", createDate: "02/25/2026" },
  { id: "r013", role: "Billing Operations Specialist", description: "Process invoices, manage billing workflows, and reconcile payment records.", functions: [{ name: "Core Planning", count: 2 }], status: "Sensitive", createdBy: "Homer Simpson", createDate: "03/05/2026" },
  { id: "r014", role: "Finance Analyst", description: "Analyze financial performance, revenue forecasting, and reporting for ad sales.", functions: [{ name: "Core Planning", count: 2 }], status: "Sensitive", createdBy: "Kent Brockman", createDate: "03/05/2026" },
  { id: "r015", role: "Revenue Operations Analyst", description: "Track revenue performance, pipeline reporting, and operational metrics.", functions: [{ name: "Core Planning", count: 3 }], status: "Sensitive", createdBy: "Artie Ziff", createDate: "03/12/2026" }
];
var RP_ORIGINAL_ORDER = ROLES_PERMISSIONS_DATA.slice();

/* ═══ FUNCTIONS POPOVER DATA ═══
   FUNCTION_REGISTRY  : authoritative per-app function catalogue (system keys).
   ROLE_FUNCTION_MAP  : per-role explicit assignment; count must match role.functions entry.
   FUNCTION_LABEL_MAP : system key → human-readable label rendered in the popover. */
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
  ],
  "Disney Ads Agent": ["media_plan_queries","forecasting_queries","planning_activity_summaries","approval_io_comparisons"],
  "Admin": ["admin_role_manage","admin_user_manage","admin_system_config","admin_audit_view","admin_settings_update"]
};

var ROLE_FUNCTION_MAP = {
  "r001": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_order_delete","planning_plan_list","planning_plan_create","planning_plan_update"],
    "TOM": ["tom_option_list","tom_group_list"],
    "Admin": ["admin_role_manage","admin_user_manage","admin_system_config"]
  },
  "r002": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_plan_list","planning_plan_get","planning_plan_update"],
    "TOM": ["tom_option_list","tom_group_list"],
    "Admin": ["admin_user_manage","admin_audit_view"]
  },
  "r003": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_plan_list","planning_plan_get","planning_lineitem_list"]
  },
  "r004": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_order_create","planning_plan_list","planning_plan_get","planning_plan_update"],
    "TOM": ["tom_option_list","tom_group_list"]
  },
  "r005": {
    "Core Planning": ["planning_order_list","planning_plan_list"]
  },
  "r006": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_plan_list"]
  },
  "r007": {
    "Core Planning": ["planning_order_list","planning_plan_list","planning_plan_get"]
  },
  "r008": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_order_create","planning_order_update","planning_plan_list","planning_plan_get"],
    "TOM": ["tom_option_list","tom_group_list"]
  },
  "r009": {
    "Core Planning": ["planning_order_list","planning_plan_list"]
  },
  "r010": {
    "Core Planning": ["planning_order_list","planning_plan_list"]
  },
  "r011": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_plan_list"]
  },
  "r012": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_plan_list"]
  },
  "r013": {
    "Core Planning": ["planning_order_list","planning_plan_list"]
  },
  "r014": {
    "Core Planning": ["planning_order_list","planning_plan_list"]
  },
  "r015": {
    "Core Planning": ["planning_order_list","planning_order_get","planning_plan_list"]
  }
};

var FUNCTION_LABEL_MAP = {
  "planning_order_list":"View orders","planning_order_get":"View order details","planning_order_create":"Create orders","planning_order_update":"Edit orders","planning_order_delete":"Delete orders","planning_order_assign":"Assign orders","planning_order_comment":"Comment on orders","planning_order_approve":"Approve orders","planning_order_reject":"Reject orders",
  "planning_plan_list":"View media plans","planning_plan_get":"View media plan details","planning_plan_create":"Create media plans","planning_plan_update":"Edit media plans","planning_plan_delete":"Delete media plans",
  "planning_lineitem_list":"View line items","planning_lineitem_get":"View line item details","planning_lineitem_create":"Create line items","planning_lineitem_update":"Edit line items","planning_lineitem_delete":"Delete line items",
  "iam_role_list":"View roles","iam_role_get":"View role details","iam_role_create":"Create roles","iam_role_update":"Edit roles","iam_role_delete":"Delete roles","iam_function_assign":"Assign functions","iam_data_assign":"Assign data access",
  "iam_user_list":"View users","iam_user_get":"View user details","iam_user_create":"Create users","iam_user_update":"Edit users","iam_user_deactivate":"Deactivate users","iam_user_impersonate":"Impersonate users","iam_analytics_get":"View analytics",
  "tom_option_list":"View options","tom_option_get":"View option details","tom_option_update":"Edit options","tom_option_assign":"Assign options",
  "tom_group_list":"View groups","tom_group_get":"View group details","tom_group_create":"Create groups","tom_group_update":"Edit groups","tom_group_assign":"Assign groups","tom_group_archive":"Archive groups",
  "tom_template_list":"View templates","tom_template_get":"View template details","tom_template_create":"Create templates","tom_template_update":"Edit templates","tom_template_assign":"Assign templates","tom_template_archive":"Archive templates",
  "admin_role_manage":"Manage roles","admin_user_manage":"Manage users","admin_system_config":"System configuration","admin_audit_view":"View audit logs","admin_settings_update":"Update settings",
  "media_plan_queries":"Media plan queries","forecasting_queries":"Forecasting queries","planning_activity_summaries":"Planning activity summaries","approval_io_comparisons":"Approval I/O comparisons",
  "icm_offering_list":"View offerings","icm_offering_get":"View offering details","icm_offering_create":"Create offerings","icm_offering_update":"Edit offerings","icm_offering_delete":"Delete offerings",
  "icm_salespackage_list":"View sales packages","icm_salespackage_get":"View sales package details","icm_salespackage_create":"Create sales packages","icm_salespackage_update":"Edit sales packages","icm_salespackage_delete":"Delete sales packages"
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
      '<td class="c-nm"><div class="name-cell">' + renderAvatarHtml(u, currentPage === 2) +
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

    function currentTheme() {
      return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
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
      if (val === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try { localStorage.setItem(THEME_KEY, val); } catch (e) {}
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

  /* ─── R&P Functions Popover (click-activated, dark EDL style) ───
     Trigger: the blue (N) count button inside .rp-func in the Roles table.
     Content: app title + the actual per-role function label list.
     Dismiss: click outside / Escape / another trigger. */
  var funcPop = document.createElement("div");
  funcPop.className = "func-popover";
  funcPop.setAttribute("role", "dialog");
  funcPop.id = "rpFuncPopover";
  document.body.appendChild(funcPop);

  var funcPopTrigger = null;

  function hideFuncPop() {
    if (!funcPop.classList.contains("visible")) return;
    funcPop.classList.remove("visible");
    funcPop.classList.remove("above");
    if (funcPopTrigger) funcPopTrigger.setAttribute("aria-expanded", "false");
    funcPopTrigger = null;
  }

  function showFuncPop(btn) {
    var app = btn.getAttribute("data-app") || "";
    var funcsAttr = btn.getAttribute("data-funcs") || "";
    var labels = funcsAttr ? funcsAttr.split("|").filter(Boolean) : [];
    var count = labels.length;

    var html = '<div class="func-pop-title">' +
                 esc(app) + ' <span class="func-pop-count">' + count + '</span>' +
               '</div>';
    if (count) {
      html += '<ul class="func-pop-list">';
      for (var i = 0; i < count; i++) {
        html += '<li>' + esc(labels[i]) + '</li>';
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
      var btn = e.target.closest(".rp-func-count");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      if (funcPopTrigger === btn) { hideFuncPop(); return; }
      hideFuncPop();
      showFuncPop(btn);
    });
  }
  document.addEventListener("click", function (e) {
    if (!funcPop.classList.contains("visible")) return;
    if (e.target.closest("#rpFuncPopover")) return;
    if (e.target.closest(".rp-func-count")) return;
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

  function formatFunctions(fns, roleId) {
    var parts = [];
    for (var i = 0; i < fns.length; i++) {
      var app = fns[i].name;
      var cnt = fns[i].count;
      var labels = resolveFunctionLabels(roleId, app, cnt);
      parts.push(
        '<span class="rp-func-group">' + esc(app) + ' ' +
          '<button type="button" class="rp-func-count" ' +
            'data-app="' + esc(app) + '" ' +
            'data-count="' + cnt + '" ' +
            'data-funcs="' + esc(labels.join("|")) + '" ' +
            'aria-haspopup="dialog" aria-expanded="false">(' + cnt + ')</button>' +
        '</span>'
      );
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
      tb.innerHTML = '<tr><td colspan="7" class="empty-state">No results found</td></tr>';
      return;
    }
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var chipClass = r.status === "Sensitive" ? "rp-chip-sensitive" : "rp-chip-regional";
      var roleCell = '<a class="rp-role-link" href="#" data-role-edit="' + esc(r.id) + '">' + esc(r.role) + '</a>';
      html += '<tr data-id="' + esc(r.id) + '">' +
        '<td class="rp-cb"><input type="checkbox" class="rp-check-input" data-rid="' + esc(r.id) + '"></td>' +
        '<td class="rp-role" title="' + esc(r.role) + '">' + roleCell + '</td>' +
        '<td class="rp-desc" title="' + esc(r.description) + '">' + esc(r.description) + '</td>' +
        '<td class="rp-func"><span class="rp-func-text">' + formatFunctions(r.functions, r.id) + '</span></td>' +
        '<td class="rp-stat"><span class="rp-chip ' + chipClass + '">' + esc(r.status) + '</span></td>' +
        '<td class="rp-by">' + esc(r.createdBy) + '</td>' +
        '<td class="rp-date">' + esc(r.createDate) + '</td>' +
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

  /* ═══ CREATE ROLE PAGE ═══
     Navigation from the Roles & Permissions tab to the existing
     Create Role form (markup in #createRolePage). Includes multi-app
     builder (Add application), permissions rendering, summary +
     collapsible cards, and validation for the Save button. */
  var APP_PERMISSIONS = {
    core_planning: {
      label: "Core Planning",
      groups: [
        { title: "Order permissions", columns: [
          ["View orders","View order details","Create orders","Edit orders","Delete orders"],
          ["Assign orders","Comment on orders","Approve orders","Reject orders"]
        ]},
        { title: "Line item permissions", columns: [
          ["View line items","View line item details","Create line items","Edit line items","Delete line items"]
        ]}
      ],
      rightGroups: [
        { title: "Media plan permissions", columns: [
          ["View media plans","View media plan details","Create media plans","Edit media plans","Delete media plans"]
        ]}
      ]
    },
    identity_access_management: {
      label: "Identity Access Management",
      groups: [
        { title: "Role permissions", columns: [
          ["View roles","View role details","Create roles","Edit roles","Delete roles"],
          ["Assign functions","Assign data access"]
        ]},
        { title: "User permissions", columns: [
          ["View users","View user details","Create users","Edit users","Deactivate users"],
          ["Impersonate users","View analytics"]
        ]}
      ],
      rightGroups: []
    },
    disney_ads_agent: {
      label: "Disney Ads Agent",
      groups: [
        { title: "Agent permissions", columns: [
          ["Media plan queries","Forecasting queries","Planning activity summaries","Approval and IO comparisons"]
        ]}
      ],
      rightGroups: []
    },
    inventory_catalog_manager: {
      label: "Inventory Catalog Manager",
      groups: [
        { title: "Offering permissions", columns: [
          ["View offerings","View offering details","Create offerings","Edit offerings","Delete offerings"]
        ]},
        { title: "Sales package permissions", columns: [
          ["View sales packages","View sales package details","Create sales packages","Edit sales packages","Delete sales packages"]
        ]}
      ],
      rightGroups: []
    },
    target_options_manager: {
      label: "Target Options Manager",
      groups: [
        { title: "Option permissions", columns: [
          ["View options","View option details","Edit options","Assign options"]
        ]},
        { title: "Group permissions", columns: [
          ["View groups","View group details","Create groups","Edit groups"],
          ["Assign groups","Archive groups"]
        ]},
        { title: "Template permissions", columns: [
          ["View templates","View template details","Create templates","Edit templates"],
          ["Assign templates","Archive templates"]
        ]}
      ],
      rightGroups: []
    }
  };

  var crPage = document.getElementById("createRolePage");
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

    /* ─── Edit Role: reuses the Create Role layout with prefilled values.
       Maps table function groups (e.g. "Core Planning", "TOM", "Admin")
       to the existing APP_PERMISSIONS keys and pre-checks the first N
       permissions of each section to match the displayed counts. */
    var FUNCTION_TO_APP_KEY = {
      "Core Planning": "core_planning",
      "TOM": "target_options_manager",
      "Admin": "identity_access_management"
    };
    /* Per-role pre-checked permissions. Each app array has exactly the
       same count as the corresponding table entry, so the Functions (N)
       summary and the checked permissions always match. Only PRD-valid
       app keys appear here — sales/ad_ops/billing were removed along
       with their dropdown options to avoid orphan mappings. */
    var ROLE_PRESELECT_OVERRIDES = {
      r001: {
        core_planning: [
          "View orders","View order details","Create orders","Edit orders",
          "View media plans","View media plan details","Create media plans","Edit media plans"
        ],
        target_options_manager: ["View options","View option details"],
        identity_access_management: ["View roles","View role details","Create roles"]
      },
      r002: {
        core_planning: [
          "View orders","View order details","Create orders","Edit orders",
          "Approve orders","View media plans","Create media plans"
        ],
        target_options_manager: ["View options","View groups"],
        identity_access_management: ["View users","View user details"]
      },
      r003: {
        core_planning: [
          "View orders","View order details","Create orders",
          "View media plans","Create media plans"
        ]
      },
      r004: {
        core_planning: [
          "View orders","View order details","Approve orders",
          "View media plans","Create media plans","Edit media plans"
        ],
        target_options_manager: ["View options","View groups"]
      },
      r005: {
        core_planning: ["View orders","View media plans"]
      },
      r006: {
        core_planning: ["View orders","View order details","View media plans"]
      },
      r007: {
        core_planning: ["View orders","View media plans","View media plan details"]
      },
      r008: {
        core_planning: [
          "View orders","View order details","Create orders","Edit orders",
          "View media plans","Edit media plans"
        ],
        target_options_manager: ["View options","View groups"]
      },
      r009: {
        core_planning: ["View orders","View media plans"]
      },
      r010: {
        core_planning: ["View orders","View media plans"]
      },
      r011: {
        core_planning: ["View orders","View order details","View media plans"]
      },
      r012: {
        core_planning: ["View orders","View order details","View media plans"]
      },
      r013: {
        core_planning: ["View orders","View media plans"]
      },
      r014: {
        core_planning: ["View orders","View media plans"]
      },
      r015: {
        core_planning: ["View orders","View media plans","View media plan details"]
      }
    };

    function prefillAppChecks(appKey, count, preferredValues) {
      var section = crPermsContent.querySelector('.cr-app-section[data-app-key="' + appKey + '"]');
      if (!section) return;
      var toCheck = {};
      if (preferredValues && preferredValues.length) {
        for (var p = 0; p < preferredValues.length; p++) toCheck[preferredValues[p]] = true;
      }
      var boxes = section.querySelectorAll(".cr-perm-check");
      var checked = 0;
      for (var i = 0; i < boxes.length && checked < count; i++) {
        if (preferredValues && preferredValues.length) {
          if (toCheck[boxes[i].value]) { boxes[i].checked = true; checked++; }
        }
      }
      for (var j = 0; j < boxes.length && checked < count; j++) {
        if (!boxes[j].checked) { boxes[j].checked = true; checked++; }
      }
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
      if (sens) sens.checked = record.status === "Sensitive";
      if (reg)  reg.checked  = record.status === "Regional";

      var overrides = ROLE_PRESELECT_OVERRIDES[record.id] || {};
      var fns = record.functions || [];
      for (var i = 0; i < fns.length; i++) {
        var appKey = FUNCTION_TO_APP_KEY[fns[i].name];
        if (!appKey || !APP_PERMISSIONS[appKey]) continue;
        crAddApplication(appKey);
        prefillAppChecks(appKey, fns[i].count, overrides[appKey]);
      }
      updateFunctionsCount();
      updateCrSummaries();
      captureCrInitialState();
    }

    function resetCreateRole() {
      crRoleName.value = "";
      var desc = document.getElementById("crDescription");
      if (desc) desc.value = "";
      var checks = crPage.querySelectorAll('input[name="dataAccess"]');
      for (var i = 0; i < checks.length; i++) checks[i].checked = false;
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
      crFunctionsTitle.textContent = "Functions (" + checked.length + " Selected)";
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
      var sections = crPermsContent.querySelectorAll(".cr-app-section");
      for (var s = 0; s < sections.length; s++) {
        var key = sections[s].getAttribute("data-app-key") || "";
        var boxes = sections[s].querySelectorAll(".cr-perm-check:checked");
        var values = [];
        for (var b = 0; b < boxes.length; b++) values.push(boxes[b].value);
        values.sort();
        perms.push(key + ":" + values.join(","));
      }
      perms.sort();
      return JSON.stringify({
        name: crRoleName.value,
        desc: descEl ? descEl.value : "",
        sens: !!(sensCb && sensCb.checked),
        reg:  !!(regCb  && regCb.checked),
        apps: crAddedApps.slice().sort().join("|"),
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
        if (APP_PERMISSIONS[key]) labels.push(APP_PERMISSIONS[key].label);
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
      crAppDD.classList.remove("open");
      crAppTrigger.setAttribute("aria-expanded", "false");
    }
    function crOpenAppDD() {
      crAppDD.classList.add("open");
      crAppTrigger.setAttribute("aria-expanded", "true");
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
      if (!crAppDD.contains(e.target)) crCloseAppDD();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && crAppDD.classList.contains("open")) crCloseAppDD();
    });

    /* ─── Permissions rendering ─── */
    function renderPermissionGroup(group, appKey) {
      var html = '<div class="cr-perm-group">';
      html += '<div class="cr-perm-group-title">' + esc(group.title) + '</div>';
      html += '<div class="cr-perm-grid">';
      for (var c = 0; c < group.columns.length; c++) {
        html += '<div class="cr-perm-col">';
        for (var p = 0; p < group.columns[c].length; p++) {
          var name = group.columns[c][p];
          var id = "perm_" + appKey + "_" + name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
          html += '<label class="cr-perm-item">' +
            '<input type="checkbox" class="cr-perm-check" id="' + id + '" value="' + esc(name) + '">' +
            '<span class="cr-perm-label">' + esc(name) + '</span>' +
            '</label>';
        }
        html += '</div>';
      }
      html += '</div></div>';
      return html;
    }

    function buildAppSectionHtml(appKey) {
      var app = APP_PERMISSIONS[appKey];
      if (!app) return "";
      var html = '<div class="cr-app-section" data-app-key="' + esc(appKey) + '">';
      html += '<div class="cr-app-section-head" role="button" tabindex="0" aria-expanded="true" aria-controls="cr-app-body-' + esc(appKey) + '" data-app-toggle="' + esc(appKey) + '">';
      html += '<div class="cr-app-head-left">';
      html += '<svg class="cr-section-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
      html += '<span class="cr-app-title">' + esc(app.label) + '</span>';
      html += '</div>';
      html += '<button type="button" class="cr-app-remove" data-remove-app="' + esc(appKey) + '" aria-label="Remove ' + esc(app.label) + '">';
      html += '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>';
      html += 'Remove';
      html += '</button>';
      html += '</div>';
      html += '<div class="cr-app-body" id="cr-app-body-' + esc(appKey) + '">';

      var hasRight = app.rightGroups && app.rightGroups.length > 0;
      if (hasRight) {
        html += '<div class="cr-perm-columns"><div class="cr-perm-left">';
        for (var i = 0; i < app.groups.length; i++) {
          if (i > 0) html += '<div style="margin-top:24px"></div>';
          html += renderPermissionGroup(app.groups[i], appKey);
        }
        html += '</div><div class="cr-perm-right"><div class="cr-perm-divider"></div><div class="cr-perm-right-content">';
        for (var j = 0; j < app.rightGroups.length; j++) {
          html += renderPermissionGroup(app.rightGroups[j], appKey);
        }
        html += '</div></div></div>';
      } else {
        for (var k = 0; k < app.groups.length; k++) {
          if (k > 0) html += '<div style="margin-top:24px"></div>';
          html += renderPermissionGroup(app.groups[k], appKey);
        }
      }
      html += '</div>';
      html += '</div>';
      return html;
    }

    function toggleAppSection(section) {
      if (!section) return;
      var collapsed = section.classList.toggle("collapsed");
      var head = section.querySelector(".cr-app-section-head");
      if (head) head.setAttribute("aria-expanded", collapsed ? "false" : "true");
    }

    function crAddApplication(appKey) {
      if (!appKey || crAddedApps.indexOf(appKey) >= 0 || !APP_PERMISSIONS[appKey]) return;
      crAddedApps.push(appKey);
      var wrapper = document.createElement("div");
      wrapper.innerHTML = buildAppSectionHtml(appKey);
      crPermsContent.appendChild(wrapper.firstChild);
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
      if (section && section.parentNode) section.parentNode.removeChild(section);
      if (crAddedApps.length === 0) crPermsContent.style.display = "none";
      crRefreshAppMenu();
      crUpdateAddBtnState();
      updateFunctionsCount();
      validateCreateRole();
    }

    crPermsContent.addEventListener("click", function (e) {
      var removeBtn = e.target.closest("[data-remove-app]");
      if (removeBtn) {
        e.preventDefault();
        e.stopPropagation();
        crRemoveApplication(removeBtn.getAttribute("data-remove-app"));
        return;
      }
      var head = e.target.closest("[data-app-toggle]");
      if (!head) return;
      if (e.target.closest("input, label, a")) return;
      var section = head.closest(".cr-app-section");
      toggleAppSection(section);
    });
    crPermsContent.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      var head = e.target.closest("[data-app-toggle]");
      if (!head || head !== e.target) return;
      e.preventDefault();
      toggleAppSection(head.closest(".cr-app-section"));
    });
    crPermsContent.addEventListener("change", function () {
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
      identity_access_management: "Admin",
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
        var count = sections[i].querySelectorAll(".cr-perm-check:checked").length;
        if (!count) continue;
        var label = APP_KEY_TO_TABLE_LABEL[key] ||
                    (APP_PERMISSIONS[key] && APP_PERMISSIONS[key].label) || key;
        out.push({ name: label, count: count });
      }
      return out;
    }

    function crCollectStatus() {
      var sens = crPage.querySelector('input[name="dataAccess"][value="sensitive"]');
      var reg  = crPage.querySelector('input[name="dataAccess"][value="regional"]');
      if (sens && sens.checked) return "Sensitive";
      if (reg  && reg.checked)  return "Regional";
      return "Regional";
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
      if (e.key === "Escape" && crConfirmBackdrop && !crConfirmBackdrop.hasAttribute("hidden")) {
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
