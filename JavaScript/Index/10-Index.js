/**
 *  This file constructs the index of the home page
 */

Index = function($parent) {

    // The container
    const $container = $('<div class="index">').appendTo($parent);

    // set background image
    $container.css('background-image', 'url(img/background/homepage-background.jpg)');

    /**
     *  Destructor
     */
    this.remove = () => {
        
        // remove the container
        $container.remove();
    };
};
