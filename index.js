const gapNavigators = () => {
    let itemsList = document.querySelectorAll('li');

    itemsList.forEach((item) => {
       item.addEventListener('mouseenter', () => {
           item.style.color = '#FFF';
           item.style.borderColor = '#8257E5'
       })
       
       item.addEventListener('mouseleave', () => {
        item.style.color = '#737380';
        item.style.borderColor = 'transparent'
    }) 
    })
    
}

window.addEventListener('onLoad', gapNavigators());

const hoverButtonCoffe = () => {
    let buttonCoffe = document.querySelectorAll('.desktop-button-coffe');

    buttonCoffe.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#8257E5';
        })
    
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
        })
    })
}

window.addEventListener('onLoad', hoverButtonCoffe());