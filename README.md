## Индексирование SPA <sup>на примере [spa.ohuel.ru](https://spa.ohuel.ru)</sup>

SPA (Single Page Application) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript.

### Проблема
Поисковые роботы не умеют исполнять JavaScript-код, поэтому при посещении SPA-ресурса «из коробки», они получают пустой index.html и содержимое сайта не индексируется.

### Задача
С минимальными изменениями в существующем проекте сделать так, чтобы поисковый робот индексировал все страницы SPA-приложения, а также установить для каждой страницы уникальные meta-теги (title, description, keywords ...etc).

### Планы на сайт


- [ ] Дождаться индексирования
- [ ] Добавить вложенные маршруты
- [x] Добавить тёмную тему
- [x] Добавить английскую версию
- [ ] Обязательный рефакторинг после полной реализации 

### На что обратить внимание

#### Динамические meta, включая favicon
Помимо стандартных уникальных meta, для каждой страницы устанавливается уникальная иконка. Изображение зависит от контента страницы и от применяемой темы (тёмная или светлая)

#### Динамическая тёмная тема
Тёмная тема сайта автоматически подстраивается под системные настройки. (Протестировано на Mac, iPhone, Android)

#### SEO friendly 
Попробуйте поделиться ссылкой на сайт и его внутренние страницы в телеграм, vk, твиттер etc. В зависимости от того, какие meta допускаются в соц. сети, будут подгружены превью, заголовки, описания, адрес и название сайта.  

#### Страница 404
При переходе на несуществующий url любой вложенности, показывается страница 404, которая имеет те же динамические параметры, что и остальные страницы.

#### Динамическая английская версия
Сайт распознаёт язык, установленный у пользователя и автоматически подстраивается под него. Так как вариантов перевода реализовано всего два (ru, en), а значений локалей только одного английского языка около 20, если язык пользователя не русский и отличается от английского, по умолчанию для такого пользователя будет установлена английская локализация.