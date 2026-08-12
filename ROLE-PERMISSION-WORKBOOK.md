# IAM v4.1 role & permission migration — reconciliation report

Source of truth: **New OMS - Roles & Permissions.xlsx** (Tatiana), sheets 
`Core Planning`, `v2. Agent`, `Agents`. Frozen into `tests/workbook_model.json` by 
`tools/extract_workbook.py`; the application registry lives in `public/v4.1/app.js` 
(`PERMISSION_DEFINITIONS`, `CANONICAL_ROLE_DEFINITIONS`) and everything else is derived from it.

## How the data flows

```
New OMS - Roles & Permissions.xlsx
  → tools/extract_workbook.py        (freezes the workbook)
  → tests/workbook_model.json        (the golden the tests assert against)
  → PERMISSION_DEFINITIONS           (public/v4.1/app.js — 56 codes)
  → CANONICAL_ROLE_DEFINITIONS       (public/v4.1/app.js — 8 roles)
  → everything else is derived
```

Nothing downstream of `CANONICAL_ROLE_DEFINITIONS` is hand-written any more.
`FUNCTION_REGISTRY`, `ROLE_FUNCTION_MAP`, `ROLE_ACCESS_LEVELS`,
`ROLES_PERMISSIONS_DATA`, `PC_*` (permission catalog), `CR_ROLE_MATRIX`,
`CR_MATRIX_RESOURCES_BY_APP`, `CR_MATRIX_COLUMNS` and `AU_EFF_PATTERNS` are all
computed from the registry at load, so the Users list, Roles list, Edit Role,
Create Role, Edit User, Add User, the effective-access table, the access
breakdown modal and the Redline gallery cannot drift apart from each other or
from the workbook.

## Reading rules applied

* `x` is a grant. A blank cell is not. Nothing else in a role column was
  treated as a mark; the extractor reports any other value instead of guessing.
* Notes and Descriptions are prose. They document intent and never became
  function codes or grants.
* `Core Planning` is authoritative for the six Core Planning roles and for the
  ICM / Targeting / RCM / Access Management / Disney Ads Intelligence / Disney
  Campaign Manager permissions.
* `v2. Agent` is authoritative for `Sales Agent User` and `Planning Agent User`.
  It restates 17 Core Planning codes so `Planning Agent User` can grant them;
  a restated row contributes grants only — the permission keeps its original
  `Core Planning` definition.
* `Agents` is a supporting sheet, read for capability wording only.

## Workbook conflicts and boundaries

**`v2. Agent` vs `Agents`.** The two sheets model the Agent surface with
different, incompatible code families. `Agents` uses eight granular codes
(`ads_agent_opportunity`, `ads_agent_opp_insights_get`,
`ads_agent_acc_insights_get`, `ads_agent_media_plan`, `ads_agent_mp_lineitem`,
`ads_agent_forecast`, `ads_agent_pricing`, `ads_agent_plan_insights_get`) and
splits the application into "Disney Ads Agent - Sales / Accounts / Planning".
`v2. Agent` collapses that into one application with six read/update codes
(`ads_agent_{sales,planning,account}_{read,update}`). Per the stated precedence,
`v2. Agent` supplies the matrix and none of the eight `Agents` codes was
registered; their descriptions were folded into the six codes' descriptions.
Registering both families would have doubled the Agent permission surface
without any evidence that both are meant to exist.

**External authorization.** The `v2. Agent` note on `ads_agent_sales_read`
records that SalesHub / Salesforce profiles govern CRM Opportunity CRUD and
record access, and that Atlas IAM governs the agent prompt layer only. That
boundary is preserved: the three `si_opportunity_*` codes are registered
because the workbook defines them, but no role grants them, so IAM never
represents CRM record access. The `ads_agent_account_*` notes describe possible
future FAQ / recommendation uses; they added no permissions.

