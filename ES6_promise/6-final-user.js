import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then((results) => {
      const formattedResults = [];

      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          formattedResults.push({
            status: result.status,
            value: result.value,
          });
        } else {
          formattedResults.push({
            status: result.status,
            value: result.reason,
          });
        }
      });

      return formattedResults;
    });
}
