import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-carousel/slide/caption', 'Integration | Component | twbs carousel/slide/caption', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twbs-carousel/slide/caption}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twbs-carousel/slide/caption}}
      template block text
    {{/twbs-carousel/slide/caption}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
