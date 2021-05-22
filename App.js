import React, { Component } from "react";
import countries from "./countries";
import states from "./states";

export default function App() {
  const [companyName, setCompanyName] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [contactPhone, setContactPhone] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [timeInBusiness, setTimeInBusiness] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      CompanyName: ${companyName}
      ContactName: ${contactName}
      ContactPhone: ${contactPhone}
      ContactEmail: ${contactEmail}
      Address: ${address}
      City: ${city}
      State: ${state}
      Zip: ${zip}
      TimeInBusiness: ${timeInBusiness}
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Company Sign Up</h1>

      <label>
        Company Name:
        <input
          name="companyName"
          type="companyName"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
          required />
      </label>

      <label>
        Contact Name:
        <input
          name="contactName"
          type="contactName"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
          required />
      </label>

      <label>
        Contact Phone:
        <input
          name="contactPhone"
          type="contactPhone"
          value={contactPhone}
          onChange={e => setContactPhone(e.target.value)}
          required />
      </label>


     <label>
        Contact Email:
        <input
          name="contactEmail"
          type="contactEmail"
          value={contactEmail}
          onChange={e => setContactEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Address:
        <input
          name="address"
          type="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required />
      </label>

      <label>
        City:
        <input
          name="city"
          type="city"
          value={city}
          onChange={e => setCity(e.target.value)}
          required />
      </label>

      <label>
        State:
        <select
          name="state"          
          value={state}
          onChange={e => setState(e.target.value)}
          required >
          <option key=""></option>
          {states.map(state => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </label>

       <label>
        Zip:
        <input
          name="zip"
          type="zip"
          value={zip}
          onChange={e => setZip(e.target.value)}
          required />
      </label>

      <label>
        Length of Time In Business:
        <input
          name="timeInBusiness"
          type="timeInBusiness"
          value={timeInBusiness}
          onChange={e => setTimeInBusiness(e.target.value)}
          required />
      </label>
            
      <div className="form-check">
        <label>Windows<input
            type="radio"
            name="react-tips"
            value="Windows"
            checked={false}
            className="form-check-input"/>  
        </label>
      </div>
        <div className="form-check">
          <label>Roofing
            <input
              type="radio"
              name="react-tips"
              value="Roofing"
              checked={false}
              className="form-check-input"
            />           
          </label>
        </div>

        <div className="form-check">
          <label>Solar
            <input
              type="radio"
              name="react-tips"
              value="Solar"
              checked={false}
              className="form-check-input"
            />           
          </label>
        </div>    

      <button>Submit</button>
    </form>
  );
}
