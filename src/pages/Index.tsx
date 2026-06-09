import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/64fa1576-fc1d-4b18-b816-f770fc30ec25/files/a5b537aa-801c-43c7-bd24-a26f447f7925.jpg";

const REGIONS = [
  { name: "Москва", icon: "Building2", desc: "Столица и область" },
  { name: "Донецкая НР", icon: "MapPin", desc: "ДНР — все направления" },
  { name: "Луганская НР", icon: "MapPin", desc: "ЛНР — все направления" },
  { name: "Запорожская обл.", icon: "MapPin", desc: "Все населённые пункты" },
  { name: "Херсонская обл.", icon: "MapPin", desc: "Все населённые пункты" },
  { name: "Крым", icon: "MapPin", desc: "Симферополь и города" },
  { name: "Ростов-на-Дону", icon: "Building", desc: "Ростовская область" },
  { name: "Краснодар", icon: "Building", desc: "Краснодарский край" },
];

const ADVANTAGES = [
  { icon: "Shield", title: "Безопасно", text: "Опытные водители, знание маршрутов и специфики новых территорий" },
  { icon: "Clock", title: "Точно в срок", text: "Подача в назначенное время, контроль каждого этапа поездки" },
  { icon: "Car", title: "Комфортные авто", text: "Современные автомобили бизнес- и комфорт-класса" },
  { icon: "Headphones", title: "Поддержка 24/7", text: "Наш диспетчер всегда на связи — до, во время и после поездки" },
];

