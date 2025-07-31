/** @odoo-module **/

import {Component, onWillStart} from "@odoo/owl"
import { registry } from '@web/core/registry';


export class TodoList extends Component {
    static template='vit_todo_inherit.todo_template';

    setup(){



        onWillStart( async ()=>{
            this.fetchAllTasks()
        })

    }


    async fetchAllTasks(){
        console.log('fetchAllTasks...')
    }


}


registry.category('actions').add('vit_todo_inherit.action_todo_js', TodoList);
