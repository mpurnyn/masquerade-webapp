import React from 'react';

function Home() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <div style={{ textAlign: "justify" }}>
          <h1>Welcome to Masquerade!</h1>
          <p>
            Please sign in and create your first digital masquerade here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;