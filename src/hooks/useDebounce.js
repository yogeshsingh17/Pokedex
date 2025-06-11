/**
 * 
 * @param {*} cb 
 * @param {*} delay 
 * @returns 
 * 
 * useDebounce takes a original callback function and gives a new modified callback with a delay.
 * 
 */

import { useRef } from "react";

function useDebounce(cb, delay = 2000){

    let timerId= useRef();

    return (...args) => {
        if(timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}

export default useDebounce;