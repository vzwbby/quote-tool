// __CONFIG_START__
let CONFIG = {
  admin: { password:"vzadmin", specialistEmail:"", managerEmail:"" },
  email: { serviceId:"", templateId:"", publicKey:"" },
  simplicity: { priceFullDiscount:30, priceAutopayOnly:45, priceNoDiscount:55, deviceDiscountPct:0.5, deviceDiscountCap:25 },
  myplan: {
    welcome: {1:65, 2:55, 3:40, "4+":30},
    plus:    {1:80, 2:70, 3:55, "4+":45},
    ultimate:{1:95, 2:85, 3:70, "4+":60}
  },
  devices: {
    watch:  { basic:15, premium:25 },
    tablet: { welcome:20, unlimited:40, unlimitedPlus:50 }
  },
  promos: "Check InfoManager Promotions for current device deals.\nAsk about Verizon Home Internet discount ($15/mo off when bundled).\nSimplicity: No activation fees for new customers.",
  perks: {
    individual: [
      {id:"disney-ads",    name:"Disney+ (with Ads)",          price:7.99,  category:"Streaming"},
      {id:"hulu-ads",      name:"Hulu (with Ads)",              price:7.99,  category:"Streaming"},
      {id:"espn-plus",     name:"ESPN+",                        price:10.99, category:"Streaming"},
      {id:"netflix-ads",   name:"Netflix (Standard w/ Ads)",    price:7.99,  category:"Streaming"},
      {id:"max-ads",       name:"Max (with Ads)",               price:9.99,  category:"Streaming"},
      {id:"4k-video",      name:"Premium Video Streaming (4K)", price:10,    category:"Video"},
      {id:"apple-music-f", name:"Apple Music Family",           price:16.99, category:"Music"},
      {id:"youtube-prem",  name:"YouTube Premium",              price:13.99, category:"Music"},
      {id:"vz-fam-plus",   name:"Verizon Family Plus",          price:10,    category:"Verizon"},
      {id:"vz-cloud-unl",  name:"Verizon Cloud Unlimited",      price:10,    category:"Verizon"},
      {id:"second-num",    name:"Second Number",                 price:10,    category:"Verizon"},
      {id:"hs-100gb",      name:"100 GB Hotspot Add-On",        price:10,    category:"Hotspot"},
      {id:"hs-unlimited",  name:"Unlimited Hotspot Add-On",     price:20,    category:"Hotspot"},
      {id:"google-ai",     name:"Google AI Pro",                price:19.99, category:"Productivity"},
      {id:"global-call",   name:"Global Calling Plus (300 min)",price:15,    category:"Travel"},
      {id:"intl-15gb",     name:"15 GB Intl Data Add-On",      price:10,    category:"Travel"},
      {id:"travelpass-3",  name:"3 TravelPass Days",            price:12,    category:"Travel"}
    ],
    bundles: [
      {id:"movie-lovers", name:"Movie & Show Lovers",    perkIds:["disney-ads","hulu-ads","espn-plus","netflix-ads","max-ads"],          price:23, retailValue:44},
      {id:"apple-fam",    name:"Families on Apple",      perkIds:["apple-music-f","vz-fam-plus"],                                         price:20, retailValue:27},
      {id:"android-fam",  name:"Families on Android",    perkIds:["youtube-prem","vz-fam-plus"],                                          price:20, retailValue:24},
      {id:"essentials",   name:"Essentials",             perkIds:["hs-unlimited","vz-cloud-unl"],                                         price:20, retailValue:30},
      {id:"fans",         name:"Fans",                   perkIds:["disney-ads","hulu-ads","espn-plus","youtube-prem","4k-video"],          price:25, retailValue:50},
      {id:"pros",         name:"Pros",                   perkIds:["google-ai","hs-100gb","second-num"],                                   price:30, retailValue:40},
      {id:"travelers",    name:"Travelers",              perkIds:["global-call","vz-cloud-unl","travelpass-3"],                            price:30, retailValue:37},
      {id:"apple-spec",   name:"Apple Specialists",      perkIds:["apple-music-f","4k-video"],                                            price:25, retailValue:27},
      {id:"android-spec", name:"Android Specialists",    perkIds:["youtube-prem","google-ai","4k-video"],                                 price:25, retailValue:44},
      {id:"pros-up",      name:"Pros (Upgrade)",         perkIds:["google-ai","hs-unlimited","second-num"],                               price:35, retailValue:50},
      {id:"apple-dwn",    name:"Apple Specialists (Base)",perkIds:["apple-music-f"],                                                      price:20, retailValue:17}
    ]
  },
  simplicityUpgrades: [
    {id:"simp-plus", name:"Simplicity+",    price:6,  desc:"Upgrade your phone every year on Verizon"},
    {id:"simp-pro",  name:"Simplicity Pro", price:12, desc:"Annual upgrade on any carrier + device unlock"}
  ],
  phones: [
    {type:"phone",  brand:"Apple",   name:"iPhone 16",          capacities:[{s:"128GB",p:799},{s:"256GB",p:899},{s:"512GB",p:1099}],            colors:["Black","White","Pink","Teal","Ultramarine"],              promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"phone",  brand:"Apple",   name:"iPhone 16 Plus",     capacities:[{s:"256GB",p:899},{s:"512GB",p:1099},{s:"1TB",p:1299}],              colors:["Black","White","Pink","Teal","Ultramarine"],              promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"phone",  brand:"Apple",   name:"iPhone 16 Pro",      capacities:[{s:"256GB",p:999},{s:"512GB",p:1099},{s:"1TB",p:1299}],              colors:["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"], promoEligible:true, byodEligible:true, active:true, notes:""},
    {type:"phone",  brand:"Apple",   name:"iPhone 16 Pro Max",  capacities:[{s:"256GB",p:1199},{s:"512GB",p:1299},{s:"1TB",p:1499}],             colors:["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"], promoEligible:true, byodEligible:true, active:true, notes:""},
    {type:"phone",  brand:"Samsung", name:"Galaxy S25",         capacities:[{s:"128GB",p:799},{s:"256GB",p:859}],                                colors:["Icy Blue","Mint","Navy","Silver Shadow"],                 promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"phone",  brand:"Samsung", name:"Galaxy S25+",        capacities:[{s:"256GB",p:999},{s:"512GB",p:1119}],                               colors:["Icy Blue","Mint","Navy","Silver Shadow"],                 promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"phone",  brand:"Samsung", name:"Galaxy S25 Ultra",   capacities:[{s:"256GB",p:1299},{s:"512GB",p:1419},{s:"1TB",p:1659}],             colors:["Titanium Black","Titanium Gray","Titanium Silverblue","Titanium Whitesilver"], promoEligible:true, byodEligible:true, active:true, notes:""},
    {type:"phone",  brand:"Google",  name:"Pixel 9",            capacities:[{s:"128GB",p:799},{s:"256GB",p:899}],                                colors:["Obsidian","Porcelain","Wintergreen","Peony"],             promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"phone",  brand:"Google",  name:"Pixel 9 Pro",        capacities:[{s:"128GB",p:999},{s:"256GB",p:1099},{s:"512GB",p:1199}],            colors:["Obsidian","Porcelain","Hazel","Rose Quartz"],             promoEligible:true,  byodEligible:true,  active:true, notes:""},
    {type:"tablet", brand:"Apple",   name:"iPad (10th Gen)",    capacities:[{s:"64GB",p:449},{s:"256GB",p:599}],                                 colors:["Blue","Pink","Yellow","Silver"],                          promoEligible:false, byodEligible:false, active:true, notes:""},
    {type:"tablet", brand:"Apple",   name:"iPad Air (M2)",      capacities:[{s:"128GB",p:599},{s:"256GB",p:749},{s:"512GB",p:999}],              colors:["Blue","Purple","Starlight","Space Gray"],                 promoEligible:false, byodEligible:false, active:true, notes:""},
    {type:"tablet", brand:"Samsung", name:"Galaxy Tab S10 FE",  capacities:[{s:"128GB",p:549},{s:"256GB",p:649}],                                colors:["Graphite","Mint","Lavender"],                             promoEligible:false, byodEligible:false, active:true, notes:""},
    {type:"watch",  brand:"Apple",   name:"Apple Watch Series 10",capacities:[{s:"GPS 42mm",p:399},{s:"GPS+Cell 42mm",p:499},{s:"GPS 46mm",p:429},{s:"GPS+Cell 46mm",p:529}], colors:["Aluminum","Black Aluminum","Rose Gold Aluminum","Silver Aluminum"], promoEligible:false, byodEligible:false, active:true, notes:""},
    {type:"watch",  brand:"Samsung", name:"Galaxy Watch 7",     capacities:[{s:"40mm",p:299},{s:"44mm",p:329}],                                  colors:["Cream","Green","Silver"],                                promoEligible:false, byodEligible:false, active:true, notes:""}
  ]
};
// __CONFIG_END__

