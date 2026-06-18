const form = document.querySelector("form");
// -----signature-----
const EmployeeName = document.querySelector("#EMPLOYEE-NAME");
const EmployeePosition = document.querySelector("#EMPLOYEE-POSITION");
const OfficeAddress = document.querySelector("address");
const OfficeNumber = document.querySelector("#OFFICE-NUMBER");
const OfficeFax = document.querySelector("#OFFICE-FAX");
const EmployeeCell = document.querySelector("#EMPLOYEE-CELL");
const EmployeeEmail = document.querySelector("#EMPLOYEE-EMAIL");
// -----button-----
const FormButton = document.querySelector("BUTTON");
const select = document.querySelector("select");

const offices = [
  {
    name: "Calabasas",
    address: "23801 Calabasas Rd Suite #1000",
    city: "Calabasas",
    state: "CA",
    zipcode: "91302",
    phone: "(818) 348-1100",
    fax: "(818) 348-4949",
  },
  {
    name: "Bakersfield",
    address: "1430 Truxtun Avenue, #725",
    city: "Bakersfield",
    state: "CA",
    zipcode: "93301",
    phone: "(661) 393-9700",
    fax: "(661) 393-9702",
  },
  {
    name: "Fresno",
    address: "7413 N. Cedar Ave. #102",
    city: "Fresno",
    state: "CA",
    zipcode: "93720",
    phone: "(559) 438-8848",
    fax: "(559) 438-6676",
  },
  {
    name: "Gardena/Torrance",
    address: "3868 West Carson St Suite 212",
    city: "Torrance",
    state: "CA",
    zipcode: "90503",
    phone: "(310) 329-1900",
    fax: "(310) 329-0300",
  },
  {
    name: "Camarillo",
    address: "601 E Daily Dr Ste. #208",
    city: "Camarillo",
    state: "CA",
    zipcode: "93010",
    phone: "(805) 604-9922",
    fax: "(805) 604-9933",
  },
  {
    name: "Ontario",
    address: "3990 Concours St Suite #200",
    city: "Ontario",
    state: "CA",
    zipcode: "91764",
    phone: "(909) 476-9000",
    fax: "(909) 476-9044",
  },
  {
    name: "Sacramento/Woodland",
    address: "3900 Lennane Drive, #130",
    city: "Sacramento",
    state: "CA",
    zipcode: "95834",
    phone: "(530) 669-1300",
    fax: "(530) 669-1304",
  },
  {
    name: "Valencia/Santa Clarita",
    address: "25250 Magic Mountain Parkway, #150",
    city: "Valencia",
    state: "CA",
    zipcode: "91355",
    phone: "(661) 295-3811",
    fax: "(661) 295-3812",
  },
  {
    name: "Fresno",
    address: "7413 N. Cedar Ave. #102",
    city: "Fresno",
    state: "CA",
    zipcode: "93720",
    phone: "(559) 438-8848",
    fax: "(559) 438-6676",
  },
  {
    name: "Maryland",
    address: "1414 W. Pulaski Highway Suite A",
    city: "Elkton",
    state: "MD",
    zipcode: "21921",
    phone: "(410) 287-8899",
    fax: "(410) 287-8099",
  },
  {
    name: "Oregon",
    address: "2225 Pacific Blvd SE #209",
    city: "Albany",
    state: "OR",
    zipcode: "97321",
    phone: "(541) 444-0800",
    fax: "(541) 666-2381",
  },
  {
    name: "Texas",
    address: "661 E. Main St. #200-247",
    city: "Midlothian",
    state: "TX",
    zipcode: "76065",
  },
  {
    name: "Modesto/Turlock",
    address: "935 W 18th St.",
    city: "Merced",
    state: "CA",
    zipcode: "95340",
  },
  {
    name: "Kansas",
    address: "6021 SW 29th St. Ste A #311",
    city: "Topeka",
    state: "KS",
    zipcode: "66614",
  },
  {
    name: "Iowa",
    address: "",
    city: "Cedar Falls",
    state: "IA",
    zipcode: "",
    phone: "",
    fax: "",
  },

  {
    name: "Massachusetts",
    address: "89 Cross St.",
    city: "Holliston",
    state: "MA",
    zipcode: "01746",
    phone: "(978) 730-3019",
  },
];

