import React from 'react'
import { Link } from 'react-router-dom'

const StudentList = () => {
  return (
    <>
      <h1 className='main_title'>All Students</h1>
      <table className='main_container'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Aayush Sinha</td>
            <td>test@test.com</td>
            <td>
              <Link to="/student">More Info</Link>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Raju</td>
            <td>test@test.com</td>
            <td>
              <Link to="/student">More Info</Link>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Sanjay</td>
            <td>test@test.com</td>
            <td>
              <Link to="/student">More Info</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default StudentList