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
    <div class="animate-children mt-12 lg:mt-28 mb-28">

        <div class="opacity-30"
             style=""></div>

        <div class="max-w-7xl w-full">
            <div class="p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
             bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                <div class="flex flex-col md:flex-row items-center gap-6">

                    <!-- Text -->
                    <div class="flex-1">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4">
                            Alex Cristea
                        </h1>
                        <p class="text-lg text-gray-300 mb-6">
                            Full-stack developer with 5+ years of experience building scalable Laravel & Vue applications.<br><br>
                            I also build websites with Wordpress or Grav CMS.
                        </p>
                        <div class="flex gap-4">
                            <a href="{{ page.find('/services').url }}"
                               class="btn-primary">
                                View Services
                            </a>

                            <a href="{{ page.find('/home').url~"#contact" }}"
                               class="btn-primary-transparent">
                                Contact Me
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
                <h2 class="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Core Expertise</h2>
                <h3 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">Specialized Services</h3>
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
                    <p class="text-on-surface-variant text-sm leading-relaxed">Robust back-end systems built with the elegance of PHP's most powerful framework for enterprise performance.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Eloquent</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Inertia</span>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">

                    <h4 class="text-xl font-bold mb-3 text-on-surface">Vue.js Ecosystem</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Dynamic, reactive front-end architectures that provide seamless user experiences and lightning-fast speeds.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Pinia</span>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="group p-8 rounded-[30px] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                        <img src="{{ page.media['Wordpress-Logo.svg'].url|e }}" alt="WordPress" class="w-6 h-6 object-contain filter brightness-0 invert">
                    </div>
                    <h4 class="text-xl font-bold mb-3 text-on-surface">WordPress Solutions</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Custom theme and plugin development that scales. No page builders—just pure, optimized headless or traditional code.</p>
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
                    <h4 class="text-xl font-bold mb-3 text-on-surface">Grav CMS Mastery</h4>
                    <p class="text-on-surface-variant text-sm leading-relaxed">Modern flat-file CMS implementation for high-speed, secure, and easily maintainable content structures.</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Markdown</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Twig</span>
                        <span class="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Openclaw</span>
                    </div>
                </div>

            </div>
        </div>
    </section>    <!-- About Section -->
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
                    <h2 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">Five Years of Development</h2>
                    <p class="text-on-surface-variant text-lg leading-relaxed">
                        My journey began at schubwerk GmbH, where I started as a trainee, eager to take on new challenges and expand my technical skills.
                        In my early years, I quickly took on increasing responsibilities, including deploying applications and managing servers.
                        I later joined Solit, where I deepened my knowledge of web development, with a strong focus on WordPress.
                        Since 2024, I have been working as a full-stack developer at DELO, primarily focusing on backend development using Laravel.
                    </p>
                    <p class="text-on-surface-variant text-lg leading-relaxed">
                        Alongside my main role, I work as a freelancer to further refine my skills and gain hands-on experience with clients.
                        I am passionate about building complex systems and working with modern technologies.
                    </p>
                    <div class="flex justify-center w-full">
                        {% include 'partials/carousel.html.twig' with {
                            images: [
                                'delo_logo_lightblue.svg',
                                'solit-logo-signatur.png',
                                'Schubwerk-Logo-Black-768x146.png.webp'
                            ] } %}
                    </div>
{#                    <div>#}
{#                        <img class="max-h-[280px] w-auto m-0 rounded-xl"#}
{#                             src="{{ page.media['delo_logo_lightblue.svg'].url|e }}"#}
{#                             alt="DELO">#}
{#                        <img class="max-h-[280px] w-auto m-0 rounded-xl"#}
{#                             src="{{ page.media['solit-logo-signatur.png'].url|e }}"#}
{#                             alt="Solit">#}
{#                        <img class="max-h-[280px] w-auto m-0 rounded-xl"#}
{#                             src="{{ page.media['Schubwerk-Logo-Black-768x146.png.webp'].url|e }}"#}
{#                             alt="schubwerk">#}
{#                    </div>#}

                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section class="py-24 px-6 relative overflow-hidden" id="contact">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div class="max-w-4xl mx-auto bg-surface-container p-8 md:p-16 rounded-[30px] border border-white/5">
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-headline font-black tracking-tight mb-4">Let's build something <span class="text-primary">extraordinary.</span></h2>
                <p class="text-on-surface-variant">Currently accepting select freelance partnerships and consulting roles.</p>
            </div>
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                        <input class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="John Doe" type="text"/>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                        <input class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="john@example.com" type="email"/>
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Project Brief</label>
                    <textarea class="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" placeholder="Tell me about your vision..." rows="4"></textarea>
                </div>
                <button class="w-full bg-primary text-on-primary py-5 rounded-xl font-headline font-black text-lg hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                    Initiate Connection
                </button>
            </form>
        </div>
    </section>

</div>
