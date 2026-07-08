/* ============================================================
   common.js — 手續項目模板（全國通用）
   文字中可用佔位符，由主程式依所選地區代入：
     {home.name}                居住地名稱
     {school.name}              學校所在地名稱
     {home.cityHall.name} 等    市區町村資料檔內的欄位
     {prefHome.immigration.name} 等  都道府縣資料檔內的欄位
   links 陣列元素可為：
     ["名稱","網址","類型"]      靜態連結
     "@home.links.juminhyo"     注入地區資料檔的連結陣列
     "@commute"                 主程式產生的通學交通連結
   ============================================================ */
window.CHECKLIST_DATA = window.CHECKLIST_DATA || {};
window.CHECKLIST_DATA.phases = [
  { id: 1, label: "PHASE 01", title: "出發前（在台灣辦妥）", note: "建議出發前一至三個月開始準備。" },
  { id: 2, label: "PHASE 02", title: "抵達第一週（法定期限最優先）", note: "住民登録有「入住起 14 天內」的法定期限，其他手續都以它為前提。" },
  { id: 3, label: "PHASE 03", title: "第一個月（生活基礎建設）", note: "順序建議：銀行、手機、水電確認、通學定期。" },
  { id: 4, label: "PHASE 04", title: "中長期（駕照・信用卡・投資・稅務）", note: "這些需要前面的基礎（My Number、銀行、居住實績）到位後再辦。" }
];

