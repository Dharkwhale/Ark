// src/components/admin/CreateWallet.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createWallet } from "../../utils/api";
import { message, Select } from "antd";

const { Option } = Select;

const CreateWallet = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Wallet name is required"),
    address: Yup.string()
      .matches(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address")
      .required("Wallet address is required"),
    chain: Yup.string().required("Please select a chain"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await createWallet(values);
      message.success("Wallet created successfully!");
      console.log("Created wallet:", response);
      resetForm();
    } catch (error) {
      message.error("Failed to create wallet: " + error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Wallet</h1>

      <Formik
        initialValues={{ name: "", address: "", chain: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="space-y-4">
            {/* Wallet Name */}
            <div>
              <label className="block mb-1">Wallet Name</label>
              <Field
                name="name"
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter wallet name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block mb-1">Wallet Address</label>
              <Field
                name="address"
                type="text"
                className="w-full border rounded p-2"
                placeholder="Paste wallet address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Chain Dropdown */}
            <div>
              <label className="block mb-1">Select Chain</label>
              <Select
                value={values.chain}
                onChange={(val) => setFieldValue("chain", val)}
                className="w-full"
                placeholder="Select a chain"
              >
                <Option value="ethereum">Ethereum</Option>
                <Option value="solana">Solana</Option>
              </Select>
              <ErrorMessage
                name="chain"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Create Wallet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateWallet;
