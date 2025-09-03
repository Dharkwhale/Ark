"use client"

import { useState, useEffect } from "react"
import { Table, message, Button } from "antd"
import { getTopHolders } from "../../utils/api"

const TopHolds = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [topHolds, setTopHolds] = useState([])
  const [topHoldsData, setTopHoldsData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 0,
  })

  const { data, total, page: apiPage, totalPages } = topHoldsData;

  useEffect(() => {
    setTopHolds(data || [])
    setPagination({
      page: apiPage || 1,
      total: total || 0,
      totalPages: totalPages || 1,
    })
  }, [data, total, apiPage, totalPages])

  console.log(data, total, apiPage, totalPages)

  // Fetch function
  const loadTopHolds = async (page = 1, perPage = 10) => {
    setLoading(true)
    setError(null)
    try {
      const res = await getTopHolders(page, perPage)
      console.log(page);

      setTopHoldsData(res)

      // const { data, total, page: apiPage, totalPages } = res
      // setTopHolds(data || [])
      // setPagination({
      //   page: apiPage || page,   // use backend page OR fallback
      //   total: total || 0,
      //   totalPages: totalPages || 1,
      // })
    } catch (err) {
      console.error(err)
      setError("Failed to load top holders")
      message.error("Failed to load top holders")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTopHolds(1, 10)
  }, [ ])


  // Columns for main table
  const columns = [
    {
      title: "S/N",
      key: "index",
      render: (_, record, index) => (pagination.page - 1) * 10 + index + 1,
      width: 60,
    },
    
    {
      title: "Wallet Address",
      dataIndex: "walletAddress",
      key: "walletAddress",
      render: (text) =>
        text ? (
          <span>
            {text.slice(0, 6)}...{text.slice(-6)}
          </span>
        ) : (
          "—"
        ),
    },

    {
      title: "Chain",
      dataIndex: "chain",
      key: "chain",
    },
    
    {
      title: "Top Token",
      key: "topToken",
      render: (_, record) => (record.topTokens && record.topTokens.length > 0 ? record.topTokens[0].tokenSymbol : "—"),
    },
  ]

  // Expanded nested row
  const expandedRowRender = (record) => {
    const tokenColumns = [
      { title: "Token Symbol", dataIndex: "tokenSymbol", key: "tokenSymbol" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Chain", dataIndex: "chain", key: "chain" },
    ]

    return (
      <Table
        columns={tokenColumns}
        dataSource={record.topTokens || []}
        pagination={false}
        rowKey={(token) => `${record.walletAddress}-${token.tokenSymbol}`}
        size="small"
      />
    )
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={topHolds}
        expandable={{ expandedRowRender }}
        rowKey={(record) => record.walletAddress}
        pagination={false} // disable antd pagination
        loading={loading}
      />

      {/* Custom Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button disabled={pagination.page <= 1} onClick={() => loadTopHolds(pagination.page - 1)}>
          Previous
        </Button>
        <span>
          Page {pagination.page} of {pagination.totalPages} | Total: {pagination.total}
        </span>
        <Button disabled={pagination.page >= pagination.totalPages} onClick={() => loadTopHolds(pagination.page + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default TopHolds
