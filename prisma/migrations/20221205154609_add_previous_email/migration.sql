/*
  Warnings:

  - A unique constraint covering the columns `[previous_email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `previous_email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN "previous_email" VARCHAR(255) NULL;
