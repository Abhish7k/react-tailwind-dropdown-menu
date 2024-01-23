import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const list = [
  {
    city: "New York",
  },
  {
    city: "London",
  },
  {
    city: "Prague",
  },
  {
    city: "Vienna",
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider "
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col p-2 w-full items-start rounded-lg ">
          {list.map((item, i) => (
            <div
              className="w-full hover:bg-blue-300 rounded-lg cursor-pointer p-4"
              key={i}
            >
              <h3 className="font-semibold">{item.city}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
