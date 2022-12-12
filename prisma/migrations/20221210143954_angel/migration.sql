/*
  Warnings:

  - You are about to drop the column `mercadoPagoPlanId` on the `AngelPaidSignature` table. All the data in the column will be lost.
  - Added the required column `bankAccountType` to the `AngelBankData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankCheckDigita` to the `AngelBankData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holderName` to the `AngelBankData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagarmePagoPlanId` to the `AngelPaidSignature` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BankAccountType" AS ENUM ('CHECKING', 'SAVINGS');

-- AlterTable
ALTER TABLE "AngelBankData" ADD COLUMN     "bankAccountType" "BankAccountType" NOT NULL,
ADD COLUMN     "bankCheckDigita" TEXT NOT NULL,
ADD COLUMN     "holderName" TEXT NOT NULL,
ALTER COLUMN "bankCode" SET DATA TYPE TEXT,
ALTER COLUMN "bankAgency" SET DATA TYPE TEXT,
ALTER COLUMN "bankAccount" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "AngelPaidSignature" DROP COLUMN "mercadoPagoPlanId",
ADD COLUMN     "pagarmePagoPlanId" TEXT NOT NULL;
