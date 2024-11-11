-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "registrationState" TEXT NOT NULL,
    "registrationExpiry" DATETIME NOT NULL,
    "currentOdometerReading" INTEGER NOT NULL,
    "lastCurrentOdometerReadingDate" DATETIME NOT NULL,
    "vin" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdDate" DATETIME NOT NULL
);
