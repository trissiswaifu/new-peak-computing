import React, { useState } from "react";
import { baseApi } from "../../Config/api";
import { LabelInput } from "./LabelInput";
//TODO animation styles on submit button

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
      const response = await baseApi.post("ContactForm/", inputs);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" bg-gray-300 p-2 rounded">
      <form
        className="bg-cyan-900 pl-2 pb-1 font-mono text-lg user select-none"
        onSubmit={handleSubmit}
      >
        <div className="flex-col items-center pb-8 md:flex-row md:justify-center md:gap8 ">
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
        <div className="flex-row justify-center p-8">
          <LabelInput
            labelText="Company Name"
            type={"text"}
            name={"CompanyName"}
            value={inputs.CompanyName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row justify-center p-8">
          <LabelInput
            labelText="Phone Number"
            type={"tel"}
            name={"Phone"}
            value={inputs.Phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row justify-center p-8">
          <LabelInput
            labelText="Email Address"
            type={"email"}
            name={"CustomerEmail"}
            value={inputs.CustomerEmail || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row justify-center p-8">
          <LabelInput
            labelText="Subject"
            type={"text"}
            name={"Subject"}
            value={inputs.Subject || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row justify-center p-8">
          <label className="flex-col">
            <span>Message</span>
            <textarea
              className="rounded-sm min-h-full resize-none shadow text-lg p-2 text-gray-800 bg-gray-100 focus:outline-none focus:border-cyan-300 focus:shadow-cyan-300 md:min-h-[12ch] w-96"
              type="text"
              name="Message"
              value={inputs.Message || ""}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          <input
            className="font-mono text-base font-semibold w-1/4 min-w-[100px] rounded-sm p-3 border-none shadow-none bg-cyan-700 text-gra-50 active:opacity-90 hover:opacity-90 hover:cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
