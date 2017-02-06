import Carousel from '../mixins/carousel';
import Ember from 'ember';
import layout from '../templates/components/twbs-carousel';

export default Ember.Component.extend(Carousel, {
  actions: {
    registerSlideComponent(slide) {
      this.get('_slides').pushObject(slide);
      return true;
    }
  },
  /**
   * Add the slide class?
   */
  classNames: ['carousel'],
  init() {
    this._super(...arguments);
    this.set('_slides', Ember.A());
  },
  layout,
  tagName: 'div',
  _initializeCarousel: Ember.on('didInsertElement', function () {
    this.$()
      .carousel(this.get('computedOptions'))
      /**
       * When the carousel slides, check if the target it is sliding to needs its image loaded.
       */
      .on('slide.bs.carousel', (event) => {
        this.get('_slides')
          .find((slide) => {
            return slide.get('elementId') === Ember.get(event, 'relatedTarget.id');
          })
          .send('loadImg');
      });
  }),
  /**
   * Initialized to an Ember.Array in `init()`.
   */
  _slides: undefined
});
