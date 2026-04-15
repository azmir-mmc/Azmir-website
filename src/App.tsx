/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  HardHat, 
  Settings, 
  Cpu, 
  Truck,
  Award,
  Users,
  Briefcase,
  ChevronRight
} from "lucide-react";

const xidmetlerData = [
  {
    title: "Texniki yanaşma",
    items: [
      "AZMIR sənaye layihələrində texniki həllərin formalaşdırılması və tətbiqində sistem inteqratoru kimi çıxış edir.",
      "Şirkət mövcud infrastrukturu və müasir texnologiyaları vahid və idarə olunan texniki mühitdə birləşdirərək kompleks və işlək sistemlər yaradır.",
      "Tikinti və təchizat mərhələləri vahid texniki yanaşma çərçivəsində həyata keçirilir.",
      "Elektrik, mexaniki, təhlükəsizlik və avtomatlaşdırma sistemləri bir-birini tamamlayan funksional komponentlər kimi formalaşdırılır.",
      "Bütün komponentlər layihənin xüsusiyyətlərinə uyğun seçilir və vahid struktur daxilində tətbiq olunur.",
      "Nəticədə yüksək etibarlılığa malik, idarə olunan və uzunmüddətli istismara uyğun texniki sistemlər formalaşdırılır."
    ]
  },
  {
    title: "Tikinti və mexaniki işlər",
    items: [
      "Sənaye tikintisi: Şirkət sənaye obyektlərinin tikintisi üzrə tam dövrü (turnkey) mühəndis-tikinti həlləri təqdim edir.",
      "İşlərin əhatə dairəsi: Sahənin hazırlanması, əsas və köməkçi tikililərin inşası, istehsalat və texnoloji zonaların formalaşdırılması.",
      "Metal konstruksiyalar: Layihələndirmə, istehsal, səthlərin hazırlanması, antikorroziya mühafizəsi və sahədə montaj (daşıyıcı karkaslar, platformalar, estakadalar).",
      "Mexaniki işlər: Boru xətlərinin quraşdırılması, texnoloji avadanlıqların montajı, nasos və armatur quraşdırılması.",
      "İzolyasiya və sınaq: İstilik və hidroizolyasiya işləri, sistemlərin sınaqdan keçirilməsi və sazlanması."
    ]
  },
  {
    title: "Mühəndis sistemləri və avtomatlaşdırma",
    items: [
      "AZMIR mühəndis sistemlərinin qurulması və avtomatlaşdırılması üzrə həllər təqdim edir.",
      "Elektrik və idarəetmə: İstehsalat proseslərinin stabil və təhlükəsiz işləməsini təmin edir.",
      "HVAC: Havalandırma və iqlim sistemləri ilə optimal iş şəraiti və enerji effektivliyi.",
      "Təhlükəsizlik: CCTV (video müşahidə), yanğın sistemləri, detektorlar, girişə nəzarət və monitorinq.",
      "Avtomatlaşdırma: SCADA sistemləri, PLC idarəetmə qurğuları, sənaye avtomatika panelləri, uzaqdan nəzarət."
    ]
  },
  {
    title: "Texniki xidmət və təchizat",
    items: [
      "Şirkət layihələrdə texniki həllərin düzgün seçilməsini və tətbiqini təmin edir.",
      "Təchizat prosesi layihənin texniki tələblərinə uyğun sistemlərin formalaşdırılmasını əhatə edir.",
      "Norveç, Türkiyə, ABŞ, İsveçrə və digər ölkələrin texnologiyaları tətbiq edilir.",
      "Beynəlxalq Tərəfdaşlar:",
      "MEGA Endüstri A.Ş. (Türkiyə): Sənaye tikintisi və izolyasiya.",
      "Esders GmbH (Almaniya): Qaz analizatorları və sızma aşkarlama.",
      "Pamuk Teknoloji (Türkiyə): Təhlükəsizlik və monitorinq sistemləri.",
      "ORS AS (Norveç): Mühəndislik və texnoloji həllər.",
      "Siemens, Honeywell, ABB, Schneider Electric: Sənaye avtomatlaşdırması, elektrik və təhlükəsizlik sistemləri."
    ]
  },
  {
    title: "İnnovativ texnologiyalar",
    items: [
      "İnnovativ texnologiyaların tətbiqi layihələrin texniki keyfiyyətinin və istismar effektivliyinin artırılması üçün prioritetdir.",
      "Bu yanaşma iş proseslərinin optimallaşdırılmasını və resursların səmərəli idarə olunmasını əhatə edir.",
      "İnteqrasiya: SCADA və PLC əsaslı idarəetmə vasitələri ilə mərkəzləşdirilmiş idarəetmə və real vaxt rejimində nəzarət təmin olunur.",
      "Texniki risklər minimuma endirilir və əməliyyat sabitliyi artırılır."
    ]
  },
  {
    title: "Təlim və konsaltinq",
    items: [
      "Müştəri və texniki heyət üçün təlim proqramları təşkil olunur.",
      "Sistemlərin düzgün istismarı üçün zəruri biliklər və texniki baza formalaşdırılır.",
      "Konsaltinq: İri həcmli və kompleks layihələr üzrə məsləhət xidmətləri və beynəlxalq tərəfdaşların layihələrə cəlb olunması."
    ]
  },
  {
    title: "Ümumi tikinti və infrastruktur işləri",
    items: [
      "Yol tikintisi, torpaq işləri, körpü və tunel tikintisi kimi kompleks işlər icra olunur.",
      "İşlərin pay bölgüsü:",
      "• Ümumi tikinti: 55%",
      "• Təmir işləri: 25%",
      "• İnfrastruktur işləri: 15%",
      "• Metal konstruksiya: 5%"
    ]
  },
  {
    title: "Keyfiyyət və Standartlar",
    items: [
      "Fəaliyyət ISO sertifikatlarına və beynəlxalq standartlara uyğun həyata keçirilir.",
      "Tikinti sahəsində fəaliyyət üçün rəsmi lisenziyaya malikdir.",
      "HSE Standartları: Sağlamlıq, Təhlükəsizlik və Ətraf Mühit standartlarına tam uyğunluq, risk qiymətləndirmə.",
      "Texniki Standartlar: ASME, API, IEC, IEEE."
    ]
  }
];

