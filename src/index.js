import {
    FormEvents as initFormEvents,
    ProjectBarEvents as initProjectBarEvents,
    TaskBarEvents as initTaskBarEvents,
} from './domEvents';
import { init as initStore } from './store';

initStore();
initFormEvents();
initProjectBarEvents();
initTaskBarEvents();
