export interface File {
    path: string;
    modificationDate: string;
    type: string;
    size?: number;
}

export interface Orders {
  path: 'asc' | 'desc' | boolean;
  modificationDate: 'asc' | 'desc' | boolean;
  type: 'asc' | 'desc' | boolean;
  size?: 'asc' | 'desc' | boolean;
}

