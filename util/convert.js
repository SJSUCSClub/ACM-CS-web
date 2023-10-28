import streamToBlob from "stream-to-blob";

export async function convertFileToArrayBuffer(file) {
  return await file.arrayBuffer();
}

export async function convertReadableStreamToBlob(stream) {
  return await streamToBlob(stream);
}

export async function convertReadableStreamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    stream.on("data", (chunk) => {
      chunks.push(chunk);
    });

    stream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    stream.on("error", (err) => {
      reject(err);
    });
  });
}
