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

        console.log(route)

        // add the state to the history of the browser
        var stateDataObj = { state_related: route.page };
        window.history.pushState(stateDataObj, route.page, url);
        
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
