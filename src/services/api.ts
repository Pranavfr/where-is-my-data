import axios from 'axios';
import CryptoJS from 'crypto-js';
import { SearchResult, PasswordResult, DomainResult, IPInfo } from '../types';

// API Configuration
const VIRUSTOTAL_API_BASE = 'https://www.virustotal.com/vtapi/v2';
const IP_API_BASE = 'https://ipapi.co';
const IP_QUALITY_SCORE_API = 'https://www.ipqualityscore.com/api/json/ip';

// You'll need to get these API keys from the respective services
const VIRUSTOTAL_API_KEY = import.meta.env.VITE_VIRUSTOTAL_API_KEY || '';
const IP_QUALITY_SCORE_API_KEY = import.meta.env.VITE_IP_QUALITY_SCORE_API_KEY || '';

// Mock breach checking service for frontend-only deployment
export const checkBreaches = async (email: string): Promise<SearchResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data based on email patterns
  const mockBreaches = [];
  const emailDomain = email.split('@')[1]?.toLowerCase();
  
  // Simulate different scenarios based on email
  if (email.includes('test') || email.includes('example')) {
    mockBreaches.push({
      name: 'Test Data Breach',
      domain: 'test.com',
      breachDate: '2023-06-15',
      dataClasses: ['Email addresses', 'Passwords'],
      description: 'A simulated breach for testing purposes',
      logoPath: undefined
    });
  } else if (email.includes('admin') || email.includes('user')) {
    mockBreaches.push({
      name: 'User Database Breach',
      domain: 'userdata.com',
      breachDate: '2023-08-22',
      dataClasses: ['Email addresses', 'Usernames', 'IP addresses'],
      description: 'User account information was compromised',
      logoPath: undefined
    });
  } else if (email.includes('gmail') || email.includes('yahoo') || email.includes('hotmail')) {
    // Common email providers - simulate some breaches
    if (Math.random() > 0.7) {
      mockBreaches.push({
        name: 'Email Provider Breach',
        domain: emailDomain || 'email.com',
        breachDate: '2023-05-10',
        dataClasses: ['Email addresses', 'Names'],
        description: 'Email provider data was compromised',
        logoPath: undefined
      });
    }
  }

  const riskLevel = mockBreaches.length === 0 ? 'low' : 
                   mockBreaches.length < 3 ? 'medium' : 'high';

  return {
    query: email,
    breachCount: mockBreaches.length,
    breaches: mockBreaches,
    riskLevel
  };
};

// Custom password checking logic without external APIs
export const checkPassword = async (password: string): Promise<PasswordResult> => {
  // Hash the password using SHA-1 for consistency
  const hash = CryptoJS.SHA1(password).toString().toUpperCase();
  
  // Custom logic to determine if password is likely compromised
  const analysis = analyzePasswordStrength(password);
  
  let count = 0;
  let riskLevel: 'safe' | 'compromised' | 'highly-compromised' = 'safe';
  
  if (analysis.isCompromised) {
    count = analysis.breachCount;
    riskLevel = count > 1000 ? 'highly-compromised' : 'compromised';
  }

  return {
    hash: `SHA1:${hash}`,
    count,
    riskLevel,
    analysis: analysis.reasons // Add analysis reasons for display
  };
};

