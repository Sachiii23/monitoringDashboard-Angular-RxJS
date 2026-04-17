export interface Service {
  id: number;
  name: string;
  version: string;
  status: 'UP' | 'DOWN' | 'WARNING';
  lastHeartbeat: string;
}