export default function Index() {
  const [form, setForm] = useState({ from: "", to: "", date: "", name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(to bottom, hsl(220 20% 6% / 0.97), transparent)" }}>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center glow-orange">
            <Icon name="Car" size={17} className="text-black" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide">Такси АМГ</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#booking" className="hover:text-orange-500 transition-colors font-body">Забронировать</a>
          <a href="#regions" className="hover:text-orange-500 transition-colors font-body">Регионы</a>
          <a href="#about" className="hover:text-orange-500 transition-colors font-body">О компании</a>
        </div>
        <a href="tel:+78001234567"
          className="hidden md:flex items-center gap-2 bg-orange-500 text-black font-display font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-all glow-orange text-sm">
          <Icon name="Phone" size={15} />
          8 800 123-45-67
        </a>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <a href="#booking" className="font-display text-3xl text-foreground hover:text-orange-500 transition-colors" onClick={() => setMobileOpen(false)}>Забронировать</a>
          <a href="#regions" className="font-display text-3xl text-foreground hover:text-orange-500 transition-colors" onClick={() => setMobileOpen(false)}>Регионы</a>
          <a href="#about" className="font-display text-3xl text-foreground hover:text-orange-500 transition-colors" onClick={() => setMobileOpen(false)}>О компании</a>
          <a href="tel:+78001234567" className="font-display text-2xl text-orange-500 mt-4 flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Icon name="Phone" size={22} /> 8 800 123-45-67
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Дорога" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Animated shimmer lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute h-px opacity-20 animate-shimmer"
              style={{
                top: `${30 + i * 18}%`,
                left: 0, right: 0,
                background: "linear-gradient(90deg, transparent 0%, hsl(35 100% 54%) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                animationDelay: `${i * 0.6}s`,
              }} />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <div className="relative w-2 h-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 pulse-dot" />
              </div>
              <span className="text-orange-500 text-sm font-body font-medium">Работаем по всем регионам СВО</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100"
              style={{ opacity: 0 }}>
              МЕЖГОРОДНОЕ<br />
              <span className="text-gradient">ТАКСИ</span><br />
              ПО ВСЕЙ РОССИИ
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up delay-200 font-body"
              style={{ opacity: 0 }}>
              Доставим вас в любую точку страны — включая Донецкую и Луганскую народные республики, Запорожскую и Херсонскую области.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300" style={{ opacity: 0 }}>
              <a href="#booking"
                className="flex items-center gap-2 bg-orange-500 text-black font-display font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all glow-orange text-lg">
                <Icon name="CalendarCheck" size={20} />
                Забронировать поездку
              </a>
              <a href="tel:+78001234567"
                className="flex items-center gap-2 border border-orange-500/40 text-foreground font-display font-semibold px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all text-lg">
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>

            <div className="flex flex-wrap gap-10 mt-14 animate-fade-up delay-400" style={{ opacity: 0 }}>
              {[
                { val: "15+", label: "лет на рынке" },
                { val: "50 000+", label: "поездок в год" },
                { val: "24/7", label: "поддержка" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="font-display text-3xl font-bold text-orange-500">{s.val}</div>
                  <div className="text-muted-foreground text-sm font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-20 relative stripe-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                ЗАБРОНИРОВАТЬ <span className="text-gradient">ПОЕЗДКУ</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg">Заполните форму — мы перезвоним в течение 5 минут</p>
            </div>

            {sent ? (
              <div className="card-glass rounded-2xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={36} className="text-orange-500" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-3">Заявка принята!</h3>
                <p className="text-muted-foreground font-body text-lg">Наш диспетчер свяжется с вами в ближайшие 5 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-foreground font-body mb-2">Откуда</label>
                    <div className="relative">
                      <Icon name="MapPin" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                      <input
                        type="text"
                        placeholder="Город отправления"
                        value={form.from}
                        onChange={e => setForm({ ...form, from: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground font-body mb-2">Куда</label>
                    <div className="relative">
                      <Icon name="Navigation" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                      <input
                        type="text"
                        placeholder="Город назначения"
                        value={form.to}
                        onChange={e => setForm({ ...form, to: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground font-body mb-2">Дата поездки</label>
                    <div className="relative">
                      <Icon name="Calendar" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground font-body focus:outline-none focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground font-body mb-2">Ваше имя</label>
                    <div className="relative">
                      <Icon name="User" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                      <input
                        type="text"
                        placeholder="Как к вам обращаться?"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm text-muted-foreground font-body mb-2">Номер телефона</label>
                  <div className="relative max-w-sm">
                    <Icon name="Phone" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <button type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-orange-500 text-black font-display font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition-all glow-orange text-lg">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-14">
            ПОЧЕМУ <span className="text-gradient">ВЫБИРАЮТ НАС</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="card-glass rounded-2xl p-7 hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <Icon name={a.icon} size={26} className="text-orange-500" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{a.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section id="regions" className="py-20 relative">
        <div className="absolute inset-0 stripe-bg opacity-50" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
              <Icon name="Globe" size={16} className="text-orange-500" />
              <span className="text-orange-500 text-sm font-body">Все регионы России + территории СВО</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              КУДА МЫ <span className="text-gradient">ЕДЕМ</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {REGIONS.map((r, i) => (
              <div key={r.name}
                className="card-glass rounded-xl p-5 hover-lift cursor-pointer group border border-border hover:border-orange-500/40 transition-all"
                style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon name={r.icon} size={16} className="text-orange-500" fallback="MapPin" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm leading-tight">{r.name}</div>
                    <div className="text-muted-foreground text-xs mt-1 font-body">{r.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-glass rounded-2xl p-6 border border-orange-500/20">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Icon name="Info" size={24} className="text-orange-500 flex-shrink-0" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Мы знаем специфику маршрутов по новым территориям России. Наши водители регулярно выполняют поездки в зоне СВО и имеют необходимые документы и разрешения. Безопасность пассажиров — наш приоритет.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
                <Icon name="Award" size={16} className="text-orange-500" />
                <span className="text-orange-500 text-sm font-body">О нас</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                НАДЁЖНЫЙ ПАРТНЁР<br />
                <span className="text-gradient">В ЛЮБОЙ ДОРОГЕ</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Мы работаем на рынке межгородних перевозок более 15 лет. За это время выстроили сеть надёжных маршрутов по всей России и установили твёрдое присутствие на новых территориях страны.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Наши водители — профессионалы с опытом работы в сложных условиях. Они знают все маршруты, контрольные пункты и особенности перемещения в регионах ДНР, ЛНР, Запорожской и Херсонской областей.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Лицензированные перевозки", "Договор и чек", "Страхование пассажиров"].map(tag => (
                  <span key={tag} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "15+", label: "лет работы", icon: "Calendar" },
                { num: "200+", label: "водителей", icon: "Users" },
                { num: "100+", label: "городов", icon: "Map" },
                { num: "4.9★", label: "рейтинг", icon: "Star" },
              ].map((s) => (
                <div key={s.num} className="card-glass rounded-2xl p-6 text-center hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={s.icon} size={22} className="text-orange-500" fallback="Star" />
                  </div>
                  <div className="font-display text-3xl font-bold text-orange-500 mb-1">{s.num}</div>
                  <div className="text-muted-foreground text-sm font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(35 100% 54% / 0.12), hsl(220 20% 6%), hsl(28 100% 48% / 0.08))"
        }} />
        <div className="absolute inset-0 stripe-bg" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            ГОТОВЫ В <span className="text-gradient">ДОРОГУ?</span>
          </h2>
          <p className="text-muted-foreground font-body text-xl mb-10 max-w-xl mx-auto">
            Звоните прямо сейчас — оформим поездку за 5 минут
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+78001234567"
              className="flex items-center gap-3 bg-orange-500 text-black font-display font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition-all glow-orange text-xl">
              <Icon name="Phone" size={22} />
              8 800 123-45-67
            </a>
            <a href="#booking"
              className="flex items-center gap-3 border-2 border-orange-500/40 text-foreground font-display font-bold px-10 py-4 rounded-full hover:border-orange-500 transition-all text-xl">
              <Icon name="CalendarCheck" size={22} />
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <Icon name="Car" size={16} className="text-black" />
              </div>
              <span className="font-display text-xl font-bold">Такси АМГ</span>
            </div>
            <div className="text-center text-muted-foreground text-sm font-body">
              Межгороднее такси по всей России и территориям СВО
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Icon name="Phone" size={16} className="text-orange-500" />
              <a href="tel:+78001234567" className="hover:text-orange-500 transition-colors">8 800 123-45-67</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground font-body">
            © 2024 Такси АМГ. Лицензированные пассажирские перевозки. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  );
}