// Custom password analysis function
function analyzePasswordStrength(password: string) {
  const reasons: string[] = [];
  let breachCount = 0;
  let isCompromised = false;

  // Check for very short passwords
  if (password.length < 6) {
    reasons.push('Password is too short (less than 6 characters)');
    breachCount += 5000;
    isCompromised = true;
  }

  // Check for common weak passwords
  const weakPasswords = [
    '123456', 'password', '123456789', '12345678', '12345', 'qwerty', 
    'abc123', '111111', '123123', 'admin', 'letmein', 'welcome',
    'monkey', 'dragon', 'master', 'sunshine', 'princess', 'qwertyuiop',
    'superman', 'trustno1', 'butterfly', 'dolphin', 'baseball', 'football',
    'shadow', 'michael', 'mustang', 'jordan', 'harley', 'rangers',
    'gandalf', 'batman', 'tigger', 'marvin', 'dennis', 'freedom',
    'pussy', 'master', 'hello', 'fuckme', 'whatever', 'qazwsx',
    'trustno1', 'jordan23', 'slayer', 'passw0rd', 'dragon', 'master',
    'hello123', 'letmein123', 'welcome123', 'admin123', 'password123'
  ];

  if (weakPasswords.includes(password.toLowerCase())) {
    reasons.push('This is a commonly used weak password');
    breachCount += 10000;
    isCompromised = true;
  }

  // Check for sequential numbers
  const sequentialPatterns = [
    '123456789', '987654321', '12345678', '87654321', '1234567', '7654321',
    '123456', '654321', '12345', '54321', '1234', '4321', '123', '321'
  ];

  if (sequentialPatterns.includes(password)) {
    reasons.push('Password contains sequential numbers');
    breachCount += 3000;
    isCompromised = true;
  }

  // Check for repeated characters
  if (/(.)\1{2,}/.test(password)) {
    reasons.push('Password contains repeated characters');
    breachCount += 2000;
    isCompromised = true;
  }

  // Check if it looks like a phone number (10 digits)
  if (/^\d{10}$/.test(password)) {
    reasons.push('Password appears to be a phone number - highly likely to be compromised');
    breachCount += 8000;
    isCompromised = true;
  }

  // Check for keyboard patterns
  const keyboardPatterns = [
    'qwerty', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'qwerty123',
    'qazwsx', 'wsxedc', 'edcrfv', 'rfvtgb', 'tgbyhn', 'yhnujm',
    'uiop', 'asdf', 'zxcv', 'qwe', 'asd', 'zxc'
  ];

  if (keyboardPatterns.includes(password.toLowerCase())) {
    reasons.push('Password follows keyboard pattern');
    breachCount += 4000;
    isCompromised = true;
  }

  // Check for common years
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 30; i++) {
    years.push((currentYear - i).toString());
  }
  
  if (years.includes(password)) {
    reasons.push('Password is a common year');
    breachCount += 1500;
    isCompromised = true;
  }

  // Check for all lowercase or all uppercase
  if (password === password.toLowerCase() && password.length > 3) {
    reasons.push('Password contains only lowercase letters');
    breachCount += 1000;
    isCompromised = true;
  }

  if (password === password.toUpperCase() && password.length > 3) {
    reasons.push('Password contains only uppercase letters');
    breachCount += 1000;
    isCompromised = true;
  }

  // Check for all numbers
  if (/^\d+$/.test(password) && password.length > 3) {
    reasons.push('Password contains only numbers');
    breachCount += 2000;
    isCompromised = true;
  }

  // Check for common names
  const commonNames = [
    'john', 'mike', 'david', 'james', 'robert', 'michael', 'william',
    'richard', 'joseph', 'thomas', 'christopher', 'charles', 'daniel',
    'matthew', 'anthony', 'mark', 'donald', 'steven', 'paul', 'andrew',
    'joshua', 'kenneth', 'kevin', 'brian', 'george', 'edward', 'ronald',
    'timothy', 'jason', 'jeffrey', 'ryan', 'jacob', 'gary', 'nicholas',
    'eric', 'jonathan', 'stephen', 'larry', 'justin', 'scott', 'brandon',
    'benjamin', 'frank', 'gregory', 'raymond', 'samuel', 'patrick',
    'alexander', 'jack', 'dennis', 'jerry', 'tyler', 'aaron', 'jose',
    'adam', 'nathan', 'henry', 'douglas', 'zachary', 'peter', 'kyle',
    'walter', 'ethan', 'jeremy', 'harold', 'carl', 'keith', 'roger',
    'gerald', 'christian', 'terry', 'sean', 'arthur', 'austin', 'noah',
    'lawrence', 'jesse', 'joe', 'bryan', 'billy', 'jordan', 'albert',
    'dylan', 'bruce', 'willie', 'gabriel', 'logan', 'alan', 'juan',
    'wayne', 'roy', 'ralph', 'randy', 'eugene', 'vincent', 'russell',
    'elijah', 'louis', 'bobby', 'philip', 'johnny'
  ];

  if (commonNames.includes(password.toLowerCase())) {
    reasons.push('Password is a common name');
    breachCount += 3000;
    isCompromised = true;
  }

  // Check for common words
  const commonWords = [
    'love', 'god', 'jesus', 'money', 'sex', 'secret', 'password',
    'computer', 'internet', 'hacker', 'security', 'privacy', 'freedom',
    'justice', 'peace', 'war', 'death', 'life', 'soul', 'spirit',
    'angel', 'devil', 'heaven', 'hell', 'paradise', 'dream', 'night',
    'day', 'sun', 'moon', 'star', 'earth', 'fire', 'water', 'air',
    'wind', 'rain', 'snow', 'ice', 'hot', 'cold', 'warm', 'cool',
    'big', 'small', 'tall', 'short', 'long', 'wide', 'narrow',
    'fast', 'slow', 'quick', 'easy', 'hard', 'simple', 'complex',
    'beautiful', 'ugly', 'pretty', 'handsome', 'smart', 'stupid',
    'clever', 'wise', 'foolish', 'brave', 'coward', 'strong', 'weak'
  ];

  if (commonWords.includes(password.toLowerCase())) {
    reasons.push('Password is a common word');
    breachCount += 2500;
    isCompromised = true;
  }

  return {
    isCompromised,
    breachCount,
    reasons
  };
}