function officeFormatter(key) {
  OfficeAddress.innerHTML = `
    ${offices[0].address}<br/>
    ${offices[0].city},${offices[0].state} ${offices[0].zipcode}
    `;
  OfficeNumber.innerHTML = `Tel: ${offices[0].phone}`;
  OfficeFax.innerHTML = `Fax: ${offices[0].fax}`;
}

offices.forEach(function (element, key) {
  select[key] = new Option(element.name, element.key);
});

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

// ----- Copy Signature (Testing phase) — export only; preview/manual copy unchanged -----
const BANNER_IMAGE_CANDIDATES = [
  "https://www.exactstaff.com/wp-content/uploads/2026/06/three_logos.jpg",
  "https://exactstaff.com/wp-content/uploads/2026/06/three_logos.jpg",
];
const copySignatureButton = document.querySelector("#COPY-SIGNATURE");
const copyToast = document.querySelector("#COPY-TOAST");
const infoSeparator = document.querySelector("#INFO-SEPERATOR");
const previewBannerImg = document.querySelector(".signature img");

const LEGAL_DISCLAIMER =
  "Important Notice: This e-mail and any files transmitted with it are intended solely for the use of the individual or entity to which they are addressed and may contain confidential and/or privileged material. Any review, retransmission, dissemination or other confidential use of, or taking of any action in reliance upon, this information by persons or entities other than intended recipient is prohibited. If you have received this e-mail in error, please contact the sender and delete the material from your computer. Please note that any view opinions presented in this e-mail are solely those of the author and do not necessarily represent those of Exact Staff. and/or its affiliates. Finally, the recipient should check this e-mail and any attachments for the presence of viruses. Exact Staff accepts no liability for any damage caused by any virus transmitted by this e-mail.";

let cachedExportState = null;

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");
}

function testImageUrl(url) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.onload = function () {
      resolve(true);
    };
    img.onerror = function () {
      resolve(false);
    };
    img.src = url;
  });
}

async function resolveBannerSrc() {
  for (var i = 0; i < BANNER_IMAGE_CANDIDATES.length; i++) {
    if (await testImageUrl(BANNER_IMAGE_CANDIDATES[i])) {
      return { src: BANNER_IMAGE_CANDIDATES[i], source: "hosted" };
    }
  }

  if (previewBannerImg && previewBannerImg.src) {
    return { src: previewBannerImg.src, source: "embedded" };
  }

  return { src: BANNER_IMAGE_CANDIDATES[0], source: "fallback" };
}

function cacheSignatureExportState() {
  cachedExportState = {
    name: EmployeeName.textContent.trim(),
    position: EmployeePosition.textContent.trim(),
    addressHtml: OfficeAddress.innerHTML.trim(),
    tel: OfficeNumber.textContent.trim(),
    fax: OfficeFax.textContent.trim(),
    showSeparator: !infoSeparator || infoSeparator.style.display !== "none",
    cell: EmployeeCell.textContent.trim(),
    email: EmployeeEmail.textContent.trim(),
  };
}

function buildContactLine(state) {
  const { tel, fax, showSeparator } = state;
  if (tel && fax && showSeparator) {
    return `<span style="font-family:Helvetica,Arial,sans-serif;color:#000000;">${escapeHtml(tel)}</span> <span style="font-family:Helvetica,Arial,sans-serif;color:#000000;">|</span> <span style="font-family:Helvetica,Arial,sans-serif;color:#000000;">${escapeHtml(fax)}</span>`;
  }
  if (tel) {
    return `<span style="font-family:Helvetica,Arial,sans-serif;color:#000000;">${escapeHtml(tel)}</span>`;
  }
  if (fax) {
    return `<span style="font-family:Helvetica,Arial,sans-serif;color:#000000;">${escapeHtml(fax)}</span>`;
  }
  return "";
}

