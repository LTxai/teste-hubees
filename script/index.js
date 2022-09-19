import { businessCnpj, businessEmail, businessName, businessPhone, financialEmail, financialName, financialPhone, garageCode, zipCode } from "./dadosForm.js";
import { onSubmitButton } from "./onSubmitButton.js";
import { searchZipCode } from "./searchZipCode.js";
import { showPayCompanyForm } from "./showPayCompanyForm.js";
import { acceptBusinessEmail, acceptBusinessName, acceptBusinessPhone, acceptCnpj, acceptGarageCode, acceptResponsibleEmail, acceptResponsibleName, acceptResponsiblePhone } from "./verifyErrors.js";


onSubmitButton()

zipCode.addEventListener('focusout', searchZipCode)

businessName.addEventListener('focusout', acceptBusinessName)
businessEmail.addEventListener('focusout', acceptBusinessEmail)
businessCnpj.addEventListener('focusout', acceptCnpj)
businessPhone.addEventListener('focusout', acceptBusinessPhone)

financialName.addEventListener('focusout', acceptResponsibleName)
financialEmail.addEventListener('focusout', acceptResponsibleEmail)
financialPhone.addEventListener('focusout', acceptResponsiblePhone)

garageCode.addEventListener('focusout', acceptGarageCode)


showPayCompanyForm()