**Malformed data.** None. No duplicate code within a sheet, no blank required
role name, no blank function code, no role with zero permissions, no
non-`x` mark in a role column, no reference to an application the registry
does not know.


## Canonical roles

| Role | Id | Sheet | Permissions | Description |
| --- | --- | --- | --- | --- |
| ACP Planner | `r001` | Core Planning | 22 | Internal Disney user who builds and manages Orders, Media plans, Line items in Core Planning. Does not approve Orders or manage DCM accounts. |
| ACP Vendor Planner | `r002` | Core Planning | 21 | Contracted vendor user with the same planning capabilities as ACP Planner, scoped to the assigned vendor team. |
| ACP Planning Specialist | `r003` | Core Planning | 25 | Reviews and approves Orders with Media Plans before they go to the client. |
| ACP Vendor Planning Specialist | `r004` | Core Planning | 22 | Contracted vendor user with the same planning capabilities as ACP Planning Specialist, scoped to the assigned vendor team. |
| ACP Planning Manager | `r005` | Core Planning | 22 | Provides managerial oversight of the planning process. Authorized to view orders and media plans and approve or reject submissions. Has read-only access to Access Management. |
| ACP Viewer | `r006` | Core Planning | 10 | Read-only access to Orders, Media plans, and Line items in Core Planning. For users who require visibility into planning work without any edit capabilities. |
| Sales Agent User | `r013` | v2. Agent | 4 | Uses the Disney Ads Agent to turn RFPs into Opportunity drafts, refine them through follow-up questions, and confirm in SalesHub, gets access to Account insights. |
| Planning Agent User | `r014` | v2. Agent | 19 | Uses the Disney Ads Agent to manage Media Plans, Line items, and forecasts through natural-language prompts. |

## Permission registry

56 unique function codes across 9 applications. Every code keeps its workbook spelling; application / resource / action are preserved rather than flattened into an access level.

| Application | Resources | Codes |
| --- | --- | --- |
| (TOM) | Targeting Restriction, Targeting Rule | 8 |
| Access Mgmt | Users | 1 |
| Core Planning | (all), Line Item, Media Plan, Order | 17 |
| Disney Ads Agent | Account, Planning, Sales | 6 |
| Disney Ads Intelligence | Account Intelligence, Planning Intelligence, Sales Intelligence | 3 |
| Disney Campaign Manager | Self Service | 2 |
| ICM | App Group, Offering, Sales Package | 12 |
| RCM | Rate Card | 4 |
| SalesIntelligence | Opportunity | 3 |

## Role reconciliation

| Existing role | Id | Users before | Canonical role | Status | Permissions before | after | Added | Removed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Atlas Admin | `r001` | 0 | ACP Planner | Obsolete — id reused | 63 | 22 | 22 | 63 |
| Core Planning Admin | `r002` | 4 | ACP Vendor Planner | Obsolete — id reused | 19 | 21 | 21 | 19 |
| Operations Admin | `r003` | 16 | ACP Planning Specialist | Obsolete — id reused | 14 | 25 | 25 | 14 |
| Planner | `r004` | 28 | ACP Vendor Planning Specialist | Obsolete — id reused | 9 | 22 | 22 | 9 |
| Planning Specialist | `r005` | 21 | ACP Planning Manager | Obsolete — id reused | 9 | 22 | 22 | 9 |
| Planning Manager | `r006` | 19 | ACP Viewer | Obsolete — id reused | 5 | 10 | 10 | 5 |
| Campaign Planner | `r013` | 47 | Sales Agent User | Obsolete — id reused | 12 | 4 | 4 | 12 |
| Ad Operations Specialist | `r014` | 16 | Planning Agent User | Obsolete — id reused | 18 | 19 | 19 | 18 |
| Read-Only Viewer | `r008` | 33 | — (aliased) | Obsolete — not in workbook | 3 | — | — | 3 |
| ICM Admin | `r009` | 1 | — (aliased) | Obsolete — not in workbook | 10 | — | — | 10 |
| TOM Admin | `r010` | 2 | — (aliased) | Obsolete — not in workbook | 16 | — | — | 16 |
| Agency Admin | `r015` | 2 | — (aliased) | Obsolete — not in workbook | 15 | — | — | 15 |
| External Partner Admin | `r016` | 6 | — (aliased) | Obsolete — not in workbook | 7 | — | — | 7 |

