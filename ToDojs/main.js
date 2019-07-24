var submitBtn = document.getElementById('submit-btn');
var result = document.getElementById('result');
submitBtn.addEventListener('click', function(e) {
    var todoInput = document.getElementById('todo-input').value;
    console.log(todoInput);
    if (todoInput !== "") {
        var todo = document.createElement('LI');
        todo.innerHTML = todoInput + '<button>x</button>';
        result.appendChild(todo);
        document.getElementById('todo-input').value = "";
    } else {
        alert('請輸入待辦事項');
    }
});
result.addEventListener('click', function(e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
});