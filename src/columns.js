// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag, Table, Row, Col, Card, Button, PageHeader } from "antd";

import { Loader } from "./loader"

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
    dataIndex: "full_name",
    key: "full_name",
    render: (full_name) => {
      return (<Tag style={{ minWidth: "80%" }} color={"#" + ((1<<24)*Math.random() | 0).toString(16)}>
      {full_name.split("/")[0]}
    </Tag>)
      
    },
  },
  {
    title: "Stars",
    key: "stargazers_count",
    dataIndex: "stargazers_count",
    render: (stargazers_count) => {
      return <Tag color="success">{stargazers_count}</Tag>;
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const OperationsTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:>=1000+&sort=stars&order=desc&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
      .then((res) => {
        setData(res.data.items);
        setLoading(false);
      });
  }, []);

  return loading ? (
    < Loader />
  ) : (
    <React.Fragment>
      <PageHeader
    title="Popular Public Repositories"
    subTitle="Displays the most popular public repositories ranked by stars count"
  />
      
      <Row justify="space-between" style={{ marginLeft: "30px" }}>
        <Col>
        <a href="/bookmark">
            <Button
              type="primary"
            >
              Bookmarks
            </Button>
            </a>
        </Col>
      </Row>
    <Row  style={{ marginLeft: "30px", marginTop: "10px" }}>
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
