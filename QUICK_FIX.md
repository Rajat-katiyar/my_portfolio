# Quick Fix: MongoDB Connection Error

## Problem
Error: "Server configuration error: MongoDB connection not configured"

## Solution: Vercel में Environment Variable Set करें

### Method 1: Vercel Dashboard (Recommended - सबसे आसान)

1. **Vercel Dashboard खोलें:**
   - https://vercel.com/dashboard पर जाएं
   - Login करें

2. **Project Select करें:**
   - अपना project (`rajatkatiyar` या `my_portfolio`) click करें

3. **Settings में जाएं:**
   - Top menu में **Settings** tab click करें
   - Left sidebar में **Environment Variables** click करें

4. **Environment Variable Add करें:**
   - **Add New** button click करें
   - **Key:** `MONGODB_URI` (exactly यही लिखें)
   - **Value:** 
     ```
     mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
     ```
   - **Environment:** सभी तीनों select करें:
     - ☑️ Production
     - ☑️ Preview  
     - ☑️ Development
   - **Save** button click करें

5. **Redeploy करें:**
   - **Deployments** tab पर जाएं
   - Latest deployment पर **...** (three dots) click करें
   - **Redeploy** select करें
   - या wait करें - automatic redeploy हो जाएगा

### Method 2: Vercel CLI (Command Line)

1. **Vercel CLI में Login करें:**
   ```bash
   vercel login
   ```
   - Browser में login page open होगा
   - Login करें और authorize करें

2. **Environment Variable Add करें:**
   ```bash
   vercel env add MONGODB_URI production
   ```
   - जब prompt आए, यह value paste करें:
   ```
   mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

3. **Preview और Development के लिए भी add करें:**
   ```bash
   vercel env add MONGODB_URI preview
   vercel env add MONGODB_URI development
   ```

4. **Redeploy करें:**
   ```bash
   vercel --prod
   ```

## Verify करें

1. Environment Variable add करने के बाद
2. Project को redeploy करें (automatic या manual)
3. Website पर जाकर contact form test करें
4. Error नहीं आना चाहिए
5. Form submit होने पर data MongoDB में save होना चाहिए

## Important Notes

⚠️ **Password Encoding:**
- Password `Contact@123` है
- Connection string में `@` को `%40` से replace किया गया है
- यह URL encoding है

✅ **Complete Connection String:**
```
mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Troubleshooting

### अगर अभी भी error आ रहा है:

1. ✅ Vercel Dashboard में जाकर verify करें कि `MONGODB_URI` variable add हो गया है
2. ✅ सभी environments (Production, Preview, Development) select हैं
3. ✅ Connection string correctly paste किया गया है (no extra spaces)
4. ✅ Project को redeploy किया गया है
5. ✅ MongoDB Atlas में Network Access check करें - "Allow Access from Anywhere" enabled होना चाहिए

### MongoDB Atlas Network Access Check:

1. MongoDB Atlas Dashboard: https://cloud.mongodb.com/
2. **Network Access** section में जाएं
3. **IP Access List** check करें
4. अगर `0.0.0.0/0` नहीं है, तो **Add IP Address** → **Allow Access from Anywhere** select करें

