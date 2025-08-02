# Privacy Breach Checker

A comprehensive privacy and security checking application that helps users verify if their personal information has been compromised in data breaches.

## 🌟 Features

- **🔍 Email Breach Checker**: Check if your email has been exposed in known data breaches
- **🔐 Password Security Checker**: Verify if your password has been compromised (safely hashed)
- **🌐 Domain Reputation Checker**: Check if a website is safe to visit
- **📍 IP Information & Blacklist Checker**: View your current IP and check if it's blacklisted
- **⚡ Real-time Results**: Get instant results with loading states and error handling
- **🎨 Modern UI**: Beautiful, responsive design with dark theme

## 🚀 Live Demo

**Frontend**: [Your Vercel/Netlify URL]
**Backend API**: [Your Railway URL]

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **CryptoJS** for password hashing
- **Lucide React** for icons

### Backend
- **FastAPI** for API development
- **Uvicorn** as ASGI server
- **BeautifulSoup4** for web scraping
- **Requests** for HTTP calls
- **Pydantic** for data validation

## 📦 Installation

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd privacy-breach-checker
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

4. **Start the backend**
   ```bash
   cd backend
   python main.py
   ```

5. **Start the frontend** (in a new terminal)
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## 🌐 Deployment

### Backend (Railway)

1. **Deploy to Railway**:
   - Connect your GitHub repository to Railway
   - Railway will automatically detect and deploy the Python backend
   - Get your Railway URL from the dashboard

2. **Update frontend configuration**:
   - Update `BACKEND_API_BASE` in `src/services/api.ts` with your Railway URL

### Frontend (Vercel/Netlify)

1. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically build and deploy the React app

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Optional API Keys for enhanced features
VITE_VIRUSTOTAL_API_KEY=your_virustotal_api_key_here
VITE_IP_QUALITY_SCORE_API_KEY=your_ip_quality_score_api_key_here
```

### API Keys (Optional)

- **VirusTotal API**: For domain reputation checking
  - Get your API key from: https://www.virustotal.com/gui/join-us
  - Free tier available with rate limits

- **IP Quality Score API**: For enhanced IP checking
  - Get your API key from: https://www.ipqualityscore.com/
  - Provides enhanced IP reputation and fraud scoring

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using SHA-1 before checking
- **No Data Storage**: Your information is never stored on our servers
- **Anonymous Checking**: No personal data is logged or tracked
- **Secure APIs**: All API calls use HTTPS and follow security best practices
- **CORS Protection**: Properly configured for production deployment

## 📊 API Endpoints

### Backend API (Railway)

- `GET /` - API information
- `GET /health` - Health check
- `POST /check-email` - Check email for breaches
- `GET /docs` - Interactive API documentation

### External APIs

- **HaveIBeenPwned**: Password checking (k-anonymity API)
- **VirusTotal**: Domain reputation checking
- **IP Geolocation**: IP information and blacklist checking

## 🎯 Usage Examples

### Email Breach Checking
```javascript
// Check if an email has been compromised
const result = await checkBreaches('user@example.com');
console.log(`Found ${result.breachCount} breaches`);
```

### Password Security
```javascript
// Check if a password has been compromised
const result = await checkPassword('mypassword123');
console.log(`Password found ${result.count} times in breaches`);
```

## 🚨 Error Handling

The application includes comprehensive error handling:

- **Network Errors**: Graceful fallbacks and retry mechanisms
- **API Failures**: Fallback responses when external APIs are unavailable
- **User Input Validation**: Proper validation for emails and passwords
- **Loading States**: Clear feedback during API calls

## 📈 Performance

- **Fast Loading**: Optimized with Vite for quick development and builds
- **Efficient API Calls**: Minimal data transfer and caching
- **Responsive Design**: Works on all device sizes
- **CDN Ready**: Static assets optimized for CDN delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **HaveIBeenPwned** for the password checking API
- **VirusTotal** for domain reputation data
- **Railway** for backend hosting
- **Vercel/Netlify** for frontend hosting

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/privacy-breach-checker/issues) page
2. Review the [API Documentation](http://localhost:8000/docs) (when running locally)
3. Check the [Deployment Guide](DEPLOYMENT.md) for deployment issues

---

**⚠️ Disclaimer**: This application is for educational and demonstration purposes. Always use official services for critical security checks in production environments. 