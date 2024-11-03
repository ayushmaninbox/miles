<div align="center">
  <br />
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post-y3TDlWy4rb6Qi8xnHWrug5m8OT0UDG.png" alt="MILES Project Banner" width="100%">
  <br />

  <h1>MILES: Next-Gen Video Conferencing</h1>

  <p>Empowering seamless communication across distances</p>

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </div>
</div>

## 🌟 About MILES

MILES is a cutting-edge video conferencing platform built with the latest web technologies. It aims to provide a seamless, secure, and feature-rich communication experience for teams and individuals alike.

## 📋 Table of Contents

1. [🚀 Features](#features)
2. [🛠️ Tech Stack](#tech-stack)
3. [🏁 Getting Started](#getting-started)
4. [📘 Usage Guide](#usage-guide)
5. [🧰 Development](#development)
6. [🤝 Contributing](#contributing)
7. [📄 License](#license)

## 🚀 Features <a name="features"></a>

- **🔐 Secure Authentication**: Powered by Clerk for robust user management
- **🎥 Instant Meetings**: Start or join meetings with a single click
- **🗓️ Meeting Scheduler**: Plan ahead with our intuitive scheduling tool
- **🖥️ Screen Sharing**: Collaborate effectively with high-quality screen sharing
- **🎚️ Advanced Controls**: Manage participants, audio, and video with ease
- **📹 Recording**: Capture important sessions for future reference
- **👥 Personal Rooms**: Host recurring meetings in your dedicated virtual space
- **📱 Responsive Design**: Seamless experience across all devices
- **🔗 Easy Sharing**: Invite participants with a simple link
- **🔒 End-to-End Encryption**: Ensure your conversations remain private

## 🛠️ Tech Stack <a name="tech-stack"></a>

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Real-time Communication**: getstream
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS

## 🏁 Getting Started <a name="getting-started"></a>

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushmaninbox/miles.git
   cd miles

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```


4. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## 📘 Usage Guide `<a name="usage-guide">``</a>`

1. **Sign Up/Login**: Use Clerk authentication to create an account or log in.
2. **Create a Meeting**: Click on "New Meeting" to start an instant meeting or schedule one for later.
3. **Invite Participants**: Share the meeting link with others to join your conference.
4. **Manage Your Meeting**: Use the in-meeting controls to manage participants, share your screen, or record the session.


For more detailed instructions, please refer to our [User Guide](docs/USER_GUIDE.md).

## 🧰 Development `<a name="development">``</a>`

### Folder Structure

```plaintext
miles-project/
├── app/
│   ├── (auth)/
│   ├── (root)/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── [component-name].tsx
├── lib/
├── public/
├── styles/
├── types/
├── .env.local
├── next.config.js
├── package.json
└── tailwind.config.js
```

### Key Components

- `app/`: Contains the main application logic and pages
- `components/`: Reusable React components
- `lib/`: Utility functions and custom hooks
- `styles/`: Global styles and Tailwind CSS configuration

## 📄 License `<a name="license">``</a>`

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---