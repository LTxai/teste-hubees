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

    console.log(`O nome da empresa é: ${businessName.value}`)
})
