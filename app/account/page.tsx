"use client";

import { Metadata } from "next";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


export const metadata: Metadata = {
    title: "Velora || My Account",
    description: "The user account page of Velora Website",
};

const AccountPage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
          Account
        </h1>
        <h2 className="text-3xl font-semibold">Billing Details</h2>

        <div className="flex flex-col md:flex-row gap-6 mt-7">
          {/* Left Sidebar */}
          <div className="w-full md:w-64">
            <div className="space-y-6">
              {/* Manage My Account Section */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Manage My Account
                </h3>
                <div className="space-y-2 pl-4">
                  <button
                    onClick={() => setActiveSection("profile")}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeSection === "profile"
                        ? "text-bgLemon font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => setActiveSection("address")}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeSection === "address"
                        ? "text-bgLemon font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Address Book
                  </button>
                  <button
                    onClick={() => setActiveSection("payment")}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeSection === "payment"
                        ? "text-bgLemon font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    My Payment Options
                  </button>
                </div>
              </div>

              {/* My Orders Section */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  My Orders
                </h3>
                <div className="space-y-2 pl-4">
                  <button
                    onClick={() => setActiveSection("returns")}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeSection === "returns"
                        ? "text-bgLemon font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    My Returns
                  </button>
                  <button
                    onClick={() => setActiveSection("cancellations")}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeSection === "cancellations"
                        ? "text-bgLemon font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    My Cancellations
                  </button>
                </div>
              </div>

              {/* Logout Section */}
              <div>
                <button className="text-base font-semibold text-gray-900 hover:text-red-600 transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-6 md:p-8">
            {activeSection === "profile" && (
              <div>
                <h2 className="text-sm font-semibold text-bgLemon mb-6">
                  Edit Your Profile
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgLemon focus:border-transparent text-sm"
                        placeholder="input text"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgLemon focus:border-transparent text-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgLemon focus:border-transparent text-sm"
                        placeholder="input text"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm  text-gray-400 mb-2 "
                      >
                        Phone Number
                      </label>
                      <PhoneInput
                        defaultCountry="ng"
                        value={formData.phone}
                        onChange={(phone) =>
                          setFormData((prev) => ({ ...prev, phone }))
                        }
                        inputClassName="focus:!ring-2 focus:!ring-bgLemon w-full py-7 !rounded-r-lg outline-none text-sm text-gray-600"
                        countrySelectorStyleProps={{
                          buttonClassName:
                            "!border-gray-300 !px-5 !py-3 !rounded-l-lg",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgLemon focus:border-transparent text-sm"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgLemon focus:border-transparent text-sm"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>

                  <div className="pt-4  flex justify-end gap-4">
                    <button
                      onClick={() =>
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          password: "",
                          confirmPassword: "",
                        })
                      }
                      className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-10 py-3 bg-bgLemon text-black font-medium rounded-3xl hover:bg-bgLemon transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection !== "profile" && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activeSection === "address" && "Address Book"}
                  {activeSection === "payment" && "My Payment Options"}
                  {activeSection === "returns" && "My Returns"}
                  {activeSection === "cancellations" && "My Cancellations"}
                </h3>
                <p className="text-gray-600">This section is coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
