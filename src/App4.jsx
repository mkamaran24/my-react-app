import React from "react";

function App4() {
  const [formData, setForm] = React.useState({
    email: "",
    passwordForm: "",
    confirmPassword: "",
    isMarketing: false,
  });
  function handleChange(event) {
    const { type, name, checked, value } = event.target;
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData.passwordForm === formData.confirmPassword);

    if (formData.passwordForm == formData.confirmPassword) {
      console.log("Successfully signed up");
      alert("Successfully signed up");
      if (formData.isMarketing) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("passwords to not match");
      alert("passwords to not match");
    }
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="passwordForm"
          value={formData.passwordForm}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="isMarketing"
            checked={formData.isMarketing}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default App4;
