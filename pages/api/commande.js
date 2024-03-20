import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise; // Wait for the promise to resolve
      const database = client.db('unik');
      const collection = database.collection('commande');

      const data = req.body;

      const result = await collection.insertOne(data);

      res.status(201).json(true);

    } catch (error) {
      console.error('Erreur lors de l\'opération MongoDB :', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }
}
