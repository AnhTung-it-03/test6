function login() {
    let admin = prompt("nhập tài khoản");
    if(admin ==="Admin"){
        let mk = prompt("nhập mật khẩu");
        if(mk ==="TheMaster" ){
           return  alert("Wellcome");
        }
        else{
          return   alert("Canceled");
        }
      
    }
    return   alert("Wrong password");
}
login();