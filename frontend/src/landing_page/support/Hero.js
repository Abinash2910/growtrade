// import React from 'react'

// function Hero() {
//     return ( 
//         <h1>
//             Hero
//         </h1>
//      );
// }

// export default Hero;




import React from 'react';
import { FaSearch } from 'react-icons/fa';

function CreateTicket() {
  return (
    <div className="container py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Support Portal</h2>
        <button className="btn btn-primary">My tickets</button>
      </div>

      {/* Search Bar */}
      <div className="input-group">
        <span className="input-group-text bg-white">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default CreateTicket;