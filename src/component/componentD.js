import React, { useEffect, useState, useCallback } from 'react';

function User({ userId }) {
  const [user, setUser] = useState({ name: '', email: '' });
// without useCallback
//   const fetchUser = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     const newUser = await res.json();
//     setUser(newUser);
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [userId]);


const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const newUser = await res.json();
    setUser(newUser);
  }, [userId]);
  
  useEffect(() => {
    fetchUser();
  }, [fetchUser]); 
  return (
    <div>
        {user.name} {user.email}
    </div>
  );
}

export default User;