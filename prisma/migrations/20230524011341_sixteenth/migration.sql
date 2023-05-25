/*
  Warnings:

  - You are about to drop the column `doctorsId` on the `patients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `Patients_doctorsId_fkey`;

-- AlterTable
ALTER TABLE `patients` DROP COLUMN `doctorsId`;
