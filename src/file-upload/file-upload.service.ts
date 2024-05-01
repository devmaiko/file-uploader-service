import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { S3Service } from '../common/s3.service';

@Injectable()
export class FileUploadService {
  constructor(private readonly s3Service: S3Service) {}
  upload(createFileUploadDto: CreateFileUploadDto) {
    return this.s3Service.upload(
      createFileUploadDto.buffer,
      createFileUploadDto.originalname,
    );
  }

  async getSignedUrl(name: string) {
    const items = await this.s3Service.listObjects();
    const itemName = [];
    items.Contents.forEach((item) => {
      itemName.push(item.Key);
    });
    if (!itemName.includes(name)) {
      throw new HttpException('ITEM_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    return this.s3Service.getSignedUrl(name);
  }
}
