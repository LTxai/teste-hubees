import { address, businessCnpj, businessName, city, country, state, zipCode } from "./dadosForm.js";


const preencherEndereco = (endereco) => {
    address.value = endereco.logradouro;
    city.value = endereco.localidade;
    state.value = endereco.uf;
    country.value = "Brasil"
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

export const validaDados = () => {
    if (!businessName.value) {
        document.getElementById("hidden").style.visibility = "visible"
        document.getElementById("hidden").innerHTML = "Nome não pode ficar vazio"
    } if (!businessCnpj.value) {}
}