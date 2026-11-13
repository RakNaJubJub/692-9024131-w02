"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Navbar Component */}
      <Navbar activePage="home" />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Welcome Section */}
          <section className="md:col-span-2 flex flex-col justify-center
            bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">

            <span className="text-blue-600 font-semibold text-sm mb-4">
              WELCOME TO MY WEBSITE
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Hello, I'm <span className="text-blue-600">Suphawich.</span>
            </h1>

            <p className="text-slate-500 leading-relaxed mb-8">
              Welcome to my personal portfolio.
              This website showcases my profile, assignments,
              and projects during my studies.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/bio"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl
                hover:bg-blue-700 transition"
              >
                About Me
              </Link>

              <Link
                href="/project"
                className="border border-slate-300 text-slate-600
                px-6 py-3 rounded-xl hover:bg-slate-50 transition"
              >
                View Projects
              </Link>
            </div>
          </section>

          {/* Calendar */}
          <section className="bg-white rounded-2xl border border-slate-200
            p-5 shadow-sm flex flex-col items-center">

            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Calendar
            </h2>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg"
            />

            <div className="w-full border-t border-slate-100 mt-4 pt-4">
              <p className="text-sm text-slate-500">
                Selected Date
              </p>

              <p className="font-semibold text-blue-600">
                {date
                  ? date.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "No date selected"}
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}
