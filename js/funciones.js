function comprobarContrasena() {
  // //utilizar en el onclick del submit del Registro
  // si es distinto q vuelva a introducir
  // si no q se envie
  var text;
  var password=document.getElementById('password').value;
  var password2=document.getElementById('password2').value;
  if (password===password2) {
    text=""
  }
  else{
    text="Las contraseñas no coinciden"
  }
  document.getElementById('fallo_contrasena').innerHTML=text;
}


function login() {
  //comprobar que el login y la contraseña son correctos para entrar en la v1.0
  var usuario=document.getElementById('user').value;
  var password=document.getElementById('passwd').value;
  if (usuario=="i72orarj" && password=="passwd") {
      document.getElementById('button_login').setAttribute("href", "perfil.html");
      // document.getElementById('fallo_login').innerHTML="Usuario o contraseña correcta"
    }
  else {
    document.getElementById('fallo_login').innerHTML="Usuario o contraseña incorrecta";
  }
}
