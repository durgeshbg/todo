import { getDOM } from './domEvents';
import { writeProject } from './projectTemplate';
import { getProject, getStore } from './store';
import { writeTask } from './taskTemplate';

export function writeProjectsBar() {
    const projectsBar = getDOM('.projects .dynamic');
    projectsBar.innerHTML = "";
    let projects = getStore();
    for (let uid in projects) {
        let project = projects[uid];
        let projectdiv = writeProject(project);
        projectsBar.appendChild(projectdiv);
    }
}

export function writeTasksBar(e) {
    let uid = e.target.classList[0];
    let tasks = getProject(uid).list;
    let taskBar = getDOM('.tasks');
    taskBar.innerHTML = '';
    tasks.forEach((task) => {
        let taskdiv = writeTask(task);
        taskBar.appendChild(taskdiv);
    });
}