// ============================================================
// STATE
// ============================================================
let state = {
  lineCount: 1,
  lines: [],
  currentLineIdx: 0,
  currentLineQ: 0,
  devices: { tablets:0, watches:0 },
  quotes: {},
  selectedPlanType: null,
  navHistory: ["s-welcome"],
  phoneBrandFilter: "all"
};

function freshLine(i) {
  return { name:"Line "+(i+1), hotspot:0, travel:0, deviceDeal:"byod",
           selectedPhone:null, selectedPlan:null,
           bundleId:null, perkIds:[], simpUpgrade:null };
}

// ============================================================
// NAVIGATION
// ============================================================
function go(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
  window.scrollTo(0,0);
  const T = {"s-welcome":"Plan Advisor","s-lines":"New Quote","s-names":"Name Lines",
    "s-lineq":"Line Details","s-devices":"Connected Devices","s-results":"Results",
    "s-customize":"Customize Quote","s-email":"Email Quote",
    "s-admin-login":"Admin","s-admin":"Admin Panel"};
  document.getElementById("hdr-title").textContent = T[screenId]||"Plan Advisor";
}

// ============================================================
// STEP 1
// ============================================================
function setLines(n) {
  if (n === 6) { go("s-lines-custom"); return; }
  state.lineCount = n;
  state.lines = Array.from({length:n}, (_,i) => freshLine(i));
  buildNameFields(); go("s-names");
}
function setLinesCustom() {
  const n = Math.max(6, Math.min(12, parseInt(document.getElementById("custom-lines").value)||6));
  state.lineCount = n;
  state.lines = Array.from({length:n}, (_,i) => freshLine(i));
  buildNameFields(); go("s-names");
}

// ============================================================
// STEP 2: NAMES
// ============================================================
function buildNameFields() {
  const c = document.getElementById("name-fields");
  c.innerHTML = state.lines.map((l,i) => `
    <div class="card" style="padding:14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div class="lbadge">${i+1}</div>
        <div style="font-weight:700">Line ${i+1}</div>
      </div>
      <input class="inp" id="name-${i}" placeholder="Line ${i+1}" style="margin-bottom:0" value="">
    </div>`).join("");
}
function saveNames() {
  state.lines.forEach((l,i) => {
    const v = document.getElementById("name-"+i).value.trim();
    l.name = v || "Line "+(i+1);
  });
  state.currentLineIdx = 0;
  state.currentLineQ = 0;
  buildLineQ(); go("s-lineq");
}

// ============================================================
// STEP 3: PER-LINE QUESTIONS
// ============================================================
const HS_OPTS = [
  {val:0, label:"None",            sub:"No hotspot needed"},
  {val:1, label:"Under 10 GB",     sub:"Checking email, light browsing"},
  {val:2, label:"Under 20 GB",     sub:"Occasional streaming or remote work"},
  {val:3, label:"Under 100 GB",    sub:"Regular remote work, frequent hotspot use"},
  {val:4, label:"Under 200 GB",    sub:"Heavy daily use, primary connection at times"},
  {val:5, label:"200 GB or more",  sub:"Replacing home internet or extreme use"}
];
const TRAVEL_OPTS = [
  {val:0, label:"Never internationally", sub:"US, Mexico & Canada only"},
  {val:1, label:"Once a year or less",   sub:"Occasional trip abroad"},
  {val:2, label:"More than once a year", sub:"Regular international travel or business"}
];
const DEAL_OPTS = [
  {val:"byod",   label:"Bring Your Own Device (BYOD)",      sub:"Transferring number, keeping current phone"},
  {val:"retail", label:"Full Retail Price",                  sub:"Buying new at full price or financing — no trade-in. Note: current-gen iPhones require activation."},
  {val:"promo",  label:"Device Promotion / Trade-In",        sub:"Wants a deal on a new device — requires myPlan"}
];
const Q_LABELS = ["Hotspot Usage","International Travel","Phone Selection"];

function lineqSteps(deal) {
  return (deal === "byod") ? 2 : 3;
}

function buildLineQ() {
  const idx = state.currentLineIdx;
  const q = state.currentLineQ;
  const line = state.lines[idx];
  const totalQ = lineqSteps(line.deviceDeal);

  // Line dots
  let lineDots = state.lines.map((_,i) => {
    const cls = i < idx ? "done" : i === idx ? "on" : "";
    return `<span class="dot ${cls}" style="margin-right:3px"></span>`;
  }).join("");

  // Q steps
  let qSteps = [0,1,2].slice(0, totalQ > 2 ? 3 : 2).map((qi) => {
    const cls = qi < q ? "done" : qi === q ? "on" : "";
    return `<div class="lq-step ${cls}"></div>`;
  }).join("");

  let body = "";

  if (q === 0) {
    // Hotspot
    body = `<div class="sh">Hotspot Usage</div><div class="ss">${line.name}'s mobile hotspot needs</div>`;
    body += HS_OPTS.map(o => `<button class="choice ${line.hotspot===o.val?"sel":""}" onclick="pickLQ('hotspot',${o.val},this)"><span class="cl">${o.label}</span><span class="cs">${o.sub}</span></button>`).join("");
  } else if (q === 1) {
    // Travel
    body = `<div class="sh">International Travel</div><div class="ss">${line.name}'s international usage</div>`;
    body += TRAVEL_OPTS.map(o => `<button class="choice ${line.travel===o.val?"sel":""}" onclick="pickLQ('travel',${o.val},this)"><span class="cl">${o.label}</span><span class="cs">${o.sub}</span></button>`).join("");
  } else if (q === 2) {
    // Deal
    body = `<div class="sh">Getting a Phone?</div><div class="ss">${line.name}</div>`;
    body += DEAL_OPTS.map(o => `<button class="choice ${line.deviceDeal===o.val?"sel":""}" onclick="pickDeal('${o.val}',this)"><span class="cl">${o.label}</span><span class="cs">${o.sub}</span></button>`).join("");
  } else if (q === 3) {
    // Phone picker
    body = buildPhonePickerHTML(line, idx);
  }

  document.getElementById("lineq-content").innerHTML = `
    <div class="lq-prog">
      <div class="lbadge">${idx+1}</div>
      <div style="flex:1">
        <div style="font-weight:800;font-size:15px">${line.name}</div>
        <div class="lq-steps">${qSteps}</div>
      </div>
      <div style="font-size:11px;color:var(--gray)">Line ${idx+1} of ${state.lines.length}</div>
    </div>
    <div style="display:flex;gap:3px;margin-bottom:18px;flex-wrap:wrap">${lineDots}</div>
    ${body}
  `;

  const nextBtn = document.getElementById("lineq-next-btn");
  const backBtn = document.getElementById("lineq-back-btn");
  const isLastLine = idx === state.lines.length - 1;
  const isLastQ = q === (lineqSteps(line.deviceDeal) - 1);
  nextBtn.textContent = (isLastLine && isLastQ) ? "Devices →" : "Next →";
  backBtn.textContent = (idx === 0 && q === 0) ? "← Names" : "← Back";

  // Hide next btn on phone picker (they must tap a phone)
  if (q === 3) {
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }
}

