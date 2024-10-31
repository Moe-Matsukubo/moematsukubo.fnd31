<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>動体視力テスト</title>
    <link rel="stylesheet" href="main_page.css">
</head>
<body>
    <h1>☆動体視力テスト☆</h1>
    <div id="test-area">
        <div id="moving-text">TEST</div>
    </div>
    <!-- placeholder（プレースホールダー）は入力欄を表示 -->
    <input type="text" id="user-answer" placeholder="見えた文字を入力してね！" />
    <button id="submit-answer">回答</button>
    <button id="next-button">次の問題</button>
    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
