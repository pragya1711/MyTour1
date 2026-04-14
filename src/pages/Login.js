// import { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
//       <form onSubmit={handleSubmit} className="bg-black p-8 rounded-xl w-80">
//         <h2 className="text-2xl mb-4">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 text-black"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-3 text-black"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="bg-blue-500 w-full py-2">Login</button>
//       </form>
//     </div>
//   );
// }