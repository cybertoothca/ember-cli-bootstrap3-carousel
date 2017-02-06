import Ember from 'ember';
import layout from '../../templates/components/twbs-carousel/slide';

export default Ember.Component.extend({
  actions: {
    loadImg() {
      if (this.get('_imgComponent')) {
        this.get('_imgComponent').send('loadImg');
      }
      return true;
    },
    registerImgComponent(imgComponent) {
      this.set('_imgComponent', imgComponent);
      return true;
    }
  },
  classNames: ['twbs-carousel-slide', 'item'],
  layout,
  /**
   * The closure function to invoke when initialized.
   */
  register: undefined,
  tagName: 'div',
  /**
   * THIS carousel "slide" (or "item") will need to know about any `twbs-carousel/slide/img` because if they are lazy-
   * loaded their `src` must be toggled to the supplied lazy url.
   */
  _imgComponent: undefined,
  _invokeRegister: Ember.on('init', function () {
    if (Ember.isPresent(this.get('register'))) {
      this.get('register')(this);
    }
  })
});
