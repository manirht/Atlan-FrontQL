export const predefinedQueries = [
    {
      id: 1,
      text: "SELECT * FROM customers;",
      name: "Get All Customers",
      data: [
        { CustomerID: 1, CompanyName: "Alfreds Futterkiste", ContactName: "Maria Anders", City: "Berlin", Country: "Germany" },
        { CustomerID: 2, CompanyName: "Berglunds snabbköp", ContactName: "Christina Berglund", City: "Luleå", Country: "Sweden" }
      ],
      columns: ["CustomerID", "CompanyName", "ContactName", "City", "Country"],
      command: "SELECT * FROM customers;",
    },
    {
      id: 2,
      text: "SELECT * FROM orders WHERE CustomerID = 1;",
      name: "Get Orders for Customer 1",
      data: [
        { OrderID: 10248, CustomerID: 1, OrderDate: "2023-07-01", ShipCity: "Berlin" },
        { OrderID: 10249, CustomerID: 2, OrderDate: "2023-07-02", ShipCity: "Luleå" }
      ],
      columns: ["OrderID", "CustomerID", "OrderDate", "ShipCity"]
    }
  ];