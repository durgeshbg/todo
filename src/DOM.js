export function getDOM(q) {
    return document.querySelector(q);
}
export function displayForm(e) {
    let category = e.target.classList[1];
    let form;
    if (category == 'add-task') {
        form = getDOM('.task-form');
    } else {
        form = getDOM('.project-form');
    }
    form.style.display = '';
}
