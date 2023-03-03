/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import AOS from 'aos'
  
export default () => {
    useEffect(() => {
        AOS.init();
        }, []);
}