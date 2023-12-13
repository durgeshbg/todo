import { Project, Task, addTask, deleteTask, getTask } from './Task';
import { activeProject, writeProjectsBar } from './domWrite';
import { getStore, setStore } from './store';

export function getDOM(q) {
    return document.querySelector(q);
}
export function getallDOM(q) {
    return document.querySelectorAll(q);
}
export function displayForm(category) {
    const dialog = getDOM(`#${category}-dialog`);
    dialog.show();
}

export function closeForm(category) {
    const dialog = getDOM(`#${category}-dialog`);
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

export function removeTask(e) {
    const taskUID =
        e.target.parentElement.parentElement.parentElement.classList[0];
    let projects = getStore();
    for (let uid in projects) {
        let tasklist = projects[uid].list;
        tasklist.forEach((task) => {
            if (task.uid == taskUID) {
                projects[uid] = deleteTask(projects[uid], task);
            }
        });
    }
    setStore(projects);
    activeProject(getDOM('.active'));
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
