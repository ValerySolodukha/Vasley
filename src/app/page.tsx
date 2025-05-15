import Image from "next/image"
import { ArrowRight, Code, Cpu, Globe, Layers, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#111827]/80 backdrop-blur-md z-50 border-b border-[#F59E0B]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/screenshots/f790f3e3-043a-4508-b800-74bd70f0b694.PNG" alt="VASLY STUDIO Logo" width={56} height={56} className="object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
              שירותים
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
              דוגמאות
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
              אודות
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
              צור קשר
            </Link>
          </nav>
          <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white">דבר איתי על אתר לעסק שלך</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                בונה לך אתר תדמית <span className="text-[#F59E0B]">ברור, פשוט ויפה</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                אתר אישי ומרשים שמתאים בדיוק לעסק שלך – בלי להסתבך ובלי לשבור את הכיס.
              </p>
              <div className="mt-4 bg-[#1F2937] p-6 rounded-lg border border-[#F59E0B]/20">
                <p className="text-[#F59E0B] font-medium text-lg">
                  ✨ אני לא מתכנת – אלא משתמש בבינה מלאכותית מתקדמת כדי לבנות אתרים מקצועיים לעסקים קטנים.
                </p>
                <p className="text-gray-300 mt-3">
                  המטרה שלי היא ליצור עבורך אתר תדמית ברור, מודרני ומדויק – שיראה טוב, יעבוד טוב, וישרת את העסק שלך בצורה הטובה ביותר.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-8 py-6">צפה בדוגמאות</Button>
                <Button variant="outline" className="text-[#F59E0B] border-[#F59E0B] hover:bg-[#F59E0B]/10 text-lg px-8 py-6">
                  צור קשר
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-[#F59E0B]/20">
              <Image
                src="/screenshots/צילום מסך 2025-05-14 142953.png"
                alt="דוגמה לאתר תדמית"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#1F2937]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">השירותים שלי</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              אתרים אישיים מותאמים בדיוק לעסק שלך – כולל עיצוב, טקסטים, טופס יצירת קשר וכל מה שצריך כדי להיראות מקצועי ולהיות נוכח ברשת.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-[#F59E0B]" />,
                title: "אתר תדמית אישי",
                description: "אתר מותאם בדיוק לעסק שלך, עם עיצוב נקי ופשוט שמעביר את המסר שלך.",
              },
              {
                icon: <Code className="h-10 w-10 text-[#F59E0B]" />,
                title: "טקסטים מקצועיים",
                description: "תוכן מותאם אישית שמדבר בשפה שלך ומתחבר ללקוחות שלך.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-[#F59E0B]" />,
                title: "טופס יצירת קשר",
                description: "מערכת פשוטה לקבלת פניות מלקוחות, בלי להסתבך.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#111827] p-8 rounded-xl shadow-sm border border-[#F59E0B]/20 hover:shadow-lg transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <Button variant="link" className="mt-4 p-0 text-[#F59E0B] font-medium flex items-center gap-1">
                  קרא עוד <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">דוגמאות אפשריות</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              צפה בכמה מהפרויקטים האחרונים שלי המציגים פתרונות אתרים מקצועיים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "אתר תדמית לעסק מקומי",
                description: "אתר תדמית מקצועי עם עיצוב נקי ופשוט שמעביר את המסר שלך",
                image: "/screenshots/צילום מסך 2025-05-14 142953.png",
                tags: ["עיצוב נקי", "תוכן מותאם", "טופס יצירת קשר"],
              },
              {
                title: "אתר תדמית לעסק מקצועי",
                description: "אתר תדמית עם עיצוב מודרני שמתאים בדיוק לעסק שלך",
                image: "/screenshots/צילום מסך 2025-05-14 142310.png",
                tags: ["עיצוב מודרני", "תוכן אישי", "קל לתפעול"],
              },
              {
                title: "אתר תדמית לעסק חדש",
                description: "אתר תדמית עם דגש על חווית משתמש ועיצוב מותאם אישית",
                image: "/screenshots/צילום מסך 2025-05-14 142748.png",
                tags: ["חווית משתמש", "עיצוב אישי", "תוכן מקצועי"],
              },
            ].map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border border-[#F59E0B]/20 hover:shadow-lg transition-all bg-[#1F2937]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#F59E0B]/10 text-[#F59E0B] text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10">
                    צפה בפרויקט
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1F2937]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">אין לך אתר עדיין?</h2>
            <p className="text-xl text-gray-300 mb-8">
              זה הזמן להציג את העסק שלך בצורה מקצועית – אני כאן כדי לעזור לך לבנות אתר מושלם.
            </p>
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-8 py-6">דבר איתי על אתר לעסק שלך</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">צור קשר</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              בוא נדבר על האתר שלך – אני כאן כדי לעזור לך להופיע באינטרנט בצורה הכי טובה.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#1F2937] p-8 rounded-xl shadow-sm border border-[#F59E0B]/20">
              <h3 className="text-xl font-bold mb-6 text-white">שלח לי הודעה</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      שם
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 border border-[#F59E0B]/20 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none bg-[#111827] text-white"
                      placeholder="השם שלך"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border border-[#F59E0B]/20 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none bg-[#111827] text-white"
                      placeholder="האימייל שלך"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    נושא
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 border border-[#F59E0B]/20 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none bg-[#111827] text-white"
                    placeholder="נושא"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-[#F59E0B]/20 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none resize-none bg-[#111827] text-white"
                    placeholder="ההודעה שלך"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white">שלח הודעה</Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">פרטי התקשרות</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F59E0B]/10 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">אימייל</p>
                      <p className="text-gray-300">contact@vasly.studio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F59E0B]/10 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">אתר</p>
                      <p className="text-gray-300">www.vasly.studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 border-t border-[#F59E0B]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/screenshots/f790f3e3-043a-4508-b800-74bd70f0b694.PNG" alt="VASLY STUDIO Logo" width={56} height={56} className="object-contain" />
              </div>
              <p className="text-gray-400">בניית אתרים פשוטה וברורה לעסקים קטנים.</p>
            </div>

            {[
              {
                title: "שירותים",
                links: ["אתר תדמית", "עיצוב אישי", "טקסטים", "טופס יצירת קשר"],
              },
              {
                title: "מידע",
                links: ["איך זה עובד", "שאלות נפוצות", "מחירים", "צור קשר"],
              },
              {
                title: "חברה",
                links: ["אודות", "דוגמאות", "צור קשר", "מדיניות פרטיות"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4 text-white">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-[#F59E0B] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F59E0B]/20 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} VASLY STUDIO. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
