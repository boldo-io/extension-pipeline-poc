import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDragIndicator } from "react-icons/md";
import Paper from "@mui/material/Paper";

import css from "./DraggableList.module.scss";


const initialItems = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6"
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DraggableList = ({}) => {
  const [ isBrowser, setIsBrowser ] = useState(false);
  const [ items, setItems ] = useState(initialItems);
  
  useEffect(() => {
    if (!isBrowser) {
      setIsBrowser(true);
    }
  }, []);


  const _onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  }

  return(
      !isBrowser
      ?
      <div>Loading...</div>
      :
      <DragDropContext onDragEnd={_onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Paper
              elevation={3}
              { ...provided.droppableProps }
              ref={provided.innerRef}
              className={css.listContainer}
            >
              {items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => (
                    <Paper
                      elevation={5}
                      ref={provided.innerRef}
                      { ...provided.draggableProps }
                      { ...provided.dragHandleProps }
                      className={css.listItem}
                    >
                      <MdDragIndicator size={40} />
                      <div className={css.itemBody}>
                       {item}
                     </div>
                    </Paper>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>
  );
};

export default DraggableList;