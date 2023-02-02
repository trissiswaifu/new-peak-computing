import React, { useState } from "react";
import { api } from "../../Config/api";
import { LabelInput } from "./LabelInput";

//TODO have an autofill for when user comes from a service link and fills out the subject for what page they were from

export const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    try {
      const response = await api.post("ContactForm/", inputs);

      if (response) {
        console.log("response:", response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" m-5 max-w-xs rounded-sm border-y-4 border-red-300 bg-gray-50 p-6 dark:border-red-800 dark:bg-slate-600 sm:max-w-sm md:max-w-2xl">
      <form
        className="user select-none pl-2 pb-1 text-lg"
        onSubmit={handleSubmit}
      >
        <div className="md:gap8 flex flex-col items-center pb-8 md:flex-row md:justify-center">
          <div>
            <div className="flex-row justify-center p-8">
              <LabelInput
                autoComplete={"off"}
                labelText="First Name"
                type={"text"}
                name={"CustomerFirstName"}
                value={inputs.CustomerFirstName || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex-row justify-center p-8">
              <LabelInput
                autoComplete={"off"}
                labelText="Last Name (optional)"
                type={"text"}
                name={"CustomerLastName"}
                value={inputs.CustomerLastName || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center p-8">
          <LabelInput
            labelText="Company Name"
            type={"text"}
            name={"CompanyName"}
            value={inputs.CompanyName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-center p-8">
          <LabelInput
            labelText="Phone Number"
            type={"tel"}
            name={"Phone"}
            value={inputs.Phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-center p-8">
          <LabelInput
            labelText="Email Address"
            type={"email"}
            name={"CustomerEmail"}
            value={inputs.CustomerEmail || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-center p-8">
          <LabelInput
            labelText="Subject"
            type={"text"}
            name={"Subject"}
            value={inputs.Subject || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-center p-4">
          <label className="flex flex-col text-start">
            <span className="md:text-start">Message</span>
            <textarea
              className=" h-64 w-full min-w-fit resize-none self-center rounded-sm  bg-slate-200 p-2 text-lg text-gray-800 shadow-inner outline-cyan-500 focus:bg-gray-100 focus:shadow-none  focus:outline-1 md:min-h-fit"
              type="text"
              name="Message"
              value={inputs.Message || ""}
              onChange={handleChange}
              placeholder="Enters more details for your inquiry."
            ></textarea>
          </label>
        </div>
        <div className="flex items-center justify-end">
          <input
            className="focus:text:gray-200 mx-4 rounded-sm  border-none bg-cyan-500 p-3 text-lg font-semibold text-gray-50 shadow hover:cursor-pointer hover:text-gray-200 active:text-gray-200"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
