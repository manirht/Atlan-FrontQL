export const predefinedQueries = [
  {
    id: 1,
    text: "SELECT * FROM customers;",
    name: "Get All Customers",
    data: [
      { CustomerID: 1, CompanyName: "Alfreds Futterkiste", ContactName: "Maria Anders", City: "Berlin", Country: "Germany" },
      { CustomerID: 2, CompanyName: "Ana Trujillo Emparedados y helados", ContactName: "Ana Trujillo", City: "México D.F.", Country: "Mexico" },
      { CustomerID: 3, CompanyName: "Antonio Moreno Taquería", ContactName: "Antonio Moreno", City: "México D.F.", Country: "Mexico" },
      { CustomerID: 4, CompanyName: "Around the Horn", ContactName: "Thomas Hardy", City: "London", Country: "UK" },
      { CustomerID: 5, CompanyName: "Berglunds snabbköp", ContactName: "Christina Berglund", City: "Luleå", Country: "Sweden" },
      { CustomerID: 6, CompanyName: "Blauer See Delikatessen", ContactName: "Hanna Moos", City: "Mannheim", Country: "Germany" },
      { CustomerID: 7, CompanyName: "Blondesddsl père et fils", ContactName: "Frédérique Citeaux", City: "Strasbourg", Country: "France" },
      { CustomerID: 8, CompanyName: "Bólido Comidas preparadas", ContactName: "Martín Sommer", City: "Madrid", Country: "Spain" },
      { CustomerID: 9, CompanyName: "Bon app'", ContactName: "Laurence Lebihan", City: "Marseille", Country: "France" },
      { CustomerID: 10, CompanyName: "Bottom-Dollar Markets", ContactName: "Elizabeth Lincoln", City: "Tsawassen", Country: "Canada" },
      { CustomerID: 11, CompanyName: "B's Beverages", ContactName: "Victoria Ashworth", City: "London", Country: "UK" },
      { CustomerID: 12, CompanyName: "Cactus Comidas para llevar", ContactName: "Patricio Simpson", City: "Buenos Aires", Country: "Argentina" },
      { CustomerID: 13, CompanyName: "Centro comercial Moctezuma", ContactName: "Francisco Chang", City: "México D.F.", Country: "Mexico" },
      { CustomerID: 14, CompanyName: "Chop-suey Chinese", ContactName: "Yang Wang", City: "Bern", Country: "Switzerland" },
      { CustomerID: 15, CompanyName: "Comércio Mineiro", ContactName: "Pedro Afonso", City: "Sao Paulo", Country: "Brazil" },
      { CustomerID: 16, CompanyName: "Consolidated Holdings", ContactName: "Elizabeth Brown", City: "London", Country: "UK" },
      { CustomerID: 17, CompanyName: "Drachenblut Delikatessen", ContactName: "Sven Ottlieb", City: "Aachen", Country: "Germany" },
      { CustomerID: 18, CompanyName: "Du monde entier", ContactName: "Janine Labrune", City: "Nantes", Country: "France" },
      { CustomerID: 19, CompanyName: "Eastern Connection", ContactName: "Ann Devon", City: "London", Country: "UK" },
      { CustomerID: 20, CompanyName: "Ernst Handel", ContactName: "Roland Mendel", City: "Graz", Country: "Austria" },
      { CustomerID: 21, CompanyName: "Familia Arquibaldo", ContactName: "Aria Cruz", City: "Sao Paulo", Country: "Brazil" },
      { CustomerID: 22, CompanyName: "FISSA Fabrica Inter. Salchichas S.A.", ContactName: "Diego Roel", City: "Madrid", Country: "Spain" },
      { CustomerID: 23, CompanyName: "Folies gourmandes", ContactName: "Martine Rancé", City: "Lille", Country: "France" },
      { CustomerID: 24, CompanyName: "Folk och fä HB", ContactName: "Maria Larsson", City: "Bräcke", Country: "Sweden" },
      { CustomerID: 25, CompanyName: "Frankenversand", ContactName: "Peter Franken", City: "München", Country: "Germany" },
      { CustomerID: 26, CompanyName: "Galería del gastronómico", ContactName: "Luis Rodríguez", City: "Barcelona", Country: "Spain" },
      { CustomerID: 27, CompanyName: "Gaedeke Buchhandlung", ContactName: "Berthold Gaede", City: "Berlin", Country: "Germany" },
      { CustomerID: 28, CompanyName: "G'day Mate", ContactName: "Stella Artois", City: "Adelaide", Country: "Australia" },
      { CustomerID: 29, CompanyName: "Giga Goods", ContactName: "Melanie Fehr", City: "Berlin", Country: "Germany" },
      { CustomerID: 30, CompanyName: "Gloria's", ContactName: "Gloria Vega", City: "Los Angeles", Country: "USA" },
      { CustomerID: 31, CompanyName: "Gourmet Lanchonetes", ContactName: "Rogério Lima", City: "São Paulo", Country: "Brazil" },
      { CustomerID: 32, CompanyName: "Great Lakes Food", ContactName: "Ronald Lohner", City: "Chicago", Country: "USA" },
      { CustomerID: 33, CompanyName: "Greenfields", ContactName: "Sasha Abbott", City: "Vancouver", Country: "Canada" },
      { CustomerID: 34, CompanyName: "Green Grocer", ContactName: "Sandy Myers", City: "London", Country: "UK" },
      { CustomerID: 35, CompanyName: "Guerreiro", ContactName: "Julio Guerreiro", City: "Lisbon", Country: "Portugal" },
      { CustomerID: 36, CompanyName: "Hansa", ContactName: "Bertil Karlsson", City: "Stockholm", Country: "Sweden" },
      { CustomerID: 37, CompanyName: "Harrison's", ContactName: "Joseph Harrison", City: "Manchester", Country: "UK" },
      { CustomerID: 38, CompanyName: "Henriksens", ContactName: "Tove Henriksen", City: "Oslo", Country: "Norway" },
      { CustomerID: 39, CompanyName: "Hoffman", ContactName: "Kurt Hoffman", City: "Hamburg", Country: "Germany" },
      { CustomerID: 40, CompanyName: "Holzhersteller", ContactName: "Dietmar Brühl", City: "Frankfurt", Country: "Germany" },
      { CustomerID: 41, CompanyName: "Hunan Gourmet", ContactName: "Ren Zhang", City: "Beijing", Country: "China" },
      { CustomerID: 42, CompanyName: "Hunter", ContactName: "Diana Hunter", City: "New York", Country: "USA" },
      { CustomerID: 43, CompanyName: "Importadora", ContactName: "Sergio López", City: "Madrid", Country: "Spain" },
      { CustomerID: 44, CompanyName: "International", ContactName: "Margaret Hall", City: "London", Country: "UK" },
      { CustomerID: 45, CompanyName: "Italicious", ContactName: "Cecilia De Luca", City: "Roma", Country: "Italy" },
      { CustomerID: 46, CompanyName: "J. G. Dantzig", ContactName: "Jonathan Dantzig", City: "Berlin", Country: "Germany" },
      { CustomerID: 47, CompanyName: "Jackson's", ContactName: "Victoria Jackson", City: "London", Country: "UK" },
      { CustomerID: 48, CompanyName: "Johnson's", ContactName: "Alan Johnson", City: "Chicago", Country: "USA" },
      { CustomerID: 49, CompanyName: "Jordan's", ContactName: "Jordan Cohen", City: "Paris", Country: "France" },
      { CustomerID: 50, CompanyName: "Just Juices", ContactName: "Grace Richards", City: "Sydney", Country: "Australia" },
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
