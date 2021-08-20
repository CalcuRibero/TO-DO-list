
Vue.component('todo-item', {
        props: ['item'],
        template: `
        <li class="app-item" v-on:click="markAsDone()" v-if="!item.isDone">
            ID: <b>{{item.id}}</b> Name: <b>{{item.text}}</b>
        </li>`,
        methods:{
            markAsDone:function(){
                this.item.isDone = !this.item.isDone;
            }
        }
    });


Vue.component('component-maker',{
    props: ['list'],
    template:
    `
        <div class="app-input">
            <input id="newItem" type="text" placeholder="Type another task ..." required/>
            <input class="app-btn" type="button" value="Add" v-on:click="AddTask()"/>
        </div>
    `,
    methods:{
        AddTask:function(){
            if(document.getElementById('newItem').value !== ""){
                this.list.push({
                    id: this.list.length,
                    text: document.getElementById('newItem').value,
                    isDone: false
                });
                document.getElementById('newItem').value = null;
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        title: 'TO DO List',
        list: []
    }
})

