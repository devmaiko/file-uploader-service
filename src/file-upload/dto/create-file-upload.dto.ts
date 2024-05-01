import { IsArray, IsObject, IsString } from 'class-validator';

class Buffer {
  @IsString()
  type: string;

  @IsArray()
  data: string[];
}

export class CreateFileUploadDto {
  @IsString()
  fieldname: string;

  @IsString()
  encoding: string;

  @IsString()
  originalname: string;

  @IsString()
  mimetype: string;

  @IsObject()
  buffer: Buffer;
}
