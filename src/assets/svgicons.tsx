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
        strokeWidth="20"
        stroke="currentColor"
      />
    </svg>
  );
  return <Icon component={EmailSVG} {...props} />;
};

export const EarthIcon = (props: Partial<CustomIconComponentProps>) => {
  const EarthSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="27"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14.5c.23 0 .843-.226 1.487-1.514c.306-.612.563-1.37.742-2.236H5.771c.179.866.436 1.624.742 2.236C7.157 14.274 7.77 14.5 8 14.5M5.554 9.25a14.4 14.4 0 0 1 0-2.5h4.892a14.5 14.5 0 0 1 0 2.5zm6.203 1.5c-.224 1.224-.593 2.308-1.066 3.168a6.53 6.53 0 0 0 3.2-3.168zm2.623-1.5h-2.43a16 16 0 0 0 0-2.5h2.429a6.5 6.5 0 0 1 0 2.5Zm-10.331 0H1.62a6.5 6.5 0 0 1 0-2.5h2.43a16 16 0 0 0 0 2.5Zm-1.94 1.5h2.134c.224 1.224.593 2.308 1.066 3.168a6.53 6.53 0 0 1-3.2-3.168m3.662-5.5h4.458c-.179-.866-.436-1.624-.742-2.236C8.843 1.726 8.23 1.5 8 1.5s-.843.226-1.487 1.514c-.306.612-.563 1.37-.742 2.236m5.986 0h2.134a6.53 6.53 0 0 0-3.2-3.168c.473.86.842 1.944 1.066 3.168M5.31 2.082c-.473.86-.842 1.944-1.066 3.168H2.109a6.53 6.53 0 0 1 3.2-3.168ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0"
        clipRule="evenodd"
      />
    </svg>
  );
  return <Icon component={EarthSVG} {...props} />;
};
