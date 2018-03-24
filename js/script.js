'use strict';

const url = 'http://api.icndb.com/jokes/random';
const button = document.getElementById('get-joke');
const paragraph = document.getElementById('joke');

function getJoke() {
  // tworzy nową instację XML
  const xhr = new XMLHttpRequest;
  // 'open' - metoda XMLHttpRequest, tworzy nowe zapytanie; 'GET' - metoda protokołu HTTP, pobiera zasoby z adresu url
  xhr.open('GET', url);
  // 'load' - wydarzenie wskazujące na nasłuchiwanie onload; w razie onload uruchamia funkcję
  xhr.addEventListener('load', function() {
    // zamienia odpowiedź w formacie JSON na obiekt zrozumiały dla JS
    //czysta odpowiedź jest w zakładce 'Response', a sparsowana w 'Preview'
    const response = JSON.parse(xhr.response);
    // joke znajduje się w value a value w preview; wartość joke wrzucana jest do html'a
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

button.addEventListener('click', function() {
  getJoke();
})

getJoke();