window.CHECKLIST_DATA.items = [

/* ── PHASE 1 ── */
{ id:"coe", phase:1, title:"在留資格認定證明書（COE）＋ 留學簽證",
  badges:[{t:"開學前 1~3 個月",k:1},{t:"日本台灣交流協會"}],
  docs:["COE 由學校代為向入管申請，收到後再辦簽證","簽證申請書、護照正本、2 吋白底照片","COE 正本＋影本","（依情況）財力證明、就學理由書等，依交流協會要求"],
  steps:["等學校寄來 COE 正本","備妥文件至日本台灣交流協會台北或高雄事務所送件","約 3~7 個工作天核發，領取貼有簽證的護照"],
  tip:"COE 有效期限為發行日起 3 個月內須入境，安排機票時要注意。",
  links:[["日本台灣交流協會（簽證資訊）","https://www.koryu.or.jp/","官方"],["Study in Japan（JASSO 官方留學入口）","https://www.studyinjapan.go.jp/","官方"],["台北駐日經濟文化代表處","https://www.roc-taiwan.org/jp/","官方"]] },

{ id:"license-trans", phase:1, title:"台灣駕照日文譯本",
  badges:[{t:"出發前順路辦",k:1},{t:"全台監理站"},{t:"NT$100"}],
  docs:["身分證正本","台灣駕照正本（須在有效期內，舊式有期限駕照過期要先換新）"],
  steps:["到任一監理站臨櫃申請（可越區），幾分鐘可領件","與台灣駕照、護照三者搭配，即可在入境日本後 1 年內合法開車"],
  tip:"台灣的國際駕照在日本不能用，只承認日文譯本。譯本效期跟著駕照走，但可開車期間只有入境起 1 年，之後需換日本駕照（見中長期項目）。",
  links:[["交通部公路局：台日駕照互惠說明","https://www.thb.gov.tw/cp.aspx?n=251","官方"],["監理服務網：線上申辦日文譯本","https://www.mvdis.gov.tw/m3-emv-drv/driver/jpApply","官方"],["日本台灣交流協會：在日開車 FAQ","https://www.koryu.or.jp/tw/faq/tabid1185.html","官方"]] },

{ id:"hanko", phase:1, title:"準備印章（はんこ）",
  badges:[{t:"建議行前備妥",k:1}],
  docs:["一顆直徑約 10~12mm 的圓形印章，刻姓氏或全名","避免橡皮章（銀行不收），選木頭、牛角或塑鋼材質"],
  steps:["在台灣刻好帶去最方便，或抵日後到印章店、Don Quijote 刻","開銀行戶、部分市役所文件、契約會用到"],
  tip:"郵局（ゆうちょ）開戶通常需要印章，簽名有時不被接受。",
  links:[] },

{ id:"money", phase:1, title:"資金與跨國匯款準備",
  badges:[{t:"行前規劃",k:1}],
  docs:["初期現金建議 20~30 萬日圓（開戶前的生活費、規費）","開一個 Wise 或類似跨國匯款帳戶，日後從台灣轉錢便宜"],
  steps:["台灣的信用卡確認開通海外刷卡與 Apple Pay","記下台灣銀行帳戶的網銀憑證，人在日本也能操作"],
  tip:"日本銀行帳戶開好之前，市役所規費、刻章、交通都以現金為主。",
  links:[["Wise 跨國匯款","https://wise.com/tw/","參考"]] },

{ id:"phone-prep", phase:1, title:"行動網路過渡方案（eSIM／漫遊）",
  badges:[{t:"行前設定",k:1}],
  docs:["手機先安裝好日本旅遊 eSIM（30 天量足夠過渡）","保留台灣門號漫遊收簡訊（銀行 OTP 驗證用）"],
  steps:["抵日第一個月先用 eSIM，等在留卡＋銀行帳戶齊了再辦日本門號"],
  tip:"台灣門號建議改成最低月租保留，不要直接解約，收台灣銀行與政府簡訊都靠它。",
  links:[] },

/* ── PHASE 2 ── */
{ id:"zairyu", phase:2, title:"機場領取在留卡",
  badges:[{t:"入境當天",k:1},{t:"主要機場入境審查時"}],
  docs:["護照（貼有留學簽證）","COE 正本"],
  steps:["入境審查時當場核發在留卡（羽田、成田、關西、中部等主要機場）","核對姓名、生日、在留資格與在留期間是否正確","在留卡依法必須隨身攜帶"],
  tip:"如果打算打工，入境審查時可以當場同時申請資格外活動許可，在機場勾選申請最省事。",
  links:[["出入國在留管理廳","https://www.moj.go.jp/isa/","官方"]] },

{ id:"juminhyo", phase:2, title:"住民登録（轉入届）",
  badges:[{t:"入住起 14 天內",k:1},{t:"{home.cityHall.name}"},{t:"免費"}],
  docs:["在留卡（持卡辦理即同時完成住居地申報）","護照（含入境日戳章）","印章（備用）"],
  steps:["到 {home.cityHall.name}（{home.cityHall.window}）辦理。地址／說明：{home.cityHall.address}","填寫住民異動届，登記後在留卡背面會記載住址","同一趟順便辦：國民健康保險、國民年金、My Number 相關"],
  tip:"{home.cityHall.note} 聯絡電話：{home.cityHall.tel}",
  links:["@home.links.juminhyo","@home.links.city"] },

{ id:"kokuho", phase:2, title:"國民健康保險加入",
  badges:[{t:"與住民登録同天辦",k:1},{t:"{home.kokuho.window}"}],
  docs:["在留卡","護照","My Number（若已有）＋本人確認文件"],
  steps:["在留期間超過 3 個月的外國人依法必須加入","與住民登録同時辦理即可（窗口：{home.kokuho.window}）","保費依前年所得計算，留學生第一年通常很便宜"],
  tip:"看病自付 3 成。之後若領到 My Number Card 可登錄為保險證使用。保費可設定口座振替（銀行開戶後再回來辦）。",
  links:["@home.links.kokuho",["神奈川縣：外國人的國保說明","https://www.pref.kanagawa.jp/docs/n5p/cnt/f420091/index.html","官方"]] },

{ id:"nenkin", phase:2, title:"國民年金＋學生納付特例",
  badges:[{t:"20 歲以上必辦",k:1},{t:"{home.cityHall.name} 年金窗口"}],
  docs:["在留卡","學生證或在學證明（申請學生納付特例用）"],
  steps:["年滿 20 歲、住在日本者依法加入國民年金（每月約 17,000 日圓）","留學生可申請學生納付特例緩繳，核准後在學期間免繳","住民登録同一趟申請即可"],
  tip:"很多留學生漏掉這項，之後會收到催繳單。記得辦特例申請。",
  links:[["日本年金機構","https://www.nenkin.go.jp/","官方"]] },

{ id:"mynumber", phase:2, title:"My Number（個人番號）與卡片申請",
  badges:[{t:"住登後 2~3 週寄達",k:1},{t:"郵寄／線上申請"},{t:"首發免費"}],
  docs:["住民登録後會收到個人番号通知書＋卡片申請書","申請卡片：申請書＋大頭照（可用手機線上申請）"],
  steps:["收到通知書先妥善保存（號碼終身不變）","線上或郵寄申請 My Number Card，約 1 個月後收到領卡通知","攜通知＋在留卡到 {home.cityHall.name} 領卡並設定密碼"],
  tip:"證券開戶、確定申告、打工報稅都要用到 My Number。強烈建議辦實體卡。",
  links:[["My Number Card 總合網站","https://www.kojinbango-card.go.jp/","官方"],["數位廳","https://www.digital.go.jp/","官方"]] },

/* ── PHASE 3 ── */
{ id:"bank", phase:3, title:"銀行開戶（首選：ゆうちょ銀行）",
  badges:[{t:"住登後盡快",k:1},{t:"{home.name} 內任一郵局"},{t:"免費"}],
  docs:["在留卡（背面已記載住址）","印章","學生證或在學證明（加分）","My Number（有的話帶著）"],
  steps:["居留未滿 6 個月時大型銀行常拒收，郵局（ゆうちょ）對留學生最友善","臨櫃填表開戶，金融卡約 1~2 週寄達","開通 ゆうちょダイレクト 網銀 App"],
  tip:"帳戶開好後回頭設定：國保口座振替、水電瓦斯扣款、手機月租扣款。",
  links:[["ゆうちょ銀行","https://www.jp-bank.japanpost.jp/","官方"]] },

{ id:"sim", phase:3, title:"日本手機門號",
  badges:[{t:"銀行開戶後",k:1},{t:"線上申辦"}],
  docs:["在留卡（住址須與申請一致）","日本銀行帳戶或信用卡（扣款用）"],
  steps:["留學生常用便宜方案：LINEMO、povo 2.0、IIJmio、樂天 Mobile","eSIM 申請最快，當天開通","門號到手後，把 LINE、銀行、各種驗證改綁日本號碼"],
  tip:"在留期間短時部分業者審核較嚴，被拒就換一家，線上申辦成本低。",
  links:[["LINEMO","https://www.linemo.jp/","官方"],["povo","https://povo.jp/","官方"],["IIJmio","https://www.iijmio.jp/","官方"],["樂天 Mobile","https://network.mobile.rakuten.co.jp/","官方"]] },

{ id:"utility", phase:3, title:"水電瓦斯：開通或名義確認",
  badges:[{t:"入住當週",k:1},{t:"{home.water.provider}"}],
  docs:["水道 お客様番号（門口或水表附近的水道ホームメモ上有）","電力與瓦斯的客戶編號（帳單上）"],
  steps:["{home.name} 的自來水由 {home.water.provider} 負責。{home.water.note} 電話：{home.water.tel}","電力與瓦斯線上辦理使用開始或名義變更；瓦斯開栓需本人在場","若住處原本就有供水供電，主要是確認名義人與繳費方式"],
  tip:"多數電力公司提供一站式引越服務，可同時辦電、瓦斯、水道。",
  links:["@home.links.utility"] },

{ id:"commute", phase:3, title:"通學定期券（{home.name} ⇄ {school.name}）",
  badges:[{t:"開學前辦好",k:1},{t:"車站窗口／App"}],
  docs:["學校核發的通学証明書或蓋章的定期券購入申込書","學生證","在留卡（核對身分）"],
  steps:["向學校申請通學證明（先問學校是否為指定校；語言學校部分不適用通學定期，只能買通勤定期）","用下方連結查 {home.name} 到 {school.name} 的路線與票價","交通 IC 卡（Suica／PASMO 等）綁手機最方便"],
  tip:"若學校非通學定期對象校，改買通勤定期仍比單程票省很多。",
  links:["@commute",["Mobile Suica","https://www.jreast.co.jp/mobilesuica/","官方"]] },

{ id:"shikakugai", phase:3, title:"資格外活動許可（打工用）",
  badges:[{t:"打工前必辦",k:1},{t:"機場入境時／{prefHome.immigration.name}"},{t:"免費"}],
  docs:["資格外活動許可申請書（入管官網下載）","在留卡","護照"],
  steps:["最推薦：入境機場領在留卡時當場申請","錯過機場：到 {prefHome.immigration.name} 窗口申請，審查約 2 週至 1 個月。{prefHome.immigration.note}","核准後在留卡背面會記載 許可：原則週 28 時間以内"],
  tip:"上限每週 28 小時（學校長假期間每日 8 小時）。沒許可就打工等於非法就勞，務必先拿到許可再上工。",
  links:["@prefHome.immigration.links"] },

{ id:"nhk", phase:3, title:"NHK 受信契約確認",
  badges:[{t:"有電視就適用",k:1}],
  docs:["家中若有電視或可收訊設備，依法須有受信契約"],
  steps:["先確認住處是否已有既存契約","已有契約則不需重複；沒有電視則不需契約"],
  tip:"NHK 人員上門時不需開門即時決定，可先確認契約狀態再處理。",
  links:[["NHK 受信料窗口","https://www.nhk-cs.jp/jushinryo/","官方"]] },

/* ── PHASE 4 ── */
{ id:"menkyo", phase:4, title:"換發日本駕照（外免切替）",
  badges:[{t:"入境 1 年內靠譯本，之後必辦",k:1},{t:"{prefHome.licenseCenter.name}"}],
  docs:["台灣駕照正本（有效期內）","駕照日文譯本","護照（含舊護照，證明取得駕照後在台灣滯留累計 3 個月以上，建議出入境台灣不走自動通關）","住民票（記載國籍・在留資格等特定事項全部，6 個月內發行）","在留卡","證件照（3×2.4cm）","手續費（現場繳納）"],
  steps:["先聯絡 {prefHome.licenseCenter.name}（{prefHome.licenseCenter.tel}）預約並確認文件。{prefHome.licenseCenter.note}","持台灣駕照者通過書類審查＋適性檢查後，原則免筆試與路考（台灣為互惠免除對象）","注意：2025 年 10 月起外免切替制度全面嚴格化，實際流程以免許中心當下說明為準"],
  tip:"譯本開車效期只有入境起 1 年，長住者請盡早排程換照。",
  links:["@prefHome.licenseCenter.links",["台北駐大阪處：在日申請日文譯本方式","https://www.roc-taiwan.org/jposa/post/6765.html","官方"],["JAF（日本自動車聯盟）","https://jaf.or.jp/","官方"]] },

{ id:"credit", phase:4, title:"日本信用卡 → ETC 卡",
  badges:[{t:"居留數月後成功率較高",k:1},{t:"線上申辦"}],
  docs:["在留卡","日本銀行帳戶","日本手機門號"],
  steps:["留學生較易核卡：樂天卡、EPOS 卡（額度低但門檻低）","核卡後在同一卡商網站加辦 ETC 卡","ETC 卡插入車上機即可走 ETC 車道"],
  tip:"沒有信用卡也可辦 ETC パーソナルカード（需押金），但不划算，建議先拚一張樂天卡。被拒後隔 6 個月再申請。",
  links:[["樂天卡","https://www.rakuten-card.co.jp/","官方"],["EPOS 卡","https://www.eposcard.co.jp/","官方"]] },

{ id:"stock", phase:4, title:"證券開戶（日本投資）",
  badges:[{t:"My Number 到手後",k:1},{t:"線上開戶"},{t:"免費"}],
  docs:["My Number Card（或通知書＋在留卡）","在留卡","日本銀行帳戶","部分券商要求在留期間剩餘 6 個月以上"],
  steps:["常見選擇：SBI 證券、樂天證券","線上上傳在留卡＋My Number，約 1~2 週開通","留學生報稅身分（居住者）下，股利與獲利在日本課稅；NISA 也可開"],
  tip:"若之後回台灣定居，帳戶多數需結清或轉為受限狀態，投資期程要納入考量。",
  links:[["SBI 證券","https://www.sbisec.co.jp/","官方"],["樂天證券","https://www.rakuten-sec.co.jp/","官方"]] },

{ id:"tax", phase:4, title:"稅務：年末調整／確定申告・住民稅",
  badges:[{t:"每年 2/16~3/15 申告期",k:1},{t:"{home.taxOffice}"}],
  docs:["源泉徵收票（打工的店家年底發）","My Number","在留卡","國保繳費證明（可列入所得控除）"],
  steps:["打工只有一份且店家有做年末調整則原則不用自己申告","多份打工或店家沒做年末調整，隔年 2/16~3/15 自行確定申告（e-Tax 線上可辦；{home.name} 管轄為 {home.taxOffice}）","住民稅依前一年所得課徵，留學第一年多半為 0","台日租稅協定：留學生打工所得有一定免稅安排"],
  tip:"就算收入低到不用繳稅，確定申告常常可以退回被預扣的源泉所得稅。",
  links:["@home.links.tax"] },

{ id:"points", phase:4, title:"點數卡・行動支付生態",
  badges:[{t:"隨用隨辦",k:1}],
  docs:["日本手機門號（App 註冊用）","日本銀行帳戶或信用卡（儲值）"],
  steps:["交通與小額支付：手機綁 Suica／PASMO／ICOCA","主流行動支付：PayPay（覆蓋率最高）、樂天 Pay","點數生態擇一深耕：樂天點數、d POINT、Ponta"],
  tip:"搭配信用卡與證券選同一生態，回饋最集中。",
  links:[["PayPay","https://paypay.ne.jp/","官方"],["樂天 Point Club","https://point.rakuten.co.jp/","官方"]] },

{ id:"emergency", phase:4, title:"緊急聯絡與駐日單位登錄",
  badges:[{t:"抵日後隨時",k:1}],
  docs:["警察 110／火災救護 119（可要求中文翻譯）","台北駐日經濟文化代表處（依居住地分屬各分處）"],
  steps:["查詢管轄你居住地的代表處分處並存進手機","到外交部出國登錄網站登錄旅外資料","記住住家附近的指定避難所位置"],
  tip:"多數縣市官網有中文頁面，遇到行政問題可先查中文版。",
  links:[["台北駐日經濟文化代表處","https://www.roc-taiwan.org/jp/","官方"],["外交部領事事務局（出國登錄）","https://www.boca.gov.tw/","官方"],"@home.links.city"] }

];
