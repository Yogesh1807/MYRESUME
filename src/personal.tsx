import { useEffect, useState } from "react";
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
  Typography,
} from "antd";
import "antd/dist/reset.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import enUS from "antd/locale/en_US";

import "./i18n"; // Import i18next configuration
import data from "./assets/data.json";
import { LayoutStyle } from "./style";
import RightMenu from "./components/rightMenu";
import myProfile from "./assets/MyProfile.jpeg";
import ContactFormModal from "./components/contactForm";

const { Header, Content } = Layout;

const PersonalWebsite = () => {
  const { t, i18n } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const [themeColor, setThemeColor] = useState("#00a8e6");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTimelines, setAllTimelines] = useState([]);

  const toggleLanguage = (val: string) => {
    console.log("changed language", val);

    i18n.changeLanguage(val);
    localStorage.setItem("language", val);
  };

  const handleDownloadResume = () => {
    // window.open("/resume.pdf", "_blank");
    setIsModalOpen(true);
  };

  const showDrawer = () => {
    setIsShow(!isShow);
  };

  const onChangeColor = (value: any, css: string) => {
    console.log(value);
    setThemeColor(css);
  };

  const getSkillCard = (
    skill: { title: string; data: string[] },
    tagBGColor: string
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        key={skill.title}
      >
        <Card title={skill.title} variant="borderless">
          <Flex gap="4px 0" wrap className="tagListFlex">
            {skill.data.map((skillItem: any) => (
              <Tag
                key={skillItem}
                className="tagButton"
                color={tagBGColor}
                bordered={false}
              >
                {skillItem}
              </Tag>
            ))}
          </Flex>
        </Card>
      </motion.div>
    );
  };

  useEffect(() => {
    const getTimelineCard = () => {
      return data.experience.map((Item) => ({
        color: Item.color,
        children: (
          <>
            <strong>
              {t(`${Item.designation}`)} ({Item.count})
            </strong>
            <List
              className="experienceList"
              itemLayout="vertical"
              dataSource={Item.list}
              renderItem={(item) => <List.Item>{t(`${item}`)}</List.Item>}
            />
          </>
        ),
      }));
    };
    const allTimelineList: any = getTimelineCard();
    setAllTimelines(allTimelineList);
  }, []);

  const locales: any = { en: enUS };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "cursive",
          // Seed Token
          colorPrimary: themeColor,
          borderRadius: 2,

          // Alias Token
          // colorBgContainer: "#f6ffed",
        },
        components: {
          Button: {
            defaultHoverColor: "#ffffff",
            textTextHoverColor: "#ffffff",
          },
          Card: {
            bodyPadding: 10,
            headerPadding: 10,
            headerHeight: 35,
            headerFontSize: "1rem",
          },
        },
      }}
      locale={locales[i18n.language]}
    >
      <LayoutStyle primarycolor={themeColor}>
        <Header className="logoHeader">
          <div style={{ visibility: "hidden" }}>hidden</div>
          {/* <h1>{t("greeting", { name: data.fullName })}</h1> */}
          <div className="fullName">
            {t("greeting", { name: data.fullName })}
          </div>
          <RightMenu
            onChangeColor={onChangeColor}
            themeColor={themeColor}
            toggleLanguage={toggleLanguage}
            languageOptions={data.languageOptions}
            setIsModalOpen={setIsModalOpen}
          />
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
            <RightMenu
              onChangeColor={onChangeColor}
              themeColor={themeColor}
              languageOptions={data.languageOptions}
            />
          </Drawer>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <div className="firstColumn">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card
                    hoverable
                    className="profileCard"
                    cover={
                      <img
                        style={{ borderRadius: "50%" }}
                        alt="My profile"
                        src={myProfile}
                      />
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Card title={t("Contact")} variant="borderless">
                    <Typography.Paragraph>
                      <b>{t("Email")}:</b> {data.contact.email}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      <b>{t("Phone")}:</b> {data.contact.mobile}
                    </Typography.Paragraph>
                    <Typography.Paragraph className="socialAccounts">
                      <a href={data.contact.linkedin}>
                        <LinkedinOutlined />
                      </a>
                      <a href={data.contact.github}>
                        <GithubOutlined />
                      </a>
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      {t("Last Updated")} : <strong>{data.version}</strong>
                    </Typography.Paragraph>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  style={{ marginTop: "20px", textAlign: "center" }}
                >
                  <Button type="primary" onClick={handleDownloadResume}>
                    {t("Get Resume")}
                  </Button>
                </motion.div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    title={`${t("About Me")} (${data.totalExperience} Exp.)`}
                    variant="borderless"
                  >
                    <p>{t(`${data.aboutMe}`)}</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card title={t("Experience Timeline")} variant="borderless">
                    <Timeline items={allTimelines} />
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Card title={t("Education")} variant="borderless">
                    <List
                      dataSource={data.education}
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
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <div className="secondColumn">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card title={t("Skills")} variant="borderless">
                    {data?.skills
                      ? Object.values(data.skills).map((item) =>
                          getSkillCard(item, themeColor)
                        )
                      : null}
                  </Card>
                </motion.div>
              </div>
            </Col>
          </Row>
          <ContactFormModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Content>
      </LayoutStyle>
    </ConfigProvider>
  );
};

export default PersonalWebsite;
