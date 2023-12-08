function generateUID() {
    return Date.now().toString(32) + Math.random().toString(32).slice(2);
}
function Task(title, notes, duedate, priority) {
    return {
        uid: generateUID(),
        title,
        notes,
        duedate,
        priority,
        complete: false,
    };
}
function Project(name) {
    return { uid: generateUID(), name, list: [] };
}
export { Task, Project };
