import Navigation from "../components/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading..."
  },
  description: 'the best Movies on the best framework ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  )
}
