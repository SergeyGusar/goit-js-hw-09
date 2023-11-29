const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  refs.start.addEventListener('click', onStartBtnClick);
  refs.stop.addEventListener('click', onStopBtnClick);
  
  let interval = null;
  
  function onStartBtnClick() {
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  
    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
  }
  
  function onStopBtnClick() {
    clearInterval(interval);
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', true);
  }
  
  
