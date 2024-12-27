import React, { useState } from 'react';
import Login from './components/Auth/Login';
import EventList from './components/Events/EventList';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <EventList />
      )}
    </div>
  );
};

export default App;
