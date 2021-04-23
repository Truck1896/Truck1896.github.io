'use strict';

function openTab(evt, targetName) {
  let tabContent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  
  let tabLinks = document.getElementsByClassName('tablink');
  for (let i = 0; i < tabLinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  
  document.getElementById(targetName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();
