/* =========================================================================
 * content.sample.js  ―  オリジナルPart7問題（Claude作成・著作権フリー・公開OK）
 * -------------------------------------------------------------------------
 * これらはClaudeが新規に書き起こしたオリジナル問題で、公式問題集の文は一切含まない。
 * → GitHubに公開して良い。Pages(https)で配信し、Firebase/Googleログイン同期も使える。
 *
 * ※ 本アプリは非公式の学習ツールであり、ETS・IIBCとは一切関係ありません。
 *    "TOEIC" はETSの登録商標です。本教材は無料・非営利の個人学習用です。
 *
 * ▼ 設計方針（スコア診断に基づく）: Rが弱点。中でも「文書の情報から推測」が最弱、
 *    Lの「意図問題」も弱い。→ 推測・意図問題を厚めに。解説は必ず"根拠の場所"を示す。
 *
 * ▼ スキーマ（1セット = 1オブジェクト）
 *   id, group（表示グループ名）, part:7, level（1=800/2=900/3=930）, title, qStart
 *   passages: 本文の配列（single=1, double=2, triple=3）
 *   questions: [{ n, stem, choices:[A,B,C,D], ans(0-3), exp }]
 *   level により、本番日が近づくほど高難度が上位に推奨される。
 * ========================================================================= */
