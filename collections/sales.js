Sales = new Meteor.Collection( 'sales' );

Sales.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

// Sales.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true
// });

let SalesSchema = new SimpleSchema({
  "file": {
    type: String,
    label: "ID number for the sale."
  },
  "APN": {
    type: String,
    label: "Date"
  },
  "legal": {
    type: String,
    label: "Product"
  },
  "county": {
    type: String,
    label: "Price"
  },
  "saleDate": {
    type: String,
    label: "Payment Type"
  },
  "salePrice": {
    type: String,
    label: "Name"
  },
  "acres": {
    type: String,
    label: "City"
  },
  "buyer": {
    type: String,
    label: "State"
  },
  "buyerAddress": {
    type: String,
    label: "Country"
  },
  "seller": {
    type: String,
    label: "Created"
  },
  "saleType": {
    type: String,
    label: "Last Login"
  },
  "saleNote": {
    type: String,
    label: "saleNote"
  },
  "lender": {
    type: String,
    label: "lender"
  },
  "improvements": {
    type: String,
    label: "improvements"
  }
});

Sales.attachSchema( SalesSchema );
