import * as AWS from 'aws-sdk';
import { HttpException, HttpStatus } from '@nestjs/common';

AWS.config.update({ region: 'us-east-2' });

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

export class S3Service {
  async upload(bufferData, name) {
    try {
      const uploadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: name,
        Body: bufferData,
      };
      return s3.upload(uploadParams).promise();
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: e?.code,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getSignedUrl(name) {
    try {
      const signedUrl = s3.getSignedUrl('getObject', {
        Bucket: process.env.BUCKET_NAME,
        Key: name,
        Expires: 60 * 5,
      });
      return {
        url: signedUrl,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: e?.code,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  listObjects() {
    const bucketParams = {
      Bucket: process.env.BUCKET_NAME,
    };
    return s3.listObjects(bucketParams).promise();
  }
}
