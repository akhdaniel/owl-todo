/** @odoo-module **/

import { registry } from '@web/core/registry';
// const { Component, useState, onWillStart, useRef } = "@odoo/owl";
import { Component,useState, onWillStart, useRef  } from "@odoo/owl";

import {useService} from '@web/core/utils/hooks';

export class TodoList extends Component {
    static template='vit_todo_inherit.todo_template';

    setup(){
        this.state = useState({
            task:{
                name:"",
                color:"#ff0000",
                is_completed:false
            },
            taskList:[],
            activeId: false,
            isEdit:false,
        })

        this.orm = useService("orm")

        this.model = 'vit.todo'
        this.searchInput = useRef('search-input') // selector


        onWillStart(async ()=>{
            await this.getAllTasks()
        })
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model, [], ["name","color","is_completed","description"])
    }

    addTask(){
        this.resetForm()
        this.state.activeId=false
        this.state.isEdit=false
    }

    resetForm(){
        this.state.task={
            name:"",
            color:"#ff0000",
            is_completed:false
        }
    }

    async saveTask(){
        // console.log(this.state.task)

        if(!this.state.isEdit){
            await this.orm.create(this.model, [this.state.task])
        } else {
            await this.orm.write(this.model, [this.state.activeId], this.state.task)
        }

        await this.getAllTasks()
    }

    editTask(task){
        this.state.activeId = task.id 

        this.state.isEdit=true
        this.state.task = {
            name: task.name,
            color: task.color,
            is_completed: task.is_completed
        }

        // same:
        /*
        this.state.task = {...task}
        */
    }


    async deleteTask(task){
        await this.orm.unlink(this.model, [task.id])
        await this.getAllTasks()
    }

    async searchTask(){
        const text = this.searchInput.el.value//DOM
        this.state.taskList = await this.orm.searchRead(this.model, [['name','ilike',text]], ["name","color","is_completed","description"])
    }

    async toggleTask(e, task){
        await this.orm.write(this.model, [task.id], {is_completed: e.target.checked})
        await this.getAllTasks()
    }

    async updateColor(e, task){
        await this.orm.write(this.model, [task.id], {color: e.target.value})
        await this.getAllTasks()
    }
}

registry.category('actions').add('vit_todo_inherit.action_todo_js', TodoList);
