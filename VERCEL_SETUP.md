# Vercel Deployment Setup

## MongoDB Environment Variable Setup

Vercel पर deploy करने के लिए MongoDB connection string को Environment Variable के रूप में add करना होगा।

### Step 1: Vercel Dashboard में जाएं

1. https://vercel.com/dashboard पर login करें
2. अपना project select करें (`my_portfolio`)

### Step 2: Environment Variables Add करें

1. Project page पर **Settings** tab पर click करें
2. Left sidebar में **Environment Variables** पर click करें
3. **Add New** button click करें
4. Fill करें:
   - **Key:** `MONGODB_URI`
   - **Value:** `mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority`
   - **Environment:** सभी environments select करें (Production, Preview, Development)
5. **Save** button click करें

### Step 3: Redeploy करें

1. **Deployments** tab पर जाएं
2. Latest deployment पर **...** (three dots) click करें
3. **Redeploy** select करें
4. या नया commit push करें

## Important Notes:

⚠️ **Password में `@` symbol है:**
- Password: `Contact@123`
- Connection string में इसे `Contact%40123` के रूप में encode करना होगा
- `@` = `%40` (URL encoding)

✅ **Complete Connection String:**
```
mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Verify Setup:

1. Environment Variables add करने के बाद
2. Project को redeploy करें
3. Build logs check करें - error नहीं आना चाहिए
4. Contact form test करें - data save होना चाहिए

## Troubleshooting:

### Error: MONGODB_URI not defined
- Vercel Dashboard में Environment Variable add करें
- सभी environments (Production, Preview, Development) select करें
- Redeploy करें

### Error: Authentication failed
- MongoDB Atlas में username/password verify करें
- Password में special characters properly encode करें

### Error: IP not whitelisted
- MongoDB Atlas → Network Access
- "Allow Access from Anywhere" enable करें (0.0.0.0/0)

