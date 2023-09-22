import { key_name, all_colours } from "./colours";
import { Colour } from "./Types";
let keys: string[] = Object.keys(all_colours);
/*===Generating items in "colors"  {}===*/
// colors using tab_toolbar_background
export const colors_scopes: Colour[] = [
  {
    //tab_toolbar_background
    name: key_name(all_colours, (x) => x.tab_toolbar_background),
    scope: [
      "activityBarBadge.background",
      "editor.wordHighlightBorder",
      "editorIndentGuide.background",
      "input.background",
      "list.hoverBackground",
      "list.activeBackground",
      "list.activeSelectionBackground",
      "list.focusBackground",
      "button.background",
      "extensionButton.background",
    ],
  },
  {
    //#toolbar_background
    name: key_name(all_colours, (x) => x.toolbar_background),
    scope: [
      "badge.background",
      "focusBorder",
      "statusBarItem.hoverBackground",
      "activityBarBadge.background",

      "editorBracketHighlight.unexpectedBracket.foreground",
    ],
  },
  {
    //selection_background
    name: key_name(all_colours, (x) => x.selection_background),
    scope: [
      "button.hoverBackground",
      "extensionButton.hoverBackground",
      "editor.selectionBackground",
      "statusBarItem.prominentHoverBackground",
    ],
  },

  {
    //selection_color
    name: key_name(all_colours, (x) => x.selection_color),
    scope: ["statusBar.debuggingForeground", "editor.selectionForeground"],
  },
  // splitter_color
  { name: key_name(all_colours, (x) => x.splitter_color), scope: [] },
  //comment
  {
    name: key_name(all_colours, (x) => x.comment),
    scope: ["editorBracketMatch.border"],
  },
  {
    //#body_background
    name: key_name(all_colours, (x) => x.body_background),
    scope: [
      "tab.inactiveBackground",
      "tab.border",
      "titleBar.activeBackground",
      "terminal.ansiBlack",
      "tab.unfocusedHoverBackground",
      "editorBracketMatch.background",
    ],
  },

  {
    //sidebar_background
    name: key_name(all_colours, (x) => x.sidebar_background),
    scope: [
      "debugToolBar.background",
      "editorWidget.background",
      "list.inactiveSelectionBackground",
      "sideBarSectionHeader.background",
      "tab.focusedHoverBackground",
      "titleBar.inactiveBackground",
      "dropdown.background",
      "editor.lineHighlightBackground",
      "statusBar.background",
      "statusBar.offlineBackground",
      "statusBar.noFolderBackground",
      "panel.background",
      "editorGroupHeader.tabsBackground",
      "tab.inactiveBackground",
    ],
  },
  {
    //#contrast_background
    name: key_name(all_colours, (x) => x.contrast_background),
    scope: ["statusBar.debuggingBackground"],
  },
  {
    // body_color
    name: key_name(all_colours, (x) => x.body_color),
    scope: [],
  },

  //#body_color_alt
  {
    name: key_name(all_colours, (x) => x.body_color_alt),
    scope: [
      "foreground",
      "list.activeSelectionForeground",
      "editor.foreground",
      "sideBarTitle.foreground",
      "sidebarSectionHeader.foreground",
      "statusBar.foreground",
      "statusBar.offlineForeground",
      "titleBar.activeForeground",
      "terminal.ansiWhite",
      "statusBarItem.foreground",
      "button.foreground",
      "extensionButton.foreground",
      "statusBarItem.remoteForeground",
      "icon.foreground",
    ],
  },
  //#content_color1
  {
    name: key_name(all_colours, (x) => x.content_color1),
    scope: ["editorBracketMatch.border", "activityBar.foreground"],
  },
  //content_color2
  { name: key_name(all_colours, (x) => x.content_color2), scope: [] },
  //content_color3
  { name: key_name(all_colours, (x) => x.content_color3), scope: [] },
  //#highlight_blue
  {
    name: key_name(all_colours, (x) => x.highlight_blue),
    scope: [
      "activityBar.activeBorder",
      "terminal.ansiBlue",
      "statusBar.focusBorder",
    ],
  },

  {
    //#highlight_purple
    name: key_name(all_colours, (x) => x.highlight_purple),
    scope: ["tab.activeModifiedBorder"],
  },
  // highlight_pink
  { name: key_name(all_colours, (x) => x.highlight_pink), scope: [] },
  //#highlight-red
  {
    name: key_name(all_colours, (x) => x.highlight_red),
    scope: ["terminal.ansiRed", "statusBarItem.errorBackground"],
  },
  //highlight_orange
  {
    name: key_name(all_colours, (x) => x.highlight_orange),
    scope: ["terminal.ansiBrightRed", "statusBarItem.warningBackground"],
  },
  // highlight_lightorange
  { name: key_name(all_colours, (x) => x.highlight_lightorange), scope: [] },
  //#highlight_green
  {
    name: key_name(all_colours, (x) => x.highlight_green),
    scope: ["terminal.ansiGreen", "editorBracketHighlight.foreground"],
  },
  // highlight_bluegrey
  { name: key_name(all_colours, (x) => x.highlight_bluegrey), scope: [] },
  //#highlight_yellow
  {
    name: key_name(all_colours, (x) => x.highlight_yellow),
    scope: ["editorCursor.foreground", "terminal.ansiYellow"],
  },
];
/* Generating the tokenColors*/
export const tokenColoursAttr: Colour[] = [
  {
    name: key_name(all_colours, (x) => x.highlight_blue),
    scope: [
      //Variables
      "variable",
      "variable.other",
      "support.variable",
      "variable.parameter",
      "meta.scope.prerequisites",
      // Tags
      "entity.name.tag",
      "meta.tag.sgml",
      "markup.deleted.git_gutter",
      "entity.other.attribute-name.class",
      "punctuation.section.embedded.begin",
      "punctuation.section.embedded.end",
      // CSS @ Rules
      "punctuation.definition.keyword.css",
      "punctuation.definition.keyword.scss",
      "punctuation.definition.keyword.sass",
      "punctuation.definition.keyword.less",
      "punctuation.definition.keyword.stylus",
      "keyword.control.css",
      "keyword.control.scss",
      "keyword.control.sass",
      "keyword.control.less",
      "keyword.control.stylus",
      // CSS IDs
      "source.sass keyword.control",
      //RegExp
      "string.regexp",
      //Escape Characters
      "constant.character.escape",
      //Markdown Punctuation
      "markup.heading.markdown punctuation.definition.heading.markdown",
      "beginning.punctuation.definition.list.markdown",
      "beginning.punctuation.definition.quote.markdown",
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.string.markdown",
      //Token Information
      "token.info-token",
      //C# enums, entities and variable-like objects
      "entity.name.variable.enum-member.cs",
      "entity.name.variable.event.cs",
      "entity.name.variable.field.cs",
      // Text Variables (e.g., SQL)
      "text.variable",
      //Clojure constants
      "constant.keyword.clojure",
    ],
  },

  {
    name: key_name(all_colours, (x) => x.highlight_pink),
    scope: [
      "constant.language.boolean",
      "constant.language.json",
      "constant.language",
      // Reserved words
      "keyword",
      "storage.modifier",
      "storage.control",
      "storage.type",

      // Entities
      "entity.name",
      "support.type",
      "support.class",
      "support.other.namespace.use.php",
      "meta.use.php",
      "support.other.namespace.php",
      "markup.changed.git_gutter",
      "support.type.sys-types",
      "constant.other.bareword",

      // Methods
      "variable.language",

      //Attributes
      "entity.other.attribute-name",
      //HTML/XML Attributes
      "text.html.basic entity.other.attribute-name.html",
      "text.html.basic entity.other.attribute-name",
      "text.xml entity.other.attribute-name",

      // CSS
      "support.type.vendored.property-name",
      "entity.other.attribute-name.class.mixin",
      "source.css support.constant.property-value",
      "source.sass support.constant.property-value",
      "source.scss support.constant.property-value",
      "source.less support.constant.property-value",
      "source.stylus support.constant.property-value",
      "source.postcss support.constant.property-value",
      "support.constant.color",
      "support.function.misc.css",
      "support.function.misc.scss",
      "support.function.misc.sass",
      "support.function.misc.less",
      "support.function.misc.stylus",
      "entity.other.attribute-name.id.css",

      //C#
      //  Keywords
      "keyword.other.delegate.cs",
      "keyword.other.enum.cs",
      "keyword.other.get.cs",
      "keyword.other.set.cs",
      "keyword.other.new.cs",
      "keyword.other.struct.cs",
      "keyword.other.namespace.cs",
      "keyword.other.class.cs",
      "keyword.other.event.cs",

      //SQL
      "keyword.other.sql",

      //Julia
      "keyword.other.julia",

      // Rust
      "keyword.other.fn.rust",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_purple),
    scope: [
      //Numbers
      "constant.numeric",
      // Strings, Symbols, Inherited Classes, Markup Heading
      "string",
      // "string.quoted.double.json",
      // "punctuation.definition.string",
      // "punctuation.support",
      "constant.other.symbol",
      "constant.other.key",
      "entity.other.inherited-class",
      "entity.global.clojure",
      "markup.heading",
      "markup.inserted.git_gutter",
      "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      // JavaScript modules, imports, variable.other.class
      "entity.name.module.js",
      "variable.import.parameter.js",
      "variable.other.class.js",
      //["entity.name.method.js", "italic"], //temp for reminder
      //["source.js constant.other.object.key.js string.unquoted.label.js", "italic"],
      // "punctuation.support.type.property-name.json",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_red),
    scope: [
      //Templates
      "constant.other.color",
      "keyword.other.template",
      "keyword.other.substitution",
      //Other variables/strings
      "support.other.variable",
      "string.other.link",
      //CSS Variables
      "variable.scss",
      "variable.css",
      "variable.stylus",
      "variable.postcss",
      "variable.sass",
      //Deleted markup
      "markup.deleted",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_orange),
    scope: [
      // Invalid
      "invalid",
      "invalid.illegal",
      // Error token
      "token.error-token",
      // Interpolation
      "punctuation.definition.template-expression",
      "punctuation.definition.interpolation",
      "punctuation.section.embedded.coffee",
      // dockerfile
      "punctuation.section.bracket.curly.variable.begin.shell.dockerfile",
      "punctuation.section.bracket.curly.variable.end.shell.dockerfile",
      // Changed
      "markup.changed",
      // PHP opening/closing tags
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php",
      // Embedded SQL in PHP
      "keyword.other.DML.sql",
      // Julia MACROS
      "support.function.macro.julia",
      // Clojure meta symbol
      "meta.symbol.clojure",
      // F# Symbol
      "keyword.symbol.fsharp",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_lightorange),
    scope: [
      // Raw String markup
      "markup.raw.block",
      "markup.inline.raw.string.markdown",
      "markup.fenced_code.block.markdown",
      "token.warn-token",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_green),
    scope: [
      // Generic and Special functions
      "variable.function",
      "support.function",
      "meta.function-call.generic",
      "keyword.other.special-method",
      "meta.method.groovy",
      //Number, Constant, Tag Attribute, Embedded
      "support.constant",
      "constant.character",
      "constant.escape",
      "keyword.other.unit",
      "keyword.other",
      "meta.symbol",
      // CSS properties
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name",
      //methods
      "meta.class-method.js entity.name.function.js",
      "variable.function.constructor",
      "entity.name.function",
      // Inserted markup
      "markup.inserted",
      // Objects
      "meta.object-literal.key",
      "variable.other.property",
      "support.variable.property",
      "support.constant.media",
      "support.type.property-name.json",
      // Log exceptions
      "log.exceptiontype",
      // YAML dates
      "constant.other.timestamp.yaml",
      // F# Entities
      "entity.name.section.fsharp",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_bluegrey),
    scope: [
      // CSS constants
      "source.css support.constant",
      "source.sass support.constant",
      "source.scss support.constant",
      "source.less support.constant",
      "source.stylus support.constant",
      "source.postcss support.constant",
      "keyword.other.unit",
      // SQL bracketed text
      "text.bracketed",
    ],
  },
  {
    name: key_name(all_colours, (x) => x.highlight_yellow),
    scope: [
      // Classes
      "support.class.dart",
      // Types
      "support.type",
      "storage.type.annotation",
      // YAML types
      "storage.type.tag-handle.yaml",
      "entity.name.type.anchor.yaml ",
      // PHP Types
      "keyword.other.type.php",
      // C# types
      "storage.type.cs",
      "entity.name.type.delegate.cs",
      "entity.name.type.enum.cs",
      "entity.name.type.namespace.cs",
      "keyword.type.cs",
      // CSS pseudo-classes
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.attribute-name.pseudo-element.css",
      // F#
      "entity.name.type.fsharp",
      // Rust namespace
      "entity.name.namespace.rust",
      "keyword.operator.namespace.rust",
    ],
  },
];

console.log(tokenColoursAttr);
