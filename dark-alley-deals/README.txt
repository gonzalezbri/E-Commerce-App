-- Create the table
CREATE TABLE inventory (
  id serial PRIMARY KEY,
  item_type VARCHAR(100),
  item_name VARCHAR(100),
  item_picture VARCHAR(100),
  item_price DECIMAL(10, 2),
  item_description VARCHAR(255)
);

-- Insert data into the table
-- Type: Weapons
INSERT INTO inventory (item_type, item_name, item_picture, item_price, item_description)
VALUES
  ('Weapons', 'Link''s sword', ' ', 50.00, 'Legendary sword wielded by Link.'),
  ('Weapons', 'Lightsaber', ' ', 100.00, 'Elegant weapon of a Jedi Knight.'),
  ('Weapons', 'Gandalf''s Staff', ' ', 75.00, 'Magical staff carried by Gandalf the Grey.'),
  ('Weapons', 'Rocky''s Boxing gloves', ' ', 40.00, 'Boxing gloves used by Rocky Balboa.'),
  ('Weapons', 'Indiana Jones whip', ' ', 60.00, 'Whip used by Indiana Jones.'),
  ('Weapons', '007''s Golden Gun', ' ', 200.00, 'Iconic weapon of James Bond.');

-- Type: Infinity Stones (2 of 6)
INSERT INTO inventory (item_type, item_name, item_picture, item_price, item_description)
VALUES
  ('Infinity Stones', 'Power Stone', ' ', 150.00, 'Powerful gem with the color purple.'),
  ('Infinity Stones', 'Reality Stone', ' ', 150.00, 'Reality-altering gem with the color red.');

-- Type: Clothes
INSERT INTO inventory (item_type, item_name, item_picture, item_price, item_description)
VALUES
  ('Clothes', 'Spider-man''s used web shooter', ' ', 30.00, 'Web shooter used by Spider-man.'),
  ('Clothes', 'The One Ring', ' ', 500.00, 'Mystical ring from The Lord of the Rings.'),
  ('Clothes', 'Darth Vader mangled helm', ' ', 1000.00, 'Damaged helmet worn by Darth Vader.'),
  ('Clothes', 'Hulk''s torn shirt', ' ', 20.00, 'Tattered shirt worn by the Hulk.'),
  ('Clothes', 'Indiana Jones hat', ' ', 45.00, 'Famous hat worn by Indiana Jones.'),
  ('Clothes', 'Invisibility Cloak', ' ', 300.00, 'Cloak that grants invisibility.'),
  ('Clothes', 'Mary Poppins Bag', ' ', 250.00, 'Magical bag from Mary Poppins.'),
  ('Clothes', 'Nacho Libre''s Mask', ' ', 80.00, 'Wrestling mask worn by Nacho Libre.'),
  ('Clothes', 'Naruto''s Headband', ' ', 25.00, 'Headband worn by Naruto Uzumaki.'),
  ('Clothes', 'Riley''s Tank Top (Boondocks)', ' ', 35.00, 'Tank top worn by Riley Freeman from The Boondocks.');

-- Type: Vehicles
INSERT INTO inventory (item_type, item_name, item_picture, item_price, item_description)
VALUES
  ('Vehicles', 'Millennium Falcon', ' ', 1000000.00, 'Iconic spaceship from Star Wars.'),
  ('Vehicles', 'Batmobile', ' ', 500000.00, 'Batman''s high-tech vehicle.'),
  ('Vehicles', 'Wonder Woman''s Invisible Airplane', ' ', 800000.00, 'Invisible aircraft used by Wonder Woman.'),
  ('Vehicles', '(Krusty Krab''s) Patty Wagon', ' ', 200000.00, 'Vehicle used by the Krusty Krab in SpongeBob SquarePants.'),
  ('Vehicles', 'Tron cycle', ' ', 150000.00, 'Futuristic motorcycle from the movie Tron.'),
  ('Vehicles', 'Delorean', ' ', 750000.00, 'Time-traveling car from Back to the Future.'),
  ('Vehicles', 'Car from Speed Racer', ' ', 300000.00, 'Race car driven by Speed Racer.'),
  ('Vehicles', 'Banshee from Halo', ' ', 400000.00, 'Alien vehicle from the Halo video game series.'),
  ('Vehicles', 'Bumblebee (Transformers)', ' ', 600000.00, 'Autobot robot disguised as a Chevrolet Camaro.');

-- Type: Pets
INSERT INTO inventory (item_type, item_name, item_picture, item_price, item_description)
VALUES
  ('Pets', 'Gary (SpongeBob)', ' ', 100.00, 'Gary the snail from SpongeBob SquarePants.'),
  ('Pets', 'Chicken Little', ' ', 50.00, 'Chicken Little from the animated film Chicken Little.'),
  ('Pets', 'Scooby-Doo', ' ', 200.00, 'Scooby-Doo, the lovable Great Dane from the cartoon series.'),
  ('Pets', 'Top Cat', ' ', 80.00, 'Top Cat, the clever and charismatic cat from the animated series.'),
  ('Pets', 'Yogi & Boo Boo Bear', ' ', 120.00, 'Yogi Bear and Boo Boo Bear from the cartoon series Yogi Bear.'),
  ('Pets', 'CatDog', ' ', 150.00, 'CatDog, the conjoined twin cat and dog from the animated series.'),
  ('Pets', 'Clifford', ' ', 90.00, 'Clifford the Big Red Dog, a beloved children''s book character.'),
  ('Pets', 'Hercules''s Pegasus', ' ', 300.00, 'Pegasus, the winged horse from Greek mythology.'),
  ('Pets', 'Zoboomafoo', ' ', 70.00, 'Zoboomafoo, the leaping lemur from the TV show.'),
  ('Pets', 'Stuart Little', ' ', 180.00, 'Stuart Little, the adventurous mouse from the book and movie.');
