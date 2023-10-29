import { SERVER_URL } from "../constants";

export const sendRegistrationData = async (data) => {
  const response = await fetch(`${SERVER_URL}/api/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}