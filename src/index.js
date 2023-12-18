import {
  FormEvents as initFormEvents,
  ProjectBarEvents as initProjectBarEvents,
  TaskBarEvents as initTaskBarEvents,
} from './domEvents';
import { init as initStore } from './store';
import './style.css';

initStore();
initFormEvents();
initProjectBarEvents();
initTaskBarEvents();
