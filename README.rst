.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on pypi or github. It is a comment.

==============================================================================
redturtle.patterns.slider
==============================================================================

A pattern based on Plone Mockup that enable a slick slider on a selected div.

Features
--------

- TODO


Examples
--------

This add-on can be seen in action at the following sites:
- Is there a page on the internet where everybody can see the features?


Documentation
-------------


Installation
------------

Install redturtle.patterns.slider by adding it to your buildout::

    [buildout]

    ...

    eggs =
        redturtle.patterns.slider


and then running ``bin/buildout``

After that, you need to install it in your Plone site from the control panel.

Pattern usage
-------------

This pattern follows slick's standards, so you need a div with a list of items.

To enable the pattern in a div, you just need to add 'pat-slider' class to it:

.. code::

  <div class="pat-slider">
  ...
  </div>

There is a set of default parameters for the slider:

- dots: true
- slidesToShow: 4
- slidesToScroll: 4
- arrows: true
- lazyLoad: 'ondemand'

If you want to change something, you only need to add an additional configuration (mockup-style) to your div like this:

.. code::

  <div class="pat-slider"
       data-pat-slider="dots: false; arrows: false">
  ...
  </div>


Development build chain
-----------------------

This is a pattern registered in resource registry, so if you made some changes,
the bundle needs to be recompiled.

There are two grunt commands availables in the product's root:

- `grunt`: starts a grunt-watch task and re-compile automatically the resources
- `grunt compile`: compile all the resources of the bundle on demand

Contribute
----------

- Issue Tracker: https://github.com/RedTurtle/redturtle.patterns.slider/issues
- Source Code: https://github.com/RedTurtle/redturtle.patterns.slider


Support
-------

If you are having issues, please let us know.
We have a mailing list located at: project@example.com


License
-------

The project is licensed under the GPLv2.
