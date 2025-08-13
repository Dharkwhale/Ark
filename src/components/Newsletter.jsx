import React, { useState } from "react";
// import { Mail } from "lucide-react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    
      <div className="px-6 py-10 flex flex-col items-center mt-10">
        <div className="bg-gradient-to-r from-[#1ba7f3] to-[#354ae7] w-full max-w-[1300px] h-[400px] rounded-3xl border items-center  flex flex-col ">
            <div className="pt-15">
              <h1 className="text-5xl text-[#ffffff]">Subscribe to Our newsletter</h1>
              
              <p className="text-sm text-center pt-10 text-[#ffffff] ">Stay updated on the latest trends and news in tech and blockchain.
                No spammy<br /> messages, only top notch contents and notifications</p>
            </div>
        <div className="">
        <form
           onSubmit={handleSubmit}
           className="w-full md:w-xl flex flex-col gap-4 mt-8"
         >
           <input
             type="email"
             placeholder="Enter your email"
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="px-6 py-4 rounded-3xl bg-[#000000] text-[#ffffff]"
           />
           <button
             type="submit"
             className="px-6 py-4 cursor-pointer rounded-full text-[#ffffff] border border-[#ffffff] w-5/6 mx-auto mt-3"
           >
             Subscribe
           </button>
         </form>
        </div>
        </div>
      </div>

  );
}
