export const metadata = {
  title: 'مطعم رزيال',
  description: 'مطعم رزيال - أفضل المأكولات الشرقية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
