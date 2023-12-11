import {
    FormEvents as initFormEvents,
    ProjectBarEvents as initProjectBarEvents,
} from './domEvents';
import { init as initStore } from './store';

initStore();
initFormEvents();
initProjectBarEvents();
