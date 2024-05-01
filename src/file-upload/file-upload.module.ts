import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { S3Service } from '../common/s3.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService, S3Service],
})
export class FileUploadModule {}
