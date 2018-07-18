# OMW - Open Modal Window
Библиотека служит для быстрого и легкого создания modal окон на вашем сайте.
Написана она нативном js, es6, что дает возможность подключать ее без сторонних библиотек.

## Установка
Можно скачать исходный код или клонировать этот репозиторий.

## HTML
```
<head>
  <link rel="stylesheet" href="./ui/css/omw-default.css">
  <link rel="stylesheet" href="./ui/css/user.css">

  <script async src="./user.js"></script>
  <script async src="./omw.js"></script>
  <script async src="./omw-ajax.js"></script>
</head>

<body>
  <div id="cover" onclick="closed()">
      <div id="olw" class="remodal">
          <div id="olw-content"></div>
      </div>
  </div>
 </body>
```

Все скрипты могут грузиться асинхронно, так как на момент загрузки они не зависимы друг от друга и от HTML, что делает загрузку страницы быстрее и не останавливает рендеринг html.

## api
Вы создаёте js объект, где описываете поведение окна.

**Пример:**
```
const example = {
  parseIn: "./content.html"
  title: "Окно",
}
```

`title` - Меняется title страницы во время открытия окна. После закрытия, title меняется обратно.
`parseIn` - Выводит готовую html страницу, для этого обязателен файл omw-ajax.js.

**Пример**
```
const o2 = {
  content: "<h1><center>Hello World</center></h1>",
  title: "Modal Window",
}
```

`echo` - выводит строку.

**Видео**
```
const exVideo = {
  el: ['video, position, ttr'],
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

Если нужно открыть видео поверх страницы, то это не проблема.

`el` - добавит тег **class** к видео с нужными классами внутри.

**Работает только с Видео!**

Для добавления class'a используются «" "» «' '» ковычки, как и в html.

Для более одного класса, нужно создать массив, в котором следует прописать классы , как в примере выше.

`video` - Объект видео внутри вашего объекта, обязателен!

**Доступные параметры:**

- `id` - Присвайвайте и обращайтесь к плееру по id.
- `url` - Путь до видео.
- `type` - Формат видео.
- `autoPlay` - Автовоспроизведение. Доступные значения: **true** / **false** 
- `controls` - Элементы управления плеером. Доступные значения: **true** / **false**
- `height` - Высота области отображения видео в пикселях. Доступные значения: null/n px.
- `width` - Длина плеера по отношению к родителю. Доступные значения: null/n px, em, ... . При 100%, ширина видео будет = ширине родителя.
- `poster` - Устанавливает заставку (постер) для области воспроизведения. Доступные значения: null/url на картинку.
- `loop` - Если указано true, то по окончанию проигрывания, видео автоматически начнет воспроизведение с начала. Доступные значения: true/false.
- `muted` - Если указан true, то аудио дорожка воспроизводиться не будет. Значение по умолчанию - false, и это означает, что звук будет воспроизводиться, когда видео воспроизводится. Доступные значения: true/false.

Поведение плеера было полностью скопировано со стандартов html5.


### Изображение
```
const image = {
  img: true,
  url: "//sun1-3.userapi.com/c840629/v840629378/6edc5/SANLCQ6UDpA.jpg",
  width: "100%",
  height: "",
}

```

**Открытия изображения по верх странице**

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

Объект по умолчанию. Создаете объект и пишите в нем все, что должно быть по умолчанию.

### Например:
let Default = {
  img: true; //Данный код покажет все картинки написанные в других объектах.
}

### События:
`openOMW()` - для открытия окна, вызовите функцию **openOMW()**. Аргуметом передайте объекты, которые нужно показать в этом окне.

`closeOMW()` - функция для закрытия окна. может быть вызвана в любом месте.