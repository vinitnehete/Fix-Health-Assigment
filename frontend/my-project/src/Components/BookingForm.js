import React, { useState } from "react";
import FormDetails from "./FormDetails";

const BookingForm = () => {
    const [state , setState] = useState({name : "" , contact : ""})
    const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
    setState({
        name: "",
       contact :""
      });
   
  };

  const handlebuttonSubmit = () =>{
    setShowPopup(false)
  }

  const handelChange = (e) =>{
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    
    <div className="flex justify-center items-center py-40 shadow-2xl">
      <div className="text-black bg-white w-3/5 p-8 rounded-xl shadow-lg flex justify-evenly gap-10 py-10">
        <div className="w-1/2 flex justify-center items-center ">
          <img
            className="object-fill rounded-lg"
            src="https://img.freepik.com/free-photo/side-view-doctor-writing-prescription_23-2148231339.jpg?w=1480&t=st=1706022085~exp=1706022685~hmac=2543be3f4c6ffceac63b82a953a18eb9ae231970abffdf0884f073c697d3c888"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-2  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg">Appointment</h1>
            <h1 className="font-normal text-md">
              Book an appointment for FREE
            </h1>
          </div>
        
           
            <form className="flex flex-col gap-4 pt-4" onSubmit={handleSubmit}>
            <label className="text-sm font-light">Name</label>
            <input
              className="border p-2"
              placeholder="Enter Name"
              required
              name="name"
              value={state.name}
              onChange={handelChange}
            />

            <label className="text-sm font-light">Contact</label>
            <input
              className="border p-2"
              placeholder="Enter Mobile"
              value={state.contact}
              name="contact"
              required
              onChange={handelChange}
            />

            <button className="rounded-lg bg-blue-400 p-2">Get Started</button>
          </form> 
         
        </div>

        {showPopup ? <FormDetails handlebuttonSubmit={handlebuttonSubmit} /> : ""}
       
      </div>
    </div>
  );
};

export default BookingForm;
