/**
 *  This file holds a custom router
 */

Router = function ($container) {

    // A hash to store our routes:
    let routes = {};

    // the actual router
    function router () {

        // Current route url (getting rid of '#' in hash as well):
        let url = location.hash.slice(1) || '/';

        // Get route by url:
        let route = routes[url];

        // add the state to the history of the browser
        try {
            window.location.replace(url);

            var stateDataObj = { state_related: route.page };
            window.history.pushState(stateDataObj, route.page, url);
        }
        catch(err) {
            console.log('dev mode');
        }
        
        // remove old widget from container
        $container.empty();

        // construct new widget
        let widget = new route.widget($container);
    };

    // Listen on hash change:
    window.addEventListener('hashchange', router);
    
    // Listen on page load:
    window.addEventListener('load', router);

    // function to add a router
    this.add = function (path, page, widget) {
        routes[path] = {page: page, widget: widget};
    };
};
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
};/**
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
        $('<a>').attr('href', link).text(name).appendTo($linkContainer);
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
};/**
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
};/**
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
/**
 *  This file constructs the index of the team page
 */

Team = function($parent) {

    // The container
    const $container = $('<div class="team">').appendTo($parent);

    // create header
    const $header = $('<div class="section-title">').appendTo($container);

    // add a header
    $('<h2>').text("Team").appendTo($header);

    //
    const template = new Team.LoadTemplate($container);


    /**
     *  Destructor
     */
    this.remove = () => {
        
        // remove the container
        $container.remove();
    };
};
/**
 *  This file constructs the index of the team page
 */

Team.LoadTemplate = function($parent) {

    // The container
    const $container = $('<div class="team-grid">').appendTo($parent);

    // load the template
    $container.load('Templates/team.html', function() { console.log('hi'); });

    /**
     *  Destructor
     */
    this.remove = () => {
        
        // remove the container
        $container.remove();
    };
};
/**
 *  This is the main javascript file
 *  It loads components based on the current page
 */

const $container = $('div.dev-container');

// always construct the header
Header($container);

const $content = $('<div class="content">').appendTo($container);

// construct Router
const router = new Router($content);

/**
 *  All the pages of this website
 *  If you create a new page, make sure to add it to the router
 */
router.add('/', 'home', Index);
router.add('/team', 'team', Team);
