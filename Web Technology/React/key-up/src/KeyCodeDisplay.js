import React, { useState } from "react";
function KeyCodeDisplay() {
const [keyCode, setKeyCode] = useState("");
const handleKeyUp = (e) => {
setKeyCode(`Key Code: ${e.keyCode}`);
};
return (
<div>
<input
type="text"
onKeyUp={handleKeyUp}
placeholder="Press a key..."
/>
<p>{keyCode}</p>
</div>
);
}
export default KeyCodeDisplay;