/* ============================================================
   data/kanagawa/kamakura.js — 鎌倉市
   市區町村資料檔範本：複製本檔改內容即可新增其他城市。
   ============================================================ */
window.CHECKLIST_DATA = window.CHECKLIST_DATA || {};
window.CHECKLIST_DATA.municipalities = window.CHECKLIST_DATA.municipalities || {};
window.CHECKLIST_DATA.municipalities["kanagawa-kamakura"] = {
  id: "kanagawa-kamakura",
  prefId: "kanagawa",
  name: "鎌倉市",

  cityHall: {
    name: "鎌倉市役所",
    window: "本庁舎1階36番窗口",
    address: "鎌倉市御成町18-10",
    tel: "0467-61-3903",
    note: "海外轉入的手續部分支所與週六窗口不受理，第一次建議平日去本庁舎（另有腰越・深沢・大船・玉縄各支所）。"
  },
  kokuho: { window: "本庁舎1階10番窗口" },
  water:  { provider: "神奈川県営水道", tel: "0570-00-5959",
            note: "可 LINE 加「神奈川県企業庁」線上辦理使用開始。" },
  taxOffice: "藤澤稅務署",

  links: {
    juminhyo: [
      ["鎌倉市：住民票の異動手続き", "https://www.city.kamakura.kanagawa.jp/shiminka/juidozen.html", "官方"],
      ["鎌倉市：辦理地點與時間（本庁舎・各支所）", "https://www.city.kamakura.kanagawa.jp/qa/juuminhyou/juuminhyou0007.html", "官方"]
    ],
    kokuho: [
      ["鎌倉市：国民健康保険の加入と脱退", "https://www.city.kamakura.kanagawa.jp/hokennenkin/kokuho-shikaku-kanyudattai.html", "官方"],
      ["鎌倉市：保險料の納付", "https://www.city.kamakura.kanagawa.jp/hokennenkin/kokuho-noufu.html", "官方"],
      ["鎌倉市：保險料の計算方式", "https://www.city.kamakura.kanagawa.jp/hokennenkin/kokuho-fuka.html", "官方"]
    ],
    utility: [
      ["神奈川県営水道：使用開始手續", "https://www.pref.kanagawa.jp/docs/r4a/tetudukigaido/tennyuu.html", "官方"],
      ["神奈川県営水道：線上申請窗口", "https://www.pref.kanagawa.jp/docs/r4a/densisinsei/main.html", "官方"],
      ["東京電力", "https://www.tepco.co.jp/", "官方"],
      ["東京瓦斯", "https://home.tokyo-gas.co.jp/", "官方"]
    ],
    tax: [
      ["國稅廳（確定申告）", "https://www.nta.go.jp/", "官方"],
      ["e-Tax", "https://www.e-tax.nta.go.jp/", "官方"]
    ],
    city: [
      ["鎌倉市官網（多語言）", "https://www.city.kamakura.kanagawa.jp/", "官方"]
    ]
  }
};
