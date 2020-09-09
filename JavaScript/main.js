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
router.add('/team', 'team', function() { console.log('hi'); });