function buildSignatureExportHtml(state, bannerSrc) {
  const contactLine = buildContactLine(state);
  const cellLine = state.cell
    ? `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;display:block;">${escapeHtml(state.cell)}</span>`
    : "";
  const emailLine = `<a href="mailto:${encodeURIComponent(state.email)}" style="color:#2e8722;text-decoration:none;font-family:Helvetica,Arial,sans-serif;">${escapeHtml(state.email)}</a><span style="color:#2e8722;font-family:Helvetica,Arial,sans-serif;"> | </span><a href="https://www.exactstaff.com/" style="color:#2e8722;text-decoration:none;font-family:Helvetica,Arial,sans-serif;">www.exactstaff.com</a>`;
  const safeBannerSrc = escapeAttr(bannerSrc);

  const contactBlock =
    `<span style="font-weight:bold;font-size:14.5px;font-family:Helvetica,Arial,sans-serif;color:#000000;display:block;padding:0;margin:0;">${escapeHtml(state.name)}</span>` +
    `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;display:block;">${escapeHtml(state.position)}</span>` +
    `<br>` +
    `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;display:block;">Exact Staff, Inc.</span>` +
    `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;display:block;font-style:normal;">${state.addressHtml}</span>` +
    (contactLine
      ? `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;display:block;">${contactLine}</span>`
      : "") +
    cellLine +
    `<span style="padding:0;margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;display:block;">${emailLine}</span>`;

  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="550" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:Helvetica,Arial,sans-serif;font-size:14.5px;color:#000000;width:550px;">` +
    `<tr><td colspan="2" width="550" valign="top" style="padding:0;border:none;vertical-align:top;">${contactBlock}</td></tr>` +
    `<tr><td colspan="2" width="550" valign="top" style="padding:8px 0 0 0;border:none;vertical-align:top;">` +
    `<img src="${safeBannerSrc}" width="375" height="140" border="0" alt="Exact Staff" referrerpolicy="no-referrer" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;">` +
    `</td></tr>` +
    `<tr><td colspan="2" valign="top" style="padding:10px 0 0 0;border:none;vertical-align:top;">` +
    `<span style="font-size:11px;font-family:Helvetica,Arial,sans-serif;color:#000000;font-style:italic;">How am I doing? Please email our CEO, Karenjo Goodwin, at </span>` +
    `<a href="mailto:kgoodwin@exactstaff.com" style="color:#2e8722;font-size:11px;font-family:Helvetica,Arial,sans-serif;font-style:italic;text-decoration:none;">kgoodwin@exactstaff.com</a>` +
    `<span style="font-size:11px;font-family:Helvetica,Arial,sans-serif;color:#000000;font-style:italic;"> with any feedback.</span>` +
    `</td></tr>` +
    `<tr><td colspan="2" valign="top" style="padding:4px 0 0 0;border:none;vertical-align:top;">` +
    `<span style="font-size:6px;font-family:Helvetica,Arial,sans-serif;color:#000000;line-height:1.2;mso-line-height-rule:exactly;display:block;">${escapeHtml(LEGAL_DISCLAIMER)}</span>` +
    `</td></tr></table>`
  );
}

function buildSignaturePlainText(state) {
  const lines = [
    state.name,
    state.position,
    "Exact Staff, Inc.",
    OfficeAddress.textContent.trim().replace(/\s+/g, " "),
  ];

  const contactParts = [];
  if (state.tel) contactParts.push(state.tel);
  if (state.fax && state.showSeparator) contactParts.push(state.fax);
  if (contactParts.length) lines.push(contactParts.join(" | "));

  if (state.cell) lines.push(state.cell);
  lines.push(`${state.email} | www.exactstaff.com`);
  lines.push("");
  lines.push(
    "How am I doing? Please email our CEO, Karenjo Goodwin, at kgoodwin@exactstaff.com with any feedback."
  );
  lines.push("");
  lines.push(LEGAL_DISCLAIMER);

  return lines.join("\n");
}

function wrapClipboardHtml(fragment) {
  return (
    "<html>\r\n<body>\r\n" +
    "<!--StartFragment-->\r\n" +
    fragment +
    "\r\n<!--EndFragment-->\r\n" +
    "</body>\r\n</html>"
  );
}

function showCopyToast(message, isError) {
  if (!copyToast) return;
  copyToast.hidden = false;
  copyToast.textContent = message;
  copyToast.className = isError ? "copy-toast copy-toast--error" : "copy-toast copy-toast--success";
}

