Умови:
Створи функцію fakeRequest(url), яка повертає Promise.
Усередині fakeRequest:
Використовуй setTimeout, щоб проміс виконався через випадковий час (500–1500 мс).
Імітуй успіх 70% часу (resolve("Дані з " + url)), і помилку 30% часу (reject("Помилка при запиті до " + url)).
Використай fakeRequest("user") і створи ланцюжок:

fakeRequest("user")
.then(data => { console.log("1-й then:", data); return data + " processed"; })
.then(data => { console.log("2-й then:", data); throw new Error("Помилка після 2-го then"); })
.catch(err => { console.log("catch:", err.message); return "дані після catch"; })
.finally(() => { console.log("finally завжди"); })
.then(data => { console.log("then після finally:", data); });

Мета завдання:

Побачити, як працює ланцюжок:

.then() виконується при успіху

.catch() ловить помилку будь-де вище

.finally() завжди виконується

Значення, що повертає .catch(), переходить у наступний .then()

Експериментуй:

Поміняй місцями .catch і .finally

Додай ще один .then() після .finally()

Подивись, що зміниться

Якщо хочеш, можу одразу написати готовий приклад коду fakeRequest, щоб ти міг його скопіювати й експериментувати.
Хочеш, щоб я це зробив?

