/*
  Warnings:

  - You are about to drop the column `fullNama` on the `patients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fullName]` on the table `Patients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullName` to the `Patients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Patients_fullNama_key` ON `patients`;

-- AlterTable
ALTER TABLE `patients` DROP COLUMN `fullNama`,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Patients_fullName_key` ON `Patients`(`fullName`);
