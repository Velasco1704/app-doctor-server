-- AlterTable
ALTER TABLE `patients` ADD COLUMN `doctorsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Patients` ADD CONSTRAINT `Patients_doctorsId_fkey` FOREIGN KEY (`doctorsId`) REFERENCES `Doctors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
