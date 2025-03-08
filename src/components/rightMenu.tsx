import { ColorPicker, Tooltip } from "antd";

import { EmailIcon } from "../assets/svgicons";

const RightMenu = ({ onChangeColor, themeColor }: any) => {
  return (
    <ul className="rightMenu">
      <li>
        <Tooltip title="Theme">
          <ColorPicker
            onChange={onChangeColor}
            size="small"
            value={themeColor}
          />{" "}
        </Tooltip>
      </li>
      <li key="mail" style={{ lineHeight: "73px", cursor: "pointer" }}>
        <Tooltip title="Email">
          <EmailIcon style={{ padding: "0 20px" }} />
        </Tooltip>
      </li>
    </ul>
  );
};

export default RightMenu;
