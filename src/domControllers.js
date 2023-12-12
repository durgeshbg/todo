import { Project, Task, addTask } from './Task';
import { activeProject, writeProjectsBar } from './domWrite';
import { getStore, setStore } from './store';

export function getDOM(q) {
    return document.querySelector(q);
}
export function getallDOM(q) {
    return document.querySelectorAll(q);
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

function createProject(data) {
    let projectName = data.get('name');
    let project = Project(projectName);
    let projects = getStore();
    projects = { ...projects, [project.uid]: project };
    setStore(projects);
    writeProjectsBar();
}

function createTask(data) {
    const task = Task(
        data.get('title'),
        data.get('notes'),
        data.get('date'),
        data.get('priority')
    );
    const activeElem = getDOM('.active');
    const uid = activeElem.classList[0];
    let projects = getStore();
    let project;

    if (projects.hasOwnProperty(uid)) {
        project = projects[uid];
    } else {
        project = projects['defaultUID'];
    }
    project = addTask(project, task);
    projects = { [project.uid]: project, ...projects };
    setStore(projects);
    activeProject(activeElem);
}
