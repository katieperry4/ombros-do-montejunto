import axios from "axios";
import { useState } from "react";

const Email = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post(
        "https://formspree.io/f/xzbllvjz",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setSubmitted(true);
      } else {
        setError("Oops! Something went wrong");
      }
    } catch (error) {
      setError("Oops! Something went wrong");
    }
  };
  return (
    <div className="flex flex-col items-center mt-20 bg-light-green shadow-instagram rounded">
      {!submitted ? (
        <form
          method="POST"
          action="https://formspree.io/f/xzbllvjz"
          className="flex flex-col items-center p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl m-2">Sign up for updates</h2>
          <div>
            <input
              name="email"
              autoComplete="email"
              placeholder=" email@email.com"
              type="email"
              className="border-solid border 2 border-dark-green rounded m-4 w-64"
            />
            <button
              type="submit"
              className="btn bg-medium-green hover:bg-dark-green"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p>Thanks for signing up!</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Email;
