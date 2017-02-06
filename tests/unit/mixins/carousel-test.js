import Ember from 'ember';
import CarouselMixin from 'ember-cli-bootstrap3-carousel/mixins/carousel';
import { module, test } from 'qunit';

module('Unit | Mixin | carousel');

// Replace this with your real tests.
test('it works', function (assert) {
  let CarouselObject = Ember.Object.extend(CarouselMixin);
  let subject = CarouselObject.create();
  assert.ok(subject);
});
