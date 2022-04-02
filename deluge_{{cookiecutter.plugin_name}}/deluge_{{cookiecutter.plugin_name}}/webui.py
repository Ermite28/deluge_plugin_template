# -*- coding: utf-8 -*-
# Copyright (C) {{cookiecutter.author_name}} <{{cookiecutter.author_email}}>
#
# Basic plugin template created by the Deluge Team.
#
# This file is part of {{cookiecutter.plugin_name}} and is licensed under GNU GPL 3.0, or later,
# with the additional special exception to link portions of this program with
# the OpenSSL library. See LICENSE for more details.
from __future__ import unicode_literals

import logging

from deluge.plugins.pluginbase import WebPluginBase

from .common import get_resource

log = logging.getLogger(__name__)


class WebUI(WebPluginBase):

    scripts = [get_resource('{{cookiecutter.plugin_name}}.js')]

    def enable(self):
        pass

    def disable(self):
        pass
