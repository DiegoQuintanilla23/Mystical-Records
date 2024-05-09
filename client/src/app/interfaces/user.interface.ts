export interface User {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    address?: string;
    cardNumber?: string;
    cardSecurityNumber?: string;
    cardExpirationDate?: Date;
}
