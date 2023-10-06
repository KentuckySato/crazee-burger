export const refreshPage = () => window.location.reload()

export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
