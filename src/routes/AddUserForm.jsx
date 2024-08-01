import React, { useContext, useState } from "react";
import { DataContext } from "../context/FormDataContextProvider";
import { useNavigate } from "react-router-dom";
import UserFormcard from "../components/UserFormcard";
import { useToast } from "@chakra-ui/react";

function AddUserForm() {
  let formObj = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    role: "",
    location: "",
    department: "",
  };
  let toast = useToast()
  const navigate = useNavigate();
  const [formData, setFormData] = useState(formObj);
  const { items, setItems} = useContext(DataContext);

  //handle change
  function handeChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  //Submit form
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);

    // Check if the email already exists in the items list
    const emailExists = items.some((item) => item.email === formData.email);

    if (emailExists) {
      alert("This email is already present.");
      return; // Stop further execution if email is already present
    }

    // Proceed to add the new item
    const newItem = { id: Date.now(), ...formData };
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items)
    toast({
      title: 'User Data Submitted',
      description: "The user data has been successfully submitted and added",
      status: 'success',
      duration: 2000, // Duration set to 2 seconds
      isClosable: true,
    })
    navigate('/')
  }
  return (
    <div className="my-10">
    <h1 className="text-xl font-serif text-center animate__animated animate__bounce animate__delay-1s">Add User form</h1>
      <form onSubmit={handleSubmit}>
     {/* user form */}
       <UserFormcard formData={formData} handeChange={handeChange} />
        {/* Submit */}

        <input
          type="submit"
          className="mx-[50%] bg-green-600 text-white px-4 py-1 rounded-md hover:cursor-pointer hover:bg-green-500 animate__animated animate__backInUp"
        />
      </form>
    </div>
  );
}

export default AddUserForm;
