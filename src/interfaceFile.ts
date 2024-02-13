export interface CartState {
    cart: any[];
    loading: boolean;
    error: string | null;
}

export interface  apiResponse {
    cart: any[];
    loading?: boolean;
    error?: string;
    [key: string]: any
}