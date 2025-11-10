const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "cursor.openProjectManager",
    () => {
      vscode.commands.executeCommand("projectManager.listProjects").then(
        undefined,
        () => {
          vscode.window.showWarningMessage("Project Manager command not found. Opening recent projects instead.");
          vscode.commands.executeCommand("workbench.action.openRecent");
        }
      );
    }
  );

  context.subscriptions.push(disposable);

  // ✅ Create StatusBar button
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  statusBarItem.text = "$(folder-opened) Open Project";
  statusBarItem.command = "cursor.openProjectManager";
  statusBarItem.tooltip = "Open Project Manager";
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};