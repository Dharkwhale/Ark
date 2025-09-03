"use client"

// src/components/pages/Addresses.jsx
import { useState, useEffect } from "react"
import { Table, Button, message } from "antd"
import { CopyOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { fetchAddresses } from "../../utils/api"
import toast, { Toaster } from "react-hot-toast";

const Addresses = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [addresses, setAddresses] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    total: 0,
    totalPages: 1,
  })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    message.success("Wallet address copied!")
  }

  const columns = [
    {
      title: "S/N",
      key: "index",
      width: 60,
      render: (_, __, index) => (pagination.page - 1) * pagination.perPage + index + 1,
    },
    
    {
      title: "Wallet Address",
      dataIndex: "address",
      key: "address",
      render: (text) => (
        <div className="flex items-center gap-2">
          <span>
            {text.slice(0, 10)}...{text.slice(-6)}
          </span>
          <Button
            type="link"
            icon={<CopyOutlined />}
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard(text)
            }}
          />
        </div>
      ),
    },
    { title: "Wallet Chain", dataIndex: "chain", key: "chain" },
  ]

  const loadAddresses = async (page = 1, perPage = 10) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetchAddresses(page, perPage)
      toast.success("address fetched!!");

      const { data, total, page: currentPage, totalPages } = res
      setAddresses(data || [])
      setPagination({
        page: currentPage || page,
        perPage,
        total: total || 0,
        totalPages: totalPages || 1,
      })
    } catch (err) {
      setError("Failed to load addresses")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAddresses(1, 10)
  }, [])

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      loadAddresses(newPage, pagination.perPage)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">My Wallet Addresses</h1>

      <Table
        columns={columns}
        dataSource={addresses}
        rowKey={(record) => record.address}
        loading={loading}
        pagination={false}
        onRow={(record) => ({
          onClick: () => navigate(`/app/home/addresses/info?wallet=${record.address}&chain=${record.chain}`),
        })}
      />

      {/* Custom Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          icon={<LeftOutlined />}
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page === 1}
        >
          Prev
        </Button>

        <span>
          Page {pagination.page} of {pagination.totalPages} | Total: {pagination.total}
        </span>

        <Button
          icon={<RightOutlined />}
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page === pagination.totalPages}
        >
          Next
        </Button>

      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default Addresses