function pickLQ(field, val, el) {
  state.lines[state.currentLineIdx][field] = val;
  el.closest("#lineq-content").querySelectorAll(".choice").forEach(b => b.classList.remove("sel"));
  el.classList.add("sel");
}

function pickDeal(val, el) {
  state.lines[state.currentLineIdx].deviceDeal = val;
  el.closest("#lineq-content").querySelectorAll(".choice").forEach(b => b.classList.remove("sel"));
  el.classList.add("sel");
}

function lineqNext() {
  const line = state.lines[state.currentLineIdx];
  const maxQ = lineqSteps(line.deviceDeal) - 1;
  if (state.currentLineQ < maxQ) {
    state.currentLineQ++;
    buildLineQ();
  } else {
    // Move to next line or devices
    if (state.currentLineIdx < state.lines.length - 1) {
      state.currentLineIdx++;
      state.currentLineQ = 0;
      buildLineQ();
    } else {
      go("s-devices");
    }
  }
}

function lineqBack() {
  if (state.currentLineQ > 0) {
    state.currentLineQ--;
    buildLineQ();
  } else if (state.currentLineIdx > 0) {
    state.currentLineIdx--;
    const prevLine = state.lines[state.currentLineIdx];
    state.currentLineQ = lineqSteps(prevLine.deviceDeal) - 1;
    buildLineQ();
  } else {
    go("s-names");
  }
}

// ============================================================
// PHONE PICKER
// ============================================================
function buildPhonePickerHTML(line, lineIdx) {
  const phones = CONFIG.phones.filter(p => p.type === "phone" && p.active);
  if (!phones.length) {
    return `<div class="sh">Select a Phone</div>
      <div class="info-box">No phones in database yet. Add phones in Admin > Devices, or skip for now.</div>
      <button class="btn btn-ghost mt2" onclick="skipPhone()">Skip / Decide Later</button>`;
  }

  const brands = ["All", ...new Set(phones.map(p => p.brand))];
  const filter = state.phoneBrandFilter || "all";
  const filtered = filter === "all" ? phones : phones.filter(p => p.brand === filter);

  const brandBtns = brands.map(b =>
    `<button class="bf-btn ${(b === "All" ? "all" : b) === filter ? "on":""}" onclick="setBrandFilter('${b === "All" ? "all" : b}')">${b}</button>`
  ).join("");

  const sel = line.selectedPhone;
  const phoneCards = filtered.map((ph, fi) => {
    const realIdx = CONFIG.phones.indexOf(ph);
    const isExp = sel && sel.phoneIdx === realIdx;
    const isSel = isExp && sel.capIdx !== null && sel.capIdx !== undefined;
    const minP = Math.min(...ph.capacities.map(c => c.p));
    const capBtns = ph.capacities.map((c,ci) =>
      `<button class="cap-btn ${isExp && sel.capIdx === ci ? "sel":""}" onclick="selectCap(${realIdx},${ci})">${c.s} &mdash; $${c.p}</button>`
    ).join("");
    const colorSwatches = ph.colors.map(col => {
      const colMap = {
        "Black":"#1a1a1a","White":"#f5f5f5","Pink":"#ffb6c1","Teal":"#008080","Ultramarine":"#3f00ff",
        "Black Titanium":"#2c2c2e","White Titanium":"#f2f2f0","Natural Titanium":"#a8a39d","Desert Titanium":"#c9b99a",
        "Icy Blue":"#a8d8ea","Mint":"#98d8c8","Navy":"#000080","Silver Shadow":"#c0c0c0",
        "Titanium Black":"#2c2c2c","Titanium Gray":"#808080","Titanium Silverblue":"#b0c4de","Titanium Whitesilver":"#e8e8e8",
        "Obsidian":"#1a1a1a","Porcelain":"#f2ede8","Wintergreen":"#2d6a4f","Peony":"#db7093",
        "Hazel":"#8b7355","Rose Quartz":"#f7cac9","Blue":"#007aff","Purple":"#9b59b6",
        "Starlight":"#e8e0d5","Space Gray":"#3a3a3c","Yellow":"#ffd60a","Silver":"#c0c0c0",
        "Graphite":"#3a3a3c","Lavender":"#e6e6fa","Cream":"#fffdd0","Green":"#355e3b",
        "Aluminum":"#a8a8a8","Black Aluminum":"#2c2c2e","Rose Gold Aluminum":"#b76e79","Silver Aluminum":"#d4d4d2",
        "Red":"#e60023","Coral":"#ff6b6b","Midnight":"#1c1c1e","Starlight2":"#e3ddd3"
      };
      const bg = colMap[col] || "#cccccc";
      const isSC = isExp && sel.color === col;
      return `<span class="color-swatch ${isSC?"sel":""}" style="background:${bg}" title="${col}" onclick="selectColor(${realIdx},'${col.replace(/'/g,"\\'")}')"></span>`;
    }).join("");

    const confirmBtn = isExp && sel.capIdx !== null && sel.capIdx !== undefined && sel.color
      ? `<button class="btn btn-red btn-sm" onclick="confirmPhone(${realIdx})">Select This Phone ✓</button>`
      : `<div style="font-size:12px;color:var(--gray);text-align:center;margin-top:4px">Pick a size and color to confirm</div>`;

    return `<div class="phone-card ${isExp?"expanded":""} ${isSel&&sel.color?"selected-phone":""}" onclick="if(event.target===this||event.target.classList.contains('phone-hd')||event.target.classList.contains('phone-name')||event.target.classList.contains('phone-brand'))togglePhone(${realIdx})">
      <div class="phone-hd" onclick="togglePhone(${realIdx})">
        <div>
          <div class="phone-brand">${ph.brand}</div>
          <div class="phone-name">${ph.name}</div>
          ${ph.promoEligible ? '<span class="pill pill-r" style="font-size:10px">Promo Eligible</span>' : ""}
        </div>
        <div style="text-align:right">
          <div class="phone-from-label">from</div>
          <div class="phone-from-price">$${minP}</div>
        </div>
      </div>
      ${isExp ? `<div class="phone-expand">
        <div class="perk-section-title">Storage</div>
        <div class="cap-grid">${capBtns}</div>
        <span class="color-label">Color</span>
        <div class="color-row">${colorSwatches}</div>
        ${confirmBtn}
      </div>` : ""}
    </div>`;
  }).join("");

  const selInfo = sel ? (() => {
    const ph = CONFIG.phones[sel.phoneIdx];
    const cap = ph ? ph.capacities[sel.capIdx] : null;
    return ph && cap ? `<div class="info-box" style="margin-bottom:12px">&#10003; Selected: <strong>${ph.name} ${cap.s}</strong>${sel.color ? " in "+sel.color : ""}</div>` : "";
  })() : "";

  return `<div class="sh">Select a Phone</div>
    <div class="ss">${line.name}'s new device</div>
    ${selInfo}
    <div class="brand-filter">${brandBtns}</div>
    <div id="phone-list">${phoneCards}</div>
    <button class="btn btn-ghost mt2" onclick="skipPhone()">Skip / Decide Later</button>
    <div style="height:20px"></div>`;
}

