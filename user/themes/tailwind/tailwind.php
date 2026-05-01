<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class Tailwind extends Theme
{

    public static function getSubscribedEvents()
    {
        return [
            'onTwigLoader'          => ['onTwigLoader', 0],
        ];
    }

    public function onTwigLoader()
    {
        $theme_paths = Grav::instance()['locator']->findResources('theme://images');
        foreach($theme_paths as $images_path) {
            $this->grav['twig']->addPath($images_path, 'images');
        }
    }

}
