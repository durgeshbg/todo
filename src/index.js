import { init, getStore, setStore } from './store';
import { Task, Project, addTask, deleteTask, getTask } from './Task';
import { getDOM, displayForm, closeForm } from './DOM';

init();
getDOM('.add-project').addEventListener('click', displayForm);
getDOM('.add-task').addEventListener('click', displayForm);
getDOM('.task-form button[type="reset"]').addEventListener('click', closeForm);
getDOM('.project-form button[type="reset"]').addEventListener(
    'click',
    closeForm
);
