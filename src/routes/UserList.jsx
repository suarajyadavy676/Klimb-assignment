import React, { useState, useContext, useCallback } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { DataContext } from "../context/FormDataContextProvider";
import debounce from 'lodash/debounce';
import UserListTable from '../components/UserListTable';

function UserList() {
  const { items } = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Debounced function for handling input change(restricts a function from running again after 1 second)
  const handleInputChange = useCallback(
    debounce((query) => {
      if (query) {
        const filteredSuggestions = items.filter(item =>
          item.email.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }, 1000), // Debounce delay of 1 second
    [items]
  );

  // Handle input change event
  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleInputChange(query);
  };

  // Handle suggestion click event
  const handleSuggestionClick = (email) => {
    setSearchQuery(email);
    setSuggestions([]);
  };

  return (
    <div className='sm:m-10 m-5 animate__animated animate__zoomIn'>
      <div className='flex justify-between'>
        <h1 className='sm:text-2xl text-xl text-green-600'>Manage users</h1>
        <button className='bg-green-600 text-white px-2 py-1 rounded-md'>
          <Link to="/add-user" className='flex items-center'>
            <IoIosAddCircleOutline className='inline mr-1' /> Add user
          </Link>
        </button>
      </div>

      {/* Autocomplete input for email */}
      <div className='relative'>
        <input
          type="email"
          placeholder='Search for email'
          value={searchQuery}
          onChange={handleChange}
          className='bg-gray-100 my-6 p-2 w-60 rounded-md'
        />
        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className='absolute bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-auto z-10'>
            {suggestions.map((item) => (
              <li
                key={item.id}
                className='p-2 cursor-pointer hover:bg-gray-200'
                onClick={() => handleSuggestionClick(item.email)}
              >
                {item.firstName} {item.lastName} - {item.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Table */}
      <UserListTable items={items.filter(item => item.email.toLowerCase().includes(searchQuery.toLowerCase()))} />
    </div>
  );
}

export default UserList;
