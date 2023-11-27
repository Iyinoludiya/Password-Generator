// const showPasswords = document.getElementById("password");
const toggles = document.getElementById("toggle-mode");
    
function generatePass() {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz0123456789" + 
        "@#$*!%<>/?+_-][{}~`^()";

    for (let i = 1; i <= 15; i++) {
        let newPassword = Math.floor(Math.random()
            * str.length + 1);
        password += str.charAt(newPassword);
    }

    document.getElementById("password").value = password;

    }

    function toggleMode() {
        var element = document.getElementById("generator");
        element.classList.toggle("toggle-mode");
      }

    // function copyPassword() {
    //     var copyText = document.getElementById("password");
    //     copyText.select();
    //     document.execCommand("copy");  
    //   }
