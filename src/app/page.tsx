import Image from "next/image"
import { ArrowRight, Code, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#111827]/80 backdrop-blur-md z-50 border-b border-[#F59E0B]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-white tracking-widest">VASLY STUDIO</span>
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
          <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white">צור קשר עכשיו</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                אתר שימשוך לקוחות לעסק שלך – בלי כאב ראש, בלי קוד, במחיר נגיש.
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                אתר אישי ומרשים שמתאים בדיוק לעסק שלך – בלי להסתבך ובלי לשבור את הכיס.
              </p>
              <div className="mt-4 bg-[#1F2937] p-6 rounded-lg border border-[#F59E0B]/20">
                <p className="text-[#F59E0B] font-medium text-lg">
                  ✨ אני לא כותב קוד – אני בונה אתרים חכמים בעזרת טכנולוגיה מתקדמת.<br />
                  זה מאפשר לי להקים אתר מקצועי לעסק שלך במהירות, ביעילות ובמחיר נגיש.<br /><br />
                  האתר שלך ייראה טוב, יעבוד טוב – וישרת אותך כמו שצריך.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black text-xl px-10 py-7 font-bold rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-[#F59E0B]/50 transition-all w-full">
                    צור קשר עכשיו
                  </Button>
                </a>
                <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600 text-white text-xl px-10 py-7 font-bold rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all flex items-center gap-2 w-full">
                    דבר איתי בוואטסאפ
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.212 8.212 0 0 1 4.5 18.2l-1.5.5.5-1.5A8.212 8.212 0 0 1 3.75 12c0-4.556 3.694-8.25 8.25-8.25S20.25 7.444 20.25 12Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h.008v.008H8.25V10.5Zm3.75 0h.008v.008h-.008V10.5Zm3.75 0h.008v.008h-.008V10.5Z" />
                    </svg>
                  </Button>
                </a>
              </div>
              <div className="mt-4 text-lg text-[#F59E0B] font-bold">שיחת ייעוץ ראשונית בחינם!</div>
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
                icon: <Globe className="h-16 w-16 text-[#F59E0B]" />,
                title: "עיצוב מותאם אישית",
                description: "עיצוב ייחודי שמותאם בדיוק לעסק שלך ולמה שהלקוחות שלך מחפשים.",
              },
              {
                icon: <Code className="h-16 w-16 text-[#F59E0B]" />,
                title: "תכנים שמדברים בשפה שלך",
                description: "כתיבה שיווקית שמדברת ללקוחות שלך ומניעה לפעולה.",
              },
              {
                icon: <MessageSquare className="h-16 w-16 text-[#F59E0B]" />,
                title: "טופס ליצירת קשר שיגרום לפניות",
                description: "טופס פשוט, ברור ונגיש – שמביא פניות ישירות אליך.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#111827] p-10 rounded-xl shadow-lg border border-[#F59E0B]/20 hover:shadow-2xl transition-shadow flex flex-col items-center">
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-lg text-gray-300 mb-4 text-center">{service.description}</p>
                <Button variant="link" className="mt-auto p-0 text-[#F59E0B] font-medium flex items-center gap-1 text-lg">
                  קרא עוד <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-[#F59E0B] text-black text-2xl font-bold px-8 py-6 rounded-2xl shadow-lg max-w-xl text-center">
            רוצה אתר שימשוך יותר לקוחות? <br />
            <a href="#contact" className="underline hover:text-[#D97706] transition">לחץ כאן והתחל בתהליך פשוט ונעים.</a>
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
            <div className="mt-6 text-lg text-[#F59E0B] font-bold">עוד אתרים בדרך – אולי שלך?</div>
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
                <Link href={`/preview?img=${encodeURIComponent(project.image)}`} passHref legacyBehavior>
                  <a className="relative h-64 w-full overflow-hidden block">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                    />
                  </a>
                </Link>
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
                  <Link href={`/preview?img=${encodeURIComponent(project.image)}`} passHref legacyBehavior>
                    <a className="inline-block mt-2">
                      <Button variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 w-full">
                        צפה בפרויקט
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-[#F59E0B] text-black text-2xl font-bold px-8 py-6 rounded-2xl shadow-lg max-w-xl text-center">
            רוצה אתר שימשוך יותר לקוחות? <br />
            <a href="#contact" className="underline hover:text-[#D97706] transition">לחץ כאן והתחל בתהליך פשוט ונעים.</a>
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
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-8 py-6">צור קשר עכשיו</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">צור קשר</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              רוצה לשמוע פרטים? שלח הודעה ונחזור אליך
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
            <div className="mt-6 flex justify-center">
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all">
                דבר איתי בוואטסאפ
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.212 8.212 0 0 1 4.5 18.2l-1.5.5.5-1.5A8.212 8.212 0 0 1 3.75 12c0-4.556 3.694-8.25 8.25-8.25S20.25 7.444 20.25 12Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h.008v.008H8.25V10.5Zm3.75 0h.008v.008h-.008V10.5Zm3.75 0h.008v.008h-.008V10.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-[#F59E0B] text-black text-2xl font-bold px-8 py-6 rounded-2xl shadow-lg max-w-xl text-center">
            רוצה אתר שימשוך יותר לקוחות? <br />
            <a href="#contact" className="underline hover:text-[#D97706] transition">לחץ כאן והתחל בתהליך פשוט ונעים.</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1F2937]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">שאלות נפוצות</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#F59E0B] mb-2">כמה זמן לוקח לבנות אתר?</h3>
              <p className="text-gray-300">אתר מוכן תוך כמה ימים, כולל עיצוב, תוכן וטופס פניות.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F59E0B] mb-2">האם אני צריך לדעת קוד?</h3>
              <p className="text-gray-300">ממש לא! אני דואג להכל – אתה רק צריך לספר לי מה העסק שלך צריך.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F59E0B] mb-2">כמה זה עולה?</h3>
              <p className="text-gray-300">המחיר נגיש ומשתנה לפי הצרכים שלך. אשמח לתת הצעת מחיר מותאמת בשיחה ראשונית.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 border-t border-[#F59E0B]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="font-bold text-xl text-white tracking-widest mb-2">VASLY STUDIO</span>
            <nav>
              <ul className="flex flex-wrap gap-8 justify-center items-center">
                <li><a href="#services" className="text-white hover:text-[#F59E0B] transition-colors font-medium">שירותים</a></li>
                <li><a href="#projects" className="text-white hover:text-[#F59E0B] transition-colors font-medium">דוגמאות</a></li>
                <li><a href="#about" className="text-white hover:text-[#F59E0B] transition-colors font-medium">אודות</a></li>
                <li><a href="#contact" className="text-white hover:text-[#F59E0B] transition-colors font-medium">צור קשר</a></li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-[#F59E0B]/20 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} VASLY STUDIO. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
