import Ember from 'ember';
import layout from '../../../templates/components/twbs-carousel/slide/img';

export default Ember.Component.extend({
  actions: {
    loadImg() {
      if (Ember.isBlank(this.get('src'))) {
        Ember.Logger.debug('The lazy-image prescribed in a `twbs-carousel/slide/img` component is now being loaded.');
        this.set('src', this.get('lazy'));
        return true;
      }
      return false;
    }
  },
  attributeBindings: ['alt', 'crossorigin', 'height', 'ismap', 'longdesc',
    'size', 'src', 'srcset', 'tabindex', 'title', 'usemap', 'width'],
  classNames: ['twbs-carousel-slide-img'],
  /**
   * REQUIRED.
   */
  lazy: undefined,
  layout,
  /**
   * The closure function (action) to call when this `twbs-carousel/slide/img` is inserted.
   */
  register: undefined,
  /**
   * REQUIRED.
   */
  src: undefined,
  tagName: 'img',
  _invokeRegister: Ember.on('init', function () {
    if (Ember.isPresent(this.get('register'))) {
      this.get('register')(this);
    } else {
      Ember.Logger
        .warn('The `twbs-carousel/slide/img` component should have an action assigned to its `register` property.');
    }
  })
});
