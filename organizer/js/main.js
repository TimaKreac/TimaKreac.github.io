"use strict";
// clock
const body = document.querySelector("body");
const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector(".clock-title");
const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.textContent = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// greatings

const greatingForm = document.querySelector(".greating-form"),
  greatingInput = greatingForm.querySelector("input"),
  greatingUser = document.querySelector(".greating-user"),
  toDoForm = document.querySelector(".ToDo-form");

const handleSubmitName = e => {
  e.preventDefault();
  const greatingInputValue = greatingInput.value;
  localStorage.setItem("nickname", greatingInputValue);
  greatings(greatingInputValue);
};

const setName = () => {
  greatingForm.style.display = "block";
  greatingForm.addEventListener("submit", handleSubmitName);
};

const greatings = nickname => {
  greatingForm.style.opacity = 0;
  setInterval(() => {
    greatingForm.style.display = "none";
    greatingUser.style.opacity = "1";
    toDoForm.style.opacity = 1;
  }, 300);
  greatingUser.textContent = `Привет, ${nickname}!`;
};

const loadName = () => {
  const currentUser = localStorage.getItem("nickname");

  if (currentUser === null) {
    setName();
  } else {
    greatings(currentUser);
  }
};

// To Do List
const toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".ToDo-list");

let toDos = [];

const deleteToDo = e => {
  const btn = e.target;
  const li = btn.parentElement;
  li.style.opacity = 0;
  setInterval(() => {
    li.remove();
  }, 500);
  const cleanToDo = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDo;
  saveToDos();
};

const saveToDos = () => {
  localStorage.setItem("ToDoList", JSON.stringify(toDos));
};

const setToDo = text => {
  const li = document.createElement("li");
  const delBtn = document.createElement("a");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.addEventListener("click", deleteToDo);
  span.textContent = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.prepend(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
};

const handleSubmitToDo = e => {
  e.preventDefault();
  const toDoInputValue = toDoInput.value;
  if (toDoInputValue !== "" && toDoInputValue.indexOf(" ") > 0) {
    setToDo(toDoInputValue);
  }
  toDoInput.value = "";
};
toDoForm.addEventListener("submit", handleSubmitToDo);

const loadToDos = () => {
  const loadedToDos = localStorage.getItem("ToDoList");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => {
      setToDo(toDo.text);
    });
  }
};

// backgrounds
const IMAGES = 4;

const setImage = imgNum => {
  const image = new Image();
  image.src = `/../img/${imgNum}.jpg`;
  image.style.cssText =
    "position: absolute;top:0;left:0;width:100%;height:100vh;z-index:-2;animation: fadeIn 0.5s ease";
  body.appendChild(image);
};
const getRandom = () => {
  const number = Math.ceil(Math.random() * IMAGES);
  return number;
};
// initialize
let init = () => {
  getTime();
  setInterval(getTime, 1000);
  loadName();
  loadToDos();
  setImage(getRandom());
};

init();
