var SC = SC || {};
SC.speakers = (function($) {
  return function() {
    $.getJSON('files/speakers.json', function(speakerData) {

      var speakerTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li class="speaker">' +
          '<img src="<%= speaker.Headshot %>" class="img-polaroid img-rounded speaker-img pull-left">' +
          '<h4><%= speaker.Name %> – <%= speaker.Title %></h4>' +
          '<% if (speaker.Twitter) { %>' +
          '<h5 class="italic"><a href="http://twitter.com/<%= speaker.Twitter %>"><%= speaker.Twitter %></a></h5>' +
          '<% } %>' +
          '<p><%= speaker.Description %></p>' +

          '<h5 class="italic">About <%= speaker.Name %>:</h5>' +
          '<p><%= speaker.Bio %></p>' +
        '</li>' +
        '<% }); %>';

      var html = _.template(speakerTemplate, {'speakers':speakerData});
      $('.speaker-list').html(html);
    });
  };
})($);
