import React from "react";

const useScrollDetector = () => {
        const header = document.querySelector("header") as HTMLElement | null;
        const footer = document.querySelector("footer") as HTMLElement | null;
        const sectionOne = document.querySelector(".home-intro") as HTMLElement | null;
        
        const sectionOneOptions = {
          rootMargin: "0px 0px 0px 0px"
        };
        
        const sectionOneObserver = new IntersectionObserver(function(
          entries,
          sectionOneObserver
        ) {
          entries.forEach(entry => {
            if (header != null && footer != null) {
                if (!entry.isIntersecting) {
                  header.classList.add("nav-scrolled");
                  footer.classList.add("nav-scrolled");
                  console.log('marolio')
                } else {
                  console.log('marolio')
                  header.classList.remove("nav-scrolled");
                  footer.classList.remove("nav-scrolled");
                }
            }
          });
        },
        sectionOneOptions);
        
        sectionOne ? sectionOneObserver.observe(sectionOne) : null;
};

export default useScrollDetector;