import { sendMarketingTemplate } from "../api/whatsapp.js";
import { getMarketingUsers } from "./userService.js";

export async function sendBroadcast(templateName, parameters = []) {
  const users = await getMarketingUsers();

  for (const user of users) {
    await sendMarketingTemplate(
      user.phone,
      templateName,
      parameters.map(p => p.replace("{{name}}", user.name))
    );
  }
}
