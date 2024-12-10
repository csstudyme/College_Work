import React, { useState } from "react";
function BasicFormValidation() {
const [formData, setFormData] = useState({ name: "", email: "" });
const [errors, setErrors] = useState({});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};
const validate = () => {
const newErrors = {};
if (!formData.name) newErrors.name = "Name is required";
if (!formData.email) newErrors.email = "Email is required";
else if (!/\S+@\S+\.\S+/.test(formData.email))
newErrors.email = "Email is invalid";
setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
e.preventDefault();
if (validate()) {
alert("Form submitted successfully!");
}
};
return (
<form onSubmit={handleSubmit}>
<div>
<label>Name:</label>

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
/>
{errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
</div>
<div>
<label>Email:</label>
<input
type="text"
name="email"
value={formData.email}
onChange={handleChange}
/>
{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
</div>
<button type="submit">Submit</button>
</form>
);
}
export default BasicFormValidation;