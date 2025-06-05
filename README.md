# Pulse

An open-source, modern forum platform built with Next.js. Pulse provides a clean, intuitive interface for community discussions with real-time updates and robust moderation tools.

## 🌟 Features

- 💬 Rich text discussions with markdown support
- 👥 User profiles and reputation system
- 🔐 Secure authentication with NextAuth.js
- 🎨 Modern, responsive UI with dark mode support
- 📱 Mobile-first design
- 🔍 Advanced search functionality
- 🏷️ Topic categorization and tagging
- ⚡ Real-time updates
- 🛡️ Moderation tools and user roles
- 📊 Analytics and insights

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pulse.git
cd pulse
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/pulse"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npm run prisma:generate
npm run prisma:push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💻 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push database schema changes

## 📁 Project Structure

```
src/
├── app/          # Next.js app directory
│   ├── api/      # API routes
│   ├── create/   # Post creation pages
│   └── home/     # Home and forum pages
├── components/   # Reusable UI components
├── lib/          # Utility functions and configurations
├── prisma/       # Database schema and migrations
└── store/        # Redux store and slices
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by modern forum platforms and community needs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
