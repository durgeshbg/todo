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
    let projects = JSON.stringify(projects);
    localStorage.setItem('projects', projects);
}