var SC = SC || {};
SC.speakers = (function($) {
  return function() {
    $.getJSON('files/speakers.json', function(speakerData) {

      var speakerTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li class="speaker" id="<%= speaker.name_anchor %>">' +
          '<div id="<%= speaker.talk_anchor %>">' +
            '<img src="<%= speaker.headshot %>" class="img-polaroid img-rounded speaker-img pull-left">' +
            '<h4><%= speaker.name %> – <%= speaker.title %></h4>' +
            '<% if (speaker.twitter) { %>' +
            '<h5 class="italic"><a href="http://twitter.com/<%= speaker.twitter %>"><%= speaker.twitter %></a></h5>' +
            '<% } %>' +
            '<p><%= speaker.description %></p>' +

            '<h5 class="italic">About <%= speaker.name %>:</h5>' +
            '<p><%= speaker.bio %></p>' +
          '</div>' +
        '</li>' +
        '<% }); %>';
      var html = _.template(speakerTemplate, {'speakers':speakerData});
      $('.speaker-list').html(html);

      var speakerNavTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li>' +
            '<a href="#<%= speaker.name_anchor %>"><i class="icon-chevron-right"></i><%= speaker.name %></a>' +
        '</li>' +
        '<% }); %>';
      var navData = _.sortBy(_.map(speakerData, function(speaker) {
        return _.pick(speaker, 'name', 'name_anchor');
      }), 'name');
      var speakerNavHtml = _.template(speakerNavTemplate, {'speakers': navData});
      $('#names .nav').html(speakerNavHtml);

      var titleNavTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li>' +
        '<a href="#<%= speaker.talk_anchor %>"><i class="icon-chevron-right"></i><%= speaker.title %></a>' +
        '</li>' +
        '<% }); %>';
      var titleNavData = _.sortBy(_.map(speakerData, function(speaker) {
        return _.pick(speaker, 'title', 'talk_anchor');
      }), 'title');
      var titleNavHtml = _.template(titleNavTemplate, {'speakers': titleNavData});
      $('#talks .nav').html(titleNavHtml);
    });
  };
})($);
