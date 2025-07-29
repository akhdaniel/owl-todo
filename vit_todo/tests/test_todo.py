from odoo.tests.common import TransactionCase
from odoo.addons.vit_todo.tests.common import VitTodoCommon

from odoo.exceptions import UserError
from odoo.tests import tagged

import logging
_logger = logging.getLogger(__name__)

@tagged('post_install', '-at_install')
class TodoTestCase(VitTodoCommon):

	def test_vit_todo_count(cls):
		_logger.info(' -------------------- test record count -----------------------------------------')
		cls.assertEqual(
		    4,
		    len(cls.todos)
		)