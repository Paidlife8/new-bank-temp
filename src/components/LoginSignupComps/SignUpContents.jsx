"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "GBP", name: "British Pound" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
];

const SignUpContents = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "other",
    address: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    transactionPin: "",
    accountType: "",
    currency: "",
    occupation: "",
    profilePic: null,
  });
  const [errors, setErrors] = useState({});
  const [registering, setRegistering] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData, "formdata");
  };

  const validate = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
      if (!formData.userName) newErrors.userName = "userName is required";
      if (!formData.email) newErrors.email = "email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of Birth is required";
      // if (!formData.gender) newErrors.gender = "Gender is required";
    } else if (step === 2) {
      if (!formData.address) newErrors.address = "Home Address is required";
      if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.phoneNumber)
        newErrors.phoneNumber = "Phone Number is required";
    } else if (step === 3) {
      if (!formData.transactionPin)
        newErrors.transactionPin = "Account Pin is required";
      if (!formData.accountType)
        newErrors.accountType = "Account Type is required";
      if (!formData.currency) newErrors.currency = "Currency is required";
      if (!formData.occupation) newErrors.occupation = "Occupation is required";
      // if (!formData.profilePic)
      //   newErrors.profilePic = "Profile Picture is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("clicked");
      if (validate()) {
        // Submission logic here
        setRegistering(true);
        console.log("Form Data:", formData);
        const response = await axios.post(
          "https://firstbank-q907.onrender.com/user/register",
          formData
        );
        console.log(response, "response");
        setRegistering(false);
        if (response.status === 200) {
          router.push("/login");
        }
      }
    } catch (err) {
      console.log(err);
      setRegistering(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Personal Info</h2>
            <div className="col-12 row">
              <div className="single-input">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Enter Your first name"
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName}</p>
                )}
              </div>
              <div className="single-input col-lg-6">
                <label>Last name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                {errors.lastName && (
                  <p className="text-danger">{errors.lastName}</p>
                )}
              </div>
              <div className="single-input col-lg-6">
                <label>User name</label>
                <input
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                {errors.userName && (
                  <p className="text-danger">{errors.userName}</p>
                )}
              </div>
              <div className="single-input">
                <label>Your Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="single-input col-lg-6 ">
                <label>Your Password</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
              <div className="single-input col-lg-6 ">
                <label>Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                {errors.confirmPassword && (
                  <p className="text-danger">{errors.confirmPassword}</p>
                )}
              </div>
              <div className="single-input col-lg-6 ">
                <label>Date of birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                {errors.dateOfBirth && (
                  <p className="text-danger">{errors.dateOfBirth}</p>
                )}
              </div>
              <div className="single-input col-lg-6 ">
                <label>Gender</label>
                <div className="row">
                  <select
                    name="gender"
                    className="col-lg-12"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-danger">{errors.gender}</p>
                )}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2>Contact Info</h2>
            <div className="col-12 row">
              <div className="single-input">
                <label>Home address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && <p>{errors.address}</p>}
              </div>

              <div className="single-input col-lg-6 ">
                <label>Zip code</label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
                {errors.zipCode && <p>{errors.zipCode}</p>}
              </div>

              <div className="single-input col-lg-6 ">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                {errors.country && <p>{errors.country}</p>}
              </div>

              <div className="single-input">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2>Account Info</h2>
            <div className="col-12 row">
              <div className="single-input">
                <label>Account pin</label>
                <input
                  type="password"
                  name="transactionPin"
                  placeholder="Account Pin"
                  value={formData.transactionPin}
                  onChange={handleChange}
                  required
                />
                {errors.transactionPin && <p>{errors.transactionPin}</p>}
              </div>

              <div className="single-input col-11 mx-auto col-lg-6 ">
                <label>Account type</label>
                <div className="row">
                  <select
                    name="accountType"
                    className="col-lg-12 form-control "
                    value={formData.accountType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Account Type</option>
                    <option value="savings">Savings</option>
                    <option value="fixed deposit">Fixed deposit</option>
                    <option value="global checking account">
                      Global checking account
                    </option>
                  </select>
                </div>
                {errors.accountType && <p>{errors.accountType}</p>}
              </div>
              <div className="single-input col-11 mx-auto  col-lg-6 ">
                <label>Currency</label>
                <div>
                  <select
                    name="currency"
                    className="col-lg-12 form-control "
                    value={formData.currency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Currency</option>
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.currency && <p>{errors.currency}</p>}
              </div>

              <div className="single-input">
                <label>Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
                {errors.occupation && (
                  <p className="danger">{errors.occupation}</p>
                )}
              </div>

              <div className="single-input">
                <label>Upload profile pics(optional)</label>
                <input
                  type="file"
                  name="profilePic"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <section className="login-reg">
        <div className="overlay pt-120">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 order-xl-0 order-1">
                <div className="sec-img d-rtl">
                  <img
                    src="assets/images/login-reg-bg.png"
                    className="max-un"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="section-text text-center">
                  <h5 className="sub-title">Account</h5>
                  <h2 className="title">Welcome to First Credit Choice</h2>
                  <p className="dont-acc">
                    Already have an account? <a href="/login">Login</a>
                  </p>
                </div>
                <div>
                  <div className="row">{renderStep()}</div>
                  <div className="row justify-content-between">
                    {step > 1 && (
                      <button
                        className="cmn-btn mt-3 mt-lg-0 col-8 mx-auto col-lg-5 "
                        type="button"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                    )}
                    {step < 3 && (
                      <button
                        className="cmn-btn mt-3 mt-lg-0 col-8 mx-auto col-lg-5"
                        type="button"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    )}
                    {step === 3 && (
                      <button
                        className="cmn-btn mt-3 mt-lg-0 col-8 mx-auto  col-lg-5"
                        type="button"
                        onClick={handleSubmit}
                      >
                        {registering ? "loading..." : "Submit"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpContents;
