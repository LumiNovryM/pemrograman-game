// Cek Username
function nama(){
    if(document.getElementById('nama').value != 'Lumi'){
        document.getElementById('outputNama').innerHTML = 'Username Salah';
    }else{
        document.getElementById('outputNama').innerHTML = '';
    }
}

// Cek Password
function pass(){
    if(document.getElementById('password').value != 'Admin'){
        document.getElementById('outputPassword').innerHTML = 'Password Salah';
    }else{
        document.getElementById('outputPassword').innerHTML = '';
    }
}


// Submit Data & Cek Password
function submit() {
    var username = document.getElementById('nama').value
    var password = document.getElementById('password').value
    var color = document.getElementById('color').value

    if(username == 'Lumi' && password == 'Admin'){
        Swal.fire({
            type: 'success',
            title: 'Login Berhasil!',
            text: 'Selamat Datang ' + username,
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false,
          })
          var time;
          time=setTimeout(profil,3000)
          function profil(){
              var container = document.getElementById('container')
              var containerDua = document.getElementById('containertiga')  
              document.getElementById('hasilnama').append(username)  
              container.style.display = 'none'
              containerDua.style.display = 'block'
          }
          startGame()
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username & Password Salah'
          })
    }
}


// Game 
var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, color.value, 10, 120);
    let inputan = document.getElementById("nama").value;

    document.createElement("div").append(namadua);

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 670;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        document.getElementById('game').insertBefore(this.canvas, document.getElementById('game').childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();    
    myGamePiece.update();
}

    // reset
    function reset(){
      location.reload()
    }