No legacy role name or id matched a workbook role, so no mapping is an *Exact match* or an *Approved alias*: every one is **Obsolete**. The eight canonical roles reuse the eight lowest existing ids so stored references, URLs and selection state keep resolving; the five ids with no canonical counterpart resolve through `LEGACY_ROLE_ALIASES`.

| Legacy reference | Kind | Resolves to |
| --- | --- | --- |
| Atlas Admin (`r001`) | name only (id re-used by a canonical role) | ACP Vendor Planner |
| Core Planning Admin (`r002`) | name only (id re-used by a canonical role) | ACP Planning Manager |
| Operations Admin (`r003`) | name only (id re-used by a canonical role) | ACP Planning Manager |
| Planner (`r004`) | name only (id re-used by a canonical role) | Planning Agent User |
| Planning Specialist (`r005`) | name only (id re-used by a canonical role) | Planning Agent User |
| Planning Manager (`r006`) | name only (id re-used by a canonical role) | ACP Vendor Planning Specialist |
| Campaign Planner (`r013`) | name only (id re-used by a canonical role) | ACP Vendor Planner |
| Ad Operations Specialist (`r014`) | name only (id re-used by a canonical role) | ACP Vendor Planner |
| Read-Only Viewer (`r008`) | name and id | ACP Planning Manager |
| ICM Admin (`r009`) | name and id | ACP Viewer |
| TOM Admin (`r010`) | name and id | ACP Planning Manager |
| Agency Admin (`r015`) | name and id | ACP Viewer |
| External Partner Admin (`r016`) | name and id | ACP Vendor Planner |

## User assignments

| Measure | Count |
| --- | --- |
| Total users processed | 120 |
| Exact matches | 0 |
| Approved aliases | 0 |
| Automatically assigned | 120 |
| Users with multiple valid roles | 0 |
| Users left without a role | 0 |
| Users whose displayed role changed | 120 |
| Users whose effective access changed | 120 |
| Users whose name, email, team, title, region, avatar, status or last login changed | 0 |

Assignment spread across the canonical pool: ACP Planner 14, ACP Planning Manager 16, ACP Planning Specialist 16, ACP Vendor Planner 16, ACP Vendor Planning Specialist 16, ACP Viewer 16, Planning Agent User 12, Sales Agent User 14.

### Audit table

`Automatic deterministic assignment` means the user's prior role does not exist in the workbook and could not be mapped to one without inference, so the role was chosen by `stableIdentifierHash(user.id) % 8` over the canonical pool. It is reproducible across runs, reloads, test orders and breakpoints, and it is **fixture/demo data — not authoritative access policy**. Nothing in the product UI labels it as such.

