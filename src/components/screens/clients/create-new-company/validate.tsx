import React from 'react'

const validate = (body: any) => {
    const errors = {
        cod: '',
        name: '',
        segment: '',
        obs: '',
        address: {
            cep: '',
            uf: '',
            city: '',
            address: '',
            district: '',
            n: '',
            cmpl: '',
            str: ''
        }
    }

    

    if (body.cod == ''){
        errors.cod = 'Por favor, insira o CNPJ/CPF.'
    }

    if(body.segment.cod == ''){
        errors.segment = 'Por favor, insira o seguimento da empresa.'
    }
    
    if (body.name == ''){
        errors.name = 'Por favor, insira o nome da empresa.'
    }

    if (body.obs == ''){
        errors.obs = 'Por favor, preencha este campo.'
    }

    if (body.address.cep == ''){
        errors.address.cep = 'Por favor, informe o CEP.'
    }

    if (body.address.uf == ''){
        errors.address.uf = 'Por favor, informe o UF.'
    }

    if (body.address.city == ''){
        errors.address.city = 'Por favor, informe a cidade.'
    }

    if (body.address.address == ''){
        errors.address.address = 'Por favor, informe o endereço.'
    }

    if (body.address.district == ''){
        errors.address.district = 'Por favor, informe o bairro.'
    }

    if (body.address.n == ''){
        errors.address.n = 'Por favor, informe o número.'
    }

    if (body.address.cmpl == ''){
        errors.address.cmpl = 'Por favor, informe o complemento.'
    }

    if (body.address.str == ''){
        errors.address.str = 'Por favor, informe a rua.'
    }

    return errors 
}

export default validate

/* Validar os campos e atribuir as mensagens de erro caso necessário */