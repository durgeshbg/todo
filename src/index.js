import { init, getStore, setStore } from './store';
import { Task, Project, addTask, deleteTask, getTask } from './Task';
import {
    getDOM,
    displayForm,
    closeForm,
    handleSubmit,
    getallDOM,
} from './domEvents';
import { writeProjectsBar, writeTasksBar } from './domWrite';

init();
getDOM('.add-project').onclick = displayForm;
getDOM('.add-task').onclick = displayForm;
getDOM('.task-form button[type="reset"]').onclick = closeForm;
getDOM('.project-form button[type="reset"]').onclick = closeForm;
getDOM('.task-form').onsubmit = handleSubmit;
getDOM('.project-form').onsubmit = handleSubmit;
getallDOM('.project').forEach((project) => {
    project.onclick = writeTasksBar;
});
writeProjectsBar();