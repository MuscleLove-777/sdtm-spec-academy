const LEVEL1_DATA = {
    id: 1,
    title: "SDTM仕様書の基礎",
    icon: "📋",
    description: "SDTM仕様書の定義、目的、全体構造を学ぶ",
    modules: [
        {
            id: 101,
            title: "SDTM仕様書とは何か",
            duration: "20分",
            content: `
<h2>SDTM仕様書の定義</h2>
<p>SDTM仕様書（SDTM Mapping Specification）とは、CRF（Case Report Form：症例報告書）で収集された臨床データを、CDISC SDTM（Study Data Tabulation Model）の標準形式に変換するための設計図です。</p>

<p>この仕様書は、以下の問いに答えるドキュメントです。</p>
<ul>
<li><strong>どのCRF項目</strong>が<strong>どのSDTMドメイン・変数</strong>に対応するか</li>
<li>データをどのような<strong>ロジック（変換ルール）</strong>で変換するか</li>
<li>変換後のデータの<strong>属性（型、長さ、CT）</strong>は何か</li>
</ul>

<h2>SDTM仕様書の役割</h2>
<table>
<thead><tr><th>入力</th><th>仕様書の内容</th><th>出力</th></tr></thead>
<tbody>
<tr><td>CRFデータ（収集データ）</td><td>CRF項目 → SDTMドメイン</td><td>SDTMデータセット（標準形式）</td></tr>
<tr><td>患者ID、投与薬剤名等</td><td>SDTM変数、変換ロジック</td><td>USUBJID、EXTRT等</td></tr>
<tr><td>有害事象名、検査値等</td><td>データ型/CT定義</td><td>AETERM、LBORRES等</td></tr>
</tbody>
</table>

<h2>なぜSDTM仕様書が必要か</h2>
<table>
<thead><tr><th>理由</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>再現性の確保</strong></td><td>同じ仕様書から同じ結果が得られることを保証</td></tr>
<tr><td><strong>品質管理</strong></td><td>レビュー・検証の基盤となるドキュメント</td></tr>
<tr><td><strong>コミュニケーション</strong></td><td>プログラマー、統計、DM間の共通言語</td></tr>
<tr><td><strong>規制要件</strong></td><td>FDA/PMDAへのSDTMデータ申請に必須</td></tr>
<tr><td><strong>トレーサビリティ</strong></td><td>CRF収集データ → SDTM → ADaM → 解析結果の追跡</td></tr>
</tbody>
</table>

<h2>臨床データ変換プロセスにおける位置づけ</h2>
<div class="info-box tip">
<div class="info-box-title">データの流れ</div>
<p><strong>プロトコル</strong> → <strong>CRF設計</strong> → <strong>データ収集（EDC）</strong> → <strong>SDTM Mapping Specification</strong> → <strong>SDTMプログラム開発</strong> → <strong>SDTMデータセット</strong> → <strong>ADaM作成</strong> → <strong>解析・報告</strong></p>
</div>

<h2>仕様書の種類と関係</h2>
<table>
<thead><tr><th>仕様書</th><th>主な目的</th><th>作成タイミング</th></tr></thead>
<tbody>
<tr><td><strong>SDTM Mapping Specification</strong></td><td>CRF → SDTMの変換ルール定義</td><td>CRFフィックス後</td></tr>
<tr><td><strong>Annotated CRF (aCRF)</strong></td><td>CRF上にSDTM変数を注釈</td><td>Mapping Specと並行</td></tr>
<tr><td><strong>Define Specification</strong></td><td>Define.xmlのメタデータ定義</td><td>SDTM作成後</td></tr>
</tbody>
</table>

<h2>ステークホルダー</h2>
<table>
<thead><tr><th>役割</th><th>仕様書との関わり</th></tr></thead>
<tbody>
<tr><td><strong>データマネージャー</strong></td><td>CRF設計情報の提供、aCRFレビュー</td></tr>
<tr><td><strong>CDISCプログラマー</strong></td><td>仕様書の作成、プログラム実装</td></tr>
<tr><td><strong>統計解析担当者</strong></td><td>解析に必要な変数・導出ロジックの確認</td></tr>
<tr><td><strong>QC担当者</strong></td><td>仕様書の品質チェック</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "SDTM仕様書（Mapping Specification）の主な目的は何ですか？", options: ["CRFの画面デザインを定義する", "CRFデータからSDTM形式への変換ルールを定義する", "解析用データセット（ADaM）を作成する", "FDA申請書類のフォーマットを定義する"], answer: 1, explanation: "SDTM仕様書はCRFで収集された臨床データをCDISC SDTM標準形式に変換するための設計図（変換ルール定義書）です。" },
                { id: "q101_2", type: "choice", question: "SDTM仕様書が必要な理由として正しくないものはどれですか？", options: ["再現性の確保", "品質管理の基盤", "CRFの画面設計", "トレーサビリティの確保"], answer: 2, explanation: "CRFの画面設計はEDCシステムの設計段階で行うもので、SDTM仕様書の目的ではありません。SDTM仕様書は再現性、品質管理、トレーサビリティの確保が主な目的です。" },
                { id: "q101_3", type: "choice", question: "Annotated CRF（aCRF）の役割はどれですか？", options: ["CRFデータの集計を行う", "CRF上にSDTM変数名を注釈したドキュメント", "SDTMデータセットのバリデーション", "統計解析プログラムの設計書"], answer: 1, explanation: "aCRFはCRFのPDFに対して、各収集項目がどのSDTMドメイン・変数にマッピングされるかを注釈したドキュメントで、FDA/PMDA申請の必須文書です。" },
                { id: "q101_4", type: "fill", question: "SDTM仕様書の作成が本格化するタイミングは「CRF○○○○後」です。（カタカナ4文字）", answer: "フィックス", explanation: "SDTM仕様書の作成はCRFフィックス（確定）後に本格化します。CRFの設計が確定してから変換ルールを定義します。" }
            ]
        },
        {
            id: 102,
            title: "SDTM仕様書の全体構造",
            duration: "20分",
            content: `
<h2>仕様書のシート構成</h2>
<p>SDTM仕様書は通常、Excelワークブック形式で作成され、以下のシートで構成されます。</p>

<table>
<thead><tr><th>シート名</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>Study Info</strong></td><td>試験情報（Study ID、SDTM IGバージョン、CTバージョン等）</td></tr>
<tr><td><strong>Domain List</strong></td><td>使用ドメイン一覧</td></tr>
<tr><td><strong>Variable Definition</strong></td><td>変数定義（全ドメイン）</td></tr>
<tr><td><strong>Mapping Rules</strong></td><td>マッピングロジック</td></tr>
<tr><td><strong>Codelist</strong></td><td>コードリスト定義</td></tr>
<tr><td><strong>ValueLevel</strong></td><td>Value Level Metadata</td></tr>
<tr><td><strong>SUPP</strong></td><td>Supplemental Qualifier定義</td></tr>
<tr><td><strong>Comments</strong></td><td>補足事項・注意点</td></tr>
</tbody>
</table>

<h2>各シートの主要項目</h2>

<h3>Study Info シート</h3>
<table>
<thead><tr><th>項目</th><th>内容例</th></tr></thead>
<tbody>
<tr><td>Study ID</td><td>ABC-001</td></tr>
<tr><td>Protocol Title</td><td>A Phase III Study of Drug X...</td></tr>
<tr><td>SDTM IG Version</td><td>3.3 / 3.4</td></tr>
<tr><td>CDISC CT Version</td><td>2024-03-29</td></tr>
<tr><td>Define.xml Version</td><td>2.1.n</td></tr>
</tbody>
</table>

<h3>Domain List シート</h3>
<table>
<thead><tr><th>Domain</th><th>Description</th><th>Class</th><th>Structure</th></tr></thead>
<tbody>
<tr><td>DM</td><td>Demographics</td><td>Special Purpose</td><td>One record per subject</td></tr>
<tr><td>AE</td><td>Adverse Events</td><td>Events</td><td>One record per event</td></tr>
<tr><td>EX</td><td>Exposure</td><td>Interventions</td><td>One record per dosing interval</td></tr>
<tr><td>LB</td><td>Laboratory Test Results</td><td>Findings</td><td>One record per test per visit</td></tr>
</tbody>
</table>

<h3>Variable Definition シート</h3>
<table>
<thead><tr><th>Domain</th><th>Variable</th><th>Label</th><th>Type</th><th>Length</th><th>Core</th><th>Origin</th><th>CT</th></tr></thead>
<tbody>
<tr><td>DM</td><td>STUDYID</td><td>Study Identifier</td><td>Char</td><td>10</td><td>Req</td><td>Assigned</td><td>-</td></tr>
<tr><td>DM</td><td>USUBJID</td><td>Unique Subject ID</td><td>Char</td><td>20</td><td>Req</td><td>Derived</td><td>-</td></tr>
<tr><td>DM</td><td>AGE</td><td>Age</td><td>Num</td><td>8</td><td>Exp</td><td>Derived</td><td>-</td></tr>
<tr><td>DM</td><td>SEX</td><td>Sex</td><td>Char</td><td>1</td><td>Req</td><td>CRF</td><td>SEX</td></tr>
</tbody>
</table>

<h3>Mapping Rules シート</h3>
<table>
<thead><tr><th>Domain</th><th>Variable</th><th>Source</th><th>Mapping Logic</th></tr></thead>
<tbody>
<tr><td>DM</td><td>USUBJID</td><td>raw_dm</td><td>STUDYID || "-" || SITEID || "-" || SUBJID</td></tr>
<tr><td>DM</td><td>AGE</td><td>raw_dm</td><td>Derived from BRTHDTC and RFSTDTC</td></tr>
<tr><td>AE</td><td>AETERM</td><td>raw_ae</td><td>Direct mapping (verbatim)</td></tr>
</tbody>
</table>

<h2>シート間の関係</h2>
<div class="info-box tip">
<div class="info-box-title">データフロー</div>
<p><strong>Study Info</strong> → <strong>Domain List</strong> → <strong>Variable Definition</strong> + <strong>Mapping Rules</strong> → <strong>Codelist</strong> / <strong>ValueLevel Metadata</strong> → <strong>SUPP Definition</strong></p>
<p>各シートは相互に参照関係を持ち、整合性を保つ必要があります。</p>
</div>

<h2>仕様書テンプレートの基本レイアウト</h2>
<div class="info-box">
<div class="info-box-title">推奨レイアウト</div>
<p>Sheet 1: Cover Page（試験ID、バージョン、作成日、承認者）</p>
<p>Sheet 2: Change Log（バージョン履歴、変更内容）</p>
<p>Sheet 3-4: Study Info / Domain List</p>
<p>Sheet 5-N: Variable Definition（ドメインごと or 統合）</p>
<p>Sheet N+1: Codelist</p>
<p>Sheet N+2: ValueLevel Metadata</p>
<p>Sheet N+3: SUPP Domain Spec</p>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "SDTM仕様書のシート構成に通常含まれないものはどれですか？", options: ["Domain List", "Variable Definition", "SASプログラムコード", "Codelist"], answer: 2, explanation: "SDTM仕様書には変換ルールの定義を記載しますが、SASプログラムコードそのものは含まれません。プログラムは仕様書をもとに別途作成します。" },
                { id: "q102_2", type: "choice", question: "Study Infoシートに記載しない項目はどれですか？", options: ["Study ID", "SDTM IG Version", "CDISC CT Version", "被験者の検査結果"], answer: 3, explanation: "Study Infoシートは試験の基本情報（Study ID、IGバージョン、CTバージョン等）を記載します。被験者の検査結果データは記載しません。" },
                { id: "q102_3", type: "choice", question: "Variable Definitionシートの主要項目に含まれないものはどれですか？", options: ["Data Type", "Core", "Origin", "プログラマーの氏名"], answer: 3, explanation: "Variable Definitionシートには Domain、Variable、Label、Data Type、Length、Core、Origin、CT等の変数属性を記載します。プログラマーの氏名は含まれません。" }
            ]
        },
        {
            id: 103,
            title: "Annotated CRF（aCRF）の作成",
            duration: "25分",
            content: `
<h2>Annotated CRFとは</h2>
<p>Annotated CRF（aCRF）は、CRF（症例報告書）のPDFに対して、各収集項目がどのSDTMドメイン・変数にマッピングされるかを注釈（アノテーション）したドキュメントです。FDA/PMDAへの申請パッケージに含める必須文書の一つです。</p>

<h2>アノテーション記載パターン</h2>
<table>
<thead><tr><th>パターン</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>直接マッピング</strong></td><td>Event Name → AE.AETERM</td></tr>
<tr><td><strong>CT付き</strong></td><td>Severity → AE.AESEV (CT: AESEV)</td></tr>
<tr><td><strong>導出変数</strong></td><td>Age → DM.AGE = Derived from BRTHDTC and RFSTDTC</td></tr>
<tr><td><strong>SUPP</strong></td><td>Comment → SUPPAE.QNAM = "AECOMM"</td></tr>
</tbody>
</table>

<h2>アノテーションのベストプラクティス</h2>
<table>
<thead><tr><th>ルール</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>ドメインプレフィックスを含める</strong></td><td>AE.AETERM のように Domain.Variable 形式で記載</td></tr>
<tr><td><strong>CTを明示する</strong></td><td>CTが適用される場合は (CT: xxx) を付記</td></tr>
<tr><td><strong>SUPPを明示する</strong></td><td>標準変数に収まらない項目はSUPP--であることを明記</td></tr>
<tr><td><strong>未使用項目も記載</strong></td><td>SDTMにマッピングしない項目は "Not Submitted" と記載</td></tr>
<tr><td><strong>複数ドメインへのマッピング</strong></td><td>1つのCRF項目が複数ドメインに使われる場合は全て記載</td></tr>
</tbody>
</table>

<h2>aCRF作成の手順</h2>
<div class="info-box tip">
<div class="info-box-title">6つのステップ</div>
<p><strong>Step 1:</strong> ブランクCRFのPDFを入手</p>
<p><strong>Step 2:</strong> SDTM Mapping Specificationを参照</p>
<p><strong>Step 3:</strong> 各CRFページを順にアノテーション（直接マッピング → 導出 → SUPP → 未使用）</p>
<p><strong>Step 4:</strong> アノテーションの整合性チェック（Mapping Specとの一致確認、全CRF項目の網羅性確認）</p>
<p><strong>Step 5:</strong> レビュー・承認</p>
<p><strong>Step 6:</strong> 申請パッケージに含める</p>
</div>

<h2>Demographics CRFのアノテーション例</h2>
<table>
<thead><tr><th>CRF項目</th><th>アノテーション</th></tr></thead>
<tbody>
<tr><td>Subject ID</td><td>DM.SUBJID / DM.USUBJID (derived)</td></tr>
<tr><td>Date of Birth</td><td>DM.BRTHDTC (ISO 8601) / DM.AGE (derived) / DM.AGEU = "YEARS"</td></tr>
<tr><td>Sex</td><td>DM.SEX (CT: SEX)</td></tr>
<tr><td>Race</td><td>DM.RACE (CT: RACE)</td></tr>
<tr><td>Ethnicity</td><td>DM.ETHNIC (CT: ETHNIC)</td></tr>
<tr><td>Informed Consent Date</td><td>DM.RFICDTC (ISO 8601)</td></tr>
</tbody>
</table>

<h2>SUPPアノテーション例（AEページ）</h2>
<table>
<thead><tr><th>CRF項目</th><th>アノテーション</th></tr></thead>
<tbody>
<tr><td>Was the event expected?</td><td>SUPPAE.QNAM = "AEEXPECT" / SUPPAE.QLABEL = "AE Expected" (CT: NY)</td></tr>
<tr><td>Comments</td><td>SUPPAE.QNAM = "AECOMM" / SUPPAE.QLABEL = "AE Comment"</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "aCRFのアノテーション形式として正しいものはどれですか？", options: ["AE.AETERM", "AETERM.AE", "TERM_AE", "aeterm"], answer: 0, explanation: "aCRFのアノテーションはDomain.Variable形式（例: AE.AETERM）で記載します。ドメインプレフィックスを先に記載するのが正しい形式です。" },
                { id: "q103_2", type: "choice", question: "SDTMにマッピングしないCRF項目にはどう記載しますか？", options: ["何も記載しない", "Not Submitted と記載する", "N/A と記載する", "削除する"], answer: 1, explanation: "SDTMにマッピングしない項目には 'Not Submitted' と記載し、全CRF項目を網羅していることを示します。" },
                { id: "q103_3", type: "choice", question: "CTが適用される変数のアノテーション方法はどれですか？", options: ["AE.AESEV のみ記載", "AE.AESEV (CT: AESEV) とCTを明示", "AESEV: MILD/MODERATE/SEVERE と値を列挙", "CT_AESEV と記載"], answer: 1, explanation: "Controlled Terminologyが適用される場合は (CT: CodelistName) を付記して明示します。例: AE.AESEV (CT: AESEV)" }
            ]
        }
    ]
};
