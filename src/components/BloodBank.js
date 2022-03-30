import axios from "axios";
import React, { useState } from "react";
import { REQUEST_URL } from "../CONSTANTS";
import { Toast, validateEmail } from "./helper/HelperFunctions";

const bloodbankitems = [
  {
    labname: "dummy name",
    address: "dummy address",
    landmark: "dummy",
    city: "dummy",
    pincode: "dummy",
    email: "dummy",
    mobilenumber: "dummy",
    componentsavailable: "dummy",
    license: "dummy",
    licenseissuedate: "dummy",
    opentime: "dummy",
  },
  {
    labname: "dummy name 2",
    address: "dummy address 2",
    landmark: "dummy 2",
    city: "dummy 2",
    pincode: "dummy",
    email: "dummy",
    mobilenumber: "dummy",
    componentsavailable: "dummy",
    license: "dummy",
    licenseissuedate: "dummy",
    opentime: "dummy",
  },
];
function BloodBank({ switchData, setSwitchData }) {
  const [addBankCheck, setAddBankCheck] = useState(false);
  const [addBankBtn, setAddBankBtn] = useState(false);

  const [inputValues, setInputValues] = useState({
    labname: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    email: "",
    mobilenumber: "",
    componentsavailable: "",
    license: "",
    licenseissuedate: "",
    opentime: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = (e) => {
    if (
      inputValues.labname === "" ||
      inputValues.address === "" ||
      inputValues.landmark === "" ||
      inputValues.city === "" ||
      inputValues.pincode === "" ||
      inputValues.email === "" ||
      inputValues.mobilenumber === "" ||
      inputValues.componentsavailable === "" ||
      inputValues.license === "" ||
      inputValues.licenseissuedate === "" ||
      inputValues.opentime === ""
    ) {
      Toast("error", "Some Fields are Empty");
    } else {
      if (!validateEmail(inputValues.email)) {
        Toast("error", "Email is not correct");
      } else {
        axios({
          method: "post",
          url: `${REQUEST_URL}/userroutesbloodbank/add`,
          data: {
            userid: localStorage.getItem("bloodid"),
            labname: inputValues.labname,
            email: inputValues.email,
            address: inputValues.address,
            mobilenumber: inputValues.mobilenumber,
            landmark: inputValues.landmark,
            city: inputValues.city,
            pincode: inputValues.pincode,
            opentime: inputValues.opentime,
            componentsavailable: inputValues.componentsavailable,
            license: inputValues.license,
            licenseissuedate: inputValues.licenseissuedate,
          },
        }).then((response) => {
          console.log(response.data);
          Toast("success", "BloodBank Added");
          setAddBankCheck(true);
          setTimeout(() => {
            setAddBankCheck(false);
          }, 3000);
        });
      }
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="w-2/3 mx-auto">
        <div className="pt-5">
          {addBankCheck && (
            <div className="app-color px-5 py-3 font-bold text-white">
              Bloodbank Added
            </div>
          )}
        </div>
        <div className="mt-8 text-2xl font-bold tracking-widest">
          Bloodbanks
        </div>
        <div className="mt-2 text-md font-semibold text-gray-600">
          Total number of bloodbank : 100
        </div>
        <div className="flex justify-between items-center px-5 mt-8 add-bloodbank py-3 ">
          <div className="text-lg text-gray-600">Add new BloodBank</div>
          <div
            className="app-color px-8 font-bold py-2 rounded-full text-white cursor-pointer"
            onClick={(e) => {
              setAddBankBtn(!addBankBtn);
            }}
          >
            Add
          </div>
        </div>

        {addBankBtn && (
          <div className="bloodbank-form">
            <div className="logo-color text-4xl my-8 font-bold tracking-wider">
              Add BloodBank
            </div>

            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="logo-color font-bold">
                  Labname *
                </label>
                <input
                  type="text"
                  name="labname"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="password" className="logo-color font-bold">
                  Email *
                </label>
                <input
                  type="password"
                  name="email"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-full h-28">
                <label htmlFor="fullname" className="logo-color font-bold">
                  Adress *
                </label>
                <textarea
                  type="textarea"
                  rows="15"
                  name="mobilenumber"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="logo-color font-bold">
                  Mobile *
                </label>
                <input
                  type="text"
                  name="mobilenumber"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="password" className="logo-color font-bold">
                  Landmark *
                </label>
                <input
                  type="password"
                  name="landmark"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="logo-color font-bold">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="password" className="logo-color font-bold">
                  Pin Code *
                </label>
                <input
                  type="password"
                  name="pincode"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="logo-color font-bold">
                  Open Time *
                </label>
                <select
                  name="opentime"
                  id="opentime"
                  className="bloodbank-input-border px-3 py-1"
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="12*7">12*7 Day</option>
                  <option value="24*7">24*7</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="password" className="logo-color font-bold">
                  Components Available *
                </label>
                <select
                  name="componentsavailable"
                  id="componentsavailable"
                  className="bloodbank-input-border px-3 py-1"
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="flex mx-auto mt-4 space-x-16">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="logo-color font-bold">
                  License *
                </label>
                <input
                  type="text"
                  name="license"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="password" className="logo-color font-bold">
                  License Issue Date *
                </label>
                <input
                  type="date"
                  name="licenseissuedate"
                  className="bloodbank-input-border px-3 py-1 w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="my-8 text-white">
              <div
                className="app-color px-10 py-4 text-center font-bold cursor-pointer"
                onClick={handleSubmit}
              >
                Add
              </div>
            </div>
          </div>
        )}

        {bloodbankitems.map((val, index) => {
          return (
            <div className="py-3 px-2 my-4 all-bloodbanks">
              <div className="bank-item flex">
                <div className="font-bold text-4xl w-1/2 flex justify-center items-center logo-color">
                  BLOOD SPOT
                </div>
                <div className="px-8 w-full">
                  <div className="text-4xl font-semibold w-1/2">
                    {val.labname}
                  </div>
                  <div>
                    <div>
                      <span className="font-bold">Address :</span>
                      {val.address}
                    </div>
                    <div>
                      <span className="font-bold">Landmark :</span>
                      {val.landmark}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">City :</span>
                      {val.city}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">Pin-code :</span>
                      {val.pincode}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">Email :</span>
                      {val.email}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">Mobile :</span>
                      {val.mobilenumber}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">
                        Blood Compone Available :
                      </span>
                      {val.componentsavailable}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">License :</span>
                      {val.license}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">License Obtain Date :</span>
                      {val.licenseissuedate}
                    </div>
                    <div>
                      {" "}
                      <span className="font-bold">Open-time :</span>
                      {val.opentime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BloodBank;
