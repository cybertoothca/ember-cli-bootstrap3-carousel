import Ember from 'ember';
import layout from '../../templates/components/twbs-carousel/-indicator-li';

export default Ember.Component.extend({
  active: Ember.computed.readOnly('slideComponent.active?'),
  attributeBindings: ['data-target', 'data-slide-to'],
  classNameBindings: ['active'],
  layout,
  slideComponent: undefined,
  tagName: 'li'
});
