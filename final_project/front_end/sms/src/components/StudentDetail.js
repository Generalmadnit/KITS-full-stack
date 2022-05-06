import React from 'react'

const StudentDetail = () => {
  return (
    <>
      <h1 className='main_title'>Student Detail</h1>

      <div className='student_detail_main_container'>
        <h4 className='display_inline'>Name: </h4>
        <p className='display_inline'>Aayush Sinha</p>
        
        <br />
        <br />
        
        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Email: </h4>
            <p className='display_inline'>test@test.com</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Phone: </h4>
            <p className='display_inline'>+91-1111-111-111</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Date of Birth: </h4>
            <p className='display_inline'>01-01-1970</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Gender: </h4>
            <p className='display_inline'>Male</p>
          </div>
        </div>

        <br />

        <h4 className='margin_0'>Address: </h4>
        <p className='margin_0'>House No, <br /> Street, <br /> City, State</p>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Father Name: </h4>
            <p className='display_inline'>First Last</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Mother Name: </h4>
            <p className='display_inline'>First Last</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Guardian Name: </h4>
            <p className='display_inline'>First Last</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Guardian Number: </h4>
            <p className='display_inline'>+91-1111-111-111</p>
          </div>
        </div>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Class X Marks: </h4>
            <p className='display_inline'>90%</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Class XII Marks: </h4>
            <p className='display_inline'>90%</p>
          </div>
        </div>

        <h4 className='display_inline'>School Name: </h4>
        <p className='display_inline'> ABCD School, City</p>

        <br />
        <br />

        <h4 className='display_inline'>Hobbies and Interests: </h4>
        <p className='display_inline'>Hobby1, Hobby2, Hobby3</p>

        <br />
        <br />

        <button>Edit Details</button>

      </div>
    </>
  )
}

export default StudentDetail