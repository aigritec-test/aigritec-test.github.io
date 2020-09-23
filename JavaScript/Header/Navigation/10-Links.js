/**
 *  This file constructs the navigation for the header.
 *  It is used to construct both the header navigation, as well
 *  as the mobile navigation
 */

// constructor
Header.Links = function($parent) {
      
    // add the ul to the nav
    const $ul = $('<ul class="header-nav-menu">').appendTo($parent);

    // construct array for menu options
    let menuArray = Array();

    /**
     * Add a link to the navigation list
     * @param { string } name 
     * @param { string } link 
     */
    const addLink = (name, link, active = false) => {

        // create the container for the link
        let $linkContainer = $('<li>').appendTo($ul);

        // add to the array
        menuArray.push($linkContainer);

        // add the active class
        if (active) $linkContainer.addClass('active');

        // create the link itself
        // $('<a>').text(name).appendTo($linkContainer);
        const $link = $('<a>').attr('href', link).text(name).appendTo($linkContainer);

        // if replacing state in router doesnt work, do it here
        // $link.on('click', () => {

        //     var stateDataObj = { state_related: name };
        //     window.history.replaceState(stateDataObj, name, link);
        // });
    };

    /**
     *  If you wish to add a new link to the navigation, you can add it here!
     */
    addLink('Home', '#');
    addLink('Team', '#/team');
    addLink('Technology', 'technology.html');
    addLink('Funding', 'funding.html');
    addLink('Contact', 'contact.html');

    // add click listeners
    menuArray.forEach(item => {

        // the actual listener
        item.on('click', () => {

            // remove all classes
            menuArray.forEach(link => { link.removeClass(); });

            // the active item
            item.addClass('active');
        });
    });

    // function to toggle mobile class
    this.mobile = () => {

        $ul.removeClass();
    };

    /**
     *  Destructor
     */
    this.remove = () => {

        $ul.remove();
    };
};