function cloneField() {
    let labelName = document.getElementById('label1');
    let fieldName = document.getElementById('firstName');

    let labelAge = document.getElementById('label2');
    let fieldAge = document.getElementById('age');

    let newLabelName = labelName.cloneNode(true);
    let newFirstnameField = fieldName.cloneNode(true);

    newFirstnameField.id = 'newFirstName';

    let newLabelAge = labelAge.cloneNode(true);
    let newAgeField = fieldAge.cloneNode(true);

    newAgeField.id = 'newAge';
    
    document.body.appendChild(newLabelName);
    document.body.appendChild(newFirstnameField);
    document.body.appendChild(newLabelAge);
    document.body.appendChild(newAgeField);
}
