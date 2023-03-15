
function sendEmail() {
    const param1 = document.getElementById('name');
    const param2 = document.getElementById('email');
    const param3 = document.getElementById('message');
    const result_cont = document.getElementById('result-email');

    var isValidEmail = false;
    var emailRe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/;

    if (param2.value.match(emailRe)) {
        isValidEmail = true;
    }
    var templateParams = {
        name: param1.value,
        email: param2.value,
        message: param3.value
    };
    if (param1.value != '' && isValidEmail && param3.value != '') {
        emailjs.send('service_nzjpx6m', 'template_exq2p2s', templateParams, '8WlImGVMZxBNHsfbt')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                result_cont.innerHTML = "Thank you for contacting!";
                result_cont.style.color = 'green'
                param1.value = '';
                param2.value = '';
                param3.value = '';
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
    else {
        const result_cont = document.getElementById('result-email');
        let message = ''
        if (param1.value == '') {
            message += 'Name is empty! \n'
        }
        if (param2.value == '') {
            message += "Email is empty! \n"

        }
        if (param2.value != "") {
            if (isValidEmail == false) {
                message += "Email Criteria doesn't match! \n"
            }
        }

        if (param3.value == '') {
            message += 'Write some message!'
        }
        result_cont.innerHTML = message
        result_cont.style.color = 'red'
    }
}
