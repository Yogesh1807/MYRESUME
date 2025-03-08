import {
  Layout,
  Card,
  Timeline,
  Button,
  List,
  ConfigProvider,
  Row,
  Col,
  Drawer,
  Tag,
  Flex,
} from "antd";
import "antd/dist/reset.css";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import data from "./assets/data.json";

import { LayoutStyle } from "./style";
import RightMenu from "./components/rightMenu";
import { useState } from "react";

const { Header, Content } = Layout;

const skills = ["JavaScript", "React", "NodeJs", "CSS", "Ant Design"];
const tools = ["VSCode", "Jira", "Confluence"];
const education = [
  {
    year: "2022",
    degree: "Bachelor's in Computer Science",
    institution: "XYZ University",
  },
  { year: "2018", degree: "High School Diploma", institution: "ABC School" },
];

const PersonalWebsite = () => {
  const [isShow, setIsShow] = useState(false);
  const [themeColor, setThemeColor] = useState("#00a8e6");
  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const showDrawer = () => {
    setIsShow(!isShow);
  };

  const onChangeColor = (value: any, css: string) => {
    console.log(value);
    setThemeColor(css);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Noto Sans",
          // Seed Token
          colorPrimary: themeColor,
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
        components: {
          Button: {
            defaultHoverColor: "#ffffff",
            textTextHoverColor: "#ffffff",
          },
        },
      }}
    >
      <LayoutStyle primaryColor={themeColor}>
        <Header className="logoHeader">
          <div style={{ visibility: "hidden" }}>hidden</div>
          <div className="fullName">{data.fullName}</div>
          <RightMenu onChangeColor={onChangeColor} themeColor={themeColor} />
          <Button
            className="barsMenu"
            type="text"
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />

          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={() => setIsShow(false)}
            open={isShow}
          >
            <RightMenu onChangeColor={onChangeColor} themeColor={themeColor} />
          </Drawer>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className="firstColumn">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card title="Skills" variant="borderless">
                    <Flex gap="4px 0" wrap className="tagListFlex">
                      {skills.map<React.ReactNode>((skill) => (
                        <Tag
                          className="tagButton"
                          color={themeColor}
                          bordered={false}
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Flex>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card title="Development Tools" variant="borderless">
                    <Flex gap="4px 0" wrap className="tagListFlex">
                      {tools.map<React.ReactNode>((skill) => (
                        <Tag
                          className="tagButton"
                          color={themeColor}
                          bordered={false}
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Flex>
                  </Card>
                </motion.div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card title="About Me" variant="borderless">
                    <p>
                      Innovative and results-driven web application developer
                      with 8 years of experience designing, developing, and
                      maintaining dynamic, scalable, and user-centric web
                      applications. Proficient in full-stack development, modern
                      frameworks, and cloud technologies. Strong problem-solving
                      skills and a proven track record of delivering
                      high-quality solutions on time and within budget. Adept at
                      collaborating with cross-functional teams to align
                      technical solutions with business objectives.
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card title="Experience Timeline" variant="borderless">
                    <Timeline>
                      <Timeline.Item color="blue">
                        <strong>Job Title - Company</strong>
                        <p>Year - Description of your role and achievements.</p>
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        <strong>Another Job Title - Company</strong>
                        <p>Year - Description of your role and achievements.</p>
                      </Timeline.Item>
                    </Timeline>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Card title="Education" variant="borderless">
                    <List
                      dataSource={education}
                      renderItem={(edu) => (
                        <List.Item>
                          <strong>{edu.year}</strong> - {edu.degree} at{" "}
                          {edu.institution}
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className="secondColumn">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Card title="Contact" variant="borderless">
                    <p>Email: your.email@example.com</p>
                    <p>LinkedIn: linkedin.com/in/yourprofile</p>
                    <p>GitHub: github.com/yourgithub</p>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  style={{ marginTop: "20px", textAlign: "center" }}
                >
                  <Button
                    type="primary"
                    onClick={handleDownloadResume}
                    // style={{ marginTop: "20px", textAlign: "center" }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Content>
      </LayoutStyle>
    </ConfigProvider>
  );
};

export default PersonalWebsite;
