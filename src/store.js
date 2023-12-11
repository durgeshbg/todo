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
    if (uid == 'all') {
        console.log(uid);
    } else if (uid == 'this-week') {
        console.log(uid);
    } else if (uid == 'today') {
        console.log(uid);
    } else {
        console.log(uid);
    }
    return tasks;
}
