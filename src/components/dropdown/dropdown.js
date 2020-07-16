import './dropdown.scss';
import { DropdownCounter } from './dropdownCounter';

class Dropdown {
  constructor(node) {
    this.node = node;
    this.label = this.node.children[0];
    this.menu = this.getElement('dropdown__menu');
    this.node.addEventListener('click', this.handleClick);
    this.itemsList = [...this.menu.children].filter((child) => child.classList[0] === 'dropdown__items')[0];
    this.addCountHandler();
  }

  getElement = (elem) => {
    return [...this.label.children].filter((child) => child.classList[0] === elem)[0];
  }

  toggleMenuVisibility = () => {
    this.menu.classList.toggle('hidden');
  }

  hideMenu = () => this.menu[0].classList.add('hidden');

  handleClick = (e) => {
    if (!this.node.contains(e.target) && !this.menu.classList.contains('hidden')) {
      this.hideMenu();
    }
    this.toggleMenuVisibility();
  };

  addCountHandler = () => {
    [...this.itemsList.children].forEach((item) => new DropdownCounter(item));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdownNodes = [...document.getElementsByClassName('dropdown')];
  dropdownNodes.forEach((node) => new Dropdown(node));
});
