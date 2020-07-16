export class DropdownCounter {
  constructor(elem) {
    this.elem = elem;
    this.counter = this.findChild(this.elem, 'dropdown__quantity');
    this.btnPlus = this.findChild(this.counter, 'dropdown__control_plus');
    this.btnMinus = this.findChild(this.counter, 'dropdown__control_minus');
    this.countElem = this.findChild(this.counter, 'dropdown__score');
    this.counter.addEventListener('click', this.handleClick);
    this.score = 0;
  }

  findChild = (node, child) => {
    return [...node.children].filter((ch) => ch.classList.contains(child))[0];
  }

  increaseScore = () => {
    const newScore = this.score += 1;
    this.countElem.innerHTML = newScore;
    this.toggleDisable();
  };

  decreaseScore = () => {
    if (this.score > 0) {
      const newScore = this.score -= 1;
      this.countElem.innerHTML = newScore;
      this.toggleDisable();
    }
  }

  toggleDisable = () => {
    if (this.score > 0) {
      this.btnMinus.classList.remove('dropdown__control_disabled');
    } else if (this.score < 1) {
      this.btnMinus.classList.add('dropdown__control_disabled');
    }
  };

  handleClick = (e) => {
    if (e.target === this.btnPlus) {
      this.increaseScore();
    } else if (e.target === this.btnMinus) {
      this.decreaseScore();
    }
  };
}