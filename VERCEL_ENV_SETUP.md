# Vercel में MongoDB Environment Variable कैसे Set करें

## ⚠️ Important: Connection String में Password Encoding

**Password:** `Contact@123`  
**URL Encoded:** `Contact%40123` (क्योंकि `@` = `%40`)

## ✅ Correct Connection String:

```
mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## 📋 Step-by-Step Guide (Vercel Dashboard)

### Step 1: Vercel Dashboard खोलें
1. Browser में जाएं: https://vercel.com/dashboard
2. Login करें (अगर पहले से login नहीं हैं)

### Step 2: Project Select करें
1. Dashboard में अपना project दिखेगा (`rajatkatiyar` या `my_portfolio`)
2. Project पर click करें

### Step 3: Settings Tab में जाएं
1. Project page के top menu में **Settings** tab पर click करें
2. Left sidebar में scroll करें और **Environment Variables** section में जाएं

### Step 4: Environment Variable Add करें
1. **Add New** button पर click करें
2. **Key** field में type करें: `MONGODB_URI` (exactly यही, capital letters में)
3. **Value** field में paste करें:
   ```
   mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
4. **Environment** section में सभी तीनों checkboxes select करें:
   - ☑️ **Production**
   - ☑️ **Preview**
   - ☑️ **Development**
5. **Save** button पर click करें

### Step 5: Redeploy करें
1. Top menu में **Deployments** tab पर click करें
2. Latest deployment (सबसे ऊपर) पर **...** (three dots menu) click करें
3. **Redeploy** option select करें
4. Confirm करें

**या** आप बस wait करें - Vercel automatically redeploy कर देगा कुछ minutes में

---

## 🔍 Verify करें कि Variable Set हो गया है

1. Settings → Environment Variables में जाएं
2. `MONGODB_URI` variable दिखनी चाहिए
3. Value में connection string दिखनी चाहिए
4. All three environments (Production, Preview, Development) selected होने चाहिए

---

## 🧪 Test करें

1. Redeploy के बाद (2-3 minutes wait करें)
2. अपनी website खोलें: https://rajatkatiyar.vercel.app
3. Contact form में जाएं
4. Form fill करें और submit करें
5. **Error नहीं आना चाहिए** ✅
6. Success message दिखना चाहिए

---

## ❌ Common Mistakes (इनसे बचें)

### ❌ गलत Connection String:
```
mongodb+srv://my-portfolio:Contact@123@cluster0...  // ❌ WRONG - @ symbol नहीं encode किया
```

### ✅ सही Connection String:
```
mongodb+srv://my-portfolio:Contact%40123@cluster0...  // ✅ CORRECT - @ को %40 में encode किया
```

### ❌ गलत Key Name:
```
mongodb_uri  // ❌ WRONG - lowercase
MongoDB_URI  // ❌ WRONG - wrong case
```

### ✅ सही Key Name:
```
MONGODB_URI  // ✅ CORRECT - exactly यही
```

---

## 🆘 Troubleshooting

### अगर अभी भी error आ रहा है:

1. **Check करें:**
   - ✅ Variable name exactly `MONGODB_URI` है (no spaces, no typos)
   - ✅ Connection string correctly paste किया गया है
   - ✅ सभी 3 environments selected हैं
   - ✅ Redeploy किया गया है

2. **MongoDB Atlas Check करें:**
   - MongoDB Atlas Dashboard: https://cloud.mongodb.com/
   - **Network Access** → Check करें कि "Allow Access from Anywhere" (0.0.0.0/0) enabled है
   - अगर नहीं है, तो **Add IP Address** → **Allow Access from Anywhere** select करें

3. **Vercel Logs Check करें:**
   - Vercel Dashboard → Deployments → Latest deployment → **Logs** tab
   - Error messages देखें

---

## 📞 Quick Reference

**Connection String:**
```
mongodb+srv://my-portfolio:Contact%40123@cluster0.zdko2jj.mongodb.net/portfolio?retryWrites=true&w=majority
```

**Environment Variable:**
- Key: `MONGODB_URI`
- Value: (ऊपर वाला connection string)
- Environments: Production, Preview, Development (सभी)

---

## ✅ Success Checklist

- [ ] Vercel Dashboard में login किया
- [ ] Project select किया
- [ ] Settings → Environment Variables में गया
- [ ] `MONGODB_URI` variable add किया
- [ ] Connection string correctly paste किया (with `%40`)
- [ ] सभी 3 environments select किए
- [ ] Save किया
- [ ] Project redeploy किया
- [ ] Website पर contact form test किया
- [ ] Error नहीं आया ✅

---

**🎉 अगर सभी steps follow किए हैं, तो error fix हो जाना चाहिए!**

