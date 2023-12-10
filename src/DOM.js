export function getDOM(q) {
    return document.querySelector(q);
}
export function displayForm(e) {
    let dialog;
    let category = e.target.classList[1];
    category = category.split('-')[1];
    dialog = getDOM(`#${category}-dialog`);
    dialog.show();
}

export function closeForm(e) {
    let dialog;
    let category = e.target.classList[0];
    category = category.split('-')[0];
    dialog = getDOM(`#${category}-dialog`);
    dialog.close();
}
