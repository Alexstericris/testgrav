<?php

namespace Grav\Plugin;

use Grav\Common\Plugin;

class MonacoEditorPlugin extends Plugin
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
            'onAdminTwigTemplatePaths' => ['onAdminTwigTemplatePaths', 0],
            'onAdminPage'         => ['onAdminPage', 0],
        ];
    }

    public function onPluginsInitialized(): void
    {
        if (!$this->isAdmin()) {
            return;
        }

        $this->enable([
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
            'onAssetsInitialized' => ['onAssetsInitialized', 0],
        ]);
    }

    public function onTwigTemplatePaths(): void
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }

    public function onAssetsInitialized(): void
    {
        $assets = $this->grav['assets'];

        $assets->addJs(
            'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js',
            ['group' => 'bottom', 'priority' => 100]
        );

        // Pass plugin config to JS as a global
        $config = $this->config->get('plugins.monaco-editor.options', []);
        $configJson = json_encode($config);
        $assets->addInlineJs(
            "window.MonacoEditorDefaults = {$configJson};",
            ['group' => 'bottom', 'priority' => 101]  // before loader.js
        );

        $initScript = file_exists(__DIR__ . '/js/monaco.min.js')
            ? 'plugin://monaco-editor/js/monaco-init.min.js'
            : 'plugin://monaco-editor/js/monaco-init.js';

        $assets->addJs($initScript, ['group' => 'bottom', 'priority' => 99]);
    }

    public function onAdminTwigTemplatePaths()
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }

    public function onAdminPage(): void
    {
        if (file_exists(__DIR__ . "/../../data/monaco/blueprints")) {
            $this->grav["locator"]->addPath("blueprints", "", __DIR__ . "/../../data/monaco/blueprints");
        } else {
            $this->grav["locator"]->addPath("blueprints", "", __DIR__ . "/blueprints");
        }
    }
}