function setBrandFilter(brand) {
  state.phoneBrandFilter = brand;
  buildLineQ();
}

function togglePhone(realIdx) {
  const line = state.lines[state.currentLineIdx];
  if (line.selectedPhone && line.selectedPhone.phoneIdx === realIdx) {
    line.selectedPhone = null;
  } else {
    line.selectedPhone = { phoneIdx:realIdx, capIdx:null, color:null };
  }
  buildLineQ();
}

function selectCap(realIdx, capIdx) {
  const line = state.lines[state.currentLineIdx];
  if (!line.selectedPhone || line.selectedPhone.phoneIdx !== realIdx) {
    line.selectedPhone = { phoneIdx:realIdx, capIdx, color:null };
  } else {
    line.selectedPhone.capIdx = capIdx;
  }
  buildLineQ();
}

function selectColor(realIdx, color) {
  const line = state.lines[state.currentLineIdx];
  if (!line.selectedPhone || line.selectedPhone.phoneIdx !== realIdx) {
    line.selectedPhone = { phoneIdx:realIdx, capIdx:null, color };
  } else {
    line.selectedPhone.color = color;
  }
  buildLineQ();
}

function confirmPhone(realIdx) {
  lineqNext();
}

function skipPhone() {
  lineqNext();
}

// ============================================================
// STEP 4: DEVICES
// ============================================================
function devBack() {
  state.currentLineIdx = state.lines.length - 1;
  const lastLine = state.lines[state.currentLineIdx];
  state.currentLineQ = lineqSteps(lastLine.deviceDeal) - 1;
  buildLineQ();
  go("s-lineq");
}

function adjDevice(type, delta) {
  state.devices[type] = Math.max(0, (state.devices[type]||0) + delta);
  document.getElementById("cnt-"+type).textContent = state.devices[type];
}

// ============================================================
// CALCULATION
// ============================================================
function nKey(n) { return n >= 4 ? "4+" : n; }

function calcDeviceDiscount(planKey, tablets, watches) {
  const d = CONFIG.devices;
  let prices = [];
  for (let i=0; i<tablets; i++) prices.push(d.tablet.unlimited);
  for (let i=0; i<watches; i++) prices.push(d.watch.basic);
  prices.sort((a,b) => b-a);
  const base = prices.reduce((s,p)=>s+p, 0);
  let disc = 0;
  if (planKey === "simplicity") {
    disc = prices.reduce((s,p) => s + Math.min(p * CONFIG.simplicity.deviceDiscountPct, CONFIG.simplicity.deviceDiscountCap), 0);
  } else if (planKey === "ultimate") {
    disc = prices.slice(0,2).reduce((s,p) => s + Math.min(p*0.5, 20), 0);
  } else if (planKey === "plus") {
    disc = prices.slice(0,1).reduce((s,p) => s + Math.min(p*0.5, 20), 0);
  }
  return { base, disc, net: base-disc };
}

function recommendTier(line) {
  const {hotspot, travel, deviceDeal} = line;
  if (travel >= 2 || hotspot >= 3) return "ultimate";
  if (hotspot === 2) return "plus";
  return "welcome";
}

function calcMyPlan() {
  const n = state.lineCount;
  const nk = nKey(n);
  const {tablets, watches} = state.devices;
  const anyPromo = state.lines.some(l => l.deviceDeal === "promo");

  state.lines.forEach(l => {
    if (!l.selectedPlan) l.selectedPlan = recommendTier(l);
  });

  const phoneTotal = state.lines.reduce((s,l) => s + CONFIG.myplan[l.selectedPlan][nk], 0);
  const devCalc = calcDeviceDiscount("myplan_mixed", tablets, watches);
  // For device discount, use the "best" tier on account
  const hasPlusTier = state.lines.some(l => l.selectedPlan === "plus" || l.selectedPlan === "ultimate");
  const hasUltTier  = state.lines.some(l => l.selectedPlan === "ultimate");
  const discKey = hasUltTier ? "ultimate" : hasPlusTier ? "plus" : "welcome";
  const devCalcCorrect = calcDeviceDiscount(discKey, tablets, watches);

  return {
    type: "myplan",
    phoneTotal,
    deviceBase: devCalcCorrect.base,
    deviceDisc: devCalcCorrect.disc,
    deviceNet:  devCalcCorrect.net,
    grandTotal: phoneTotal + devCalcCorrect.net,
    forced: anyPromo
  };
}

function calcSimplicity() {
  const n = state.lineCount;
  const {tablets, watches} = state.devices;
  const phoneTotal = CONFIG.simplicity.priceFullDiscount * n;
  const devCalc = calcDeviceDiscount("simplicity", tablets, watches);
  return {
    type: "simplicity",
    pricePerLine: CONFIG.simplicity.priceFullDiscount,
    phoneTotal,
    deviceBase: devCalc.base,
    deviceDisc: devCalc.disc,
    deviceNet:  devCalc.net,
    grandTotal: phoneTotal + devCalc.net
  };
}

function calcAndShow() {
  const anyPromo = state.lines.some(l => l.deviceDeal === "promo");
  state.quotes.myplan = calcMyPlan();
  state.quotes.simplicity = calcSimplicity();

  // Reset line perks
  state.lines.forEach(l => { l.bundleId = null; l.perkIds = []; l.simpUpgrade = null; });

  buildResults(anyPromo);
  go("s-results");
}

// ============================================================
// RESULTS
// ============================================================
function buildResults(anyPromo) {
  const sq = state.quotes.simplicity;
  const mq = state.quotes.myplan;
  const n = state.lineCount;

  document.getElementById("res-subtitle").textContent =
    `${n} line${n>1?"s":""} · tap a card to build the full quote`;

  let cheapKey, recKey;
  if (anyPromo) {
    cheapKey = "myplan"; recKey = "myplan";
  } else {
    cheapKey = sq.grandTotal <= mq.grandTotal ? "simplicity" : "myplan";
    recKey = cheapKey;
    // Override rec if travel/hotspot needs push to myplan despite cost
    const anyIntl = state.lines.some(l => l.travel >= 2);
    if (anyIntl && cheapKey === "simplicity") recKey = "myplan";
  }

  state.cheapKey = cheapKey;
  state.recKey = recKey;

  const card = (key, q, badges) => `
    <div class="res-card ${key===recKey?"rec":""}" onclick="openCustomize('${key}')">
      ${badges}
      <div class="res-plan">${key==="simplicity" ? "Simplicity Plan" : "myPlan (mix & match)"}</div>
      <div class="res-price">$${q.grandTotal}</div>
      <div class="res-mo">/month est.</div>
      ${key==="myplan" ? `<div style="font-size:11px;color:var(--gray);margin-top:6px">Per-line tiers can be customized</div>` : ""}
      <div class="res-tap">Tap to customize →</div>
    </div>`;

  const same = cheapKey === recKey;
  let gridHTML;
  if (same) {
    const q = cheapKey === "simplicity" ? sq : mq;
    gridHTML = card(cheapKey, q,
      `<span class="res-badge badge-cheap">✓ Lowest Cost</span>
       <span class="res-badge badge-rec" style="margin-left:6px">★ Recommended</span>`);
    document.getElementById("res-grid").innerHTML = `<div style="grid-column:1/-1">${gridHTML}</div>`;
  } else {
    document.getElementById("res-grid").innerHTML =
      card(cheapKey, cheapKey==="simplicity"?sq:mq, `<span class="res-badge badge-cheap">💰 Lowest Cost</span>`) +
      card(recKey, recKey==="simplicity"?sq:mq, `<span class="res-badge badge-rec">★ Best Fit</span>`);
  }

  // Why section
  let why = "";
  if (anyPromo) {
    why = "<strong>myPlan required:</strong> Device promotions and trade-in deals are only available on myPlan (Welcome, Plus, or Ultimate). Each line can be on a different tier.";
  } else if (cheapKey === recKey) {
    why = cheapKey === "simplicity"
      ? "Simplicity is the lowest cost option and covers this account's needs. All lines must be on Simplicity."
      : "myPlan is both the lowest cost and best fit for this account's needs. Lines can be on different tiers.";
  } else {
    const diff = mq.grandTotal - sq.grandTotal;
    why = `<strong>Simplicity</strong> costs $${diff}/mo less. <strong>myPlan</strong> is recommended because at least one line frequently travels internationally (15 GB international data included on Ultimate).`;
  }

  // myPlan line breakdown
  const nk = nKey(state.lineCount);
  let myplanBreakdown = state.lines.map(l =>
    `${l.name}: ${l.selectedPlan==="welcome"?"Welcome":l.selectedPlan==="plus"?"Plus":"Ultimate"} ($${CONFIG.myplan[l.selectedPlan][nk]}/mo)`
  ).join(" &bull; ");

  document.getElementById("res-all-plans").innerHTML = `
    <div class="card">
      <div class="card-title" style="font-size:15px">Why the Difference?</div>
      <div style="font-size:13px;color:var(--gray);margin-top:6px">${why}</div>
      ${state.quotes.myplan ? `<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--gray);margin-bottom:6px">myPlan Recommended Tiers</div>
        <div style="font-size:13px">${myplanBreakdown}</div>
      </div>` : ""}
    </div>`;

  // Promos
  document.getElementById("res-promos").innerHTML = CONFIG.promos
    ? `<div class="card"><div class="card-title" style="font-size:14px">📢 Active Promos</div><div style="font-size:13px;color:var(--gray);margin-top:6px;white-space:pre-wrap">${CONFIG.promos}</div></div>`
    : "";
}

