import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">VASLY STUDIO</h1>
              <span className="mr-2 text-blue-500">|</span>
              <span className="text-gray-400">אתרי תדמית לעסקים קטנים</span>
            </div>
            <div className="hidden md:flex items-center">
              <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors relative group ml-12">
                אודות
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors relative group ml-12">
                שירותים
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#portfolio" className="text-gray-400 hover:text-blue-500 transition-colors relative group ml-12">
                דוגמאות
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors relative group ml-24">
                צור קשר
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
            alt="Modern web development workspace"
            fill
            className="object-cover opacity-20 scale-110 animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              אתרי תדמית
              <br />
              <span className="text-6xl md:text-7xl">לעסקים קטנים</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              אני בונה אתרי תדמית מקצועיים לעסקים קטנים בעזרת AI מתקדם, 
              עם דגש על חווית משתמש מעולה ועיצוב מותאם אישית.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-700 hover:via-sky-600 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25">
              בואו נבנה את העתיד
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="text-right">
              <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">הגישה שלי</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-xl">
                אני מתמחה בבניית אתרי תדמית לעסקים קטנים, 
                עם דגש על חווית משתמש מעולה ועיצוב מותאם אישית.
              </p>
              <p className="text-gray-300 leading-relaxed text-xl">
                חשוב לציין: אני לא מתכנת, אלא משתמש ב-AI מתקדם ליצירת אתרים מקצועיים.
                זה מאפשר לי להתמקד בצרכים שלך וליצור אתר שמשקף את הייחודיות של העסק שלך.
              </p>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                alt="Web development process"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h3 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">השירותים שלי</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 text-right group h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mb-10 mr-auto transform rotate-0 group-hover:rotate-12 transition-transform">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-semibold text-white mb-6">אתר תדמית</h4>
                <p className="text-gray-300 text-xl leading-relaxed">אתר תדמית מקצועי לעסק שלך, עם דגש על חווית משתמש מעולה ועיצוב מותאם אישית. האתר ייבנה בעזרת AI מתקדם שיבטיח תוצאות מקצועיות ואיכותיות.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h3 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">דוגמאות אפשריות</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/screenshots/צילום מסך 2025-05-14 142953.png"
                alt="דוגמה לאתר תדמית"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">דוגמה 1</h4>
                  <p className="text-gray-300 text-lg">דוגמה לאתר תדמית מקצועי</p>
                </div>
              </div>
            </div>
            <div className="group relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/screenshots/צילום מסך 2025-05-14 142310.png"
                alt="דוגמה לאתר תדמית"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">דוגמה 2</h4>
                  <p className="text-gray-300 text-lg">דוגמה נוספת לאתר תדמית</p>
                </div>
              </div>
            </div>
            <div className="group relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/screenshots/צילום מסך 2025-05-14 142748.png"
                alt="דוגמה לאתר תדמית"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">דוגמה 3</h4>
                  <p className="text-gray-300 text-lg">דוגמה נוספת לאתר תדמית</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="text-right">
              <h3 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-gradient">צור קשר</h3>
              <div className="space-y-8">
                <p className="text-gray-300 text-xl">
                  <strong className="text-blue-500">אימייל:</strong> contact@webcraft.studio
                </p>
                <p className="text-gray-300 text-xl">
                  <strong className="text-blue-500">טלפון:</strong> 03-1234567
                </p>
                <p className="text-gray-300 text-xl">
                  <strong className="text-blue-500">שעות פעילות:</strong><br />
                  א&apos;-ה&apos;: 09:00-18:00<br />
                  ו&apos;: 09:00-14:00
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 text-right">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">התחל פרויקט</h4>
              <p className="text-gray-300 text-xl mb-8">בואו נבנה את אתר התדמית המושלם לעסק שלך בעזרת AI מתקדם</p>
              <Button className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-700 hover:via-sky-600 hover:to-blue-700 text-white py-6 text-xl rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                צור קשר עכשיו
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 border-t border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-right">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">VASLY STUDIO</h4>
              <p className="text-gray-400 text-lg">בניית אתרים בעזרת AI</p>
            </div>
            <div className="text-right">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">קישורים מהירים</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors text-lg">אודות</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors text-lg">שירותים</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-blue-500 transition-colors text-lg">דוגמאות</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors text-lg">צור קשר</a></li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">שעות פעילות</h4>
              <p className="text-gray-400 text-lg">
                א&apos;-ה&apos;: 09:00-18:00<br />
                ו&apos;: 09:00-14:00
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-blue-500/30 text-center text-gray-400 text-lg">
            <p>&copy; {new Date().getFullYear()} WebCraft Studio. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
