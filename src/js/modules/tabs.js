const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector)
    const tabs = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = 'none'
        })
        tabs.forEach((item) => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = display
        tabs[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target && 
           (target.classList.contains(tabSelector.replace(/\./,'')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./,'')))) {
            tabs.forEach((tab, i) => {
                if (target === tab || target.parentNode === tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })






}


export default tabs;