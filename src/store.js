export function init() {
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify({}));
    }
}

