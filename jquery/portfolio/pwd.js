var password = document.getElementById("password");

function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";  // Initialize pwd
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);  // allocating randomly generated pwd
  }
  document.getElementById("password").value = password;  // give value to textbox
}


function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}



















































  /*class password {
    constructor() {
        console.log("password generator activted...")
        this.pass = ""
    }
    generatepass(len) {
        let chars = "abcdefghijklmnopqrstvuwxyz"
        let num = "0123456789"
        let symbols = "!@#$%^&*()_+-=,.~"

        If(len < 8){
            console.log("The minimum length for password should be 8.");
        }
        else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += num[Math.floor(Math.random() * num.length)]
                this.pass += symbols[Math.floor(Math.random() * symbols.length)]
                i += 3
            }
        
        this.pass = this.pass.substring(0, len)
        return this.pass
    }
}
}
let p = new password()
console.log(p.generatepass(10))*/
  
