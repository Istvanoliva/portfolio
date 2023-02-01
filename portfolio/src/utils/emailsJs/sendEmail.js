import emailjs from '@emailjs/browser';
import { success, error } from '../../utils/swal/swalEmailjs';

const sendEmailjs = (serviceId, templateId, messages, userId) => {
    emailjs.sendForm(serviceId, templateId, messages, userId)
        .then(() => success())
        .catch(() => error());
};

export default sendEmailjs;
