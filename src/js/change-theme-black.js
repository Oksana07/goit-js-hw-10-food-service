
import {refs, Theme} from './refs'

refs.switch.addEventListener('change', toChangeTheme);


function toChangeTheme() {
const check = refs.switch.checked;
if(check) {
refs.body.classList.add(Theme.DARK);
refs.body.classList.remove(Theme.LIGHT);
} else {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}
};