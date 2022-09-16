import { eventDay, garageCode, qtyGuest, timeDayFinal, timeDayInitial, financialEmail, financialName, financialPhone, address, businessCnpj, businessEmail, businessName, businessPhone, city, country, state, zipCode, addressNumber } from "./dadosForm.js";

export const clearForm = () => {

    businessCnpj.value = ""
    businessEmail.value = ""
    businessName.value = ""
    businessPhone.value = ""
    address.value = ""
    city.value = ""
    country.value = ""
    addressNumber.value = ""
    state.value = ""
    zipCode.value = ""

    financialName.value = ""
    financialEmail.value = ""
    financialPhone.value = ""

    garageCode.value = ""
    timeDayInitial.value = ""
    timeDayFinal.value = ""
    qtyGuest.value = ""
    eventDay.value = ""
}


