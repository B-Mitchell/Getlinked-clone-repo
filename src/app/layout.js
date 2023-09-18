import './globals.css'

export const metadata = {
  title: 'Getlinked AI',
  description: 'this is a challenge project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
