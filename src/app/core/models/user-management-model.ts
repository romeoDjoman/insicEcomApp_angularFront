export interface Role {
  name: 'Client' | 'Author' | 'Admin'; 
  permissions: string[];              
}

export interface User {
  id: string;           
  name: string;                 
  password: string;     
  role: Role;          
}

export interface Client extends User {
  role: { name: 'Client'; permissions: ['read', 'buy'] }; 
}

export interface Author extends User {
  role: { name: 'Author'; permissions: ['read', 'write', 'edit'] }; 
  bio: string;           
  articles: string[]; 
}

export interface Admin extends User {
  role: { name: 'Admin'; permissions: ['read', 'write', 'edit', 'delete', 'manage'] };
}