import { getDOM } from './domEvents';
import { writeProject } from './projectTemplate';
import { getProject, getStore } from './store';
import { writeTask } from './taskTemplate';

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

export function writeTasksBar(e) {
    let uid = activeProject(e);
    if (uid == 'all') {
        console.log(uid);
    } else if (uid == 'this-week') {
        console.log(uid);
    } else if (uid == 'today') {
        console.log(uid);
    } else {
        let tasks = getProject(uid).list;
        let taskBar = getDOM('.tasks');
        taskBar.innerHTML = '';
        tasks.forEach((task) => {
            let taskdiv = writeTask(task);
            taskBar.appendChild(taskdiv);
        });
    }
}

function activeProject(e) {
    const classArr = Array.from(e.target.classList);
    let projectElem;
    let projectArr;

    if (classArr.includes('name')) {
        projectElem = e.target.parentElement;
        projectArr = Array.from(projectElem.classList);
    } else {
        projectElem = e.target;
        projectArr = Array.from(projectElem.classList);
    }

    if (!projectArr.includes('active')) {
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.remove('active');
        });
        projectElem.classList.add('active');
    }
    return projectArr[0];
}
