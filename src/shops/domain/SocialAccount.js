const SocialMediaPlatforms = {
  facebook: "Facebook",
  instagram: "Instagram",
};

export class SocialAccount {
  constructor({ url }) {
    if (!url || url === "") {
      throw new Error("Url is required for a SocialAccount");
    }

    this.url = url;
    this.type = getSocialType(url);
  }

  getSocialType(url) {
    if (url.includes("facebook.com")) {
      return SocialMediaPlatforms.facebook;
    }

    if (url.includes("instagram.com")) {
      return SocialMediaPlatforms.instagram;
    }
  }
}
