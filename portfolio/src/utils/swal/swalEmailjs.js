import Swal from 'sweetalert2/dist/sweetalert2.js';

export const checkInputs = (name, message, email) => {
    if (!name || !message || !email ) throw Swal.fire({
        title: 'Atenção!',
        text: 'Preencha todos os campos!',
        icon: 'warning',
        confirmButtonText: 'Okay'
    });
    if (!email.includes('@' || '.com')) throw Swal.fire({
        title: 'Atenção!',
        text: 'Digite um email válido!',
        icon: 'warning',
        confirmButtonText: 'Okay'
    });
    return;
};

export const success = () => {
    return Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Email enviado com sucesso !',
        showConfirmButton: false,
        timer: 1500
    });
};

export const error = () => {
    return Swal.fire({
        title: 'Erro!',
        text: 'Falha ao enviar mensagem!',
        icon: 'error',
        confirmButtonText: 'Okay'
    });
};