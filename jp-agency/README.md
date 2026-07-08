# 日本生活手續查詢器（jp-agency）

以行政區為單位的留學／生活手續查詢工具。選擇「居住地」與「學校所在地」，
動態產生對應的手續清單（市役所、國保、水電、入管、免許中心、通學交通等），
支援勾選進度與多筆註記，以通關密語跨裝置同步（Firebase Firestore）。

## 部署（GitHub Pages）

1. 開一個新 repo（例如 `jp-agency`），把本資料夾內容全部上傳（保持目錄結構）
2. Settings → Pages → 部署分支選 main / root
3. **所有 data/ 底下的檔案必須一併上傳**，缺檔會在頁面頂部顯示紅色錯誤框提示缺哪個

## Firestore 規則（沿用 japan-checklist-4c300 專案）

本工具使用新的 collection `agency`，與個人版清單（`checklists`）互不干擾。
到 Firebase Console → Firestore → 規則，改成：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /checklists/{passphrase} {
      allow read, write: if passphrase.size() >= 12;
    }
    match /agency/{passphrase} {
      allow read, write: if passphrase.size() >= 12;
    }
  }
}
```

## 新增一個行政區（三步驟，主程式不用改）

1. 複製 `data/kanagawa/kamakura.js` 為範本，建立 `data/<縣>/<市>.js`，
   改 id（格式 `縣id-市id`）、名稱、市役所／國保／水道／稅務署與連結
2. 在 `index.html` 的資料檔區塊加一行：
   `<script src="data/<縣>/<市>.js"></script>`
3. 在 `data/manifest.js` 的 `municipalities` 登錄一行

若是新的都道府縣，另在 `data/prefectures.js` 補該縣的入管與免許中心資料，
並把 `manifest.js` 該縣的 `hasData` 改為 `true`。

## 資料檔佔位符

`common.js` 的項目文字支援：
- `{home.name}`、`{school.name}`：居住地／學校所在地名稱
- `{home.cityHall.name}`、`{home.water.provider}` 等：市資料檔欄位
- `{prefHome.immigration.name}`、`{prefHome.licenseCenter.tel}` 等：縣資料檔欄位

links 陣列支援：
- `["名稱","網址","官方|中文|參考"]`：靜態連結
- `"@home.links.juminhyo"`：注入市資料檔的連結陣列
- `"@commute"`：自動產生居住地→學校的 Google Maps 大眾運輸路線連結
