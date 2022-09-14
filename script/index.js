const companyForm = document.getElementById('company-data')

const businessName = document.getElementById('business-name')
const businessCnpj = document.getElementById('business-cnpj')
const businessEmail = document.getElementById('business-email')
const businessPhone = document.getElementById('business-phone')
const address = document.getElementById('business-address')
const city = document.getElementById('city')
const country = document.getElementById('country')
const state = document.getElementById('state')
const zipCode = document.getElementById('zip-code')

companyForm.addEventListener('submit', (e) => {
    e.preventDefault()

    sendCompanyData()

    alert("Formulário enviado com sucesso")

})

function sendCompanyData() {
    const companyData = new FormData(companyForm)
    axios.post(`https://httpbin.org/post`, companyData)
        .then((res) => {
            console.log(res.data.form)
        }).catch((err) => {
            console.log(err)
        })
}

const responsibleForm = document.getElementById('responsible-data')

const financialName = document.getElementById('financial-name')
const financialEmail = document.getElementById('financial-email')
const financialPhone = document.getElementById('financial-phone')

responsibleForm.addEventListener('submit', (e) => {
    e.preventDefault()

    alert("Formulário enviado com sucesso")
})

function sendResponsibleData() {
    const responsibleData = new FormData(responsibleForm)

    axios.post(`https://httpin.org/post`, responsibleData)
        .then((res) => {
            console.log(res.data.form)
        }).catch((err) => {
            console.log(err)
        })
}

const garageForm = document.getElementById('garage-data')

const garageCode = document.getElementById('garage-code')
const timeDayInitial = document.getElementById('time-day-initial')
const timeDayFinal = document.getElementById('time-day-final')
const qtyGuest = document.getElementById('qty-guest')
const eventDay = document.getElementById('event-day')

function sendGarageData() {
    const garageData = new FormData(garageForm)

    axios.post(`https://httpin.org/post`, garageData)
        .then((res) => {
            console.log(res.data.form)
        }).catch((err) => {
            console.log(err)
        })
}

/*
TODO
1 - reCAPTCHA
2 - separar funcoes em arquivos diferentes
3 - validações
4 - tratar erros
5 - arrumar estilização
*/