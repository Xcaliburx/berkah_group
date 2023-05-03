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