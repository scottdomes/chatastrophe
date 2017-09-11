export default class NotificationResource {
  constructor(messaging) {
    this.messaging = messaging;
    this.messaging
      .requestPermission()
      .then(res => {
        console.log('Permission granted');
      })
      .catch(err => {
        console.log('no access', err);
      });
  }
}
