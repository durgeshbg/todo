import { getDOM } from './domControllers';
import { writeProject } from './templates/projectTemplate';
import { getProject, getStore, getTasks } from './store';
import { writeTask } from './templates/taskTemplate';

export function writeProjectsBar() {
    const projectsBar = getDOM('.projects .dynamic');
    projectsBar.innerHTML = '';
    let projects = getStore();
    for (let uid in projects) {
        let project = projects[uid];
        let projectdiv = writeProject(project);
        projectsBar.appendChild(projectdiv);
    }
}

export function writeTasksBar() {
    const uid = getDOM('.active').classList[0];
    const taskBar = getDOM('.tasks');
    let tasks = getTasks(uid);

    taskBar.innerHTML = '';
    tasks.forEach((task) => {
        let taskdiv = writeTask(task);
        taskBar.appendChild(taskdiv);
    });
}

export function activeProject(projectElem) {
    let projectArr = Array.from(projectElem.classList);

    if (projectArr.includes('name')) {
        projectElem = projectElem.parentElement;
        projectArr = Array.from(projectElem.classList);
    }

    if (!projectArr.includes('active')) {
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.remove('active');
        });
        projectElem.classList.add('active');
    }
}