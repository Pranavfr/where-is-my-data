export interface SearchResult {
  query: string;
  breachCount: number;
  breaches: Breach[];
  riskLevel: 'low' | 'medium' | 'high';
}

export interface Breach {
  name: string;
  domain: string;
  breachDate: string;
  dataClasses: string[];
  description: string;
  logoPath?: string;
}

export interface IPInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
  isBlacklisted: boolean;
  riskScore: number;
}

export interface PasswordResult {
  hash: string;
  count: number;
  riskLevel: 'safe' | 'compromised' | 'highly-compromised';
  analysis?: string[]; // Reasons why password is compromised
}

export interface DomainResult {
  domain: string;
  isPhishing: boolean;
  isMalware: boolean;
  isBlacklisted: boolean;
  reputation: 'safe' | 'suspicious' | 'dangerous';
  categories: string[];
  lastScanned: string;
  riskScore: number;
}