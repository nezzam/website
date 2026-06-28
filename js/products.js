(function () {
  "use strict";

  const products = [
  {
    "title": "Flexible Chatter Position & Resize",
    "desc": "Resize, hide/show, and reposition the Chatter panel per user",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573990",
    "price": "$ 34.73",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_chatter_position",
    "free": false
  },
  {
    "title": "POS Offline Cache",
    "desc": "Allow Odoo POS to work fully offline even after a page reload",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573975",
    "price": "$ 54.59",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_offline_cache",
    "free": false
  },
  {
    "title": "POS Restaurant Real-Time Sync",
    "desc": "Real-time synchronization for POS restaurant across all terminals",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30574003",
    "price": "$ 14.89",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_restaurant_sync",
    "free": false
  },
  {
    "title": "PO Translator",
    "desc": "Translate module PO files directly inside Odoo with smart suggestions",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573986",
    "price": "$ 19.85",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_po_translator",
    "free": false
  },
  {
    "title": "Automatic & Manual Currency Exchange Rate",
    "desc": "Exchange Currency Rate - Automatic & Manual Control",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573988",
    "price": "$ 14.89",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_currency_rate",
    "free": false
  },
  {
    "title": "Sale order Payment Status",
    "desc": "Payment status, paid amount, remaining amount and progress on quotations",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=29837137",
    "price": "FREE",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_sale_order_payment_status",
    "free": true
  },
  {
    "title": "Chart of Accounts Cleanup & Restore",
    "desc": "Advanced module to delete all accounts with detailed tracking",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=29837136",
    "price": "FREE",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_custom_account_cleaner",
    "free": true
  },
  {
    "title": "CTRL + Click to Open New Tab",
    "desc": "Hold CTRL (or Cmd on macOS) and click any record to open it in a new browser tab.",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=29837139",
    "price": "FREE",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_ctrl_click_new_tab",
    "free": true
  },
  {
    "title": "Multi Destination Location Stock Transfer Line",
    "desc": "Set destination location per operation line in transfers",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=29837138",
    "price": "FREE",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_transfer_line_destination",
    "free": true
  },
  {
    "title": "Chatter Search & Filter",
    "desc": "Live client-side search filter inside the Chatter panel",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573983",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_chatter_search",
    "free": false
  },
  {
    "title": "Device Restriction",
    "desc": "Restrict user login to specific registered devices",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573996",
    "price": "$ 49.63",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_device_restriction",
    "free": false
  },
  {
    "title": "Dynamic Report Templates & PDF Layouts",
    "desc": "Create dynamic HTML templates, choose layout (basic/external/html_container), select paper formats, and print professional PDF reports.",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573984",
    "price": "$ 99.27",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_dynamic_report",
    "free": false
  },
  {
    "title": "Geo Base - Geo Polygon Map Widget",
    "desc": "Reusable geographic polygon map field widget",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573992",
    "price": "$ 99.27",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_geo_base",
    "free": false
  },
  {
    "title": "Journal Commission (Bank commission)",
    "desc": "",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573987",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_journal_commission",
    "free": false
  },
  {
    "title": "POS Auto Lock",
    "desc": "Automatically lock POS screen after inactivity period",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573977",
    "price": "$ 9.92",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_auto_lock",
    "free": false
  },
  {
    "title": "POS Cross-Branch Refund",
    "desc": "Allow POS refund/return on orders from any POS branch with source-POS visibility and cross-branch warning",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573997",
    "price": "$ 49.63",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_cross_branch_refund",
    "free": false
  },
  {
    "title": "POS Customer Payment Methods",
    "desc": "Allow customers to have specific payment methods in POS",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30574004",
    "price": "$ 19.84",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_customer_payment_methods",
    "free": false
  },
  {
    "title": "POS Kitchen Receipt | Dual Receipt Print",
    "desc": "Print kitchen receipt alongside customer receipt in one print command",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573976",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_dual_receipt",
    "free": false
  },
  {
    "title": "POS Merge Orders",
    "desc": "Merge multiple Ongoing POS orders into one from the Ticket Screen",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573999",
    "price": "$ 5.95",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_merge_orders",
    "free": false
  },
  {
    "title": "POS Multi Currency Payment",
    "desc": "Accept payments in multiple currencies in Point of Sale",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573971",
    "price": "$ 24.81",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_multi_currency",
    "free": false
  },
  {
    "title": "POS Product Internal Reference",
    "desc": "Shows the internal reference above the product name on POS product cards",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573991",
    "price": "$ 5.95",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_product_ref",
    "free": false
  },
  {
    "title": "POS Product List View",
    "desc": "Toggle between Grid and List view for POS products with configurable columns",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573978",
    "price": "$ 19.84",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_list_view",
    "free": false
  },
  {
    "title": "POS Product Price on Card",
    "desc": "Shows the product price (respecting the active pricelist) on each POS product card",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573980",
    "price": "$ 5.95",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_product_price",
    "free": false
  },
  {
    "title": "POS Product Refundable",
    "desc": "Mark products as refundable or non-refundable in Point of Sale",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573981",
    "price": "$ 9.92",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_product_refundable",
    "free": false
  },
  {
    "title": "POS Receipt Designer",
    "desc": "Design and customize POS receipts with drag-and-drop editor, QR codes, multiple templates, and dynamic product columns",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573970",
    "price": "$ 99.27",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_receipt_designer",
    "free": false
  },
  {
    "title": "POS Refund Line Search",
    "desc": "Search refund lines in POS Ticket Screen by product name or code",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573974",
    "price": "$ 14.89",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_refund_line_search",
    "free": false
  },
  {
    "title": "POS Swipe to Delete Order Line",
    "desc": "Swipe order lines left to delete them — just like dismissing a notification",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573985",
    "price": "$ 9.93",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_swipe_delete",
    "free": false
  },
  {
    "title": "POS Tip Shortcuts",
    "desc": "Adds quick round-up shortcut buttons to the POS tip dialog",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573973",
    "price": "$ 9.92",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_pos_tip_shortcuts",
    "free": false
  },
  {
    "title": "Password Security Manager",
    "desc": "Configurable password policy for users and signup",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573989",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_password_policy",
    "free": false
  },
  {
    "title": "Product Label Name Limit",
    "desc": "Control product name length in labels",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573979",
    "price": "$ 9.92",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_product_label_limit",
    "free": false
  },
  {
    "title": "Quick Create Purchase Order From Sale Order",
    "desc": "Create Purchase Orders directly from Sales Quotations",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573982",
    "price": "$ 9.93",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_sale_to_purchase",
    "free": false
  },
  {
    "title": "Smart Export - Find & Select Fields Faster",
    "desc": "Smart Field Grouping & Filters for Export Data Dialog",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30574002",
    "price": "$ 9.92",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_smart_export",
    "free": false
  },
  {
    "title": "Smart Favorites Menu (Quick Access Star)",
    "desc": "Quick access to your frequently used screens from the systray",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573994",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_quick_access",
    "free": false
  },
  {
    "title": "Take Picture",
    "desc": "Take webcam photo for Employees, Users, and Contacts",
    "banner": "https://apps.odoocdn.com/apps/module_image?image_id=30573972",
    "price": "$ 4.96",
    "url": "https://apps.odoo.com/apps/modules/19.0/nz_take_picture",
    "free": false
  }
];

  let currentFilter = "all";

  function renderProducts(filter) {
    if (filter) currentFilter = filter;
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    const lang = localStorage.getItem("nezam-lang") || "en";
    const filtered = currentFilter === "all"
      ? products
      : currentFilter === "free"
        ? products.filter(p => p.free)
        : products.filter(p => !p.free);

    grid.innerHTML = filtered.map((p, i) => {
      const delay = i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : "";
      const priceClass = p.free ? " product-card__price--free" : "";
      const priceLabel = p.free && lang === "ar" ? "مجاني" : p.price;
      return `
        <a href="${p.url}" class="product-card reveal${delay}" target="_blank" rel="noopener noreferrer">
          <div class="product-card__banner">
            <img src="${p.banner}" alt="${p.title.replace(/"/g, "&quot;")}" loading="lazy">
          </div>
          <div class="product-card__body">
            <span class="product-card__price${priceClass}">${priceLabel}</span>
            <h3>${p.title}</h3>
            ${p.desc ? `<p>${p.desc}</p>` : ""}
            <span class="product-card__link">${lang === "ar" ? "عرض في متجر Odoo ←" : "View on Odoo Apps →"}</span>
          </div>
        </a>`;
    }).join("");

    if (window.initRevealForProducts) window.initRevealForProducts();
    else initRevealElements(grid.querySelectorAll(".reveal"));

    const countEl = document.querySelector(".products-count");
    if (countEl) {
      const total = filtered.length;
      countEl.textContent = lang === "ar"
        ? `${total} وحدة متاحة`
        : `${total} module${total === 1 ? "" : "s"} available`;
    }
  }

  function initRevealElements(elements) {
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach(el => observer.observe(el));
  }

  window.initRevealForProducts = function () {
    initRevealElements(document.querySelectorAll("#products-grid .reveal"));
  };

  function initProductFilters() {
    const filters = document.querySelectorAll(".product-filter-btn");
    if (!filters.length) return;

    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.filter);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProducts("all");
    initProductFilters();
  });

  window.renderProducts = renderProducts;
})();
