/* ============================================================
   data/kanagawa/kawasaki.js — 川崎市
   ============================================================ */
window.CHECKLIST_DATA = window.CHECKLIST_DATA || {};
window.CHECKLIST_DATA.municipalities = window.CHECKLIST_DATA.municipalities || {};
window.CHECKLIST_DATA.municipalities["kanagawa-kawasaki"] = {
  id: "kanagawa-kawasaki",
  prefId: "kanagawa",
  name: "川崎市",

  cityHall: {
    name: "川崎市 各區役所",
    window: "居住區的區役所 區民課",
    address: "川崎市為政令指定都市，依居住的區（川崎區・幸區・中原區・高津區・宮前區・多摩區・麻生區）到該區役所辦理",
    tel: "",
    note: "轉入届、國保、年金都在居住區的區役所辦理，不是市役所本廳。"
  },
  kokuho: { window: "居住區的區役所 保險年金課" },
  water:  { provider: "川崎市上下水道局", tel: "",
            note: "使用開始可線上或電話申請，詳見市官網。" },
  taxOffice: "依居住區分屬川崎南・川崎北・川崎西稅務署",

  links: {
    juminhyo: [
      ["川崎市官網（區役所一覽・轉入手續）", "https://www.city.kawasaki.jp/", "官方"]
    ],
    kokuho: [
      ["川崎市官網（國民健康保險）", "https://www.city.kawasaki.jp/", "官方"]
    ],
    utility: [
      ["川崎市上下水道局（市官網內）", "https://www.city.kawasaki.jp/", "官方"],
      ["東京電力", "https://www.tepco.co.jp/", "官方"],
      ["東京瓦斯", "https://home.tokyo-gas.co.jp/", "官方"]
    ],
    tax: [
      ["國稅廳（確定申告）", "https://www.nta.go.jp/", "官方"],
      ["e-Tax", "https://www.e-tax.nta.go.jp/", "官方"]
    ],
    city: [
      ["川崎市官網", "https://www.city.kawasaki.jp/", "官方"]
    ]
  }
};
