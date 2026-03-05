const LEVEL2_DATA = {
    id: 2,
    title: "ドメイン・変数定義",
    icon: "📐",
    description: "ドメイン選定、変数定義シートの作成方法を習得する",
    modules: [
        {
            id: 201,
            title: "ドメイン定義シートの作成",
            duration: "25分",
            content: `
<h2>SDTMドメインの分類</h2>
<p>SDTMドメインはObservation Classに基づいて分類されます。</p>
<table>
<thead><tr><th>Observation Class</th><th>主なドメイン</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>Special Purpose</strong></td><td>DM, CO, SE, SV</td><td>試験全体の基本情報</td></tr>
<tr><td><strong>Interventions</strong></td><td>CM, EX, EC, SU, PR</td><td>治療・投薬に関するデータ</td></tr>
<tr><td><strong>Events</strong></td><td>AE, DS, MH, DV, CE</td><td>有害事象等のイベントデータ</td></tr>
<tr><td><strong>Findings</strong></td><td>LB, VS, EG, PE, QS, SC</td><td>測定・評価結果データ</td></tr>
<tr><td><strong>Relationship</strong></td><td>RELREC</td><td>レコード間の関連</td></tr>
<tr><td><strong>Trial Design</strong></td><td>TA, TE, TI, TS, TV</td><td>試験デザイン情報</td></tr>
</tbody>
</table>

<h2>ドメイン選定の基準</h2>
<table>
<thead><tr><th>判断基準</th><th>質問</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Topic変数の性質</strong></td><td>何についてのデータか</td><td>薬剤名 → CM, 検査名 → LB</td></tr>
<tr><td><strong>Observation Class</strong></td><td>介入/事象/所見のどれか</td><td>投与 → Interventions, AE → Events</td></tr>
<tr><td><strong>データの粒度</strong></td><td>1レコードが何を表すか</td><td>1検査結果 → LB, 1事象 → AE</td></tr>
<tr><td><strong>標準ドメインの存在</strong></td><td>該当する標準ドメインがあるか</td><td>あれば標準を使用</td></tr>
</tbody>
</table>

<h2>ドメイン選定フローチャート</h2>
<div class="info-box tip">
<div class="info-box-title">判断の流れ</div>
<p>CRF収集データ → 介入データか？ → <strong>Yes: Interventions Class</strong>（CM/EX/EC/SU/PR）</p>
<p>No → 事象データか？ → <strong>Yes: Events Class</strong>（AE/DS/MH/DV）</p>
<p>No → 所見データか？ → <strong>Yes: Findings Class</strong>（LB/VS/EG/PE/QS）</p>
<p>No → <strong>Special Purpose or カスタムドメイン</strong></p>
</div>

<h2>Observation Classごとの変数構造</h2>
<table>
<thead><tr><th>変数カテゴリ</th><th>Interventions</th><th>Events</th><th>Findings</th></tr></thead>
<tbody>
<tr><td><strong>Topic</strong></td><td>--TRT (治療名)</td><td>--TERM (事象名)</td><td>--TESTCD / --TEST</td></tr>
<tr><td><strong>開始日</strong></td><td>--STDTC</td><td>--STDTC</td><td>--DTC</td></tr>
<tr><td><strong>終了日</strong></td><td>--ENDTC</td><td>--ENDTC</td><td>-</td></tr>
<tr><td><strong>結果</strong></td><td>--DOSE, --DOSU</td><td>--SEV, --OUT</td><td>--ORRES, --ORRESU</td></tr>
<tr><td><strong>カテゴリ</strong></td><td>--CAT, --SCAT</td><td>--CAT, --SCAT</td><td>--CAT, --SCAT</td></tr>
</tbody>
</table>

<h2>カスタムドメインの定義</h2>
<table>
<thead><tr><th>ルール</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>Observation Class準拠</strong></td><td>いずれかのObservation Classの変数構造に従う</td></tr>
<tr><td><strong>標準変数の使用</strong></td><td>Identifier, Timing変数は標準のものを使用</td></tr>
<tr><td><strong>IGでの確認</strong></td><td>本当にカスタムが必要か、FA等の汎用ドメインで代替できないか確認</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "有害事象（Adverse Events）はどのObservation Classに分類されますか？", options: ["Special Purpose", "Interventions", "Events", "Findings"], answer: 2, explanation: "有害事象（AE）はEvents Classに分類されます。事象（イベント）に関するデータを格納するクラスです。" },
                { id: "q201_2", type: "choice", question: "検査結果（Laboratory Test Results）を格納するドメインはどれですか？", options: ["AE", "CM", "LB", "EX"], answer: 2, explanation: "検査結果はLB（Laboratory Test Results）ドメインに格納されます。LBはFindings Classに属します。" },
                { id: "q201_3", type: "choice", question: "Interventions Classのドメインに含まれないものはどれですか？", options: ["CM（併用薬）", "EX（治験薬投与）", "AE（有害事象）", "PR（手技）"], answer: 2, explanation: "AE（有害事象）はEvents Classに属します。Interventions ClassにはCM、EX、EC、SU、PR等の治療・投薬関連ドメインが含まれます。" },
                { id: "q201_4", type: "fill", question: "Findings ClassのTopic変数は「--TESTCD」と「--○○○○」です。（アルファベット4文字）", answer: "TEST", explanation: "Findings ClassのTopic変数は --TESTCD（検査コード）と --TEST（検査名）です。" }
            ]
        },
        {
            id: 202,
            title: "変数定義シートの作成",
            duration: "25分",
            content: `
<h2>変数定義シートの構成</h2>
<p>変数定義シートはSDTM仕様書の中核であり、各ドメインの全変数について属性を定義します。</p>
<table>
<thead><tr><th>列名</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Domain</strong></td><td>ドメインコード</td><td>DM, AE, LB</td></tr>
<tr><td><strong>Variable</strong></td><td>変数名</td><td>STUDYID, USUBJID</td></tr>
<tr><td><strong>Label</strong></td><td>変数ラベル（40文字以内）</td><td>Study Identifier</td></tr>
<tr><td><strong>Data Type</strong></td><td>データ型（Char/Num）</td><td>Char</td></tr>
<tr><td><strong>Length</strong></td><td>最大長</td><td>10</td></tr>
<tr><td><strong>Core</strong></td><td>必須度</td><td>Req / Exp / Perm</td></tr>
<tr><td><strong>Origin</strong></td><td>データの由来</td><td>CRF / Derived / Assigned</td></tr>
<tr><td><strong>CT</strong></td><td>Controlled Terminology</td><td>SEX / NY</td></tr>
</tbody>
</table>

<h2>Core属性の設定</h2>
<table>
<thead><tr><th>Core</th><th>意味</th><th>データセットへの含め方</th></tr></thead>
<tbody>
<tr><td><strong>Req (Required)</strong></td><td>必須</td><td>全レコードに値を設定</td></tr>
<tr><td><strong>Exp (Expected)</strong></td><td>期待</td><td>変数を含め、値がなければnull</td></tr>
<tr><td><strong>Perm (Permissible)</strong></td><td>許容</td><td>データがあれば含める、なければ変数自体を除外可</td></tr>
</tbody>
</table>

<h2>データ型と長さの決定</h2>
<table>
<thead><tr><th>データ型</th><th>使用場面</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Char</strong></td><td>文字列データ</td><td>USUBJID, AETERM, SEX</td></tr>
<tr><td><strong>Num</strong></td><td>数値データ</td><td>AGE, LBSTRESN, EXDOSE</td></tr>
<tr><td><strong>Char (ISO 8601)</strong></td><td>日付・時刻</td><td>AESTDTC, LBDTC</td></tr>
</tbody>
</table>

<h3>長さの決定ルール</h3>
<table>
<thead><tr><th>ルール</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>実データ基準</strong></td><td>実際のデータの最大長に基づいて設定</td></tr>
<tr><td><strong>SAS変数長</strong></td><td>Char: 1-200, Num: 8（SAS標準）</td></tr>
<tr><td><strong>200文字制限</strong></td><td>SDTMでは変数長200文字を推奨上限とする</td></tr>
</tbody>
</table>

<h2>Origin（データの由来）の設定</h2>
<table>
<thead><tr><th>Origin</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>CRF</strong></td><td>CRFから直接取得</td><td>AETERM, SEX, LBORRES</td></tr>
<tr><td><strong>Derived</strong></td><td>他の変数から導出</td><td>AGE, USUBJID, --DY</td></tr>
<tr><td><strong>Assigned</strong></td><td>スポンサーが割り当て</td><td>STUDYID, DOMAIN, EPOCH</td></tr>
<tr><td><strong>Protocol</strong></td><td>プロトコルから取得</td><td>ARMCD, ARM</td></tr>
<tr><td><strong>eDT</strong></td><td>電子データ転送</td><td>中央検査データ</td></tr>
</tbody>
</table>

<h2>DMドメインの変数定義例</h2>
<table>
<thead><tr><th>Variable</th><th>Label</th><th>Type</th><th>Length</th><th>Core</th><th>Origin</th></tr></thead>
<tbody>
<tr><td>STUDYID</td><td>Study Identifier</td><td>Char</td><td>10</td><td>Req</td><td>Assigned</td></tr>
<tr><td>DOMAIN</td><td>Domain Abbreviation</td><td>Char</td><td>2</td><td>Req</td><td>Assigned</td></tr>
<tr><td>USUBJID</td><td>Unique Subject ID</td><td>Char</td><td>20</td><td>Req</td><td>Derived</td></tr>
<tr><td>SUBJID</td><td>Subject ID for Study</td><td>Char</td><td>8</td><td>Req</td><td>CRF</td></tr>
<tr><td>AGE</td><td>Age</td><td>Num</td><td>8</td><td>Exp</td><td>Derived</td></tr>
<tr><td>SEX</td><td>Sex</td><td>Char</td><td>1</td><td>Req</td><td>CRF</td></tr>
<tr><td>RACE</td><td>Race</td><td>Char</td><td>40</td><td>Exp</td><td>CRF</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "Core属性の「Req」の意味として正しいものはどれですか？", options: ["データがある場合のみ含める", "変数は含めるが値がnullでも良い", "必ずデータセットに含め値がなければならない", "スポンサーの判断で含める"], answer: 2, explanation: "Req（Required）は必須を意味し、必ずデータセットに含め、全レコードに値を設定する必要があります。" },
                { id: "q202_2", type: "choice", question: "SDTMの日付変数のデータ型は何ですか？", options: ["Date型", "Num型", "Char型（ISO 8601形式）", "DateTime型"], answer: 2, explanation: "SDTMの日付変数は全てChar型でISO 8601形式（例: 2024-01-15）として格納します。日付専用の型は使用しません。" },
                { id: "q202_3", type: "choice", question: "Origin属性「Derived」の意味はどれですか？", options: ["CRFから直接取得したデータ", "スポンサーが割り当てた固定値", "他の変数から計算・導出したデータ", "プロトコルから取得したデータ"], answer: 2, explanation: "Derived（導出）は他の変数から計算や導出によって生成されたデータを意味します。例: AGE, USUBJID, --DY変数など。" },
                { id: "q202_4", type: "fill", question: "SDTMでは変数長の推奨上限は何文字ですか？（半角数字）", answer: "200", explanation: "SDTMでは変数長200文字を推奨上限としています。" }
            ]
        },
        {
            id: 203,
            title: "マッピングロジックの記述",
            duration: "30分",
            content: `
<h2>マッピングロジックの記述形式</h2>
<p>マッピングロジックは、CRF収集データからSDTM変数値を生成するための変換ルールです。</p>
<table>
<thead><tr><th>パターン</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>直接マッピング</strong></td><td>CRF値をそのまま使用</td><td>AETERM = raw_ae.AE_NAME</td></tr>
<tr><td><strong>固定値割り当て</strong></td><td>全レコードに同じ値</td><td>DOMAIN = "AE"</td></tr>
<tr><td><strong>連結</strong></td><td>複数の値を結合</td><td>USUBJID = STUDYID || "-" || SITEID || "-" || SUBJID</td></tr>
<tr><td><strong>条件分岐</strong></td><td>条件に応じた値設定</td><td>if SERIOUS = "Yes" then AESER = "Y"</td></tr>
<tr><td><strong>導出計算</strong></td><td>計算による値導出</td><td>AGE = floor((RFSTDTC - BRTHDTC) / 365.25)</td></tr>
<tr><td><strong>CT変換</strong></td><td>テキストをCTコードに変換</td><td>SEX: "Male" → "M", "Female" → "F"</td></tr>
<tr><td><strong>SEQ採番</strong></td><td>連番の付与</td><td>AESEQ = USUBJID内で単調増加</td></tr>
</tbody>
</table>

<h2>VISITNUM / VISIT / VISITDY の導出</h2>
<table>
<thead><tr><th>変数</th><th>説明</th><th>導出方法</th></tr></thead>
<tbody>
<tr><td><strong>VISITNUM</strong></td><td>Visit番号（数値）</td><td>プロトコル定義のVisit順序番号</td></tr>
<tr><td><strong>VISIT</strong></td><td>Visit名（文字）</td><td>プロトコル定義のVisit名称</td></tr>
<tr><td><strong>VISITDY</strong></td><td>基準日からのVisit日数</td><td>DTC - RFSTDTC (+1 if >= 0)</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">VISITDYの計算ルール（Day 0 は存在しない）</div>
<p>VISITDY = --DTC - RFSTDTC（--DTC &lt; RFSTDTC の場合）</p>
<p>VISITDY = --DTC - RFSTDTC + 1（--DTC >= RFSTDTC の場合）</p>
<p>例: RFSTDTC = 2024-01-15 の場合</p>
<p>--DTC = 2024-01-13 → VISITDY = -2</p>
<p>--DTC = 2024-01-15 → VISITDY = 1（0にならない！）</p>
<p>--DTC = 2024-01-16 → VISITDY = 2</p>
</div>

<h2>日付変数のISO 8601変換</h2>
<table>
<thead><tr><th>CRF形式</th><th>ISO 8601変換後</th><th>説明</th></tr></thead>
<tbody>
<tr><td>15/Jan/2024</td><td>2024-01-15</td><td>完全日付</td></tr>
<tr><td>15/Jan/2024 10:30</td><td>2024-01-15T10:30</td><td>日付+時刻</td></tr>
<tr><td>Jan/2024</td><td>2024-01</td><td>日が不明</td></tr>
<tr><td>2024</td><td>2024</td><td>月日が不明</td></tr>
</tbody>
</table>

<h2>SEQ変数の採番ルール</h2>
<div class="info-box">
<div class="info-box-title">SEQ採番ロジック</div>
<p>ルール: USUBJID内で単調増加（monotonically increasing）の整数</p>
<p>採番基準（ソート順）:</p>
<ul>
<li>AE: USUBJID, AESTDTC, AETERM</li>
<li>CM: USUBJID, CMSTDTC, CMTRT</li>
<li>LB: USUBJID, LBTESTCD, LBDTC</li>
<li>VS: USUBJID, VSTESTCD, VSDTC</li>
</ul>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "VISITDYの計算で、基準日（RFSTDTC）と同日の場合の値はいくつですか？", options: ["0", "1", "-1", "計算できない"], answer: 1, explanation: "VISITDYの計算ではDay 0は存在しません。基準日以降は +1 するため、同日の場合は VISITDY = 0 + 1 = 1 となります。" },
                { id: "q203_2", type: "choice", question: "「Jan/2024」をISO 8601形式に変換した結果はどれですか？", options: ["2024-01-01", "2024-01", "2024-01-XX", "01/2024"], answer: 1, explanation: "日が不明な場合、ISO 8601では年-月のみを記載します。Jan/2024 は 2024-01 と変換されます。" },
                { id: "q203_3", type: "choice", question: "SEQ変数の採番ルールとして正しいものはどれですか？", options: ["データセット全体で一意の連番", "USUBJID内で単調増加の整数", "ドメイン全体でランダムな値", "Visit番号と同じ値"], answer: 1, explanation: "SEQ変数はUSUBJID内で単調増加（monotonically increasing）の整数として採番します。被験者ごとにリセットされます。" }
            ]
        }
    ]
};