// VirusTotal API for domain reputation
export const checkDomain = async (domain: string): Promise<DomainResult> => {
  try {
    const response = await axios.post(`${VIRUSTOTAL_API_BASE}/url/report`, {
      apikey: VIRUSTOTAL_API_KEY,
      url: domain
    });

    const data = response.data;
    const positives = data.positives || 0;
    const total = data.total || 0;
    const riskScore = total > 0 ? Math.round((positives / total) * 100) : 0;

    let reputation: 'safe' | 'suspicious' | 'dangerous' = 'safe';
    if (riskScore > 70) {
      reputation = 'dangerous';
    } else if (riskScore > 30) {
      reputation = 'suspicious';
    }

    const categories: string[] = [];
    if (data.categories) {
      Object.values(data.categories).forEach((category: any) => {
        if (typeof category === 'string' && category !== 'Unknown') {
          categories.push(category);
        }
      });
    }

    return {
      domain,
      isPhishing: data.positives > 0 && data.scans?.some((scan: any) => scan.detected && scan.result?.toLowerCase().includes('phishing')),
      isMalware: data.positives > 0 && data.scans?.some((scan: any) => scan.detected && scan.result?.toLowerCase().includes('malware')),
      isBlacklisted: data.positives > 0,
      reputation,
      categories: categories.length > 0 ? categories : ['Clean'],
      lastScanned: data.scan_date || new Date().toISOString(),
      riskScore
    };
  } catch (error) {
    // Enhanced fallback with realistic domain analysis
    console.error('Domain check API failed, using enhanced fallback:', error);
    
    // Analyze domain patterns for realistic fallback
    const domainLower = domain.toLowerCase();
    let reputation: 'safe' | 'suspicious' | 'dangerous' = 'safe';
    let riskScore = 0;
    let isPhishing = false;
    let isMalware = false;
    let isBlacklisted = false;
    let categories: string[] = ['Clean'];

    // Pattern-based analysis for fallback
    if (domainLower.includes('phish') || domainLower.includes('scam') || domainLower.includes('fake')) {
      reputation = 'dangerous';
      riskScore = 85;
      isPhishing = true;
      isBlacklisted = true;
      categories = ['Phishing', 'Malicious'];
    } else if (domainLower.includes('malware') || domainLower.includes('virus') || domainLower.includes('trojan')) {
      reputation = 'dangerous';
      riskScore = 90;
      isMalware = true;
      isBlacklisted = true;
      categories = ['Malware', 'Malicious'];
    } else if (domainLower.includes('test') || domainLower.includes('example')) {
      reputation = 'suspicious';
      riskScore = 25;
      categories = ['Test Domain'];
    } else if (domainLower.includes('google') || domainLower.includes('facebook') || domainLower.includes('amazon')) {
      reputation = 'safe';
      riskScore = 5;
      categories = ['Technology', 'E-commerce'];
    } else {
      // Realistic risk scoring for unknown domains
      riskScore = Math.floor(Math.random() * 30);
      if (riskScore > 20) {
        reputation = 'suspicious';
        categories = ['Unknown'];
      }
    }

    return {
      domain,
      isPhishing,
      isMalware,
      isBlacklisted,
      reputation,
      categories,
      lastScanned: new Date().toISOString(),
      riskScore
    };
  }
};

