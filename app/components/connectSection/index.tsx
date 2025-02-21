import { useFetcher } from "@remix-run/react";
import { ConnectComponent } from "./connect-component";
import { useState } from "react";

export const ConnectSection = () => {
  const fetcher = useFetcher();
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const name = emailDetails.name;
    const email = emailDetails.email;
    const message = emailDetails.message;
    const phone = emailDetails.phone;
    let errors = { name: "", email: "", message: "" };

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    setFormErrors(errors);

    if (errors.name || errors.email || errors.message) {
      return; // Stop submission if there are validation errors
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("message", message);
    formData.append("phone", phone);
    fetcher.submit(formData, { method: "post", action: "/email-action" });
  };

  return (
    <div className="w-full h-auto my-20 px-5 lg:px-32 md:px-16 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
        {/* Connect Section */}
        <div className="lg:col-span-4 flex flex-col  lg:hidden mb-10">
          <ConnectComponent onClickHandler={handleSubmit} />
        </div>

        {/* Form Section */}
        <div className="lg:col-span-6 text-white">
          <div className="w-full space-y-5">
            <div>
              <label
                className="block text-sm font-medium text-white"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white"
                required
                onChange={onChangeHandler}
              />
              {formErrors.name && (
                <p className="text-nexora-pink text-sm">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white"
                required
                onChange={onChangeHandler}
              />
              {formErrors.email && (
                <p className="text-nexora-pink text-sm">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white"
                htmlFor="phone"
              >
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white"
                required
                onChange={onChangeHandler}
              />
              {formErrors.message && (
                <p className="text-nexora-pink text-sm">{formErrors.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="lg:col-span-4 lg:flex flex-col lg:ms-10 hidden">
          <ConnectComponent onClickHandler={handleSubmit} />
        </div>
        <div
          className="flex lg:hidden w-fit  mt-10 px-8 lg:px-10 bg-nexora-pink hover:bg-opacity-80 p-5 rounded-full items-center cursor-pointer"
          onClick={handleSubmit}
        >
          <p className="text-white me-2 text-sm md:text-base">
            Leave us a message
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