| User | Email | Previous role(s) | Assigned workbook role | Method | Permissions |
| --- | --- | --- | --- | --- | --- |
| Rachel Morales | r.morales@omnicommedia.com | Agency Admin | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Kevin Zhang | k.zhang@omnicommedia.com | Campaign Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Danielle Foster | d.foster@omd.com | Campaign Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| James Okonkwo | j.okonkwo@omd.com | Planning Manager | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Leila Sharma | l.sharma@omd.com | Read-Only Viewer | ACP Viewer | Automatic deterministic assignment | 10 |
| Thomas Erikson | t.erikson@phdmedia.com | Campaign Planner | Sales Agent User | Automatic deterministic assignment | 4 |
| Ana Gutierrez | a.gutierrez@phdmedia.com | Planner | Planning Agent User | Automatic deterministic assignment | 19 |
| Michelle Kim | m.kim@omnicommedia.com | Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Brandon Wu | b.wu@omnicommedia.com | Ad Operations Specialist | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Sophie Laurent | s.laurent@groupm.com | External Partner Admin | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Patrick O'Brien | p.obrien@groupm.com | Read-Only Viewer | ACP Planner | Automatic deterministic assignment | 22 |
| Yuki Tanaka | y.tanaka@groupm.com | Campaign Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Nadia Hassan | n.hassan@groupm.com | Planning Manager | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Derek Williams | d.williams@groupm.com | Read-Only Viewer | ACP Viewer | Automatic deterministic assignment | 10 |
| Camille Rousseau | c.rousseau@groupm.com | Planner | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Marcus Johnson | m.johnson@groupm.com | Campaign Planner | Planning Agent User | Automatic deterministic assignment | 19 |
| Pooja Patel | p.patel@groupm.com | External Partner Admin | Sales Agent User | Automatic deterministic assignment | 4 |
| Ryan Nguyen | r.nguyen@groupm.com | Ad Operations Specialist | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Isabella Torres | i.torres@publicismedia.com | Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Omar Shaikh | o.shaikh@publicismedia.com | Planning Manager | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Caroline Berg | c.berg@publicismedia.com | Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Andre Dupont | a.dupont@publicismedia.com | Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Hiroshi Nakamura | h.nakamura@publicismedia.com | Read-Only Viewer | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Elena Petrov | e.petrov@publicismedia.com | Campaign Planner | Sales Agent User | Automatic deterministic assignment | 4 |
| Jasmine Reed | j.reed@publicismedia.com | Campaign Planner | Planning Agent User | Automatic deterministic assignment | 19 |
| Trevor Blackwood | t.blackwood@publicismedia.com | Planner | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Amara Diallo | a.diallo@ipgmediabrands.com | External Partner Admin | ACP Viewer | Automatic deterministic assignment | 10 |
| Steven Park | s.park@ipgmediabrands.com | Read-Only Viewer | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Fatima Al-Rashid | f.alrashid@ipgmediabrands.com | Campaign Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Lucas Martins | l.martins@ipgmediabrands.com | Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Diana Hoffman | d.hoffman@ipgmediabrands.com | Planning Manager | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Kwame Asante | k.asante@ipgmediabrands.com | Campaign Planner | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Mei-Ling Chen | m.chen@horizonmedia.com | Agency Admin | ACP Planner | Automatic deterministic assignment | 22 |
| Roberto Russo | r.russo@horizonmedia.com | Campaign Planner | Planning Agent User | Automatic deterministic assignment | 19 |
| Zoe Mitchell | z.mitchell@horizonmedia.com | Campaign Planner | Sales Agent User | Automatic deterministic assignment | 4 |
| Aleksei Volkov | a.volkov@horizonmedia.com | Planner | ACP Viewer | Automatic deterministic assignment | 10 |
| Tanya Iyer | t.iyer@horizonmedia.com | Ad Operations Specialist | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Christopher Lam | c.lam@horizonmedia.com | Campaign Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Samira Khalil | s.khalil@horizonmedia.com | Campaign Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Ben Nakajima | b.nakajima@horizonmedia.com | Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Veronica Cruz | v.cruz@horizonmedia.com | Campaign Planner | ACP Viewer | Automatic deterministic assignment | 10 |
| Daniel Schwartz | d.schwartz@horizonmedia.com | Planning Manager | Sales Agent User | Automatic deterministic assignment | 4 |
| Naomi Clarke | n.clarke@horizonmedia.com | External Partner Admin | Planning Agent User | Automatic deterministic assignment | 19 |
| Felix Andersson | f.andersson@horizonmedia.com | Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Jade Thompson | j.thompson@horizonmedia.com | Campaign Planner | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Ravi Mehta | r.mehta@horizonmedia.com | Ad Operations Specialist | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Christine Wu | c.wu@aexp.com | External Partner Admin | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Michael Torres | m.torres@aexp.com | Campaign Planner | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Ashley Brennan | a.brennan@aexp.com | Read-Only Viewer | ACP Viewer | Automatic deterministic assignment | 10 |
| Sophia Adebayo | s.adebayo@mbusa.com | Campaign Planner | ACP Viewer | Automatic deterministic assignment | 10 |
| Gregory Faulkner | g.faulkner@mbusa.com | Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Natalia Romero | n.romero@mbusa.com | Campaign Planner | Planning Agent User | Automatic deterministic assignment | 19 |
| William Chen | w.chen@progressive.com | Planning Manager | Sales Agent User | Automatic deterministic assignment | 4 |
| Amelia Grant | a.grant@progressive.com | Campaign Planner | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Jordan Rivera | j.rivera@progressive.com | Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Takeshi Yamamoto | t.yamamoto@honda.com | Read-Only Viewer | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Catherine O'Sullivan | c.osullivan@honda.com | Campaign Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Brandon Nguyen | b.nguyen@honda.com | Ad Operations Specialist | ACP Viewer | Automatic deterministic assignment | 10 |
| Ji-Young Park | j.park@lexus.com | Campaign Planner | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Rachel Huang | r.huang@lexus.com | External Partner Admin | Sales Agent User | Automatic deterministic assignment | 4 |
| Homer Simpson | Homer.Simpson@disney.com | Core Planning Admin, Planning Manager, Planner | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Marge Simpson | marge.simpson@disney.com | Planner, Planning Specialist | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Bart Simpson | Bart.Simpson@disney.com | Read-Only Viewer | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Ned Flanders | Ned.Flanders@disney.com | Planner, Campaign Planner, Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Lisa Simpson | Lisa.Simpson@disney.com | Ad Operations Specialist, Campaign Planner, Planning Specialist | ACP Viewer | Automatic deterministic assignment | 10 |
| Montgomery Burns | Montgomery.Burns@disney.com | Campaign Planner, Planning Manager | Sales Agent User | Automatic deterministic assignment | 4 |
| Milhouse Van Houten | Milhouse.VanHouten@disney.com | Operations Admin | Planning Agent User | Automatic deterministic assignment | 19 |
| Maggie Simpson | Maggie.Simpson@disney.com | Read-Only Viewer, Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Waylon Smithers | Waylon.Smithers@disney.com | Operations Admin, Read-Only Viewer, ICM Admin | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Nelson Muntz | Nelson.Muntz@disney.com | Read-Only Viewer | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Ralph Wiggum | Ralph.Wiggum@disney.com | Ad Operations Specialist, Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Principal Skinner | Principal.Skinner@disney.com | Planner, Campaign Planner, Read-Only Viewer | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Krusty the Clown | Krusty.TheClown@disney.com | Campaign Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Selma Bouvier | Selma.Bouvier@disney.com | Operations Admin, Read-Only Viewer, Planning Specialist | ACP Viewer | Automatic deterministic assignment | 10 |
| Patty Bouvier | Patty.Bouvier@disney.com | Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Lenny Leonard | Lenny.Leonard@disney.com | Planner, Planning Specialist, Planning Manager | Planning Agent User | Automatic deterministic assignment | 19 |
| Carl Carlson | Carl.Carlson@disney.com | Operations Admin, Planning Specialist | Sales Agent User | Automatic deterministic assignment | 4 |
| Moe Szyslak | Moe.Szyslak@disney.com | Read-Only Viewer, Planner | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Apu Nahasapeemapetilon | Apu.Nahasapeemapetilon@disney.com | Planning Manager, Campaign Planner, Planning Specialist, Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Comic Book Guy | Comic.BookGuy@disney.com | Read-Only Viewer, Operations Admin | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Chief Wiggum | Chief.Wiggum@disney.com | Planner | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Edna Krabappel | Edna.Krabappel@disney.com | Planner, Campaign Planner, Ad Operations Specialist | ACP Planner | Automatic deterministic assignment | 22 |
| Groundskeeper Willie | Groundskeeper.Willie@disney.com | Ad Operations Specialist, Planning Specialist | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Fat Tony | Fat.Tony@disney.com | Planning Manager, Planning Specialist, Campaign Planner | Sales Agent User | Automatic deterministic assignment | 4 |
| Dr. Hibbert | Julius.Hibbert@disney.com | Read-Only Viewer, Operations Admin, Planning Manager | Planning Agent User | Automatic deterministic assignment | 19 |
| Professor Frink | Professor.Frink@disney.com | Operations Admin, Planning Specialist, Ad Operations Specialist | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Barney Gumble | Barney.Gumble@disney.com | Campaign Planner, Ad Operations Specialist | ACP Viewer | Automatic deterministic assignment | 10 |
| Sideshow Bob | Sideshow.Bob@disney.com | Read-Only Viewer, Campaign Planner, Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Kent Brockman | Kent.Brockman@disney.com | Core Planning Admin, Planning Manager | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Otto Mann | Otto.Mann@disney.com | Read-Only Viewer | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Mayor Quimby | Mayor.Quimby@disney.com | Planning Manager, Planning Specialist | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Hans Moleman | Hans.Moleman@disney.com | Operations Admin | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Gil Gunderson | Gil.Gunderson@disney.com | Read-Only Viewer, Planner, Campaign Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Rainier Wolfcastle | Rainier.Wolfcastle@disney.com | Campaign Planner, Ad Operations Specialist, Planning Specialist | Planning Agent User | Automatic deterministic assignment | 19 |
| Troy McClure | Troy.McClure@disney.com | Planner, Planning Specialist | Sales Agent User | Automatic deterministic assignment | 4 |
| Disco Stu | Disco.Stu@disney.com | Ad Operations Specialist | ACP Viewer | Automatic deterministic assignment | 10 |
| Dr. Nick Riviera | Nick.Riviera@disney.com | Read-Only Viewer, Operations Admin, Planning Specialist | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Kirk Van Houten | Kirk.VanHouten@disney.com | Operations Admin, Planning Specialist | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Luann Van Houten | Luann.VanHouten@disney.com | Planner, Campaign Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Agnes Skinner | Agnes.Skinner@disney.com | Read-Only Viewer, TOM Admin | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Snake Jailbird | Snake.Jailbird@disney.com | Read-Only Viewer, Planner, Campaign Planner | ACP Viewer | Automatic deterministic assignment | 10 |
| Jimbo Jones | Jimbo.Jones@disney.com | Ad Operations Specialist, Campaign Planner | Sales Agent User | Automatic deterministic assignment | 4 |
| Dolph Starbeam | Dolph.Starbeam@disney.com | Campaign Planner, Planning Specialist, Ad Operations Specialist | Planning Agent User | Automatic deterministic assignment | 19 |
| Sherri Mackleberry | Sherri.Mackleberry@disney.com | Planner | ACP Planner | Automatic deterministic assignment | 22 |
| Terri Mackleberry | Terri.Mackleberry@disney.com | Planner, Planning Specialist, Planning Manager | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Martin Prince | Martin.Prince@disney.com | Read-Only Viewer, Planning Manager | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Timothy Lovejoy | Timothy.Lovejoy@disney.com | Planning Manager, Campaign Planner, Planning Specialist, Core Planning Admin | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Cletus Spuckler | Cletus.Spuckler@disney.com | Operations Admin, Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Cookie Kwan | Cookie.Kwan@disney.com | Planner | ACP Viewer | Automatic deterministic assignment | 10 |
| Lindsey Naegle | Lindsey.Naegle@disney.com | Operations Admin, Planning Specialist, TOM Admin | ACP Viewer | Automatic deterministic assignment | 10 |
| Lionel Hutz | Lionel.Hutz@disney.com | Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Helen Lovejoy | Helen.Lovejoy@disney.com | Planner, Campaign Planner, Planning Specialist | Planning Agent User | Automatic deterministic assignment | 19 |
| Artie Ziff | Artie.Ziff@disney.com | Planning Manager, Core Planning Admin | Sales Agent User | Automatic deterministic assignment | 4 |
| Ruth Powers | Ruth.Powers@disney.com | Read-Only Viewer, Operations Admin | ACP Vendor Planner | Automatic deterministic assignment | 21 |
| Herman Hermann | Herman.Hermann@disney.com | Read-Only Viewer, Operations Admin, Planning Specialist | ACP Planner | Automatic deterministic assignment | 22 |
| Wendell Borton | Wendell.Borton@disney.com | Ad Operations Specialist, Planning Specialist | ACP Vendor Planning Specialist | Automatic deterministic assignment | 22 |
| Lyle Lanley | Lyle.Lanley@disney.com | Campaign Planner, Planning Manager, Planner | ACP Planning Specialist | Automatic deterministic assignment | 25 |
| Lewis Clark | Lewis.Clark@disney.com | Operations Admin | ACP Viewer | Automatic deterministic assignment | 10 |
| Kearney Zzyzwicz | Kearney.Zzyzwicz@disney.com | Planner, Campaign Planner, Read-Only Viewer | ACP Planning Manager | Automatic deterministic assignment | 22 |
| Manjula Nahasapeemapetilon | Manjula.Nahasapeemapetilon@disney.com | Operations Admin, Read-Only Viewer, Planner | Sales Agent User | Automatic deterministic assignment | 4 |