// ============================================================
// CUSTOMIZE SCREEN
// ============================================================
function openCustomize(planType) {
  state.selectedPlanType = planType;
  renderCustomize();
  go("s-customize");
}

function renderCustomize() {
  const pt = state.selectedPlanType;
  const nk = nKey(state.lineCount);
  let html = "";

  if (pt === "simplicity") {
    html += `<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div><div style="font-size:12px;font-weight:700;color:var(--gray);text-transform:uppercase">Plan</div>
        <div style="font-size:22px;font-weight:900">Simplicity</div></div>
        <span class="pill pill-y">$${CONFIG.simplicity.priceFullDiscount}/line/mo</span>
      </div>
      <div class="info-box" style="margin-bottom:0">All lines on account must be on Simplicity. Price assumes Auto Pay + Switch &amp; Save. Without switching: $${CONFIG.simplicity.priceAutopayOnly}/line.</div>
    </div>`;

    state.lines.forEach((l,i) => {
      const phoneInfo = getPhoneLabel(l.selectedPhone);
      html += `<div class="line-tier-card">
        <div class="line-tier-hd">
          <div class="lbadge">${i+1}</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:15px">${l.name}</div>
            ${phoneInfo ? `<div style="font-size:12px;color:var(--gray)">${phoneInfo}</div>` : ""}
            <div style="font-size:12px;color:var(--gray)">${dealLabel(l.deviceDeal)}</div>
          </div>
          <div class="tier-price">$${CONFIG.simplicity.priceFullDiscount}</div>
        </div>

        <div class="perk-section">
          <div class="perk-section-title">Annual Upgrade (optional)</div>
          <div class="upgrade-opt ${l.simpUpgrade===null?"sel":""}" onclick="setSimpUpgrade(${i},null)">
            <div><div class="upgrade-opt-name">No Upgrade Plan</div><div class="upgrade-opt-desc">Keep phone as long as you want</div></div>
            <div class="upgrade-opt-price">$0</div>
          </div>
          ${CONFIG.simplicityUpgrades.map(u => `
          <div class="upgrade-opt ${l.simpUpgrade===u.id?"sel":""}" onclick="setSimpUpgrade(${i},'${u.id}')">
            <div><div class="upgrade-opt-name">${u.name}</div><div class="upgrade-opt-desc">${u.desc}</div></div>
            <div class="upgrade-opt-price">+$${u.price}</div>
          </div>`).join("")}
        </div>

        ${renderPerkSection(i, "simplicity")}
      </div>`;
    });

  } else {
    // myPlan
    html += `<div class="card">
      <div style="font-size:12px;font-weight:700;color:var(--gray);text-transform:uppercase;margin-bottom:4px">Plan</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:8px">myPlan (Mix &amp; Match)</div>
      <div class="info-box" style="margin-bottom:0">Each line can be on a different tier. Pricing is based on total lines on the account (${state.lineCount}). Includes Auto Pay discount.</div>
    </div>`;

    state.lines.forEach((l,i) => {
      const tier = l.selectedPlan || "welcome";
      const prices = {
        welcome: CONFIG.myplan.welcome[nk],
        plus: CONFIG.myplan.plus[nk],
        ultimate: CONFIG.myplan.ultimate[nk]
      };
      const phoneInfo = getPhoneLabel(l.selectedPhone);

      html += `<div class="line-tier-card">
        <div class="line-tier-hd" style="margin-bottom:10px">
          <div class="lbadge">${i+1}</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:15px">${l.name}</div>
            ${phoneInfo ? `<div style="font-size:12px;color:var(--gray)">${phoneInfo}</div>` : ""}
            <div style="font-size:12px;color:var(--gray)">${dealLabel(l.deviceDeal)}</div>
          </div>
          <div class="tier-price">$${prices[tier]}</div>
        </div>
        <div class="tier-btns">
          <button class="tier-btn ${tier==="welcome"?"sel":""}" onclick="setLineTier(${i},'welcome')">Welcome<br><span style="font-size:11px;font-weight:400">$${prices.welcome}</span></button>
          <button class="tier-btn ${tier==="plus"?"sel":""}" onclick="setLineTier(${i},'plus')">Plus<br><span style="font-size:11px;font-weight:400">$${prices.plus}</span></button>
          <button class="tier-btn ${tier==="ultimate"?"sel":""}" onclick="setLineTier(${i},'ultimate')">Ultimate<br><span style="font-size:11px;font-weight:400">$${prices.ultimate}</span></button>
        </div>
        ${renderPerkSection(i, "myplan")}
      </div>`;
    });
  }

  // Devices
  const {tablets, watches} = state.devices;
  if (tablets + watches > 0) {
    const dCalc = calcDeviceDiscount(
      pt === "simplicity" ? "simplicity" :
        (state.lines.some(l=>l.selectedPlan==="ultimate") ? "ultimate" :
         state.lines.some(l=>l.selectedPlan==="plus") ? "plus" : "welcome"),
      tablets, watches
    );
    html += `<div class="card">
      <div class="card-title" style="font-size:15px">Connected Devices</div>
      ${tablets > 0 ? `<div class="brow"><span style="color:var(--gray)">${tablets}x Tablet (Unlimited @ $${CONFIG.devices.tablet.unlimited})</span><span>$${tablets*CONFIG.devices.tablet.unlimited}</span></div>` : ""}
      ${watches > 0 ? `<div class="brow"><span style="color:var(--gray)">${watches}x Watch (Basic @ $${CONFIG.devices.watch.basic})</span><span>$${watches*CONFIG.devices.watch.basic}</span></div>` : ""}
      ${dCalc.disc > 0 ? `<div class="brow"><span style="color:#16a34a">Device Discount</span><span style="color:#16a34a">-$${dCalc.disc.toFixed(0)}</span></div>` : ""}
      <div class="brow tot"><span>Connected Devices Net</span><span>$${dCalc.net.toFixed(0)}</span></div>
    </div>`;
  }

  document.getElementById("cust-content").innerHTML = html;
  updateLiveTotal();
}

