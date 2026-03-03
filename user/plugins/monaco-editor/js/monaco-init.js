(function () {
  'use strict';

  require.config({
    paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' }
  });

  /* ─────────────────────────────────────────────
     TOOLBAR STYLES
  ───────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('monaco-toolbar-styles')) return;
    const style = document.createElement('style');
    style.id = 'monaco-toolbar-styles';
    style.textContent = `
      .monaco-toolbar {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 4px 6px;
        background: #1e1e1e;
        border: 1px solid #3c3c3c;
        border-bottom: none;
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: 11px;
        color: #ccc;
        flex-wrap: wrap;
        user-select: none;
      }
      .monaco-toolbar-group {
        display: flex;
        align-items: center;
        gap: 1px;
      }
      .monaco-toolbar-divider {
        width: 1px;
        height: 18px;
        background: #3c3c3c;
        margin: 0 4px;
        flex-shrink: 0;
      }
      .mt-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        height: 26px;
        padding: 0 7px;
        border: none;
        border-radius: 3px;
        background: transparent;
        color: #ccc;
        cursor: pointer;
        font-size: 11px;
        font-family: inherit;
        white-space: nowrap;
        transition: background 0.1s, color 0.1s;
        position: relative;
      }
      .mt-btn:hover { background: #2a2d2e; color: #fff; }
      .mt-btn:active { background: #094771; color: #fff; }
      .mt-btn.active { background: #094771; color: #fff; }
      .mt-btn svg { flex-shrink: 0; }
      .mt-btn[data-tip]:hover::after {
        content: attr(data-tip);
        position: absolute;
        top: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        background: #252526;
        color: #ccc;
        border: 1px solid #454545;
        border-radius: 3px;
        padding: 3px 7px;
        font-size: 10px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 9999;
      }

      /* Heading button label */
      .mt-btn.heading-btn {
        font-weight: bold;
        font-size: 10px;
        min-width: 26px;
      }


      /* Status bar */
      .monaco-statusbar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 2px 10px;
        background: #007acc;
        color: #fff;
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: 11px;
        border: 1px solid #005fa3;
        border-top: none;
      }
      .monaco-statusbar span { opacity: 0.9; }
      .monaco-statusbar .ms-right { margin-left: auto; display: flex; gap: 12px; }

      .monaco-wrap { position: relative; }
    `;
    document.head.appendChild(style);
  }

  /* ─────────────────────────────────────────────
     SVG ICONS
  ───────────────────────────────────────────── */
  function icon(path, vb) {
    return `<svg width="14" height="14" viewBox="0 0 ${vb || 16} ${vb || 16}" fill="currentColor" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
  }

  const ICONS = {
    undo:   icon('<path d="M6 4L2 8l4 4V9.5c2.5 0 4.5.8 6 2.5-0.5-3-2.5-5.5-6-6V4z"/>'),
    redo:   icon('<path d="M10 4l4 4-4 4V9.5C7.5 9.5 5.5 10.3 4 12c0.5-3 2.5-5.5 6-6V4z"/>'),
    bold:   icon('<path d="M4 2h5a3 3 0 0 1 2.12 5.12A3.5 3.5 0 0 1 8.5 14H4V2zm2 5h2.5a1 1 0 1 0 0-2H6v2zm0 5h2.5a1.5 1.5 0 0 0 0-3H6v3z"/>'),
    italic: icon('<path d="M7 2h5v2h-2l-3 8h2v2H4v-2h2l3-8H7V2z"/>'),
    strike: icon('<path d="M2 8h12v1.5H2zm3.5-4.5A2.5 2.5 0 0 1 8 2c1.5 0 2.8.8 3.3 2h-2a1.3 1.3 0 0 0-1.3-.8c-.7 0-1.3.4-1.3 1 0 .4.3.7.6.9H5.5c-.3-.4-.5-.9-.5-1.4zM6 11h4.5c.3.4.5.9.5 1.5A2.5 2.5 0 0 1 8 15c-1.5 0-2.8-.8-3.3-2h2c.2.5.7.8 1.3.8.7 0 1.3-.5 1.3-1.1 0-.4-.2-.8-.6-1H6v-1.7z"/>'),
    code:   icon('<path d="M5.5 3.5L1 8l4.5 4.5 1.4-1.4L3.8 8l3.1-3.1zM10.5 3.5L15 8l-4.5 4.5-1.4-1.4L12.2 8 9.1 4.9z"/>'),
    hr:     icon('<path d="M2 7.5h12v1H2z"/><path d="M2 4h1v8H2zm11 0h1v8h-1z" opacity=".4"/>'),
    save:   icon('<path d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4l-2-3zm-5 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3-8H4V2h7v2z"/>'),
  };

  /* ─────────────────────────────────────────────
     MARKDOWN HELPERS
  ───────────────────────────────────────────── */
  function wrapSelection(editor, prefix, suffix) {
    const sel = editor.getSelection();
    const model = editor.getModel();
    const text = model.getValueInRange(sel);
    const wrapped = prefix + text + suffix;

    editor.executeEdits('toolbar', [{ range: sel, text: wrapped }]);

    // Place cursor between the tags (after prefix, before suffix)
    const startLine = sel.startLineNumber;
    const startCol  = sel.startColumn + prefix.length;
    editor.setSelection({
      startLineNumber: startLine, startColumn: startCol,
      endLineNumber:   startLine, endColumn: startCol + text.length
    });

    editor.focus();
  }
  function insertHR(editor) {
    const sel = editor.getSelection();
    const lineNum = sel.startLineNumber;
    const col = sel.startColumn;
    const text = '\n<hr>\n';
    editor.executeEdits('toolbar', [{
      range: { startLineNumber: lineNum, startColumn: col, endLineNumber: lineNum, endColumn: col },
      text
    }]);
    editor.focus();
  }

  /* ─────────────────────────────────────────────
     BUILD TOOLBAR
  ───────────────────────────────────────────── */
  function buildToolbar(editor, monacoDiv, textarea) {
    const toolbar = document.createElement('div');
    toolbar.className = 'monaco-toolbar';

    function btn(label, iconHtml, tip, onClick, extraClass) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mt-btn' + (extraClass ? ' ' + extraClass : '');
      if (tip) b.setAttribute('data-tip', tip);
      b.innerHTML = iconHtml + (label ? `<span>${label}</span>` : '');
      b.addEventListener('click', onClick);
      return b;
    }

    function divider() {
      const d = document.createElement('div');
      d.className = 'monaco-toolbar-divider';
      return d;
    }

    function group(...els) {
      const g = document.createElement('div');
      g.className = 'monaco-toolbar-group';
      els.forEach(e => g.appendChild(e));
      return g;
    }

    // ── Undo / Redo ──────────────────────────────
    const undoBtn = btn('', ICONS.undo, 'Undo (Ctrl+Z)', () => editor.trigger('toolbar', 'undo', null));
    const redoBtn = btn('', ICONS.redo, 'Redo (Ctrl+Y)', () => editor.trigger('toolbar', 'redo', null));

    // ── Headings H1–H6 ───────────────────────────
    const headingBtns = [1,2,3,4,5,6].map(n =>
      btn(`H${n}`, '', `Heading ${n}`, () => {
        const sel = editor.getSelection();
        const model = editor.getModel();
        const lineNum = sel.startLineNumber;
        const lineContent = model.getLineContent(lineNum);

        if (lineContent.trim() === '') {
          // Empty line — wrap inline, cursor between tags
          const tag = `<h${n}></h${n}>`;
          editor.executeEdits('toolbar', [{
            range: { startLineNumber: lineNum, startColumn: 1, endLineNumber: lineNum, endColumn: 1 },
            text: tag
          }]);
          editor.setPosition({ lineNumber: lineNum, column: `<h${n}>`.length + 1 });
        } else {
          // Non-empty line — append new line below with tags, cursor inside
          const lineLength = lineContent.length;
          const tag = `<h${n}></h${n}>`;
          editor.executeEdits('toolbar', [{
            range: {
              startLineNumber: lineNum, startColumn: lineLength + 1,
              endLineNumber: lineNum, endColumn: lineLength + 1
            },
            text: '\n' + tag
          }]);
          editor.setPosition({ lineNumber: lineNum + 1, column: `<h${n}>`.length + 1 });
        }

        editor.focus();
      }, 'heading-btn')
    );
    const pBtn = btn('P', '', 'Paragraph', () => {
      const sel = editor.getSelection();
      const model = editor.getModel();
      const lineNum = sel.startLineNumber;
      const lineContent = model.getLineContent(lineNum);

      if (lineContent.trim() === '') {
        editor.executeEdits('toolbar', [{
          range: { startLineNumber: lineNum, startColumn: 1, endLineNumber: lineNum, endColumn: 1 },
          text: '<p></p>'
        }]);
        editor.setPosition({ lineNumber: lineNum, column: '<p>'.length + 1 });
      } else {
        const lineLength = lineContent.length;
        editor.executeEdits('toolbar', [{
          range: {
            startLineNumber: lineNum, startColumn: lineLength + 1,
            endLineNumber: lineNum, endColumn: lineLength + 1
          },
          text: '\n<p></p>'
        }]);
        editor.setPosition({ lineNumber: lineNum + 1, column: '<p>'.length + 1 });
      }

      editor.focus();
    }, 'heading-btn');


    // ── Text styling ─────────────────────────────
    const boldBtn   = btn('', ICONS.bold,   'Bold',          () => wrapSelection(editor, '<strong>', '</strong>'));
    const italicBtn = btn('', ICONS.italic, 'Italic',        () => wrapSelection(editor, '<em>', '</em>'));
    const strikeBtn = btn('', ICONS.strike, 'Strikethrough', () => wrapSelection(editor, '<del>', '</del>'));
    const codeBtn   = btn('', ICONS.code,   'Inline Code',   () => wrapSelection(editor, '<code>', '</code>'));

    // ── HR ───────────────────────────────────────
    const hrBtn = btn('', ICONS.hr, 'Horizontal Rule', () => insertHR(editor, true));

    // ── Assemble ─────────────────────────────────
    toolbar.appendChild(group(undoBtn, redoBtn));
    toolbar.appendChild(divider());
    toolbar.appendChild(group(...headingBtns,pBtn));
    toolbar.appendChild(divider());
    toolbar.appendChild(group(boldBtn, italicBtn, strikeBtn, codeBtn));
    toolbar.appendChild(divider());
    toolbar.appendChild(hrBtn);
    toolbar.appendChild(divider());

    return toolbar;
  }
  /* ─────────────────────────────────────────────
     BUILD STATUS BAR
  ───────────────────────────────────────────── */
  function buildStatusBar(editor) {
    const bar = document.createElement('div');
    bar.className = 'monaco-statusbar';

    const pos   = document.createElement('span');
    const words = document.createElement('span');
    const chars = document.createElement('span');
    const lang  = document.createElement('span');
    const right = document.createElement('div');
    right.className = 'ms-right';

    function update() {
      const p   = editor.getPosition();
      const val = editor.getValue();
      const sel = editor.getModel()?.getValueInRange(editor.getSelection());
      pos.textContent   = `Ln ${p?.lineNumber}, Col ${p?.column}`;
      words.textContent = `${val.trim().split(/\s+/).filter(Boolean).length} words`;
      chars.textContent = sel?.length
        ? `${sel.length} selected / ${val.length} chars`
        : `${val.length} chars`;
      lang.textContent  = editor.getModel()?.getLanguageId() || '';
    }

    editor.onDidChangeCursorPosition(update);
    editor.onDidChangeModelContent(update);
    editor.onDidChangeCursorSelection(update);
    update();

    right.appendChild(lang);
    bar.appendChild(pos);
    bar.appendChild(words);
    bar.appendChild(chars);
    bar.appendChild(right);
    return bar;
  }

  /* ─────────────────────────────────────────────
     MAIN INIT
  ───────────────────────────────────────────── */
  function initMonaco() {
    injectStyles();

    document.querySelectorAll('textarea.monaco').forEach(function (textarea) {
      if (textarea.dataset.monacoLoaded) return;
      textarea.dataset.monacoLoaded = 'true';

      // Hide CodeMirror if present
      const cmEl = textarea.closest('.form-field')?.querySelector('.CodeMirror')
        || document.querySelector('.CodeMirror');
      if (cmEl) cmEl.style.display = 'none';
      textarea.style.display = 'none';

      const defaults = window.MonacoEditorDefaults || {};
      const lang     = textarea.dataset.language || defaults.language || 'html';
      const theme    = textarea.dataset.theme    || defaults.theme    || 'vs-dark';
      const fontSize = parseInt(textarea.dataset.fontSize || defaults.font_size) || 14;
      const wordWrap = textarea.dataset.wordWrap || defaults.word_wrap || 'on';
      const height   = textarea.dataset.height   || defaults.height   || '600px';

      const wrap = document.createElement('div');
      wrap.className = 'monaco-wrap';

      const monacoDiv = document.createElement('div');
      monacoDiv.style.width  = '100%';
      monacoDiv.style.height = height;
      wrap.appendChild(monacoDiv);

      textarea.parentNode.insertBefore(wrap, textarea.nextSibling);

      require(['vs/editor/editor.main'], function () {
        const editor = monaco.editor.create(monacoDiv, {
          value:    textarea.value,
          language: lang,
          theme:    theme,
          automaticLayout: true,
          fontSize:  fontSize,
          fontFamily: defaults.font_family || "'Fira Code', 'Cascadia Code', Consolas, monospace",
          fontLigatures: defaults.font_ligatures ?? true,
          lineHeight: parseInt(defaults.line_height) || 22,
          wordWrap:  wordWrap,
          lineNumbers: defaults.line_numbers || 'on',
          minimap:   { enabled: false },
          scrollBeyondLastLine: !!defaults.scroll_beyond_last_line,
          padding:   { top: 8, bottom: 8 },
          tabSize:   parseInt(defaults.tab_size) || 4,
          insertSpaces: defaults.insert_spaces ?? true,
          formatOnPaste: defaults.format_on_paste ?? true,
          autoIndent: defaults.auto_indent || 'full',
          autoClosingBrackets: defaults.auto_closing_brackets || 'languageDefined',
          autoClosingQuotes: 'languageDefined',
          autoSurround: 'languageDefined',
          matchBrackets: 'always',
          bracketPairColorization: { enabled: true },
          suggestOnTriggerCharacters: true,
          quickSuggestions: {
            other:    !!(defaults.quick_suggestions ?? true),
            comments: false,
            strings:  false
          },
          parameterHints:      { enabled: !!(defaults.parameter_hints ?? true) },
          wordBasedSuggestions: 'matchingDocuments',
          smoothScrolling:     !!(defaults.smooth_scrolling ?? true),
          cursorBlinking:      defaults.cursor_blinking || 'smooth',
          cursorSmoothCaretAnimation: 'on',
          mouseWheelZoom:      !!(defaults.mouse_wheel_zoom ?? true),
          find: {
            addExtraSpaceOnTop: false,
            autoFindInSelection: 'never',
            seedSearchStringFromSelection: 'always',
          },
          accessibilitySupport: 'auto',
          readOnly: textarea.hasAttribute('readonly'),
        });

        const toolbar   = buildToolbar(editor, monacoDiv, textarea);
        const statusBar = buildStatusBar(editor);
        wrap.insertBefore(toolbar, monacoDiv);
        wrap.appendChild(statusBar);

        // Sync to textarea
        editor.onDidChangeModelContent(function () {
          textarea.value = editor.getValue();
          if (typeof GravAdmin !== 'undefined') GravAdmin.formIsDirty = true;
        });

        // Ctrl/Cmd+S → save
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function () {
          const b = document.querySelector('button[name="task"][value="save"], .page-save');
          if (b) b.click();
        });

        monacoDiv._monacoEditor = editor;
        console.log('Monaco initialised:', textarea.name);
      });
    });
  }

  function waitForEditor(retries) {
    if (document.querySelector('textarea.monaco')) {
      initMonaco();
    } else if (retries > 0) {
      setTimeout(() => waitForEditor(retries - 1), 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => waitForEditor(20));
  } else {
    waitForEditor(20);
  }

  document.addEventListener('grav-admin-action', () => {
    setTimeout(() => waitForEditor(20), 500);
  });
})();
