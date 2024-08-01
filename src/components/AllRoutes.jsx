import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUserForm from '../routes/AddUserForm'
import UserList from './UserList'
import EditUserPage from './EditUserPage'

function AllRoutes() {
  return (
    <>
      <Routes>
      <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/edit" element={<EditUserPage />} />
      </Routes>
    </>
  )
}

export default AllRoutes
