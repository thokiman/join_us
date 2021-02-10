

-- +----+-----------------+-----------+------+---------+------+------------------------+------------------+
-- | Id | User            | Host      | db   | Command | Time | State                  | Info             |
-- +----+-----------------+-----------+------+---------+------+------------------------+------------------+
-- |  5 | event_scheduler | localhost | NULL | Daemon  | 8582 | Waiting on empty queue | NULL             |
-- | 10 | root            | localhost | NULL | Query   |    0 | init                   | SHOW PROCESSLIST |
-- +----+-----------------+-----------+------+---------+------+------------------------+------------------+
-- 2 rows in set (0.00 sec)

-- mysql> SHOW GLOBAL VARIABLES LIKE 'PORT';
-- +---------------+-------+
-- | Variable_name | Value |
-- +---------------+-------+
-- | port          | 3306  |
-- +---------------+-------+
-- 1 row in set (0.10 sec)`

/* DROP DATABASE join_us\p; */
/* CREATE DATABASE join_us\p; */

/* USE join_us\p; */

/* CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
    )\p; */

DESC users\p; 

/* test */
/* INSERT INTO users (email) 
    VALUES 
        ('Katie34@gmail.com'),
        ('Tunde@gmail.com')\p; */
/* INSERT INTO users (email) VALUES ('the_dog@gmail.com')\p; */
SELECT * FROM users\p;
SELECT COUNT(*) FROM users\p;

SELECT DATE_FORMAT(created_at,'%M %D %Y') AS earliest_date FROM users
    ORDER BY created_at LIMIT 1\p;

SELECT DATE_FORMAT(MIN(created_at),'%M %D %Y') AS earliest_date FROM users\p;

SELECT email, DATE_FORMAT(created_at,'%M %D %Y') AS earliest_date  FROM users
    WHERE created_at = (SELECT MIN(created_at) FROM users)\p;

SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count FROM users 
    GROUP BY MONTHNAME(created_at)
    ORDER BY count DESC\p;

SELECT COUNT(*) AS yahoo_users FROM users 
    WHERE email LIKE '%@yahoo.com'\p;

SELECT 
    CASE 
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*)
FROM users 
    GROUP BY provider
    ORDER BY provider\p;



