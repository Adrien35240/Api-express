-- Deploy template-api:1-initialdb to pg

BEGIN;

CREATE TABLE "item" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text
);

COMMIT;
