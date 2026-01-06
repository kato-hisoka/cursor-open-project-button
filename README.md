# Cursor Open Project Button

ステータスバーに「Project Manager」または「最近開いた項目」を素早く開くためのボタンを追加するCursor用拡張機能です。

## 特徴

- ステータスバーの左側に `$(folder-opened) Open Project` ボタンを表示します。
- クリックすると、[Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) 拡張機能のプロジェクト一覧を呼び出します。
- Project Manager がインストールされていない場合は、標準の「最近開いた項目」ウィンドウを代わりに開きます。

## インストール方法

### VSIXファイルからインストールする場合
1. Cursor（またはVS Code）を開きます。
2. 拡張機能サイドバー（`Ctrl+Shift+X` / `Cmd+Shift+X`）を開きます。
3. 右上の `...` (More Actions) をクリックし、「VSIX からインストール... (Install from VSIX...)」を選択します。
4. 本プロジェクトの `.vsix` ファイルを選択してインストールしてください。

### コマンドラインからインストールする場合
以下のコマンドを実行してください。
```bash
cursor --install-extension cursor-open-project-button-0.0.1.vsix
```

## 使い方

インストールすると、ステータスバーの左側にボタンが表示されます。
ボタンをクリックするか、コマンドパレットから `Open Project Manager` を実行することで利用可能です。

## 推奨環境

この拡張機能を最大限に活用するには、以下の拡張機能のインストールを推奨します。

- **Project Manager**: お気に入りのプロジェクトを保存し、素早く切り替えることができるようになります。

## ライセンス

MIT

