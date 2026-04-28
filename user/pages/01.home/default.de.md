---
title: Home
export: true
content:
    items: '@self.modular'
    limit: 5
order:
    by: folder
    dir: asc
menu: Home
onpage_menu: '0'
process:
    twig: true
    markdown: false
---

<div class="text-gray-200">

    <!-- HERO -->
    <div class="animate-children w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[60vh] mb-28">

        <div class="absolute inset-0 opacity-30"
             style=""></div>

        <div class="absolute left-1/2 -translate-x-1/2 top-[15vh] max-w-4xl w-full px-6">
            <div class="p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
         bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                <div class="flex flex-col md:flex-row items-center gap-6">

                    <!-- Text -->
                    <div class="flex-1">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4">
                            Alex Cristea
                        </h1>
                        <p class="text-lg text-gray-300 mb-6">
                            Full-Stack-Entwickler mit über 5 Jahren Erfahrung in der Entwicklung skalierbarer Laravel- und Vue-Anwendungen.<br><br>
                            Außerdem erstelle ich Websites mit WordPress oder dem Grav CMS.
                        </p>
                        <div class="flex gap-4">
                            <a href="{{ page.find('/services').url }}"
                               class="btn-primary">
                                Services ansehen
                            </a>

                            <a href="{{ page.find('/home').url~"#contact" }}"
                               class="btn-primary-transparent">
                                Kontakt aufnehmen
                            </a>
                        </div>
                    </div>

                    <!-- Image -->
                    <img class="max-h-[280px] w-auto m-0 rounded-xl"
                         src="{{ page.media['img_4670.jpg'].url|e }}"
                         alt="Alex Cristea">
                </div>
            </div>
        </div>
    </div>

    <section class="mb-24" id="services">
        <div class="max-w-7xl mx-auto
     p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
     bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div class="mb-16">
                <h2 class="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Kernkompetenzen</h2>
                <h3 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">Spezialisierte Services</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <!-- Service 1 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                    <div class="flex gap-2">
                        <div
                            class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                            <img src="{{ page.media['laravel.svg'].url|e }}" alt="Laravel"
                                 class="w-6 h-6 object-contain">
                        </div>
                        <div
                            class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                            <img src="{{ page.media['vue.svg'].url|e }}" alt="Vue" class="w-6 h-6 object-contain">
                        </div>
                    </div>
                    <h4 class="text-xl font-bold mb-3 text-on-surface">Laravel+Vue Stack</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Robuste Backend-Systeme, entwickelt mit der Eleganz des leistungsstärksten PHP-Frameworks für Enterprise-Performance.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Eloquent</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Inertia</span>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">

                    <h4 class="text-xl font-bold mb-3 text-on-surface">Vue.js Ökosystem</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Dynamische, reaktive Frontend-Architekturen für nahtlose Nutzererlebnisse und extrem schnelle Performance.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Pinia</span>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                        <img src="{{ page.media['Wordpress-Logo.svg'].url|e }}" alt="WordPress" class="w-6 h-6 object-contain filter brightness-0 invert">
                    </div>
                    <h4 class="text-xl font-bold mb-3 text-on-surface">WordPress-Lösungen</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Individuelle Theme- und Plugin-Entwicklung, die skaliert. Keine Page Builder – nur sauberer, optimierter Code (Headless oder klassisch).</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Avada</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">REST API</span>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                        <img src="{{ page.media['grav-symbol.svg'].url|e }}" alt="Grav" class="w-6 h-6 object-contain filter brightness-0 invert">
                    </div>
                    <h4 class="text-xl font-bold mb-3 text-on-surface">Grav CMS Expertise</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Moderne Flat-File-CMS-Implementierung für hohe Geschwindigkeit, Sicherheit und einfache Wartbarkeit.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Markdown</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Twig</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Openclaw</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="py-24" id="experience">
        <div class="max-w-7xl mx-auto
         p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
         bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div class="relative">
                <div
                    class="absolute -top-10 -left-10 text-[200px] font-black text-white/5 select-none pointer-events-none">
                    05+
                </div>
                <div class="relative z-10 space-y-8">
                    <h2 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">Fünf Jahre Entwicklung</h2>
                    <p class="text-on-surface-variant text-lg leading-relaxed">
                        Meine Reise begann bei der schubwerk GmbH, wo ich als Auszubildender startete und schnell neue Herausforderungen annahm sowie meine technischen Fähigkeiten ausbaute.
                        In den ersten Jahren übernahm ich zunehmend Verantwortung, darunter das Deployment von Anwendungen und das Management von Servern.
                        Später wechselte ich zu Solit, wo ich mein Wissen in der Webentwicklung vertiefte, mit starkem Fokus auf WordPress.
                        Seit 2024 arbeite ich als Full-Stack-Entwickler bei DELO mit Schwerpunkt auf Backend-Entwicklung mit Laravel.
                    </p>
                    <p class="text-on-surface-variant text-lg leading-relaxed">
                        Neben meiner Haupttätigkeit arbeite ich als Freelancer, um meine Fähigkeiten weiter zu verfeinern und praktische Erfahrung mit Kundenprojekten zu sammeln.
                        Ich habe eine große Leidenschaft für die Entwicklung komplexer Systeme und den Einsatz moderner Technologien.
                    </p>
                    <div class="flex justify-center w-full">
                        {% include 'partials/carousel.html.twig' with { images: [
                            'delo_logo_lightblue.svg',
                            'solit-logo-signatur.png',
                            'Schubwerk-Logo-Black-768x146.png.webp'
                        ] } %}
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 px-6 relative overflow-hidden" id="contact">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div class="max-w-4xl mx-auto bg-surface-container p-8 md:p-16 rounded-[30px] border border-white/5">
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-headline font-black tracking-tight mb-4">Lass uns etwas <span class="text-primary">Außergewöhnliches</span> entwickeln.</h2>
                <p class="text-on-surface-variant">Derzeit nehme ich ausgewählte Freelance-Projekte und Beratungsaufträge an.</p>
            </div>
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Vollständiger Name</label>
                        <input class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="Max Mustermann" type="text"/>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">E-Mail-Adresse</label>
                        <input class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="max@example.com" type="email"/>
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Projektbeschreibung</label>
                    <textarea class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="Erzähl mir von deiner Idee..." rows="4"></textarea>
                </div>
                <button class="w-full bg-primary text-on-primary py-5 rounded-xl font-headline font-black text-lg hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                    Anfrage senden
                </button>
            </form>
        </div>
    </section>
</div>
