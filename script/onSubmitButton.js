import { clearForm } from "./clearForm.js"
import { companyForm, sendCompanyData } from "./sendCompanyData.js"
import { showPayCompanyForm } from "./showPayCompanyForm.js"

export function onSubmitButton() {
    companyForm.addEventListener('submit', (e) => {
        e.preventDefault()
        sendCompanyData()
        alert("Formulário enviado com sucesso")
        clearForm()
    })
}