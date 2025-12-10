import fetch from "node-fetch";
import config from "../config/config.js";

const BASE_URL = `https://graph.facebook.com/v19.0/${config.phoneId}`;

export async function sendMarketingTemplate(to, templateName, parameters = []) {
  const body = {
    messaging_product: "whatsapp",
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: "en_US" },
      components: [
        {
          type: "body",
          parameters: parameters.map(p => ({ type: "text", text: p }))
        }
      ]
    }
  };

  const res = await fetch(`${BASE_URL}/marketing_messages`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
}