## Access-level derivation

Access levels are computed from grants, never from a role's name.

For an application, let *pool* be every registered permission for it and
*granted* be the codes the role holds:

| Label | Rule |
| --- | --- |
| `Full Access` | granted covers the whole pool |
| `Approve` | granted covers every read/create/update/delete in the pool plus an approve action |
| `Edit` | granted covers read plus every create/update/delete in the pool |
| `View Only` | every granted action is a read (or an access-style read) |
| `Custom` | anything else — the grants break out of a standard bundle |
| `No Access` | nothing granted; the application does not appear |

The Roles table and the Functions popover use those five labels. The Edit User
effective-access table has only three (`View Access`, `Edit Access`,
`Full Access`), so `Approve` and `Custom` collapse into `Edit Access` there —
both imply at least one write grant, since a read-only role can never be
`Custom`. That mapping lives in one place, `AU_EFF_LEVEL_FROM_ROLE_LEVEL`.

A level is only offered for an application whose pool can actually distinguish
it, so an application with read-only functions never reports `Full Access`
merely because the role holds all one of them.

## Vocabulary mapping

The workbook abbreviates application names; the UI spells them out. The
mapping is declared once, in `WB_APP_TOKEN` / `WB_APP_DISPLAY`, and no UI label
changed as part of this migration.

