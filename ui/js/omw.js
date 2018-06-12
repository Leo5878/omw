const Default = {
  title: document.title,
  el: null,
}

function showWindow(defaultObjUser, objUser) {
  const objFilter = Object.assign({}, Default, defaultObjUser, objUser)
  show(objFilter)
  styleWindow()
}

const show = function (value) { //todo rename function
  const elem = setElements("olw")
  console.log(value)
  document.title = value.title

  //if (typeof value.url === 'string') console.log(value.url);

  if (typeof value.content === 'string') {
    elem.classList.add("substrate");
    setElements("olw-content").innerHTML = value.content;
    setTimeout(function(){ closed() }, 3000);
  }

  if (typeof value.parseIn === 'string') {
    elem.classList.add("substrate");
    pullServer(value.parseIn, setElements("olw-content"));
  }

  if (typeof value.video === 'object') createElementHTML(createVideo(value), setElements("olw-content"));
  if (value.img) createElementHTML(createImage(value), setElements("olw-content")); //check on boolean
}

const createElementHTML = function(htmlElem, elem) {
  console.log(htmlElem)
  elem.innerHTML = htmlElem
}

const createVideo = function (value) {
  const videoObject = value.video;
  console.log("Creating a Video")

  const attr = [
    videoObject.autoPlay ? "autoplay" : "",
    videoObject.controls ? "controls" : "",
    videoObject.muted ? "muted" : "",
    videoObject.loop ? "loop" : "",
  ]

  let strOrObj = typeof value.el === 'string' || typeof value.el === 'object';

  if (typeof videoObject.id === 'string') attr.push(`id="${videoObject.id}"`)
  if (strOrObj) attr.push(`class="${value.el}"`); //check on boolean
  if (typeof videoObject.height === 'string') attr.push(`height="${videoObject.height}"`)
  if (typeof videoObject.width === 'string') attr.push(`width="${videoObject.width}"`)
  if (typeof videoObject.poster === 'string') attr.push(`poster="${videoObject.poster}"`)

  const format = value.video

  return `<video ${attr.join(' ')}><source src="${format.url}" type="video/${format.type}"></video>`
}

function createImage(value) {
  console.log("Creating an Image")
  return `<img src="${value.url}" alt="${value.alt}" height="${value.height}" width="${value.width}">`
}

function setElements(element) {
  if (element === "elCover") return document.getElementById("cover")
  if (element === "olw") return document.getElementById("olw")
  if (element === "olw-content") return document.getElementById("olw-content")
}

// show window
function styleWindow(){
  let elCover = setElements('elCover');
  elCover.style.display = "flex"
  document.body.style.overflow = "hidden"
  elCover.scrollTo(0, 0)
  console.log("showWindow end")
}

function closed(event) {
    const video = document.getElementById("xst")
    if (video) video.pause();

    if(!event || event.target.id === 'cover'){
        document.title = Default.title
        document.body.style.overflow = ""
        setElements('elCover').style.display = "none"
        setElements("olw-content").innerHTML = ""
    } else return;
}
