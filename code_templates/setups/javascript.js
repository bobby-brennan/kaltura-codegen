<script src="/js/kaltura/ox.ajast.js"></script>
<script src="/js/kaltura/webtoolkit.md5.js"></script>
<script src="/js/kaltura/KalturaClientBase.js"></script>
<script src="/js/kaltura/KalturaTypes.js"></script>
<script src="/js/kaltura/KalturaVO.js"></script>
<script src="/js/kaltura/KalturaServices.js"></script>
<script src="/js/kaltura/KalturaClient.js"></script>
<script src="/js/vendor/jquery.ui.widget.js"></script>
<script src="/js/jquery.fileupload.js"></script>
<script src="/js/jquery.fileupload-kaltura.js"></script>

<script>
  var config = new KalturaConfiguration(<%- Lucy.answer('partnerId') %>);
<% if (Lucy.answer('serviceURL')) { -%>
  config.serviceUrl = <%- Lucy.code.variable('answers.serviceURL') %>;
<% } -%>
  var client = new KalturaClient(config);
  client.session.start(function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
      $('#ErrorMessage').text(ks.message || 'Unknown Error').show();
    } else {
      window.ks = ks;
      client.setKs(ks);
    }
    // Note: this is meant only as a sample.
    // You should NEVER generate sessions on the client,
    // as this exposes your Admin Secret to users.
    // Instead, generate a session on the server and pass the
    // KS to the client.
  }, <%- Lucy.variable("answers.secret") %>,
  <%- Lucy.variable("answers.userId") %>,
  <%- Lucy.answer('sessionType') === 0 ? 'KalturaSessionType.USER' : 'KalturaSessionType.ADMIN' %>,
  <%- Lucy.variable('answers.partnerId') %>)
</script>
