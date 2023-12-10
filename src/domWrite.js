import { getDOM } from './domEvents';
import { getStore } from './store';

export function writeProjectsBar() {
    const projectsBar = getDOM('.projects');
    let projects = getStore();
    for (let uid in projects) {
        let project = projects[uid];
        let projectContainer = document.createElement('div');
        projectContainer.classList.add(uid, 'project');
        projectContainer.innerHTML = `${project.name} <div class="trash">x</div>`;
        projectsBar.appendChild(projectContainer);
    }
}
