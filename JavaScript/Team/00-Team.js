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
