// create variables for the button, the input, and the task container
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// create Event Listener for the + button
addTask.addEventListener('click' , function() {

    // create a div to house the task and the extra functionality of the + and check btns
    let task = document.createElement('div');
    //give the task a class so we can style it
    task.classList.add('task');
    //insert list item for the actual task itself as well as the functionality of the + and check
    let li = document.createElement('li');
    //for this li we want to display the text we type into the input
    li.innerText = `${inputTask.value}`;
    // we want to append the value inside the div 
    task.appendChild(li);

    //now we have our li so we now need to include the check and delete btns
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    //include a class so we can style the check btn
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // now repeat the above code to create the delete btn
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // we've created all of the elements we need to include in our task
    // now we need to ensure that they appear in the browser when we try to add a task
    if(inputTask.value === "") {
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    // we want the placeholder text to reappear in the input once we have added a todo
    inputTask.value = "";

    // add functionality to the checkmark and delete buttons
    checkButton.addEventListener('click', function() {

        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click', function(e) {

        //target references the element that is clicked - ie. the delete btn
        let target = e.target;
        target.parentElement.parentElement.remove();
    })


});