import trae from 'trae';
import configService from '@/ws/config';

const mudanzasMartinezService = trae.create({
  baseUrl: configService.apiUrl,
});

export default mudanzasMartinezService;
