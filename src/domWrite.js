import { getDOM } from './domControllers';
import { writeProject } from './templates/projectTemplate';
import { deleteProject, getStore, getTasks } from './store';
import { writeTask } from './templates/taskTemplate';

export function writeProjectsBar() {
    const projectsBar = getDOM('.projects .dynamic');
    projectsBar.innerHTML = '';
    let projects = getStore();
    for (let uid in projects) {
        if (uid === 'defaultUID') continue;
        let project = projects[uid];
        let projectdiv = writeProject(project);
        projectsBar.appendChild(projectdiv);
    }
}

export function removeProject(e) {
    const parent = e.target.parentElement;
    deleteProject(parent.classList[0]);
    writeProjectsBar();
    activeProject(getDOM('.all'));
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
    writeTasksBar();
}
