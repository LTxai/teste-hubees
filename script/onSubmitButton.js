import { clearForm } from "./clearForm.js"
import { companyForm, sendCompanyData } from "./sendCompanyData.js"
import { checkData } from "./validaDados.js"

export function onSubmitButton() {
    companyForm.addEventListener('submit', (e) => {
        e.preventDefault()
        checkData()
        sendCompanyData()
        alert("Formulário enviado com sucesso")
        clearForm()

    })
}