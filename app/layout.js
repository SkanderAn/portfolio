import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Skander Andolsi — AI & Robotics Engineer",
  description: "Portfolio of Skander Andolsi, AI & Robotics Engineer specializing in LLMs, Computer Vision, and scalable AI systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}