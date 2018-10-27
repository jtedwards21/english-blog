const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "SpeakUp - An English Blog", // <title>
  shortSiteTitle: "SpeakUp", // <title> ending for posts and pages
  siteDescription: "SpeakUp is a Blog for English Language Learning.",
  siteUrl: "https://speakup.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "joshua edwards",
  authorTwitterAccount: "speakup",
  // info
  infoTitle: "SpeakUp",
  infoTitleNote: "A Language Learning Blog",
  // manifest.json
  manifestName: "SpeakUp - An English Blog",
  manifestShortName: "SpeakUp", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "speakup@gmail.com",
  // social
  authorSocialLinks: [
    { name: "twitter", url: "https://twitter.com/joshuaedwards" },
    { name: "facebook", url: "https://facebook.com/joshuaedwards" }
  ]
};
