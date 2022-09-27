import React from "react";

const useTime = () => {
    const current = new Date();
    const hour = current.getHours();
    if (hour >= 7 && hour < 19){
        return 'white-theme'
    } else {
        return 'dark-theme'
    };
};

export default useTime;