function renderPerkSection(lineIdx, planType) {
  const l = state.lines[lineIdx];
  const bundles = CONFIG.perks.bundles;
  const perks = CONFIG.perks.individual;
  const categories = [...new Set(perks.map(p=>p.category))];

  let bundleHTML = bundles.map(b => {
    const isSel = l.bundleId === b.id;
    const saves = b.retailValue > b.price ? Math.round((1-b.price/b.retailValue)*100) : 0;
    return `<div class="bundle-card ${isSel?"sel":""}" onclick="toggleBundle(${lineIdx},'${b.id}')">
      <div class="bundle-hd">
        <div class="bundle-name">${b.name}</div>
        <div><div class="bundle-price">+$${b.price}/mo</div>${saves>0?`<div class="bundle-saves">${saves}% off retail</div>`:""}</div>
      </div>
      <div class="bundle-inc">${b.perkIds.map(id=>{const p=perks.find(x=>x.id===id);return p?p.name:id}).join(", ")}</div>
    </div>`;
  }).join("");

  let indvHTML = categories.map(cat => {
    const catPerks = perks.filter(p=>p.category===cat);
    return `<div class="perk-section-title" style="margin-top:10px">${cat}</div>` +
      catPerks.map(p => {
        const isOn = l.perkIds.includes(p.id);
        return `<div class="perk-row">
          <div><div class="perk-name">${p.name}</div></div>
          <div class="perk-right">
            <span class="perk-price">+$${p.price}/mo</span>
            <button class="perk-toggle ${isOn?"on":""}" onclick="togglePerk(${lineIdx},'${p.id}')"></button>
          </div>
        </div>`;
      }).join("");
  }).join("");

  return `<div class="perk-section">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div class="perk-section-title" style="margin-bottom:0">Bundles &amp; Perks</div>
      <button style="font-size:12px;font-weight:700;color:var(--red);background:none;border:none;cursor:pointer" onclick="togglePerkExpand(${lineIdx})"
        id="perk-expand-btn-${lineIdx}">${document.getElementById ? (document.getElementById("perk-body-"+lineIdx) ? "Hide ▲" : "Show ▼") : "Show ▼"}</button>
    </div>
    <div id="perk-body-${lineIdx}" class="hidden">
      <div class="perk-section-title">Bundles (select one)</div>
      ${bundleHTML}
      <div class="perk-section-title" style="margin-top:14px">Individual Add-Ons</div>
      ${indvHTML}
    </div>
  </div>`;
}

function togglePerkExpand(lineIdx) {
  const body = document.getElementById("perk-body-"+lineIdx);
  const btn = document.getElementById("perk-expand-btn-"+lineIdx);
  body.classList.toggle("hidden");
  btn.textContent = body.classList.contains("hidden") ? "Show ▼" : "Hide ▲";
}

function toggleBundle(lineIdx, bundleId) {
  const l = state.lines[lineIdx];
  l.bundleId = l.bundleId === bundleId ? null : bundleId;
  renderCustomize();
}

function togglePerk(lineIdx, perkId) {
  const l = state.lines[lineIdx];
  const idx = l.perkIds.indexOf(perkId);
  if (idx === -1) l.perkIds.push(perkId);
  else l.perkIds.splice(idx, 1);
  const toggle = event.currentTarget;
  toggle.classList.toggle("on");
  updateLiveTotal();
}

function setLineTier(lineIdx, tier) {
  state.lines[lineIdx].selectedPlan = tier;
  renderCustomize();
}

function setSimpUpgrade(lineIdx, upgradeId) {
  state.lines[lineIdx].simpUpgrade = upgradeId;
  renderCustomize();
}

function calcLiveTotal() {
  const pt = state.selectedPlanType;
  const nk = nKey(state.lineCount);
  let total = 0;

  state.lines.forEach(l => {
    if (pt === "simplicity") {
      total += CONFIG.simplicity.priceFullDiscount;
      if (l.simpUpgrade) {
        const u = CONFIG.simplicityUpgrades.find(x=>x.id===l.simpUpgrade);
        if (u) total += u.price;
      }
    } else {
      const tier = l.selectedPlan || "welcome";
      total += CONFIG.myplan[tier][nk];
    }
    // Bundle
    if (l.bundleId) {
      const b = CONFIG.perks.bundles.find(x=>x.id===l.bundleId);
      if (b) total += b.price;
    }
    // Individual perks
    l.perkIds.forEach(pid => {
      const p = CONFIG.perks.individual.find(x=>x.id===pid);
      if (p) total += p.price;
    });
  });

  // Devices
  const {tablets, watches} = state.devices;
  if (tablets + watches > 0) {
    const discKey = pt === "simplicity" ? "simplicity" :
      (state.lines.some(l=>l.selectedPlan==="ultimate") ? "ultimate" :
       state.lines.some(l=>l.selectedPlan==="plus") ? "plus" : "welcome");
    total += calcDeviceDiscount(discKey, tablets, watches).net;
  }

  return Math.round(total * 100) / 100;
}

function updateLiveTotal() {
  const t = calcLiveTotal();
  document.getElementById("live-total-amt").textContent = "$"+t.toFixed(0);
}

// ============================================================
// HELPERS
// ============================================================
function getPhoneLabel(sp) {
  if (!sp || sp.phoneIdx === null || sp.phoneIdx === undefined) return null;
  const ph = CONFIG.phones[sp.phoneIdx];
  if (!ph) return null;
  const cap = sp.capIdx !== null && sp.capIdx !== undefined ? ph.capacities[sp.capIdx] : null;
  return ph.name + (cap ? " "+cap.s : "") + (sp.color ? " ("+sp.color+")" : "");
}

function dealLabel(d) {
  return d === "byod" ? "BYOD" : d === "retail" ? "Full Retail / Finance" : "Device Promo";
}

// ============================================================
// EMAIL
// ============================================================
function goEmail() {
  document.getElementById("email-specialist").value = CONFIG.admin.specialistEmail || "";
  document.getElementById("email-manager").value    = CONFIG.admin.managerEmail || "";
  buildCustomerCopy();
  go("s-email");
}

function buildCustomerCopy() {
  const pt = state.selectedPlanType;
  const nk = nKey(state.lineCount);
  const date = new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
  const total = calcLiveTotal();

  let lines = state.lines.map((l,i) => {
    const tier = pt==="simplicity" ? "Simplicity" :
      (l.selectedPlan==="welcome"?"Unlimited Welcome":l.selectedPlan==="plus"?"Unlimited Plus":"Unlimited Ultimate");
    const price = pt==="simplicity" ? CONFIG.simplicity.priceFullDiscount : CONFIG.myplan[l.selectedPlan||"welcome"][nk];
    const phone = getPhoneLabel(l.selectedPhone);
    const perks = [];
    if (l.bundleId) { const b=CONFIG.perks.bundles.find(x=>x.id===l.bundleId); if(b) perks.push(b.name+" bundle (+$"+b.price+"/mo)"); }
    l.perkIds.forEach(pid => { const p=CONFIG.perks.individual.find(x=>x.id===pid); if(p) perks.push(p.name+" (+$"+p.price+"/mo)"); });
    return `  • ${l.name}: ${tier} — $${price}/mo${phone?"\n    Device: "+phone:""}${perks.length?"\n    Add-Ons: "+perks.join(", "):""}`;
  }).join("\n");

  const {tablets,watches} = state.devices;
  let devText = "";
  if (tablets+watches>0) {
    const discKey = pt==="simplicity" ? "simplicity" : (state.lines.some(l=>l.selectedPlan==="ultimate")?"ultimate":state.lines.some(l=>l.selectedPlan==="plus")?"plus":"welcome");
    const dc = calcDeviceDiscount(discKey,tablets,watches);
    devText = `\nConnected Devices: $${dc.net.toFixed(0)}/mo`;
    if (dc.disc > 0) devText += ` (saving $${dc.disc.toFixed(0)}/mo with plan discount)`;
  }

  const text = `Verizon Plan Quote — ${date}\n\nPlan: ${pt==="simplicity"?"Simplicity":"myPlan (Mix & Match)"}\nLines: ${state.lineCount}\n\n${lines}${devText}\n\n${"─".repeat(36)}\nEstimated Monthly Total: $${total.toFixed(0)}/mo\n(Before taxes & fees. Includes Auto Pay discount.)\n${"─".repeat(36)}\n\nQuestions? Reply to this message or visit your Best Buy store.`;

  document.getElementById("customer-copy").textContent = text;
  return text;
}

