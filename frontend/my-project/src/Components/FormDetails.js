import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FormDetails = ({handlebuttonSubmit}) => {
  const [state, setState] = useState({
    name: "",
    mobile: "",
    age: "",
    city: "",
    complaints: "",
    previousexp: "",
    doctor: "",
  });

  const [doctorsdata, setDoctors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Free Appointment Fix with " + state.doctor + " at " + state.city);

    setState({
      name: "",
      mobile: "",
      age: "",
      city: "",
      complaints: "",
      previousexp: "",
      doctor: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchCountry = async (city) => {
    const response = await fetch(
      "https://vinitquiz.onrender.com/doctors?city=" + city
    );
    const result = await response.json();
    setDoctors(result);
  };
  useEffect(() => {
    fetchCountry(state.city);
  }, [state.city]);
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 flex-col">
     
        <div className="bg-white p-8 rounded-xl">

        <div className="flex justify-between">
            <h1></h1>
            <Link to={"/"}>
        <button className="bg-white p-2" onClick={handlebuttonSubmit}>Close</button>
        </Link>
        </div>

          <form
            className="flex flex-col gap-2 w-[350px] pt-4"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-light">Name</label>
            <input
              className="border p-2"
              placeholder="Enter Name"
              required
              name="name"
              value={state.name}
              onChange={handleChange}
            />

            <label className="text-sm font-light">Contact</label>
            <input
              className="border p-2"
              placeholder="Enter Mobile"
              value={state.mobile}
              name="mobile"
              required
              onChange={handleChange}
              type="number"
            />

            <label className="text-sm font-light">Age</label>
            <input
              className="border p-2"
              placeholder="Enter Age"
              required
              value={state.age}
              name="age"
              onChange={handleChange}
              type="number"
            />

            <label className="text-sm font-light">City</label>
            <input
              className="border p-2"
              placeholder="Enter City"
              required
              value={state.city}
              name="city"
              onChange={handleChange}
            />

            <label className="text-sm font-light">Doctors</label>

            <select name="doctor" value={state.doctor} onChange={handleChange} className="p-2 border">
                <option>Select</option>
              {doctorsdata.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <label className="text-sm font-light">Chief Complaints</label>
            <input
              className="border p-4"
              placeholder="Enter Complaints"
              required
              value={state.complaints}
              name="complaints"
              onChange={handleChange}
            />

            {state.age > 40 ? (
              <>
                {" "}
                <label className="text-sm font-light">
                  Previous experience
                </label>
                <input
                  className="border p-4"
                  placeholder="Enter Complaints"
                  required
                  value={state.previousexp}
                  name="previousexp"
                  onChange={handleChange}
                />
              </>
            ) : (
              ""
            )}

<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
