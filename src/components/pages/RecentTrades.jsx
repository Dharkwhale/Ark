import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import axios from "axios";
import { getRecentTrades } from "../../utils/api";

const RecentTrades = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trades, setTrades] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });



  // ✅ Fetch function
  const loadRecentTrades = async (page = 1, pageSize = 10) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getRecentTrades(page, pageSize);

    

      // Match API structure
      const { data, total } = res
      setTrades(data || []);
      setPagination({
        current: page,
        pageSize,
        total: total || (data ? data.length : 0),
      });
    } catch (err) {
      console.error("Error fetching trades:", err);
      setError("Failed to load recent trades");
      message.error("Failed to load recent trades");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Initial load
  useEffect(() => {
    loadRecentTrades(pagination.current, pagination.pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Main table columns
  const columns = [
    { title: "Token Symbol", dataIndex: "tokenSymbol", key: "tokenSymbol" },
    {
      title: "Unique Wallet Count",
      dataIndex: "uniqueWalletCount",
      key: "uniqueWalletCount",
    },
  ];

  // ✅ Expanded row for wallets
  const expandedRowRender = (record) => {
    const walletColumns = [
      { title: "Wallet ID", dataIndex: "wallet", key: "wallet" },
      { title: "Chain", dataIndex: "chain", key: "chain" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
    ];

    return (
      <Table
        columns={walletColumns}
        dataSource={record.wallets || []}
        pagination={false}
        rowKey={(wallet, idx) => wallet?.wallet || idx}
        size="small"
      />
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={trades}
      expandable={{ expandedRowRender }}
      rowKey={(record) => record.tokenSymbol}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        onChange: (page, pageSize) => loadRecentTrades(page, pageSize),
      }}
      loading={loading}
    />
  );
};

export default RecentTrades;
