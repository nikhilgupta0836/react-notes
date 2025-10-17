import React from 'react';

const UserList = () => {
  const students = [
    { id: 1, name: "Alice", age: 18, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 19, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 17, email: "charlie@example.com" },
    { id: 4, name: "David", age: 20, email: "david@example.com" },
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h1>{student.name}</h1>
          <h2>{student.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
