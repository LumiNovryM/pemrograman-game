// SetTimeOut

function timeout() {
    var loading = document.getElementById('loadingtext').innerHTML = "<p>Data Sedang Diproses...</p>"
    var time;
    time = setTimeout(output, 2000)

    // Selection Function
function output() {

    var loading = document.getElementById('loadingtext').innerHTML = "";

    // Nama
    let inputNama = document.getElementById('nama').value;
    const outputNama = document.getElementById('output-nama')
    localStorage.setItem('Nama', inputNama)
    outputNama.innerHTML = inputNama.toUpperCase()

    // Email
    let inputEmail = document.getElementById('email').value;
    const outputEmail = document.getElementById('output-email')
    localStorage.setItem('Email', inputEmail)
    outputEmail.innerHTML = inputEmail
    
    // Phone
    let inputPhone = document.getElementById('phone').value;
    const outputPhone = document.getElementById('output-phone')
    localStorage.setItem('No.Hp', inputPhone)
    outputPhone.innerHTML = inputPhone

    // Foto
    let inputFoto = document.getElementById('foto').value
    const outputFoto = document.getElementById('output-foto')
    outputFoto.setAttribute('src', inputFoto)

    

    var output = document.getElementById('output')
    var form = document.getElementById('container')

    if(output.style.display === 'none'){
        output.style.display = 'block'
    }else{
        output.style.display = 'none'
    }

    if(form.style.display === 'block'){
        form.style.display = 'none'
    }else{
        form.style.display = 'block'
    }


}

}




