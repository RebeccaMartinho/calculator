function createCalculator() {
  return {
    display: document.querySelector('.display'),

    
    start() {
      this.clickButton();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.calculate();
        }
      });
    },

    calculate() {
      let account = this.display.value;

      try {
        account = eval(account);
        
        if(!account) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(account);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButton() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.calculate()
        };
      });
    },
    
    btnToDisplay(value){
      this.display.value += value;
      this.display.focus();
    },
  };
}

const calculator = createCalculator();
calculator.start();