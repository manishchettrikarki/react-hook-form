import { ReactNode, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface IDropdownInterface {
  icon: ReactNode;
}

type OptionsType = {
  value: string;
  label: string;
};
/**
 *
 */
export default function Dropdown(props: IDropdownInterface) {
  const [isClicked, setIsClicked] = useState<boolean>();
  const [selectedOption, setSelectedOption] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>();
  const [debounceValue, setDebouncedValue] = useState<string>();

  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
    { value: "4", label: "Four" },
  ];

  function handleIsClicked(option: OptionsType) {
    setSelectedOption(option.label);
    setIsClicked(false);
  }

  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  //
  useEffect(() => {
    setDebouncedValue("");
    setSearchValue("");
  }, [selectedOption]);

  //
  return (
    <div className="relative w-full">
      <div
        className="border border-gray-300 rounded-lg w-full"
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-[95%]">
            <input
              className="w-full border border-none focus:ring-0"
              value={selectedOption || ""}
            />
          </div>
          <div className="flex items-center justify-end w-[5%]">
            <button className="">{props.icon}</button>
          </div>
        </div>
      </div>

      {/*  */}
      {isClicked && (
        <div className="flex flex-col gap-2 absolute bg-white w-full">
          <div className="flex items-center gap-3 w-full ps-4 border border-gray-300">
            <CiSearch className="w-[5%]" size={24} />
            <input
              className="w-[95%] focus:ring-0 border border-none"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {!debounceValue &&
            options.map((option, index) => (
              <div
                key={index}
                className="w-full hover:bg-gray-200 px-4 py-1"
                onClick={() => handleIsClicked(option)}
              >
                {option.label}
              </div>
            ))}
          {options.map((option, index) =>
            debounceValue &&
            option.label.toLowerCase().startsWith(debounceValue || "") ? (
              <div
                key={index}
                className="w-full hover:bg-gray-200 px-4 py-1"
                onClick={() => handleIsClicked(option)}
              >
                {option.label}
              </div>
            ) : (
              <div
                key={index}
                className="w-full hover:bg-gray-200 px-4 py-1"
                onClick={() => handleIsClicked(option)}
              ></div>
            )
          )}
        </div>
      )}
    </div>
  );
}
