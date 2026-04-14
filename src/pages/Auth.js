import { useState } from "react";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // SIGNUP
  const signup = async () => {
    if (!signupData.email || !signupData.password) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const data = await res.json();
    alert(data.message);

    setIsSignup(false);
  };

  // LOGIN
  const login = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex h-screen">

      {/* LEFT IMAGE */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
          className="h-full w-full object-cover"
          alt="travel"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-[80%] max-w-md">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">
            {isSignup ? "Create an account" : "Login to your account"}
          </h1>

          {/* SWITCH */}
          <div className="mb-6 text-lg">
            <span
              onClick={() => setIsSignup(true)}
              className={`cursor-pointer ${
                isSignup ? "text-red-500 font-semibold" : ""
              }`}
            >
              Signup
            </span>

            <span className="mx-2">|</span>

            <span
              onClick={() => setIsSignup(false)}
              className={`cursor-pointer ${
                !isSignup ? "text-red-500 font-semibold" : ""
              }`}
            >
              Login
            </span>
          </div>

          {/* SIGNUP FORM */}
          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-3 p-2 border-b outline-none"
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border-b outline-none"
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border-b outline-none"
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />

              <button
                onClick={signup}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* LOGIN FORM */}
          {!isSignup && (
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border-b outline-none"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border-b outline-none"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <button
                onClick={login}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}