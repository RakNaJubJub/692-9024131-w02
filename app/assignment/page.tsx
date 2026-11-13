
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AssignmentPage() {

  const assignments = [
    {
      id: "01",
      title: "HTML & CSS",
      subject: "Web Development",
      description: "ศึกษาและฝึกสร้างเว็บไซต์ด้วย HTML และ CSS พร้อมตกแต่งหน้าเว็บไซต์",
      status: "Completed",
      category: "Frontend",
    }, 
    {
      id: "02",
      title: "JavaScript",
      subject: "Web Development",
      description: "ฝึกเขียน JavaScript เพื่อเพิ่มการทำงานและการโต้ตอบภายในเว็บไซต์",
      status: "Completed",
      category: "Programming",
    },
    {
      id: "03",
      title: "Database Management",
      subject: "Database",
      description: "ออกแบบฐานข้อมูล สร้างตาราง และฝึกใช้งานคำสั่ง SQL",
      status: "Completed",
      category: "Database",
    },
    {
      id: "04",
      title: "API Development",
      subject: "Web Application",
      description: "ศึกษาและทดลองเรียกใช้งาน API รวมถึงการรับส่งข้อมูลในรูปแบบ JSON",
      status: "In Progress",
      category: "Backend",
    },
    {
      id: "05",
      title: "Arduino & IoT",
      subject: "Internet of Things",
      description: "ทดลองเขียนโปรแกรมควบคุมอุปกรณ์ Arduino และเชื่อมต่อเซนเซอร์",
      status: "In Progress",
      category: "IoT",
    },
    {
      id: "06",
      title: "Data Analysis",
      subject: "Data Science",
      description: "วิเคราะห์ข้อมูลและนำเสนอผลลัพธ์ผ่านการแสดงผลข้อมูล",
      status: "Completed",
      category: "Data",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Navbar */}
      <Navbar activePage="assignment" />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">

        {/* Page Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold text-sm mb-2">
            MY LEARNING JOURNEY
          </p>

          <h1 className="text-5xl font-bold text-slate-800">
            TEST <span className="text-blue-600">Assignments.</span>
          </h1>

          <p className="text-slate-500 mt-3">
            A collection of my assignments and learning experiences.
          </p>
        </div>

        {/* Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm">Total Assignments</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-2">
              {assignments.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm">Completed</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {assignments.filter(a => a.status === "Completed").length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm">In Progress</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              {assignments.filter(a => a.status === "In Progress").length}
            </h2>
          </div>

        </section>

        {/* Assignment List */}
        <section>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              All Assignments
            </h2>

            <span className="text-sm text-slate-500">
              {assignments.length} Tasks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {assignments.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200
                p-6 shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300"
              >

                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">

                  <span className="text-3xl font-bold text-blue-100
                    group-hover:text-blue-600 transition">
                    {item.id}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Completed"
                      ? "bg-green-50 text-green-600"
                      : "bg-orange-50 text-orange-600"
                  }`}>
                    {item.status}
                  </span>

                </div>

                {/* Card Content */}
                <p className="text-blue-600 text-xs font-semibold mb-2">
                  {item.category}
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2
                  group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 mb-3">
                  {item.subject}
                </p>

                <p className="text-slate-500 text-sm leading-7">
                  {item.description}
                </p>

                {/* Card Footer */}
                <div className="border-t border-slate-100 mt-5 pt-4">
                  <span className="text-xs font-medium text-slate-400">
                    ASSIGNMENT {item.id}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Bottom Banner */}
        <section className="mt-10 bg-blue-600 rounded-2xl p-8
          text-white shadow-lg shadow-blue-100">

          <h2 className="text-2xl font-bold mb-3">
            Learn. Practice. Improve.
          </h2>

          <p className="text-blue-100 leading-relaxed">
            Every assignment is an opportunity to gain new knowledge,
            improve my skills, and develop my experience.
          </p>

        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
