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
