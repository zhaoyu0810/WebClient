import React from "react";
import { Layout, Space } from "antd";
import "./Shell.scss";
import { ShellBody } from "./ShellBody";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

const ShellHeader = (): JSX.Element => {
  return (
    <Header className="ShellHeader">
      <Link className="title" to="">
        <Space>
          <h1>Web client</h1>
        </Space>
      </Link>
    </Header>
  );
};

export const Shell = (): JSX.Element => {
  return (
    <Layout className="Shell">
      <ShellHeader />
      <ShellBody />
    </Layout>
  );
};
