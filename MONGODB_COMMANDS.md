# MongoDB Atlas Database Setup Commands

## Method 1: Using NPM Script (Recommended)

### Step 1: Create `.env.local` file
```bash
# Root directory में .env.local file बनाएं
MONGODB_URI=mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 2: Run initialization script
```bash
npm run init-db
```

यह command:
- MongoDB Atlas से connect होगा
- Database verify करेगा
- Collection check करेगा
- Connection test करेगा

---

## Method 2: Using MongoDB Compass

### Step 1: MongoDB Compass Download करें
https://www.mongodb.com/try/download/compass

### Step 2: Connection String से Connect करें
1. MongoDB Compass open करें
2. Connection string paste करें:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```
3. Connect करें

### Step 3: Database Create करें
1. Left sidebar में database name (e.g., `portfolio`) दिखेगा
2. या manually create करें:
   - "Create Database" button click करें
   - Database name: `portfolio`
   - Collection name: `contacts`

---

## Method 3: Using MongoDB Shell (mongosh)

### Step 1: MongoDB Shell Install करें
```bash
npm install -g mongosh
```

### Step 2: Connect करें
```bash
mongosh "mongodb+srv://username:password@cluster.mongodb.net/portfolio"
```

### Step 3: Database और Collection Create करें
```javascript
// Database use करें (auto-create हो जाएगा)
use portfolio

// Collection create करें (auto-create हो जाएगा जब पहला document insert हो)
db.contacts.insertOne({
  name: "Test",
  email: "test@example.com",
  mobileNumber: "+91-9876543210",
  subject: "Test Subject",
  message: "Test Message"
})

// Verify करें
show dbs
show collections
db.contacts.find()
```

---

## Method 4: Direct from Next.js Application

**Note:** Database और collection automatically create हो जाएगा जब पहली बार contact form submit होगा।

1. `.env.local` में MongoDB URI add करें
2. Portfolio website run करें: `npm run dev`
3. Contact form fill करके submit करें
4. Database और collection automatically create हो जाएगा

---

## Quick Setup Commands

### Windows PowerShell:
```powershell
# .env.local file create करें
New-Item -Path ".env.local" -ItemType File
Add-Content -Path ".env.local" -Value "MONGODB_URI=your_connection_string_here"

# Database initialize करें
npm run init-db
```

### Linux/Mac:
```bash
# .env.local file create करें
echo "MONGODB_URI=your_connection_string_here" > .env.local

# Database initialize करें
npm run init-db
```

---

## Troubleshooting

### Error: MONGODB_URI not defined
- `.env.local` file बनाएं root directory में
- Connection string properly add करें

### Error: Authentication failed
- MongoDB Atlas में username/password check करें
- Connection string में special characters properly encode करें

### Error: IP not whitelisted
- MongoDB Atlas → Network Access
- अपना IP add करें या "Allow Access from Anywhere" enable करें

### Error: Connection timeout
- Internet connection check करें
- MongoDB cluster status check करें

---

## Verify Database Setup

After running any method, verify:

1. **MongoDB Atlas Dashboard:**
   - Collections tab में जाएं
   - `contacts` collection दिखनी चाहिए

2. **Using Compass:**
   - `portfolio` database में `contacts` collection दिखनी चाहिए

3. **Using Next.js:**
   - Contact form submit करें
   - MongoDB Atlas में data check करें

