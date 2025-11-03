const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ Error: MONGODB_URI is not defined in .env.local')
  console.log('\n📝 Please create .env.local file with:')
  console.log('MONGODB_URI=your_mongodb_connection_string')
  process.exit(1)
}

async function initDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...')
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI)
    
    console.log('✅ Connected to MongoDB Atlas successfully!')
    
    // Get database name from connection string
    const dbName = mongoose.connection.db.databaseName
    console.log(`📦 Database: ${dbName}`)
    
    // Check if collection exists
    const collections = await mongoose.connection.db.listCollections().toArray()
    const collectionNames = collections.map(col => col.name)
    
    // Create Contact model
    const Contact = mongoose.model('Contact', new mongoose.Schema({
      name: String,
      email: String,
      mobileNumber: String,
      subject: String,
      message: String,
    }, { timestamps: true }))
    
    if (collectionNames.includes('contacts')) {
      console.log('✅ Collection "contacts" already exists')
      const count = await Contact.countDocuments()
      console.log(`📊 Total contacts in database: ${count}`)
    } else {
      console.log('📝 Creating collection "contacts"...')
      // Create collection by inserting and then deleting a dummy document
      const dummyContact = new Contact({
        name: 'Database Initialization',
        email: 'init@example.com',
        mobileNumber: '+91-0000000000',
        subject: 'Database Setup',
        message: 'This is a dummy document to initialize the collection. It will be removed.',
      })
      await dummyContact.save()
      await Contact.deleteOne({ email: 'init@example.com' })
      console.log('✅ Collection "contacts" created successfully!')
    }
    
    console.log('\n✅ Database initialization completed!')
    console.log('🎉 Your contact form is ready to save data.')
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message)
    if (error.message.includes('authentication failed')) {
      console.log('\n💡 Tip: Check your MongoDB username and password in connection string')
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n💡 Tip: Check your MongoDB cluster URL in connection string')
    } else if (error.message.includes('IP')) {
      console.log('\n💡 Tip: Make sure your IP is whitelisted in MongoDB Atlas Network Access')
    }
    process.exit(1)
  } finally {
    await mongoose.connection.close()
    console.log('\n🔌 Connection closed')
  }
}

initDatabase()

