import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Dalufishe',
  subtitle: 'Lead to a better life',
  lang: 'zh_TW',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/Dalufishe',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://avatars.githubusercontent.com/u/118270401?v=4',
  name: 'Dalufishe',
  bio: 'Build softwares & lead to a better life.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/DalufishXD',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:discord',
      url: 'https://discord.com/invite/sgMMdUZd3V',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Dalufishe',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
