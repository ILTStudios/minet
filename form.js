const form = document.querySelector('#submit-form');
console.log(form);
form.addEventListener('submit', (data) => {
    data.preventDefault();
    console.log(data);
});