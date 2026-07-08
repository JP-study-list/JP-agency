/* ============================================================
   manifest.js — 行政區登錄表
   新增一個市區町村的步驟：
   1. 在 data/<縣>/<市>.js 建立資料檔
   2. 在 index.html 加一行 <script src="data/<縣>/<市>.js"></script>
   3. 在下方 municipalities 陣列登錄一行
   主程式完全不用改。
   ============================================================ */
window.CHECKLIST_DATA = window.CHECKLIST_DATA || {};
window.CHECKLIST_DATA.manifest = {

  // 都道府縣（顯示用；hasData 表示 prefectures.js 是否有入管/免許資料）
  prefectures: [
    { id: "hokkaido",  name: "北海道",   hasData: false },
    { id: "miyagi",    name: "宮城県",   hasData: false },
    { id: "saitama",   name: "埼玉県",   hasData: false },
    { id: "chiba",     name: "千葉県",   hasData: false },
    { id: "tokyo",     name: "東京都",   hasData: true  },
    { id: "kanagawa",  name: "神奈川県", hasData: true  },
    { id: "shizuoka",  name: "静岡県",   hasData: false },
    { id: "aichi",     name: "愛知県",   hasData: false },
    { id: "kyoto",     name: "京都府",   hasData: false },
    { id: "osaka",     name: "大阪府",   hasData: false },
    { id: "hyogo",     name: "兵庫県",   hasData: false },
    { id: "hiroshima", name: "広島県",   hasData: false },
    { id: "fukuoka",   name: "福岡県",   hasData: false },
    { id: "okinawa",   name: "沖縄県",   hasData: false }
    // 其餘都道府縣依需要追加
  ],

  // 市區町村（只列已建資料檔者）
  municipalities: [
    { id: "kanagawa-kamakura", prefId: "kanagawa", name: "鎌倉市" },
    { id: "kanagawa-kawasaki", prefId: "kanagawa", name: "川崎市" }
  ]
};
