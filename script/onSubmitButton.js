import { clearForm } from "./clearForm.js"
import { validaDados } from "./validaDados.js"

export function onSubmitButton(form, action) {
    form.addEventListener('submit', (e) => {
        validaDados()
        e.preventDefault()
        action()
        alert("Formulário enviado com sucesso")
        clearForm()
    })
}