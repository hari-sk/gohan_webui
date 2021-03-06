/* global window */
import Backbone from 'backbone';
import 'backbone-forms';

import 'ace-builds/src-min-noconflict/ace';
//    Chrome Theme
import 'ace-builds/src-min-noconflict/theme-chrome';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/mode-javascript';

class CodeEditor extends Backbone.Form.editors.Base {

  constructor(options) {
    super(options);

    this.format = options.schema.format;
    this.editor = window.ace.edit(this.el);
    this.$el.css('height', '300px');
    this.editor.setTheme('ace/theme/chrome');
    this.editor.getSession().setMode('ace/mode/' + this.format);
    this.editor.$blockScrolling = Infinity;
  }

  render() {
    this.setValue(this.value);
    return this;
  }

  getValue() {
    return this.editor.getValue();
  }

  setValue(value) {
    if (value) {
      this.editor.setValue(value);
    }
  }

  focus() {
    if (this.hasFocus) {
      return;
    }

    this.$el.focus();
  }

  blur() {
    if (!this.hasFocus) {
      return;
    }

    this.$el.blur();
  }
}

Backbone.Form.editors.CodeEditor = CodeEditor;
