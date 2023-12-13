import {
    Project,
    Task,
    addTask,
    deleteTask,
    getTask,
    updateTask,
} from './Task';
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

function updateForm(task) {
    displayForm('task');
    getDOM('.task-form').reset();
    getDOM('.task-form .title').value = task.title;
    getDOM('.task-form .notes').value = task.notes;
    getDOM('.task-form .date').value = task.duedate;
    getDOM('.task-form .uid').value = task.uid;
    if (task.priority !== null) {
        getDOM(`.task-form #${task.priority}`).checked = true;
    }
}

export function handleSubmit(e) {
    let data = new FormData(e.target);
    let category = e.target.classList[0];
    if (category == 'project-form') createProject(data);
    else if (data.get('uid')) mutateTask(data);
    else createTask(data);
    e.target.reset();
    e.preventDefault();
    closeForm(category.split('-')[0]);
}

export function editTask(e) {
    const taskUID =
        e.target.parentElement.parentElement.parentElement.classList[0];
    const projects = getStore();
    for (let uid in projects) {
        const task = getTask(projects[uid], taskUID);
        if (task) updateForm(task);
    }
}

export function removeTask(e) {
    const taskUID =
        e.target.parentElement.parentElement.parentElement.classList[0];
    let projects = getStore();
    for (let uid in projects) {
        const task = getTask(projects[uid], taskUID);
        if (task) projects[uid] = deleteTask(projects[uid], task);
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
    const projects = getStore();
    if (projects.hasOwnProperty(uid)) {
        projects[uid] = addTask(projects[uid], task);
    } else {
        projects['defaultUID'] = addTask(projects['defaultUID'], task);
    }
    setStore(projects);
    activeProject(activeElem);
}

function mutateTask(data) {
    const task = Task(
        data.get('title'),
        data.get('notes'),
        data.get('date'),
        data.get('priority')
    );
    const projects = getStore();
    task.uid = data.get('uid');
    for (let uid in projects) {
        if (getTask(projects[uid], task.uid)) {
            projects[uid] = updateTask(projects[uid], task);
        }
    }
    setStore(projects);
    activeProject(getDOM('.active'));
}
