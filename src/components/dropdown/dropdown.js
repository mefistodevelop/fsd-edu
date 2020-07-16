import './dropdown.scss';
import { DropdownCounter } from './dropdownCounter';

class Dropdown {
  constructor(node) {
    this.node = node;
    this.label = this.node.children[0];
    this.dropdownArrow = findChild(this.label, 'dropdown__arrow');
    this.menu = findChild(this.label, 'dropdown__menu');
    this.node.addEventListener('click', this.handleClick);
    this.itemsList = findChild(this.menu, 'dropdown__items');
    this.addCountHandler();
    this.dropdownArrow.addEventListener('click', this.toggleMenuVisibility);
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

export function findChild(node, child) {
  return [...node.children].filter((ch) => ch.classList.contains(child))[0];
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdownNodes = [...document.getElementsByClassName('dropdown')];
  dropdownNodes.forEach((node) => new Dropdown(node));
});
