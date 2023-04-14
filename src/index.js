import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';n


const DEBOUNCE_DELAY = 300;
// Отримуємо посилання на елементи з DOM
const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');

fetch('https://restcountries.com/v3.1/name/')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.name);
    });
  });


// Створюємо функцію для заповнення списку країн
function populateCountryList(searchTerm) {
  // Здійснюємо запит на сервер або отримуємо дані з файлу
  // на основі введеного користувачем пошукового запиту (searchTerm)

  // Перебираємо результати та створюємо елементи списку
  // для кожної країни
  results.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country.name;
    countryList.appendChild(li);
  });
}

// Встановлюємо прослуховувач події на полі пошуку
searchBox.addEventListener('input', (event) => {
  // Очищаємо список країн перед заповненням
  countryList.innerHTML = '';

  // Отримуємо введений текст з поля пошуку
  const searchTerm = event.target.value;

  // Заповнюємо список країн за допомогою функції
  populateCountryList(searchTerm);
});
