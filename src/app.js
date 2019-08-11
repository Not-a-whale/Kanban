import './js/Models/Task';
import './scss/base.scss';
import Task from './js/Models/Task';
import elements from './js/base';
import * as taskView from './js/Views/taskView';


export const state = {
    todo: [],
    doing: [],
    done: []
};


/* App controller */

const addItem = function (title) {

    // 0) Generate a new ID

    const generateId = () => {
        let ID;

        if(state.todo.length > 0) {
            ID = state.todo[state.todo.length - 1].id + 1;
        } else {
            ID = 1;
        }

        return ID;
    }

    // 1) Add a new Task to the state variable

    state.task = new Task(title, generateId());

    state.todo.push(state.task);

    // 2) Prepare the UI

    taskView.clearInput();

    // 3) Display a new Task in the UI

    taskView.renderTask(state.task.title, state.task.id);

};

let task = document.getElementById('addTask');

/* Event listeners */

task.addEventListener('click', e => {
    e.preventDefault;
    addItem(taskView.getInput());
});
