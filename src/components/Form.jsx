import Billing from './Billing';
import { useState } from 'react';
const Form = () => {
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    ZipCode: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { Address2, ...otherProps } = data;

  const canSave = [...Object.values(otherProps)].every(Boolean);

  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <h2>Details</h2>

      <Billing data={data} handleChange={handleChange} />

      <button className="button" disabled={!canSave}>
        Submit
      </button>
    </form>
  );

  return content;
};

export default Form;
