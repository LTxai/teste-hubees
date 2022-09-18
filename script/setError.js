export const setError = (input, message) => {
    const fieldContainer = input.parentElement;
    const text = fieldContainer.querySelector('small')

    input.focus()
    text.innerText = message
    text.classList.replace('hidden', 'error');
}