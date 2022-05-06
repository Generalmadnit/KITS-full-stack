import React from 'react'

const AdmissionForm = () => {
  return (
    <>
      <h1 className="main_title">Admission Form</h1>
      <div className="main_container">
        <form action='http://localhost:8080/admission' method='POST'>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <br />
          <input type="date" class="full_width" placeholder="Date of Birth" />
          <br />
          <br />
          <p className='margin_2'>Gender:</p>
          <input type="radio" name="gender" class="no_width" />Male
          <input type="radio" name="gender" class="no_width" />Female
          <input type="radio" name="gender" class="no_width" />Other
          <br />
          <br />
          <textarea placeholder="Address" class="full_width"></textarea>
          <br />
          <br />
          <input type="text" placeholder="Father Name" />
          <input type="text" placeholder="Mother Name" />
          <br/>
          <input type="text" placeholder="Guardian Name" />
          <input type="number" placeholder="Guardin Phone Number" />
          <br />
          <br />
          <input type="number" placeholder="Class X Marks" />
          <input type="number" placeholder="Class XII Marks" />
          <br/>
          <input type="text" placeholder="School Name (Class XII)" class="full_width" />
          <br />
          <br />
          <p className='margin_2'>Hobbies and Interests:</p>
          <input type="checkbox" name="interest" class="no_width" />Cricket
          <input type="checkbox" name="interest" class="no_width" />Football
          <input type="checkbox" name="interest" class="no_width" />Swimming
          <input type="checkbox" name="interest" class="no_width" />Gaming
          <input type="checkbox" name="interest" class="no_width" />Basketball
          <br />
          <br />
          <input type="submit" value="Apply" class="full_width button" />
        </form>
      </div>
    </>
  )
}

export default AdmissionForm