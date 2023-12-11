import { activeProject } from '../domWrite';

export function writeProject(project) {
    let projectdiv = document.createElement('div');
    let name = document.createElement('div');
    let trash = document.createElement('div');

    projectdiv.classList.add(project.uid, 'project');

    name.classList.add('name');
    name.textContent = project.name;
    name.onclick = (e) => activeProject(e.target);

    trash.classList.add('trash');
    trash.textContent = 'x';

    projectdiv.appendChild(name);
    projectdiv.appendChild(trash);

    return projectdiv;
}
