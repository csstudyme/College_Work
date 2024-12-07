import React, { useState } from "react";
function ValidateOnBlur() {
const [error, setError] = useState("");
const handleBlur = (e) => {
const email = e.target.value;
if (!email.includes("@")) {
setError("Please enter a valid email address");
} else {
setError("");
}
};

return (
<div>
<input
type="text"
onBlur={handleBlur}
placeholder="Enter your email"
/>
{error && <p style={{ color: "red" }}>{error}</p>}
</div>
);
}
export default ValidateOnBlur;