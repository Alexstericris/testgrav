---
title: Home
export: true
content:
    items: '@self.modular'
    limit: 5
    order:
        by: folder
        dir: asc
menu: Services
onpage_menu: '0'
process:
    twig: true
    markdown: false
---

<div class="text-gray-200">

    <!-- HERO -->
    <div class="animate-children w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[80vh] mb-28">

        <div class="absolute inset-0 opacity-30"
             style=""></div>

        <div class="absolute left-1/2 -translate-x-1/2 top-[15vh] max-w-4xl w-full px-6">
            <div class="p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl
             bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                <div class="flex flex-col md:flex-row items-center gap-6">

                    <!-- Text -->
                    <div class="flex-1">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
                            Alex Cristea
                        </h1>
                        <p class="text-lg text-gray-300 mb-6">
                            Full Stack Developer crafting scalable Laravel & Vue applications.<br>
                            I also build websites via Wordpress or Grav CMS.<br>
                            5+ years of Experience with Laravel & Vue
                        </p>
                        <div class="flex gap-4">
                            <a href="../../../index.php"
                               class="btn-primary">
                                View Services
                            </a>

                            <a href="../../../index.php"
                               class="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 transition">
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

    <!-- ABOUT -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur">
            <h2 class="text-3xl font-semibold text-white mb-2">About Me</h2>
            <h4 class="text-gray-400 mb-6">Building modern web applications</h4>

            <p class="text-gray-300 leading-relaxed mb-4">
                I'm a full stack developer focused on Laravel, Vue.js and scalable backend systems.
                I enjoy building clean, performant and maintainable applications.
            </p>

            <a href="../../../index.php"
               class="inline-block mt-4 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white transition">
                More About Me
            </a>
        </div>
    </div>

    <!-- TECH STACK -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
        <h2 class="text-center text-3xl font-semibold text-white mb-12">Tech Stack</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
                <h3 class="text-center group-hover:text-indigo-400 transition">Laravel</h3>
            </div>
            <div class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
                <h3 class="text-center group-hover:text-indigo-400">Vue.js</h3>
            </div>
            <div class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
                <h3 class="text-center group-hover:text-indigo-400">Tailwind</h3>
            </div>
            <div class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400 transition">
                <h3 class="text-center group-hover:text-indigo-400">MySQL</h3>
            </div>
        </div>
    </div>

    <!-- PROJECTS -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
        <h2 class="text-3xl font-semibold text-white mb-12">Projects</h2>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="group">
                <div class="overflow-hidden rounded-2xl mb-4">
                    <img class="w-full group-hover:scale-105 transition duration-500"
                         src="../../../index.php"/>
                </div>
                <h3 class="text-white text-xl">Web Applications</h3>
                <p class="text-gray-400">Laravel apps with APIs and auth systems.</p>
            </div>

            <div class="group">
                <div class="overflow-hidden rounded-2xl mb-4">
                    <img class="w-full group-hover:scale-105 transition duration-500"
                         src="../../../index.php"/>
                </div>
                <h3 class="text-white text-xl">Chrome Extensions</h3>
                <p class="text-gray-400">Custom browser tools with storage & UI.</p>
            </div>

            <div class="group">
                <div class="overflow-hidden rounded-2xl mb-4">
                    <img class="w-full group-hover:scale-105 transition duration-500"
                         src="../../../index.php"/>
                </div>
                <h3 class="text-white text-xl">Backend Systems</h3>
                <p class="text-gray-400">APIs, auth & scalable architectures.</p>
            </div>
        </div>
    </div>

    <!-- EXPERIENCE STRIP -->
    <div class="max-w-6xl mx-auto px-6 mb-24">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10">
                <h3 class="text-white">Experience</h3>
                <p class="text-gray-400">Real-world production apps & systems.</p>
            </div>

            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10">
                <h3 class="text-white">Focus</h3>
                <p class="text-gray-400">Clean code & performance.</p>
            </div>

            <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10">
                <h3 class="text-white">Currently</h3>
                <p class="text-gray-400">Laravel + Vue real-time apps.</p>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="text-center py-24 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <h2 class="text-4xl text-white mb-4">Let’s Build Something</h2>
        <p class="text-gray-300 mb-6">Open for projects and collaborations</p>

        <a href="../../../index.php"
           class="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-lg transition shadow-lg">
            Get In Touch
        </a>
    </div>

</div>
