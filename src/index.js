import { init, getStore, setStore } from './store';
import { Task, Project, addTask, deleteTask, getTask } from './Task';
import { getDOM, displayForm } from './DOM';

init();
getDOM('.add-project').addEventListener('click', displayForm);
getDOM('.add-task').addEventListener('click', displayForm);
