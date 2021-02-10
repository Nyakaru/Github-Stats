// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag, Table, Row, Col, Card, Button, PageHeader } from "antd";

import { Loader } from "./loader";

/**
 * @type {Array<import('antd/lib/table').ColumnProps>}
 */
const OperationTableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    render: (owner) => {
      return (
        <Tag
          style={{ minWidth: "80%" }}
          color={"#" + (((1 << 24) * Math.random()) | 0).toString(16)}
        >
          {owner.split("/")[0]}
        </Tag>
      );
    },
  },
  {
    title: "Stars",
    key: "stars",
    dataIndex: "stars",
    render: (stars) => {
      return <Tag color="success">{stars}</Tag>;
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const BookmarksTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/repo`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <PageHeader
        title="Bookmarked Repositories"
        subTitle="Displays the bookmarked repositories "
      />

      <Row justify="space-between" style={{ marginLeft: "30px", marginBottom: "10px" }}>
        <Col>
          <a href="/">
            <Button type="primary">Home</Button>
          </a>
        </Col>
      </Row>
      <Row style={{ marginLeft: "30px", marginTop: "10px" }}>
        <Col span={18}>
          <Card
            style={{
              boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
              borderRadius: "5px",
            }}
          >
            <Table
              columns={OperationTableColumns}
              dataSource={data}
              size="small"
              rowKey={(record) => record.id}
            />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
