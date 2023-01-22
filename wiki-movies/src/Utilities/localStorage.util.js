export const getValueFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const setValueInLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}