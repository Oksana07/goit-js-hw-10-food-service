
import {refs, Theme} from './refs'
  

refs.switch.addEventListener('change', populateInput);

function populateInput() {
  const check = refs.switch.checked;
    if(check) {
localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
}

const toTheme = localStorage.getItem('theme');

if (toTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}