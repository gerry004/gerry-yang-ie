"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProcessAutomationBeSharp() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Case Study: Transforming the B# Piano Competition with Process
        Automation
      </h1>

      <div className="mb-12 relative h-[400px] w-full">
        <Image
          src="/besharp.png"
          alt="B# Piano Competition Website"
          fill
          className="object-contain"
          quality={100}
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          The Challenge: A Time-Consuming Manual Process
        </h2>
        <p className="mb-6">
          The B# Piano Competition is a celebrated event that provides young
          pianists the chance to showcase their skills, passion, and talent. As
          the competition grew—with organizers often handling over 100
          competitors—the manual processes became tedious and unmanageable.
        </p>

        <h3 className="text-xl font-bold mb-3">
          Manual Process Before Automation
        </h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Collect Entries:</strong> Manually comb through sign-ups
            gathered through a website form.
          </li>
          <li className="mb-2">
            <strong>Evaluate Performances:</strong> Review each entry to
            estimate the duration of every performance.
          </li>
          <li className="mb-2">
            <strong>Schedule Competitors:</strong> Carefully assign call times
            for each participant across multiple days.
          </li>
          <li className="mb-2">
            <strong>Send Individual Emails:</strong> Write and dispatch
            personalized emails to inform competitors of their scheduled call
            times.
          </li>
          <li className="mb-2">
            <strong>Manage Award Communications:</strong> After judging,
            manually identify award winners and send out trophy contracts.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Pain Points</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Inefficiency:</strong> Countless hours were lost on
            repetitive administrative tasks.
          </li>
          <li className="mb-2">
            <strong>Human Error:</strong> Manual handling increased the
            likelihood of scheduling mistakes and delayed communications.
          </li>
          <li className="mb-2">
            <strong>Operational Overload:</strong> With more than 100 entries to
            manage, the competition team was frequently overwhelmed.
          </li>
          <li className="mb-2">
            <strong>Delayed Response:</strong> Competitors often experienced
            frustrating delays in receiving important updates.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          The Solution: A Fully Automated Process
        </h2>
        <p className="mb-4">
          By implementing a comprehensive automation solution, the B# Piano
          Competition now operates seamlessly from start to finish:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li className="mb-4">
            <strong>Streamlined Sign-Ups:</strong>
            <br />
            Competitors register through an intuitive online form that captures
            all necessary details.
          </li>
          <li className="mb-4">
            <strong>Automated Scheduling:</strong>
            <br />
            Once applications close, in one click, the system automatically
            evaluates entries, analyzes estimated performance times, and
            generates a balanced schedule for each competition day.
          </li>
          <li className="mb-4">
            <strong>Instant Notifications:</strong>
            <br />
            Personalized emails with call times are automatically sent, ensuring
            every competitor is informed promptly.
          </li>
          <li className="mb-4">
            <strong>Effortless Award Management:</strong>
            <br />
            Post-competition, after entering the results, trophy contracts are
            automatically sent to award winners, and results can be instantly
            displayed.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          The Benefits: Efficiency, Accuracy, and Enhanced Competitor Experience
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Massive Time Savings:</strong> Countless administrative
            hours are reduced to one click, allowing the team to focus on
            delivering an outstanding event.
          </li>
          <li className="mb-2">
            <strong>Increased Accuracy:</strong> Automated processes reduce
            human error, ensuring every competitor receives accurate scheduling
            and timely communication.
          </li>
          <li className="mb-2">
            <strong>Enhanced Experience:</strong> Immediate updates and
            organized schedules lead to a smoother, more professional event
            experience.
          </li>
          <li className="mb-2">
            <strong>Scalability:</strong> The system effortlessly manages high
            volumes—such as 100+ entries—ensuring the competition can grow
            without additional administrative burden.
          </li>
        </ul>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Competition Process?
        </h2>
        <p className="mb-6">
          If you're running a competition and you're overwhelmed, wasting
          countless hours on repetitive administrative tasks, it's time for a
          change. Let automation streamline your competition process so you can
          focus on what truly matters.
        </p>
        <Link
          href="https://calendly.com/gerryyang/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
        >
          Start Your Competition Transformation
        </Link>
      </section>
    </div>
  );
}
