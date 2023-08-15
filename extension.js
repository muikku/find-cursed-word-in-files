const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.findInFilesWordUnderCursor",
    async function () {
      await vscode.commands.executeCommand(
        "editor.action.addSelectionToNextFindMatch"
      );
      await vscode.commands.executeCommand("workbench.action.findInFiles");
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
