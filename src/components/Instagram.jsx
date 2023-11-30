// const Instagram = () => {
//   return (
//     <div className="h-32 w-32">
//       <figure data-behold-id="t85VHeoptNzNvafA5ysI"></figure>
//       <script src="https://w.behold.so/widget.js" type="module"></script>
//     </div>
//   );
// };

// export default Instagram;

import { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram-feed-container w-3/5 md:w-4/5 m-24 flex flex-col items-center bg-dark-green rounded p-6 shadow-instagram ">
      <h2 className="m-2 text-lg text-white">Follow us on Instagram!</h2>
      <h4 className="mb-4 italic text-white">@molesworth_kirbywines</h4>
      <figure data-behold-id="VSpHD5CuKlSpMkKtB6ht"></figure>
    </div>
  );
};

export default Instagram;

// <figure data-behold-id="VSpHD5CuKlSpMkKtB6ht"></figure>
// <script src="https://w.behold.so/widget.js" type="module"></script>
