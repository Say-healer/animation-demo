
import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

export default (params) => {
  let divs = document.createElement('div');
  divs.innerHTML = _.join(['Another', 'module', 'loaded!'], ' ');
  document.body.appendChild(divs);
}
