import React from 'react';

function PhoneList({ contacts, deleteUser }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>There is no user</p>
      ) : (
        <ul>
          {contacts.map(item => (
            <li key={item.id}>
              {item.name}:{item.phone}
              <button type="button" onClick={() => deleteUser(item.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PhoneList;
