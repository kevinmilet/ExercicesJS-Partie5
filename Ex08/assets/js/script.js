const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', cloneField);

function cloneField() {
    // on assigne une variable à chaque élément du champs Prénom
    
    let labelName = document.getElementById('label1');
    let fieldName = document.getElementById('firstName');

    // on assigne une variable à chaque élément du champs Age

    let labelAge = document.getElementById('label2');
    let fieldAge = document.getElementById('age');

    // on clone les lables et les inputs et on réasigne un nouvel index pour éviter les conflits

    let newLabelName = labelName.cloneNode(true);
    let newFirstnameField = fieldName.cloneNode(true);

    newFirstnameField.id = 'newFirstName';

    let newLabelAge = labelAge.cloneNode(true);
    let newAgeField = fieldAge.cloneNode(true);

    newAgeField.id = 'newAge';

    // on affiche les clones avec les nouveaux indexs
    
    document.body.appendChild(newLabelName);
    document.body.appendChild(newFirstnameField);
    document.body.appendChild(newLabelAge);
    document.body.appendChild(newAgeField);
}
