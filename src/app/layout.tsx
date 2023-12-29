import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Boostrap
 */

import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Fontawesome icons
 */
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({ subsets: ["cyrillic"] });
const appName = process.env.APP_NAME;

export const metadata: Metadata = {
  title: appName,
  description:
    "Discover GitHub users and explore their profiles. Find users, repositories",
  authors: {
    name: "Wilbroad Francis Mark",
    url: "https://github.com/mrwilbroad",
  },
  creator: "Wilbroad Francis Mark",
  publisher: "Wilbroad Mark",
  keywords: [
    "GitHub",
    "GitHub users",
    "user profiles",
    "repositories",
    "GitHub API",
    "software developers",
  ],
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  dashboard,
  users,
  children,
}: {
  dashboard: React.ReactNode;
  users: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="position-relative">
        <main className="container mt-5">
          <section className="row">
            <section className="col-lg-5">{dashboard}</section>

            <section className="col-lg-5">
              <section className="vstack gap-2">
                {users}
              </section>
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
