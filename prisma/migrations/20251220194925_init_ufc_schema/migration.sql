-- CreateTable
CREATE TABLE "Fighter" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "nickname" VARCHAR(255),
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "draws" INTEGER NOT NULL DEFAULT 0,
    "heightCm" INTEGER NOT NULL,
    "reachCm" INTEGER NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "bio" TEXT,
    "imageUrl" TEXT NOT NULL DEFAULT '/avatars/fighter-placeholder.png',
    "weightClassId" UUID,
    "gymId" UUID,

    CONSTRAINT "Fighter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gym" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeightClass" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "limitLb" INTEGER NOT NULL,

    CONSTRAINT "WeightClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FightingStyle" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FightingStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fight" (
    "id" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "fighterAId" UUID NOT NULL,
    "fighterBId" UUID NOT NULL,
    "isMainEvent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsItem" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FighterToFightingStyle" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_FighterToFightingStyle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FighterToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_FighterToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gym_name_key" ON "Gym"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WeightClass_name_key" ON "WeightClass"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FightingStyle_name_key" ON "FightingStyle"("name");

-- CreateIndex
CREATE INDEX "_FighterToFightingStyle_B_index" ON "_FighterToFightingStyle"("B");

-- CreateIndex
CREATE INDEX "_FighterToUser_B_index" ON "_FighterToUser"("B");

-- AddForeignKey
ALTER TABLE "Fighter" ADD CONSTRAINT "Fighter_weightClassId_fkey" FOREIGN KEY ("weightClassId") REFERENCES "WeightClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fighter" ADD CONSTRAINT "Fighter_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_fighterAId_fkey" FOREIGN KEY ("fighterAId") REFERENCES "Fighter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_fighterBId_fkey" FOREIGN KEY ("fighterBId") REFERENCES "Fighter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FighterToFightingStyle" ADD CONSTRAINT "_FighterToFightingStyle_A_fkey" FOREIGN KEY ("A") REFERENCES "Fighter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FighterToFightingStyle" ADD CONSTRAINT "_FighterToFightingStyle_B_fkey" FOREIGN KEY ("B") REFERENCES "FightingStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FighterToUser" ADD CONSTRAINT "_FighterToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Fighter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FighterToUser" ADD CONSTRAINT "_FighterToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