function copyHtmlFallback(html, plain) {
  return new Promise(function (resolve, reject) {
    function onCopy(e) {
      e.clipboardData.setData("text/html", html);
      e.clipboardData.setData("text/plain", plain);
      e.preventDefault();
    }

    document.addEventListener("copy", onCopy);
    try {
      var success = document.execCommand("copy");
      document.removeEventListener("copy", onCopy);
      if (success) resolve();
      else reject(new Error("execCommand copy failed"));
    } catch (err) {
      document.removeEventListener("copy", onCopy);
      reject(err);
    }
  });
}

function copyViaHiddenSelection(htmlFragment) {
  return new Promise(function (resolve, reject) {
    var container = document.createElement("div");
    container.contentEditable = "true";
    container.style.position = "fixed";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.innerHTML = htmlFragment;
    document.body.appendChild(container);

    var range = document.createRange();
    range.selectNodeContents(container);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      var success = document.execCommand("copy");
      selection.removeAllRanges();
      document.body.removeChild(container);
      if (success) resolve();
      else reject(new Error("selection copy failed"));
    } catch (err) {
      selection.removeAllRanges();
      document.body.removeChild(container);
      reject(err);
    }
  });
}

async function copySignatureToClipboard() {
  if (!cachedExportState) {
    showCopyToast("Please click Generate first.", true);
    return;
  }

  if (copySignatureButton) {
    copySignatureButton.disabled = true;
  }

  try {
    var banner = await resolveBannerSrc();
    var fragment = buildSignatureExportHtml(cachedExportState, banner.src);
    var html = wrapClipboardHtml(fragment);
    var plain = buildSignaturePlainText(cachedExportState);
    var successMessage =
      "Signature copied (testing). Paste into your email signature settings.";

    if (banner.source === "embedded") {
      successMessage +=
        " Using embedded banner because the hosted image URL is not reachable.";
    } else if (banner.source === "fallback") {
      successMessage +=
        " Warning: banner image URL could not be verified.";
    }

    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard && navigator.clipboard.write) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([html], { type: "text/html" }),
            "text/plain": new Blob([plain], { type: "text/plain" }),
          }),
        ]);
        showCopyToast(successMessage);
        return;
      }
    } catch (err) {
      // fall through
    }

    try {
      await copyHtmlFallback(html, plain);
      showCopyToast(successMessage);
      return;
    } catch (err) {
      // fall through
    }

    await copyViaHiddenSelection(fragment);
    showCopyToast(successMessage);
  } catch (err) {
    showCopyToast(
      "Copy failed. Use manual copy from the signature box below.",
      true
    );
  } finally {
    if (copySignatureButton) {
      copySignatureButton.disabled = false;
    }
  }
}

if (copySignatureButton) {
  copySignatureButton.addEventListener("click", copySignatureToClipboard);
}

