import "./styles.css";
import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";

export default function App() {
  const [items, setItems] = useState([
    {
      title: "Column 1",
      description: "Some Text ...."
    },
    {
      title: "Column 2",
      description: "Some Text ...."
    },
    {
      title: "Column 3",
      description: "Some Text ...."
    },
    {
      title: "Column 4",
      description: "Some Text ...."
    },
    {
      title: "Column 5",
      description: "Some Text ...."
    },
    {
      title: "Column 6",
      description: "Some Text ...."
    },
    {
      title: "Column 7",
      description: "Some Text ...."
    },
    {
      title: "Column 8",
      description: "Some Text ...."
    }
  ]);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <div className="App">
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {items.map((item) => (
          <SortableItem key={item.title}>
            <div className="item">
              <div className="item-inside">{item.title}</div>
            </div>
          </SortableItem>
        ))}
      </SortableList>
    </div>
  );
}
