import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

export const EmailIcon = (props: Partial<CustomIconComponentProps>) => {
  const EmailSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5z"
        stroke-width="20"
        stroke="currentColor"
      />
    </svg>
  );
  return <Icon component={EmailSVG} {...props} />;
};