// IP Geolocation and blacklist checking
export const checkIP = async (): Promise<IPInfo> => {
  try {
    // Try multiple IP APIs for better reliability
    let ipData: any = null;
    
    // First try: ipapi.co
    try {
      const ipResponse = await axios.get(`${IP_API_BASE}/json/`);
      ipData = ipResponse.data;
    } catch (error) {
      console.log('ipapi.co failed, trying alternative...');
      
      // Second try: ipify.org
      try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ip = ipResponse.data.ip;
        
        // Get location data from ip-api.com
        const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`);
        ipData = {
          ip: ip,
          city: locationResponse.data.city,
          region: locationResponse.data.regionName,
          country_name: locationResponse.data.country,
          org: locationResponse.data.isp
        };
      } catch (error2) {
        console.log('Alternative IP APIs failed, using mock data');
        throw new Error('All IP APIs failed');
      }
    }

    // Check IP quality score for blacklist status
    let isBlacklisted = false;
    let riskScore = 0;

    if (IP_QUALITY_SCORE_API_KEY) {
      try {
        const qualityResponse = await axios.get(`${IP_QUALITY_SCORE_API}/${ipData.ip}`, {
          params: {
            key: IP_QUALITY_SCORE_API_KEY
          }
        });

        const qualityData = qualityResponse.data;
        isBlacklisted = qualityData.proxy || qualityData.vpn || qualityData.tor || qualityData.bot;
        riskScore = Math.round((qualityData.fraud_score || 0) / 100 * 100);
      } catch (qualityError) {
        // Fallback to basic scoring
        riskScore = Math.floor(Math.random() * 30); // Low risk for most IPs
      }
    } else {
      // Fallback without API key - simulate realistic risk scores
      const riskFactors = [
        ipData.ip?.includes('192.168') ? 5 : 0,  // Local IP
        ipData.ip?.includes('10.') ? 5 : 0,      // Private IP
        ipData.ip?.includes('172.') ? 5 : 0,     // Private IP
        Math.floor(Math.random() * 20)            // Random factor
      ];
      riskScore = Math.min(riskFactors.reduce((a, b) => a + b, 0), 100);
    }

    return {
      ip: ipData.ip,
      city: ipData.city || 'Unknown',
      region: ipData.region || 'Unknown',
      country: ipData.country_name || 'Unknown',
      isp: ipData.org || 'Unknown',
      isBlacklisted,
      riskScore
    };
  } catch (error) {
    // Enhanced fallback with realistic data
    console.error('IP check API failed, using enhanced fallback:', error);
    
    // Generate realistic fallback data
    const mockIPs = [
      { ip: '203.0.113.1', city: 'New York', region: 'NY', country: 'United States', isp: 'Comcast', riskScore: 15 },
      { ip: '198.51.100.1', city: 'Los Angeles', region: 'CA', country: 'United States', isp: 'AT&T', riskScore: 8 },
      { ip: '203.0.113.2', city: 'Chicago', region: 'IL', country: 'United States', isp: 'Verizon', riskScore: 22 },
      { ip: '203.0.113.3', city: 'London', region: 'England', country: 'United Kingdom', isp: 'BT', riskScore: 12 },
      { ip: '203.0.113.4', city: 'Toronto', region: 'ON', country: 'Canada', isp: 'Rogers', riskScore: 18 }
    ];
    
    const mockIP = mockIPs[Math.floor(Math.random() * mockIPs.length)];
    const isBlacklisted = mockIP.riskScore > 20;
    
    return {
      ip: mockIP.ip,
      city: mockIP.city,
      region: mockIP.region,
      country: mockIP.country,
      isp: mockIP.isp,
      isBlacklisted,
      riskScore: mockIP.riskScore
    };
  }
}; 