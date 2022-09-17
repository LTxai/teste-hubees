import { address, businessCnpj, businessEmail, businessName, businessPhone, city, country, eventDay, financialEmail, financialName, financialPhone, garageCode, qtyGuest, state, timeDayFinal, timeDayInitial, zipCode } from "./dadosForm.js";


const preencherEndereco = (endereco) => {
    address.value = endereco.logradouro;
    city.value = endereco.localidade;
    state.value = endereco.uf;
    country.value = "Brasil"

    if (address.value === '') {
        address.disabled = false
    }
}

const cepValido = (cep) => cep.length === 8

const pesquisarCep = async () => {
    const cep = zipCode.value
    const BASE_URL = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {

        const dados = await fetch(BASE_URL)
        const endereco = await dados.json()
        if (endereco.hasOwnProperty('erro')) {
            address.value = "CEP não encontrado"
        } else {
            preencherEndereco(endereco)
        }
    } else {
        address.value = "CEP inválido"
    }
}

zipCode.addEventListener('focusout', pesquisarCep)

export const checkData = () => {
    const businessNameValue = businessName.value.trim()
    const businessEmailValue = businessEmail.value.trim()
    const businessCnpjValue = businessCnpj.value.trim()
    const businessPhoneValue = businessPhone.value.trim()
    const financialNameValue = financialName.value.trim()
    const financialEmailValue = financialEmail.value.trim()
    const financialPhoneValue = financialPhone.value.trim()
    const garageCodeValue = garageCode.value.trim()

  if (businessNameValue.length <= 2) {
        setError(businessName, "O nome da empresa precisa ter pelo menos 2 caracteres")
    } else {
        setSuccess(businessName)
    }
    if (businessCnpjValue.length !== 14) {
        setError(businessCnpj, "CNPJ inválido")
    } else {
        setSuccess(businessCnpj)
    }
    if (!isEmail(businessEmailValue)) {
        setError(businessEmail, "Email inválido")
    } else {
        setSuccess(businessEmail)
    }
    if (!isPhone(businessPhoneValue)) {
        setError(businessPhone, "Telefone inválido")
    } else {
        setSuccess(businessPhone)
    }
    if (financialNameValue.length <= 2) {
        setError(financialName, "O nome do responsável precisa ter pelo menos 2 caracteres")
    } else {
        setSuccess(financialName)
    }
    if (!isEmail(financialEmailValue)) {
        setError(financialEmail, "Email inválido")
    } else {
        setSuccess(financialEmail)
    }
    if (!isPhone(financialPhoneValue)) {
        setError(financialPhone, "Telefone inválido")
    } else {
        setSuccess(financialPhone)
    }
    if (garageCodeValue.length !== 5) {
        setError(garageCode, "O código da caragem precisa ter 5 caracteres")
    } else {
        setSuccess(garageCode)
    }

}

export const setError = (input, message) => {
    const fieldContainer = input.parentElement;
    const text = fieldContainer.querySelector('small')

    text.innerText = message
    text.className = 'error'
    
}

const setSuccess = (input) => {
    const fieldContainer = input.parentElement;
    const text = fieldContainer.querySelector('small')

    text.className = 'hidden'

}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function isPhone(phone) {
    return /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(phone)
}