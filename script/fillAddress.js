export const fillAddress = (endereco) => {
    address.value = endereco.logradouro;
    city.value = endereco.localidade;
    state.value = endereco.uf;
    country.value = "Brasil"

    if (address.value === '') {
        address.disabled = false
    }
}