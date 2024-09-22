export declare class Business {
    business_id: number;
    name: string;
    address: string;
    domain: string;
    is_mobile: boolean;
    latitude: number;
    longitude: number;
    service_radius: number;
    scheduling_model: 'Predefined Blocks' | 'Service Duration';
    created_at: Date;
}
