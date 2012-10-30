/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager  = brackets.getModule("command/CommandManager"),
    EditorManager   = brackets.getModule("editor/EditorManager"),
    DocumentManager = brackets.getModule("document/DocumentManager"),
    Menus           = brackets.getModule("command/Menus"),
    COMMAND_ID      = "net.shumpei.autoindent";

    // Enable formatting plugin of CodeMirror2 (this plugin is default contained)
    CommandManager.register("Auto Indent", COMMAND_ID, autoFormat);
    function autoFormat() {
        var editor = EditorManager.getFocusedEditor();
        if (!editor) {
            return;
        }
        var doc = editor._codeMirror;

        for (var i = 0, n = doc.lineCount(); i < n; i++) {
            doc.indentLine(i);
        }
    }

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuItem(COMMAND_ID, [{key: "Ctrl-Shift-I", platform: "win"},
                                  {key: "Ctrl-Shift-I", platform: "mac"}]);
    
});
