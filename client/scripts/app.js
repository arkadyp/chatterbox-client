var room = {'roomname':'lobby'};

$.ajax({
  // always use this url
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'GET',
  data: JSON.stringify(room),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
    console.log(data);
  },
  error: function (data) {
    // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});