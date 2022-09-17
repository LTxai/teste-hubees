export const companyForm = document.getElementById('company-data')

export function sendCompanyData() {
    const companyData = new FormData(companyForm)
    axios.post(`http://httpbin.org/post`, companyData)
        .then((res) => {
            console.log(res.data.form)
        }).catch((err) => {
            console.log(err)
        })
}