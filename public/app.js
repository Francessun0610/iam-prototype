const USERS = [
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" },
  { name: "Homer Simpsons", email: "Homer.Simpsons@disney.com", role: "Core Planning Admin", extraRoles: 2, status: "Active", team: "Addressable Ad Ops", companyTitle: "Executive Director, Pricing & Planning", region: "USA" }
];

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderTable(users) {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = users
    .map(
      (u) => `
    <tr>
      <td class="col-checkbox">
        <label class="checkbox-wrapper">
          <input type="checkbox" class="row-checkbox" />
          <span class="checkbox-custom"></span>
        </label>
      </td>
      <td class="col-name">
        <a href="#" class="cell-name-link">${escapeHtml(u.name)}</a>
      </td>
      <td class="col-email">${escapeHtml(u.email)}</td>
      <td class="col-role">
        <span class="cell-role">${escapeHtml(u.role)} <a href="#" class="role-extra">+${u.extraRoles} roles</a></span>
      </td>
      <td class="col-status">
        <span class="status-pill">${escapeHtml(u.status)}</span>
      </td>
      <td class="col-team">${escapeHtml(u.team)}</td>
      <td class="col-company">${escapeHtml(u.companyTitle)}</td>
      <td class="col-region">${escapeHtml(u.region)}</td>
    </tr>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable(USERS);

  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    selectAll.addEventListener("change", () => {
      document.querySelectorAll(".row-checkbox").forEach((cb) => {
        cb.checked = selectAll.checked;
      });
    });
  }
});
