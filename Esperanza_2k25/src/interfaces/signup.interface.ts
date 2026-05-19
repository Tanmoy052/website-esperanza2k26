export interface SignUpFormPayload {
  name: string;
  year: string;
  department: string;
  rollNumber: string;
  credentials: Credentials;
}

export interface Credentials {
  email: string;
  password?: string;
  phoneNumber?: string;
}

export interface LoginCredentials{
  email: string;
  password: string;
}