// Event handler disematkan pada attribute element HTML (tidak direkomendasikan di JS Vanilla)
// function changeBackgroundColor() {
//     document.body.style.backgroundColor = 'yellow';
// }

// Event Handler sebagai element method
let buttonColor = document.getElementById('button-color');

function changeBackgroundColor() {
    document.body.style.backgroundColor = 'yellow';
}

buttonColor.onclick = changeBackgroundColor;

// event handler menggunakan addEventListener (recommendesa di JS Vanilla)
function addListItem() {
    let taskLi = document.createElement('li');
    let taskText = document.createTextNode('Cuci Piring');
    taskLi.appendChild(taskText);

    let taskUl = document.getElementById('task-list');
    taskUl.appendChild(taskLi);
}

let taskButton = document.getElementById('add-task');
taskButton.addEventListener('click', addListItem);
taskButton.addEventListener('click', function () {
    this.classList.add('on');

    console.log(this);
});

let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
    // event.preventDefault();
    let email = document.getElementById('email').value;

    console.log(email);
});
