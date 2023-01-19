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
    <div className=" border-y-4 border-red-300 bg-gray-50 p-6 m-5 rounded-sm max-w-xs sm:max-w-sm md:max-w-2xl">
      <form
        className="pl-2 pb-1 text-lg user select-none"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center pb-8 md:flex-row md:justify-center md:gap8">
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
          <label className="text-start flex flex-col">
            <span className="md:text-start">Message</span>
            <textarea
              className=" w-full h-64 outline-cyan-500 rounded-sm resize-none shadow-inner  text-lg p-2 min-w-fit self-center text-gray-800 bg-slate-200 md:min-h-fit focus:shadow-none  focus:bg-gray-100 focus:outline-1"
              type="text"
              name="Message"
              value={inputs.Message || ""}
              onChange={handleChange}
              placeholder="Enters more details for your inquiry."
            ></textarea>
          </label>
        </div>
        <div className="flex justify-end items-center">
          <input
            className="text-lg mx-4 text-gray-50  font-semibold p-3 shadow rounded-sm border-none bg-cyan-500 active:text-gray-200 hover:text-gray-200 focus:text:gray-200 hover:cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
