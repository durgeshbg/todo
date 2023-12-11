import {
    getDOM,
    getallDOM,
    displayForm,
    closeForm,
    handleSubmit,
} from './domControllers';
import { activeProject, writeProjectsBar } from './domWrite';

export function FormEvents() {
    getDOM('.add-project').onclick = displayForm;
    getDOM('.add-task').onclick = displayForm;
    getDOM('.task-form button[type="reset"]').onclick = closeForm;
    getDOM('.project-form button[type="reset"]').onclick = closeForm;
    getDOM('.task-form').onsubmit = handleSubmit;
    getDOM('.project-form').onsubmit = handleSubmit;
}

export function ProjectBarEvents() {
    getallDOM('.project').forEach((project) => {
        project.onclick = (e) => activeProject(e.target);
    });
    writeProjectsBar();
}
