import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.IAM_ACCESS_KEY,
    secretAccessKey: process.env.IAM_SECRET_KEY,
  },
});

/**
 * @param {string} key - object key
 *
 * @returns {Object}
 * @returnExample
 *      {
 *          body: ReadableStream,
 *          metadata: Record<string, string>
 *      }
 * @see {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectCommand/https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectCommand}
 */
async function get_object(key) {
  try {
    const cmd = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    });
    const res = await client.send(cmd);
    console.log(res);
    return res;
  } catch (error) {
    console.log("/server/aws/s3/get_object: ", error.message);
    throw new Error(error.message);
  }
}

/**
 * @param {string} key
 * @param {ArrayBuffer | Buffer} object
 * @param {Object} options
 *
 * @see {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectCommand}
 */
async function put_object(key, object, options = {}) {
  try {
    if (
      !(
        object instanceof ArrayBuffer ||
        object instanceof Buffer ||
        object instanceof Blob
      )
    ) {
      throw new Error("Invalid object type");
    }

    const cmd = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: object,
      ...options,
    });

    await client.send(cmd);
  } catch (error) {
    console.log("/server/aws/s3/put_object: ", error.message);
    throw new Error(error.message);
  }
}

/**
 * @param {string} key
 *
 * @see {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3/Class/DeleteObjectCommand}
 */
async function delete_object(key) {
  try {
    const cmd = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    });
    await client.send(cmd);

    return { success: true };
  } catch (error) {
    console.log("/server/aws/s3/put_object: ", error.message);
    throw new Error(error.message);
  }
}

export default { get_object, put_object, delete_object };
