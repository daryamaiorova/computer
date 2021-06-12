const wrapper = document.querySelector('.main__content-inner');

function check(form) {
  const count = [...form.querySelectorAll('input:checked')].filter((input) => input.value === 'value2').length;
  if (count <= 26) {
    wrapper.innerHTML = `<h1>Оценка 2 (${count} / 50)</h1>`;
  } else if (count > 26 && count <= 36) {
    wrapper.innerHTML = `<h1>Оценка 3 (${count} / 50)</h1>`;
  } else if (count > 36 && count <= 40) {
    wrapper.innerHTML = `<h1>Оценка 4 (${count} / 50)</h1>`;
  } else if (count > 40) {
    wrapper.innerHTML = `<h1>Оценка 5 (${count} / 50)</h1>`;
  }

}

const form = document.querySelector('.quizform');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  check(form);
});


