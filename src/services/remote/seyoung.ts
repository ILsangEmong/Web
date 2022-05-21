import { SeyoungService } from '../api/seyoung';
import { API } from './base';
export function seyoungRemote(): SeyoungService {
  const getResult = async (code: string) => {
    const response = await API.get({ url: `/comment/${code}` });
    return response.data;
  };
  return {
    getResult,
  };
}
