import React, { useState } from "react";

function Todo(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const addItemsHandler = (event) => {
    event.preventDefault();
    const todoData={
      id: Math.random().toString(),
      title : enteredTitle,
      description:enteredDescription,
    };
    props.onSaveTodoData(todoData);
    setEnteredTitle('');
    setEnteredDescription('');
  };
  return (
    <div className=" basis-1/2 sm:border-r-4 ">
      <div className=" h-16 w-auto">
        <img
          src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
          alt="logo"
        />
      </div>
      <div className="">
        <h1 className=" text-center p-11 text-4xl font-bold">TODO</h1>
        <p className="text-center sm:px-36 sm:text-xl text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
          eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
          faucibus nibh dolor dui.
        </p>
        <form onSubmit={addItemsHandler}>
          <div className="flex justify-center mt-9">
            <input
              className="border-2 h-16 w-80 text-xl pl-4"
              placeholder="Title"
              value={enteredTitle}
              type="text"
              onChange={titleChangeHandler}
              required
            />
          </div>
          <div className="flex justify-center mt-9">
            <input
              className="border-2 h-16 w-80 text-xl pl-4"
              placeholder="Description"
              value={enteredDescription}
              type="text"
              onChange={descriptionChangeHandler}
              required
            />
          </div>
          <div className="flex justify-center mt-9">
            <button className=" rounded bg-blue-500 w-44 h-14 font-semibold text-cyan-50 hover:bg-blue-600">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Todo;
