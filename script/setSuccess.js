export const setSuccess = (input) => {
    const fieldContainer = input.parentElement;
    const text = fieldContainer.querySelector('small')

    text.classList.replace('error', 'hidden');
    text.className = 'hidden'
}