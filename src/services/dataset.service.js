//Purpose: This component is for making http calls from all other components.
import { http } from 'utils/http-common';

class DataService {
  get(Params) {
    return http.get('/forecast', { params: Params });
  }

  searchCoordinates(Params) {
    return http.get('/forecast', { params: Params });
  }
}

export default new DataService();
