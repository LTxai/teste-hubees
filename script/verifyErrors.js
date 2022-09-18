import { businessCnpj, businessEmail, businessName, businessPhone, financialEmail, financialName, financialPhone, garageCode, zipCode } from "./dadosForm.js";
import { setError } from "./setError.js";
import { setSuccess } from "./setSuccess.js";
import { validCnpj, validEmail, validGarageCode, validName, validPhone } from "./validateData.js";


export const acceptBusinessName = () => {
    const businessNameValue = businessName.value.trim()

    if (validName(businessNameValue)) {
        setSuccess(businessName)
    } else {
        setError(businessName, "O nome precisa ter pelo menos 2 caracteres")
    }
}
export const acceptResponsibleName = () => {
    const financialNameValue = financialName.value.trim()

    if (validName(financialNameValue)) {
        setSuccess(financialName)
    } else {
        setError(financialName, "O nome precisa ter pelo menos 2 caracteres")
    }
}

export const acceptBusinessEmail = () => {
    const businessEmailValue = businessEmail.value.trim()

    if (validEmail(businessEmailValue)) {
        setSuccess(businessEmail)
    } else {
        setError(businessEmail, "Email inválido")
    }
}

export const acceptResponsibleEmail = () => {
    const financialEmailValue = financialEmail.value.trim()

    if (validEmail(financialEmailValue)) {
        setSuccess(financialEmail)
    } else {
        setError(financialEmail, "Email inválido")
    }
}

export const acceptCnpj = () => {
    const cnpjValue = businessCnpj.value.trim()

    if (validCnpj(cnpjValue)) {
        setSuccess(businessCnpj)
    } else {
        setError(businessCnpj, "CNPJ inválido")
    }
}

export const acceptBusinessPhone = () => {
    const businessPhoneValue = businessPhone.value.trim()
    if (validPhone(businessPhoneValue)) {
        setSuccess(businessPhone)
    } else {
        setError(businessPhone, "Telefone inválido")
    }
}

export const acceptResponsiblePhone = () => {
    const financialPhoneValue = financialPhone.value.trim()
    if (validPhone(financialPhoneValue)) {
        setSuccess(financialPhone)
    } else {
        setError(financialPhone, "Telefone inválido")
    }
}

export const acceptGarageCode = () => {
    const codeValue = garageCode.value.trim()

    if (validGarageCode(codeValue)) {
        setSuccess(garageCode)
    } else {
        setError(garageCode, "O código da caragem precisa ter 5 caracteres")
    }
}
