
export interface baseProducts {
    title: string;
    description: string;
    discount: number;
    coverImage: string;
    price: number;
}

export interface product extends baseProducts {
    id: number;
}

