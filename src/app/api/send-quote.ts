import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailer = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC || "",
  apiSecret: process.env.MJ_APIKEY_PRIVATE || "",
});

export const POST = async function (req: NextRequest) {
  const formData = await req.formData();

  if (!formData) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  if (!process.env.MJ_APIKEY_PUBLIC || !process.env.MJ_APIKEY_PRIVATE) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const mail = mailer.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "purepressurewashingllc@gmail.com",
            Name: "Vet Jets PW",
          },
          To: [
            {
              // Email: "purepressurewashingllc1@gmail.com",
              Email: "mdelacruz1021@gmail.com",
              Name: "Task Force 1",
            },
          ],
          Subject: "New Quote Request",
          TemplateID: 6012668,
          Variables: {
            FULL_NAME: formData.name,
            ADDRESS: formData.address,
            DATE_TIME: formData.dateTime,
            SERVICES:
              formData.serviceType.map((id) => services[id].type).join(", ") ||
              "None",
            NOTES: formData.extraNotes,
          },
          TemplateLanguage: true,
        },
      ],
    });
    return await mail.then((result) => {
      console.log(result.body);
      return NextResponse.json({ success: true }, { status: 200 });
    });
  } catch (error) {
    console.error(error);
  }
};
