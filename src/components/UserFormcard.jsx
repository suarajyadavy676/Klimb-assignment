import React from 'react'

function UserFormcard({formData,handeChange}) {
  return (
    <div className='w-[90%] mx-auto my-10 animate__animated animate__backInDown'>
    <p className='text-lg font-thin text-right md:mr-10'>All fields are mendatory</p>
      <div className="grid grid-cols-1 justify-center items-center gap-4 sm:grid-cols-2 my-10 shadow-xl md:w-[65%] mx-auto p-5">
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="text-bold">
              First Name <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              id="firstName"
              name="firstName"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="text-bold">
              Last Name <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              id="lastName"
              name="lastName"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="text-bold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Email ID */}
          <div>
            <label htmlFor="email" className="text-bold">
              Email Id <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="email"
              placeholder="Email Id"
              value={formData.email}
              id="email"
              name="email"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="text-bold">
              Role <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              id="role"
              name="role"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="text-bold">
              Location <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              id="location"
              name="location"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="text-bold">
              Department <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Department"
              value={formData.department}
              id="department"
              name="department"
              onChange={handeChange}
              required
              className="border-2 mt-2 px-2 py-1"
            />
          </div>
        </div>
    </div>
  )
}

export default UserFormcard
