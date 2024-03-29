(() => {
  const e = (e) => localStorage.getItem(e),
    t = (e, t) => {
      localStorage.setItem(e, t);
    },
    r = "ar-",
    n = document.getElementById("customizer-styles"),
    o = document.getElementById("custom-generated-styles"),
    a = `\n    :root {\n      ${e("theme-primary") && `--${r}primary: ${e("theme-primary")};`}\n      ${e("theme-primary-rgb") && `--${r}primary-rgb: ${e("theme-primary-rgb")};`}\n      ${
      e("theme-warning") && `--${r}warning-rgb: ${e("theme-warning")};`
    }\n      ${e("theme-warning-rgb") && `--${r}warning-rgb: ${e("theme-warning-rgb")};`}\n      ${e("theme-info") && `--${r}info-rgb: ${e("theme-info")};`}\n      ${
      e("theme-info-rgb") && `--${r}info-rgb: ${e("theme-info-rgb")};`
    }\n      ${e("theme-success") && `--${r}success-rgb: ${e("success-info")};`}\n      ${e("theme-success-rgb") && `--${r}success-rgb: ${e("success-info-rgb")};`}\n      ${
      e("theme-danger") && `--${r}danger-rgb: ${e("danger-info")};`
    }\n      ${e("theme-danger-rgb") && `--${r}danger-rgb: ${e("danger-info-rgb")};`}\n      ${e("theme-font-family") && `--${r}body-font-family: ${e("theme-font-family")};`}\n      ${
      e("theme-root-font-size") && `--${r}root-font-size: ${e("theme-root-font-size")};`
    }\n      ${e("theme-body-font-size") && `--${r}body-font-size: ${e("theme-body-font-size")};`}\n      ${e("theme-border-width") && `--${r}border-width: ${e("theme-border-width")};`}\n      ${
      e("theme-border-radius") && `--${r}border-radius: ${e("theme-border-radius")};`
    }\n      ${e("theme-border-radius-sm") && `--${r}border-radius-sm: ${e("theme-border-radius-sm")};`}\n      ${e("theme-border-radius-lg") && `--${r}border-radius-lg: ${e("theme-border-radius-lg")};`}\n      ${
      e("theme-border-radius-xl") && `--${r}border-radius-xl: ${e("theme-border-radius-xl")};`
    }\n      ${e("theme-border-radius-xxl") && `--${r}border-radius-xxl: ${e("theme-border-radius-xxl")};`}\n      ${e("theme-primary") && `--${r}link-color: ${e("theme-primary")};`}\n      ${
      e("theme-primary-btn-hover-active-border-bg-color") && `--${r}link-hover-color: ${e("theme-primary-btn-hover-active-border-bg-color")};`
    }\n    }\n    .btn-primary {\n      ${e("theme-primary") && `--${r}btn-bg: ${e("theme-primary")};`}\n      ${e("theme-primary") && `--${r}btn-border-color: ${e("theme-primary")};`}\n      ${
      e("theme-primary-btn-hover-active-border-bg-color") && `--${r}btn-hover-bg: ${e("theme-primary-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-primary-btn-hover-active-border-bg-color") && `--${r}btn-hover-border-color: ${e("theme-primary-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-primary-btn-hover-active-border-bg-color") && `--${r}btn-active-bg: ${e("theme-primary-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-primary-btn-hover-active-border-bg-color") && `--${r}btn-active-border-color: ${e("theme-primary-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-primary") && `--${r}btn-disabled-bg: ${e("theme-primary")};`
    }\n      ${e("theme-primary") && `--${r}btn-disabled-border-color: ${e("theme-primary")};`}\n    }\n    .btn-warning {\n      ${e("theme-warning") && `--${r}btn-bg: ${e("theme-warning")};`}\n      ${
      e("theme-warning") && `--${r}btn-border-color: ${e("theme-warning")};`
    }\n      ${e("theme-warning-btn-hover-active-border-bg-color") && `--${r}btn-hover-bg: ${e("theme-warning-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-warning-btn-hover-active-border-bg-color") && `--${r}btn-hover-border-color: ${e("theme-warning-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-warning-btn-hover-active-border-bg-color") && `--${r}btn-active-bg: ${e("theme-warning-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-warning-btn-hover-active-border-bg-color") && `--${r}btn-active-border-color: ${e("theme-warning-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-warning") && `--${r}btn-disabled-bg: ${e("theme-warning")};`}\n      ${e("theme-warning") && `--${r}btn-disabled-border-color: ${e("theme-warning")};`}\n    }\n    .btn-info {\n      ${
      e("theme-info") && `--${r}btn-bg: ${e("theme-info")};`
    }\n      ${e("theme-info") && `--${r}btn-border-color: ${e("theme-info")};`}\n      ${e("theme-info-btn-hover-active-border-bg-color") && `--${r}btn-hover-bg: ${e("theme-info-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-info-btn-hover-active-border-bg-color") && `--${r}btn-hover-border-color: ${e("theme-info-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-info-btn-hover-active-border-bg-color") && `--${r}btn-active-bg: ${e("theme-info-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-info-btn-hover-active-border-bg-color") && `--${r}btn-active-border-color: ${e("theme-info-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-info") && `--${r}btn-disabled-bg: ${e("theme-info")};`}\n      ${e("theme-info") && `--${r}btn-disabled-border-color: ${e("theme-info")};`}\n    }\n    .btn-success {\n      ${
      e("theme-success") && `--${r}btn-bg: ${e("theme-success")};`
    }\n      ${e("theme-success") && `--${r}btn-border-color: ${e("theme-success")};`}\n      ${
      e("theme-success-btn-hover-active-border-bg-color") && `--${r}btn-hover-bg: ${e("theme-success-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-success-btn-hover-active-border-bg-color") && `--${r}btn-hover-border-color: ${e("theme-success-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-success-btn-hover-active-border-bg-color") && `--${r}btn-active-bg: ${e("theme-success-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-success-btn-hover-active-border-bg-color") && `--${r}btn-active-border-color: ${e("theme-success-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-success") && `--${r}btn-disabled-bg: ${e("theme-success")};`
    }\n      ${e("theme-success") && `--${r}btn-disabled-border-color: ${e("theme-success")};`}\n    }\n    .btn-danger {\n      ${e("theme-danger") && `--${r}btn-bg: ${e("theme-danger")};`}\n      ${
      e("theme-danger") && `--${r}btn-border-color: ${e("theme-danger")};`
    }\n      ${e("theme-danger-btn-hover-active-border-bg-color") && `--${r}btn-hover-bg: ${e("theme-danger-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-danger-btn-hover-active-border-bg-color") && `--${r}btn-hover-border-color: ${e("theme-danger-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-danger-btn-hover-active-border-bg-color") && `--${r}btn-active-bg: ${e("theme-danger-btn-hover-active-border-bg-color")};`}\n      ${
      e("theme-danger-btn-hover-active-border-bg-color") && `--${r}btn-active-border-color: ${e("theme-danger-btn-hover-active-border-bg-color")};`
    }\n      ${e("theme-danger") && `--${r}btn-disabled-bg: ${e("theme-danger")};`}\n      ${e("theme-danger") && `--${r}btn-disabled-border-color: ${e("theme-danger")};`}\n    }\n    .btn-outline-primary {\n      ${
      e("theme-primary") && `--${r}btn-color: ${e("theme-primary")};`
    }\n      ${e("theme-primary") && `--${r}btn-border-color: ${e("theme-primary")};`}\n      ${e("theme-primary") && `--${r}btn-hover-bg: ${e("theme-primary")};`}\n      ${
      e("theme-primary") && `--${r}btn-hover-border-color: ${e("theme-primary")};`
    }\n      ${e("theme-primary") && `--${r}btn-active-bg: ${e("theme-primary")};`}\n      ${e("theme-primary") && `--${r}btn-active-border-color: ${e("theme-primary")};`}\n      ${
      e("theme-primary") && `--${r}btn-disabled-color: ${e("theme-primary")};`
    }\n      ${e("theme-primary") && `--${r}btn-disabled-border-color: ${e("theme-primary")};`}\n    }\n    .btn-outline-warning {\n      ${e("theme-warning") && `--${r}btn-color: ${e("theme-warning")};`}\n      ${
      e("theme-warning") && `--${r}btn-border-color: ${e("theme-warning")};`
    }\n      ${e("theme-warning") && `--${r}btn-hover-bg: ${e("theme-warning")};`}\n      ${e("theme-warning") && `--${r}btn-hover-border-color: ${e("theme-warning")};`}\n      ${
      e("theme-warning") && `--${r}btn-active-bg: ${e("theme-warning")};`
    }\n      ${e("theme-warning") && `--${r}btn-active-border-color: ${e("theme-warning")};`}\n      ${e("theme-warning") && `--${r}btn-disabled-color: ${e("theme-warning")};`}\n      ${
      e("theme-warning") && `--${r}btn-disabled-border-color: ${e("theme-warning")};`
    }\n    }\n    .btn-outline-info {\n      ${e("theme-info") && `--${r}btn-color: ${e("theme-info")};`}\n      ${e("theme-info") && `--${r}btn-border-color: ${e("theme-info")};`}\n      ${
      e("theme-info") && `--${r}btn-hover-bg: ${e("theme-info")};`
    }\n      ${e("theme-info") && `--${r}btn-hover-border-color: ${e("theme-info")};`}\n      ${e("theme-info") && `--${r}btn-active-bg: ${e("theme-info")};`}\n      ${
      e("theme-info") && `--${r}btn-active-border-color: ${e("theme-info")};`
    }\n      ${e("theme-info") && `--${r}btn-disabled-color: ${e("theme-info")};`}\n      ${e("theme-info") && `--${r}btn-disabled-border-color: ${e("theme-info")};`}\n    }\n    .btn-outline-success {\n      ${
      e("theme-success") && `--${r}btn-color: ${e("theme-success")};`
    }\n      ${e("theme-success") && `--${r}btn-border-color: ${e("theme-success")};`}\n      ${e("theme-success") && `--${r}btn-hover-bg: ${e("theme-success")};`}\n      ${
      e("theme-success") && `--${r}btn-hover-border-color: ${e("theme-success")};`
    }\n      ${e("theme-success") && `--${r}btn-active-bg: ${e("theme-success")};`}\n      ${e("theme-success") && `--${r}btn-active-border-color: ${e("theme-success")};`}\n      ${
      e("theme-success") && `--${r}btn-disabled-color: ${e("theme-success")};`
    }\n      ${e("theme-success") && `--${r}btn-disabled-border-color: ${e("theme-success")};`}\n    }\n    .btn-outline-danger {\n      ${e("theme-danger") && `--${r}btn-color: ${e("theme-danger")};`}\n      ${
      e("theme-danger") && `--${r}btn-border-color: ${e("theme-danger")};`
    }\n      ${e("theme-danger") && `--${r}btn-hover-bg: ${e("theme-danger")};`}\n      ${e("theme-danger") && `--${r}btn-hover-border-color: ${e("theme-danger")};`}\n      ${
      e("theme-danger") && `--${r}btn-active-bg: ${e("theme-danger")};`
    }\n      ${e("theme-danger") && `--${r}btn-active-border-color: ${e("theme-danger")};`}\n      ${e("theme-danger") && `--${r}btn-disabled-color: ${e("theme-danger")};`}\n      ${
      e("theme-danger") && `--${r}btn-disabled-border-color: ${e("theme-danger")};`
    }\n    }\n    .accordion-button:not(.collapsed)::after {\n      ${e("theme-accordion-btn-active-icon") && `--${r}accordion-btn-active-icon: ${e("theme-accordion-btn-active-icon")}`}\n    }\n  `;
  let i = a;
  (i = a.replace(/null|\s*(?![A-Z])/g, "")),
    n.append(i),
    i.split("}").map((e) => {
      -1 !== e.indexOf("{--") && o.append(e + "}");
    });
  const c = {
      root: n.sheet.cssRules[0],
      primaryBtn: n.sheet.cssRules[1],
      warningBtn: n.sheet.cssRules[2],
      infoBtn: n.sheet.cssRules[3],
      successBtn: n.sheet.cssRules[4],
      dangerBtn: n.sheet.cssRules[5],
      primaryOutlineBtn: n.sheet.cssRules[6],
      warningOutlineBtn: n.sheet.cssRules[7],
      infoOutlineBtn: n.sheet.cssRules[8],
      successOutlineBtn: n.sheet.cssRules[9],
      dangerOutlineBtn: n.sheet.cssRules[10],
      accordion: n.sheet.cssRules[11],
    },
    s = () => {
      (o.innerHTML = c.root.cssText.replace(/null|\s*(?![A-Z])/g, "")),
        (o.innerHTML += -1 === c.primaryBtn.cssText.indexOf("{ }") ? c.primaryBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.warningBtn.cssText.indexOf("{ }") ? c.warningBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.infoBtn.cssText.indexOf("{ }") ? c.infoBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.successBtn.cssText.indexOf("{ }") ? c.successBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.dangerBtn.cssText.indexOf("{ }") ? c.dangerBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.primaryOutlineBtn.cssText.indexOf("{ }") ? c.primaryOutlineBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.warningOutlineBtn.cssText.indexOf("{ }") ? c.warningOutlineBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.infoOutlineBtn.cssText.indexOf("{ }") ? c.infoOutlineBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.successOutlineBtn.cssText.indexOf("{ }") ? c.successOutlineBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.dangerOutlineBtn.cssText.indexOf("{ }") ? c.dangerOutlineBtn.cssText.replace(/ /g, "") : ""),
        (o.innerHTML += -1 === c.accordion.cssText.indexOf("{ }") ? c.accordion.cssText.replace(/ /g, "") : "");
    },
    b = (e) => {
      var t = 0,
        r = 0,
        n = 0;
      return 4 == e.length ? ((t = "0x" + e[1] + e[1]), (r = "0x" + e[2] + e[2]), (n = "0x" + e[3] + e[3])) : 7 == e.length && ((t = "0x" + e[1] + e[2]), (r = "0x" + e[3] + e[4]), (n = "0x" + e[5] + e[6])), +t + "," + +r + "," + +n;
    },
    l = (e, t) => {
      var r = parseInt(e.replace("#", ""), 16),
        n = Math.round(2.55 * t),
        o = (r >> 16) + n,
        a = ((r >> 8) & 255) + n,
        i = (255 & r) + n;
      return "#" + (16777216 + 65536 * (o < 255 ? (o < 1 ? 0 : o) : 255) + 256 * (a < 255 ? (a < 1 ? 0 : a) : 255) + (i < 255 ? (i < 1 ? 0 : i) : 255)).toString(16).slice(1);
    },
    d = document.querySelectorAll("#theme-colors .color-swatch");
  for (let n = 0; n < d.length; n++) {
    const o = d[n].querySelector("label"),
      a = d[n].querySelector('input[type="color"]'),
      i = d[n].querySelector('input[type="text"]');
    (i.value = e(d[n].id) || i.value),
      (a.value = e(d[n].id) || a.value),
      (o.style.backgroundColor = e(d[n].id) || a.value),
      a.addEventListener("input", (e) => {
        const n = e.target.parentElement.querySelector("label"),
          o = e.target.parentElement.querySelector('input[type="text"]'),
          a = e.target.value;
        t("theme-" + e.target.id, a),
          t("theme-" + e.target.id + "-rgb", b(a)),
          t("theme-" + e.target.id + "-btn-hover-active-border-bg-color", l(a, -10)),
          (n.style.backgroundColor = a),
          (o.value = a),
          c.root.style.setProperty("--" + r + e.target.id, a),
          c.root.style.setProperty("--" + r + e.target.id + "-rgb", b(a)),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-bg", a),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-border-color", a),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-hover-bg", l(a, -10)),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-hover-border-color", l(a, -10)),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-active-bg", l(a, -10)),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-active-border-color", l(a, -10)),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-disabled-bg", a),
          c[e.target.id + "Btn"].style.setProperty("--ar-btn-disabled-border-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-border-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-hover-bg", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-hover-border-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-active-bg", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-active-border-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-disabled-color", a),
          c[e.target.id + "OutlineBtn"].style.setProperty("--ar-btn-disabled-border-color", a),
        "primary" === e.target.id &&
        (t("theme-link-hover-color", l(a, -10)),
          t(
            "theme-accordion-btn-active-icon",
            `url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='${a.replace(
              /#/g,
              "%23"
            )}'%3e%3cpath%20d='M.5%206.3c.6-.6%201.6-.6%202.3%200l9.3%209.3%209.3-9.3c.6-.6%201.6-.6%202.3%200%20.6.6.6%201.6%200%202.3L13.3%2018.8c-.6.6-1.6.6-2.3%200L.8%208.5c-.9-.8-.9-1.6-.3-2.2z'/%3e%3c/svg%3e")`
          ),
          c.root.style.setProperty("--ar-link-color", a),
          c.root.style.setProperty("--ar-link-hover-color", l(a, -10)),
          c.accordion.style.setProperty(
            "--ar-accordion-btn-active-icon",
            `url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='${a.replace(
              /#/g,
              "%23"
            )}'%3e%3cpath%20d='M.5%206.3c.6-.6%201.6-.6%202.3%200l9.3%209.3%209.3-9.3c.6-.6%201.6-.6%202.3%200%20.6.6.6%201.6%200%202.3L13.3%2018.8c-.6.6-1.6.6-2.3%200L.8%208.5c-.9-.8-.9-1.6-.3-2.2z'/%3e%3c/svg%3e")`
          )),
          s();
      }),
      i.addEventListener("change", (e) => {
        const n = e.target.parentElement.querySelector("label"),
          o = e.target.parentElement.querySelector('input[type="color"]'),
          a = e.target.value;
        0 != a.length &&
        a.startsWith("#") &&
        (t("theme-" + o.id, a),
          t("theme-" + o.id + "-rgb", b(a)),
          t("theme-" + o.id + "-btn-hover-active-border-bg-color", l(a, -10)),
          (n.style.backgroundColor = a),
          (o.value = a),
          c.root.style.setProperty("--" + r + o.id, a),
          c.root.style.setProperty("--" + r + o.id + "-rgb", b(a)),
          c[o.id + "Btn"].style.setProperty("--ar-btn-bg", a),
          c[o.id + "Btn"].style.setProperty("--ar-btn-border-color", a),
          c[o.id + "Btn"].style.setProperty("--ar-btn-hover-bg", l(a, -10)),
          c[o.id + "Btn"].style.setProperty("--ar-btn-hover-border-color", l(a, -10)),
          c[o.id + "Btn"].style.setProperty("--ar-btn-active-bg", l(a, -10)),
          c[o.id + "Btn"].style.setProperty("--ar-btn-active-border-color", l(a, -10)),
          c[o.id + "Btn"].style.setProperty("--ar-btn-disabled-bg", a),
          c[o.id + "Btn"].style.setProperty("--ar-btn-disabled-border-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-border-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-hover-bg", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-hover-border-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-active-bg", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-active-border-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-disabled-color", a),
          c[o.id + "OutlineBtn"].style.setProperty("--ar-btn-disabled-border-color", a),
        "primary" === o.id &&
        (t("theme-link-hover-color", l(a, -10)),
          t(
            "theme-accordion-btn-active-icon",
            `url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='${a.replace(
              /#/g,
              "%23"
            )}'%3e%3cpath%20d='M.5%206.3c.6-.6%201.6-.6%202.3%200l9.3%209.3%209.3-9.3c.6-.6%201.6-.6%202.3%200%20.6.6.6%201.6%200%202.3L13.3%2018.8c-.6.6-1.6.6-2.3%200L.8%208.5c-.9-.8-.9-1.6-.3-2.2z'/%3e%3c/svg%3e")`
          ),
          c.root.style.setProperty("--ar-link-color", a),
          c.root.style.setProperty("--ar-link-hover-color", l(a, -10)),
          c.accordion.style.setProperty(
            "--ar-accordion-btn-active-icon",
            `url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='${a.replace(
              /#/g,
              "%23"
            )}'%3e%3cpath%20d='M.5%206.3c.6-.6%201.6-.6%202.3%200l9.3%209.3%209.3-9.3c.6-.6%201.6-.6%202.3%200%20.6.6.6%201.6%200%202.3L13.3%2018.8c-.6.6-1.6.6-2.3%200L.8%208.5c-.9-.8-.9-1.6-.3-2.2z'/%3e%3c/svg%3e")`
          )),
          s());
      });
  }
  const m = document.getElementById("font-url"),
    h = document.getElementById("google-font");
  (h.href = e("theme-font-url") || m.value),
    (m.value = e("theme-font-url") || m.value),
    m.addEventListener("blur", (e) => {
      const r = e.target.value;
      t("theme-font-url", r), (h.href = r);
    });
  const g = document.getElementById("body-font-family");
  (g.value = e("theme-font-family") || g.value),
    g.addEventListener("blur", (e) => {
      var r = e.target.value;
      t("theme-font-family", r), c.root.style.setProperty("--ar-body-font-family", r), s();
    });
  const $ = document.getElementById("root-font-size");
  ($.value = e("theme-root-font-size") || $.value),
    $.addEventListener("change", (e) => {
      const r = e.target.value;
      t("theme-root-font-size", r), c.root.style.setProperty("--ar-root-font-size", r), s();
    });
  const v = document.getElementById("body-font-size");
  (v.value = e("theme-body-font-size") || v.value),
    v.addEventListener("change", (e) => {
      const r = e.target.value;
      t("theme-body-font-size", r), c.root.style.setProperty("--ar-body-font-size", r), s();
    });
  const u = document.getElementById("border-width");
  (u.value = parseInt(e("theme-border-width")) || u.value),
    u.addEventListener("input", (e) => {
      const r = e.target.value;
      t("theme-border-width", r + "px"), c.root.style.setProperty("--ar-border-width", r + "px"), s();
    });
  const y = document.getElementById("border-radius");
  (y.value = parseFloat(e("theme-border-radius")) || y.value),
    y.addEventListener("input", (e) => {
      const r = e.target.value;
      t("theme-border-radius", r + "rem"), c.root.style.setProperty("--ar-border-radius", r + "rem"), s();
    });
  const p = document.querySelectorAll('#theme-border-radiuses input[type="number"');
  for (let n = 0; n < p.length; n++)
    (p[n].value = e("theme-" + p[n].id + "multiplier") || p[n].value),
      p[n].addEventListener("input", (e) => {
        const n = e.target.value;
        t("theme-" + e.target.id, "calc(var(--ar-border-radius) * " + n + ")"), t("theme-" + e.target.id + "multiplier", n), c.root.style.setProperty("--" + r + e.target.id, "calc(var(--ar-border-radius) * " + n + ")"), s();
      });
  const f = document.getElementById("customizer"),
    w = document.getElementById("customizer-btns");
  e("theme-customizer-btns") && w.classList.remove("d-none"),
    f.addEventListener("change", (e) => {
      t("theme-customizer-btns", !0), w.classList.remove("d-none");
    });
  document.getElementById("customizer-reset-btn").addEventListener("click", () => {
    let e = [];
    for (let t = 0; t < localStorage.length; t++) "theme" == localStorage.key(t).substring(0, 5) && e.push(localStorage.key(t));
    for (let t = 0; t < e.length; t++) localStorage.removeItem(e[t]);
    window.location.reload();
  });
  const B = document.getElementById("copy-styles-btn");
  B.addEventListener("click", (e) => {
    const t = document.createRange();
    t.selectNode(o),
      window.getSelection().removeAllRanges(),
      window.getSelection().addRange(t),
      navigator.clipboard.writeText(o.innerHTML),
      (e.currentTarget.innerHTML = '<i class="ai-check me-2 ms-n1"></i>Copied!'),
      setTimeout(function () {
        B.innerHTML = '<i class="ai-copy me-2 ms-n1"></i>Copy styles';
      }, 2e3);
  });
})();
