const images = () => {

    const imagePopup = document.createElement('div');
    const workSelection = document.querySelector('.works');
    const bigImage = document.createElement('img')
 
    imagePopup.classList.add('popup');
    workSelection.append(imagePopup);

    imagePopup.style.justifyContent = 'center'  
    imagePopup.style.alignItems = 'center'  
    imagePopup.style.display = 'none'

    imagePopup.append(bigImage);

    workSelection.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path)
        }

        if (target && target.matches('div.popup')) {
            imagePopup.style.display = 'none'
        }
    })

}

export default images