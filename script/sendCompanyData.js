import { eventDay, garageCode, qtyGuest, timeDayFinal, timeDayInitial, financialEmail, financialName, financialPhone, address, businessCnpj, businessEmail, businessName, businessPhone, city, country, state, zipCode } from "./dadosForm.js";

export const companyForm = document.getElementById('company-data')

businessName;
businessCnpj;
businessEmail;
businessPhone;
address;
city;
country;
state;
zipCode;
financialEmail;
financialName;
financialPhone;
garageCode;
timeDayInitial;
timeDayFinal;
qtyGuest;
eventDay;

export function sendCompanyData() {
    const companyData = new FormData(companyForm)
    axios.post(`http://httpbin.org/post`, companyData)
        .then((res) => {
            console.log(res.data.form)
        }).catch((err) => {
            console.log(err)
        })
}