function handleSubmit(e) {
  e.preventDefault();
  const newEmployee = {
    name: e.currentTarget.name.value,
    position: e.currentTarget.position.value,
    location: e.currentTarget.location.value,
    email: e.currentTarget.email.value,
    cell: e.currentTarget.cell.value,
  };
  EmployeeName.innerHTML = newEmployee.name;
  EmployeePosition.innerHTML = newEmployee.position;
  if (newEmployee.cell != "") {
    EmployeeCell.innerHTML = `Cell: ${formatPhoneNumber(newEmployee.cell)}`;
  }
  EmployeeEmail.innerHTML = newEmployee.email;

  document.querySelector(
    "#EMPLOYEE-EMAIL"
  ).href = `mailto:${newEmployee.email}`;

  switch (select.value) {
    case "Calabasas":
      OfficeAddress.innerHTML = `
            ${offices[0].address}<br/>
            ${offices[0].city},${offices[0].state} ${offices[0].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[0].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[0].fax}`;
      break;
    case "Bakersfield":
      OfficeAddress.innerHTML = `
            ${offices[1].address}<br/>
            ${offices[1].city},${offices[1].state} ${offices[1].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[1].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[1].fax}`;
      break;
    case "Fresno":
      OfficeAddress.innerHTML = `
            ${offices[2].address}<br/>
            ${offices[2].city},${offices[2].state} ${offices[2].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[2].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[2].fax}`;
      break;
    case "Gardena/Torrance":
      OfficeAddress.innerHTML = `
            ${offices[3].address}<br/>
            ${offices[3].city},${offices[3].state} ${offices[3].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[3].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[3].fax}`;
      break;
    case "Camarillo":
      OfficeAddress.innerHTML = `
            ${offices[4].address}<br/>
            ${offices[4].city},${offices[4].state} ${offices[4].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[4].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[4].fax}`;
      break;
    case "Ontario":
      OfficeAddress.innerHTML = `
            ${offices[5].address}<br/>
            ${offices[5].city},${offices[5].state} ${offices[5].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[5].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[5].fax}`;
      break;
    case "Sacramento/Woodland":
      OfficeAddress.innerHTML = `
            ${offices[6].address}<br/>
            ${offices[6].city},${offices[6].state} ${offices[6].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[6].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[6].fax}`;
      break;
    case "Valencia/Santa Clarita":
      OfficeAddress.innerHTML = `
            ${offices[7].address}<br/>
            ${offices[7].city},${offices[7].state} ${offices[7].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[7].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[7].fax}`;
      break;
    case "Fresno":
      OfficeAddress.innerHTML = `
            ${offices[8].address}<br/>
            ${offices[8].city},${offices[8].state} ${offices[8].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[8].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[8].fax}`;
      break;
    case "Maryland":
      OfficeAddress.innerHTML = `
            ${offices[9].address}<br/>
            ${offices[9].city},${offices[9].state} ${offices[9].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[9].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[9].fax}`;
      break;
    case "Oregon":
      OfficeAddress.innerHTML = `
            ${offices[10].address}<br/>
            ${offices[10].city},${offices[10].state} ${offices[10].zipcode}
            `;
      OfficeNumber.innerHTML = `Tel: ${offices[10].phone}`;
      OfficeFax.innerHTML = `Fax: ${offices[10].fax}`;
      break;
    case "Texas":
      OfficeAddress.innerHTML = `
            ${offices[11].address}<br/>
            ${offices[11].city},${offices[11].state} ${offices[11].zipcode}
            `;
      OfficeNumber.innerHTML = ``;
      OfficeFax.innerHTML = ``;
      document.querySelector("#INFO-SEPERATOR").style.display = "none";
      break;
    case "Modesto/Turlock":
      OfficeAddress.innerHTML = `
            ${offices[12].address}<br/>
            ${offices[12].city},${offices[12].state} ${offices[12].zipcode}
            `;
      document.querySelector("#INFO-SEPERATOR").style.display = "none";
      OfficeNumber.innerHTML = ``;
      OfficeFax.innerHTML = ``;
      break;
    case "Kansas":
      OfficeAddress.innerHTML = `
            ${offices[13].address}<br/>
            ${offices[13].city},${offices[13].state} ${offices[13].zipcode}
            `;
      document.querySelector("#INFO-SEPERATOR").style.display = "none";
      OfficeNumber.innerHTML = ``;
      OfficeFax.innerHTML = ``;
      break;
    case "Iowa":
      OfficeAddress.innerHTML = `
            ${offices[14].city},${offices[14].state} ${offices[14].zipcode}
            `;
      document.querySelector("#INFO-SEPERATOR").style.display = "none";
      OfficeNumber.innerHTML = ``;
      OfficeFax.innerHTML = ``;
      break;
    case "Massachusetts":
      OfficeAddress.innerHTML = `
            ${offices[15].city},${offices[15].state} ${offices[15].zipcode}
            `;
      document.querySelector("#INFO-SEPERATOR").style.display = "none";
      OfficeNumber.innerHTML = `Tel: ${offices[15].phone}`;
      OfficeFax.innerHTML = ``;
      break;
    default:
      OfficeAddress.innerHTML = "No Valid Location";
  }

  cacheSignatureExportState();
  if (copySignatureButton) {
    copySignatureButton.disabled = false;
  }
}

form.addEventListener("submit", handleSubmit);
