/**
 * 
 * @param {*} cb 
 * @param {*} delay 
 * @returns 
 * 
 * useDebounce takes a original callback function and gives a new modified callback with a delay.
 * 
 */

function useDebounce(cb, delay = 2000){

    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}

export default useDebounce;