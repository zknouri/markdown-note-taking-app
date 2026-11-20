export default function debounce(func: any, delay: number){
    let timeout: number | undefined;

    return (...args: any ):void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay)
    }
}