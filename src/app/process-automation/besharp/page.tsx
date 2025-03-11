"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProcessAutomationBeSharp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-blue-800 text-blue-200 px-4 py-1 rounded-full text-sm font-medium">
              Case Study
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transforming the B# Piano Competition
            <br />
            <span className="text-blue-300">From Chaos to Harmony</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            See how the B# Piano Competition automated their processes to manage 100+ competitors 
            with just a few clicks.
          </p>

          <Link
            href="https://calendly.com/gerryyang/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-blue-50 transition-all mb-12"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden mt-12 mb-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat opacity-20"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'
              }}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8 relative">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">About B# Piano Competition</h2>
                <p className="text-blue-100 leading-relaxed">
                  A prestigious annual piano competition in Dublin facing operational challenges 
                  with manual processes and competitor management.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                    🏆
                  </div>
                  <p className="text-blue-100">15+ Years of Excellence</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                    🌍
                  </div>
                  <p className="text-blue-100">International Recognition</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/besharp.png"
                  alt="B# Piano Competition Website"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Competition Overview */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8 text-gray-900">
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
            Ready to Transform Your Competition Process?
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
