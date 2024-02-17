import React, { useState } from "react";
import "./styles.css";

function Cell({ isSelected, onClick, isDisabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isSelected ? "cell cell-activated" : "cell"}
      disabled={isDisabled}
    />
  );
}

const grids = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
];
const Game = () => {
  const [selectedBox, setSelectedBox] = useState([]);

  const handleSelect = (index) => {
    const newOrder = [...selectedBox, index];
    setSelectedBox(newOrder);

    if (newOrder.length === grids.flat(1).filter(Boolean).length) {
      console.log("deactive cell");
      deactivateCells();
    }
  };

  const deactivateCells = () => {
    const timer = setInterval(() => {
      setSelectedBox((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  };

  return (
    <div className="wrapper" style={{ marginTop: "50px" }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${grids[0].length}, 1fr)`,
        }}
      >
        {grids
          .flat(1)
          .map((grid, index) =>
            grid === 1 ? (
              <Cell
                key={index}
                isSelected={selectedBox?.includes(index)}
                isDisabled={selectedBox?.includes(index)}
                onClick={() => handleSelect(index)}
              />
            ) : (
              <span />
            )
          )}
      </div>
    </div>
  );
};

export default Game;
