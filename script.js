document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById("input-text");
  const todoList = document.getElementById("todo-list");
  const modeToggle = document.getElementById("mode-toggle");
  const addButton = document.getElementById("add-button");
  const itemCount = document.getElementById("item-count");
  const allFilter = document.querySelector(".all");
  const active = document.querySelector(".list");
  const completedFilter = document.querySelector(".completed");
  const clearCompletedButton = document.getElementById("clear-completed");
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const filters = document.querySelectorAll(".filter");

  // Toggle between light and dark mode
  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      modeToggle.src = "./images/icon-sun.svg";
    } else {
      modeToggle.src = "./images/icon-moon.svg";
    }
  });

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach(function(todo, index) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <button class="toggle"></button>
        <span>${todo.text}</span>
        <button class="delete"></button>
      `;

      const toggleButton = listItem.querySelector('.toggle');
      toggleButton.addEventListener('click', function() {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodoList();
        updateItemCount();

        
      });

      const deleteButton = listItem.querySelector('.delete');
      deleteButton.addEventListener('click', function() {
        todos.splice(index, 1);
        saveTodos();
        renderTodoList();
        updateItemCount();
      });

      if (todo.completed) {
        listItem.classList.add('crossed');
        toggleButton.classList.toggle('toggled-btn');
      }

      todoList.appendChild(listItem);
    });
  }

  function updateItemCount(filterType = 'all') {
    const activeCount = todos.filter(todo => !todo.completed && filterType !== 'completed').length;
    const completedCount = todos.filter(todo => todo.completed && filterType !== 'list').length;
  
    itemCount.textContent = filterType === 'all' ? activeCount :
      filterType === 'list' ? activeCount :
      completedCount;
  }
  

  addButton.addEventListener('click', function() {
    const todoText = input.value.trim();
    if (todoText !== '') {
      todos.push({ text: todoText, completed: false });
      saveTodos();
      renderTodoList();
      updateItemCount();
      input.value = '';
      input.focus();
    }else{
      alert("please enter something")
    }
  });

  function addListAfterKeypress(event) {
    const todoText = input.value.trim();
    if (todoText !== '' && event.keyCode === 13) {
      todos.push({ text: todoText, completed: false });
      saveTodos();
      renderTodoList();
      updateItemCount();
      input.value = '';
      input.focus();
    }
  }

  input.addEventListener("keypress", addListAfterKeypress);

  filters.forEach(function(filter) {
    filter.addEventListener('click', function() {
      const activeFilter = document.querySelector('.filter.active');
      if (activeFilter) {
        activeFilter.classList.remove('active');
      }
      filter.classList.add('active');

      if (filter === allFilter) {
        todoList.querySelectorAll('li').forEach(function(item) {
          item.style.display = 'grid';
        });
        updateItemCount('all');
      }
      
      else if (filter === active) {
        todoList.querySelectorAll('li').forEach(function(item) {
          const todo = todos.find(function(todo) {
            return todo.text === item.querySelector('span').textContent;
          });
          item.style.display = todo.completed ? 'none' : 'grid';
        });
        updateItemCount('list');
      } 
      
      else if (filter === completedFilter) {
        todoList.querySelectorAll('li').forEach(function(item) {
          const todo = todos.find(function(todo) {
            return todo.text === item.querySelector('span').textContent;
          });
          item.style.display = todo.completed ? 'grid' : 'none';
        });
        updateItemCount('completed');
      }
      
    });
  });
  

  clearCompletedButton.addEventListener('click', function() {
    todos.forEach(function(todo, index) {
      if (todo.completed) {
        todos.splice(index, 1);
      }
    });

    saveTodos();
    renderTodoList();
    updateItemCount();
  });

  renderTodoList();
  updateItemCount();
});
