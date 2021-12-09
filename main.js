window.addEventListener("DOMContentLoaded", main);

///Event Listeners
// [What are we listening to?][addEventListner([Event],[What do we want to happen when this happens])]

function main() {
  let counter = 0;
  document.body.addEventListener("keydown", (event) => {
    //console.log(event);
  });
  /* document.querySelector('.btn').addEventListener('click',(event)=>{
        counter++;
        document.querySelector('.result').innerHTML= `You clicked it ${counter} times!`;
    })*/
  let ul = document.querySelector(".todos");
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchterm = document.querySelector('#input');

    let formData = new FormData(event.target);
    let todo = Object.fromEntries(formData);
    console.log(todo);
    let li = document.createElement("li");
    li.innerHTML = todo.todo;
    ul.appendChild(li);
    console.log(searchterm)
    searchterm.value='';
  });
}
