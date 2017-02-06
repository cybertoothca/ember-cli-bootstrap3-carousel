import Ember from 'ember';

export default Ember.Mixin.create({
  /**
   * The amount of time to delay between automatically cycling an item. If `false`, carousel will not automatically
   * cycle.
   * @default 5000 (milliseconds).
   * @see http://getbootstrap.com/javascript/#carousel-options
   */
  interval: 5000,
  keyboard: Ember.computed.readOnly('keyboard?'),
  /**
   * Whether the carousel should react to keyboard events.
   * @default true;
   * @see http://getbootstrap.com/javascript/#carousel-options
   */
  'keyboard?': true,
  /**
   * If set to `hover`, pauses the cycling of the carousel on mouseenter and resumes the cycling of the
   * carousel on mouseleave. If set to `null`, hovering over the carousel won't pause it.
   * @default 'hover'.
   * @see http://getbootstrap.com/javascript/#carousel-options
   */
  pause: 'hover',
  wrap: Ember.computed.readOnly('wrap?'),
  /**
   * Whether the carousel should cycle continuously or have hard stops.
   * @default true
   * @see http://getbootstrap.com/javascript/#carousel-options
   */
  'wrap?': true,
  /**
   * The computed `options` that can be supplied to the `carousel` initialization.
   * @see http://getbootstrap.com/javascript/#carousel-options-1
   */
  computedOptions: Ember.computed('interval', 'keyboard?', 'pause', 'wrap?', function () {
    return this.getProperties('interval', 'keyboard', 'pause', 'wrap');
  })
});
