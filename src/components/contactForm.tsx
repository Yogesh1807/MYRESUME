import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useTranslation } from "react-i18next";

interface ContactFormModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    message.success(t("contact.submit") + " ✅");
    setIsModalOpen(false); // Close modal
    form.resetFields(); // Reset form fields
  };

  return (
    <Modal
      title={t("contact.title")}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
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
          <Button type="primary" htmlType="submit" block>
            {t("contact.submit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactFormModal;
