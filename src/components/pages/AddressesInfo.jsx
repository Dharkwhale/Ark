// src/components/pages/AddressInfo.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Table, Spin, Alert } from "antd";
import { fetchWalletTransactions } from "../../utils/api";

const AddressInfo = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const wallet = queryParams.get("wallet");
  const chain = queryParams.get("chain");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Columns for AntD table
  const columns = [
    {
      title: "Hash",
      dataIndex: "hash",
      key: "hash",
      render: (text) => (
        <span className="font-mono">
          {text.slice(0, 12)}...{text.slice(-12)}
        </span>
      ),
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      render: (text) => (
        <span className="font-mono">{text.slice(0, 10)}...</span>
      ),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      render: (text) => (
        <span className="font-mono">{text.slice(0, 10)}...</span>
      ),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Block",
      dataIndex: "blockNumber",
      key: "blockNumber",
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  const loadTransactions = async (page = 1, perPage = 10) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWalletTransactions({
        address: wallet,
        chain,
        page,
        perPage,
      });

      setTransactions(data.transactions || []);
      setPagination({
        current: page,
        pageSize: perPage,
        total: data.total || 100, // ✅ use backend total count if available
      });
    } catch (err) {
      setError("Failed to load transactions");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (wallet && chain) {
      loadTransactions(pagination.current, pagination.pageSize);
    }
  }, [wallet, chain]);

  const handleTableChange = (paginationConfig) => {
    loadTransactions(paginationConfig.current, paginationConfig.pageSize);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Wallet Information</h1>
      {wallet ? (
        <p className="mt-4 font-mono">Viewing wallet: {wallet}</p>
      ) : (
        <p>No wallet selected</p>
      )}

      {error && <Alert message={error} type="error" showIcon className="mt-4" />}

      <div className="mt-6">
        {loading ? (
          <Spin size="large" />
        ) : (
          <Table
            rowKey="hash"
            columns={columns}
            dataSource={transactions}
            pagination={pagination}
            onChange={handleTableChange}
          />
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
