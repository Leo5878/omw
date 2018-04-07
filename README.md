# OMW - Open Modal Window
Данная библиотека служит для быстрого и легкого создания modal окон на вашем сайте.
Написана она нативном js, es6, что дает возможность подключать ее без сторонних библиотек.

## Установка
Можно скачать исходный код или клонировать этот репозиторий.

## HTML
```
<script async src="./user.js"></script>
<script async src="omw.js"></script>
<script async src="./omw-ajax.js"></script>
```

Все скрипты могут грузиться асинхронно, так как на момент загрузки они не зависимы друг от друга и от HTML, что делает загрузку страницы быстрее и не останавливает рендеринг html.

### api
Вы создаёте js объект, где описываете поведение окна.
  
**Пример:**
```
const example = {
  parseIn: "./content.html"
  title: "Окно",
}
```

`title` - Меняется title страницы во время открытия окна, при закрытии title меняется обратно.
  
`parseIn` - Вы можете подсунуть в окно html страницу, для этого обязателен файл omw-ajax.js.

**Пример**
```
const o2 = {
  content: "<h1><center>Hello World</center></h1>",
  title: "Modal Window",
}
```

Здесь добавлен новый ключ `content` - который говорит о том, что ходить никуда не надо, строка есть прямо сейчас и ее нужно вывести в окне.

**Видео**
```
const exVideo = {
  clazz: ['video, position, ttr'],
  video: {
    id: "controls-js",
    url: "//www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    autoPlay: false,
    controls: true,
    height: null,
    width: "100%",
    poster: null,
    loop: false,
    muted: false,
    preload: false,
  }    
}
   ```

Если нужно открыть видео поверх странице, то это не проблема.
     
`clazz` - Вы можете прикрепить **class** к видео и обращаться к плееру через него. 
   
**Работает только с Видео!**. Если хотите добавить один класс, то добавляйте его в двойные или одинарные ковычки «""» «''».
  
Если классов для добавления несколько! Нужно создать массив, в котором следует прописать классы через запятую, как в примере выше.
  
`video` - Объект видео внутри вашего объекта, обязателен!
     
**Доступные параметры:**
- `id` - Присвайвайте и обращайтесь к плееру по id. Возможен только один id.
- `url` - Путь до видео.
- `type` - Формат видео.
- `autoPlay` - Автовоспроизведение. Доступные значения: **true** / **false**
- `controls` - Элементы управления плеером. Доступные значения: **true** / **false**
- `height` - Высота области отображения видео в пикселях. Доступные значения: null/n px.
- `width` - Длина плеера по отношению к родителю. Доступные значения: null/n px, em, ... . При 100%, ширина видео будет = ширине родителя.
- `poster` - Устанавливает заставку (постер) для области воспроизведения. Доступные значения: null/url на картинку.
- `loop` - Если указано true, то по окончанию проигрывания, видео автоматически начнет воспроизведение с начала. Доступные значения: true/false.
- `muted` - Если указан true, то аудио дорожка воспроизводиться не будет. Значение по умолчанию - false, и это означает, что звук будет воспроизводиться, когда видео воспроизводится. Доступные значения: true/false.

### Изображение
```
const image = {
  img: true,
  url: "//sun1-3.userapi.com/c840629/v840629378/6edc5/SANLCQ6UDpA.jpg",
  width: "100%",
  height: "",
}
```

**Открытия изображения по верх страницы**
  
`img` - Ключ указывает на отображение изображения на странице. 

**Доступные значения:** true/false
  
`url` - ссылка на изображение.
  
`width` - Длина изображения по отношению к родителю. Доступные значения: null/n px, em, %, ... . 
  
При 100%, ширина видео будет = ширине родителя.
  
`height` - Высота изображения. Доступные значения: n px, em, %, ... .

### Объект по умолчанию:
```
let Default = {
  ...
}
```

Создайте объект по умолчанию, чтобы не копипастить ключи и их значения.

### События:
`onclick="showWindow()"` - onclick вешается на элемент, по которому user должен нажать для открытия окна. 
  
Внутри вызывается функция showWindow(). Аргуметом передаются объекты, которые нужно показать в этом окне.
  
`onclick="closed()"` - функция для закрытия окна, может быть вызвана в любом месте.
