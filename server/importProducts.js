require('dotenv').config();
const mongoose = require('mongoose');
const csv = require('csvtojson');
const path = require('path');
const Product = require('./models/Product');

const csvFile = path.join(__dirname, '..', 'project.products.csv');

async function main() {
  await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to DB for import');

  const rows = await csv().fromFile(csvFile);
  if (!rows.length) {
    console.log('No rows found in CSV');
    process.exit(0);
  }

  const docs = rows.map(r => {
    // Normalize fields to match Product schema
    const tags = r.tags ? String(r.tags).split(/[,;]\s*/).map(t => t.trim()).filter(Boolean) : [];
    const quentity = r.quentity ? Number(r.quentity) : 0;
    const price = r.price ? Number(r.price) : 0;
    const category = r.category && ['bow','guitars','pianos','windInstrument','drums','other'].includes(r.category) ? r.category : 'other';

    return {
      name: r.name || 'Unnamed',
      descraption: r.descraption || r.description || '',
      category,
      tags,
      quentity,
      price,
      image: r.image || '1.png'
    };
  });

  try {
    const res = await Product.insertMany(docs);
    console.log('Inserted', res.length, 'products');
  } catch (err) {
    console.error('Insert error:', err);
  } finally {
    mongoose.connection.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
