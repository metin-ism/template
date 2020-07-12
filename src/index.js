//import _ from 'lodash';
import './style.css';
import './style/main.scss';
import Icon from './images/header-image.jpg';
import './test.js';

function component() {

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;


}

document.body.appendChild(component());



