import { companyForm, sendCompanyData } from "./sendCompanyData.js";
import { onSubmitButton } from "./onSubmitButton.js";
import { validaDados } from "./validaDados.js";

onSubmitButton(companyForm, sendCompanyData)

// TODO
// 1 - reCAPTCHA
// 3 - validações
// 4 - tratar erros
// 5 - arrumar estilização