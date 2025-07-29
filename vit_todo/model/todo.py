#!/usr/bin/python
#-*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError

class todo(models.Model):

    _name = "vit.todo"
    _description = "vit.todo"


    def action_reload_view(self):
        pass

    name = fields.Char( required=True, copy=False, string=_("Name"))
    description = fields.Text( string=_("Description"))
    color = fields.Char( string=_("Color"))
    is_completed = fields.Boolean( string=_("Is Completed"))


    def copy(self, default=None):
        default = dict(default or {})
        default.update({
            'name': self.name + ' (Copy)'
        })
        return super(todo, self).copy(default)

