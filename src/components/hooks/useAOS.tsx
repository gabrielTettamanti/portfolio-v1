import React, { useEffect } from "react";
import AOS from 'aos'
  
export default () => {
    useEffect(() => {
        AOS.init();
        }, []);
}