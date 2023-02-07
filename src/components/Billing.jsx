import React from 'react';

const Billing = ({ data, handleChange }) => {
  const content = (
    <div className="flex-col">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="billFirstName">First Name</label>
          <input
            type="text"
            id="billFirstName"
            name="FirstName"
            placeholder="Your name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.FirstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="billLastName">Last Name</label>
          <input
            type="text"
            id="billLastName"
            name="LastName"
            placeholder="Your last name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.LastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="billAddress1">Address</label>
      <input
        type="text"
        id="billAddress1"
        name="Address1"
        placeholder="Enter your full address"
        pattern="[\w\d\s.#]{2,}"
        value={data.Address1}
        onChange={handleChange}
      />

      <label htmlFor="billAddress2" className="offscreen">
        2nd Address line
      </label>
      <input
        type="text"
        id="billAddress2"
        name="Address2"
        placeholder="Apt. 2"
        pattern="[\w\d\s.#]{2,}"
        value={data.Address2}
        onChange={handleChange}
      />

      <label htmlFor="billCity">City</label>
      <input
        type="text"
        id="billCity"
        name="City"
        placeholder="Dehradun"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.City}
        onChange={handleChange}
      />

      <label htmlFor="billState">State</label>
      <select
        id="billState"
        name="State"
        value={data.State}
        onChange={handleChange}
      >
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
      </select>

      <label htmlFor="billZipCode">Zip Code</label>
      <input
        type="text"
        id="billZipCode"
        name="ZipCode"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.ZipCode}
        onChange={handleChange}
      />
    </div>
  );

  return content;
};

export default Billing;
