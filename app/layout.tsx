import "../styles/global.css";
import Navigation from "../components/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Fun",
    default: "Loading..."
  },
  description: 'the best Fun on the best framework ',
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
