# WarehouseManager

Warehouse Manager is a simple exercise about implementing an ASP.NET Core API that supports warehouse operations.

The API should expose the following methods:
- GetProducts() - this method returns all products that are currently stored in the warehouse
- SetProductCapacity(id, capacity) - this method sets the maximum storage capacity for specified product
- ReceiveProduct(id, quantity) - this method increments the current quantity of a product stored in the warehouse
- DispatchProduct(id, quantity) - this method decrements the current quantity of a product stored in the warehouse

# Installation

You can get the code by
`https://github.com/nguyennvo215/WarehouseManager.git`

Then if you open the solution file .sln, you can simply run the project. Or if you use the command line, simply run the code:

`dotnet run`

The project will start and the DbInitializer will automatically seed the data into DB and you can use the project as is.

# How to Run

**Run Backend**
First you need to start the Backend of the project or also called the server side by opening the .sln and run from there or use the command line

`dotnet run`

**Run Frontend**
Then you need to start the Frontend of the project or also called the client side by going to the directory "WarehouseClientSide" in the solution folder.
Run the command line:

`ng serve --o`

