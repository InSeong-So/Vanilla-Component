import '@picocss/pico';

const $sub = document.getElementById('sub');
const $reset = document.getElementById('reset');
const $add = document.getElementById('add');

const sum = (counter, operand) => counter + operand;

const handleClickButton = ({ target }) => {
  const $counter = document.getElementById('counter');
  const nextCounter = target.textContent === 'RESET' ? 0 : sum(+$counter.textContent, +target.textContent);

  $counter.textContent = nextCounter;
};

[$sub, $reset, $add].forEach(button => button.addEventListener('click', handleClickButton));
