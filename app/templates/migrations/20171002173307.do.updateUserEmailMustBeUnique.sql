ALTER TABLE IF EXISTS "users"
ADD CONSTRAINT uc_email UNIQUE("email");
