var SC = SC || {};
SC.speakers = (function($) {
  return function() {
    $.getJSON('files/speakers.json', function(speakerData) {

      var speakerTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li class="speaker" id="<%= speaker.Code %>">' +
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

      var speakerNavTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li>' +
            '<a href="#<%= speaker.Code %>"><i class="icon-chevron-right"></i><%= speaker.Name %></a>' +
        '</li>' +
        '<% }); %>';
      var navData = _.sortBy(_.map(speakerData, function(speaker) {
        return _.pick(speaker, 'Name', 'Code');
      }), 'Name');
      navData = _.uniq(navData,function(speaker){
        return speaker.Name;
      });
      var speakerNavHtml = _.template(speakerNavTemplate, {'speakers': navData});
      $('#names .nav').html(speakerNavHtml);

      var titleNavTemplate = '<% _.forEach(speakers, function(speaker) { %>' +
        '<li>' +
        '<a href="#<%= speaker.Code %>"><i class="icon-chevron-right"></i><%= speaker.Title %></a>' +
        '</li>' +
        '<% }); %>';
      var titleNavData = _.sortBy(_.map(speakerData, function(speaker) {
        return _.pick(speaker, 'Title', 'Code');
      }), 'Title');
      titleNavData = _.uniq(titleNavData,function(speaker){
        return speaker.Title;
      });
      var titleNavHtml = _.template(titleNavTemplate, {'speakers': titleNavData});
      $('#talks .nav').html(titleNavHtml);
    });
  };
})($);
