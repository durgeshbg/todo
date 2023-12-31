import { format } from 'date-fns';
import { editTask, removeTask, checkTask } from '../domControllers';

export function writeTask(task) {
    let taskdiv = document.createElement('div');
    taskdiv.classList.add(task.uid, 'task');

    let taskTop = TaskTop(task.title, task.notes, task.complete);
    let widgets = Widgets(task.priority, task.duedate);

    taskdiv.appendChild(taskTop);
    taskdiv.appendChild(widgets);

    return taskdiv;
}

function TaskTop(taskTitle, taskNotes, taskComplete) {
    let taskTop = document.createElement('label');
    taskTop.classList.add('task-top');

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = taskTitle;

    let notes = document.createElement('div');
    notes.classList.add('notes');
    notes.textContent = taskNotes == '' ? 'No notes' : taskNotes;

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = taskComplete;
    input.onclick = checkTask;
    if (input.checked) taskTop.classList.add('strike');

    let span = document.createElement('span');
    span.classList.add('checkmark');

    taskTop.appendChild(title);
    taskTop.appendChild(notes);
    taskTop.appendChild(input);
    taskTop.appendChild(span);

    return taskTop;
}

function Widgets(taskPriority, taskDuedate) {
    let widgets = document.createElement('div');
    widgets.classList.add('widgets');

    let priority = document.createElement('div');
    priority.classList.add('priority', taskPriority);
    widgets.appendChild(priority);

    let date = document.createElement('div');
    date.classList.add('date');
    date.textContent = format(new Date(taskDuedate), 'dd-MM-yyyy');
    widgets.appendChild(date);

    let buttons = ButtonsDiv();
    widgets.appendChild(buttons);

    return widgets;
}

function ButtonsDiv() {
    let buttons = document.createElement('div');
    buttons.classList.add('task-buttons');

    let trash = document.createElement('div');
    trash.classList.add('trash');
    trash.textContent = 'x';
    trash.onclick = removeTask;

    let edit = document.createElement('div');
    edit.classList.add('edit');
    edit.innerHTML = `&#9998;`;
    edit.onclick = editTask;

    buttons.appendChild(trash);
    buttons.appendChild(edit);

    return buttons;
}
