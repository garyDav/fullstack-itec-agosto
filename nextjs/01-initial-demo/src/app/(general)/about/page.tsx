import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Bienvenido a nuestro about",
  keywords: ['About', 'Información', 'Intro', 'Introducción']
};

export default function AboutPage() {
  return <h1>About Page</h1>
}
