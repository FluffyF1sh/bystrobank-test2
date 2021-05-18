ALTER TABLE organizations
	ADD COLUMN `surname` VARCHAR(255) NOT NULL,
    ADD COLUMN `patronic` VARCHAR(255);

ALTER TABLE individuals
 	ADD COLUMN `surname` VARCHAR(255) NOT NULL,
    ADD COLUMN `patronic` VARCHAR(255)