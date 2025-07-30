#-*- coding: utf-8 -*-

{
	"name": "OWL Todo Inherited",
	"version": "1.0",
	"depends": [
		"base",
		"vit_todo"
	],
	"author": "Akhmad Daniel Sembiring",
	"category": "Utility",
	"website": "http://vitraining.com",
	"images": [
		"static/description/images/main_screenshot.jpg"
	],
	"price": "100",
	"license": "OPL-1",
	"currency": "USD",
	"summary": "",
	"description": "",
	"data": [
		"view/todo.xml"
	],
	"installable": True,
	"auto_install": False,
	# "application": True,
	# "odooVersion": 18,
    'assets': {
        'web.assets_backend':[
            'vit_todo_inherit/static/src/js/components/todo/*.js',
            'vit_todo_inherit/static/src/js/components/todo/*.xml',
            # 'vit_todo_inherit/static/src/js/components/*/*.scss',
        ]
    }    
}