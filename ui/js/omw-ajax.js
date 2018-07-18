const request = new XMLHttpRequest();

function pullServer(src, element) {
  function responceLoad() {
    console.log(src);
    if (request.readyState === 4) {
      const status = request.status;
      if (status === 200)
        element.innerHTML = request.responseText;
      else if (status === 404)
        setElements("olw-content").innerHTML = '<h1><b><center>Ресурс не найден <br>' + request.statusText + ' ' + status + '</center></b></h1>';
      else
        element.innerHTML = request.statusText;
      console.log(request.statusText);
    }
  }

  request.open("GET", src, true);
  request.onload = responceLoad;
  request.send();
}
