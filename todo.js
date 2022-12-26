document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-todo");
  const input = document.querySelector(".input-1");
  const todoList = document.querySelector(".todo-list");

  // Add a new todo
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const todoText = input.value.trim().toUpperCase();
    if (todoText === "") return;

    // Create new list item
    const li = document.createElement("li");
    li.innerHTML = `
            <p>${todoText}</p>
            <div>
                <button class="btn-done">Done</button>
                <button class="btn-delete">Delete</button>
            </div>
        `;

    // Add the new todo to the list
    todoList.appendChild(li);

    // Clear the input field
    input.value = "";
  });

  // Handle "Done" and "Delete" button clicks
  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      // Delete the todo
      e.target.closest("li").remove();
    } else if (e.target.classList.contains("btn-done")) {
      // Mark todo as done
      const todoItem = e.target.closest("li").querySelector("p");
      todoItem.style.textDecoration = "line-through";
      todoItem.style.color = "green";
    }
  });
});
