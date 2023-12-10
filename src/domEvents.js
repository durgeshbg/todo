import { Project } from './Task';
import { getStore, setStore } from './store';

export function getDOM(q) {
    return document.querySelector(q);
}
export function displayForm(e) {
    let dialog;
    let category = e.target.classList[1];
    category = category.split('-')[1];
    dialog = getDOM(`#${category}-dialog`);
    dialog.show();
}

export function closeForm(e) {
    let dialog;
    let category = e.target.classList[0];
    category = category.split('-')[0];
    dialog = getDOM(`#${category}-dialog`);
    dialog.close();
}

export function handleSubmit(e) {
    let data = new FormData(e.target);
    let category = e.target.classList[0];
    if (category == 'project-form') createProject(data);
    else createTask(data);
    e.target.reset();
    e.preventDefault();
    closeForm(e);
}

export function createProject(data) {
    let projectName = data.get('name');
    let project = Project(projectName);
    let projects = getStore();
    projects = { ...projects, [project.uid]: project };
    setStore(projects);
}
