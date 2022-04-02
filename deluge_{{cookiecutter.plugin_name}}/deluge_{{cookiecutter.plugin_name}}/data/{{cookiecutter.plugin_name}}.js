/**
 * Script: {{cookiecutter.plugin_name}}.js
 *     The client-side javascript code for the {{cookiecutter.plugin_name}} plugin.
 *
 * Copyright:
 *     (C) {{cookiecutter.author_name}} 2022 <{{cookiecutter.author_email}}>
 *
 *     This file is part of {{cookiecutter.plugin_name}} and is licensed under GNU GPL 3.0, or
 *     later, with the additional special exception to link portions of this
 *     program with the OpenSSL library. See LICENSE for more details.
 */

{{cookiecutter.plugin_name}}Plugin = Ext.extend(Deluge.Plugin, {
    constructor: function(config) {
        config = Ext.apply({
            name: '{{cookiecutter.plugin_name}}'
        }, config);
        {{cookiecutter.plugin_name}}Plugin.superclass.constructor.call(this, config);
    },

    onDisable: function() {
        deluge.preferences.removePage(this.prefsPage);
    },

    onEnable: function() {
        this.prefsPage = deluge.preferences.addPage(
            new Deluge.ux.preferences.{{cookiecutter.plugin_name}}Page());
    }
});
new {{cookiecutter.plugin_name}}Plugin();
