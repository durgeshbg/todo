import {
  FormEvents as initFormEvents,
  ProjectBarEvents as initProjectBarEvents,
  TaskBarEvents as initTaskBarEvents,
} from './domEvents';
import { init as initStore } from './store';
import './style.css';
import ghLogo from './assets/gh-logo.svg';

initStore();
initFormEvents();
initProjectBarEvents();
initTaskBarEvents();
document.querySelector('.footer img').src = ghLogo;
