var joke = document.getElementById('theJoke')
var downloader = document.getElementById('downloader')

downloader.addEventListener('click', function (event) {
  domtoimage
  .toPng(joke)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'joke.png';
    link.href = dataUrl;
    link.click();
  });
})
