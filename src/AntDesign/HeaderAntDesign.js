import React, { useState } from "react";
// import { Menu } from "antd";
import { Anchor, Drawer, Button } from "antd";
const { Link } = Anchor;

function HeaderAntDesign() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div id="HeaderAntDesign">
      <div className="logo">Logo</div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["About"]}>
        <Menu.Item key="About">About</Menu.Item>
        <Menu.Item key="Services">Services</Menu.Item>
        <Menu.Item key="Blog">Blog</Menu.Item>
        <Menu.Item key="Careers">Careers</Menu.Item>
        <Menu.Item key="Team">Team</Menu.Item>
        <Menu.Item key="Contact">Contact</Menu.Item>
      </Menu> */}
      <div className="HeaderMenubar">
        <div className="mobileHidden">
          <Anchor
            targetOffset="65"
            className="AnchorLink"
            direction="horizontal"
          >
            <Link href="#CarouselAntDesign" title="Home" />
            {/* <Link href="#CarouselAntDesign" title="Banner" /> */}
            <Link href="#AboutAntDesign" title="About" />
            <Link href="#CardAntDesign" title="Card" />
            <Link href="#ModelAntDesign" title="Model" />
            <Link href="#CollapseAntDesign" title="FAQ" />
            <Link href="#ListAntDesign" title="Pricing" />
            <Link href="#FormAntDesign" title="Contact" />
            <Link href="#FooterAntDesign" title="Footer" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fa fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#CarouselAntDesign" title="Home" />
              {/* <Link href="#CarouselAntDesign" title="Banner" /> */}
              <Link href="#AboutAntDesign" title="About" />
              <Link href="#CardAntDesign" title="Card" />
              <Link href="#ModelAntDesign" title="Model" />
              <Link href="#CollapseAntDesign" title="FAQ" />
              <Link href="#ListAntDesign" title="Pricing" />
              <Link href="#FormAntDesign" title="Contact" />
              <Link href="#FooterAntDesign" title="Footer" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default HeaderAntDesign;
