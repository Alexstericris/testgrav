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
                    <span class="text-primary">Scalable, Robust, Simple</span>
                </h1>

                <p class="text-lg text-gray-300 mb-6 max-w-xl">
                    I build scalable, high-performance applications using Laravel and Vue,
                    combined with modern CMS solutions like WordPress and Grav.
                </p>

                <div class="flex gap-4">
                    <a href="{{ page.find('/home').url~"#contact" }}" class="btn-primary">Get in Touch</a>
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
                <h2 class="text-4xl md:text-5xl font-extrabold">Modern <span class="text-primary">Stack</span></h2>
                <p class="text-gray-400 mt-4 max-w-2xl">
                    Laravel + Vue.js for enterprise-grade applications with real-time capabilities and scalable architecture.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Custom APIs</h3>
                    <p class="text-sm text-gray-400">
                        RESTful APIs with Laravel Sanctum & Passport for secure and scalable applications.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Realtime Apps</h3>
                    <p class="text-sm text-gray-400">
                        WebSockets, live updates, notifications, and collaborative features.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">State Management</h3>
                    <p class="text-sm text-gray-400">
                        Vue 3 + Pinia architecture for predictable frontend scaling.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition">
                    <h3 class="text-xl font-bold mb-3">Forms & Validation</h3>
                    <p class="text-sm text-gray-400">
                        Complex forms, multi-step flows, and validation systems.
                    </p>
                </div>

                <div class="p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition lg:col-span-2">
                    <h3 class="text-xl font-bold mb-3">Performance Optimization</h3>
                    <p class="text-sm text-gray-400 mb-4">
                        Redis, queues, caching, and query optimization to ensure speed at scale.
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
        <h2 class="text-4xl md:text-5xl font-extrabold mb-8">Other <span class="text-primary">Services</span></h2>
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            <!-- WordPress -->
            <div class="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-black">
                <h3 class="text-3xl font-bold mb-4">
                    Headless <span class="text-primary">WordPress</span>
                </h3>

                <p class="text-gray-400 mb-6">
                    WordPress with AI-driven content management
                </p>

                <ul class="space-y-2 text-sm text-gray-300">
                    <li>✔ SEO optimized with static rendering</li>
                    <li>✔ Avada website builder</li>
                    <li>✔ Custom plugins for custom requirements</li>
                </ul>
            </div>

            <!-- Grav -->
            <div class="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-black">
                <h3 class="text-3xl font-bold mb-4">
                    Flat-file <span class="text-primary">Grav CMS</span>
                </h3>

                <p class="text-gray-400 mb-6">
                    High-performance CMS without database overhead.
                </p>

                <ul class="space-y-2 text-sm text-gray-300">
                    <li>✔ No database latency</li>
                    <li>✔ Twig templating</li>
                    <li>✔ Git-friendly workflows</li>
                </ul>
            </div>

        </div>
    </section>

    <!-- PROCESS -->
    <section class="mb-24">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-12">
                Development <span class="text-primary">Process</span>
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h4 class="font-bold mb-2">01 Discovery</h4>
                    <p class="text-sm text-gray-400">Requirements & planning</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">02 Architecture</h4>
                    <p class="text-sm text-gray-400">System & API design</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">03 Development</h4>
                    <p class="text-sm text-gray-400">Implementation & testing</p>
                </div>

                <div>
                    <h4 class="font-bold mb-2">04 Deployment</h4>
                    <p class="text-sm text-gray-400">Launch & optimization</p>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center">
        <h2 class="text-5xl font-extrabold mb-6">
            Ready to scale your <span class="text-primary">next project?</span>
        </h2>

        <p class="text-gray-400 mb-10 max-w-xl mx-auto">
            Let’s build something exceptional together.
        </p>

        <div class="flex justify-center gap-6">
            <a href="#contact" class="btn-primary">Contact Me</a>
        </div>
    </section>

</div>