| Workbook | Application token | UI |
| --- | --- | --- |
| `Core Planning` | Core Planning | Core Planning |
| `ICM` | ICM | Inventory Catalog Manager |
| `(TOM)` | TOM | Targeting Options Manager |
| `RCM` | RCM | Rate Card Manager |
| `Access Mgmt` | IAM | Identity Access Management |
| `SalesIntelligence` | Sales Intelligence | Sales Intelligence |
| `Disney Ads Intelligence` | Disney Ads Intelligence | Disney Ads Intelligence |
| `Disney Campaign Manager` | Disney Campaign Manager | Disney Campaign Manager |
| `Disney Ads Agent` | Disney Ads Agent | Disney Ads Agent |

Workbook actions map to the existing UI verbs the same way: `read` → View /
Read, `create` → Create, `update` → Edit / Update, `delete` → Delete,
`approve` → Approve, `archive` → Archive. The Edit Role matrix's `Assign`
column was dropped because no registered function uses that action; `Approve`
and `Archive` columns appear for the applications whose pools contain them.

## Tests

| Test | Result |
| --- | --- |
| `tests/test_workbook_parity.py` (new) | 50 checks, 50 passed |
| Full suite, 43 files | 40 passed; 3 pre-existing failures, unchanged by this work |

`tests/test_workbook_parity.py` asserts the parse rules, the registry's
per-role code sets, stable role ids, legacy reference resolution, that every
user holds exactly one canonical role, that the assignment is byte-identical
across three loads at two breakpoints, that no identity field moved, that the
Roles list / Edit Role / effective-access table / breakdown modal / role picker
all agree with the registry, and that no JavaScript error is raised while
walking those surfaces.

