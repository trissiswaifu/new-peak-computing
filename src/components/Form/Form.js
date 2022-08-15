import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { baseApi } from "../../Config/api";
import { LabelInput } from "./LabelInput";
//TODO animation styles on submit button

const FormWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary.dark};
  max-width: 500px;
  padding: 1;
  /* padding: 2rem; */
  /* margin: 3rem; */
`;

const form = css`
  /* display: flex;
  flex-direction: column; */
  color: white;
  /* padding: 2rem; */
  span {
    padding-left: 0.5rem;
    padding-bottom: 0.25rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.1rem;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  label {
    display: flex;
    flex-direction: column;

    input {
      box-shadow: 0px 2px 0px 0px ${(props) => props.theme.colors.primary.main},
        0px -2px 0px 0px ${(props) => props.theme.colors.grey["800"]};
      font-size: 1.1rem;
      padding: 0.5rem;
      color: ${(props) => props.theme.colors.grey[700]};
      max-width: 100%;
    }
  }
`;

const customerNamesWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const NameLabelWrapper = styled(LabelWrapper)`
  label {
    display: flex;
    flex-direction: column;

    input {
      color: ${(props) => props.theme.colors.grey[700]};
      font-size: 1.1rem;
      padding: 0.5rem;
      max-width: 200px;
    }
  }
`;

const CompanyNameLabelWrapper = styled(LabelWrapper)``;

const EmailLabelWrapper = styled(LabelWrapper)``;

const SubjectLabelWrapper = styled(LabelWrapper)``;

const MessageLabelWrapper = styled(LabelWrapper)`
  input {
    border-top: 3px solid ${(props) => props.theme.colors.dark};
  }
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;

  input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid black;
    width: 25%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.grey[50]};
    box-shadow: 0px 4px 6px 0px ${(props) => props.theme.colors.grey[700]};
    &:active {
      box-shadow: none;
    }
    &:hover {
      cursor: pointer;
      box-shadow: none;
    }
  }
`;

export const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setInputs((values) => ({
    //   ...values,
    //   CustomerName: `${inputs.firstName} ${inputs.lastName}`,
    // }));

    console.log(inputs);
    // try {
    //   const response = await baseApi.post("ContactForm/", inputs);

    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit} css={form}>
        <div css={customerNamesWrapper}>
          <div>
            <NameLabelWrapper>
              <LabelInput
                autoComplete={"off"}
                labelText="First Name"
                type={"text"}
                name={"firstName"}
                value={inputs.firstName || ""}
                onChange={handleChange}
              />
            </NameLabelWrapper>
          </div>
          <div>
            <NameLabelWrapper>
              <LabelInput
                autoComplete={"off"}
                labelText="Last Name (optional)"
                type={"text"}
                name={"lastName"}
                value={inputs.lastName || ""}
                onChange={handleChange}
              />
            </NameLabelWrapper>
          </div>
        </div>
        <CompanyNameLabelWrapper>
          <LabelInput
            labelText="Company Name"
            type={"text"}
            name={"CompanyName"}
            value={inputs.CompanyName || ""}
            onChange={handleChange}
          />
        </CompanyNameLabelWrapper>
        <SubjectLabelWrapper>
          <LabelInput
            labelText="Subject"
            type={"text"}
            name={"Subject"}
            value={inputs.Subject || ""}
            onChange={handleChange}
          />
        </SubjectLabelWrapper>
        <EmailLabelWrapper>
          <LabelInput
            labelText="Your Email:"
            type={"email"}
            name={"CustomerEmail"}
            value={inputs.CustomerEmail || ""}
            onChange={handleChange}
          />
        </EmailLabelWrapper>
        <MessageLabelWrapper>
          <LabelInput
            labelText="Message"
            type={"text"}
            name={"Message"}
            value={inputs.Message || ""}
            onChange={handleChange}
          />
        </MessageLabelWrapper>
        <SubmitButtonWrapper>
          <input type="submit" />
        </SubmitButtonWrapper>
      </form>
    </FormWrapper>
  );
};
