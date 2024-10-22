export type ApiResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    current: number;
    results: T[];
};

export type PaginatedApiResponse<T> = {
    status: boolean;
    error: string | null;
    data: ApiResponse<T>;
};


export type ApiResponseArray<T> = {
    status: boolean;
    error: string | null;
    data: T[];
};

export type ApiResponseObject<T> = {
    status: boolean;
    error: string | null;
    data: T;
};