The three failures — `test_back_navigation.py`,
`test_remove_application_modal.py` (2 checks) and `test_v41_access_section.py`
(2 checks) — reproduce identically against the pre-migration `app.js`, so they
predate this work. `test_redline_canvas_architecture.py` is flaky in this
environment: it stalls on the CDP websocket at a different scenario on each
run, and every role-related scenario it reaches passes.

## Visual QA

Checked at 390, 768, 1024, 1280, 1440, 1920 and 2560 px on the Users list,
Roles list, Edit Role, Edit User and the access breakdown modal:

* No horizontal page overflow at any width.
* Every Edit Role matrix column stays aligned with its header.
* No effective-access row escapes its container.
* Role names truncate through the existing `.tbl td` ellipsis, with the full
  name still on the cell's `title`.

One consequence worth flagging: the Roles table's Functions cell truncates
more often than before. It has always been `white-space: nowrap; overflow:
hidden; text-overflow: ellipsis`, and before the migration 2 of 10 rows
clipped at 1024 px; now 6 of 8 do, because canonical roles reach more
applications than the legacy demo roles did (ACP Planner alone touches five).
This is the existing truncation behaviour meeting longer data, not a layout
break — fixing it would mean introducing a new affordance, which is out of
scope for a data correction. It is called out here so the decision is a
deliberate one.

