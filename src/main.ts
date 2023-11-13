import './style.css';

const initial = ['16', '1', '24', '1.5'];

/**
 * Solves: a / b = c / x
 * @returns {number} x = c * b / a
 */
const methodOfThree = (a: number, b: number, c: number): number => c * b / a;

// impure
function calculate() {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
  const getvalue = (i: number) => Number(inputs.item(i).value);

  const res = methodOfThree(getvalue(0), getvalue(1), getvalue(2));

  if (isNaN(res) || !Number.isFinite(res)) {
    inputs.item(3).value = '';
  } else {
    inputs.item(3).value = res.toLocaleString();
  }
}

// impure
function handleInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
  target.classList.remove('error');

  const value = Number(target.value);

  if (isNaN(value)) {
    target.classList.add('error');
    return;
  }

  calculate();
}

// init
document.querySelectorAll('input').forEach((input, index) => {
  // initial values
  input.value = initial[index];

  if (index < 3) {
    // listeners except result
    input.addEventListener('input', handleInputChange);
  } else {
    // disable result
    input.disabled = true;
  }
})