import { useRef, useState } from "react";
export const FormA = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = () => {
    alert(`Your name is ${data?.name} && your email is ${data?.email}`);
  };
  return (
    <>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Aanshu Dwiwedi"
          onChange={(e) => {
            setData((preVal) => {
              return { ...preVal, name: e.target.value };
            });
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Aanshu@Dwiwedi"
          onChange={(e) => {
            setData((preVal) => {
              return { ...preVal, email: e.target.value };
            });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const FormB = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert(`Your name is ${name} && your email is ${email}`);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input name="name" placeholder="Aanshu Dwiwedi" ref={nameRef} />
        <input
          type="email"
          name="email"
          placeholder="aanshu@dwiwedi"
          ref={emailRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

/* 
Form Validation for name and email
name should be alphabet and space only
name should be minium 3 character

email should verify the email regx pattern

*/
