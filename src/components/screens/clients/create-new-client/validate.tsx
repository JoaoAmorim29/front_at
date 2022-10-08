import React from 'react';

const validate = (body: any) => {
    const errors={
        name: '',
        codCompany: '',
        note: '',
        contact: {
            phone: '',
            email: ''
        }
    }

    if (body.name == ''){
        errors.name = 'Por favor, insira o nome do cliente.'
    }

    if (body.codCompany == ''){
        errors.codCompany = 'Por favor, insira o nome da empresa.'
    }

    if (body.note == ''){
        errors.note = 'Por favor, prencha este campo.'
    }

    if (body.contact.phone == ''){
        errors.contact.phone = 'Por favor, insira o telefone do cliente.'
    }

    if (body.contact.email == ''){
        errors.contact.email = 'Por favor, insira o email do cliente.'
    } else if(!body.contact.email.includes('@')){
        errors.contact.email = 'Por favor, insira um email válido.'
    }

    return errors;
}

export default validate