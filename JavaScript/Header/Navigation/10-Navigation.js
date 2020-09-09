/**
 *  This file constructs the header
 */

// constructor
Header.Navigation = function($parent) {

    // the nav container
    const $nav = $('<nav id="nav-menu-container" class="header-nav">').appendTo($parent);

    // the list of navigation options
    const $links = new Header.Links($nav);

    // method to hide this component
    this.hide = () => { $nav.hide(); };

    // method to show this component
    this.show = () => { $nav.show(); }; 

    /**
     *  Destructor
     */
    this.remove = () => {

        // remove the links
        $links.remove();

        // remove the nav
        $nav.remove();
    };
};