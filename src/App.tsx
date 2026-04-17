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
  description: "AZMIR İNŞAAT sənaye sahəsində müxtəlif istiqamətlər üzrə mühəndislik, tikinti və texniki işlərin icrasında iştirak etmiş, geniş praktik təcrübə formalaşdırmışdır. Şirkət layihələrin planlaşdırılması, sahədə icrası və texniki dəstəyi mərhələlərini əhatə edən kompleks yanaşma əsasında real layihələr həyata keçirmişdir. Fəaliyyət çərçivəsində sənaye tikintisi, mexaniki və boru işləri, elektrik və avtomatika sistemləri, izolyasiya və havalandırma işləri, texniki xidmət, eləcə də avadanlıq və materialların təchizatı üzrə işlər icra olunmuşdur. Layihələrin icrası zamanı texniki tələblər və sahə şəraiti nəzərə alınaraq effektiv və praktik mühəndis həlləri tətbiq edilmişdir. AZMIR Türkiyə və Azərbaycan bazarlarında müxtəlif sənaye və enerji layihələrində iştirak etmişdir. Şirkət iri sənaye obyektləri və beynəlxalq layihələr çərçivəsində həm icra, həm də təchizat üzrə işlər həyata keçirmişdir.",
  items: [
    "STAR Neft Emalı Zavodu, Petkim Neft-Kimya Kompleksi, İstanbul Yeni Hava Limanı",
    "Azerkimya, HAOR Neft Emalı Zavodu, TÜPRAŞ",
    "ETİ Bakır, ETİ Soda, Söke Çimento",
    "Əməkdaşlıqlar: Technicas Reunidas, Tekfen, İÇTAŞ Energy, Cengiz Holding, ENKA, Saipem, Azeriqaz, Siemens."
  ]
};

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
            <a href="mailto:info@azmir.net" className="hover:text-brand-blue transition-colors">info@azmir.net</a>
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
        <a href="#" className="text-3xl font-black tracking-tighter text-brand-blue hover:opacity-80 transition-opacity">
          AZMİR
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="#haqqimizda" className="hover:text-brand-blue transition-colors">Haqqımızda</a>
          <a href="#xidmetler" className="hover:text-brand-blue transition-colors">Xidmətlər</a>
          <a href="#layiheler" className="hover:text-brand-blue transition-colors">Layihələr</a>
          <a href="#elaqe" className="hover:text-brand-blue transition-colors">Əlaqə</a>
        </div>
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
            <a 
              href="https://drive.google.com/uc?export=download&id=1eRuC1PdahKajvKk5FfwPv4ztaZhY_4wF" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-blue text-white px-10 py-4 clip-btn font-bold text-sm shadow-md hover:bg-blue-800 transition-colors"
            >
              Kataloqu Yüklə
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="layiheler" className="py-24 px-6 md:px-12 bg-brand-light-gray relative scroll-mt-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-brand-gray uppercase">{layihelerData.title}</h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full mb-6" />
            <p className="text-brand-gray text-sm font-medium w-full">{layihelerData.description}</p>
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

      {/* Footer */}
      <footer id="elaqe" className="bg-brand-blue text-white py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter">AZMİR</div>
          <a href="https://wa.me/994502663052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Əlaqə: +994 50 266 30 52
          </a>
          <p className="text-xs opacity-50">© 2026 AZMİR. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </div>
  );
}
