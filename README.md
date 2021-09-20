###### Демонстрация в папке `test`
# Подключение
### Подключить файлы
```html
<link href="dist/assets/css/project-flag.css" rel="stylesheet" type="text/css">
<script src="dist/assets/js/project-flag.min.js"></script>
```

### Использование разметки
```html
<div class="project-flag js-project-flag">
  <!--ваш html-->
</div>

<!--Пример-->
<div class="project-flag js-project-flag" data-project-flag-speed="1000">
  <div>github.com/</div>
  <div>Nexwich/</div>
  <div>project-flag</div>
</div>
```
Время анимации в миллисекундах (по умолчанию 1000 = 1 секунда)

`data-project-flag-speed="3000"`

# Продвинутое использование

### Как модуль js
##### jQuery
```js
import ProjectFlag from './modules/ProjectFlag';

$('.js-project-flag').each(function(index, element) {
  new ProjectFlag(element).render();
});
```

##### или
```js
import ProjectFlag from './modules/ProjectFlag';

ProjectFlag.build(); // найдет все узлы с классом js-project-flag
```
`.js-project-flag` не является обязательным в случае использования модуля.

Будут созданы 3 строки с использованием указанного html
```js
const element = document.getElementById('project-flag');
const content = ['github.com', 'Nexwich', '<span>project-flag</span>'];
new ProjectFlag(element).setContent(content).render();
```

# Ограничения по использованию

Ваша фантазия 😊
