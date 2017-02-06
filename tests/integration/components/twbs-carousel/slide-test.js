import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-carousel/slide', 'Integration | Component | twbs carousel/slide', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twbs-carousel/slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twbs-carousel/slide}}
      template block text
    {{/twbs-carousel/slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
