import { address, zipCode } from "./dadosForm.js"
import { fillAddress } from "./fillAddress.js"
import { setError } from "./setError.js"
import { validZipCode } from "./validateData.js"

export const searchZipCode = async () => {
    const cep = zipCode.value
    const BASE_URL = `https://viacep.com.br/ws/${cep}/json/`

    if (validZipCode(cep)) {

        const dados = await fetch(BASE_URL)
        const endereco = await dados.json()
        if (endereco.hasOwnProperty('erro')) {
            address.value = "CEP não encontrado"
            setError(zipCode, "CEP não encontrado!")
        } else {
            fillAddress(endereco)
        }
    } else {
        address.value = "CEP inválido"
        setError(zipCode, "CEP inválido!")
    }
}
