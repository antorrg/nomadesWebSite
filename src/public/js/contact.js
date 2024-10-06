

document.addEventListener('DOMContentLoaded', function () {
    const initialInput = {
        email: '',
        subject: '',
        message: ''
    };
    
    let input = { ...initialInput };
    let error = { ...initialInput };
    let isSubmit = false;

    const validateEmail = (input) => {
        const errors = { email: '', subject: '', message: '' };
        if (!input.email) errors.email = 'Email es requerido';
        else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = 'Email es invalido';
        if (!input.subject) errors.subject = 'Asunto es requerido';
        if (!input.message) errors.message = 'Mensaje es requerido';
        return errors;
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        input[name] = value;
        error = validateEmail(input);
        document.getElementById(`error${capitalizeFirstLetter(name)}`).textContent = error[name];
        allow();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        error = validateEmail(input);
        setErrors();
        if (Object.values(error).every(err => err === '') && isSubmit) {
            isSubmit = true;
        }

        const confirmed = confirm("¿Desea enviarnos un email? Confirme su accion");
        if (confirmed) {
            try {
                //console.log("enviando post", input);
                const response = await fetch('/sendPost', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(input)
                });
              
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }

                const result = await response.json();
                showAlert(result.message, "success");

                setTimeout(() => {
                    input = { ...initialInput };
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('message').value = '';
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1000);
                }, 1000); 

            } catch (error) {
                console.error(error);
                //showAlert("Aconteció un error, mensaje no enviado", "error");
                alert('acontecio un error', error)
            }
        }
    };

    const setErrors = () => {
        Object.keys(error).forEach(key => {
            document.getElementById(`error${capitalizeFirstLetter(key)}`).textContent = error[key];
        });
    };

    const showAlert = (message, type) => {
        alert(message);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const allow = () => {
        const permit =
            !input.email.trim() ||
            !input.subject.trim() ||
            !input.message.trim() ||
            error.email ||
            error.subject ||
            error.message;
        document.getElementById('submitButton').disabled = permit;
    };

    document.getElementById('contactForm').addEventListener('submit', handleSubmit);

    document.getElementById('email').addEventListener('input', handleOnChange);
    document.getElementById('subject').addEventListener('input', handleOnChange);
    document.getElementById('message').addEventListener('input', handleOnChange);
    document.getElementById('cancelButton').addEventListener('click', function () {
        window.location.href = '/';
    });
});
