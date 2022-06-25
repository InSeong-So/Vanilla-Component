import '@picocss/pico';

// counter
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

// todo
const $form = document.querySelector('form');
const $todoContent = document.getElementById('todo-content');
let todoList = [
  {
    key: 'todo-0',
    content: '테스트',
  },
];

const render = () => {
  $todoContent.replaceChildren();
  // prettier-ignore
  const template = todoList.map(({ key, content }) => /*html*/ `
  <div class="row" key=${key}>
    <div class="todo-title">
      <span>${content}</span>
    </div>
    <div class="todo-action">
      <span class="complete">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-check">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-trash-2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </span>
    </div>
  </div>`).join('');

  $todoContent.insertAdjacentHTML('afterbegin', template);
};

$form.addEventListener('submit', event => {
  event.preventDefault();
  const key = Number(todoList.length === 0 ? 0 : todoList.at(-1).key.split('-')[1]) + 1;
  const { value: content } = event.target.elements['todo-input'];
  todoList.push({ key: `todo-${key}`, content });

  render();

  event.target.elements['todo-input'].value = '';
});

$todoContent.addEventListener('click', ({ target }) => {
  if (!target.matches('span')) return;
  console.log(target);
  const $row = target.closest('.row');
  const $key = $row.getAttribute('key');
  if (target.matches('.complete')) {
    $row.classList.toggle('complete-todo');
  } else if (target.matches('.remove')) {
    todoList = todoList.filter(({ key }) => key !== $key);
    render();
  }
});
