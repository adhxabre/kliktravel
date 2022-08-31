import React, { useRef, useState } from "react"

// elements
import { Footers } from "../elements"

export default function Home() {
    const [list, setList] = useState(['List 1', 'List 2', 'List 3', 'List 4', 'List 5'])

    const dragItem = useRef()
    const dragOverItem = useRef()

    // condition if drag started
    const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(e.target.innerHTML);
    }

    // condition if drag enter on another list
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    }

    // condition when list dropped in on between lists
    const drop = (e) => {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    }

    return (
      <>
        <div className="w-screen h-screen bg-rose-300 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-black font-extrabold mb-5">
            TEST DRAGGABLE
          </h1>
          <div className="rounded-xl bg-white p-5 max-w-[350px] w-full h-4/5 grid grid-rows-5 grid-flow-col gap-5">
            {list &&
              list.map((item, index) => (
                <div 
                    className="rounded-xl w-full h-full bg-fuchsia-600 flex justify-center items-center text-white text-center text-3xl font-bold"
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    key={index}
                    draggable={true}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
        {/* <Footers /> */}
      </>
    );
}