window.CONTENT = [

/* ---- Set 1 (Lv1) Eメール：目的・推測・詳細 ---- */
{ id:"o_p7_01", group:"オリジナル Part 7", part:7, level:1, qStart:1, title:"Eメール（エレベーター点検）",
  trans:[
"宛先：Riverside Tower入居者の皆さま／差出人：Dana Whitfield（施設調整担当）／件名：エレベーター点検のお知らせ\n\n入居者の皆さまへ\n\n東棟の乗用エレベーター2基が来週、年次点検を受けますことをお知らせいたします。エレベーター1は火曜日、エレベーター2は水曜日に運転を停止します。これらの時間帯は、建物後方にある貨物用エレベーターを一般利用いただけます。\n\nとりわけ上層階の方にはご不便をおかけするかもしれません。影響を最小限に抑えるため、作業は朝の混雑が過ぎた午前9時〜午後1時に行います。技術者が予定より早く終えた場合は、ロビーに掲示いたします。\n\nご協力に感謝いたします。この期間中のアクセスについてご懸念があれば、私のオフィスに直接ご連絡ください。\n\nDana Whitfield"
  ],
  passages:[
"To: All Riverside Tower Tenants\n"+
"From: Dana Whitfield, Facilities Coordinator\n"+
"Subject: Upcoming Elevator Maintenance\n\n"+
"Dear Tenants,\n\n"+
"Please be advised that the two passenger elevators in the east wing will undergo their annual servicing next week. Elevator 1 will be out of service on Tuesday, and Elevator 2 on Wednesday. During these times, the freight elevator at the rear of the building will be available for general use.\n\n"+
"We recognize this may be inconvenient, particularly for those on the upper floors. To minimize disruption, the work will be carried out between 9 A.M. and 1 P.M., after the morning rush. Should the technicians finish ahead of schedule, we will post a notice in the lobby.\n\n"+
"Thank you for your patience. If you have concerns about accessibility during this period, please contact my office directly.\n\n"+
"Dana Whitfield"
  ],
  questions:[
    { n:1, stem:"What is the main purpose of the e-mail?",
      choices:["To announce a change in office hours","To notify tenants of a temporary service disruption","To request feedback on a building renovation","To advertise a newly installed elevator"], ans:1,
      exp:"正解B。根拠は第1段落「the two passenger elevators … will undergo their annual servicing」「out of service on Tuesday/Wednesday」。一時的にエレベーターが使えなくなることの通知なので(B)。(C)(D) 改修の意見募集や新設の宣伝ではない。renovationやnewly installedに引っ張られない。" },
    { n:2, stem:"What is suggested about the freight elevator?",
      choices:["It is normally not used by tenants.","It is located in the east wing.","It will also be serviced next week.","It is faster than the passenger elevators."], ans:0,
      exp:"正解A（推測）。「the freight elevator … will be available for general use（一般利用可能になる）」とわざわざ述べていることから、普段は入居者の一般利用向けではないと推測できる。根拠の言い回しの含意を読む問題。(B) 貨物用は建物後方(rear)で東棟ではない。(C) 点検されるのは客用2基。" },
    { n:3, stem:"According to the e-mail, what will happen if the work finishes early?",
      choices:["Tenants will receive a partial refund.","A notice will be posted in the lobby.","The freight elevator will be closed.","The east wing will be locked."], ans:1,
      exp:"正解B（詳細）。第2段落「Should the technicians finish ahead of schedule, we will post a notice in the lobby」が直接の根拠。ahead of schedule＝予定より早く。" }
  ]
},

/* ---- Set 2 (Lv2) テキストチャット：意図問題中心 ---- */
{ id:"o_p7_02", group:"オリジナル Part 7", part:7, level:2, qStart:4, title:"チャット（プレゼン準備・意図）",
  trans:[
"Marco Ferreira（午前10:02）  こんにちはPriya、クライアントが今日のプレゼンを午後2時に前倒ししました。スライドはできていますか。\n"+
"Priya Nadar（午前10:04）  ほとんどは。まだ財務チームからのQ3の売上数値を待っています。\n"+
"Marco Ferreira（午前10:05）  それなら昨日の午後にあなたへ送りましたよ。\n"+
"Priya Nadar（午前10:06）  あら、受信箱にあるはずですね。確認してみます。\n"+
"Priya Nadar（午前10:09）  見つけました。正午までに全部仕上げられます。\n"+
"Marco Ferreira（午前10:10）  よかった。配布資料用に6部印刷もお願いできますか。\n"+
"Priya Nadar（午前10:11）  やっておきます。"
  ],
  passages:[
"Marco Ferreira (10:02 A.M.)  Hi Priya, the client just moved our presentation up to 2 P.M. today. Are the slides ready?\n"+
"Priya Nadar (10:04 A.M.)  Most of them. I'm still waiting on the Q3 sales figures from the finance team.\n"+
"Marco Ferreira (10:05 A.M.)  I sent those to you yesterday afternoon.\n"+
"Priya Nadar (10:06 A.M.)  Oh, they must be in my inbox. Let me check.\n"+
"Priya Nadar (10:09 A.M.)  Found them. I can have everything done by noon.\n"+
"Marco Ferreira (10:10 A.M.)  Great. Could you also print six copies for the handout?\n"+
"Priya Nadar (10:11 A.M.)  Will do."
  ],
  questions:[
    { n:4, stem:"What are the writers mainly discussing?",
      choices:["Preparing for a presentation","Hiring a new finance manager","Canceling a client's visit","Designing a product package"], ans:0,
      exp:"正解A。冒頭でプレゼン開始が2時に前倒しされ、スライドの準備状況を確認している流れ。全体の話題はプレゼン準備なので(A)。(C) 予定は前倒しであって中止ではない。" },
    { n:5, stem:"At 10:05 A.M., what does Marco most likely mean when he writes, \"I sent those to you yesterday afternoon\"?",
      choices:["He wants Priya to resend a file to him.","He believes Priya already has the sales figures.","He is asking the finance team for the data.","He wants to postpone the presentation."], ans:1,
      exp:"正解B（意図）。Priyaが「財務チームからのQ3売上データ待ち」と言ったのに対する返答。「昨日午後に送った」＝それはもう君の手元にあるはず、という含意。直後にPriyaが「受信箱にあるはず、確認する」と応じている流れが裏付け。(A) 再送を求めているのではない。" },
    { n:6, stem:"At 10:11 A.M., what does Priya imply when she writes, \"Will do\"?",
      choices:["She will contact the client directly.","She will print the handout copies.","She will reschedule the meeting.","She will join the finance team."], ans:1,
      exp:"正解B（意図）。直前のMarcoの依頼「print six copies for the handout」への返答。Will do＝「やります」で、印刷を引き受けている。直前の発言が指す内容を押さえる問題。" }
  ]
},

/* ---- Set 3 (Lv2) 告知：詳細・推測 ---- */
{ id:"o_p7_03", group:"オリジナル Part 7", part:7, level:2, qStart:7, title:"告知（陶芸スタジオ会員）",
  trans:[
"グランドビュー・コミュニティセンター ― 陶芸スタジオ 会員のご案内\n\n新しく改装した陶芸スタジオが会員向けに開放されました。月額会員になると、開館時間中のスタジオ無制限利用、すべてのろくろと道具の使用、毎月粘土1袋の無料提供が受けられます。追加の粘土は受付でご購入いただけます。\n\nスタジオの窯は、訓練を受けたスタッフのみが操作します。作品の焼成をご希望の会員は、氏名と日付を記したラベルを付けて所定の棚に置いてください。焼き上がった作品は通常、3営業日以内にお受け取りいただけます。\n\n初めての会員には、毎週土曜午前10時開催の無料オリエンテーションへの参加をお勧めします。スタッフが正しいろくろとうわぐすりの技法を実演します。"
  ],
  passages:[
"GRANDVIEW COMMUNITY CENTER — Pottery Studio Membership\n\n"+
"Our newly renovated pottery studio is now open to members. A monthly membership grants unlimited access to the studio during open hours, use of all wheels and tools, and one free bag of clay each month. Additional clay may be purchased at the front desk.\n\n"+
"Please note that the studio kilns are operated only by trained staff. Members who wish to have their pieces fired should place them on the designated shelf labeled with their name and the date. Fired pieces are typically ready for pickup within three business days.\n\n"+
"First-time members are encouraged to attend a free orientation session, held every Saturday at 10 A.M., where staff demonstrate proper wheel and glaze techniques."
  ],
  questions:[
    { n:7, stem:"What is included with a monthly membership?",
      choices:["An unlimited supply of clay","Private one-on-one lessons","The use of studio equipment","A personal kiln"], ans:2,
      exp:"正解C（詳細）。「use of all wheels and tools（すべてのろくろと道具の使用）」が根拠で、これを equipment と言い換えた(C)。(A) 無料の粘土は「月1袋」で無制限ではない(one free bag each month)。(D) 窯は個人用ではなくスタッフが操作。" },
    { n:8, stem:"What is indicated about firing pottery pieces?",
      choices:["Members may operate the kilns themselves.","It is done by staff rather than by members.","It requires an extra fee each time.","It is only available on Saturdays."], ans:1,
      exp:"正解B（推測/詳細）。「the studio kilns are operated only by trained staff」から、焼成は会員ではなく訓練を受けたスタッフが行うと分かる。(A) はまさに逆。(C) 追加料金の記載は粘土の追加購入のみで焼成料の言及はない。" },
    { n:9, stem:"Why would a first-time member most likely attend the Saturday session?",
      choices:["To pay the membership fee","To learn techniques from staff","To buy additional clay","To pick up fired pieces"], ans:1,
      exp:"正解B（推測）。「staff demonstrate proper wheel and glaze techniques」から、初回会員が土曜の会に出る目的は技術を学ぶためと推測できる。他の選択肢の行為（支払い・粘土購入・受け取り）はこのセッションの目的として述べられていない。" }
  ]
},

/* ---- Set 4 (Lv3) 記事：推測・文脈語彙・含意 ---- */
{ id:"o_p7_04", group:"オリジナル Part 7", part:7, level:3, qStart:10, title:"記事（オフィスの再定義）",
  trans:[
"リモート優先の企業、オフィスを見直す\n\nHalcyon Designが3年前にリモート優先の体制へ移行したとき、都心のオフィスを残すと予想する人はほとんどいなかった。ところが同社は先ごろ、賃貸契約を更新した――机の列のためではなく、いまや「コラボレーション・ハブ」と呼ぶ、再設計された空間のために。\n\n「社員は通勤を恋しがってはいないが、お互いには会いたがっていると気づいた」と、常務のLena Ortizは語る。毎日の出社を求めるのではなく、Halcyonはチームに、ワークショップや顧客との会議、時折の祝賀のためにハブを予約するよう促している。ある日には、午前に設計会議が開かれ、午後半ばには空になっていることもある。\n\nこの転換に代償がなかったわけではない。断続的にしか使わない広い空間を維持するのは決して効率的ではなく、Ortizもこの取り組みは「まだ発展途上だ」と認める。それでも彼女は、人々が望むときに集まれる場所があることの価値は、その費用を上回ると主張する。地区内の他社も、その動向を注視している。"
  ],
  passages:[
"Remote-First Firms Rethink the Office\n\n"+
"When Halcyon Design shifted to a remote-first model three years ago, few expected it to keep its downtown office at all. Yet the firm recently renewed its lease—not for rows of desks, but for a redesigned space the company now calls a \"collaboration hub.\"\n\n"+
"\"We realized our people didn't miss commuting, but they did miss each other,\" said managing director Lena Ortiz. Rather than requiring daily attendance, Halcyon invites teams to reserve the hub for workshops, client meetings, and the occasional celebration. On any given day, the space might host a design session in the morning and sit empty by mid-afternoon.\n\n"+
"The shift has not been without cost. Maintaining a large space used only intermittently is hardly efficient, and Ortiz admits the arrangement is \"a work in progress.\" Still, she argues that the value of having a place for people to gather, when they choose to, outweighs the expense. Other firms in the district are watching closely."
  ],
  questions:[
    { n:10, stem:"What is the article mainly about?",
      choices:["A company's decision to eliminate its office entirely","How a firm has repurposed its office space","A city's new commuting regulations","The rising cost of downtown real estate"], ans:1,
      exp:"正解B。デスクの列ではなく「collaboration hub」として賃貸を更新し、用途を作り変えた話が全体。repurpose＝用途を変える。(A) オフィスを完全になくしたのではなく、更新して作り変えている。" },
    { n:11, stem:"What is suggested about Halcyon Design's employees?",
      choices:["They prefer coming to the office every day.","They were required to return to full-time attendance.","They value in-person interaction with colleagues.","They opposed renewing the lease."], ans:2,
      exp:"正解C（推測）。Ortiz の発言「didn't miss commuting, but they did miss each other（通勤は恋しくないが、お互いには会いたかった）」から、社員が対面での交流を重視していると推測できる。(A)(B) 毎日出社や全日出社の強制はしていない(Rather than requiring daily attendance)。" },
    { n:12, stem:"In paragraph 3, the phrase \"a work in progress\" most nearly suggests that the arrangement is",
      choices:["already complete","still being refined","no longer in use","highly profitable"], ans:1,
      exp:"正解B（文脈語彙）。a work in progress＝まだ完成しておらず改良途上。直前で「断続的にしか使わない広い空間の維持は非効率」と課題を認めた流れとも整合。(D) 直後で費用(expense)を上回る価値、とは言うが「高利益」とは述べていない。" },
    { n:13, stem:"What does the final sentence most likely imply?",
      choices:["Other firms may consider a similar approach.","The district is rapidly losing businesses.","Halcyon plans to close the hub soon.","Competitors strongly disapprove of the hub."], ans:0,
      exp:"正解A（含意）。「Other firms in the district are watching closely（近隣の他社が注視している）」は、同様の手法の導入を検討し得ることを示唆する定番表現。(B)(C)(D) 撤退・閉鎖・反対はいずれも本文の含意を超えた飛躍。" }
  ]
},

/* ---- Set 5 (Lv3) ダブルパッセージ：情報統合・クロス推測 ---- */
{ id:"o_p7_05", group:"オリジナル Part 7", part:7, level:3, qStart:14, title:"ダブル（ワークショップ日程＋返信）",
  trans:[
"［文書1］ Eメール／宛先：ワークショップ登録者／差出人：Coastal Arts Collective／件名：夏季ワークショップ日程\n\n夏季シリーズへのご登録ありがとうございます。以下が確定した日程です。各ワークショップは定員12名、午後1時〜午後4時の実施です。\n\n  6月7日  ― 水彩画の基礎 ― スタジオA\n  6月14日 ― 中級水彩画 ― スタジオA\n  6月21日 ― 版画入門 ― スタジオB\n  6月28日 ― 上級版画 ― スタジオB\n\n2つの版画ワークショップは、上級に申し込む前に入門編の修了が必要である点にご注意ください。材料は提供されますが、希望者はご自分の道具を持参しても構いません。",
"［文書2］ Eメール（返信）／宛先：Coastal Arts Collective／差出人：Trevor Osei／件名：RE: 夏季ワークショップ日程\n\nこんにちは。\n\n日程をありがとうございます。私は昨年、他所で版画の講座を受講済みなので、28日の回に飛び越えて参加したいのですが、それは可能でしょうか。それとも、まずここで前の回に出なければなりませんか。\n\nまた、14日は旅行中で、その日は欠席します。その分の登録を今後の回に振り替えることはできますか。\n\nよろしくお願いいたします。\nTrevor Osei"
  ],
  passages:[
"[文書1] E-mail\n"+
"To: Workshop Registrants\n"+
"From: Coastal Arts Collective\n"+
"Subject: Summer Workshop Schedule\n\n"+
"Thank you for registering for our summer series. Below is the confirmed schedule. Each workshop is limited to twelve participants and runs from 1 P.M. to 4 P.M.\n\n"+
"  June 7  — Watercolor Basics — Studio A\n"+
"  June 14 — Intermediate Watercolor — Studio A\n"+
"  June 21 — Introduction to Printmaking — Studio B\n"+
"  June 28 — Advanced Printmaking — Studio B\n\n"+
"Please note that the two printmaking workshops require completion of the introductory session before enrolling in the advanced one. Materials are provided, but participants may bring their own tools if preferred.",
"[文書2] E-mail（返信）\n"+
"To: Coastal Arts Collective\n"+
"From: Trevor Osei\n"+
"Subject: RE: Summer Workshop Schedule\n\n"+
"Hello,\n\n"+
"Thank you for the schedule. I already took a printmaking course elsewhere last year, so I'd like to skip ahead to the session on the 28th. Is that possible, or must I attend the earlier one here first?\n\n"+
"Also, I'll be traveling on the 14th and will miss that date. Could I transfer my registration for it to a future session?\n\n"+
"Best regards,\n"+
"Trevor Osei"
  ],
  questions:[
    { n:14, stem:"According to the first e-mail, how many people can attend each workshop?",
      choices:["Four","Twelve","Twenty","Twenty-eight"], ans:1,
      exp:"正解B（詳細・文書1）。「Each workshop is limited to twelve participants」が根拠。" },
    { n:15, stem:"What is provided at the workshops?",
      choices:["Lunch","Transportation","Materials","Certificates"], ans:2,
      exp:"正解C（詳細・文書1）。「Materials are provided」が根拠。道具は持参も可だが、提供されるのは材料(materials)。" },
    { n:16, stem:"Which workshop does Trevor want to skip ahead to?",
      choices:["Watercolor Basics","Intermediate Watercolor","Introduction to Printmaking","Advanced Printmaking"], ans:3,
      exp:"正解D（情報統合）。文書2でTrevorは「the session on the 28th」に飛びたいと述べ、文書1の日程表で28日は Advanced Printmaking。2つの文書を突き合わせて特定する。" },
    { n:17, stem:"What problem might Trevor face with his request?",
      choices:["The advanced session is already full.","The collective requires the introductory session to be completed first.","He has not yet paid the registration fee.","Studio B is unavailable on the 28th."], ans:1,
      exp:"正解B（クロス推測・難）。文書1に「the two printmaking workshops require completion of the introductory session before enrolling in the advanced one」とある。Trevorの版画講座は「elsewhere（他所）」で受けたものなので、当団体の入門を修了していない可能性があり、いきなり上級に進めない懸念がある。2文書の条件と本人の状況を結び付けて推測する、930レベルの問題。" },
    { n:18, stem:"What does Trevor say about June 14?",
      choices:["He will bring his own tools.","He will be unable to attend.","He wants a full refund.","He will arrive late."], ans:1,
      exp:"正解B（詳細・文書2）。「I'll be traveling on the 14th and will miss that date」が根拠。miss＝欠席する。" }
  ]
}

];
