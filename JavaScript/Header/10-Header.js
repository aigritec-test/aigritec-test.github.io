/**
 *  This file constructs the header
 */

Header = function($parent) {

    // The header element
    const $header = $('<div class="header">').appendTo($parent);

    // add the container for the logo
    const $logoContainer = $('<div id="logo" class="header-logo">').appendTo($header);

    // add the link
    const $logoLink = $('<a href="index.html">').appendTo($logoContainer);

    // add the image
    $('<img src="img/logo.png">').appendTo($logoLink);

    /**
     *  Add the navigation
     */
    const nav = new Header.Navigation($header);

    /**
     *  Destructor
     */
    this.remove = () => {

        // remove the nav
        nav.remove();

        // remove the header
        $header.remove();
    };
};