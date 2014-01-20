var room = {'roomname':'lobby'};

var displayMessage = function(data) {
  _.each(data.results, function(message) {
    var username = message.username || 'unknown';
    var text = message.text || '';
    console.log(username+': '+text);

  });
}

$.ajax({
  // always use this url
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'GET',
  data: JSON.stringify(room),
  contentType: 'application/json',
  success: function (data) {
    displayMessage(data);
  },
  error: function (data) {
    // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

