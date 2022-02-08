import React from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import { Page1Container } from "../pages/page1/";
const { Content, Sider } = Layout;

export const ShellLeftNav = () => (
  <Menu
    mode="inline"
    defaultChecked={true}
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub-0"]}
    style={{ height: "100%" }}
  >
    <Menu.Item>
      <Link to={"/page-1"}>Page 1</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/page-2"}>Page 2</Link>
    </Menu.Item>
  </Menu>
);

export const ShellBody = () => {
  return (
    <Content>
      <Layout>
        <Sider width={230}>
          <ShellLeftNav />
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 500 }}>
          <Switch>
            <Route path={"/page-1"}>
              <Page1Container />
            </Route>
            <Route path={"/page-2"}>2</Route>
            <Route path={""}>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
  );
};
