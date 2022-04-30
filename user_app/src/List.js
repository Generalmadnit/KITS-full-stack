import React, {useEffect, useState} from 'react'

const List = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fn = async() => {
      const result = await fetch("https://reqres.in/api/users?page=2");
      const user_list = await result.json();
      setUserList(user_list.data);
      console.log(user_list.data);
    };

    fn();
  }, []);

  return (
    <ul>
      {userList.map((singleUser) => {
        return (
          <li>
            {/* <img src={singleUser.avatar} /> */}
            {singleUser.first_name} {singleUser.last_name} <a href='#'>{singleUser.email}</a>
          </li>
        );
        
      })}
    </ul>
  )
}

export default List