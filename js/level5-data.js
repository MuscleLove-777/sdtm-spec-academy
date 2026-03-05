const LEVEL5_DATA = {
    id: 5,
    title: "実践演習",
    icon: "🏋️",
    description: "サンプル試験を題材にSDTM仕様書を実際に作成する",
    modules: [
        {
            id: 501,
            title: "演習: ドメイン選定と変数定義",
            duration: "30分",
            content: `
<h2>演習の試験概要</h2>
<div class="info-box">
<div class="info-box-title">ABC-001試験</div>
<p><strong>試験名:</strong> Drug X の第III相二重盲検比較試験</p>
<p><strong>対象疾患:</strong> 2型糖尿病</p>
<p><strong>投与群:</strong> Drug X 10mg / Drug X 20mg / Placebo</p>
<p><strong>目標症例数:</strong> 300例（各群100例）</p>
<p><strong>試験期間:</strong> Screening (-28日), Treatment (12週), Follow-up (4週)</p>
</div>

<h2>演習1: ドメイン選定</h2>
<p>以下のCRFデータを適切なSDTMドメインに割り当てます。</p>
<table>
<thead><tr><th>CRFデータ</th><th>SDTMドメイン</th><th>理由</th></tr></thead>
<tbody>
<tr><td>被験者基本情報（性別、年齢、人種）</td><td><strong>DM</strong></td><td>人口統計学的データ → Special Purpose</td></tr>
<tr><td>有害事象の記録</td><td><strong>AE</strong></td><td>有害な事象 → Events Class</td></tr>
<tr><td>治験薬の投与記録</td><td><strong>EX</strong></td><td>治験薬投与 → Interventions Class</td></tr>
<tr><td>血液検査・尿検査結果</td><td><strong>LB</strong></td><td>検査結果 → Findings Class</td></tr>
<tr><td>血圧・脈拍・体温</td><td><strong>VS</strong></td><td>バイタルサイン → Findings Class</td></tr>
<tr><td>併用薬の記録</td><td><strong>CM</strong></td><td>薬剤投与 → Interventions Class</td></tr>
<tr><td>中止・完了情報</td><td><strong>DS</strong></td><td>状況変化 → Events Class</td></tr>
</tbody>
</table>

<h2>演習2: DM変数定義</h2>
<p>Demographics CRFの情報からDMドメインの変数定義を作成します。</p>

<h3>CRF情報</h3>
<div class="info-box">
<div class="info-box-title">Demographics Page</div>
<p>Subject Number: [____] / Site Number: [____]</p>
<p>Date of Birth: [__/___/____]</p>
<p>Sex: (o) Male (o) Female</p>
<p>Race: [ ] Asian [ ] White [ ] Black [ ] Other</p>
<p>Ethnicity: (o) Hispanic/Latino (o) Not Hispanic/Latino</p>
<p>Informed Consent Date: [__/___/____]</p>
</div>

<h3>DM変数定義（解答）</h3>
<table>
<thead><tr><th>Variable</th><th>Label</th><th>Type</th><th>Core</th><th>Origin</th><th>Mapping Logic</th></tr></thead>
<tbody>
<tr><td>STUDYID</td><td>Study Identifier</td><td>Char</td><td>Req</td><td>Assigned</td><td>"ABC-001"</td></tr>
<tr><td>DOMAIN</td><td>Domain Abbreviation</td><td>Char</td><td>Req</td><td>Assigned</td><td>"DM"</td></tr>
<tr><td>USUBJID</td><td>Unique Subject ID</td><td>Char</td><td>Req</td><td>Derived</td><td>STUDYID || "-" || SITEID || "-" || SUBJID</td></tr>
<tr><td>SUBJID</td><td>Subject ID for Study</td><td>Char</td><td>Req</td><td>CRF</td><td>CRF: Subject Number</td></tr>
<tr><td>SITEID</td><td>Study Site ID</td><td>Char</td><td>Req</td><td>CRF</td><td>CRF: Site Number</td></tr>
<tr><td>BRTHDTC</td><td>Date of Birth</td><td>Char</td><td>Perm</td><td>CRF</td><td>ISO 8601 conversion</td></tr>
<tr><td>AGE</td><td>Age</td><td>Num</td><td>Exp</td><td>Derived</td><td>floor((RFSTDTC - BRTHDTC) / 365.25)</td></tr>
<tr><td>AGEU</td><td>Age Units</td><td>Char</td><td>Exp</td><td>Assigned</td><td>"YEARS"</td></tr>
<tr><td>SEX</td><td>Sex</td><td>Char</td><td>Req</td><td>CRF</td><td>"Male" → "M", "Female" → "F"</td></tr>
<tr><td>RACE</td><td>Race</td><td>Char</td><td>Exp</td><td>CRF</td><td>CT mapping per codelist</td></tr>
<tr><td>ETHNIC</td><td>Ethnicity</td><td>Char</td><td>Perm</td><td>CRF</td><td>CT mapping per codelist</td></tr>
<tr><td>ARMCD</td><td>Planned Arm Code</td><td>Char</td><td>Req</td><td>Derived</td><td>From randomization data</td></tr>
<tr><td>ARM</td><td>Description of Planned Arm</td><td>Char</td><td>Req</td><td>Derived</td><td>From randomization data</td></tr>
<tr><td>COUNTRY</td><td>Country</td><td>Char</td><td>Req</td><td>CRF</td><td>ISO 3166 Alpha-3</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "血圧・脈拍・体温のデータを格納するSDTMドメインはどれですか？", options: ["LB", "VS", "PE", "EG"], answer: 1, explanation: "血圧・脈拍・体温等のバイタルサインはVS（Vital Signs）ドメインに格納します。Findings Classに属するドメインです。" },
                { id: "q501_2", type: "choice", question: "DM.AGEのOriginは何ですか？", options: ["CRF", "Assigned", "Derived", "Protocol"], answer: 2, explanation: "AGEはBRTHDTCとRFSTDTCから計算（導出）するため、OriginはDerivedです。" },
                { id: "q501_3", type: "choice", question: "DM.AGEUの値として正しいものはどれですか？", options: ["年", "Years", "YEARS", "年齢"], answer: 2, explanation: "AGEUにはCDISC CTの値として 'YEARS'（大文字）を設定します。日本語や小文字は使用しません。" }
            ]
        },
        {
            id: 502,
            title: "演習: AEマッピングとコードリスト",
            duration: "30分",
            content: `
<h2>AE CRF情報</h2>
<div class="info-box">
<div class="info-box-title">Adverse Event Page</div>
<p>Adverse Event Term: [________________________]</p>
<p>Start Date: [__/___/____] / End Date: [__/___/____] or [ ] Ongoing</p>
<p>Severity: (o) Mild (o) Moderate (o) Severe</p>
<p>Serious: (o) Yes (o) No</p>
<p>Relationship to Study Drug: (o) Related (o) Not Related</p>
<p>Action Taken: (o) None (o) Dose Reduced (o) Drug Interrupted (o) Drug Withdrawn</p>
<p>Outcome: (o) Recovered (o) Recovering (o) Not Recovered (o) Fatal (o) Recovered with Sequelae</p>
</div>

<h2>AEマッピングロジック（解答）</h2>
<table>
<thead><tr><th>Variable</th><th>Source</th><th>Mapping Logic</th></tr></thead>
<tbody>
<tr><td>STUDYID</td><td>-</td><td>"ABC-001"</td></tr>
<tr><td>DOMAIN</td><td>-</td><td>"AE"</td></tr>
<tr><td>USUBJID</td><td>raw_dm</td><td>STUDYID || "-" || SITEID || "-" || SUBJID</td></tr>
<tr><td>AESEQ</td><td>-</td><td>USUBJID内で単調増加（AESTDTC, AETERMでソート）</td></tr>
<tr><td>AETERM</td><td>raw_ae.AE_TERM</td><td>Direct mapping (verbatim)</td></tr>
<tr><td>AEDECOD</td><td>raw_ae.AE_PT</td><td>MedDRA Preferred Term</td></tr>
<tr><td>AESEV</td><td>raw_ae.SEVERITY</td><td>"Mild" → "MILD", "Moderate" → "MODERATE", "Severe" → "SEVERE"</td></tr>
<tr><td>AESER</td><td>raw_ae.SERIOUS</td><td>"Yes" → "Y", "No" → "N"</td></tr>
<tr><td>AEREL</td><td>raw_ae.RELATION</td><td>"Related" → "Y", "Not Related" → "N"</td></tr>
<tr><td>AEACN</td><td>raw_ae.ACTION</td><td>"None" → "NONE", "Dose Reduced" → "DOSE REDUCED" 等</td></tr>
<tr><td>AEOUT</td><td>raw_ae.OUTCOME</td><td>"Recovered" → "RECOVERED/RESOLVED" 等</td></tr>
<tr><td>AESTDTC</td><td>raw_ae.START_DATE</td><td>Convert to ISO 8601</td></tr>
<tr><td>AEENDTC</td><td>raw_ae.END_DATE</td><td>Convert to ISO 8601; null if ONGOING</td></tr>
<tr><td>AEDY</td><td>derived</td><td>AESTDTC - DM.RFSTDTC (+1 if >= 0)</td></tr>
<tr><td>EPOCH</td><td>derived</td><td>SCREENING / TREATMENT / FOLLOW-UP</td></tr>
</tbody>
</table>

<h2>コードリスト定義（抜粋）</h2>
<table>
<thead><tr><th>Codelist ID</th><th>Type</th><th>Extensible</th><th>Term</th><th>Decoded Value</th></tr></thead>
<tbody>
<tr><td>SEX</td><td>CDISC</td><td>No</td><td>M</td><td>MALE</td></tr>
<tr><td>SEX</td><td>CDISC</td><td>No</td><td>F</td><td>FEMALE</td></tr>
<tr><td>NY</td><td>CDISC</td><td>No</td><td>Y</td><td>Yes</td></tr>
<tr><td>NY</td><td>CDISC</td><td>No</td><td>N</td><td>No</td></tr>
<tr><td>AESEV</td><td>CDISC</td><td>Yes</td><td>MILD</td><td>Mild</td></tr>
<tr><td>AESEV</td><td>CDISC</td><td>Yes</td><td>MODERATE</td><td>Moderate</td></tr>
<tr><td>AESEV</td><td>CDISC</td><td>Yes</td><td>SEVERE</td><td>Severe</td></tr>
<tr><td>AEOUT</td><td>CDISC</td><td>No</td><td>RECOVERED/RESOLVED</td><td>Recovered/Resolved</td></tr>
<tr><td>AEOUT</td><td>CDISC</td><td>No</td><td>RECOVERING/RESOLVING</td><td>Recovering/Resolving</td></tr>
<tr><td>AEOUT</td><td>CDISC</td><td>No</td><td>NOT RECOVERED/NOT RESOLVED</td><td>Not Recovered/Not Resolved</td></tr>
<tr><td>AEOUT</td><td>CDISC</td><td>No</td><td>FATAL</td><td>Fatal</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "CRFの「Recovered」をSDTM AEOUTのCT値に変換した結果はどれですか？", options: ["RECOVERED", "Recovered", "RECOVERED/RESOLVED", "回復"], answer: 2, explanation: "AEOUTのCDISC CT値では 'Recovered' は 'RECOVERED/RESOLVED' に変換されます。" },
                { id: "q502_2", type: "choice", question: "AE.AEENDTCが null になるのはどのような場合ですか？", options: ["終了日が記録されている場合", "CRFで Ongoing にチェックされた場合", "Severity が Severe の場合", "AEが Serious の場合"], answer: 1, explanation: "AEENDTCは有害事象の終了日ですが、Ongoing（継続中）の場合はnull（空白）になります。" },
                { id: "q502_3", type: "choice", question: "AEOUTコードリストのExtensible属性はどれですか？", options: ["Extensible（拡張可能）", "Non-extensible（拡張不可）", "スポンサー定義", "該当なし"], answer: 1, explanation: "AEOUT（Outcome of Event）はNon-extensible CTであり、CDISC定義の値のみ使用可能です。スポンサーが独自の値を追加することはできません。" }
            ]
        },
        {
            id: 503,
            title: "仕様書作成の全体プロセス",
            duration: "20分",
            content: `
<h2>SDTM仕様書作成の5フェーズ</h2>

<h3>Phase 1: 準備</h3>
<table>
<thead><tr><th>作業内容</th></tr></thead>
<tbody>
<tr><td>プロトコル・CRFの入手と理解</td></tr>
<tr><td>SDTM IG / CT バージョンの決定</td></tr>
<tr><td>テンプレートの準備</td></tr>
</tbody>
</table>

<h3>Phase 2: ドラフト作成</h3>
<table>
<thead><tr><th>作業内容</th></tr></thead>
<tbody>
<tr><td>ドメイン選定</td></tr>
<tr><td>変数定義シート作成</td></tr>
<tr><td>マッピングロジック記述</td></tr>
<tr><td>コードリスト定義</td></tr>
<tr><td>aCRF作成</td></tr>
<tr><td>SUPP / VLM定義</td></tr>
</tbody>
</table>

<h3>Phase 3: レビュー</h3>
<table>
<thead><tr><th>作業内容</th></tr></thead>
<tbody>
<tr><td>QCプログラマーによる技術レビュー</td></tr>
<tr><td>統計解析担当による内容レビュー</td></tr>
<tr><td>DMによるCRF整合性レビュー</td></tr>
<tr><td>指摘事項の反映</td></tr>
</tbody>
</table>

<h3>Phase 4: 承認・運用</h3>
<table>
<thead><tr><th>作業内容</th></tr></thead>
<tbody>
<tr><td>プロジェクトリードによる承認</td></tr>
<tr><td>バージョン1.0リリース</td></tr>
<tr><td>プログラム開発開始</td></tr>
<tr><td>変更管理（CRF変更・プロトコル改訂対応）</td></tr>
</tbody>
</table>

<h3>Phase 5: 最終化</h3>
<table>
<thead><tr><th>作業内容</th></tr></thead>
<tbody>
<tr><td>Pinnacle 21バリデーション対応</td></tr>
<tr><td>Define.xml / aCRF最終化</td></tr>
<tr><td>Reviewer's Guide作成</td></tr>
<tr><td>申請パッケージへの組み込み</td></tr>
</tbody>
</table>

<h2>完成版テンプレート構成</h2>
<div class="info-box">
<div class="info-box-title">推奨Excelワークブック構成</div>
<p>Sheet 1: Cover Page - Study ID, Sponsor, Version, Date, Author, Reviewer, Approver</p>
<p>Sheet 2: Change Log - Version, Date, Author, Change Description</p>
<p>Sheet 3: Study Information - Study metadata</p>
<p>Sheet 4: Domain List</p>
<p>Sheet 5-N: Variable Definition（ドメインごと: DM, AE, CM, EX, LB, VS...）</p>
<p>Sheet N+1: Codelist</p>
<p>Sheet N+2: Value Level Metadata</p>
<p>Sheet N+3: SUPP Domain Specification</p>
<p>Sheet N+4: Visit Schedule Mapping</p>
<p>Sheet N+5: Define Specification</p>
<p>Sheet N+6: External Dictionaries（MedDRA, WHODrug等）</p>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "仕様書作成の最初のフェーズで行う作業はどれですか？", options: ["マッピングロジックの記述", "Pinnacle 21バリデーション", "プロトコル・CRFの入手と理解", "Reviewer's Guide作成"], answer: 2, explanation: "Phase 1（準備）では、プロトコル・CRFの入手と理解、SDTM IG/CTバージョンの決定、テンプレート準備を行います。" },
                { id: "q503_2", type: "choice", question: "仕様書がv1.0としてリリースされるのはどのフェーズですか？", options: ["Phase 2: ドラフト作成", "Phase 3: レビュー", "Phase 4: 承認・運用", "Phase 5: 最終化"], answer: 2, explanation: "Phase 4（承認・運用）でプロジェクトリードの承認を経てバージョン1.0がリリースされます。" },
                { id: "q503_3", type: "choice", question: "Reviewer's Guideの作成はどのフェーズで行いますか？", options: ["Phase 1: 準備", "Phase 2: ドラフト作成", "Phase 3: レビュー", "Phase 5: 最終化"], answer: 3, explanation: "Reviewer's GuideはPhase 5（最終化）で、Pinnacle 21バリデーション対応とともに作成し、申請パッケージに含めます。" }
            ]
        }
    ]
};
