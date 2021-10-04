enum Membership {
  Simple,
  Standart,
  Premium
}

export const membership = Membership.Standart
console.log('membership: ', membership)

const membershipReverce = Membership[2]
console.log('membershipReverce: ', membershipReverce)

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM

console.log(social)

console.log('SocialMedia: ', SocialMedia)
