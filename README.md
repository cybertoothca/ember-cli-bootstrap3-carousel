# ember-cli-bootstrap3-carousel [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-carousel.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-carousel) ![](http://embadge.io/v1/badge.svg?start=2.3.0)

[![npm version](http://badge.fury.io/js/ember-cli-bootstrap3-carousel.svg)](http://badge.fury.io/js/ember-cli-bootstrap3-carousel) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-carousel.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-carousel) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-carousel/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-carousel) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-bootstrap3-carousel.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-carousel.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-carousel) [![License](http://img.shields.io/npm/l/ember-cli-bootstrap3-carousel.svg)](LICENSE.md)

This addon can create a basic Bootstrap3 carousel that can lazy-load images.  See the
[Bootstrap3 Carousel](http://getbootstrap.com/javascript/#carousel) documentation for additional information.

## Demo

The demonstration web application can be found here:
[http://ember-cli-bootstrap3-carousel.cybertooth.io/](http://ember-cli-bootstrap3-carousel.cybertooth.io/). 

## What Does This Addon Do?

This addon supplies the following _components_:

* `twbs-carousel` - a container-like element for the carousel's slides.
* `twbs-carousel/slide` - a component representing a slide that is nested 
inside a `twbs-carousel`.
* `twbs-carousel/slide/img` - a component generating an html `<img>` tag
that has the ability to be lazily loaded by the carousel's slide event.

The following _mixin_ also ships with this addon:

* `Carousel` - imported as `import Carousel as 'ember-cli-bootstrap3-carousel/mixins/carousel'` and includes all 
of the carousel options as found in the [Bootstrap documentation](http://getbootstrap.com/javascript/#carousel-options).

_Further information about these items can be found in the Usage section below._

## Requirements

* **Ember >= 2.3.0**: This addon uses the [hash helper](http://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_hash-helper) which was introduced in Ember-2.3.0.
* Ember CLI
* You must have Bootstrap 3.x installed in your Ember application.  Feel free to use the
  [ember-cli-bootstrap3-sass](http://emberobserver.com/addons/ember-cli-bootstrap3-sass)
  addon to setup Bootstrap if you haven't already done so.

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-carousel

__As mentioned, you must install Bootstrap3 along with the tooltip plugin.  See the requirements section above.__

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-carousel` command once
you are done to get the latest version of the addon.

## Usage

As mentioned above there are several examples on the demonstration site:
[http://ember-cli-bootstrap3-carousel.cybertooth.io/](http://ember-cli-bootstrap3-carousel.cybertooth.io/)

### Components

#### `{{twbs-carousel}}`

A component that creates the `<div class="carousel>` element.

The reason this addon requires **Ember-2.3.0+** is because this particular component uses the _hash_ helper.

##### Arguments

* _All of the properties listed in the `Carousel` mixin_.
* `onSlide` - the property that accepts an action closure hooked to the bootstrap `slide.bs.carousel` event.
* `onSlid` - the property that accepts an action closure hooked to the bootstrap `slid.bs.carousel` event.

([Check out the demo...](http://ember-cli-bootstrap3-carousel.cybertooth.io/))


#### `{{twbs-carousel/slide}}`

##### Arguments


#### `{{twbs-carousel/slide/img}}`


##### Arguments

### Mixins

#### `Carousel`

A mixin that provides access to all of the Bootstrap carousel options as found
here: [http://getbootstrap.com/javascript/#carousel-options](http://getbootstrap.com/javascript/#carousel-options)

##### Properties

* `interval` - **Default** `5000`
* `keyboard?` (aliased to `keyboard`) - **Default** `true`
* `pause` - **Default** `"hover"`
* `wrap?` (aliased to `wrap`) - **Default** `true`

##### Methods

* `computedOptions()` - returns a hash containing the options from this mixin
that are used to initialize the Bootstrap popover.

### Troubleshooting And Tips

1. Ember-2.3.0+ is required because this addon uses the _hash_ helper.
1. Bootstrap3 CSS and the tooltip Javascript plugin must be installed.

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-carousel.git`
* `npm install`
* `bower install`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this addon within your local
node repository.
1. From the _other_ Ember project that you wish to test this addon
in, execute the following command:
`npm link ember-cli-bootstrap3-carousel`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-bootstrap3-carousel": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-bootstrap3-carousel`
1. Remove the reference to the `ember-cli-bootstrap3-carousel`
in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_ 
with a valid key and secret,

    [cybertooth]
    aws_access_key_id = <KEY>
    aws_secret_access_key = <SECRET>

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-bootstrap3-carousel.cybertooth.io/
