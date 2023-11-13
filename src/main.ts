import './style.css';

const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
inputs.item(0).value = '5';  // lefttop 
inputs.item(1).value = '10'; // leftbottom
inputs.item(2).value = '1';  // righttop
inputs.item(3).value = '2';  // rightbottom

inputs.item(3).disabled = true;  // rightbottom is the result

function calculate() {
  const res = Number(inputs.item(2).value) * Number(inputs.item(1).value) / Number(inputs.item(0).value);
  if (isNaN(res) || !Number.isFinite(res)) {
    inputs.item(3).value = '';
  } else {
    inputs.item(3).value = res.toLocaleString();
  }
}
function inputChanged(event: Event) {
  const target = event.target as HTMLInputElement;
  target.classList.remove('error');

  const value = Number(target.value);

  if (isNaN(value)) {
    target.classList.add('error');
    return;
  }

  calculate();
}

inputs.forEach((input, index) => {
  index < 3 && input.addEventListener('input', inputChanged);
})