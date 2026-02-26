# Quranify Dua API

A free, open-source REST API providing authentic Islamic duas (supplications) with Arabic text, English translations, and transliterations.

## Features

-  **Comprehensive Collection**: Duas from various categories (protection, forgiveness, Rabbana duas)
-  **Free & Open Source**: No authentication required
-  **Fast & Simple**: RESTful JSON API
-  **Easy Integration**: Works with any programming language or framework

## API Endpoints

### Base URL
```
https://your-api.vercel.app/api
```

### Get All Duas by Category
```
GET /api/duas/:category
```

**Available Categories:**
- `protection` - Duas for protection from evil and harm
- `forgive` - Duas asking for Allah's forgiveness
- `rabbanas` - "Rabbana" duas from the Quran

**Example:**
```bash
curl https://your-api.vercel.app/api/duas/protection
```

### Get Specific Dua by ID
```
GET /api/duas/:category/:id
```

**Example:**
```bash
curl https://your-api.vercel.app/api/duas/protection/1
```

## Response Format

Each dua object contains:
```json
{
  "id": 1,
  "category": "protection",
  "arabic": "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ...",
  "translation": "Allah — there is no god...",
  "transliteration": "Allahu laa ilaaha illaa Huwal...",
  "reference": "Ayatul Kursi – Surah Al-Baqarah 2:255"
}
```

## Quick Start

### JavaScript (Fetch)
```javascript
fetch('https://your-api.vercel.app/api/duas/protection')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Python
```python
import requests

response = requests.get('https://your-api.vercel.app/api/duas/protection')
duas = response.json()
print(duas)
```

## Deploy to Vercel (Free)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Project**
   - **Root Directory**: Leave as `.` (root)
   - **Framework Preset**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - Click "Deploy"

4. **That's it!** Your API will be live at `https://your-project.vercel.app/api`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From your project root directory
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? (press enter for default)
   - In which directory is your code located? **.**
   - Want to modify settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Environment Configuration

The API is configured to work on Vercel automatically with the included `vercel.json` file. No additional environment variables are needed.

### Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Local Development

### Prerequisites
- Node.js 14+ installed

### Installation
```bash
# Install dependencies
npm install

# Start the server
npm start
```

The API will be available at `http://localhost:3000/api`

### Test Endpoints Locally
```bash
# Get all protection duas
curl http://localhost:3000/api/duas/protection

# Get specific dua
curl http://localhost:3000/api/duas/protection/1
```

## Documentation Website

A full documentation website is included in the `/docs` folder built with Next.js.

### Run Docs Locally
```bash
cd docs
npm install
npm run dev
```

Visit `http://localhost:3000` to view the documentation site.

### Deploy Docs to Vercel

You can deploy the docs site separately:

1. Create a new project on Vercel
2. Set **Root Directory** to `docs`
3. Framework will auto-detect as Next.js
4. Deploy!

## Project Structure

```
quranify-dua-api/
├── data/                    # JSON data files
│   ├── protection-duas.json
│   ├── forgive-duas.json
│   └── rabbanas-duas.json
├── routes/                  # API routes
│   └── dua.js
├── docs/                    # Next.js documentation site
│   ├── app/
│   │   ├── page.tsx        # Home page
│   │   ├── docs/           # API documentation
│   │   └── examples/       # Code examples
│   └── package.json
├── server.js               # Express server
├── vercel.json            # Vercel configuration
└── package.json           # Project dependencies
```

## Contributing

Contributions are welcome! Feel free to:
- Add more duas to existing categories
- Create new categories
- Improve translations
- Report issues
- Submit pull requests

## License

ISC

## Support

If you find this API useful, please:
- ⭐ Star the repository
- 🔄 Share it with others
- 🤲 Make dua for the contributors

---

**Note**: After deployment, update all instances of `your-api.vercel.app` in the documentation with your actual Vercel URL.
