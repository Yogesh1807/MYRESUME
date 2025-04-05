import { ColorPicker, List, Select, Tooltip } from "antd";

import { EmailIcon } from "../assets/svgicons";
import { t } from "i18next";
const { Option } = Select;

const RightMenu = ({
  onChangeColor,
  themeColor,
  toggleLanguage,
  languageOptions,
  setIsModalOpen,
}: any) => {
  const data = [
    {
      key: "theme",
      title: t("Theme"),
      icon: null,
      content: (props: any) => (
        <ColorPicker
          onChange={props.onChangeColor}
          size="small"
          value={props.themeColor}
        />
      ),
    },
    {
      key: "language",
      title: t("Language"),
      icon: null,
      content: (props: any) => (
        <Select
          size="small"
          onChange={props.toggleLanguage}
          title="Language"
          value={localStorage.getItem("language") || "en"}
          // suffixIcon={<EarthIcon />}
          labelRender={(item: any) => <span>{item.label}</span>}
        >
          {props.languageOptions.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      key: "mail",
      title: t("contact.label"),
      icon: () => (
        <span onClick={() => setIsModalOpen(true)}>
          <EmailIcon className="customIcon" />
        </span>
      ),
      content: null,
    },
  ];
  return (
    <List
      className="rightMenu"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.key}>
          <Tooltip trigger={"hover"} title={item.title}>
            {item.content
              ? item.content({
                  onChangeColor,
                  themeColor,
                  toggleLanguage,
                  languageOptions,
                })
              : item.icon()}
          </Tooltip>
        </List.Item>
      )}
    />
  );
};

export default RightMenu;
