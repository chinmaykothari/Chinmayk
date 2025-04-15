import Cookies from 'js-cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    if (username === 'testuser' && password === 'password') {
      // In a real app, you would generate a secure token here (e.g., JWT)
      const token = 'your_secure_token_here';

      res.status(200).json({ success: true, message: 'Login successful', token });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}