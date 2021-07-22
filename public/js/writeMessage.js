
function verifypasscode(passcode) {
    let hasNumber = false;
    let hasUpperCase = false;

    passcode.split('').forEach((value) => {
        if (/\d/.test(value)) {
            hasNumber = true
        } else {
            if (value === value.toUpperCase()) {
                hasUpperCase = true
            }
        }
    })


    if (hasNumber === false) {
        alert("Doesn't have a number");
        return false
    }

    if (hasUpperCase === false) {
        alert("Doesn't have an uppercase letter");
        return false
    }

    if (hasUpperCase && hasNumber) {
        return true
    }

}


function submitMessage() {
    const passcode = document.querySelector('#passcode').value;
    const message = document.querySelector("#message").value;
    if (verifypasscode(passcode)) {
        ;
        if (message.length < 25) {
            firebase.database().ref('/messages').push({
                passcode: passcode,
                message: message,
            })
        } else {
            alert("Too long")
        }
    }
}
