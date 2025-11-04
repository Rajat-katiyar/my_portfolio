# MongoDB Setup Instructions

## Step 1: Create MongoDB Atlas Account (Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (free tier is available)

## Step 2: Get Your Connection String

1. In MongoDB Atlas Dashboard, click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Copy the connection string (it will look like):
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
   ```

## Step 3: Create Database User

1. In MongoDB Atlas, go to **Database Access**
2. Click **"Add New Database User"**
3. Create a username and password
4. Give user **"Read and write to any database"** permissions
5. Replace `<username>` and `<password>` in your connection string

## Step 4: Configure Network Access

1. In MongoDB Atlas, go to **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development) or add specific IPs
4. Click **"Confirm"**

## Step 5: Set Environment Variable

### For Local Development:

1. Create a file named `.env.local` in the root directory
2. Add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
3. Replace `username`, `password`, `cluster`, and `portfolio` with your actual values

### For Vercel Deployment:

1. Go to your Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Key:** `MONGODB_URI`
   - **Value:** Your MongoDB connection string
5. Click **"Save"**
6. Redeploy your application

## Step 6: Database Name

The database name in the connection string (e.g., `portfolio`) will be automatically created when the first contact is saved.

## Collection Structure

The contact form will create a collection named `contacts` with the following structure:

```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check MongoDB Atlas → **Collections** to see your saved contact

## Troubleshooting

- **Connection Error:** Make sure your IP is whitelisted in Network Access
- **Authentication Error:** Check your username and password in the connection string
- **Environment Variable Not Found:** Make sure `.env.local` is in the root directory and restart your dev server

