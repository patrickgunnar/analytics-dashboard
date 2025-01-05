import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Table from "@/components/table";

export const metadata: Metadata = {
    title: "Analytics Dashboard Styled With Galadriel CSS",
    description:
        "This Analytics Dashboard is a visually striking and highly functional web application designed to provide real-time insights into key performance indicators, user behavior, and other critical metrics. The dashboard leverages Galadriel CSS, a cutting-edge modular and hierarchical CSS framework, to deliver a clean, responsive, and scalable user interface.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="@layout:appLayout::body">
                <Sidebar />
                <Table>{children}</Table>
            </body>
        </html>
    );
}
