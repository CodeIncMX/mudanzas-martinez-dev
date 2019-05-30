import mudanzasMartinezService from '@/ws/mudanzasMartinezService';

const contactWebService = {};

contactWebService.sendEmail = function sendEmail(params) {
  return mudanzasMartinezService.post(
    '/contact/sendEmail.php',
    params,
  )
    .then(res => res);
};

export default contactWebService;
