// api/products.js
export default function handler(req, res) {
  // Array of your product data
  const products = [
    { id: 1, name: "T-SHIRT PRINTING", price: 150 },
    { id: 2, name: "TARPAULIN PRINTING", price: 250 },
    { id: 3, name: "STICKERS", price: 1 },
    { id: 4, name: "PVC ID", price: 40 },
    { id: 5, name: "ACRYLIC SIGNAGE", price: 500 },
    { id: 6, name: "CUSTOM DESIGN", price: 300 }
  ];

  res.status(200).json({
    success: true,
    data: products
  });
}