const layihelerData = {
  title: "Təcrübə və layihələr",
  description: "AZMIR Türkiyə və Azərbaycan bazarlarında müxtəlif sənaye və enerji layihələrində iştirak etmişdir.",
  items: [
    "STAR Neft Emalı Zavodu, Petkim Neft-Kimya Kompleksi, İstanbul Yeni Hava Limanı",
    "Azerkimya, HAOR Neft Emalı Zavodu, TÜPRAŞ",
    "ETİ Bakır, ETİ Soda, Söke Çimento",
    "Əməkdaşlıqlar: Technicas Reunidas, Tekfen, İÇTAŞ Energy, Cengiz Holding, ENKA, Saipem, Azeriqaz, Siemens."
  ]
};

const partners = [
  "Siemens", "ABB", "Honeywell", "Schneider Electric", "MEGA Endüstri", "Esders GmbH", "Pamuk Teknoloji", "ORS AS"
];

const certifications = [
  "ISO 9001:2015 Keyfiyyət İdarəetmə Sistemi",
  "ISO 14001:2015 Ətraf Mühit İdarəetmə Sistemi",
  "ISO 45001:2018 Sağlamlıq və Əməyin Təhlükəsizliyi"
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray gap-4">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-blue" />
            <span>+994 50 266 30 52</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-blue" />
            <span>info@azmir.net</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-blue" />
            <span>www.azmir.net</span>
          </div>
        </div>
        <div className="font-medium text-brand-blue tracking-wider uppercase text-xs">
          Mühəndislik | Təchizat | Tikinti
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-light-gray px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tighter text-brand-blue">
          AZMİR
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="#haqqimizda" className="hover:text-brand-blue transition-colors">Haqqımızda</a>
          <a href="#xidmetler" className="hover:text-brand-blue transition-colors">Xidmətlər</a>
          <a href="#layiheler" className="hover:text-brand-blue transition-colors">Layihələr</a>
          <a href="#elaqe" className="hover:text-brand-blue transition-colors">Əlaqə</a>
        </div>
        <button className="bg-brand-blue text-white px-8 py-3 clip-btn text-sm font-bold hover:bg-blue-800 transition-all shadow-md">
          Təklif Al
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-16 pb-24 px-6 md:px-12">
        {/* Background Dots */}
        <div className="absolute top-10 right-10 w-32 h-32 dots-pattern opacity-15" />
        <div className="absolute bottom-10 left-10 w-32 h-32 dots-pattern opacity-15" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-brand-blue leading-[1.1] mb-8 uppercase">
              Mühəndislik <br />
              Təchizat <br />
              Tikinti
            </h1>
            <p className="text-lg text-brand-gray mb-10 max-w-md leading-relaxed">
              Sənaye sahəsində kompleks mühəndislik və tikinti işlərinin icrasını təmin edirik. Praktiki nəticə, etibarlı tərəfdaş.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-blue text-white px-10 py-4 clip-btn font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Xidmətlərimiz <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="Industrial Site" 
                className="w-full h-[400px] object-cover clip-azmir shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-10 clip-azmir hidden md:block shadow-2xl">
                <div className="text-3xl font-black mb-1">Etibarlı</div>
                <div className="text-lg opacity-80 uppercase tracking-widest">tərəfdaş.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="haqqimizda" className="py-24 px-6 md:px-12 bg-white border-y border-brand-light-gray scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-brand-gray">ŞİRKƏT HAQQINDA</h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full mb-8" />
            <div className="space-y-4 text-brand-gray text-sm leading-relaxed opacity-90 font-medium">
              <p>
                AZMIR sənaye sahəsində kompleks mühəndislik və tikinti işlərinin icrasını təmin edir. Şirkət layihələrin planlaşdırılması, texnoloji həllərin seçilməsi, sahədə tətbiqi və istismar mərhələlərini əhatə edən inteqrasiya olunmuş yanaşma təqdim edir.
              </p>
              <p>
                Təklif olunan həllər praktik tətbiqə yönəlmiş, texniki cəhətdən əsaslandırılmış və sifarişçinin əməliyyat tələblərinə uyğun şəkildə formalaşdırılır. Şirkət güclü mühəndis bazasına malikdir və layihələrin bütün mərhələlərində ixtisaslaşmış mütəxəssislərin iştirakı təmin olunur.
              </p>
              <p>
                Yerli heyət üçün texniki təlimlər keçirilir, istismar və xidmət prosedurları üzrə biliklərin ötürülməsi təmin edilir. Zəmanətli və zəmanətdən sonrakı dövrlərdə texniki dəstək göstərilir, avadanlıqların fasiləsiz və səmərəli istismarı təmin olunur.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-light-gray p-10 clip-card border-l border-black/5"
          >
            <h3 className="text-sm font-bold mb-8 text-brand-blue uppercase tracking-wider">Statistik Göstəricilər</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="font-bold text-brand-gray text-sm">10+ il təcrübə | 100+ tamamlanmış layihə</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="font-bold text-brand-gray text-sm">150+ peşəkar mütəxəssis komandası</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="font-bold text-brand-gray text-sm">ISO 9001, ISO 14001, ISO 45001 keyfiyyət sertifikatları</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="xidmetler" className="py-24 px-6 md:px-12 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-brand-gray">XİDMƏTLƏRİMİZ VƏ FƏALİYYƏT SAHƏLƏRİ</h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {xidmetlerData.map((section, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-brand-light-gray clip-card p-8 border-t-4 border-brand-blue flex flex-col"
              >
                <h3 className="text-sm font-bold mb-6 text-brand-blue uppercase tracking-wider">{section.title}</h3>
                <ul className="space-y-3 text-brand-gray text-xs leading-relaxed opacity-90 flex-grow">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-brand-blue text-white px-10 py-4 clip-btn font-bold text-sm shadow-md hover:bg-blue-800 transition-colors">
              Kataloqu Yüklə
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="layiheler" className="py-24 px-6 md:px-12 bg-brand-light-gray relative scroll-mt-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-brand-gray uppercase">{layihelerData.title}</h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full mb-6" />
            <p className="text-brand-gray text-sm font-medium max-w-2xl">{layihelerData.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {layihelerData.items.map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                className="bg-white p-6 clip-card border-l-4 border-brand-blue shadow-sm"
              >
                <p className="text-brand-gray text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-brand-blue py-20 px-6 md:px-12 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-12 items-center">
            {partners.slice(0, 4).map((partner, idx) => (
              <span key={idx} className="text-sm font-black tracking-[0.2em] opacity-80 uppercase">{partner}</span>
            ))}
          </div>
          <div className="flex gap-4">
            {certifications.map((cert, idx) => (
              <span key={idx} className="text-[10px] border border-white/40 px-3 py-1 rounded uppercase font-bold">
                {cert.split(' ')[0] + ' ' + cert.split(' ')[1]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Keyfiyyət və Standartlar</h2>
            <p className="text-brand-gray mb-10 leading-relaxed">
              AZMİR fəaliyyətini beynəlxalq standartlara uyğun şəkildə həyata keçirir və müvafiq ISO sertifikatlarına malikdir.
            </p>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-brand-light-gray rounded-xl">
                  <Award className="w-6 h-6 text-brand-blue shrink-0" />
                  <span className="font-medium text-slate-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 dots-pattern opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200" 
              alt="Quality Control" 
              className="w-full h-[400px] object-cover clip-azmir shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="elaqe" className="bg-brand-blue text-white py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter">AZMİR</div>
          <div className="text-sm font-medium opacity-80">Əlaqə: +994 50 266 30 52</div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-white transition-colors">Gizlilik siyasəti</a>
            <a href="#" className="hover:text-white transition-colors">İstifadə şərtləri</a>
          </div>
          <p className="text-xs opacity-50">© 2024 AZMİR. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </div>
  );
}
