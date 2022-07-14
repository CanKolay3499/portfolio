const discordUsername = process.env.NEXT_PUBLIC_DISCORD_USERNAME
const email = process.env.NEXT_PUBLIC_EMAIL

export default {
  name: process.env.NEXT_PUBLIC_NAME,
  title: process.env.NEXT_PUBLIC_TITLE,
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  homePage: {
    shortBio: `
      Hi, My name is <span className="font-bold text-primary-400 text-lg">Can</span>. I live
      in Istanbul and I&apos;m 13 years old
    `,
    skills: {
      Languages: ['Javaccript', 'Typescript', 'Python', 'PHP'],
      Development: ['Linux', 'Neovim', 'Termux'],
      Frontend: ['React', 'CSS', 'Sass', 'Tailwindcss & Windicss'],
      Backend: ['Node.js', 'Express', 'Nest.js'],
      Database: ['MongoDB', 'Sqlite', 'Mysql']
    },
    journey: {
      2022: ['Learned lua', 'Started learning Nest.js'],
      2021: ['Learned basic React & Vue', 'Learned basic Tailwindcss & Sass'],
      2020: ['Learned Node.js', 'Learned Python'],
      2019: ['Learned HTML, CSS, JS']
    }
  },
  contact: {
    Email: { value: email, link: `mailto:${email}` },
    Discord: { value: discordUsername, link: undefined }
  }
}
