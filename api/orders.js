// api/orders.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { productId, customerName } = req.body;

    // In a real app, you would save this to a database here
    console.log(`New Order: Product ID ${productId} from ${customerName}`);

    return res.status(201).json({
      success: true,
      message: `Order received! Product #${productId} has been added to your queue.`
    });
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}