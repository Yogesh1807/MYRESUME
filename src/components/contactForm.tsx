import React from "react";
import { Modal, Form, Input, Button, notification } from "antd";
import { useTranslation } from "react-i18next";

import sendMail from "../service/email";

interface ContactFormModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  setIsLoading,
  isLoading,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const openNotification = (placement: any, message: string, type: string) => {
    if (type === "success") {
      notification.success({
        message: message,
        placement,
      });
    } else if (type === "error") {
      notification.error({
        message: message,
        placement,
      });
    }
  };
  // Handle form submission
  const onFinish = async (values: any) => {
    setIsLoading(true); // Set loading state
    // Send email using the sendMail function
    const res = await sendMail(values);
    if (!res.error) {
      setIsLoading(false); // Reset loading state
      setIsModalOpen(false); // Close modal
      form.resetFields(); // Reset form fields
      openNotification(
        "topRight",
        `${t("contact.emailSuccessMessage")}`,
        "success"
      ); // Show success notification
    } else {
      setIsLoading(false); // Reset loading state
      setIsModalOpen(false); // Close modal
      openNotification(
        "topRight",
        `${t("contact.emailErrorMessage")}`,
        "error"
      ); // Show error notification
    }
  };

  // Close modal and trigger notification on cancel
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={t("contact.title")}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Name Input */}
        <Form.Item
          label={t("contact.name")}
          name="name"
          rules={[{ required: true, message: t("contact.nameRequired") }]}
        >
          <Input placeholder={t("contact.name")} />
        </Form.Item>

        {/* Email Input */}
        <Form.Item
          label={t("contact.email")}
          name="email"
          rules={[
            { required: true, message: t("contact.emailRequired") },
            { type: "email", message: t("contact.emailInvalid") },
          ]}
        >
          <Input placeholder={t("contact.email")} />
        </Form.Item>

        {/* Message Input */}
        <Form.Item
          label={t("contact.message")}
          name="message"
          rules={[{ required: true, message: t("contact.messageRequired") }]}
        >
          <Input.TextArea placeholder={t("contact.message")} rows={4} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            {t("contact.submit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactFormModal;
