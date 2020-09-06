document.addEventListener('DOMContentLoaded', () => {


    const numb = '1234567890*/+-'.split('');

    const arr = numb
    arr.forEach(function (item) {
        let elements = document.createElement('button');
        let calculator = document.getElementById("calculator");
        calculator.appendChild(elements);
        elements.value = `${item}`;
        elements.innerHTML = `${item}`;
        elements.id = `but${item}`

    })

});