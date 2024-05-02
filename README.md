# File Uploader Service

Welcome to the File Uploader Service! This project provides a file uploading API developed using TypeScript and Nest.js. It utilizes the Amazon S3 bucket for storing files and integrates the FileInterceptor from the Nest platform Express for handling file uploads.

## Videos
- [Complete feature working](https://drive.google.com/file/d/1zU95mdMyFI8Qdp3hAH-2h-yS-VB7OrHt/view?usp=sharing)
  
## Features

### 1. Upload Endpoint
- **API Endpoint:** `POST /file-upload`
- Allows users to upload JPEG files only
- Validates file type on the server-side before accepting the upload

### 2. Download Endpoint
- **API Endpoint:** `GET /file-upload/:name`
- Allows users to create a pre-signed link for downloading files
- Pre-signed links expire in 5 minutes for security reasons

## Technologies Used

- **TypeScript**: Typed superset of JavaScript for enhanced code quality and maintainability
- **Nest.js**: Progressive Node.js framework for building efficient, reliable, and scalable server-side applications
- **Amazon S3 Bucket**: Cloud storage service for storing and retrieving files securely
- **FileInterceptor**: Middleware from the Nest platform Express for handling file uploads

## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone https://github.com/devmaiko/file-uploader-service.git
   ```

2. **Install Dependencies:**
   ```
   cd file-uploader-service
   yarn add
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```
   BUCKET_NAME=your_s3_bucket_name
   BUCKET_REGION=your_s3_bucket_region
   ```

4. **Start the Server:**
   ```
   yarn start:dev
   ```

## Usage

### Uploading a File

To upload a file, send a `POST` request to the `/file-upload` endpoint with the JPEG file attached as form data.

Example using cURL:
```
curl -X POST -F "file=@/path/to/your/file.jpg" http://localhost:3000/file-upload
```

### Downloading a File

To generate a pre-signed link for downloading a file, send a `GET` request to the `/file-upload/:name` endpoint, where `:name` is the name of the file you want to download.

Example using cURL:
```
curl -X GET http://localhost:3000/file-upload/your_file_name.jpg
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. Make sure to follow the existing code style and conventions.
