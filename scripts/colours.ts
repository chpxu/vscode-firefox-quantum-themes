// global variables for colours and attributes to theme
// These have the same name as they are listed here:
// https://firefox-source-docs.mozilla.org/devtools-user/devtoolscolors/index.html
// but without the "--theme" and all hyphens replaced with underscores
// All colours in the form of an array with [dark colour, light colour]

// VSCode Scopes
// https://code.visualstudio.com/api/references/theme-color
// CHROME COLOURS

export const tab_toolbar_background: string[] = ["#252c33", "#ebeced"];
export const toolbar_background: string[] = ["#343c45", "#f0f1f2"];
export const selection_background: string[] = ["#1d4f73", "#4c9ed9"];
export const selection_color: string[] = ["#f5f7fa", "#f5f7fa"];
export const splitter_color: string[] = ["#000000", "#aaaaaa"];
export const comment: string[] = ["#5c6773", "#747573"];

// CONTENT COLOURS

export const body_background: string[] = ["#14171a", "#fcfcfc"];
export const sidebar_background: string[] = ["#181d20", "#f7f7f7"];
export const contrast_background: string[] = ["#b28025", "#e6b064"];

// TEXT COLOURS

export const body_color: string[] = ["#8fa1b2", "#18191a"];
export const body_color_alt: string[] = ["#b6babf", "#585959"];
export const content_color1: string[] = ["#a9bacb", "#292e33"];
export const content_color2: string[] = ["#8fa1b2", "#8fa1b2"];
export const content_color3: string[] = ["#667380", "#667380"];

// HIGHLIGHT COLOURS

export const highlight_blue: string[] = ["#46afe3", "#0088cc"];
export const highlight_purple: string[] = ["#6b7abb", "#5b5fff"];
export const highlight_pink: string[] = ["#df80ff", "#b82ee5"];
export const highlight_red: string[] = ["#eb5368", "#ed2655"];
export const highlight_orange: string[] = ["#d96629", "#f13c00"];
export const highlight_lightorange: string[] = ["#d99b28", "#d97e00"];
export const highlight_green: string[] = ["#70bf53", "#2cbb0f"];
export const highlight_bluegrey: string[] = ["#5e88b0", "#0072ab"];
export const highlight_yellow: string[] = ["#ffffb4", "#d97e00"];

// calling functions for these arrays
//colors
// Careful when rearranging, must also change orders of arrays
// of coloursattr
export const coloursarray = [
  tab_toolbar_background,
  body_background,
  highlight_blue,
  toolbar_background,
  selection_background,
  sidebar_background,
  body_color_alt,
  content_color1,
  highlight_yellow,
  contrast_background,
  selection_color,
  highlight_purple,
  highlight_green,
  highlight_red,
  highlight_orange,
  highlight_pink,
  highlight_lightorange,
  highlight_bluegrey,
  body_color,
];

export const coloursTokenArray = [
  highlight_blue,
  highlight_pink,
  highlight_purple,
  highlight_red,
  highlight_orange,
  highlight_lightorange,
  highlight_green,
  highlight_bluegrey,
  highlight_yellow,
];

/*===Generating items in "colors"  {}===*/
// colors using tab_toolbar_background
export const coloursattr: string[][] = [
  //#252c33
  [
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

  //#14171a
  [
    "tab.inactiveBackground",
    "tab.border",
    "titleBar.activeBackground",
    "terminal.ansiBlack",
    "tab.unfocusedHoverBackground",
  ],

  //#46afe3
  ["activityBar.activeBorder", "terminal.ansiBlue", "statusBar.focusBorder"],

  //#343c45
  [
    "badge.background",
    "focusBorder",
    "statusBarItem.hoverBackground",
    "activityBarBadge.background",
  ],

  //#1d4f73

  [
    "button.hoverBackground",
    "extensionButton.hoverBackground",
    "editor.selectionBackground",
    "statusBarItem.prominentHoverBackground",
  ],

  //#181d20
  [
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

  //#b6babf
  [
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

  //#a9bacb
  ["editorBracketMatch.border", "activityBar.foreground"],

  //#ffffb4
  ["editorCursor.foreground", "terminal.ansiYellow"],

  //#b28025
  ["statusBar.debuggingBackground"],

  //#f5f7fa
  ["statusBar.debuggingForeground"],
  //#6b7abb
  ["tab.activeModifiedBorder"],
  //#70bf53
  ["terminal.ansiGreen"],
  //#eb5368
  ["terminal.ansiRed", "statusBarItem.errorBackground"],
  //#d96629
  ["terminal.ansiBrightRed", "statusBarItem.warningBackground"],
];
//colors which aren't in the standard list of colours
//#252c33aa
export const _252c333aa: string[] = [
  "editorIndentGuide.activeBackground",
  "scrollbarSlider.background",
];
/* Generating the tokenColors*/
export const tokenColoursAttr = [
  {
    name: "highlight_blue",
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
    name: "highlight_pink",
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
    name: "highlight_purple",
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
    name: "highlight_red",
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
    name: "highlight_orange",
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
    name: "highlight_lightorange",
    scope: [
      // Raw String markup
      "markup.raw.block",
      "markup.inline.raw.string.markdown",
      "markup.fenced_code.block.markdown",
      "token.warn-token",
    ],
  },
  {
    name: "highlight_green",
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
    name: "highlight_bluegrey",
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
    name: "highlighted_yellow",
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
