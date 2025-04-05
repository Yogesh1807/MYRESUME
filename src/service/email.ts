import axios from "axios";

const API_URL = "https://express-theta-tawny.vercel.app/email";
// const API_URL = "http://localhost:3000/email";

const sendMail = async (emailData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post(API_URL, emailData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendMail;
