const LEVEL4_DATA = {
    id: 4,
    title: "バリデーション対応",
    icon: "✅",
    description: "Pinnacle 21バリデーション対応とエラー予防を学ぶ",
    modules: [
        {
            id: 401,
            title: "Pinnacle 21バリデーションの基礎",
            duration: "20分",
            content: `
<h2>Pinnacle 21とは</h2>
<p>Pinnacle 21（旧OpenCDISC）は、CDISC標準準拠のデータバリデーションツールであり、FDA申請前のデータ品質チェックに広く使用されています。</p>

<h2>バリデーションの流れ</h2>
<div class="info-box tip">
<div class="info-box-title">入力 → バリデーション → 出力</div>
<p><strong>入力:</strong> SDTMデータセット（XPTファイル）+ Define.xml + Controlled Terminology</p>
<p><strong>バリデーション:</strong> SD Rules, DD Rules, CT Compliance, FDA Business Rules</p>
<p><strong>出力:</strong> バリデーションレポート（Excel/HTML） - Error, Warning, Notice</p>
</div>

<h2>バリデーションルールの種類</h2>
<table>
<thead><tr><th>カテゴリ</th><th>略称</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>SDTM Domain</strong></td><td>SD</td><td>SDTMドメイン構造のチェック</td><td>必須変数の欠落、変数名の不正</td></tr>
<tr><td><strong>Define.xml</strong></td><td>DD</td><td>Define.xmlの構造チェック</td><td>メタデータの不整合、不正なXML</td></tr>
<tr><td><strong>CT Compliance</strong></td><td>CT</td><td>CT準拠チェック</td><td>Non-extensible CTに未定義値</td></tr>
<tr><td><strong>FDA Business Rules</strong></td><td>FDA</td><td>FDA固有のビジネスルール</td><td>申請要件の充足確認</td></tr>
</tbody>
</table>

<h2>バリデーション結果の重要度</h2>
<table>
<thead><tr><th>重要度</th><th>意味</th><th>対応</th></tr></thead>
<tbody>
<tr><td><strong>Error</strong></td><td>重大な不適合</td><td>原則として全て解消が必要</td></tr>
<tr><td><strong>Warning</strong></td><td>注意が必要な問題</td><td>可能な限り解消、残る場合はReviewer's Guideで説明</td></tr>
<tr><td><strong>Notice</strong></td><td>情報・参考</td><td>確認して必要に応じて対応</td></tr>
</tbody>
</table>

<h2>よくあるバリデーションエラーと対応</h2>
<table>
<thead><tr><th>Rule ID</th><th>メッセージ概要</th><th>仕様書での対応</th></tr></thead>
<tbody>
<tr><td>SD0009</td><td>Required variable is missing</td><td>変数定義シートで全Req変数を確認</td></tr>
<tr><td>SD0022</td><td>Invalid ISO 8601 date</td><td>マッピングロジックでISO 8601変換を正確に記述</td></tr>
<tr><td>SD0026</td><td>Variable value not found in CT</td><td>CTマッピングテーブルで正確なCT値を使用</td></tr>
<tr><td>SD1001</td><td>USUBJID not unique in DM</td><td>1被験者1レコードを仕様で明記</td></tr>
<tr><td>SD0063</td><td>VISITNUM inconsistent with VISIT</td><td>Visit Scheduleマッピングを正確に定義</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "Pinnacle 21のバリデーション結果で最も重大な重要度はどれですか？", options: ["Notice", "Warning", "Error", "Critical"], answer: 2, explanation: "Pinnacle 21ではError（重大な不適合）が最も重大で、原則として全て解消が必要です。Warning、Noticeの順に重要度が下がります。" },
                { id: "q401_2", type: "choice", question: "SD0026エラーの原因として正しいものはどれですか？", options: ["Required変数が欠落している", "ISO 8601形式でない日付", "Non-extensible CTに未定義値が使用されている", "USUBJIDが重複している"], answer: 2, explanation: "SD0026はControlled Terminologyの値が見つからないエラーで、Non-extensible CTに定義されていない値を使用した場合に発生します。" },
                { id: "q401_3", type: "choice", question: "Warningが残る場合の正しい対応はどれですか？", options: ["無視してよい", "Reviewer's Guideで理由を説明する", "データを削除する", "FDAに問い合わせる"], answer: 1, explanation: "Warningは可能な限り解消しますが、合理的な理由で残る場合はReviewer's Guideで理由を説明する必要があります。" }
            ]
        },
        {
            id: 402,
            title: "バリデーションエラー予防策",
            duration: "20分",
            content: `
<h2>仕様書作成段階での予防チェックリスト</h2>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>全ドメインのReq変数を網羅しているか</td></tr>
<tr><td>2</td><td>日付変数はISO 8601形式で定義しているか</td></tr>
<tr><td>3</td><td>Non-extensible CTに使用する値はCDISC CTのみか</td></tr>
<tr><td>4</td><td>Extensible CTのスポンサー追加値はコードリストに定義しているか</td></tr>
<tr><td>5</td><td>USUBJIDの導出ロジックが一意性を保証しているか</td></tr>
<tr><td>6</td><td>VISITNUMとVISITの対応が一貫しているか</td></tr>
<tr><td>7</td><td>SEQ変数の採番ロジックが被験者内で一意か</td></tr>
<tr><td>8</td><td>Define.xmlのメタデータと実データが整合しているか</td></tr>
<tr><td>9</td><td>SUPPドメインのIDVAR/IDVARVALが正しいか</td></tr>
<tr><td>10</td><td>--DY変数の計算でDay 0を除外しているか</td></tr>
</tbody>
</table>

<h2>Reviewer's Guideでの説明</h2>
<p>バリデーションで残るWarning/Noticeは、Reviewer's Guideで理由を説明します。</p>
<table>
<thead><tr><th>記載項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>Rule ID</td><td>バリデーションルールのID</td></tr>
<tr><td>Message</td><td>エラー/警告メッセージ</td></tr>
<tr><td>Domain/Variable</td><td>対象ドメイン・変数</td></tr>
<tr><td>Explanation</td><td>残る理由の説明</td></tr>
<tr><td>Disposition</td><td>Sponsor判断（Issue / Not Issue）</td></tr>
</tbody>
</table>

<h2>Reviewer's Guide記載例</h2>
<div class="info-box">
<div class="info-box-title">SD0063の説明例</div>
<p><strong>Rule:</strong> SD0063</p>
<p><strong>Message:</strong> Inconsistent VISITNUM and VISIT</p>
<p><strong>Domain:</strong> LB</p>
<p><strong>Explanation:</strong> Unscheduled visitsにはprotocol-defined VISIT nameが存在しないため、"UNSCHEDULED" + 日付をVISITに設定している。VISITNUMは収集順に採番しており、固定のVISITとの1:1対応は意図的に設けていない。</p>
<p><strong>Disposition:</strong> Not an issue</p>
</div>

<h2>バリデーション対応のベストプラクティス</h2>
<div class="info-box tip">
<div class="info-box-title">3つのポイント</div>
<p><strong>1. 仕様書段階で予防する</strong> - チェックリストを使い、仕様書の段階でエラーを防ぐ</p>
<p><strong>2. 早期にDry Runを実施する</strong> - サンプルデータでPinnacle 21を実行し、問題を早期発見</p>
<p><strong>3. Reviewer's Guideを丁寧に作成する</strong> - 残るWarningには合理的な説明を記載</p>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "バリデーションエラー予防として最も重要なタイミングはどれですか？", options: ["SDTMデータセット完成後", "FDA申請直前", "仕様書作成段階", "ADaM作成後"], answer: 2, explanation: "バリデーションエラーは仕様書作成段階で予防することが最も効率的です。仕様段階でチェックリストを使い、エラーを事前に防ぎます。" },
                { id: "q402_2", type: "choice", question: "--DY変数の計算で注意すべき点はどれですか？", options: ["必ず正の値になるようにする", "Day 0を除外する（0は存在しない）", "小数点以下も計算する", "月単位で計算する"], answer: 1, explanation: "--DY変数の計算ではDay 0は存在しません。基準日以降は+1するため、基準日当日はDay 1になります。" },
                { id: "q402_3", type: "choice", question: "Reviewer's Guideの「Disposition」欄に記載する内容はどれですか？", options: ["プログラマーの名前", "修正予定日", "Sponsor判断（Issue / Not Issue）", "使用したSASバージョン"], answer: 2, explanation: "DispositionにはSponsorの判断として、Issue（問題あり）またはNot Issue（問題なし）を記載します。" }
            ]
        },
        {
            id: 403,
            title: "仕様書レビューと品質管理",
            duration: "25分",
            content: `
<h2>仕様書レビューの体制</h2>
<div class="info-box">
<div class="info-box-title">3段階レビュー</div>
<p><strong>作成者:</strong> CDISCプログラマー（ドラフト作成）</p>
<p><strong>レビュー1:</strong> QCプログラマー（技術レビュー）</p>
<p><strong>レビュー2:</strong> 統計解析担当/DM（内容レビュー）</p>
<p>→ 最終版承認: プロジェクトリード</p>
</div>

<h2>技術チェック（QCプログラマー）</h2>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>CRFの全収集データがいずれかのドメインにマッピングされているか</td></tr>
<tr><td>2</td><td>SDTM IGに準拠した変数名・ラベル・Core・Roleか</td></tr>
<tr><td>3</td><td>実データに対して適切な型と長さが設定されているか</td></tr>
<tr><td>4</td><td>変換ルールが明確かつ実装可能か</td></tr>
<tr><td>5</td><td>正しいCTが適用され、CT値が正確か</td></tr>
<tr><td>6</td><td>ISO 8601形式への変換が正しく定義されているか</td></tr>
<tr><td>7</td><td>SEQ採番ロジックが被験者内で一意性を保証するか</td></tr>
<tr><td>8</td><td>QNAM/QLABEL/QVAL/QORIGが正しく設定されているか</td></tr>
<tr><td>9</td><td>Where Clauseの条件と属性が正しいか</td></tr>
<tr><td>10</td><td>Domain List、Variable Def、Codelist間で矛盾がないか</td></tr>
</tbody>
</table>

<h2>内容チェック（統計解析担当/DM）</h2>
<table>
<thead><tr><th>No</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>ADaM作成に必要な変数が全てSDTMに含まれているか</td></tr>
<tr><td>2</td><td>MedDRA/WHODrug等のコーディング方針が適切か</td></tr>
<tr><td>3</td><td>プロトコルのVisit ScheduleとVISIT/VISITNUMの対応が正しいか</td></tr>
<tr><td>4</td><td>スクリーニング脱落例等の取り扱い方針が明確か</td></tr>
<tr><td>5</td><td>CRF項目とSDTM変数のマッピングが医学的に妥当か</td></tr>
</tbody>
</table>

<h2>バージョン管理</h2>
<table>
<thead><tr><th>バージョン</th><th>意味</th><th>例</th></tr></thead>
<tbody>
<tr><td>v0.1 - v0.9</td><td>ドラフト版</td><td>初回作成、内部レビュー反映</td></tr>
<tr><td>v1.0</td><td>初版リリース</td><td>QC/レビュー完了後の承認版</td></tr>
<tr><td>v1.1 - v1.9</td><td>マイナー修正</td><td>軽微な修正、誤記訂正</td></tr>
<tr><td>v2.0</td><td>メジャー更新</td><td>ドメイン追加、大幅なロジック変更</td></tr>
</tbody>
</table>

<h2>品質指標</h2>
<table>
<thead><tr><th>指標</th><th>基準</th><th>確認方法</th></tr></thead>
<tbody>
<tr><td><strong>網羅性</strong></td><td>CRF全項目がマッピングされている</td><td>aCRFとの突合</td></tr>
<tr><td><strong>正確性</strong></td><td>SDTM IG/CTに準拠している</td><td>Pinnacle 21 dry run</td></tr>
<tr><td><strong>明確性</strong></td><td>マッピングロジックが曖昧でない</td><td>第三者による実装テスト</td></tr>
<tr><td><strong>一貫性</strong></td><td>シート間で矛盾がない</td><td>クロスチェック</td></tr>
<tr><td><strong>完全性</strong></td><td>Define.xml作成に必要な情報が揃っている</td><td>Define Specチェック</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "仕様書の技術レビューを行うのは誰ですか？", options: ["統計解析担当者", "QCプログラマー", "メディカルライター", "データマネージャー"], answer: 1, explanation: "技術レビュー（SDTM IG準拠、マッピングロジックの実装可能性等）はQCプログラマーが担当します。" },
                { id: "q403_2", type: "choice", question: "仕様書のバージョンがv2.0になるのはどのような変更の場合ですか？", options: ["誤記の訂正", "軽微な修正", "ドメイン追加や大幅なロジック変更", "コメントの追加"], answer: 2, explanation: "v2.0（メジャー更新）は、ドメイン追加や大幅なロジック変更など、重大な変更があった場合に付番します。" },
                { id: "q403_3", type: "choice", question: "仕様書の品質指標「網羅性」の確認方法はどれですか？", options: ["Pinnacle 21 dry run", "aCRFとの突合", "クロスチェック", "第三者による実装テスト"], answer: 1, explanation: "網羅性（CRF全項目がマッピングされているか）はaCRFとの突合で確認します。" }
            ]
        }
    ]
};
