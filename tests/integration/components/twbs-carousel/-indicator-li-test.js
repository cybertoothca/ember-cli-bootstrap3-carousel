import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-carousel/-indicator-li', 'Integration | Component | twbs carousel/ indicator li', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twbs-carousel/-indicator-li}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twbs-carousel/-indicator-li}}
      template block text
    {{/twbs-carousel/-indicator-li}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