## Files changed

| File | Change |
| --- | --- |
| `public/v4.1/app.js` | Canonical registry, all derived structures, per-user role assignment |
| `public/v4.1/redline-gallery.js` | Gallery role fixture now names a canonical role |
| `tools/extract_workbook.py` | New — freezes the workbook into the golden model |
| `tests/workbook_model.json` | New — the frozen workbook model |
| `tests/user_identity_snapshot.json` | New — pre-migration identity fields, so drift is detectable |
| `tests/test_workbook_parity.py` | New — workbook / registry / UI parity suite |
| `tests/test_add_members_modal.py` | Stress fixture's two synthetic roles renamed to canonical ones |
| `ROLE-PERMISSION-WORKBOOK.md` | This report |

No CSS, no HTML, no route, no component and no Redline behaviour was touched.

## Confirmations

* Every one of the 120 users ends with exactly one valid, workbook-backed role.
* No name, preferred name, email, employee id, avatar, internal/external
  status, active/inactive status, team, region, timezone, last login, created
  date or created-by value changed — verified field by field against
  `tests/user_identity_snapshot.json`.
* No team name, description, membership or ordering changed. The workbook is
  not a source of truth for teams and was not read for them.
* No user was added or deleted, and no user-list ordering changed.
* Every role's permissions were recalculated from the workbook. No permission
  survived from an obsolete role, and no old and new grants were merged.
* Effective access is the union of the assigned roles' codes, de-duplicated by
  code, grouped by application and resource.
* The vendor roles stay distinct from their internal counterparts even where
  their matrices overlap, because the workbook lists them separately and
  vendor scoping is enforced outside this matrix.
* No design change: no layout, table, column, card, modal, toast, type, color,
  spacing, button, icon, search field, filter, breakpoint, tooltip, empty
  state, loading state, route or Redline behaviour was modified.
