import '../styles/globals.css'

export const metadata = {
  title: 'MusicFlow - Your Ultimate Music Experience',
  description: 'Experience music like never before with MusicFlow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
