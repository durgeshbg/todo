import { isThisWeek, isToday } from 'date-fns';

export function init() {
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify({}));
    }
}
export function getStore() {
    let projects = localStorage.getItem('projects');
    return JSON.parse(projects);
}
export function setStore(projects) {
    projects = JSON.stringify(projects);
    localStorage.setItem('projects', projects);
}
export function getProject(uid) {
    let projects = getStore();
    return projects[uid];
}
export function getTasks(uid) {
    let tasks = [];
    let projects = getStore();
    for (let uid in projects) tasks = tasks.concat(getProject(uid).list);
    if (uid == 'all') {
        return tasks;
    } else if (uid == 'this-week') {
        return tasks.filter((task) => isThisWeek(new Date(task.duedate)));
    } else if (uid == 'today') {
        return tasks.filter((task) => isToday(new Date(task.duedate)));
    } else {
        return getProject(uid).list;
    }
}
