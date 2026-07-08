/* ============================================================
   prefectures.js — 都道府縣層級資料
   提供依「都道府縣」推導的資訊：入管管轄局、運転免許中心。
   連結格式：[名稱, 網址, 類型]，類型：官方 / 中文 / 參考
   ============================================================ */
window.CHECKLIST_DATA = window.CHECKLIST_DATA || {};
window.CHECKLIST_DATA.prefectures = {

  kanagawa: {
    id: "kanagawa",
    name: "神奈川県",
    immigration: {
      name: "橫濱地方出入國在留管理局",
      note: "神奈川縣居民的簽證更新、資格外活動許可等由橫濱局管轄。",
      links: [
        ["出入國在留管理廳", "https://www.moj.go.jp/isa/", "官方"],
        ["入管：資格外活動許可申請（含申請書下載）", "https://www.moj.go.jp/isa/applications/procedures/16-8.html", "官方"],
        ["入管：留学的資格外活動許可說明", "https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri07_00003.html", "官方"]
      ]
    },
    licenseCenter: {
      name: "神奈川運転免許センター（二俣川）",
      tel: "045-365-3111",
      note: "地點：橫濱市旭區二俣川。外免切替請先電話預約並確認文件。",
      links: [
        ["神奈川縣警：外國駕照切替手續", "https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83046.html", "官方"],
        ["神奈川縣警：外國籍者受驗須知（2025/10 新制）", "https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83155.html", "官方"],
        ["神奈川縣警：運転免許手續總目次", "https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83000.html", "官方"]
      ]
    }
  },

  tokyo: {
    id: "tokyo",
    name: "東京都",
    immigration: {
      name: "東京出入國在留管理局",
      note: "東京都居民的簽證更新、資格外活動許可等由東京局（品川）管轄。",
      links: [
        ["出入國在留管理廳", "https://www.moj.go.jp/isa/", "官方"],
        ["入管：資格外活動許可申請（含申請書下載）", "https://www.moj.go.jp/isa/applications/procedures/16-8.html", "官方"]
      ]
    },
    licenseCenter: {
      name: "警視廳 運転免許試験場（府中・鮫洲・江東）",
      tel: "",
      note: "東京的外免切替於警視廳轄下試驗場辦理，請先上官網確認預約方式。",
      links: [
        ["警視廳（運転免許）", "https://www.keishicho.metro.tokyo.lg.jp/", "官方"]
      ]
    }
  }

};
