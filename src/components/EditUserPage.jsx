import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useToast } from '@chakra-ui/react'
import { DataContext } from '../context/FormDataContextProvider';
import UserFormcard from './UserFormcard';

const EditUserPage = () => {
  const toast = useToast()
  const location = useLocation();
  const { item } = location.state || {};
  const [formData, setFormData] = useState(item || {});
  const navigate = useNavigate();
  const { items, setItems } = useContext(DataContext);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItems = items.map(i => (i.id === formData.id ? formData : i));
    setItems(updatedItems);
    toast({
      title: 'Edit User Data',
      description: "The user data has been successfully updated.",
      status: 'success',
      duration: 2000,    // Duration set to 2 seconds
      isClosable: true,
    })
    navigate('/');
  };

  return (
    <div className="my-10">
      <h2 className="text-xl font-medium mb-4 text-center animate__animated animate__bounce animate__delay-1s">Edit User</h2>
      <form onSubmit={handleSubmit} className="">

      {/* User form card */}
    <UserFormcard formData={formData} handeChange={handleChange} />
    <div className='text-center'>
        <button 
          type="submit" 
          className="m-4 bg-blue-500 text-white px-4 py-2 mb rounded-md shadow-2xl hover:bg-blue-400 animate__animated animate__backInUp"
        >
          Save Changes
        </button>
    </div>
      </form>
    </div>
  );
};

export default EditUserPage;
