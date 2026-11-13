
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";

export default function BioPage() {
  const skills = [
    "HTML", "CSS", "JavaScript", "PHP",
    "React", "Next.js", "MySQL", "Flutter"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Navbar Component */}
      <Navbar activePage="bio" />

      {/* Main */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold text-sm mb-2">
            GET TO KNOW ME
          </p>

          <h1 className="text-5xl font-bold text-slate-800">
            About <span className="text-blue-600">Me.</span>
          </h1>

          <p className="text-slate-500 mt-3">
            A little introduction about myself.
          </p>
        </div>

        {/* Profile Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Profile Image */}
          <div className="bg-white rounded-2xl border border-slate-200
            p-6 shadow-sm flex flex-col items-center text-center">

            <div className="rounded-2xl overflow-hidden mb-5
              border-4 border-blue-50">

              <Image
                src="/image/about.png"
                alt="Suphawich Profile"
                width={300}
                height={300}
                className="object-cover w-60 h-69"
              />

            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              Suphawich
            </h2>

            <p className="text-blue-600 font-medium mt-1">
              Information Technology Student
            </p>

            <div className="mt-5 w-full border-t border-slate-100 pt-4">
              <p className="text-sm text-slate-500">
                Personal Portfolio
              </p>

              <p className="text-slate-700 font-semibold mt-1">
                Suphawich-W02
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* About Me */}
            <div className="bg-white rounded-2xl border border-slate-200
              p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                About Me
              </h2>

              <p className="text-slate-500 leading-8">
                Hello! My name is Suphawich. I am a Computer Science
                student who is interested in technology and software
                development.

                <br /><br />

                I enjoy learning new technologies, developing websites,
                and creating projects that help me improve my programming
                skills and problem-solving abilities.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl border border-slate-200
              p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-800 mb-5">
                My Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-blue-50
                    text-blue-600 font-medium text-sm
                    hover:bg-blue-600 hover:text-white
                    transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Bottom Section */}
        <section className="mt-8 bg-blue-600 rounded-2xl p-8
          text-white shadow-lg shadow-blue-100">

          <h2 className="text-2xl font-bold mb-3">
            Always Learning, Always Growing.
          </h2>

          <p className="text-blue-100 leading-relaxed">
            I believe that every project is an opportunity to learn
            something new and become a better developer.
          </p>
        </section>

      </main>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}
