import {
    getDOM,
    getallDOM,
    displayForm,
    closeForm,
    handleSubmit,
} from './domControllers';
import { activeProject, writeProjectsBar, writeTasksBar } from './domWrite';

export function FormEvents() {
    getDOM('.add-project').onclick = (e) => displayForm('project');
    getDOM('.add-task').onclick = (e) => displayForm('task');
    getDOM('.task-form button[type="reset"]').onclick = (e) => closeForm('task');
    getDOM('.project-form button[type="reset"]').onclick = (e) => closeForm('project');
    getDOM('.task-form').onsubmit = handleSubmit;
    getDOM('.project-form').onsubmit = handleSubmit;
}

export function ProjectBarEvents() {
    getallDOM('.project').forEach((project) => {
        project.onclick = (e) => activeProject(e.target);
    });
    writeProjectsBar();
}

export function TaskBarEvents() {
    writeTasksBar();
}
