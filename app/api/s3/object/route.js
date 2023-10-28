import { NextResponse } from "next/server";
import { S3 } from "@/server/aws";
import {
  convertFileToArrayBuffer,
  convertReadableStreamToBlob,
  convertReadableStreamToBuffer,
} from "@/util/convert";

export async function GET(req) {
  const reqUrl = new URL(req.url);
  const key = reqUrl.searchParams.get("key");

  try {
    const res = await S3.get_object(key);

    console.log(res);
    const objectBuffer = await convertReadableStreamToBuffer(res.Body);

    return NextResponse.json(
      {
        success: true,
        object: { ...res, Body: objectBuffer.toString("base64") },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("/api/s3/object/GET: ", error.message);
    return NextResponse.json({ success: false, object: null }, { status: 500 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const key = "example/" + file.name;

  try {
    const fileArrayBuffer = await convertFileToArrayBuffer(file);

    await S3.put_object(key, fileArrayBuffer, {
      ContentType: file.type.toString(),
      ContentLength: file.size.toString(),
      Metadata: {
        lastModified: file.lastModified.toString(),
      },
      Tagging: "type=example",
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("/api/s3/object/POST: ", error.message);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function DELETE(req) {
  const reqUrl = new URL(req.url);
  const key = reqUrl.searchParams.get("key");
  try {
    await S3.delete_object(key);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("/api/s3/object/DELETE: ", error.message);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
