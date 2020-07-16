import './dropdown.scss';
import { DropdownCounter } from './dropdownCounter';

class Dropdown {
  constructor(node) {
    this.node = node;
    this.label = this.node.children[0];
    this.wrapper = findChild(this.label, 'dropdown__field-wrapper');
    this.dropdownArrow = findChild(this.wrapper, 'dropdown__arrow');
    this.menu = findChild(this.label, 'dropdown__menu');
    this.itemsList = findChild(this.menu, 'dropdown__items');
    this.node.addEventListener('click', this.toggleMenuVisibility);
    this.dropdownArrow.addEventListener('click', this.toggleMenuVisibility);
    this.addCountHandler();
  }

  toggleMenuVisibility = () => this.menu.classList.toggle('hidden');

  hideMenu = () => this.menu.classList.add('hidden');

  handleClick = (e) => {
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
