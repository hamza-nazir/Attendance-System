Attendance System – How to Set It Up (Simple Steps)
To use the Attendance System, follow these steps:

1. Install Packages
First, you need to install all the required files that the system needs to run.

Open the project folder in a terminal.

Type npm install and press Enter.
This will install all the necessary packages from the internet.

2. Create the Database Tables
The system uses a MySQL database.
To make the tables:

Open the .er file (ER diagram) in MySQL Workbench.

Click on Database → Forward Engineering.

Keep clicking Next to create all the tables automatically in your database.

3. Set Database Connection
Now, you have to tell the system how to connect to your database:

Open the file called connection.js.

In this file, write your MySQL username, password, and database name.


4. Run the System
After everything is ready:

Open the terminal again.

Run the command: node index.js
Or if you are using nodemon, run: npx nodemon index.js

Now the attendance system will start running.
