let selectedColor = '';
let nuevoDiv;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        selectedColor = 'pink'; 
    } else if (event.key === 's') {
        selectedColor = 'orange';
    } else if (event.key === 'd') {
        selectedColor = 'lightblue';
    }


    if (selectedColor) {
        document.getElementById('key').style.backgroundColor = selectedColor;
    }



    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        let nuevoDivColor = '';

        if (event.key === 'q') {
            nuevoDivColor = 'purple'; 
        } else if (event.key === 'w') {
            nuevoDivColor = 'gray'; 
        } else if (event.key === 'e') {
            nuevoDivColor = 'brown';
        }

        if (!nuevoDiv) {
            nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'color-div'
            document.body.appendChild(nuevoDiv);
        }

        nuevoDiv.style.backgroundColor = nuevoDivColor;
    }

});
