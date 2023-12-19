export const juniorQuestions = [
    'Які знаєте шаблони проєктування? Розкажіть про два шаблони, які використовували в роботі.',
    'Які є типи даних в Java?',
    'Чим відрізняється об’єкт від примітивних типів даних?',
    'У чому різниця передачі параметрів за посиланням і за значенням?',
    'Що таке JVM, JDK, JRE?',
    'Навіщо використовують JVM?',
    'Що таке bytecode?',
    'Які ознаки JavaBean?',
    'Що таке OutOfMemoryError?',
    'Що таке стектрейс? Як його отримати?',
    'Назвіть всі методи класу object.',
    'У чому відмінність між try-with-resources i try-catch-finally при роботі з ресурсами?',
    'Що таке конструктори? Які типи знаєте?',
    'Що таке побітові операції?',
    'Об’єкти яких стандартних класів immutable в Java?',
    'Дайте коротку характеристику immutable object. Навіщо вони потрібні?',
    'Як створити immutable object?',
    'Які переваги immutable object перед звичайними об’єктами?',
    'Що таке ООП? Назвіть принципи з прикладами.',
    'У чому переваги ООП перед процедурним програмуванням?',
    'У чому полягає головна особливість ООП?',
    'Розкажіть, які переваги ми отримуємо із застосуванням ООП?',
    'Розкажіть, які недоліки в ООП?',
    'Розкажіть про принцип успадкування в ООП? Навіщо він потрібний?',
    'Дайте визначення принципу поліморфізм в ООП? Як працює поліморфізм?',
    'Що таке статичний і динамічний поліморфізм?',
    'Дайте визначення принципу абстракції в ООП.',
    'Які елементи мови відповідають за інкапсуляцію?',
    'Які елементи мови відповідають за наслідування?',
    'Які елементи мови відповідають за поліморфізм?',
    'Що таке SOLID? Наведіть приклади.',
    'Що таке перевантаження (overloading) методу?',
    'Що таке перевизначення (override) методу?',
    'Що таке клас, об’єкт, інтерфейс?',
    'Що таке клас POJO? Наведіть приклад такого класу.',
    'Які елементи може містити клас?',
    'Дайте визначення об’єкта?',
    'Розкажіть про наслідування в Java. Які особливості використання ключового слова super?',
    'Що таке сигнатура методу? Наведіть приклади правильних і неправильних сигнатур.',
    'Чи можна в конструкторі застосовувати return?',
    'Чи можна в конструкторі виконати виняток (exception)?',
    'З яких елементів складається заголовок класу? Напишіть приклад.',
    'З яких елементів складається заголовок методу? Напишіть приклад.',
    'Створіть в об’єкті-спадкоємці конструктор за замовчуванням, якщо в базовому класі він не визначений (але визначений інший конструктор).',
    'Коли застосовується ключове слово this?',
    'Що таке ініціалізатор?',
    'Для успадкування класу public class Child extends Parent напишіть порядок ініціалізації об’єкта.',
    'Які знаєте відносини між класами (об’єктами)?',
    'Які асоціативні зв’язки між об’єктами ви знаєте?',
    'Що таке модифікатори доступу в Java? Назвіть їх. Навіщо використовуються?',
    'Назвіть основну особливість статичних змінних і методів.',
    'Які основні обмеження діють на статичні змінні й методи?',
    'Що означає ключове слово static? Чи може статичний метод бути перевизначеним або перевантаженим?',
    'Чи може бути метод статичним і абстрактним одночасно?',
    'Чи можна використовувати статичні методи всередині звичайних? Навпаки? Чому?',
    'Що означає ключове слово final?',
    'Що таке abstract? Абстрактний клас? Абстрактний метод?',
    'Що таке interface? Чи може бути final interface?',
    'У чому різниця між абстрактним класом та інтерфейсом в Java?',
    'Де можна ініціалізувати статичні поля?',
    'Що таке анонімні класи?',
    'Що таке примітивні класи?',
    'Що таке клас «обгортка» (wrapper)?',
    'Що таке Nested class? Коли використовується?',
    'Які модифікатори доступу можуть бути у класу?',
    'Що таке Hibernate? У чому різниця між JPA i Hibernate?',
    'Що таке каскадність? Як вона використовується в Hibernate?',
    'Чи може entity-клас бути абстрактним класом?',
    'Що таке entity manager? За що відповідає?',
    'Що таке клас Assert? Навіщо і як його використовувати?',
    'Дайте характеристику String у Java.',
    'Які є способи створення об’єкта String? Де він створюється?',
    'Як порівняти дві стрічки в Java і/або відсортувати їх?',
    'Запропонуйте алгоритм перетворення стрічки на символ. Напишіть відповідний код.',
    'Як перетворити стрічку в масив байтів і назад? Напишіть відповідний код.',
    'Що таке стрічковий пул і навіщо він потрібен?',
    'Які GOF-шаблони застосовуються в стрічковому пулі?',
    'Як розділити стрічку на частини? Напишіть відповідний код.',
    'Чому масив символів кращий від стрічки для зберігання пароля?',
    'Яка різниця між String, StringBuffer та StringBuilder?',
    'Дайте коротку характеристику Enum у Java.',
    'Чи може Enum реалізовувати (implement) інтерфейс?',
    'Чи може Enum розширити (extends) клас?',
    'Чи можна створити Enum без екземплярів об’єктів?',
    'Чи можемо ми перевизначити метод toString () для Enum?',
    'Що буде, якщо не будемо перевизначати метод toString () для Enum?',
    'Чи можемо ми вказати конструктор всередині Enum?',
    'У чому різниця між == і equals ()?',
    'Що робить метод ordinal () в Enum?',
    'Чи можна використовувати Enum з TreeSet або TreeMap в Java?',
    'Як пов’язані методи ordinal () і compareTo () в Enum?',
    'Напишіть приклад Enum.',
    'Чи можна використовувати Enum у switch case?',
    'Як отримати всі наявні значення в екземплярі Enum?',
    'Що таке Stream у Java?',
    'Назвіть основні властивості транзакцій.',
    'Які є рівні ізоляції транзакцій?',
    'Яка різниця між Statement i PreparedStatement?',
    'Розкажіть про ітератори та їх застосування.',
    'Яка ієрархія колекцій у Java Collection Framework?',
    'Яка внутрішня будова ArrayList?',
    'Яка внутрішня будова LinkedList?',
    'Яка внутрішня будова HashMap?',
    'Чим відрізняється ArrayList від LinkedList?',
    'Чим відрізняється ArrayList від HashSet?',
    'Навіщо в Java таке різноманіття імплементації динамічного масиву?',
    'Навіщо в Java таке різноманіття імплементації key-value storage?',
    'Як відсортувати колекцію елементів?',
    'Дайте коротку характеристику class object у Java.',
    'Для чого використовують Equals and HashCode в Java?',
    'Розкажіть про контракт між Equals and HashCode в Java?',
    'Які умови висуваються щодо перевизначення угоди при перевизначенні Equals?',
    'Що буде, якщо не перевизначити Equals and HashCode?',
    'Які значення ми отримаємо, якщо у нас не перерозподілені Equals and HashCode?',
    'Чому симетричність виконується, тільки якщо x.equals (y) повертає значення true?',
    'Що таке колізія в HashCode? Як з нею боротися?',
    'Що буде, якщо елемент, який бере участь в контракті із HashCode, змінює своє значення?',
    'Напишіть методи Equals and HashCode для класу Student, який складається з полів String name та int age.',
    'У чому різниця застосування if (obj instanceof Student) та if (getClass () == obj.getClass ())?',
    'Дайте коротку характеристику методу clone ().',
    'У чому полягає особливість роботи методу clone () з полями об’єкта типу-посилання?',
    'Дайте визначення поняттю exception (виняткова ситуація).',
    'Які знаєте особливості використання оператору try...catch?',
    'У чому різниця між error і exception?',
    'Яка різниця між checked і unchecked, exception, throw, throws.',
    'Якою є ієрархія винятків?',
    'Що таке checked і unchecked exception?',
    'Чи потрібно перевіряти checked exception?',
    'Про що говорить і як використовувати ключове слово throws?',
    'Які можливі способи обробки винятків ви знаєте?',
    'Напишіть приклад перехоплення та обробки винятку в блоці try-catch методу.',
    'Напишіть приклад перехоплення та обробки винятку в секції throws-методу і передачі викликаючому методу.',
    'Напишіть приклад перехоплення та обробки винятку з використанням власних винятків.',
    'Які є правила для перевіряння винятків під час наслідування?',
    'Чи могли б ви написати код, якщо блок finally не буде виконано?',
    'Напишіть приклад обробки декількох винятків в одному блоці catch',
    'Який оператор дозволяє примусово викинути виняток? Напишіть приклад.',
    'Чи може метод main викинути throws-виняток? Якщо так — куди передасть?',
    'Напишіть приклад try with resources.',
    'Які засоби для роботи з багатопотоковістю знаєте?',
    'Що таке процес і потік? Чим відрізняється процес від потоку?',
    'Розкажіть про синхронізацію між потоками. Для чого використовують методи wait(), notify() - notifyAll(), join()?',
    'Як зупинити потік?',
    'Як між потоками обмінюватися даними?',
    'У чому полягає відмінність класу Thread від інтерфейсу Runnable?',
    'Є потоки Т1, Т2 і Т3. Як реалізувати їхнє послідовне виконання?',
];