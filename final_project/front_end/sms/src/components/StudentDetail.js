import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {
  // const { student_id } = useParams();
  const params = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [guardianName, setGuardianName] = useState();
  const [guardianPhoneNumber, setGuardianPhoneNumber] = useState();
  const [classXMark, setClassXMark] = useState("");
  const [classXIIMark, setClassXIIMark] = useState("");
  const [classXIISchool, setClassXIISchool] = useState("");
  const [interests, setInterests] = useState([]);
  const [isEditing, setEdit] = useState(false);


  useEffect(() => {
    fetch('http://localhost:8080/single_student?id=' + params.student_id)
    .then((res) => {
      return res.json();
    }).then((data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPhone(data.phoneNumber);
      setDateOfBirth(data.dateOfBirth);
      setGender(data.gender);
      setAddress(data.address);
      setFatherName(data.fatherName);
      setMotherName(data.motherName);
      setGuardianName(data.guardianName);
      setGuardianPhoneNumber(data.guardianPhoneNumber);
      setClassXMark(data.classXMark);
      setClassXIIMark(data.classXIIMark);
      setClassXIISchool(data.classXIISchool);
      setInterests(data.interests);
    })
  }, [params]);

  const showDisplayContent = () => {
    return(
      <>
        <h4 className='display_inline'>Name: </h4>
        <p className='display_inline'>{firstName} {lastName}</p>
        
        <br />
        <br />
        
        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Email: </h4>
            <p className='display_inline'>{email}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Phone: </h4>
            <p className='display_inline'>{phone}</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Date of Birth: </h4>
            <p className='display_inline'>{dateOfBirth}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Gender: </h4>
            <p className='display_inline'>{gender}</p>
          </div>
        </div>

        <br />

        <h4 className='margin_0'>Address: </h4>
        <p className='margin_0'>{address}</p>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Father Name: </h4>
            <p className='display_inline'>{fatherName}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Mother Name: </h4>
            <p className='display_inline'>{motherName}</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Guardian Name: </h4>
            <p className='display_inline'>{guardianName}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Guardian Number: </h4>
            <p className='display_inline'>{guardianPhoneNumber}</p>
          </div>
        </div>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Class X Marks: </h4>
            <p className='display_inline'>{classXMark}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Class XII Marks: </h4>
            <p className='display_inline'>{classXIIMark}</p>
          </div>
        </div>

        <h4 className='display_inline'>School Name: </h4>
        <p className='display_inline'>{classXIISchool}</p>

        <br />
        <br />

        <h4 className='display_inline'>Hobbies and Interests: </h4>
        <p className='display_inline'>{interests.map((single_interest, index) => {
          return(
          <span key={index}>
            {index > 0 ? (<>, &nbsp;</>): false}
            {single_interest}
          </span>);
        })}</p>

        <br />
        <br />

        <button onClick={() => setEdit(true)}>Edit Details</button>
      </>
    );
  };

  const showEditContent = () => {
    return(
      <>
        <form action={'http://localhost:8080/single_student?id=' + params.student_id} method="POST">
          <h4 className='display_inline'>Name: </h4>
          <input type="text" placeholder="First Name" name='first_name' className='shortWidth' value={firstName} />
          <input type="text" placeholder="Last Name" name='last_name' className='shortWidth' value={lastName}/>

          <br />
          <br />
        
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Email: </h4>
              <input type="email" placeholder="Email" name='email' value={email} />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Phone: </h4>
              <input type="number" placeholder="Phone Number" name='phone_number' value={phone} />
            </div>
          </div>
      
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Date of Birth: </h4>
              <input type="date" placeholder="Date of Birth" name='date_of_birth' value={dateOfBirth} />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Gender: </h4>
              <input type="radio" name="gender" className="no_width" value="male" /> Male
              <input type="radio" name="gender" className="no_width" value="female" /> Female
              <input type="radio" name="gender" className="no_width" value="other" /> Other
            </div>
          </div>
          
          <br />
          
          <h4 className='margin_0'>Address: </h4>
          <textarea placeholder="Address" className="full_width" name='address'>{address}</textarea>
          
          <br />
          <br />
          
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Father Name: </h4>
              <input type="text" placeholder="Father Name" name='father_name' value={fatherName}/>
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Mother Name: </h4>
              <input type="text" placeholder="Mother Name" name='mother_name' value={motherName}/>
            </div>
          </div>

          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Guardian Name: </h4>
              <input type="text" placeholder="Guardian Name" name='guardian_name' value={guardianName} />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Guardian Number: </h4>
              <input type="number" placeholder="Guardin Phone Number" name='guardian_phone_number' value={guardianPhoneNumber} />
            </div>
          </div>
          
          <br/>

          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Class X Marks: </h4>
              <input type="number" placeholder="Class X Marks" name='class_x_mark' value={classXMark} />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Class XII Marks: </h4>
              <input type="number" placeholder="Class XII Marks" name='class_xii_mark' value={classXIIMark}/>
            </div>
          </div>

          <h4 className='display_inline'>School Name: </h4>
          <input type="text" placeholder="School Name (Class XII)" name='class_xii_school' value={classXIISchool} />
          
        
          <br />
          <br />
          
          <h4 className='display_inline'>Hobbies and Interests: </h4>
          <input type="checkbox" name="interests" className="no_width" value="cricket" /> Cricket
          <input type="checkbox" name="interests" className="no_width" value="football" /> Football
          <input type="checkbox" name="interests" className="no_width" value="swimming" /> Swimming
          <input type="checkbox" name="interests" className="no_width" value="gaming" /> Gaming
          <input type="checkbox" name="interests" className="no_width" value="basketball" /> Basketball
          
          <br />
          <br />
          
          <button onClick={() => setEdit(false)}>Cancel</button>
          &nbsp;
          <input type="submit" value="Update Record" className="button no_width" />
        </form>
      </>
    );
  }

  return (
    <>
      <h1 className='main_title'>Student Detail</h1>

      <div className='student_detail_main_container'>
        {isEditing ? showEditContent(): showDisplayContent()}
      </div>
    </>
  )
}

export default StudentDetail