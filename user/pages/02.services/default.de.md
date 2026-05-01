---
title: 'Services'
process:
    twig: true
    markdown: false
---


<div class="text-gray-200">

    <!-- HERO -->
    <section class="relative min-h-[80vh] flex items-center mb-28 overflow-hidden">
        <div class="bg-primary/5 blur-[120px] opacity-30"></div>

        <div class="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
                    <span class="text-primary">Skalierbar, robust, einfach</span>
                </h1>

                <p class="text-lg text-gray-300 mb-6 max-w-xl">
                    Ich entwickle skalierbare, hochperformante Anwendungen mit Laravel und Vue,
                    kombiniert mit modernen CMS-Lösungen wie WordPress und Grav.
                </p>

                <div class="flex gap-4">
                    <a href="{{ page.find('/home').url~"#contact" }}" class="btn-primary">Kontakt aufnehmen</a>
                </div>
            </div>

            <div class="hidden lg:block">
                <img src="{{ page.media['mohammad-rahmani-oXlXu2qukGE-unsplash.jpg'].url|e }}"
                     class="rounded-3xl opacity-80">
            </div>
        </div>
    </section>

    <!-- STACK -->
    <section id="stack" class="mb-24">
        <div class="max-w-7xl mx-auto p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
     bg-gradient-to-br from-gray-800 via-gray-900 to-black">

            <div class="mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold">Moderner <span class="text-primary">Stack</span></h2>
                <p class="text-gray-400 mt-4 max-w-2xl">
                    Laravel + Vue.js für Enterprise-Anwendungen mit Echtzeit-Funktionalität und skalierbarer Architektur.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Individuelle APIs</h3>
                    <p class="text-sm text-gray-400">
                        RESTful APIs mit Laravel Sanctum & Passport für sichere und skalierbare Anwendungen.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Echtzeit-Apps</h3>
                    <p class="text-sm text-gray-400">
                        WebSockets, Live-Updates, Benachrichtigungen und kollaborative Funktionen.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">State Management</h3>
                    <p class="text-sm text-gray-400">
                        Vue 3 + Pinia Architektur für vorhersehbare Frontend-Skalierung.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Formulare & Validierung</h3>
                    <p class="text-sm text-gray-400">
                        Komplexe Formulare, mehrstufige Abläufe und Validierungssysteme.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition lg:col-span-2">
                    <h3 class="text-xl font-bold mb-3">Performance-Optimierung</h3>
                    <p class="text-sm text-gray-400 mb-4">
                        Redis, Queues, Caching und Query-Optimierung für maximale Geschwindigkeit bei hoher Last.
                    </p>

                    <div class="flex gap-2 flex-wrap">
                        <span class="badge">Redis</span>
                        <span class="badge">Queues</span>
                        <span class="badge">Load Balancing</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CMS -->
    <section class="mb-24">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-8">Weitere <span class="text-primary">Services</span></h2>
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            <!-- WordPress -->
            <div class="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-black">
                <h3 class="text-3xl font-bold mb-4">
                    Headless <span class="text-primary">WordPress</span>
                </h3>

                <p class="text-gray-400 mb-6">
                    WordPress mit KI-gestütztem Content-Management
                </p>

                <ul class="space-y-2 text-sm text-gray-300">
                    <li>✔ SEO-optimiert mit statischem Rendering</li>
                    <li>✔ Avada Website Builder</li>
                    <li>✔ Individuelle Plugins für spezielle Anforderungen</li>
                </ul>
            </div>

            <!-- Grav -->
            <div class="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-black">
                <h3 class="text-3xl font-bold mb-4">
                    Flat-File <span class="text-primary">Grav CMS</span>
                </h3>

                <p class="text-gray-400 mb-6">
                    Hochperformantes CMS ohne Datenbank-Overhead.
                </p>

                <ul class="space-y-2 text-sm text-gray-300">
                    <li>✔ Keine Datenbank-Latenz</li>
                    <li>✔ Twig-Templating</li>
                    <li>✔ Git-freundliche Workflows</li>
                </ul>
            </div>

        </div>
    </section>

    <!-- PROCESS -->
    <section class="mb-24">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-12">
                Entwicklungs-<span class="text-primary">prozess</span>
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h4 class="font-bold mb-2">01 Analyse</h4>
                    <p class="text-sm text-gray-400">Anforderungen & Planung</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">02 Architektur</h4>
                    <p class="text-sm text-gray-400">System- & API-Design</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">03 Entwicklung</h4>
                    <p class="text-sm text-gray-400">Implementierung & Testing</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">04 Deployment</h4>
                    <p class="text-sm text-gray-400">Launch & Optimierung</p>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center">
        <h2 class="text-5xl font-extrabold mb-6">
            Bereit, dein <span class="text-primary">nächstes Projekt zu skalieren?</span>
        </h2>

        <p class="text-gray-400 mb-10 max-w-xl mx-auto">
            Lass uns gemeinsam etwas Außergewöhnliches entwickeln.
        </p>

        <div class="flex justify-center gap-6">
            <a href="{{ page.find('/home').url~"#contact" }}" class="btn-primary">Kontakt aufnehmen</a>
        </div>
    </section>
</div>
