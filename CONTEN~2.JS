/* =========================================================================
 * content.sample.js  ―  公開OKの自作サンプル（著作権フリー）
 * -------------------------------------------------------------------------
 * このファイルは「アプリの枠が正しく動くか」を検証するためのダミー問題。
 * 公式問題集の中身は一切含まない → GitHub に公開して良い。
 *
 * 実際の学習では、手元の content.local.js（gitignore・非公開）に公式データを
 * 入れる。content.local.js が存在すると window.CONTENT を上書きし、公式が表示される。
 * 公開Pagesでは content.local.js が無いので、このサンプルだけが表示される。
 *
 * ▼ スキーマ（1セット = 1オブジェクト）
 *   共通: id, book, test, part, qStart, (任意)title
 *   Part3/4: transcript（会話/アナウンス全文, 採点後に表示）
 *   Part7:   passages（本文の配列。single=1, double=2, triple=3）
 *   questions: [{ n, stem, choices:[A,B,C,D], ans(0-3), exp }]
 * ========================================================================= */
window.CONTENT = [

/* ---- サンプル: Part 3（会話 → 3問）---- */
{
  id:"sample_p3", book:0, test:1, part:3, qStart:32, title:"（サンプル）",
  transcript:
"M: Hi, I ordered a desk from your store last week, but it hasn't arrived yet. The confirmation said it would come on Monday.\n"+
"W: I'm sorry about that. Let me check your order number. ... It looks like the delivery was delayed because the item was out of stock at our nearest warehouse.\n"+
"M: I see. So when can I expect it?\n"+
"W: It should ship tomorrow and arrive by Friday. As an apology, I'll add a 10% discount coupon to your account.",
  questions:[
    { n:32, stem:"What is the man calling about?",
      choices:["A late delivery","A billing error","A damaged product","A canceled order"], ans:0,
      exp:"男性は最初に『注文した机がまだ届かない』と述べている。よって配達の遅れ=(A)。" },
    { n:33, stem:"Why was the order delayed?",
      choices:["The address was wrong","An item was out of stock","A payment failed","The store was closed"], ans:1,
      exp:"女性が『最寄り倉庫で在庫切れ(out of stock)だったため遅れた』と説明。(B)。" },
    { n:34, stem:"What does the woman offer the man?",
      choices:["A full refund","A free upgrade","A discount coupon","Free installation"], ans:2,
      exp:"最後に女性が『お詫びに10%割引クーポンを付ける』と述べている。(C)。" }
  ]
},

/* ---- サンプル: Part 4（アナウンス → 3問）---- */
{
  id:"sample_p4", book:0, test:1, part:4, qStart:71, title:"（サンプル）",
  transcript:
"Attention, passengers. This is an announcement for Flight 208 to Seattle. Due to a mechanical inspection, "+
"boarding will be delayed by approximately 40 minutes. We now expect to begin boarding at 3:20 p.m. "+
"Passengers with connecting flights should visit the service desk near Gate 12, where our staff will help "+
"you rebook. We apologize for the inconvenience and thank you for your patience.",
  questions:[
    { n:71, stem:"Where most likely is the announcement being made?",
      choices:["At a train station","At an airport","On a ship","At a bus terminal"], ans:1,
      exp:"Flight 208, boarding, Gate 12 などから空港と判断。(B)。" },
    { n:72, stem:"Why is there a delay?",
      choices:["Bad weather","A mechanical inspection","A staff shortage","A security issue"], ans:1,
      exp:"『mechanical inspection（機械点検）のため遅れる』と明言。(B)。" },
    { n:73, stem:"What should passengers with connecting flights do?",
      choices:["Board immediately","Go to the service desk","Call the airline","Wait at their seats"], ans:1,
      exp:"『乗り継ぎ客はGate 12そばのサービスデスクへ』と指示。(B)。" }
  ]
},

/* ---- サンプル: Part 7（シングルパッセージ → 2問）---- */
{
  id:"sample_p7", book:0, test:1, part:7, qStart:147, title:"（サンプル）",
  passages:[
"NOTICE — Greenfield Public Library\n\n"+
"Starting May 1, the library will extend its weekday hours until 9:00 p.m. to better serve students "+
"during exam season. Weekend hours remain unchanged (10:00 a.m.–5:00 p.m.). The third-floor study rooms "+
"can now be reserved online up to two weeks in advance. Please note that the café on the first floor will "+
"be closed for renovation from May 5 to May 12."
  ],
  questions:[
    { n:147, stem:"What is the main purpose of the notice?",
      choices:["To announce a new branch","To inform patrons of schedule changes","To request donations","To advertise a book sale"], ans:1,
      exp:"平日の開館時間延長・カフェ改装など、利用者への変更告知が主目的。(B)。" },
    { n:148, stem:"What is indicated about the study rooms?",
      choices:["They are free of charge","They can be booked online","They are on the first floor","They are closed on weekends"], ans:1,
      exp:"『3階の自習室はオンラインで最大2週間前まで予約可』とある。(B)。" }
  ]
}

];
