/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "PixKeyCategory" AS ENUM ('CPF', 'EMAIL', 'PHONE', 'RANDOM');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- DropTable
DROP TABLE "admin";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "profilePictureId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Angel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "fantasyName" TEXT,
    "slug" TEXT NOT NULL,
    "bio" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "profilePictureId" TEXT,
    "coverPictureId" TEXT,
    "accountStatus" "AccountStatus" NOT NULL,
    "hasPaidSignature" BOOLEAN NOT NULL,
    "affiliateLink" TEXT NOT NULL,
    "accountBalance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Angel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AngelVerificationDocuments" (
    "angelId" TEXT NOT NULL,
    "documentFrontImageId" TEXT NOT NULL,
    "documentBackImageId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AngelPaidSignature" (
    "id" TEXT NOT NULL,
    "angelId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "trimestralDiscount" DOUBLE PRECISION NOT NULL,
    "mercadoPagoPlanId" TEXT NOT NULL,

    CONSTRAINT "AngelPaidSignature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AngelBankData" (
    "angelId" TEXT NOT NULL,
    "bankCode" INTEGER NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankAgency" INTEGER NOT NULL,
    "bankAccount" INTEGER NOT NULL,
    "pixKey" TEXT NOT NULL,
    "pixKeyCategory" "PixKeyCategory" NOT NULL
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "angelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "thumbnailImageId" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackMedia" (
    "id" TEXT NOT NULL,
    "packId" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileS3Key" TEXT NOT NULL,

    CONSTRAINT "PackMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_url_key" ON "Image"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Image_s3Key_key" ON "Image"("s3Key");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Angel_slug_key" ON "Angel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Angel_email_key" ON "Angel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Angel_cpf_key" ON "Angel"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "AngelVerificationDocuments_angelId_key" ON "AngelVerificationDocuments"("angelId");

-- CreateIndex
CREATE UNIQUE INDEX "AngelPaidSignature_angelId_key" ON "AngelPaidSignature"("angelId");

-- CreateIndex
CREATE UNIQUE INDEX "AngelBankData_angelId_key" ON "AngelBankData"("angelId");

-- CreateIndex
CREATE UNIQUE INDEX "Pack_angelId_key" ON "Pack"("angelId");

-- AddForeignKey
ALTER TABLE "AngelVerificationDocuments" ADD CONSTRAINT "AngelVerificationDocuments_angelId_fkey" FOREIGN KEY ("angelId") REFERENCES "Angel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AngelPaidSignature" ADD CONSTRAINT "AngelPaidSignature_angelId_fkey" FOREIGN KEY ("angelId") REFERENCES "Angel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AngelBankData" ADD CONSTRAINT "AngelBankData_angelId_fkey" FOREIGN KEY ("angelId") REFERENCES "Angel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_angelId_fkey" FOREIGN KEY ("angelId") REFERENCES "Angel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackMedia" ADD CONSTRAINT "PackMedia_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
