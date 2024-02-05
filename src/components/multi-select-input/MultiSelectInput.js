import React, { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

const MultiSelectInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, fetchUsers]);

  const fetchUsers = async () => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }
    const url = "https://dummyjson.com/users/search?q=" + searchTerm;
    const res = await fetch(url);
    const data = await res.json();
    setSuggestions(data.users);
  };

  const handleSelectUser = (s) => {
    setSelectedUsers([...selectedUsers, s]);
    setSelectedUserSet(new Set([...selectedUserSet, s.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    console.log(user);
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };
  return (
    <div className="mx-auto p-10 text-center w-[80vw] ">
      <div className="m-2 border-4 flex flex-wrap items-center rounded-full px-6 py-4 bg-white">
        {selectedUsers.map((s) => (
          <Pill
            className=""
            key={s.id}
            text={s.firstName + " " + s.maidenName + " " + s.lastName}
            onclick={() => handleRemoveUser(s)}
            image={s.image}
          />
        ))}
        <input
          ref={inputRef}
          className="w-[30vw] outline-none p-3 rounded-3xl bg-slate-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search"
          onKeyDown={handleKeyDown}
        />
      </div>

      {suggestions.length > 1 &&
        suggestions.map((s) =>
          !selectedUserSet.has(s.email) ? (
            <div
              key={s.id}
              className="w-[60vw] bg-white text-center mx-auto p-4 border-b border-gray-300 hover:bg-slate-400 gap-4 flex"
              onClick={() => handleSelectUser(s)}
            >
              <img src={s.image} alt="user image" className="w-8" />
              <h2>{s.firstName + " " + s.maidenName + " " + s.lastName}</h2>
            </div>
          ) : (
            <></>
          )
        )}
    </div>
  );
};

export default MultiSelectInput;
