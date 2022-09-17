import { clearForm } from "./clearForm.js"
import { checkData } from "./validaDados.js"

export function onSubmitButton(form, action) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        checkData()
        action()
        alert("Formulário enviado com sucesso")
        clearForm()

    })
}