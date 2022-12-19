import React, { useState } from 'react'


export default function Form() {
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    mobile: ""
  });
  const [errorData, setErrorData] = useState({
    name: "",
    age: "",
    email: "",
    mobile: ""
  });

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "Name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "mobile":
        if (!value || value.trim() === "") {
          return "Mobile number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
          return "Enter a valid mobile number.";
        } else {
          return "";
        }
      case "age":
        if (!value) {
          return "Age is Required";
        } else if (value.length < 1 || value.length > 2) {
          return "Please fill appropriate age";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  const updateFormData = event => {
    setErrorData({
      ...errorData,
      [event.target.name]: validate(event.target.name, event.target.value)
    });
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }


  const onFormSubmit = (event) => {
    event.preventDefault()
    if (name && age && email && mobile)
      setShowData(true)
  }

  const resetForm = () => {
    setFormData({
      ...formData,
      name: '',
      age: '',
      email: '',
      mobile: ''
    });
    setShowData(false)
  }

  const { name, age, email, mobile } = formData;


  return (
    <div className="center">
      <section>
        <div>
          <input
            value={name}
            onChange={e => updateFormData(e)}
            placeholder="name"
            type="text"
            name="name"
            required
          />
          <span className="text-danger">{errorData.name}</span>
        </div>
        <div>
          <input
            value={age}
            onChange={e => updateFormData(e)}
            placeholder="Age"
            type="number"
            name="age"
            maxlength="2"
            required
          />
          <span className="text-danger">{errorData.age}</span>
        </div>

        <div>
          <input
            value={email}
            onChange={e => updateFormData(e)}
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <span className="text-danger">{errorData.email}</span>
        </div>
        <div>
          <input
            value={mobile}
            onChange={e => updateFormData(e)}
            placeholder="Mobile number"
            type="number"
            name="mobile"
            required
          />
          <span className="text-danger">{errorData.mobile}</span>
        </div>
        <button onClick={e => onFormSubmit(e)}>submit</button>
      </section>
      {showData &&
        <div>
          <p>Name : {name}</p>
          <p>Age : {age}</p>
          <p>Email : {email}</p>
          <p>Ph Number : {mobile}</p>
          <button onClick={resetForm}>reset</button>
        </div>}

    </div>
  )
}
