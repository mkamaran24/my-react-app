import React from "react";

function App3() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFreindly: true,
    employment: "",
    favColor: "",
  });

  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleForm(event) {
    event.preventDefault();
    console.log("form submited successfully!");
  }

  return (
    <form onSubmit={handleForm}>
      <h1>Test FORM React</h1>
      <label htmlFor={id + "-firstname"}>First Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        id={id + "-firstName"}
      />
      <label htmlFor={id + "-lastname"}>Last Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        id={id + "-lastname"}
      />
      <label htmlFor={id + "-email"}>Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        id={id + "-email"}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <button>Submit!</button>
    </form>
  );
}

export default App3;
