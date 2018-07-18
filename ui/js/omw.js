let defaultOMW = {
	title: document.title,
	el: null,
};

// const span = document.querySelector("span");
// const classes = span.classList;
// const iterator = classes.values();

// classes.forEach(
//     function(value, key, listObj) {
//         span.textContent += value + ' ' + key + "/" + this + '  ++  ';
//     },
//     "arg"
// );

function openOMW(defaultObjUser, objUser) {
	const objFilter = Object.assign({}, defaultOMW, defaultObjUser, objUser);
	show(objFilter);
	styleWindow();
}

function show(value) {
	const elem = setElements("olw");
	console.log(value);
	document.title = value.title;
	//if (typeof value.url === 'string') console.log(value.url);

	if (typeof value.echo === 'string') {
		elem.classList.add("substrate");
		setElements("olw-content").innerHTML = value.echo;
		createOrRemoveClassDOM('add', 'olw-content', "olw-style-content");
	}

	if (typeof value.parseIn === 'string') {
		elem.classList.add("substrate");
		pullServer(value.parseIn, setElements("olw-content"));
		createOrRemoveClassDOM('add', 'olw-content', "olw-style-content");
	}

	if (typeof value.video === 'object') createElementHTML(createVideo(value), setElements("olw-content"));
	if (value.img) createElementHTML(createImage(value), setElements("olw-content")); //check on boolean
}

function createVideo(value) {
	const videoObject = value.video;
	console.log("Creating a Video");

	const attr = [
		videoObject.autoPlay ? "autoplay" : "",
		videoObject.controls ? "controls" : "",
		videoObject.muted ? "muted" : "",
		videoObject.loop ? "loop" : "",
	];

	let strOrObj = typeof value.el === 'string' || typeof value.el === 'object'; //check class for string or massiv

	if (typeof videoObject.id === 'string') attr.push(`id="${videoObject.id}"`);
	if (strOrObj) attr.push(`class="${value.el}"`); //check on boolean
	if (typeof videoObject.height === 'string') attr.push(`height="${videoObject.height}"`);
	if (typeof videoObject.width === 'string') attr.push(`width="${videoObject.width}"`);
	if (typeof videoObject.poster === 'string') attr.push(`poster="${videoObject.poster}"`);

	const format = value.video;
	createOrRemoveClassDOM('remove', 'olw-content', "olw-style-content");

	return `<video ${attr.join(' ')}><source src="${format.url}" type="video/${format.type}"></video>`
}

function createImage(value) {
	console.log("Creating an Image");
	createOrRemoveClassDOM('remove', 'olw-content', "olw-style-content");
	return `<img src="${value.url}" alt="${value.alt}" height="${value.height}" width="${value.width}">`
}

const createElementHTML = function (htmlElem, elem) {
	console.log(htmlElem);
	elem.innerHTML = htmlElem
};

function createOrRemoveClassDOM(createOrRemove, idElement, classElement) {
	if (createOrRemove === 'add') {
		console.log("true");
		document.getElementById(idElement).classList.add(classElement);
	}

	if (createOrRemove === 'remove') {
		document.getElementById(idElement).classList.remove(classElement);
	}
}

function setElements(element) {
	if (element === "elCover") return document.getElementById("cover");
	if (element === "olw") return document.getElementById("olw");
	if (element === "olw-content") return document.getElementById("olw-content")
}

// show window
function styleWindow() {
	let elCover = setElements('elCover');
	elCover.style.display = "flex";
	document.body.style.overflow = "hidden";
	elCover.scrollTo(0, 0);
	console.log("showWindow end")
}

document.getElementById('cover').onclick = function (event) {
	if (event.target.id === 'cover') closeOMW()
};

function closeOMW() {
	if (document.getElementById("xst")) video.pause();
	document.title = defaultOMW.title;
	document.body.style.overflow = "";
	setElements('elCover').style.display = "none";
	setElements("olw-content").innerHTML = "";
}