const LEVEL6_DATA = {
    id: 6,
    title: "総合知識・用語集",
    icon: "🎓",
    description: "横断的な知識の整理と用語集・参考リソースの確認",
    modules: [
        {
            id: 601,
            title: "部門間連携とコミュニケーション",
            duration: "15分",
            content: `
<h2>部門間連携マップ</h2>
<table>
<thead><tr><th>連携先</th><th>主な連携内容</th><th>タイミング</th></tr></thead>
<tbody>
<tr><td><strong>データマネジメント（DM）</strong></td><td>CRF設計変更の反映、Edit Check情報の共有</td><td>CRFフィックス前後</td></tr>
<tr><td><strong>統計解析</strong></td><td>ADaM作成に必要なSDTM変数の確認、導出ロジックの合意</td><td>仕様書ドラフト段階</td></tr>
<tr><td><strong>メディカル</strong></td><td>MedDRA辞書バージョン、コーディング方針</td><td>仕様書作成初期</td></tr>
<tr><td><strong>薬事</strong></td><td>FDA/PMDA要件の確認、申請スケジュール</td><td>プロジェクト全体</td></tr>
</tbody>
</table>

<h2>仕様書に関わる主要なデータの流れ</h2>
<div class="info-box tip">
<div class="info-box-title">エンドツーエンドのデータフロー</div>
<p><strong>Protocol</strong> → <strong>CRF設計</strong> → <strong>aCRF</strong></p>
<p><strong>EDC/Data Collection</strong> → <strong>Raw Data</strong></p>
<p><strong>SDTM Mapping Specification</strong> → <strong>SDTMプログラム</strong> → <strong>SDTMデータセット</strong></p>
<p><strong>SDTMデータセット</strong> + <strong>Define.xml</strong> → <strong>Pinnacle 21バリデーション</strong></p>
<p><strong>SDTMデータセット</strong> → <strong>ADaM</strong> → <strong>TFL（Tables, Figures, Listings）</strong></p>
<p><strong>申請パッケージ（eCTD Module 5）</strong>: SDTMデータセット + Define.xml + aCRF + Reviewer's Guide</p>
</div>

<h2>トレーサビリティの重要性</h2>
<p>トレーサビリティとは、CRF収集データからSDTM、ADaM、解析結果までの全てのデータの流れを追跡できることです。</p>
<table>
<thead><tr><th>トレーサビリティの層</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>CRF → SDTM</strong></td><td>aCRFとMapping Specificationで追跡</td></tr>
<tr><td><strong>SDTM → ADaM</strong></td><td>ADaM Specificationで追跡</td></tr>
<tr><td><strong>ADaM → TFL</strong></td><td>SAP（Statistical Analysis Plan）で追跡</td></tr>
<tr><td><strong>全体</strong></td><td>Define.xmlのOrigin/Method情報で横断的に追跡</td></tr>
</tbody>
</table>

<h2>申請パッケージの構成</h2>
<table>
<thead><tr><th>構成物</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>SDTMデータセット</strong></td><td>XPT or Dataset-JSON形式のデータ</td></tr>
<tr><td><strong>Define.xml</strong></td><td>データセットのメタデータ定義</td></tr>
<tr><td><strong>aCRF</strong></td><td>CRFにSDTM変数を注釈したPDF</td></tr>
<tr><td><strong>Reviewer's Guide</strong></td><td>レビュアー向けの補足説明文書</td></tr>
<tr><td><strong>Pinnacle 21レポート</strong></td><td>バリデーション結果（参考資料）</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "統計解析担当との連携で確認する主な内容はどれですか？", options: ["CRFの画面デザイン", "ADaM作成に必要なSDTM変数", "SASライセンスの管理", "EDCシステムの設定"], answer: 1, explanation: "統計解析担当とは、ADaM作成に必要なSDTM変数の確認と導出ロジックの合意を行います。" },
                { id: "q601_2", type: "choice", question: "FDA申請パッケージに含めないものはどれですか？", options: ["SDTMデータセット", "Define.xml", "aCRF", "SASプログラムのソースコード"], answer: 3, explanation: "SASプログラムのソースコードは申請パッケージには含めません。SDTMデータセット、Define.xml、aCRF、Reviewer's Guide等を含めます。" },
                { id: "q601_3", type: "choice", question: "トレーサビリティで「CRF → SDTM」の追跡に使用する文書はどれですか？", options: ["SAP", "ADaM Specification", "aCRFとMapping Specification", "Reviewer's Guide"], answer: 2, explanation: "CRFからSDTMへのトレーサビリティは、aCRF（注釈付きCRF）とMapping Specification（マッピング仕様書）で追跡します。" }
            ]
        },
        {
            id: 602,
            title: "用語集・参考リソース",
            duration: "10分",
            content: `
<h2>SDTM関連用語集</h2>
<table>
<thead><tr><th>用語</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>SDTM</strong></td><td>Study Data Tabulation Model - 臨床試験データの標準形式</td></tr>
<tr><td><strong>SDTM IG</strong></td><td>SDTM Implementation Guide - SDTMの実装ガイド</td></tr>
<tr><td><strong>CDISC</strong></td><td>Clinical Data Interchange Standards Consortium</td></tr>
<tr><td><strong>CT</strong></td><td>Controlled Terminology - 標準用語集</td></tr>
<tr><td><strong>aCRF</strong></td><td>Annotated CRF - SDTM変数を注釈したCRF</td></tr>
<tr><td><strong>Define.xml</strong></td><td>SDTMメタデータのXML定義ファイル</td></tr>
<tr><td><strong>VLM</strong></td><td>Value Level Metadata - 条件付きメタデータ</td></tr>
<tr><td><strong>SUPP</strong></td><td>Supplemental Qualifiers - 追加修飾子ドメイン</td></tr>
<tr><td><strong>NCI EVS</strong></td><td>National Cancer Institute Enterprise Vocabulary Services</td></tr>
<tr><td><strong>Pinnacle 21</strong></td><td>CDISCバリデーションツール（旧OpenCDISC）</td></tr>
<tr><td><strong>XPT</strong></td><td>SAS Transport File - SDTMデータの提出形式</td></tr>
<tr><td><strong>eCTD</strong></td><td>Electronic Common Technical Document - 電子申請様式</td></tr>
<tr><td><strong>ADaM</strong></td><td>Analysis Data Model - 解析用データモデル</td></tr>
<tr><td><strong>MedDRA</strong></td><td>Medical Dictionary for Regulatory Activities - 医学用語辞書</td></tr>
<tr><td><strong>WHODrug</strong></td><td>WHO Drug Dictionary - 医薬品コーディング辞書</td></tr>
<tr><td><strong>Dataset-JSON</strong></td><td>XPT代替のJSON形式データ交換フォーマット</td></tr>
</tbody>
</table>

<h2>参考文献・リソース</h2>
<table>
<thead><tr><th>リソース</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>CDISC SDTM IG v3.4</strong></td><td>CDISC Library（公式実装ガイド）</td></tr>
<tr><td><strong>CDISC Controlled Terminology</strong></td><td>NCI EVS Browser（標準用語集）</td></tr>
<tr><td><strong>Define-XML v2.1 Specification</strong></td><td>CDISC Library（Define.xml仕様書）</td></tr>
<tr><td><strong>Pinnacle 21 Community</strong></td><td>無料のバリデーションツール</td></tr>
<tr><td><strong>FDA Study Data Technical Conformance Guide</strong></td><td>FDA申請のデータ技術要件</td></tr>
<tr><td><strong>PMDA電子データ提出に関する通知</strong></td><td>PMDA申請の電子データ要件</td></tr>
</tbody>
</table>

<h2>学習のまとめ</h2>
<div class="info-box tip">
<div class="info-box-title">SDTM仕様書作成の全体像</div>
<p>SDTM仕様書はCRFデータからSDTM形式への変換設計図です。</p>
<p>仕様書はExcelワークブック形式で、Domain List、Variable Definition、Mapping Rules、Codelist、VLM、SUPP定義等のシートで構成されます。</p>
<p>作成プロセスは「準備 → ドラフト → レビュー → 承認 → 最終化」の5フェーズです。</p>
<p>Pinnacle 21バリデーションでエラーを予防・解消し、申請パッケージに含めます。</p>
<p>部門間連携（DM、統計、メディカル、薬事）が仕様書の品質を左右します。</p>
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "CDISCの正式名称はどれですか？", options: ["Clinical Data Integration Standards Committee", "Clinical Data Interchange Standards Consortium", "CDISC Data Information Standards Council", "Clinical Database Interface Standards Consortium"], answer: 1, explanation: "CDISCはClinical Data Interchange Standards Consortium（臨床データ交換標準コンソーシアム）の略称です。" },
                { id: "q602_2", type: "choice", question: "XPTに代わるデータ交換形式として注目されているのはどれですか？", options: ["CSV", "XML", "Dataset-JSON", "Parquet"], answer: 2, explanation: "Dataset-JSONはXPT（SAS Transport形式）に代わるJSON形式のデータ交換フォーマットで、FDAが2024年からサポートを開始しました。" },
                { id: "q602_3", type: "fill", question: "SDTM IGの最新バージョン番号は3.○です。（半角数字1文字）", answer: "4", explanation: "SDTM Implementation Guideの最新バージョンはv3.4です。" }
            ]
        },
        {
            id: 603,
            title: "総合確認テスト",
            duration: "15分",
            content: `
<h2>総合確認テスト</h2>
<p>これまで学んだSDTM仕様書作成の知識を総合的に確認するテストです。以下のクイズに挑戦してください。</p>

<h2>復習ポイント</h2>
<table>
<thead><tr><th>Level</th><th>学習内容</th><th>キーワード</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>SDTM仕様書の基礎</td><td>Mapping Spec, aCRF, Define Spec</td></tr>
<tr><td>Level 2</td><td>ドメイン・変数定義</td><td>Observation Class, Core, Origin, ISO 8601</td></tr>
<tr><td>Level 3</td><td>SUPP・CT・Define.xml</td><td>QNAM/QVAL, Extensible/Non-extensible, VLM</td></tr>
<tr><td>Level 4</td><td>バリデーション対応</td><td>Pinnacle 21, Error/Warning, Reviewer's Guide</td></tr>
<tr><td>Level 5</td><td>実践演習</td><td>DM/AE mapping, Codelist, 5フェーズ</td></tr>
<tr><td>Level 6</td><td>総合知識</td><td>トレーサビリティ, 申請パッケージ, 部門連携</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "SDTM仕様書の作成で最初に行うべきことはどれですか？", options: ["マッピングロジックの記述", "プロトコルとCRFの理解", "Pinnacle 21の実行", "Define.xmlの生成"], answer: 1, explanation: "仕様書作成の最初のフェーズ（準備）では、プロトコル・CRFの入手と理解が最も重要です。" },
                { id: "q603_2", type: "choice", question: "DM.USUBJIDのCore属性とOriginの正しい組み合わせはどれですか？", options: ["Req / CRF", "Req / Derived", "Exp / Assigned", "Perm / CRF"], answer: 1, explanation: "USUBJIDはRequired（必須）で、STUDYIDとSITEIDとSUBJIDを連結して導出するためOriginはDerivedです。" },
                { id: "q603_3", type: "choice", question: "Non-extensible CTに該当しないものはどれですか？", options: ["SEX", "NY", "LBTESTCD", "EPOCH"], answer: 2, explanation: "LBTESTCDはExtensible CTであり、スポンサーが独自の検査コードを追加できます。SEX、NY、EPOCHはNon-extensible CTです。" },
                { id: "q603_4", type: "choice", question: "SUPPドメインのQVALに格納されるデータ型はどれですか？", options: ["数値型のみ", "文字型のみ", "数値型と文字型の混合", "元のデータ型に依存"], answer: 1, explanation: "QVALは全て文字型（Char型）として格納します。数値データであっても文字型として保持します。" },
                { id: "q603_5", type: "choice", question: "VISITDYの計算で基準日の翌日（RFSTDTC + 1日）の値はいくつですか？", options: ["0", "1", "2", "計算できない"], answer: 2, explanation: "基準日翌日のVISITDYは2です。基準日当日が1（Day 0が存在しないため+1）、翌日は差分1 + 1 = 2となります。" }
            ]
        }
    ]
};
