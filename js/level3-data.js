const LEVEL3_DATA = {
    id: 3,
    title: "SUPP・CT・Define.xml",
    icon: "🔧",
    description: "Supplemental Qualifiers、Controlled Terminology、Define.xmlを学ぶ",
    modules: [
        {
            id: 301,
            title: "Supplemental Qualifiers（SUPP--）",
            duration: "20分",
            content: `
<h2>Supplemental Qualifiersとは</h2>
<p>Supplemental Qualifiers（SUPP--）は、SDTMの標準ドメイン変数に収まらない追加データを格納するための仕組みです。</p>

<h2>SUPPドメインの構造</h2>
<p>SUPPドメインは縦持ち（vertical）構造で、以下の固定変数を持ちます。</p>
<table>
<thead><tr><th>Variable</th><th>Label</th><th>Description</th></tr></thead>
<tbody>
<tr><td>STUDYID</td><td>Study Identifier</td><td>試験ID</td></tr>
<tr><td>RDOMAIN</td><td>Related Domain</td><td>親ドメインコード（例: "AE"）</td></tr>
<tr><td>USUBJID</td><td>Unique Subject ID</td><td>被験者ID</td></tr>
<tr><td>IDVAR</td><td>Identifying Variable</td><td>親レコード特定用の変数名（例: "AESEQ"）</td></tr>
<tr><td>IDVARVAL</td><td>Identifying Variable Value</td><td>IDVARの値（例: "1"）</td></tr>
<tr><td>QNAM</td><td>Qualifier Variable Name</td><td>追加変数名（8文字以内）</td></tr>
<tr><td>QLABEL</td><td>Qualifier Variable Label</td><td>追加変数のラベル（40文字以内）</td></tr>
<tr><td>QVAL</td><td>Data Value</td><td>追加変数の値（全て文字型）</td></tr>
<tr><td>QORIG</td><td>Origin</td><td>データの由来</td></tr>
<tr><td>QEVAL</td><td>Evaluator</td><td>評価者（該当する場合）</td></tr>
</tbody>
</table>

<h2>SUPPに格納する典型的なデータ</h2>
<table>
<thead><tr><th>SUPPドメイン</th><th>QNAM</th><th>説明</th></tr></thead>
<tbody>
<tr><td>SUPPAE</td><td>AEEXPECT</td><td>AEの予測性（Expected/Unexpected）</td></tr>
<tr><td>SUPPAE</td><td>AECOMM</td><td>AEに関するコメント</td></tr>
<tr><td>SUPPCM</td><td>CMPROPH</td><td>予防的使用かどうか</td></tr>
<tr><td>SUPPLB</td><td>LBFAST</td><td>空腹時採血かどうか</td></tr>
<tr><td>SUPPLB</td><td>LBCLSIG</td><td>臨床的有意性</td></tr>
</tbody>
</table>

<h2>QNAM/QLABEL/QVAL/QORIGの設定ルール</h2>
<table>
<thead><tr><th>属性</th><th>ルール</th></tr></thead>
<tbody>
<tr><td><strong>QNAM</strong></td><td>8文字以内、英大文字+数字、ドメインプレフィックスで開始を推奨</td></tr>
<tr><td><strong>QLABEL</strong></td><td>40文字以内、変数の意味を簡潔に記述</td></tr>
<tr><td><strong>QVAL</strong></td><td>全て文字型（数値も文字として格納）、200文字以内</td></tr>
<tr><td><strong>QORIG</strong></td><td>親ドメインのOriginと同じ基準（CRF/Derived/Assigned/Protocol）</td></tr>
</tbody>
</table>

<h2>SUPPとRELRECの使い分け</h2>
<table>
<thead><tr><th>仕組み</th><th>用途</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>SUPP</strong></td><td>1つのレコードに追加情報を付与</td><td>AEレコードに予測性情報を追加</td></tr>
<tr><td><strong>RELREC</strong></td><td>異なるドメイン間のレコードを関連付け</td><td>AEレコードとCMレコードの関連</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "SUPPドメインのQNAMの最大文字数はいくつですか？", options: ["4文字", "8文字", "20文字", "40文字"], answer: 1, explanation: "QNAMは8文字以内で設定する必要があります。英大文字と数字で構成し、ドメインプレフィックスで開始することが推奨されます。" },
                { id: "q301_2", type: "choice", question: "SUPPドメインのQVALのデータ型はどれですか？", options: ["数値型のみ", "文字型のみ（数値も文字として格納）", "数値型と文字型の混合", "日付型"], answer: 1, explanation: "QVALは全て文字型として格納します。数値データであっても文字型として保持します。" },
                { id: "q301_3", type: "choice", question: "SUPPドメインで親レコードを特定するために使う変数の組み合わせはどれですか？", options: ["STUDYID + USUBJID のみ", "RDOMAIN + USUBJID + IDVAR + IDVARVAL", "QNAM + QVAL", "DOMAIN + SEQ"], answer: 1, explanation: "親ドメインのレコードとの紐付けは RDOMAIN + USUBJID + IDVAR + IDVARVAL の組み合わせで行います。" }
            ]
        },
        {
            id: 302,
            title: "Controlled Terminologyとコードリスト",
            duration: "25分",
            content: `
<h2>CDISC Controlled Terminologyとは</h2>
<p>CDISC Controlled Terminology（CT）は、SDTM変数に格納する値の標準コードセットです。NCI（National Cancer Institute）のEVS（Enterprise Vocabulary Services）で管理されています。</p>

<h2>CTの適用ルール</h2>
<table>
<thead><tr><th>ルール</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>CDISC CTが存在する場合</strong></td><td>原則としてCDISC CTを使用する</td></tr>
<tr><td><strong>バージョン管理</strong></td><td>試験で使用するCTバージョンを固定し、仕様書に明記する</td></tr>
<tr><td><strong>一貫性</strong></td><td>同一試験内では同じCTバージョンを使用する</td></tr>
</tbody>
</table>

<h2>Extensible vs Non-extensible CT</h2>
<table>
<thead><tr><th>属性</th><th>Extensible CT</th><th>Non-extensible CT</th></tr></thead>
<tbody>
<tr><td><strong>定義</strong></td><td>スポンサーが値を追加可能</td><td>CDISC定義の値のみ使用可能</td></tr>
<tr><td><strong>追加の可否</strong></td><td>スポンサー独自の値を追加できる</td><td>追加不可</td></tr>
<tr><td><strong>例</strong></td><td>--TESTCD, --CAT, --SCAT</td><td>SEX, NY (Yes/No), EPOCH</td></tr>
<tr><td><strong>注意点</strong></td><td>追加値はDefine.xmlに定義が必要</td><td>未定義値はバリデーションエラー</td></tr>
</tbody>
</table>

<h2>主要なCTの例</h2>
<h3>Non-extensible CTの例</h3>
<table>
<thead><tr><th>CT Name</th><th>変数</th><th>許容値</th></tr></thead>
<tbody>
<tr><td>SEX</td><td>DM.SEX</td><td>M, F, U, UNDIFFERENTIATED</td></tr>
<tr><td>NY</td><td>各種Yes/No変数</td><td>Y, N</td></tr>
<tr><td>EPOCH</td><td>--.EPOCH</td><td>SCREENING, RUN-IN, TREATMENT, FOLLOW-UP</td></tr>
<tr><td>AEOUT</td><td>AE.AEOUT</td><td>RECOVERED/RESOLVED, RECOVERING/RESOLVING, NOT RECOVERED/NOT RESOLVED, FATAL 等</td></tr>
</tbody>
</table>

<h2>CRF値からCTへの変換テーブル例</h2>
<table>
<thead><tr><th>Domain</th><th>Variable</th><th>CRF Value</th><th>SDTM CT Value</th></tr></thead>
<tbody>
<tr><td>DM</td><td>SEX</td><td>男性 / Male</td><td>M</td></tr>
<tr><td>DM</td><td>SEX</td><td>女性 / Female</td><td>F</td></tr>
<tr><td>AE</td><td>AESEV</td><td>軽度 / Mild</td><td>MILD</td></tr>
<tr><td>AE</td><td>AESEV</td><td>中等度 / Moderate</td><td>MODERATE</td></tr>
<tr><td>AE</td><td>AESEV</td><td>重度 / Severe</td><td>SEVERE</td></tr>
<tr><td>AE</td><td>AESER</td><td>はい / Yes</td><td>Y</td></tr>
<tr><td>AE</td><td>AESER</td><td>いいえ / No</td><td>N</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "Non-extensible CTの変数として正しいものはどれですか？", options: ["LBTESTCD", "SEX", "VSCAT", "CMCAT"], answer: 1, explanation: "SEXはNon-extensible CTであり、CDISC定義の値（M, F, U, UNDIFFERENTIATED）のみ使用可能です。--TESTCD、--CAT等はExtensible CTです。" },
                { id: "q302_2", type: "choice", question: "Extensible CTにスポンサー独自の値を追加した場合、必要な対応はどれですか？", options: ["特に何もしなくてよい", "FDAに事前申請する", "Define.xmlに定義を記載する", "CTバージョンを更新する"], answer: 2, explanation: "Extensible CTにスポンサー独自の値を追加した場合、Define.xmlに定義を記載する必要があります。" },
                { id: "q302_3", type: "choice", question: "CRFの「Male」をSDTM CT値に変換した結果はどれですか？", options: ["MALE", "Male", "M", "1"], answer: 2, explanation: "SEXのCDISC CTでは、Male は M に変換されます。大文字1文字のコードが標準CT値です。" }
            ]
        },
        {
            id: 303,
            title: "Define.xml仕様の作成",
            duration: "25分",
            content: `
<h2>Define.xmlとは</h2>
<p>Define.xml（Define-XML）は、SDTMデータセットのメタデータ（構造情報）をXML形式で記述したドキュメントです。FDA/PMDAへの申請パッケージに必須のファイルです。</p>

<h2>Define.xml v2.1の構造</h2>
<div class="info-box">
<div class="info-box-title">主要構造要素</div>
<p><strong>ODM</strong> &gt; <strong>Study</strong> &gt; <strong>MetaDataVersion</strong></p>
<ul>
<li><strong>Standards</strong> - 使用標準（SDTM IG等）</li>
<li><strong>AnnotatedCRF</strong> - aCRFへのリンク</li>
<li><strong>ItemGroupDef</strong> - データセット定義</li>
<li><strong>ItemDef</strong> - 変数定義</li>
<li><strong>CodeList</strong> - コードリスト定義</li>
<li><strong>ValueListDef</strong> - Value Level Metadata</li>
<li><strong>MethodDef</strong> - 導出メソッド定義</li>
<li><strong>CommentDef</strong> - コメント定義</li>
</ul>
</div>

<h2>データセット定義（ItemGroupDef）の属性</h2>
<table>
<thead><tr><th>属性</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td>OID</td><td>一意識別子</td><td>IG.AE</td></tr>
<tr><td>Name</td><td>データセット名</td><td>AE</td></tr>
<tr><td>def:Label</td><td>ラベル</td><td>Adverse Events</td></tr>
<tr><td>Domain</td><td>ドメイン</td><td>AE</td></tr>
<tr><td>def:Structure</td><td>レコード構造</td><td>One record per event per subject</td></tr>
<tr><td>def:Class</td><td>Observation Class</td><td>Events</td></tr>
</tbody>
</table>

<h2>変数定義（ItemDef）の属性</h2>
<table>
<thead><tr><th>属性</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td>OID</td><td>一意識別子</td><td>IT.AE.AETERM</td></tr>
<tr><td>Name</td><td>変数名</td><td>AETERM</td></tr>
<tr><td>DataType</td><td>データ型</td><td>text / integer / float</td></tr>
<tr><td>Length</td><td>長さ</td><td>200</td></tr>
<tr><td>def:Label</td><td>ラベル</td><td>Reported Term for AE</td></tr>
<tr><td>def:Origin</td><td>Origin情報</td><td>CRF / Derived / Assigned</td></tr>
</tbody>
</table>

<h2>Value Level Metadata（VLM）</h2>
<p>同一変数の値が条件によって異なる属性を持つ場合に使用します。</p>
<table>
<thead><tr><th>条件（Where Clause）</th><th>データ型</th><th>単位</th></tr></thead>
<tbody>
<tr><td>LBTESTCD = "ALT"</td><td>Num, Length=8</td><td>U/L</td></tr>
<tr><td>LBTESTCD = "CREAT"</td><td>Num, Length=8</td><td>mg/dL</td></tr>
<tr><td>LBTESTCD = "UCOLOR"</td><td>Char, Length=20</td><td>-</td></tr>
</tbody>
</table>

<h2>Define.xml作成ツール</h2>
<table>
<thead><tr><th>ツール</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>Pinnacle 21 Community</strong></td><td>Define.xml生成機能あり。仕様書Excelから変換可能</td></tr>
<tr><td><strong>Formedix</strong></td><td>GUI操作でDefine.xmlを作成</td></tr>
<tr><td><strong>SAS Clinical Standards Toolkit</strong></td><td>SASプログラムでDefine.xmlを生成</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "Define.xmlの主な目的はどれですか？", options: ["CRFの画面設計を記述する", "SDTMデータセットのメタデータをXML形式で記述する", "解析プログラムのソースコードを格納する", "被験者の個人情報を暗号化する"], answer: 1, explanation: "Define.xmlはSDTMデータセットのメタデータ（変数定義、コードリスト、VLM等）をXML形式で記述した申請必須ファイルです。" },
                { id: "q303_2", type: "choice", question: "Value Level Metadata（VLM）はどのような場合に使用しますか？", options: ["全ての変数に必ず設定する", "同一変数が条件により異なる属性を持つ場合", "SUPPドメインの定義に必ず使用する", "Define.xmlの代わりに使用する"], answer: 1, explanation: "VLMは同一変数の値が条件（例: LBTESTCD）によって異なる属性を持つ場合に使用します。例: LBORRESの属性が検査項目によって異なる場合。" },
                { id: "q303_3", type: "choice", question: "Define.xmlのItemGroupDefで定義するものはどれですか？", options: ["個別の変数属性", "データセット（ドメイン）の定義", "コードリスト", "導出メソッド"], answer: 1, explanation: "ItemGroupDefはデータセット（ドメイン）レベルの定義を行います。Name、Label、Structure、Class等のデータセット属性を定義します。" }
            ]
        }
    ]
};