function copyCustomerText() {
  const text = document.getElementById("customer-copy").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = "✓ Copied!";
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

function sendEmail() {
  if (!CONFIG.email.serviceId) {
    document.getElementById("emailjs-warning").classList.remove("hidden");
    return;
  }
  const spec = document.getElementById("email-specialist").value;
  const mgr  = document.getElementById("email-manager").value;
  const cust = document.getElementById("email-customer").value || "Customer";
  const date = new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
  const custCopy = document.getElementById("customer-copy").textContent;
  const btn = event.target; btn.textContent = "Sending..."; btn.disabled = true;
  emailjs.init(CONFIG.email.publicKey);
  emailjs.send(CONFIG.email.serviceId, CONFIG.email.templateId, {
    specialist_email:spec, manager_email:mgr, customer_name:cust,
    quote_body:custCopy, customer_copy:custCopy, date
  }).then(() => {
    btn.textContent = "✓ Sent!";
    setTimeout(() => { btn.textContent = "Send Email 📤"; btn.disabled = false; }, 3000);
  }).catch(e => {
    alert("Email failed: " + JSON.stringify(e));
    btn.textContent = "Send Email 📤"; btn.disabled = false;
  });
}

// ============================================================
// ADMIN
// ============================================================
function showAdminLogin() { go("s-admin-login"); }

function checkAdmin() {
  if (document.getElementById("admin-pw").value === CONFIG.admin.password) {
    document.getElementById("admin-pw").value = "";
    document.getElementById("admin-err").classList.add("hidden");
    loadAdminFields();
    go("s-admin");
  } else {
    document.getElementById("admin-err").classList.remove("hidden");
  }
}

function adminTab(tab, el) {
  document.querySelectorAll(".admin-section").forEach(s => s.classList.add("hidden"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("on"));
  document.getElementById("adm-"+tab).classList.remove("hidden");
  el.classList.add("on");
}

function loadAdminFields() {
  // Email
  document.getElementById("adm-svc").value = CONFIG.email.serviceId;
  document.getElementById("adm-tpl").value = CONFIG.email.templateId;
  document.getElementById("adm-key").value = CONFIG.email.publicKey;
  document.getElementById("adm-sp-email").value = CONFIG.admin.specialistEmail;
  document.getElementById("adm-mgr-email").value = CONFIG.admin.managerEmail;
  // Plans
  document.getElementById("adm-simp-full").value = CONFIG.simplicity.priceFullDiscount;
  document.getElementById("adm-simp-auto").value = CONFIG.simplicity.priceAutopayOnly;
  [1,2,3,"4+"].forEach((k,i) => {
    document.getElementById("adm-w"+(i+1)).value = CONFIG.myplan.welcome[k];
    document.getElementById("adm-p"+(i+1)).value = CONFIG.myplan.plus[k];
    document.getElementById("adm-u"+(i+1)).value = CONFIG.myplan.ultimate[k];
  });
  document.getElementById("adm-watch-basic").value = CONFIG.devices.watch.basic;
  document.getElementById("adm-watch-prem").value  = CONFIG.devices.watch.premium;
  document.getElementById("adm-tab-w").value  = CONFIG.devices.tablet.welcome;
  document.getElementById("adm-tab-u").value  = CONFIG.devices.tablet.unlimited;
  document.getElementById("adm-tab-up").value = CONFIG.devices.tablet.unlimitedPlus;
  // Promos
  document.getElementById("adm-promos-text").value = CONFIG.promos;
  // Perks
  renderAdminPerks();
  // Devices
  renderAdminDevList("all");
}

function renderAdminPerks() {
  document.getElementById("adm-perks-list").innerHTML =
    CONFIG.perks.individual.map((p,i) => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="flex:1;font-size:13px;font-weight:700">${p.name}</div>
        <div style="display:flex;align-items:center;gap:4px">
          <span style="font-size:12px">$</span>
          <input type="number" step="0.01" value="${p.price}" style="width:70px;height:36px;border:2px solid var(--border);border-radius:8px;padding:0 8px;font-size:14px;font-weight:700"
            onchange="CONFIG.perks.individual[${i}].price=parseFloat(this.value)||p.price">
          <span style="font-size:12px">/mo</span>
        </div>
      </div>`).join("") +
    `<div style="font-size:11px;color:var(--gray);margin-top:8px">Bundle prices are set in the bundles array in CONFIG.</div>`;

  document.getElementById("adm-upgrades-list").innerHTML =
    CONFIG.simplicityUpgrades.map((u,i) => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="flex:1"><div style="font-size:13px;font-weight:700">${u.name}</div><div style="font-size:11px;color:var(--gray)">${u.desc}</div></div>
        <div style="display:flex;align-items:center;gap:4px">
          <span style="font-size:12px">$</span>
          <input type="number" step="1" value="${u.price}" style="width:60px;height:36px;border:2px solid var(--border);border-radius:8px;padding:0 8px;font-size:14px;font-weight:700"
            onchange="CONFIG.simplicityUpgrades[${i}].price=parseFloat(this.value)||u.price">
        </div>
      </div>`).join("");
}

// ---- DEVICE DB ADMIN ----
let currentDevFilter = "all";

function filterDevTab(type, el) {
  currentDevFilter = type;
  document.querySelectorAll("#adm-devices .tab").forEach(t => t.classList.remove("on"));
  el.classList.add("on");
  renderAdminDevList(type);
}

function renderAdminDevList(type) {
  const devs = CONFIG.phones.filter(p => type === "all" || p.type === type);
  if (!devs.length) {
    document.getElementById("adm-dev-list").innerHTML = `<div style="padding:20px;text-align:center;color:var(--gray);font-size:14px">No devices yet. Tap + Add to get started.</div>`;
    return;
  }
  document.getElementById("adm-dev-list").innerHTML = devs.map(ph => {
    const realIdx = CONFIG.phones.indexOf(ph);
    const capStr = ph.capacities.map(c=>c.s).join(", ");
    return `<div class="dev-row ${ph.active?"":"dev-inactive"}">
      <span class="dev-badge dev-${ph.type}">${ph.type}</span>
      <div class="dev-name">
        <div style="font-weight:800">${ph.brand} ${ph.name}</div>
        <div style="font-size:11px;color:var(--gray)">${capStr}</div>
      </div>
      <button class="btn btn-ghost btn-xs" style="width:auto;padding:0 12px" onclick="editDevice(${realIdx})">Edit</button>
      <button onclick="toggleDevActive(${realIdx})" style="background:none;border:none;font-size:18px;cursor:pointer">${ph.active?"✓":"○"}</button>
      <button onclick="deleteDevice(${realIdx})" style="background:none;border:none;color:var(--red);font-size:18px;cursor:pointer">✕</button>
    </div>`;
  }).join("");
}

function openAddDevice() {
  document.getElementById("dev-form-title").textContent = "Add Device";
  document.getElementById("dev-type").value = "phone";
  document.getElementById("dev-brand").value = "";
  document.getElementById("dev-name").value = "";
  document.getElementById("dev-colors").value = "";
  document.getElementById("dev-notes").value = "";
  document.getElementById("dev-promo").checked = false;
  document.getElementById("dev-byod").checked = false;
  document.getElementById("dev-active").checked = true;
  document.getElementById("dev-edit-idx").value = "-1";
  document.getElementById("cap-rows").innerHTML = "";
  addCapRow();
  document.getElementById("adm-dev-form").classList.remove("hidden");
  document.getElementById("adm-dev-form").scrollIntoView({behavior:"smooth"});
}

function editDevice(idx) {
  const ph = CONFIG.phones[idx];
  document.getElementById("dev-form-title").textContent = "Edit Device";
  document.getElementById("dev-type").value = ph.type;
  document.getElementById("dev-brand").value = ph.brand;
  document.getElementById("dev-name").value = ph.name;
  document.getElementById("dev-colors").value = ph.colors.join(", ");
  document.getElementById("dev-notes").value = ph.notes||"";
  document.getElementById("dev-promo").checked = ph.promoEligible;
  document.getElementById("dev-byod").checked = ph.byodEligible;
  document.getElementById("dev-active").checked = ph.active;
  document.getElementById("dev-edit-idx").value = idx;
  const capRows = document.getElementById("cap-rows");
  capRows.innerHTML = "";
  ph.capacities.forEach(c => addCapRow(c.s, c.p));
  document.getElementById("adm-dev-form").classList.remove("hidden");
  document.getElementById("adm-dev-form").scrollIntoView({behavior:"smooth"});
}

function addCapRow(s="", p="") {
  const row = document.createElement("div");
  row.className = "cap-input-row";
  row.innerHTML = `
    <input class="inp" placeholder="Size (e.g. 128GB)" value="${s}" style="margin-bottom:0">
    <input class="inp" type="number" placeholder="Price" value="${p}" style="margin-bottom:0">
    <button onclick="this.parentElement.remove()" style="background:none;border:none;color:var(--gray);font-size:22px;cursor:pointer;width:36px;height:50px">&#215;</button>`;
  document.getElementById("cap-rows").appendChild(row);
}

function cancelDevForm() {
  document.getElementById("adm-dev-form").classList.add("hidden");
}

function saveDevice() {
  const idx = parseInt(document.getElementById("dev-edit-idx").value);
  const rows = document.querySelectorAll("#cap-rows .cap-input-row");
  const caps = [];
  rows.forEach(r => {
    const inputs = r.querySelectorAll("input");
    const s = inputs[0].value.trim();
    const p = parseFloat(inputs[1].value);
    if (s && !isNaN(p)) caps.push({s, p});
  });
  if (!caps.length) { alert("Add at least one capacity/size option."); return; }
  const dev = {
    type: document.getElementById("dev-type").value,
    brand: document.getElementById("dev-brand").value.trim(),
    name: document.getElementById("dev-name").value.trim(),
    capacities: caps,
    colors: document.getElementById("dev-colors").value.split(",").map(c=>c.trim()).filter(Boolean),
    notes: document.getElementById("dev-notes").value.trim(),
    promoEligible: document.getElementById("dev-promo").checked,
    byodEligible: document.getElementById("dev-byod").checked,
    active: document.getElementById("dev-active").checked
  };
  if (!dev.brand || !dev.name) { alert("Brand and model name are required."); return; }
  if (idx === -1) CONFIG.phones.push(dev);
  else CONFIG.phones[idx] = dev;
  cancelDevForm();
  renderAdminDevList(currentDevFilter);
}

function deleteDevice(idx) {
  if (!confirm("Delete " + CONFIG.phones[idx].brand + " " + CONFIG.phones[idx].name + "?")) return;
  CONFIG.phones.splice(idx, 1);
  renderAdminDevList(currentDevFilter);
}

function toggleDevActive(idx) {
  CONFIG.phones[idx].active = !CONFIG.phones[idx].active;
  renderAdminDevList(currentDevFilter);
}

function saveAdmin() {
  CONFIG.email.serviceId    = document.getElementById("adm-svc").value.trim();
  CONFIG.email.templateId   = document.getElementById("adm-tpl").value.trim();
  CONFIG.email.publicKey    = document.getElementById("adm-key").value.trim();
  CONFIG.admin.specialistEmail = document.getElementById("adm-sp-email").value.trim();
  CONFIG.admin.managerEmail    = document.getElementById("adm-mgr-email").value.trim();
  CONFIG.simplicity.priceFullDiscount = parseFloat(document.getElementById("adm-simp-full").value)||30;
  CONFIG.simplicity.priceAutopayOnly  = parseFloat(document.getElementById("adm-simp-auto").value)||45;
  [1,2,3,"4+"].forEach((k,i) => {
    CONFIG.myplan.welcome[k]  = parseFloat(document.getElementById("adm-w"+(i+1)).value)||0;
    CONFIG.myplan.plus[k]     = parseFloat(document.getElementById("adm-p"+(i+1)).value)||0;
    CONFIG.myplan.ultimate[k] = parseFloat(document.getElementById("adm-u"+(i+1)).value)||0;
  });
  CONFIG.devices.watch.basic          = parseFloat(document.getElementById("adm-watch-basic").value)||15;
  CONFIG.devices.watch.premium        = parseFloat(document.getElementById("adm-watch-prem").value)||25;
  CONFIG.devices.tablet.welcome       = parseFloat(document.getElementById("adm-tab-w").value)||20;
  CONFIG.devices.tablet.unlimited     = parseFloat(document.getElementById("adm-tab-u").value)||40;
  CONFIG.devices.tablet.unlimitedPlus = parseFloat(document.getElementById("adm-tab-up").value)||50;
  CONFIG.promos = document.getElementById("adm-promos-text").value;
  downloadUpdatedHTML();
}

function changePassword() {
  const oldPw = document.getElementById("adm-old-pw").value;
  const newPw = document.getElementById("adm-new-pw").value;
  const cfm   = document.getElementById("adm-conf-pw").value;
  const msg   = document.getElementById("pw-msg");
  if (oldPw !== CONFIG.admin.password) { msg.style.color="var(--red)"; msg.textContent="Incorrect current password"; return; }
  if (!newPw) { msg.style.color="var(--red)"; msg.textContent="New password cannot be empty"; return; }
  if (newPw !== cfm) { msg.style.color="var(--red)"; msg.textContent="Passwords do not match"; return; }
  CONFIG.admin.password = newPw;
  ["adm-old-pw","adm-new-pw","adm-conf-pw"].forEach(id => document.getElementById(id).value="");
  msg.style.color="#16a34a"; msg.textContent="Password updated! Click Save & Download to save.";
}

function downloadUpdatedHTML() {
  const src = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  const newCfg = "// __CONFIG_START__\nlet CONFIG = " + JSON.stringify(CONFIG, null, 2) + ";\n// __CONFIG_END__";
  const updated = src.replace(/\/\/ __CONFIG_START__[\s\S]*?\/\/ __CONFIG_END__/, newCfg);
  const blob = new Blob([updated], {type:"text/html"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "index.html";
  a.click();
  URL.revokeObjectURL(a.href);
}

// Load EmailJS if configured
if (CONFIG.email.publicKey) {
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  document.head.appendChild(s);
}
