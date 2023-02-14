import emailjs from '@emailjs/browser';

const sendEmailjs = (serviceId, templateId, messages, userId) => {
    emailjs.sendForm(serviceId, templateId, messages, userId)
        .then(() => alert('Email enviado com sucesso !'));
};

export default sendEmailjs;
