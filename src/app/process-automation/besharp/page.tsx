"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProcessAutomationBeSharp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Music Competition
            <br />
            <span className="text-blue-300">From Chaos to Harmony</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            See how the B# Piano Competition automated their processes to manage 100+ competitors 
            with just a few clicks
          </p>
          <Link
            href="https://calendly.com/gerryyang/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-blue-50 transition-all"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Competition Overview */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8 text-gray-900">
          <div className="relative h-[300px] w-full mb-8">
            <Image
              src="/besharp.png"
              alt="B# Piano Competition Website"
              fill
              className="object-contain rounded-lg"
              quality={100}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Competition Stats</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">🎹</span>
                  <span className="text-gray-700">100+ competitors managed annually</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">⏱️</span>
                  <span className="text-gray-700">Hours of admin work reduced to minutes</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">📧</span>
                  <span className="text-gray-700">Instant automated communications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Key Challenges Solved</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">✓</span>
                  <span className="text-gray-700">Complex scheduling automation</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">✓</span>
                  <span className="text-gray-700">Competitor communication management</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">✓</span>
                  <span className="text-gray-700">Award processing and notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Before & After */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-red-900">Before Automation</h3>
            <ul className="space-y-4">
              {[
                "Manual scheduling taking days",
                "Prone to human errors",
                "Delayed competitor notifications",
                "Overwhelming administrative work",
                "Limited ability to scale",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-green-900">After Automation</h3>
            <ul className="space-y-4">
              {[
                "One-click scheduling system",
                "Error-free processing",
                "Instant automated updates",
                "Minimal administrative overhead",
                "Easily handles 100+ competitors",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
            Automated Features That Save You Time
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Scheduling",
                description: "Automatically creates balanced performance schedules based on piece duration and competitor categories.",
                icon: "📅"
              },
              {
                title: "Instant Communications",
                description: "Automated emails for schedules, updates, and important announcements to all participants.",
                icon: "📧"
              },
              {
                title: "Award Management",
                description: "Streamlined process for recording results and sending trophy contracts to winners.",
                icon: "🏆"
              },
              {
                title: "Registration System",
                description: "User-friendly registration form that captures all necessary competitor information.",
                icon: "📝"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-gray-900">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-900 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Modernize Your Music Competition?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join other competition organizers who have transformed their events with automation.
          </p>
          <Link
            href="https://calendly.com/gerryyang/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-blue-50 transition-all"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
