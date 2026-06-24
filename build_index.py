css = open('/sessions/blissful-trusting-mayer/mnt/outputs/styles.css').read()

html_parts = []

html_parts.append("""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>VZ Plan Advisor</title>
<style>
""" + css + """
</style>
</head>
<body>

<div class="hdr">
  <span class="hdr-logo">V.</span>
  <span class="hdr-title" id="hdr-title">Plan Advisor</span>
  <button class="hdr-gear" onclick="showAdminLogin()">&#9881;</button>
</div>

<!-- WELCOME -->
<div id="s-welcome" class="screen active">
  <div class="wh">
    <span class="wv">V.</span>
    <div class="wt">Verizon Plan Advisor</div>
    <div class="ws">Build a quote in under 2 minutes</div>
  </div>
  <button class="btn btn-red" onclick="go('s-lines')">Start New Quote</button>
  <button class="btn btn-ghost mt2" onclick="showAdminLogin()">Admin / Settings &#9881;</button>
</div>

<!-- STEP 1: LINE COUNT -->
<div id="s-lines" class="screen">
  <button class="back" onclick="go('s-welcome')">&#8592; Back</button>
  <div class="sh">How many phone lines?</div>
  <div class="ss">Include all lines switching to Verizon</div>
  <div class="g3">
    <button class="btn btn-ghost" onclick="setLines(1)">1</button>
    <button class="btn btn-ghost" onclick="setLines(2)">2</button>
    <button class="btn btn-ghost" onclick="setLines(3)">3</button>
    <button class="btn btn-ghost" onclick="setLines(4)">4</button>
    <button class="btn btn-ghost" onclick="setLines(5)">5</button>
    <button class="btn btn-ghost" onclick="setLines(6)">6+</button>
  </div>
  <div class="note-box mt4">&#128161; More lines = lower per-line cost on myPlan.</div>
</div>

<!-- STEP 1b: CUSTOM -->
<div id="s-lines-custom" class="screen">
  <button class="back" onclick="go('s-lines')">&#8592; Back</button>
  <div class="sh">How many lines?</div>
  <label class="flbl">Number of Lines</label>
  <input class="inp" type="number" id="custom-lines" min="6" max="12" value="6">
  <button class="btn btn-red mt2" onclick="setLinesCustom()">Continue &#8594;</button>
</div>

<!-- STEP 2: LINE NAMES -->
<div id="s-names" class="screen">
  <button class="back" onclick="go('s-lines')">&#8592; Back</button>
  <div class="sh">Name Each Line</div>
  <div class="ss">Optional &#8212; helps keep track. Leave blank for Line 1, 2, etc.</div>
  <div id="name-fields"></div>
  <div class="bnav">
    <button class="btn btn-ghost" onclick="go('s-lines')">Back</button>
    <button class="btn btn-red" onclick="saveNames()">Next &#8594;</button>
  </div>
</div>

<!-- STEP 3: PER-LINE QUESTIONS -->
<div id="s-lineq" class="screen">
  <div id="lineq-content"></div>
  <div class="bnav">
    <button class="btn btn-ghost" id="lineq-back-btn" onclick="lineqBack()">Back</button>
    <button class="btn btn-red" id="lineq-next-btn" onclick="lineqNext()">Next &#8594;</button>
  </div>
</div>

<!-- STEP 4: CONNECTED DEVICES -->
<div id="s-devices" class="screen">
  <button class="back" onclick="devBack()">&#8592; Back</button>
  <div class="sh">Connected Devices</div>
  <div class="ss">Non-phone devices on the account</div>
  <div class="ctr">
    <div><div class="ctr-lbl">&#128241; Tablets</div><div class="ctr-sub">$20&#8211;$50/mo + plan discounts</div></div>
    <div class="ctr-ctrl">
      <button class="ctr-btn" onclick="adjDevice('tablets',-1)">&#8722;</button>
      <span class="ctr-val" id="cnt-tablets">0</span>
      <button class="ctr-btn" onclick="adjDevice('tablets',1)">+</button>
    </div>
  </div>
  <div class="ctr">
    <div><div class="ctr-lbl">&#8987; Smartwatches</div><div class="ctr-sub">$15&#8211;$25/mo + plan discounts</div></div>
    <div class="ctr-ctrl">
      <button class="ctr-btn" onclick="adjDevice('watches',-1)">&#8722;</button>
      <span class="ctr-val" id="cnt-watches">0</span>
      <button class="ctr-btn" onclick="adjDevice('watches',1)">+</button>
    </div>
  </div>
  <div class="note-box">&#128161; Simplicity gives 50% off ALL connected devices (up to $25 each). myPlan Ultimate: 50% off 2 devices, Plus: 50% off 1.</div>
  <div class="bnav">
    <button class="btn btn-ghost" onclick="devBack()">Back</button>
    <button class="btn btn-red" onclick="calcAndShow()">See Results &#8594;</button>
  </div>
</div>

<!-- STEP 5: RESULTS -->
<div id="s-results" class="screen">
  <button class="back" onclick="go('s-devices')">&#8592; Back</button>
  <div class="sh">Quote Results</div>
  <div class="ss" id="res-subtitle"></div>
  <div class="res-grid" id="res-grid"></div>
  <div id="res-all-plans"></div>
  <div id="res-promos"></div>
</div>

<!-- STEP 6: CUSTOMIZE / DETAIL -->
<div id="s-customize" class="screen">
  <button class="back" onclick="go('s-results')">&#8592; Results</button>
  <div id="cust-content"></div>
  <div class="live-total" id="live-total-bar">
    <div><div class="lt-label">Est. Monthly Total</div><div style="font-size:10px;color:var(--gray)">Before taxes &amp; fees</div></div>
    <div><span class="lt-amount" id="live-total-amt">$0</span><span class="lt-mo">/mo</span></div>
  </div>
  <div class="bnav">
    <button class="btn btn-ghost btn-sm" onclick="go('s-results')">&#8592; Back</button>
    <button class="btn btn-yellow btn-sm" onclick="goEmail()">&#128231; Email Quote</button>
  </div>
</div>

<!-- EMAIL -->
<div id="s-email" class="screen">
  <button class="back" onclick="go('s-customize')">&#8592; Back</button>
  <div class="sh">Email Quote</div>
  <div class="ss">Send to yourself and your manager</div>
  <div class="card">
    <label class="flbl">Your Email</label>
    <input class="inp" type="email" id="email-specialist" placeholder="specialist@bestbuy.com">
    <label class="flbl">Manager Email</label>
    <input class="inp" type="email" id="email-manager" placeholder="manager@bestbuy.com">
    <label class="flbl">Customer Name</label>
    <input class="inp" type="text" id="email-customer" placeholder="Customer name">
  </div>
  <div class="card">
    <div class="card-title" style="font-size:15px">&#128203; Customer Copy</div>
    <div class="card-sub">Copy &amp; paste this to text or email your customer from @bestbuy.com</div>
    <div class="email-pre" id="customer-copy"></div>
    <button class="btn btn-ghost btn-sm" onclick="copyCustomerText()">Copy to Clipboard</button>
  </div>
  <div id="emailjs-warning" class="alert hidden">&#9888;&#65039; Email sending requires EmailJS setup. Go to Admin &#8594; Email Settings.</div>
  <div class="bnav">
    <button class="btn btn-ghost" onclick="go('s-customize')">Back</button>
    <button class="btn btn-red" onclick="sendEmail()">Send Email &#128228;</button>
  </div>
</div>

<!-- ADMIN LOGIN -->
<div id="s-admin-login" class="screen">
  <button class="back" onclick="go('s-welcome')">&#8592; Back</button>
  <div class="sh">Admin Access</div>
  <div class="card">
    <label class="flbl">Password</label>
    <input class="inp" type="password" id="admin-pw" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" onkeydown="if(event.key==='Enter')checkAdmin()">
    <button class="btn btn-red mt2" onclick="checkAdmin()">Enter Admin</button>
    <div id="admin-err" class="hidden" style="color:var(--red);font-size:13px;margin-top:8px;text-align:center">Incorrect password</div>
  </div>
</div>

<!-- ADMIN PANEL -->
<div id="s-admin" class="screen">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
    <div class="sh" style="margin-bottom:0">&#9881; Admin</div>
    <button class="btn btn-ghost btn-xs" style="width:auto;padding:0 14px" onclick="go('s-welcome')">Exit</button>
  </div>
  <div class="tabs">
    <button class="tab on" onclick="adminTab('email',this)">Email</button>
    <button class="tab" onclick="adminTab('plans',this)">Plans</button>
    <button class="tab" onclick="adminTab('devices',this)">Devices</button>
    <button class="tab" onclick="adminTab('perks',this)">Perks</button>
    <button class="tab" onclick="adminTab('promos',this)">Promos</button>
    <button class="tab" onclick="adminTab('security',this)">Security</button>
  </div>

  <!-- EMAIL TAB -->
  <div id="adm-email" class="admin-section">
    <div class="card">
      <div class="card-title">EmailJS Settings</div>
      <div class="card-sub">Sign up free at emailjs.com, create a service &amp; template, paste credentials here.</div>
      <label class="flbl">Service ID</label><input class="inp" id="adm-svc" placeholder="service_xxxxxxx">
      <label class="flbl">Template ID</label><input class="inp" id="adm-tpl" placeholder="template_xxxxxxx">
      <label class="flbl">Public Key</label><input class="inp" id="adm-key" placeholder="xxxxxxxxxxxxxxxxxxxx">
    </div>
    <div class="card">
      <div class="card-title">Default Emails</div>
      <label class="flbl">Default Specialist Email</label><input class="inp" id="adm-sp-email" placeholder="you@bestbuy.com">
      <label class="flbl">Manager Email</label><input class="inp" id="adm-mgr-email" placeholder="manager@bestbuy.com">
    </div>
    <div class="info-box">Template variables: <code>{{specialist_email}}</code> <code>{{manager_email}}</code> <code>{{customer_name}}</code> <code>{{quote_body}}</code> <code>{{customer_copy}}</code> <code>{{date}}</code></div>
  </div>

  <!-- PLANS TAB -->
  <div id="adm-plans" class="admin-section hidden">
    <div class="card">
      <div class="card-title">Simplicity Plan</div>
      <div class="g2" style="margin-bottom:10px">
        <div><label class="flbl">With Both Discounts</label><input class="inp" id="adm-simp-full" type="number"></div>
        <div><label class="flbl">Autopay Only</label><input class="inp" id="adm-simp-auto" type="number"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">myPlan &#8212; Unlimited Welcome</div>
      <div class="g2" style="margin-bottom:10px">
        <div><label class="flbl">1 Line</label><input class="inp" id="adm-w1" type="number"></div>
        <div><label class="flbl">2 Lines</label><input class="inp" id="adm-w2" type="number"></div>
        <div><label class="flbl">3 Lines</label><input class="inp" id="adm-w3" type="number"></div>
        <div><label class="flbl">4+ Lines</label><input class="inp" id="adm-w4" type="number"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">myPlan &#8212; Unlimited Plus</div>
      <div class="g2" style="margin-bottom:10px">
        <div><label class="flbl">1 Line</label><input class="inp" id="adm-p1" type="number"></div>
        <div><label class="flbl">2 Lines</label><input class="inp" id="adm-p2" type="number"></div>
        <div><label class="flbl">3 Lines</label><input class="inp" id="adm-p3" type="number"></div>
        <div><label class="flbl">4+ Lines</label><input class="inp" id="adm-p4" type="number"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">myPlan &#8212; Unlimited Ultimate</div>
      <div class="g2" style="margin-bottom:10px">
        <div><label class="flbl">1 Line</label><input class="inp" id="adm-u1" type="number"></div>
        <div><label class="flbl">2 Lines</label><input class="inp" id="adm-u2" type="number"></div>
        <div><label class="flbl">3 Lines</label><input class="inp" id="adm-u3" type="number"></div>
        <div><label class="flbl">4+ Lines</label><input class="inp" id="adm-u4" type="number"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Connected Device Pricing</div>
      <div style="font-size:12px;font-weight:700;color:var(--gray);margin-bottom:10px">SMARTWATCHES</div>
      <div class="g2" style="margin-bottom:14px">
        <div><label class="flbl">Basic ($/mo)</label><input class="inp" id="adm-watch-basic" type="number"></div>
        <div><label class="flbl">Premium ($/mo)</label><input class="inp" id="adm-watch-prem" type="number"></div>
      </div>
      <div style="font-size:12px;font-weight:700;color:var(--gray);margin-bottom:10px">TABLETS</div>
      <div class="g2">
        <div><label class="flbl">Welcome ($/mo)</label><input class="inp" id="adm-tab-w" type="number"></div>
        <div><label class="flbl">Unlimited ($/mo)</label><input class="inp" id="adm-tab-u" type="number"></div>
        <div><label class="flbl">Unlimited Plus ($/mo)</label><input class="inp" id="adm-tab-up" type="number"></div>
      </div>
    </div>
  </div>

  <!-- DEVICES TAB -->
  <div id="adm-devices" class="admin-section hidden">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <div class="sh" style="margin-bottom:0;font-size:18px">Device Database</div>
      <button class="btn btn-red btn-xs" style="width:auto;padding:0 16px" onclick="openAddDevice()">+ Add</button>
    </div>
    <div id="adm-dev-form" class="card hidden">
      <div class="card-title" id="dev-form-title">Add Device</div>
      <label class="flbl">Type</label>
      <select class="inp" id="dev-type" style="height:50px">
        <option value="phone">Phone</option>
        <option value="tablet">Tablet</option>
        <option value="watch">Watch</option>
      </select>
      <label class="flbl">Brand</label><input class="inp" id="dev-brand" placeholder="Apple, Samsung, Google...">
      <label class="flbl">Model Name</label><input class="inp" id="dev-name" placeholder="iPhone 17, Galaxy S26...">
      <label class="flbl">Capacities / Storage Options</label>
      <div id="cap-rows"></div>
      <button class="btn btn-ghost btn-xs mt2" style="width:auto;padding:0 14px" onclick="addCapRow()">+ Add Capacity</button>
      <label class="flbl mt4">Colors (comma separated)</label>
      <input class="inp" id="dev-colors" placeholder="Black, White, Teal, Rose">
      <label class="flbl">Notes</label>
      <input class="inp" id="dev-notes" placeholder="e.g. Requires myPlan for promo, BYOD ineligible">
      <div style="display:flex;gap:10px;margin-top:8px;align-items:center">
        <label style="font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px">
          <input type="checkbox" id="dev-promo" style="width:18px;height:18px"> Promo Eligible
        </label>
        <label style="font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px">
          <input type="checkbox" id="dev-byod" style="width:18px;height:18px"> BYOD Eligible
        </label>
        <label style="font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px">
          <input type="checkbox" id="dev-active" checked style="width:18px;height:18px"> Active
        </label>
      </div>
      <input type="hidden" id="dev-edit-idx" value="-1">
      <div class="g2 mt4">
        <button class="btn btn-ghost btn-sm" onclick="cancelDevForm()">Cancel</button>
        <button class="btn btn-red btn-sm" onclick="saveDevice()">Save Device</button>
      </div>
    </div>
    <div class="tabs" style="margin-top:4px">
      <button class="tab on" onclick="filterDevTab('all',this)">All</button>
      <button class="tab" onclick="filterDevTab('phone',this)">Phones</button>
      <button class="tab" onclick="filterDevTab('tablet',this)">Tablets</button>
      <button class="tab" onclick="filterDevTab('watch',this)">Watches</button>
    </div>
    <div id="adm-dev-list"></div>
  </div>

  <!-- PERKS TAB -->
  <div id="adm-perks" class="admin-section hidden">
    <div class="card">
      <div class="card-title">Individual Perks</div>
      <div class="card-sub">Edit prices below. Changes take effect on Save &amp; Download.</div>
      <div id="adm-perks-list"></div>
    </div>
    <div class="card">
      <div class="card-title">Simplicity Upgrades</div>
      <div id="adm-upgrades-list"></div>
    </div>
  </div>

  <!-- PROMOS TAB -->
  <div id="adm-promos" class="admin-section hidden">
    <div class="card">
      <div class="card-title">Active Promotions Note</div>
      <div class="card-sub">Shown on the results screen. Update when promos change.</div>
      <textarea id="adm-promos-text" style="width:100%;min-height:200px;border:2px solid var(--border);border-radius:10px;padding:12px;font-size:14px;resize:vertical"></textarea>
    </div>
  </div>

  <!-- SECURITY TAB -->
  <div id="adm-security" class="admin-section hidden">
    <div class="card">
      <div class="card-title">Change Admin Password</div>
      <label class="flbl">Current Password</label><input class="inp" type="password" id="adm-old-pw">
      <label class="flbl">New Password</label><input class="inp" type="password" id="adm-new-pw">
      <label class="flbl">Confirm New Password</label><input class="inp" type="password" id="adm-conf-pw">
      <button class="btn btn-red btn-sm mt2" onclick="changePassword()">Change Password</button>
      <div id="pw-msg" style="font-size:13px;margin-top:8px;text-align:center"></div>
    </div>
  </div>

  <div class="bnav">
    <button class="btn btn-ghost" onclick="go('s-welcome')">Exit Admin</button>
    <button class="btn btn-red" onclick="saveAdmin()">Save &amp; Download</button>
  </div>
</div>

""")

print("HTML structure written, length:", sum(len(p) for p in html_parts))
