#!/usr/bin/python
#-*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError
import logging
_logger = logging.getLogger(__name__)

class todo(models.Model):
    _name = "vit.todo"
    _inherit = "vit.todo"
