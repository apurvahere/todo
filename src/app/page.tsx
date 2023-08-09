"use client";
import React from "react";
import { Button } from "@/components/form";
import { todoData } from "@/utils/constants";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GoDotFill } from "react-icons/go";
import classNames from "classnames";
import { Tooltip } from "@/components/ui";

export default function Home() {
  const [todo, setTodo] = React.useState(todoData);
  const [todoString, setTodoString] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoString(e.target.value);

  const handleTodoSubmit = () => {
    const newTodo = {
      id: String(
        todo.reduce(
          (max, todo) => (Number(todo.id) > max ? Number(todo.id) : max),
          0
        ) + 1
      ),
      todo: todoString,
      status: "pending",
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = [...todo];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodo(items);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="py-5 w-full h-max flex gap-2.5 justify-center items-center sticky top-0 bg-white">
        <input
          className="w-full max-w-xs h-full min-h-[52px] border rounded-md py-1.5 px-2.5"
          placeholder="Enter something ..."
          value={todoString}
          onChange={(e) => handleInputChange(e)}
        />
        <Button
          variant="solid"
          color="dark"
          className="font-cairo"
          disabled={!todoString}
          onClick={handleTodoSubmit}
        >
          Add to list
        </Button>
      </div>
      <div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul
                className="flex flex-col gap-2.5 justify-start items-start py-5 w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todo.map(({ id, todo, status }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          className="w-full h-full"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="flex justify-start items-center gap-1.5 p-2.5 border rounded-md w-full"
                          >
                            <span
                              className={classNames(
                                status === "pending"
                                  ? "text-red-500"
                                  : status === "inprogress"
                                  ? "text-yellow-500"
                                  : status === "completed"
                                  ? "text-green-500"
                                  : "text-red-500"
                              )}
                            >
                              <Tooltip text={status} className="!w-max !h-max">
                                <GoDotFill />
                              </Tooltip>
                            </span>
                            <p>{todo}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </main>
  );
}
