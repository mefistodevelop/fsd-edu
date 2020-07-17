import './dropdown-date.scss';

export function findChild(node, child) {
  return [...node.children].filter((ch) => ch.classList.contains(child))[0];
}

class DropdownDate {
  constructor(node) {
    this.node = node;
    this.isOpen = false;
    this.arrivingDate = '';
    this.departureDate = '';
    this.container = findChild(this.node, 'dropdown-date__container');
    this.arrivingDropdown = findChild(this.container, 'dropdown-date__label_arrive');
    this.departureDropdown = findChild(this.container, 'dropdown-date__label_depart');
    this.arrivingDropdown.addEventListener('click', this.toggleDropdownVisibility);
    this.departureDropdown.addEventListener('click', this.toggleDropdownVisibility);
    this.calendar = findChild(this.node, 'dropdown-date__calendar');
  }

  setIsOpen = (isOpen) => {
    this.isOpen = isOpen;
  }

  toggleDropdownVisibility = () => {
    if (this.isOpen) {
      this.calendar.classList.add('dropdown-date__calendar_hidden');
      this.setIsOpen(false);
    } else {
      this.calendar.classList.remove('dropdown-date__calendar_hidden');
      this.setIsOpen(true);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.getElementsByClassName('dropdown-date');
  [...dropdowns].forEach((dropdown) => new DropdownDate(dropdown));
});