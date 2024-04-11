import { useCallback, useEffect, useRef, useState } from "react";

function Pass() {
  const [length, setLength] = useState(5);
  const [numberAllow, setNumAllow] = useState(false);
  const [character, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("Copy");
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";

    if (character) str += "!@#$%^&*`~()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, character, passwordGenerator]);

  const passRef = useRef(null);


  const copyPassToCliboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied");
  }, [password]);

  return (
    <>
      <div className="w-50 mt-5 pt-4 h-100vh mx-auto text-center text-white rounded shadow-lg fw-bolder bg-secondary">
        <h2 className="text-white"> Password Generator</h2>
        <div class="input-group mb-3 py-2 px-3">
          <input
            ref={passRef}
            type="text"
            class="form-control"
            placeholder="Password"
            readOnly
            value={password}
          />
          <button
            class="btn btn-primary copy"
            onClick={copyPassToCliboard}
            type="button"
          >
            {btnText}
          </button>
        </div>
        <div className="range p-3 d-flex align-items-center">
          <input
            type="range"
            className=" form-range w-25 me-5"
            min={5}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length: {length}</label>

          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              className="ms-3 me-1"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="" className="me-4">
              Number
            </label>

            <input
              type="checkbox"
              defaultChecked={character}
              className="me-1"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pass;