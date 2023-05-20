var words = 
    [
        'SE INDONESIA', 
        'BERKUALITAS', 
        'BERPENGALAMAN', 
        'PROFESIONAL'
    ],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

$("#submit").click(function(){
    let nomor = '6281314088904'
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    if (name == '')
        alert('Name cannot be empty')
    else if (email == '')
        alert('Email cannot be empty')
    else if (subject == '')
        alert('Subject cannot be empty')
    else if (message == '')
        alert('Message cannot be empty')
    else {
        let pesan = 'Subject: ' + subject + ' \n Email: ' + email + ' \n Nama: ' + name + ' \n Message: ' + message
        window.open('https://api.whatsapp.com/send?phone=' + nomor + '&text=' + pesan)
    }
});